import React from "react";
import Link from "next/link";

interface UpgradePlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UpgradePlanModal({
  isOpen,
  onClose,
}: UpgradePlanModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1C1E26] p-6 rounded-lg w-[90%] max-w-[600px] relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Upgrade Your Plan
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Choose a plan that best fits your needs
        </p>

        <div className="flex justify-center">
          <Link
            href="/"
            className="bg-[#4A90A4] hover:bg-[#4A90A4]/90 px-8 py-3 rounded-[50px] font-semibold"
            onClick={onClose}
          >
            View Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
