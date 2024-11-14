import React from "react";

interface FolderItemProps {
  folder: {
    id: string;
    name: string;
  };
}

export default function FolderItem({ folder }: FolderItemProps) {
  return (
    <div
      className={`w-full
    flex flex-col justify-center 
    items-center h-[120px]
    rounded-lg p-5 bg-white/10
    hover:scale-105 hover:shadow-md
    cursor-pointer `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#4A90A4"
        className="size-16"
      >
        <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
      </svg>

      <h2
        className="line-clamp-2
        text-[12px] text-center"
      >
        {folder.name}
      </h2>
    </div>
  );
}
