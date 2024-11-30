"use client";
import { ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ShowToastContext, ToastMessage } from "@/context/ShowToastContext";
import Toast from "@/components/Toast";
import Sidebar from "@/components/Sidebar";
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
  const pathname = usePathname();

  const isChatsRoute = pathname.includes("/chats");

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
                    <div className="flex w-full">
                      <div className={isChatsRoute ? "w-full" : "w-[75%]"}>
                        {children}
                      </div>

                      {!isChatsRoute && (
                        <div className="w-[25%] h-screen relative">
                          <div className="bg-[#010314] p-5 rounded-[25px] m-3 h-[97%]">
                            <Storage />
                          </div>
                        </div>
                      )}
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
