"use client";
import React, { useEffect } from "react";
import { useToast } from "@/context/ShowToastContext";

export default function Toast() {
  const { showToastMsg, setShowToastMsg } = useToast();

  useEffect(() => {
    if (showToastMsg) {
      const timer = setTimeout(() => {
        setShowToastMsg(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showToastMsg, setShowToastMsg]);

  if (!showToastMsg) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`rounded-lg px-4 py-2 text-white ${
          showToastMsg.type === "success"
            ? "bg-green-500"
            : showToastMsg.type === "error"
            ? "bg-red-500"
            : "bg-blue-500"
        }`}
      >
        <span>{showToastMsg.message}</span>
      </div>
    </div>
  );
}
