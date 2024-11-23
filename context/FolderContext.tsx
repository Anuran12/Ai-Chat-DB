"use client";
import React, { createContext, useContext, useState } from "react";

type FolderContextType = {
  refreshFolders: () => void;
};

const FolderContext = createContext<FolderContextType | undefined>(undefined);

export const FolderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [refreshCount, setRefreshCount] = useState(0);

  const refreshFolders = () => {
    // This triggers a state change that can be used to re-fetch data
    setRefreshCount((prev) => prev + 1);
  };

  return (
    <FolderContext.Provider value={{ refreshFolders }}>
      {children}
    </FolderContext.Provider>
  );
};

export const useFolderContext = () => {
  const context = useContext(FolderContext);
  if (!context) {
    throw new Error("useFolderContext must be used within a FolderProvider");
  }
  return context;
};
