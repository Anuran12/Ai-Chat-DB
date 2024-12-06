import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { app } from "@/Config/FirebaseConfig";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface FolderType {
  id: string;
  name: string;
  parentFolderId: string | null;
  subFolders?: FolderType[];
}

export default function FolderTreeView() {
  const [folders, setFolders] = useState<FolderType[]>([]);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set()
  );
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const { data: session } = useSession();
  const router = useRouter();
  const db = getFirestore(app);

  useEffect(() => {
    if (session?.user?.email) {
      fetchFolders();
    }
  }, [session]);

  const fetchFolders = async () => {
    const q = query(
      collection(db, "Folders"),
      where("createBy", "==", session?.user?.email)
    );

    const querySnapshot = await getDocs(q);
    const foldersData: FolderType[] = [];
    querySnapshot.forEach((doc) => {
      foldersData.push({ ...(doc.data() as FolderType), id: doc.id });
    });

    // Organize folders into tree structure
    const folderTree = buildFolderTree(foldersData);
    setFolders(folderTree);
  };

  const buildFolderTree = (flatFolders: FolderType[]): FolderType[] => {
    const folderMap = new Map<string, FolderType>();
    const rootFolders: FolderType[] = [];

    // First pass: create folder objects with empty subFolders arrays
    flatFolders.forEach((folder) => {
      folderMap.set(folder.id, { ...folder, subFolders: [] });
    });

    // Second pass: build the tree structure
    flatFolders.forEach((folder) => {
      const folderWithSubs = folderMap.get(folder.id)!;
      if (folder.parentFolderId && folderMap.has(folder.parentFolderId)) {
        // Add to parent's subFolders
        const parent = folderMap.get(folder.parentFolderId)!;
        parent.subFolders!.push(folderWithSubs);
      } else {
        // Add to root level
        rootFolders.push(folderWithSubs);
      }
    });

    return rootFolders;
  };

  const toggleFolder = (e: React.MouseEvent, folderId: string) => {
    e.stopPropagation(); // Prevent folder navigation when clicking arrow
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(folderId)) {
        next.delete(folderId);
      } else {
        next.add(folderId);
      }
      return next;
    });
  };

  const handleFolderClick = (folder: FolderType) => {
    setSelectedFolder(folder.id);
    router.push(`/folder/${folder.id}?name=${encodeURIComponent(folder.name)}`);
  };

  const renderFolder = (folder: FolderType, level: number = 0) => {
    const isExpanded = expandedFolders.has(folder.id);
    const hasSubFolders = folder.subFolders && folder.subFolders.length > 0;
    const isSelected = selectedFolder === folder.id;

    return (
      <div key={folder.id} style={{ marginLeft: `${level * 16}px` }}>
        <div
          className={`flex items-center gap-1 p-2 hover:bg-white/10 rounded-lg cursor-pointer text-sm group
            ${isSelected ? "bg-white/10" : ""}`}
          onClick={() => handleFolderClick(folder)}
        >
          <div className="w-4 h-4 flex items-center justify-center">
            {hasSubFolders && (
              <button
                onClick={(e) => toggleFolder(e, folder.id)}
                className="hover:bg-white/20 rounded"
              >
                {isExpanded ? (
                  <ChevronDownIcon className="w-4 h-6" />
                ) : (
                  <ChevronRightIcon className="w-4 h-6" />
                )}
              </button>
            )}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-[#4A90A4]"
          >
            <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15Z" />
          </svg>
          <span className="truncate flex-1">{folder.name}</span>
          <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100">
            {folder.subFolders?.length || 0}
          </span>
        </div>
        {isExpanded && folder.subFolders && (
          <div className="ml-2">
            {folder.subFolders.map((subFolder) =>
              renderFolder(subFolder, level + 1)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-1">
      {folders.map((folder) => renderFolder(folder))}
    </div>
  );
}
