"use client";
import { useSession } from "next-auth/react";
import Sidebar from "@/components/Sidebar";
import Storage from "@/components/Storage/Storage";
import Toast from "@/components/Toast";
import { useState } from "react";
import { ShowToastContext } from "@/context/ShowToastContext";
import { ParentFolderIdContext } from "@/context/ParentFolderIdContext";
import { usePathname } from "next/navigation";
import { FolderProvider } from "@/context/FolderContext";
import SessionLoader from "@/components/SessionLoader";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [showToastMsg, setShowToastMsg] = useState<any>(null);
  const [parentFolderId, setParentFolderId] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const pathname = usePathname();

  const isChatsRoute = pathname.includes("/chats");

  if (status === "loading") {
    return <SessionLoader />;
  }

  return (
    <FolderProvider>
      <ParentFolderIdContext.Provider
        value={{ parentFolderId, setParentFolderId }}
      >
        <ShowToastContext.Provider value={{ showToastMsg, setShowToastMsg }}>
          <div className="flex flex-col md:flex-row">
            {session ? (
              <>
                <Sidebar />
                <div className="w-full md:w-[20%]"></div>
                <div className="flex w-full flex-col md:flex-row">
                  <div
                    className={isChatsRoute ? "w-full" : "w-full md:w-[75%]"}
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
              children
            )}
          </div>
        </ShowToastContext.Provider>
      </ParentFolderIdContext.Provider>
    </FolderProvider>
  );
}
