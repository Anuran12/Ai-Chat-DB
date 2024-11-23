"use client";
import { ReactNode, useState } from "react";
import { ShowToastContext, ToastMessage } from "@/context/ShowToastContext";
import Toast from "@/components/Toast";
import Sidebar from "@/components/Sidebar";
import SessionWrapper from "@/components/SessionWrapper";
import { FolderProvider } from "@/context/FolderContext";
import { ParentFolderIdContext } from "@/context/ParentFolderIdContext";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [showToastMsg, setShowToastMsg] = useState<ToastMessage | null>(null);
  const [parentFolderId, setParentFolderId] = useState<string | null>(null);

  return (
    <SessionWrapper>
      <FolderProvider>
        <ParentFolderIdContext.Provider
          value={{ parentFolderId, setParentFolderId }}
        >
          <ShowToastContext.Provider value={{ showToastMsg, setShowToastMsg }}>
            <html lang="en">
              <body className="antialiased">
                <div className="flex">
                  <Sidebar />
                  {children}
                  <Toast />
                </div>
              </body>
            </html>
          </ShowToastContext.Provider>
        </ParentFolderIdContext.Provider>
      </FolderProvider>
    </SessionWrapper>
  );
}
