import Image from "next/image";
import React from "react";
import Logo from "@/public/Logo.png";

export default function Footer() {
  return (
    <div className="pb-5 pt-28 bg-gradient-to-b from-white/0 via-[#4A90A4]/10 to-[#4A90A4]/50 flex flex-col gap-8">
      <div className="px-[8vw] w-full flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
        <div className="flex flex-col w-full md:w-[50%]">
          <Image src={Logo} alt="Logo" height={45} />
          <h1 className="inline-block w-full md:w-[50%] font-semibold text-[1.3rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text text-left">
            Transform your data into an intelligent chatbot.
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-[2vw] w-full md:w-[50%] justify-end items-end">
          <div className="flex flex-col gap-2 w-fit">
            <h1>Platform</h1>
            <span className="text-[#77798F]">Plans & Pricing</span>
            <span className="text-[#77798F]">File Manager</span>
            <span className="text-[#77798F]">Chat Bot</span>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Company</h1>
            <span className="text-[#77798F]">About Us</span>
            <span className="text-[#77798F]">Privacy Policy</span>
            <span className="text-[#77798F]">Terms of Service</span>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Resources</h1>
            <span className="text-[#77798F]">Documentation</span>
            <span className="text-[#77798F]">Help Center</span>
            <span className="text-[#77798F]">Blog</span>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#010314] flex flex-col md:flex-row gap-5 md:gap-0 justify-between px-[8vw] py-3 text-[#77798F] text-[0.8rem]">
        <p>© 2024 AI Chat DB hat. All rights reserved.</p>
        <div className="flex justify-between gap-5">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Cookies</span>
        </div>
      </div>
    </div>
  );
}
