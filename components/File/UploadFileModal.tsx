import { doc, getFirestore, setDoc } from "firebase/firestore";
import React from "react";
import { app } from "../../Config/FirebaseConfig";
import { useSession } from "next-auth/react";
import { useParentFolder } from "../../context/ParentFolderIdContext";
import { useToast } from "../../context/ShowToastContext";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

interface CreateFileModalProps {
  isOpen: boolean;
  onClose: () => void;
}
// interface FileData {
//   name: string;
//   type: string;
//   size: number;
//   modifiedAt: number;
//   createdBy: string | null | undefined;
//   parentFolderId: string;
//   imageUrl: string;
//   id: number;
// }

function UploadFileModal({ isOpen, onClose }: CreateFileModalProps) {
  const { data: session } = useSession();
  const { parentFolderId } = useParentFolder();
  const { setShowToastMsg } = useToast();

  const docId = Date.now();
  const db = getFirestore(app);
  const storage = getStorage(app);

  const onFileUpload = async (file: File | null | undefined) => {
    if (file) {
      if (file?.size > 1000000) {
        setShowToastMsg({
          message: "File is too large",
          type: "error",
        });
        return;
      }
      const fileRef = ref(storage, "file/" + file.name);

      uploadBytes(fileRef, file)
        .then((snapshot) => {
          console.log("Uploaded a blob or file!");
        })
        .then((resp) => {
          getDownloadURL(fileRef).then(async (downloadURL) => {
            console.log("File available at", downloadURL);
            await setDoc(doc(db, "files", docId.toString()), {
              name: file.name,
              type: file.name.split(".")[1],
              size: file.size,
              modifiedAt: file.lastModified,
              createdBy: session?.user?.email,
              parentFolderId: parentFolderId,
              imageUrl: downloadURL,
              id: docId,
            });
            onClose();
            setShowToastMsg({
              message: "File Uploaded Successfully!",
              type: "success",
            });
          });
        });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    onFileUpload(file);
  };

  return (
    <div>
      <div
        className={`inset-0 bg-black bg-opacity-50 flex items-center justify-center ${
          isOpen ? "fixed" : "hidden"
        }`}
      >
        <form method="dialog" className="modal-box p-9 items-center w-[360px]">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div
            className="w-full items-center 
        flex flex-col justify-center gap-3"
          >
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
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
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadFileModal;
