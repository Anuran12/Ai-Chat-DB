"use client";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function FolderDetails() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const id = searchParams.get("id");
  const { data: session } = useSession();
  return (
    <div>
      <div>Folder Name: {name}</div>
      <div>Folder ID: {id}</div>
    </div>
  );
}
