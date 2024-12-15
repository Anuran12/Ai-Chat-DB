import { useToast } from "@/context/ShowToastContext";
import { useState } from "react";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
import { app } from "@/Config/FirebaseConfig";

interface StarButtonProps {
  itemId: string;
  itemType: "file" | "folder";
  isStarred: boolean;
  onStarChange: (isStarred: boolean) => void;
}

export default function StarButton({
  itemId,
  itemType,
  isStarred,
  onStarChange,
}: StarButtonProps) {
  const [loading, setLoading] = useState(false);
  const db = getFirestore(app);
  const { setShowToastMsg } = useToast();

  const toggleStar = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setLoading(true);

    try {
      const collectionName = itemType === "file" ? "files" : "Folders";
      const docRef = doc(db, collectionName, itemId);
      await updateDoc(docRef, {
        isStarred: !isStarred,
      });
      onStarChange(!isStarred);
      setShowToastMsg({
        message: !isStarred
          ? "Item starred successfully!"
          : "Item unstarred successfully!",
        type: "success",
      });
    } catch (error) {
      console.error("Error updating star status:", error);
      setShowToastMsg({
        message: "Failed to update star status",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={toggleStar}
      disabled={loading}
      className={`absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200/10 ${
        loading ? "opacity-50" : ""
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={isStarred ? "#4A90A4" : "none"}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          stroke={isStarred ? "#4A90A4" : "white"}
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    </button>
  );
}
