"use client";
import { ReactNode, useState } from "react";
import { ShowToastContext, ToastMessage } from "@/context/ShowToastContext";
import Toast from "@/components/Toast";
import Sidebar from "@/components/Sidebar";
import SessionWrapper from "@/components/SessionWrapper";
import { FolderProvider } from "@/components/FolderContext";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [showToastMsg, setShowToastMsg] = useState<ToastMessage | null>(null);

  return (
    <SessionWrapper>
      <FolderProvider>
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
      </FolderProvider>
    </SessionWrapper>
  );
}
