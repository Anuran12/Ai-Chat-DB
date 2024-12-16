import React, { useEffect, useState } from "react";
import StorageDetailItem from "./StorageDetailItem";
import { useSession } from "next-auth/react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "@/Config/FirebaseConfig";

// Define the type for storage items
type StorageItem = {
  type: string;
  totalFile: number;
  size: string;
  logo: string;
};

// Add this interface at the top of the file
interface FileData {
  type: string;
  size: number;
  createdBy?: string;
  name: string;
  id: string;
  modifiedAt: string;
  imageUrl?: string;
  [key: string]: string | number | undefined;
}

export default function StorageDetailList() {
  const { data: session } = useSession();
  const [storageList, setStorageList] = useState<StorageItem[]>([]); // Explicitly define the type
  const db = getFirestore(app);

  useEffect(() => {
    if (session?.user?.email) {
      getStorageStats();
    }
  }, [session]);

  const getStorageStats = async () => {
    try {
      const q = query(
        collection(db, "files"),
        where("createdBy", "==", session?.user?.email)
      );
      const querySnapshot = await getDocs(q);
      const files = querySnapshot.docs.map((doc) => doc.data() as FileData);

      // Group files by type and calculate stats
      const stats = {
        Images: { files: [] as FileData[], size: 0 },
        Videos: { files: [] as FileData[], size: 0 },
        Documents: { files: [] as FileData[], size: 0 },
        Links: { files: [] as FileData[], size: 0 },
        Others: { files: [] as FileData[], size: 0 },
      };

      files.forEach((file) => {
        const type = file.type.toLowerCase();
        if (["png", "jpg", "jpeg", "gif"].includes(type)) {
          stats.Images.files.push(file);
          stats.Images.size += file.size;
        } else if (["mp4", "mov", "avi"].includes(type)) {
          stats.Videos.files.push(file);
          stats.Videos.size += file.size;
        } else if (["pdf", "doc", "docx", "txt"].includes(type)) {
          stats.Documents.files.push(file);
          stats.Documents.size += file.size;
        } else if (type.startsWith("link-")) {
          // Modified this line to check for all link types
          stats.Links.files.push(file);
          stats.Links.size += file.size || 0; // Added fallback for size
        } else {
          stats.Others.files.push(file);
          stats.Others.size += file.size;
        }
      });

      const storageData: StorageItem[] = [
        {
          type: "Images",
          totalFile: stats.Images.files.length,
          size: `${(stats.Images.size / (1024 * 1024)).toFixed(2)} MB`,
          logo: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
        },
        {
          type: "Videos",
          totalFile: stats.Videos.files.length,
          size: `${(stats.Videos.size / (1024 * 1024)).toFixed(2)} MB`,
          logo: "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z",
        },
        {
          type: "Documents",
          totalFile: stats.Documents.files.length,
          size: `${(stats.Documents.size / (1024 * 1024)).toFixed(2)} MB`,
          logo: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
        },
        {
          type: "Links",
          totalFile: stats.Links.files.length,
          size: `${(stats.Links.size / (1024 * 1024)).toFixed(2)} MB`,
          logo: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244", // Link icon path
        },
        {
          type: "Others",
          totalFile: stats.Others.files.length,
          size: `${(stats.Others.size / (1024 * 1024)).toFixed(2)} MB`,
          logo: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z",
        },
      ];

      setStorageList(storageData);
    } catch (error) {
      console.error("Error fetching storage stats:", error);
    }
  };

  return (
    <>
      {storageList.map((item, index) => (
        <StorageDetailItem item={item} key={index} />
      ))}
    </>
  );
}
