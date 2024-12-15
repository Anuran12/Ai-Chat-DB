"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { app } from "@/Config/FirebaseConfig";
import FolderList from "@/components/Folder/FolderList";
import FileList from "@/components/File/FileList";

export default function StarredPage() {
  const { data: session } = useSession();
  const [starredFolders, setStarredFolders] = useState<any[]>([]);
  const [starredFiles, setStarredFiles] = useState<any[]>([]);
  const db = getFirestore(app);

  useEffect(() => {
    if (session?.user?.email) {
      fetchStarredItems();
    }
  }, [session]);

  const fetchStarredItems = async () => {
    const folderQuery = query(
      collection(db, "Folders"),
      where("createBy", "==", session?.user?.email),
      where("isStarred", "==", true)
    );

    const fileQuery = query(
      collection(db, "files"),
      where("createdBy", "==", session?.user?.email),
      where("isStarred", "==", true)
    );

    const [folderSnapshot, fileSnapshot] = await Promise.all([
      getDocs(folderQuery),
      getDocs(fileQuery),
    ]);

    setStarredFolders(
      folderSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
    setStarredFiles(
      fileSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Starred Items</h1>
      <div className="space-y-6">
        {starredFolders.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Folders</h2>
            <FolderList folderList={starredFolders} />
          </div>
        )}
        {starredFiles.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Files</h2>
            <FileList fileList={starredFiles} />
          </div>
        )}
        {starredFolders.length === 0 && starredFiles.length === 0 && (
          <p className="text-gray-400">No starred items yet</p>
        )}
      </div>
    </div>
  );
}
