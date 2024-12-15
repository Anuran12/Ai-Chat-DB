import React, { useState } from "react";
import UpgradePlanModal from "./UpgradePlanModal";

export default function StorageUpgradeMsg() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="p-3 bg-white/10 
          rounded-lg text-center mt-5 bottom-0"
      >
        <h2 className="font-semibold text-[17px]">Need More Space?</h2>
        <h2 className="text-[13px]">Get more space by upgrading the plan</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 p-2 px-4
              text-[14px] rounded-lg text-white mt-3"
        >
          Upgrade Plan
        </button>
      </div>
      <UpgradePlanModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
