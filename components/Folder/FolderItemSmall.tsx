import React from "react";
import StarButton from "../StarButton";

interface FolderItemProps {
  folder: {
    id: string;
    name: string;
    isStarred?: boolean;
  };
}

export default function FolderItemSmall({ folder }: FolderItemProps) {
  return (
    <div className="relative flex items-center justify-between hover:bg-white/10 p-2 rounded-md cursor-pointer">
      <div className="flex gap-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
        </svg>
        <h1>{folder.name}</h1>
      </div>

      <div className="flex items-center">
        <StarButton
          itemId={folder.id}
          itemType="folder"
          isStarred={folder.isStarred || false}
          onStarChange={(isStarred) => {
            folder.isStarred = isStarred;
          }}
        />
      </div>
    </div>
  );
}
