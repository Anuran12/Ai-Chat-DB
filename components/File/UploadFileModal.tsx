import React, { useState } from "react";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useParentFolder } from "../../context/ParentFolderIdContext";
import { useToast } from "../../context/ShowToastContext";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "@/Config/FirebaseConfig";

interface CreateFileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function UploadFileModal({ isOpen, onClose }: CreateFileModalProps) {
  const { data: session } = useSession();
  const { parentFolderId } = useParentFolder();
  const { setShowToastMsg } = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLinkMode, setIsLinkMode] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");

  const db = getFirestore(app);
  const storage = getStorage(app);

  const validateFile = (file: File): boolean => {
    const allowedTypes = {
      // Documents
      "application/pdf": true,
      "application/msword": true,
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        true,
      "text/csv": true,
      "text/plain": true,
      "text/markdown": true,
      "application/vnd.ms-powerpoint": true,
      "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        true,
      "application/epub+zip": true,
      "text/html": true,
      "application/vnd.oasis.opendocument.text": true,

      // Media
      "video/mp4": true,
      "video/x-msvideo": true,
      "video/quicktime": true,
      "audio/mpeg": true,
      "audio/wav": true,

      // Images
      "image/jpeg": true,
      "image/png": true,
      "image/gif": true,
    };
    const maxFileSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes[file.type as keyof typeof allowedTypes]) {
      setShowToastMsg({ message: "Unsupported file type.", type: "error" });
      return false;
    }

    if (file.size > maxFileSize) {
      setShowToastMsg({ message: "File is too large.", type: "error" });
      return false;
    }

    return true;
  };

  const validateLink = (url: string): { isValid: boolean; type: string } => {
    try {
      const parsedUrl = new URL(url);

      // YouTube
      if (
        parsedUrl.hostname.includes("youtube.com") ||
        parsedUrl.hostname.includes("youtu.be")
      ) {
        return { isValid: true, type: "youtube" };
      }

      // Arxiv
      if (parsedUrl.hostname.includes("arxiv.org")) {
        return { isValid: true, type: "arxiv" };
      }

      // General web URLs
      if (parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:") {
        return { isValid: true, type: "web" };
      }

      return { isValid: false, type: "unknown" };
    } catch {
      return { isValid: false, type: "unknown" };
    }
  };

  const onLinkUpload = async () => {
    if (!linkUrl) return;

    const { isValid, type } = validateLink(linkUrl);
    if (!isValid) {
      setShowToastMsg({ message: "Invalid URL format", type: "error" });
      return;
    }

    const docId = Date.now();
    try {
      await setDoc(doc(db, "files", docId.toString()), {
        name: new URL(linkUrl).hostname,
        type: `link-${type}`,
        url: linkUrl,
        createdBy: session?.user?.email,
        parentFolderId: parentFolderId,
        id: docId,
      });

      setShowToastMsg({ message: "Link added successfully!", type: "success" });
      setLinkUrl("");
      onClose();
    } catch (error) {
      console.error("Error adding link", error);
      setShowToastMsg({ message: "Error adding link", type: "error" });
    }
  };

  const onFileUpload = async (file: File) => {
    if (!file || !validateFile(file)) return;

    setIsUploading(true);
    setUploadProgress(0);

    const docId = Date.now();
    const fileRef = ref(storage, `file/${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    try {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(Math.round(progress));
        },
        (error) => {
          console.error("Upload error:", error);
          setShowToastMsg({
            message: "Upload failed. Please try again.",
            type: "error",
          });
          setIsUploading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(fileRef);

          await setDoc(doc(db, "files", docId.toString()), {
            name: file.name,
            type: file.name.split(".").pop(),
            size: file.size,
            modifiedAt: file.lastModified,
            createdBy: session?.user?.email,
            parentFolderId: parentFolderId,
            imageUrl: downloadURL,
            id: docId,
          });

          setShowToastMsg({
            message: "File uploaded successfully!",
            type: "success",
          });
          setIsUploading(false);
          setUploadProgress(0);
          onClose();
        }
      );
    } catch (error) {
      console.error("Unexpected error during upload:", error);
      setShowToastMsg({
        message: "An unexpected error occurred.",
        type: "error",
      });
      setIsUploading(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div
      className={`inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${
        isOpen ? "fixed" : "hidden"
      }`}
      role="dialog"
      aria-modal="true"
    >
      <form
        method="dialog"
        className="modal-box p-9 items-center w-[360px] bg-black rounded-lg relative"
      >
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
          disabled={isUploading}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="flex gap-2 mb-4">
          <button
            type="button"
            onClick={() => setIsLinkMode(false)}
            className={`px-4 py-2 rounded ${
              !isLinkMode ? "bg-[#4A90A4]" : "bg-gray-700"
            }`}
          >
            Upload File
          </button>
          <button
            type="button"
            onClick={() => setIsLinkMode(true)}
            className={`px-4 py-2 rounded ${
              isLinkMode ? "bg-[#4A90A4]" : "bg-gray-700"
            }`}
          >
            Add Link
          </button>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-3">
          {isLinkMode ? (
            <div className="flex flex-col gap-4 w-full">
              <input
                type="url"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                placeholder="Enter URL"
                className="w-full p-2 rounded bg-gray-700"
              />
              <button
                type="button"
                onClick={onLinkUpload}
                className="bg-[#4A90A4] px-4 py-2 rounded"
              >
                Add Link
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 relative ${
                  isUploading ? "pointer-events-none" : ""
                }`}
              >
                {isUploading ? (
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-loader-circle"
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    <div className="flex flex-col items-center">
                      <p className="text-sm text-gray-500">
                        Uploading... {uploadProgress}%
                      </p>
                      <div className="w-48 h-2 bg-gray-200 rounded-full mt-2">
                        <div
                          className="h-full bg-blue-500 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Supported files: Documents (PDF, DOC, DOCX, etc), Media
                      (MP4, MP3, etc), Images (PNG, JPG, etc)
                      <br />
                      Max size: 5MB
                    </p>
                  </div>
                )}
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  disabled={isUploading}
                />
              </label>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default UploadFileModal;
