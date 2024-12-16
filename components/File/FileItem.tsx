import { app } from "@/Config/FirebaseConfig";
import { useToast } from "@/context/ShowToastContext";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import moment from "moment";
import React, { useState } from "react";
import StarButton from "../StarButton";
import ConfirmationModal from "@/components/ConfirmationModal";

interface File {
  id: number;
  name: string;
  type: string;
  size?: number;
  modifiedAt?: string;
  imageUrl?: string;
  url?: string;
  isStarred?: boolean;
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

const isLink = (type: string): boolean => type.startsWith("link-");

const getLinkIcon = (type: string) => {
  switch (type) {
    case "link-youtube":
      return "M21.582 7.15c-.239-2.79-2.387-4.824-5.195-5.06C12.48 1.767 10.706 1.67 8.907 1.67h-1.83c-1.8 0-3.576.098-5.483.42-2.808.236-4.955 2.27-5.195 5.06C1.153 8.83 1.153 10.594 1.153 12c0 1.406 0 3.17.246 4.85.24 2.79 2.387 4.824 5.195 5.06 1.907.322 3.683.42 5.483.42h1.83c1.8 0 3.576-.098 5.483-.42 2.808-.236 4.956-2.27 5.195-5.06.246-1.68.246-3.444.246-4.85 0-1.406 0-3.17-.246-4.85zM9.415 15.61V8.39c0-.477.504-.784.92-.563l6.251 3.61c.416.24.416.844 0 1.084l-6.251 3.61c-.416.24-.92-.085-.92-.522z";
    case "link-arxiv":
      return "M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z";
    default:
      return "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1";
  }
};

export default function FileItem({ file }: FileItemProps) {
  const db = getFirestore(app);
  const { setShowToastMsg } = useToast();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const deleteFile = async (file: File) => {
    await deleteDoc(doc(db, "files", file.id.toString())).then(() => {
      setShowToastMsg({
        message: "File Deleted!!!",
        type: "success",
      });
    });
  };

  const handleClick = () => {
    if (isLink(file.type) && file.url) {
      window.open(file.url, "_blank");
    } else if (file.imageUrl) {
      window.open(file.imageUrl);
    }
  };

  return (
    <>
      <ConfirmationModal
        isOpen={showDeleteConfirmation}
        onClose={() => setShowDeleteConfirmation(false)}
        onConfirm={() => deleteFile(file)}
        title="Delete File"
        message={`Are you sure you want to delete "${file.name}"?`}
      />
      <div
        onClick={handleClick}
        className="relative flex flex-col md:grid md:grid-cols-2 justify-between items-center hover:bg-white/10 p-3 rounded-md group cursor-pointer"
      >
        <div className="flex items-center gap-3 mb-2 md:mb-0">
          <div
            className={`p-1.5 rounded-lg ${
              isLink(file.type)
                ? "bg-[#4A90A4]/20"
                : fileTypeIcons[getFileType(file.type)]?.background ||
                  fileTypeIcons.Others.background
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={isLink(file.type) ? "#4A90A4" : "black"}
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isLink(file.type)
                    ? getLinkIcon(file.type)
                    : fileTypeIcons[getFileType(file.type)]?.path ||
                      fileTypeIcons.Others.path
                }
              />
            </svg>
          </div>
          <h2 className="text-sm md:text-[15px] truncate flex-1">
            {file.name}
          </h2>
        </div>
        <div className="grid grid-cols-3 place-items-start">
          {!isLink(file.type) ? (
            <>
              <h2>{moment(file.modifiedAt).format("MMMM DD, YYYY")}</h2>
              <h2>{((file.size ?? 0) / 1024 ** 2).toFixed(2)} MB</h2>
            </>
          ) : (
            <>
              <h2>{moment(file.modifiedAt).format("MMMM DD, YYYY")}</h2>
              <h2 className="text-sm text-gray-400">
                {file.type.replace("link-", "").toUpperCase()}
              </h2>
            </>
          )}
          <div className="flex gap-2 items-center">
            <StarButton
              itemId={file.id.toString()}
              itemType="file"
              isStarred={file.isStarred || false}
              onStarChange={(isStarred) => {
                file.isStarred = isStarred;
              }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowDeleteConfirmation(true);
              }}
              className="hover:text-red-500"
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
      </div>
    </>
  );
}
