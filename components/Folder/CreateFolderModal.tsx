import React, { useState } from "react";
import { app } from "@/Config/firebaseConfig";
import { doc, getFirestore, setDoc } from "firebase/firestore";

interface CreateFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateFolderModal({
  isOpen,
  onClose,
}: CreateFolderModalProps) {
  const [newFolderName, setNewFolderName] = useState("");

  const db = getFirestore(app);

  const createFolder = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the folder creation logic
    console.log("Creating new folder:", newFolderName);
    onClose();
  };

  const handleClose = () => {
    setNewFolderName("");
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center`}
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
        <form onSubmit={createFolder}>
          <input
            type="text"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
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
              type="submit"
              className="px-4 py-2 bg-[#4A90A4] hover:bg-[#4A90A4]/90 rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
