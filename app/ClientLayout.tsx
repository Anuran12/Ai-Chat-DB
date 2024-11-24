"use client";
import { ReactNode, useState } from "react";
import { ShowToastContext, ToastMessage } from "@/context/ShowToastContext";
import Toast from "@/components/Toast";
import Sidebar from "@/components/Sidebar";
import SessionWrapper from "@/components/SessionWrapper";
import { FolderProvider } from "@/context/FolderContext";
import { ParentFolderIdContext } from "@/context/ParentFolderIdContext";
import Storage from "@/components/Storage/Storage";
import { useSession } from "next-auth/react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [showToastMsg, setShowToastMsg] = useState<ToastMessage | null>(null);
  const [parentFolderId, setParentFolderId] = useState<string | null>(null);
  const { data: session } = useSession();

  return (
    <FolderProvider>
      <ParentFolderIdContext.Provider
        value={{ parentFolderId, setParentFolderId }}
      >
        <ShowToastContext.Provider value={{ showToastMsg, setShowToastMsg }}>
          <html lang="en">
            <body className="antialiased">
              <div className="flex">
                {session ? (
                  <>
                    <Sidebar />
                    <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                      <div className="col-span-3">{children}</div>

                      <div className=" order-first md:order-last h-screen relative">
                        <div className="bg-[#010314] p-5 fixed top-0 right-0 rounded-[25px] m-3 h-[97%]">
                          <Storage />
                        </div>
                      </div>
                    </div>

                    <Toast />
                  </>
                ) : (
                  <>{children}</>
                )}
              </div>
            </body>
          </html>
        </ShowToastContext.Provider>
      </ParentFolderIdContext.Provider>
    </FolderProvider>
  );
}
