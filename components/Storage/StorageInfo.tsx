"use client";
import { app } from "@/Config/FirebaseConfig";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

// Define proper interfaces
interface File {
  id: number;
  name: string;
  type: string;
  size: number;
  modifiedAt: string;
  imageUrl: string;
  createdBy?: string;
}

// Separate storage service
const StorageService = {
  getStorageByType: (data: File[], types: string[]): number => {
    const result = data.filter((item) => types.includes(item.type));
    const totalSize = result.reduce((sum, item) => sum + item.size, 0);
    return Number((totalSize / 1024 ** 2).toFixed(2));
  },
};

export default function StorageInfo() {
  const { data: session } = useSession();
  const db = getFirestore(app);
  const [totalSizeUsed, setTotalSizeUsed] = useState<number>(0);
  const [imageSize, setImageSize] = useState<number>(0);
  const [fileList, setFileList] = useState<File[]>([]);

  useEffect(() => {
    if (session?.user?.email) {
      getAllFiles();
    }
  }, [session]);

  useEffect(() => {
    const newImageSize = StorageService.getStorageByType(fileList, [
      "png",
      "jpg",
    ]);
    setImageSize(newImageSize);
  }, [fileList]);

  const getAllFiles = async () => {
    try {
      const q = query(
        collection(db, "files"),
        where("createdBy", "==", session?.user?.email)
      );
      const querySnapshot = await getDocs(q);

      const files: File[] = [];
      let total = 0;

      querySnapshot.forEach((doc) => {
        const fileData = doc.data() as File;
        total += fileData.size;
        files.push(fileData);
      });

      setFileList(files);
      setTotalSizeUsed(Number((total / 1024 ** 2).toFixed(2)));
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  // Calculate percentages for progress bars
  const totalStorageLimit = 50; // MB
  const imagePercentage = (imageSize / totalStorageLimit) * 100;
  const otherPercentage =
    ((totalSizeUsed - imageSize) / totalStorageLimit) * 100;

  return (
    <div className="mt-4 md:mt-7 px-2 md:px-0">
      <h2 className="text-[18px] md:text-[22px] font-bold">
        {totalSizeUsed.toFixed(2)}
        <span className="text-[12px] md:text-[14px] font-medium">
          {" "}
          used of{" "}
        </span>
        {totalStorageLimit} MB
      </h2>
      <div className="w-full bg-gray-200 h-2 md:h-2.5 flex mt-2">
        {imageSize > 0 && (
          <div
            className="bg-blue-600 h-2.5"
            style={{ width: `${imagePercentage}%` }}
            title={`Images: ${imageSize.toFixed(2)} MB`}
          />
        )}
        {totalSizeUsed - imageSize > 0 && (
          <div
            className="bg-green-600 h-2.5"
            style={{ width: `${otherPercentage}%` }}
            title={`Other files: ${(totalSizeUsed - imageSize).toFixed(2)} MB`}
          />
        )}
      </div>
    </div>
  );
}
