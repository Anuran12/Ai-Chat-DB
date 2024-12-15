"use client";
import { ReactNode, useState } from "react";
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
              <div className="flex flex-col md:flex-row">
                {session ? (
                  <>
                    <Sidebar />
                    <div className="w-full md:w-[20%]"></div>
                    <div className="flex w-full flex-col md:flex-row">
                      <div
                        className={
                          isChatsRoute ? "w-full" : "w-full md:w-[75%]"
                        }
                      >
                        {children}
                      </div>

                      {!isChatsRoute && (
                        <div className="w-full md:w-[25%] h-auto md:h-screen relative">
                          <div className="bg-[#010314] p-3 md:p-5 rounded-[25px] m-2 md:m-3 h-full">
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
