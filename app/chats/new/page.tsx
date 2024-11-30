import ChatInterface from "@/components/Chat";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-5 py-5 pr-5 h-screen">
      <div className=" bg-[#010314] py-3 px-10 rounded-[50px] mr-4">
        <h1 className="font-bold text-[1.5rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text text-center inline-block w-fit">
          New
        </h1>
        <div> </div>
      </div>
      <ChatInterface />
    </div>
  );
}
