import Image from "next/image";
import React from "react";
import Logo from "@/public/Group 57.png";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="py-5 px-[5vw] flex justify-between items-center">
      <div className="flex gap-5 items-center">
        <Image src={Logo} alt="Logo" height={45} />
        <h1 className="font-bold text-[1.2rem]">
          AI CHAT <span className="">DB</span>
        </h1>
      </div>
      <div>
        <nav className="flex gap-5 text-[0.9rem] text-[#77798F]">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Chat</Link>
          <Link href={"/"}>Pricing</Link>
        </nav>
      </div>
      <div className="flex gap-3">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
}
