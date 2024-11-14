"use client";
import React, { useState } from "react";
import FolderItem from "./FolderItem";
import FolderItemSmall from "./FolderItemSmall";
import { useRouter } from "next/navigation";

interface FolderItemType {
  id: string;
  name: string;
}
interface FolderListProps {
  isBig?: boolean;
  folderList: FolderItemType[];
}

export default function FolderList({
  isBig = true,
  folderList,
}: FolderListProps) {
  const [activeFolder, setActiveFolder] = useState<number | undefined>();
  const router = useRouter();

  // const folderList = [
  //   {
  //     id: 1,
  //     name: "Folder 1 to Test Big Text",
  //   },
  //   {
  //     id: 2,
  //     name: "Folder 2",
  //   },
  //   {
  //     id: 3,
  //     name: "Folder 3",
  //   },
  //   {
  //     id: 4,
  //     name: "Folder 4",
  //   },
  //   {
  //     id: 5,
  //     name: "Folder 4",
  //   },
  // ];

  const onFolderClick = (index: number, item: FolderItemType) => {
    setActiveFolder(index);
    // Constructing the path with query parameters inline
    router.push(`/folder/${item.id}?name=${encodeURIComponent(item.name)}`);
  };
  return (
    <div className="p-5 mr-4 bg-[#010314] rounded-[30px]">
      {isBig ? (
        <h2
          className="text-17px] 
    font-bold 
    items-center"
        >
          Recent Folders
          <span
            className="float-right
    text-blue-400 font-normal
    text-[13px]"
          >
            View All
          </span>
        </h2>
      ) : null}
      {isBig ? (
        <div
          className="grid grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5 mt-3
    gap-4"
        >
          {folderList.map((item, index) => (
            <div key={index} onClick={() => onFolderClick(index, item)}>
              <FolderItem folder={item} />
            </div>
          ))}
        </div>
      ) : (
        <div
          className=" 
  "
        >
          {folderList.map((item, index) => (
            <div key={index} onClick={() => onFolderClick(index, item)}>
              <FolderItemSmall folder={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
