import React, { useEffect, useState } from "react";
import { app } from "@/Config/firebaseConfig";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";

interface CreateFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateFolderModal({
  isOpen,
  onClose,
}: CreateFolderModalProps) {
  const docId = Date.now().toString();
  const { data: session } = useSession();
  const [folderName, setFolderName] = useState("");
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({
    message: "",
    visible: false,
  });

  const db = getFirestore(app);

  const onCreate = async () => {
    console.log(folderName);
    await setDoc(doc(db, "Folders", docId), {
      name: folderName,
      id: docId,
      createBy: session?.user?.email,
      //   parentFolderId: parentFolderId,
    });
    // setShowToastMsg("Folder Created!");
    showToast(`Folder "${folderName}" created successfully`);
    onClose();
  };
  const showToast = (message: string) => {
    setToast({ message, visible: true });
  };

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast({ message: "", visible: false });
      }, 3000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  const handleClose = () => {
    setFolderName("");
    onClose();
  };

  return (
    <div>
      <div
        className={`inset-0 bg-black bg-opacity-50 flex items-center justify-center ${
          isOpen ? "fixed" : "hidden"
        }`}
      >
        <div className="bg-[#1C1E26] p-6 rounded-lg w-80">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Create New Folder</h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <input
              type="text"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              placeholder="Folder name"
              className="w-full p-2 mb-4 bg-[#0F1117] border border-gray-600 rounded text-white"
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
              >
                Cancel
              </button>
              <button
                onClick={onCreate}
                className="px-4 py-2 bg-[#4A90A4] hover:bg-[#4A90A4]/90 rounded"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      {toast.visible && (
        <div
          className="fixed z-50 bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg flex items-center"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
}
