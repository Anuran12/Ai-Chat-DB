import { app } from "@/Config/FirebaseConfig";
import { useToast } from "@/context/ShowToastContext";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import moment from "moment";
import React from "react";

interface File {
  id: number;
  name: string;
  type: string;
  size: number;
  modifiedAt: string;
  imageUrl: string;
}

interface FileItemProps {
  file: File;
}

const getFileType = (type: string): string => {
  type = type.toLowerCase();
  if (["png", "jpg", "jpeg", "gif"].includes(type)) {
    return "Images";
  } else if (["mp4", "mov", "avi"].includes(type)) {
    return "Videos";
  } else if (["pdf", "doc", "docx", "txt"].includes(type)) {
    return "Documents";
  } else {
    return "Others";
  }
};

const fileTypeIcons: { [key: string]: { path: string; background: string } } = {
  Images: {
    path: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    background: "bg-green-100",
  },
  Videos: {
    path: "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z",
    background: "bg-blue-100",
  },
  Documents: {
    path: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    background: "bg-yellow-100",
  },
  Others: {
    path: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z",
    background: "bg-red-100",
  },
};

export default function FileItem({ file }: FileItemProps) {
  const db = getFirestore(app);
  const { setShowToastMsg } = useToast();
  const fileType = getFileType(file.type);

  const deleteFile = async (file: File) => {
    await deleteDoc(doc(db, "files", file.id.toString())).then(() => {
      setShowToastMsg({
        message: "File Deleted!!!",
        type: "success",
      });
    });
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 justify-between hover:bg-gray-100 p-3 rounded-md group">
      <div className="flex items-center gap-3 mb-2 md:mb-0">
        <div
          className={`p-1.5 rounded-lg ${
            fileTypeIcons[fileType]?.background ||
            fileTypeIcons.Others.background
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={fileTypeIcons[fileType]?.path || fileTypeIcons.Others.path}
            />
          </svg>
        </div>
        <h2
          className="text-sm md:text-[15px] truncate flex-1"
          onClick={() => window.open(file.imageUrl)}
        >
          {file.name}
        </h2>
      </div>

      <div className="flex items-center justify-between md:justify-end md:gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="md:hidden text-xs text-gray-500">Modified:</span>
          <span className="hidden md:block">
            {moment(file.modifiedAt).format("MMMM DD, YYYY")}
          </span>
          <span className="md:hidden">
            {moment(file.modifiedAt).format("MM/DD/YY")}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="md:hidden text-xs text-gray-500">Size:</span>
          <span>{(file.size / 1024 ** 2).toFixed(2) + " MB"}</span>
          <button
            onClick={() => deleteFile(file)}
            className="ml-2 p-1 hover:bg-red-50 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-red-500 hover:scale-110 transition-all"
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
    </div>
  );
}
