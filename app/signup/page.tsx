"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Logo from "@/public/Logo.png";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function signupPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      // Redirect to the homepage if the user is logged in
      router.push("/");
    }
  }, [session, router]);
  return (
    <>
      {session ? (
        <div>You are already logged in</div>
      ) : (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-[2vw]">
          <div className="flex gap-5 items-center">
            <Image src={Logo} alt="Logo" height={45} />
            <h1 className="font-bold text-[1.2rem]">
              AI CHAT <span className="">DB</span>
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[3rem] bg-gradient-to-tl from-[#4A90A4] to-[#4467FF] text-transparent bg-clip-text text-center inline-block w-fit font-bold">
              CREATE ACCOUNT
            </h1>
            <p className="text-[#9CA3AF]">
              Start building your AI-powered chatbot in minutes
            </p>
          </div>
          <div className="w-[50%] flex flex-col gap-5 justify-center items-center bg-[radial-gradient(100%_100%_at_50%_50%,rgba(255,255,255,0)_30%,rgba(74,144,164,0.3)_85%)] rounded-[50px] p-10">
            <h1 className="font-bold text-[2rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text text-center leading-[4.5rem] inline-block w-fit">
              Sign up with
            </h1>
            <button
              onClick={() => signIn("google")}
              className="flex gap-3 items-center justify-center bg-[#4A90A4] rounded-[50px] py-1.5 w-full"
            >
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.76 10.77L19.67 10.42H12.23V13.58H16.68C16.4317 14.5443 15.8672 15.3974 15.0767 16.0029C14.2863 16.6084 13.3156 16.9313 12.32 16.92C11.0208 16.9093 9.77254 16.4135 8.81999 15.53C8.35174 15.0685 7.97912 14.5191 7.72344 13.9134C7.46777 13.3077 7.33407 12.6575 7.33 12C7.34511 10.6795 7.86792 9.41544 8.79 8.47002C9.7291 7.58038 10.9764 7.08932 12.27 7.10002C13.3779 7.10855 14.4446 7.52101 15.27 8.26002L17.47 6.00002C16.02 4.70638 14.1432 3.9941 12.2 4.00002C11.131 3.99367 10.0713 4.19793 9.08127 4.60115C8.09125 5.00436 7.19034 5.59863 6.43 6.35002C4.98369 7.8523 4.16827 9.85182 4.15152 11.9371C4.13478 14.0224 4.918 16.0347 6.34 17.56C7.12784 18.3449 8.06422 18.965 9.09441 19.3839C10.1246 19.8029 11.2279 20.0123 12.34 20C13.3484 20.0075 14.3479 19.8102 15.2779 19.42C16.2078 19.0298 17.0488 18.4549 17.75 17.73C19.1259 16.2171 19.8702 14.2347 19.83 12.19C19.8408 11.7156 19.8174 11.2411 19.76 10.77Z"
                  fill="#ffffff"
                />
              </svg>
              <span className=" font-bold text-[1.3rem]">
                Continue with Google
              </span>
            </button>
            <p className="text-[#BABCD2] mt-5">
              Already have an account?{" "}
              <Link
                href={"/signin"}
                className="text-[#4A90A4] font-semibold underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
