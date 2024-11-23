import { createContext, useContext } from "react";

type ParentFolderContextType = {
  parentFolderId: string | null;
  setParentFolderId: (id: string | null) => void;
};

export const ParentFolderIdContext = createContext<
  ParentFolderContextType | undefined
>(undefined);

export function useParentFolder() {
  const context = useContext(ParentFolderIdContext);
  if (context === undefined) {
    throw new Error(
      "useParentFolder must be used within a ParentFolderIdProvider"
    );
  }
  return context;
}
