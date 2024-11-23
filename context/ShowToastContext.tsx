// context/ShowToastContext.tsx
"use client";
import { createContext, useContext } from "react";

export type ToastMessage = {
  message: string;
  type: "success" | "error" | "info";
};

type ToastContextType = {
  showToastMsg: ToastMessage | null;
  setShowToastMsg: (msg: ToastMessage | null) => void;
};

export const ShowToastContext = createContext<ToastContextType | undefined>(
  undefined
);

export function useToast() {
  const context = useContext(ShowToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
