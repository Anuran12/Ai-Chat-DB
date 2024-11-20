"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/Logo.png";

import Link from "next/link";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="py-5 px-4 md:px-[5vw] flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex gap-3 md:gap-5 items-center">
          <Image src={Logo} alt="Logo" height={45} width={45} />
          <h1 className="font-bold text-base md:text-[1.2rem]">
            AI CHAT <span>DB</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
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

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-3">
          <Link
            href={"/signin"}
            className="border-2 border-[#2A2B3A] px-8 py-2.5 rounded-[50px]"
          >
            Sign In
          </Link>
          <Link
            href={"/signup"}
            className="bg-gradient-to-tl from-[#4A90A4] to-[#4467FF] p-[2px] rounded-[50px] drop-shadow-[0_0px_7px_rgba(119,68,255,0.5)]"
          >
            <div className="w-full h-full bg-[#1c1c1e] px-8 py-2.5 rounded-[48px]">
              Sign Up
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
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
          ) : (
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1c1c1e] border-t border-[#2A2B3A] md:hidden">
          <nav className="flex flex-col p-4 gap-4 text-[#77798F]">
            <Link href={"/"} className="hover:text-white py-2">
              Home
            </Link>
            <Link href={"/"} className="hover:text-white py-2">
              Chat
            </Link>
            <Link href={"/pricing"} className="hover:text-white py-2">
              Pricing
            </Link>
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href={"/signin"}
                className="border-2 border-[#2A2B3A] px-8 py-2.5 rounded-[50px] text-center"
              >
                Sign In
              </Link>
              <Link
                href={"/signup"}
                className="bg-gradient-to-tl from-[#4A90A4] to-[#4467FF] p-[2px] rounded-[50px] drop-shadow-[0_0px_7px_rgba(119,68,255,0.5)]"
              >
                <div className="w-full h-full bg-[#1c1c1e] px-8 py-2.5 rounded-[48px] text-center">
                  Sign Up
                </div>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
