import Image from "next/image";
import React from "react";
import Logo from "@/public/Logo.png";
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
        <nav className="flex gap-8 text-[0.9rem] text-[#77798F]">
          <Link href={"/"} className="hover:text-white">
            Home
          </Link>
          <Link href={"/"} className="hover:text-white">
            Chat
          </Link>
          <Link href={"/pricing"} className="hover:text-white">
            Pricing
          </Link>
        </nav>
      </div>
      <div className="flex gap-3">
        <Link
          href={"/signin"}
          className=" border-2 border-[#2A2B3A] px-8 py-2.5 rounded-[50px]"
        >
          Sign In
        </Link>
        <Link
          href={"/signup"}
          className=" bg-gradient-to-tl from-[#4A90A4] to-[#4467FF] p-[2px] rounded-[50px] drop-shadow-[0_0px_7px_rgba(119,68,255,0.5)]"
        >
          <div className=" w-full h-full bg-[#1c1c1e] px-8 py-2.5 rounded-[48px]">
            Sign Up
          </div>
        </Link>
      </div>
    </div>
  );
}
