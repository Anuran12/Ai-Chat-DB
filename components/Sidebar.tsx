"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Logo from "@/public/Logo.png";
import CreateFolderModal from "./Folder/CreateFolderModal";
import UploadFileModal from "./File/UploadFileModal";
import FolderTreeView from "./Folder/FolderTreeView";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface ChatItem {
  id: string;
  title: string;
  timestamp: string;
}

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState(() => {
    // Check if we're on the client side and get initial state from path
    if (typeof window !== "undefined") {
      // If the path includes 'chats', set active tab to chats
      if (pathname?.includes("/chats")) {
        return "chats";
      }
      return "files";
    }
    return "files";
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFileModalOpen, setIsFileModalOpen] = useState(false);
  const [isRecentChatsOpen, setIsRecentChatsOpen] = useState(false);
  const [isStarredChatsOpen, setIsStarredChatsOpen] = useState(false);
  const [isTreeViewOpen, setIsTreeViewOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname?.includes("/chats")) {
      setActiveTab("chats");
    } else {
      setActiveTab("files");
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("activeTab", activeTab);
    }
  }, [activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "chats") {
      router.push("/chats/new"); // Redirect to chats page
    } else if (tab === "files") {
      router.push("/"); // Redirect to main/files page
    }
  };

  const handleNewFolder = () => {
    setIsModalOpen(true);
  };

  const handleNewFile = () => {
    setIsFileModalOpen(true);
  };

  const handleNewChat = () => {
    router.push("/chats/new"); // Redirect to new chat page
  };

  const recentChatsData = [
    { id: "1", title: "React Project Discussion", timestamp: "2h ago" },
    { id: "2", title: "Database Design", timestamp: "5h ago" },
    { id: "3", title: "API Architecture", timestamp: "1d ago" },
  ];

  const starredChatsData = [
    { id: "4", title: "Machine Learning Overview", timestamp: "3d ago" },
    { id: "5", title: "Blockchain Concepts", timestamp: "1w ago" },
  ];

  // Add these new functions
  const toggleRecentChats = () => {
    setIsRecentChatsOpen(!isRecentChatsOpen);
  };

  const toggleStarredChats = () => {
    setIsStarredChatsOpen(!isStarredChatsOpen);
  };

  const toggleTreeView = () => {
    setIsTreeViewOpen(!isTreeViewOpen);
  };
  const starredbtn = () => {
    router.push("/starred");
    setActiveIndex(2);
  };
  const homebtn = () => {
    router.push("/");
    setActiveIndex(0);
  };

  const renderChatHistoryButton = (
    chat: ChatItem,
    type: "recent" | "starred"
  ) => (
    <button
      key={chat.id}
      className="w-full flex items-center justify-between p-2 hover:bg-white/10 rounded-lg text-sm"
      onClick={() => router.push(`/chats/${chat.id}`)}
    >
      <div className="flex items-center gap-2 truncate">
        {type === "starred" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
        ) : null}
        <span className="truncate">{chat.title}</span>
      </div>
      <span className="text-xs text-gray-400">{chat.timestamp}</span>
    </button>
  );

  return (
    <>
      {session ? (
        <div className="fixed top-0 left-0 w-full md:w-[16.5%] h-[100vh] z-40">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden fixed top-4 left-4 z-50 bg-[#4A90A4] p-2 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <ChevronLeftIcon className="w-6 h-6" />
            ) : (
              <ChevronRightIcon className="w-6 h-6" />
            )}
          </button>

          {/* Main Sidebar */}
          <div
            className={`${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 fixed md:relative w-[80%] md:w-full h-full transition-transform duration-300 ease-in-out z-40 bg-[#1c1c1e]`}
          >
            <div className="flex gap-5 items-center justify-center pt-3">
              <Image src={Logo} alt="Logo" height={35} />
              <h1 className="font-bold text-[1rem]">
                AI CHAT <span className="">DB</span>
              </h1>
            </div>
            <div className="w-full px-5 h-full flex flex-col py-[1vw]">
              <div className="flex h-12 w-full">
                {[
                  {
                    id: "chats",
                    label: "Chats",
                    icon: (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-colors duration-200"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
                          fill={activeTab === "chats" ? "#4A90A4" : "white"}
                          className="transition-colors duration-200"
                        />
                        <path
                          d="M15 12C15 12.5523 15.4477 13 16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12Z"
                          fill={activeTab === "chats" ? "white" : "#1C1C1E"}
                        />
                        <path
                          d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
                          fill={activeTab === "chats" ? "white" : "#1C1C1E"}
                        />
                        <path
                          d="M7 12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12Z"
                          fill={activeTab === "chats" ? "white" : "#1C1C1E"}
                        />
                      </svg>
                    ),
                  },
                  {
                    id: "files",
                    label: "Files",
                    icon: (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-colors duration-200"
                      >
                        <path
                          d="M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C22 7.84935 22 9.16554 22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V6.94975Z"
                          fill={activeTab === "files" ? "#4A90A4" : "white"}
                          className="transition-colors duration-200"
                        />
                      </svg>
                    ),
                  },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`
                      flex-1 flex items-center justify-center gap-2
                      rounded-t-[35px] transition-all duration-300 ease-in-out
                      relative overflow-hidden
                      ${
                        activeTab === tab.id
                          ? "bg-[#010314] text-white"
                          : "text-gray-400 hover:text-white hover:bg-[#1C1E26]/50"
                      }
                    `}
                  >
                    {tab.icon}
                    <span
                      className={`
                      font-semibold transition-all duration-200
                      ${activeTab === tab.id ? "text-white" : "text-gray-400"}
                    `}
                    >
                      {tab.label}
                    </span>
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4A90A4]" />
                    )}
                  </button>
                ))}
              </div>
              <div
                className={`flex-1 space-y-4 p-4 overflow-y-auto bg-[#010314] h-full transition-all duration-300 ease-in-out ${
                  activeTab === "chats"
                    ? "rounded-b-[35px] rounded-tr-[35px]"
                    : "rounded-b-[35px] rounded-tl-[35px]"
                }`}
              >
                {activeTab === "chats" ? (
                  <>
                    <button
                      onClick={handleNewChat}
                      className="w-full bg-[#4A90A4] hover:bg-[#4A90A4]/90 py-2 px-4 rounded-[50px] flex gap-2 items-center justify-center"
                    >
                      <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
                          fill="white"
                        />
                      </svg>
                      <span className="font-semibold">New Chat</span>
                    </button>
                    <div className="space-y-2"></div>
                    <div>
                      <button
                        onClick={toggleRecentChats}
                        className="w-full flex items-center justify-between p-2 hover:bg-white/10 rounded-lg"
                      >
                        <span className="font-semibold">Recent Chats</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 transform transition-transform ${
                            isRecentChatsOpen ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isRecentChatsOpen && (
                        <div className="space-y-1 mt-2">
                          {recentChatsData.map((chat) =>
                            renderChatHistoryButton(chat, "recent")
                          )}
                        </div>
                      )}
                    </div>

                    <div className="mt-4">
                      <button
                        onClick={toggleStarredChats}
                        className="w-full flex items-center justify-between p-2 hover:bg-white/10 rounded-lg"
                      >
                        <span className="font-semibold">Starred Chats</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 transform transition-transform ${
                            isStarredChatsOpen ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isStarredChatsOpen && (
                        <div className="space-y-1 mt-2">
                          {starredChatsData.map((chat) =>
                            renderChatHistoryButton(chat, "starred")
                          )}
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  // Rest of the files section remains the same
                  <>
                    <button
                      onClick={handleNewFolder}
                      className="w-full bg-[#4A90A4] hover:bg-[#4A90A4]/90 py-2 px-4 rounded-[50px] flex gap-2 items-center justify-center"
                    >
                      <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
                          fill="white"
                        />
                      </svg>
                      <span className="font-semibold">New Folder</span>
                    </button>
                    <button
                      onClick={handleNewFile}
                      className="w-full bg-[#4A90A4] hover:bg-[#4A90A4]/90 py-2 px-4 rounded-[50px] flex gap-2 items-center justify-center"
                    >
                      <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
                          fill="white"
                        />
                      </svg>
                      <span className="font-semibold">New File</span>
                    </button>
                    <div className="space-y-2">
                      <button
                        onClick={() => homebtn()}
                        className={`w-full flex items-center justify-start gap-2 rounded-lg p-2 text-sm hover:bg-white/5b ${
                          activeIndex == 0 ? "bg-[#4A90A4]/15" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>

                        <div className="flex items-center">Home</div>
                      </button>
                      <button
                        onClick={() => setActiveIndex(1)}
                        className={`w-full flex items-center justify-start gap-2 rounded-lg p-2 text-sm hover:bg-white/5b ${
                          activeIndex == 1 ? "bg-[#4A90A4]/15" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>

                        <div className="flex items-center">Index/Pending</div>
                      </button>
                      <button
                        onClick={() => starredbtn()}
                        className={`w-full flex items-center justify-start gap-2 rounded-lg p-2 text-sm hover:bg-white/5b ${
                          activeIndex == 2 ? "bg-[#4A90A4]/15" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                          />
                        </svg>

                        <div className="flex items-center">Starred Files</div>
                      </button>
                      <button
                        onClick={() => setActiveIndex(3)}
                        className={`w-full flex items-center justify-start gap-2 rounded-lg p-2 text-sm hover:bg-white/5b ${
                          activeIndex == 3 ? "bg-[#4A90A4]/15" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>

                        <div className="flex items-center">Trash</div>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="absolute right-1 top-1/2 -translate-y-1/2">
              <button
                onClick={toggleTreeView}
                className="bg-[#4A90A4] p-2 rounded-full hover:bg-[#4A90A4]/90 transition-all z-30"
              >
                {isTreeViewOpen ? (
                  <ChevronLeftIcon className="w-4 h-4" />
                ) : (
                  <ChevronRightIcon className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Folder Tree View Panel */}
          <div
            className={`fixed left-0 md:left-[16%] top-0 h-full bg-[#010314] w-[85%] md:w-[15%] transform transition-transform duration-300 ease-in-out shadow-xl z-50 md:z-10 ${
              isTreeViewOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-4 md:p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Folders</h2>
                <button
                  onClick={toggleTreeView}
                  className="md:hidden p-2 hover:bg-white/10 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <FolderTreeView />
            </div>
          </div>

          {/* Overlay for mobile */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </div>
      ) : (
        <></>
      )}
      <CreateFolderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <UploadFileModal
        isOpen={isFileModalOpen}
        onClose={() => setIsFileModalOpen(false)}
      />
    </>
  );
}
