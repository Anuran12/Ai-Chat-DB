import React from "react";

export default function SessionLoader() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4A90A4]"></div>
        <p className="text-[#4A90A4] font-semibold">Loading...</p>
      </div>
    </div>
  );
}
