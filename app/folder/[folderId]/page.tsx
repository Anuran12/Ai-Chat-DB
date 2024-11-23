"use client";
import { useParentFolder } from "@/context/ParentFolderIdContext";
import { useSession } from "next-auth/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { app } from "@/Config/FirebaseConfig";
import { useToast } from "@/context/ShowToastContext";

type FolderData = {
  id: string;
  name: string;
  createBy: string;
  parentFolderId: string | null;
};

export default function FolderDetails() {
  const db = getFirestore(app);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const name = searchParams.get("name");
  const id = pathname.split("/folder/")[1]?.split("?")[0];
  const { parentFolderId, setParentFolderId } = useParentFolder();
  const { data: session } = useSession();
  const [folderList, setFolderList] = useState<FolderData[]>([]);
  const { showToastMsg } = useToast();

  const getFolderList = async () => {
    if (!session?.user?.email || !id) return;

    try {
      setFolderList([]);
      const q = query(
        collection(db, "Folders"),
        where("createBy", "==", session.user.email),
        where("parentFolderId", "==", id)
      );

      const querySnapshot = await getDocs(q);
      const folders: FolderData[] = [];

      querySnapshot.forEach((doc) => {
        // Include both the document data and the document ID
        folders.push({
          ...doc.data(),
          id: doc.id, // Add the document ID here
        } as FolderData);
      });

      setFolderList(folders);
    } catch (error) {
      console.error("Error fetching folders:", error);
    }
  };
  useEffect(() => {
    setParentFolderId(id);
    if (session || showToastMsg != null) {
      setFolderList([]);
      //   setFileList([]);
      getFolderList();
      // getFileList();
    }
  }, [id, session, showToastMsg]);

  //   useEffect(() => {
  //     if (session?.user?.email && id) {
  //       getFolderList();
  //     }
  //   }, [session, id]);

  return (
    <div className="p-6">
      <div className="space-y-4">
        <div className="text-lg font-medium">Folder Details</div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="font-medium">Name:</span>
            <span>{name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium">ID:</span>
            <span>{id}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium">Parent Folder:</span>
            <span>{parentFolderId || "Root"}</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="font-medium mb-3">Subfolders</div>
          {folderList.length > 0 ? (
            <div className="space-y-2">
              {folderList.map((folder) => (
                <div
                  key={folder.id}
                  className="p-3 bg-gray-800 rounded-lg flex justify-between items-center"
                >
                  <span>{folder.name}</span>
                  <span className="text-gray-400 text-sm">ID: {folder.id}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-400">No subfolders found</div>
          )}
        </div>
      </div>
    </div>
  );
}
