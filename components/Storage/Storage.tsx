"use client";
import { useSession } from "next-auth/react";
import React from "react";
import UserInfo from "./UserInfo";
import StorageInfo from "./StorageInfo";
import StorageDetailList from "./StorageDetailList";
import StorageUpgradeMsg from "./StorageUpgradeMsg";

export default function Storage() {
  const { data: session } = useSession();
  return (
    session && (
      <div>
        <UserInfo />
        <StorageInfo />
        <StorageDetailList />
        <StorageUpgradeMsg />
      </div>
    )
  );
}
