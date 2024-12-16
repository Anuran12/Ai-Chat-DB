"use client";
import { useParentFolder } from "@/context/ParentFolderIdContext";
import { useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { app } from "@/Config/FirebaseConfig";
import { useToast } from "@/context/ShowToastContext";
import FolderList from "@/components/Folder/FolderList";
import FileList from "@/components/File/FileList";
import { useFolderContext } from "@/context/FolderContext";
import ConfirmationModal from "@/components/ConfirmationModal";

type FolderData = {
  id: string;
  name: string;
  createBy: string;
  parentFolderId: string | null;
};
interface File {
  id: number;
  name: string;
  type: string;
  size: number;
  modifiedAt: string;
  imageUrl: string;
}

export default function FolderDetails() {
  const router = useRouter();
  const db = getFirestore(app);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const name = searchParams.get("name");
  const id = pathname.split("/folder/")[1]?.split("?")[0];
  const { setParentFolderId } = useParentFolder();
  const { data: session } = useSession();
  const [folderList, setFolderList] = useState<FolderData[]>([]);
  const [fileList, setFileList] = useState<File[]>([]);
  const { setShowToastMsg } = useToast();
  const { refreshFolders } = useFolderContext();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    setParentFolderId(id);
    if (session?.user) {
      const fetchFolders = async () => {
        await getFolderList();
      };
      fetchFolders();
      const fetchFiles = async () => {
        await getFileList();
      };
      fetchFiles();
    }
  }, [session, refreshFolders]);

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

  const getFileList = async () => {
    setFileList([]);
    const q = query(
      collection(db, "files"),
      where("parentFolderId", "==", id),
      where("createdBy", "==", session?.user?.email)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      const fileData = doc.data() as File;
      setFileList((fileList) => [...fileList, fileData]);
    });
  };
  const deleteFolder = async () => {
    await deleteDoc(doc(db, "Folders", id)).then(() => {
      setShowToastMsg({
        message: "Folder Deleted !",
        type: "success",
      });
      router.back();
    });
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[20px] font-bold">{name}</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/chats/new")}
            className="flex items-center gap-2 bg-[#4A90A4] px-4 py-2 rounded-full hover:bg-[#4A90A4]/90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.946-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25z"
                clipRule="evenodd"
              />
            </svg>
            Start Chat
          </button>
          <button
            onClick={() => setShowDeleteConfirmation(true)}
            className="text-red-500 hover:scale-110 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
      {folderList.length > 0 ? (
        <FolderList folderList={folderList} isBig={false} />
      ) : (
        <h2 className="text-gray-400 text-[16px] mt-5">No Folder Found</h2>
      )}
      <FileList fileList={fileList} />
      <ConfirmationModal
        isOpen={showDeleteConfirmation}
        onClose={() => setShowDeleteConfirmation(false)}
        onConfirm={() => deleteFolder()}
        title="Delete Folder"
        message={`Are you sure you want to delete "${name}"? This will delete all files and subfolders within it.`}
      />
    </div>
  );
}
