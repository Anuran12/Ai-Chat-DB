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

interface FolderType {
  id: string;
  name: string;
  parentFolderId: string | null;
}

export default function FolderTreeView() {
  const [folders, setFolders] = useState<FolderType[]>([]);
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
      foldersData.push(doc.data() as FolderType);
    });
    setFolders(foldersData);
  };

  const handleFolderClick = (folder: FolderType) => {
    router.push(`/folder/${folder.id}?name=${encodeURIComponent(folder.name)}`);
  };

  return (
    <div className="space-y-1">
      {folders.map((folder) => (
        <div
          key={folder.id}
          onClick={() => handleFolderClick(folder)}
          className="flex items-center gap-2 p-2 hover:bg-white/10 rounded-lg cursor-pointer text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15Z" />
          </svg>
          <span className="truncate">{folder.name}</span>
        </div>
      ))}
    </div>
  );
}
