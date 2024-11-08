import Image from "next/image";
import React from "react";
import Logo from "@/public/Logo2.png";

export default function About() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center px-[5vw]">
      <div className="bg-[radial-gradient(160%_85%_at_50%_75%,rgba(0,0,0,0)_10%,rgba(0,0,0,0.05)_35%,rgba(74,144,164,0.2)_55%,rgba(85,155,170,0.4)_65%,rgba(100,170,180,0.7)_75%,rgba(150,200,210,0.9)_85%,rgba(200,230,240,1)_95%,rgba(255,255,255,1)_100%)] w-full h-full rounded-[50px] flex flex-col items-center justify-center">
        <div className="w-full h-[30%]"></div>
        <div className="flex items-center gap-[1rem] bg-[#010314] w-[85%] rounded-[30px] p-[3vw]">
          <div className="w-[65%] flex flex-col">
            <h1 className="font-bold text-[2rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text inline-block w-fit">
              Why choose AI Chat DB?
            </h1>
            <div>
              <div></div>
            </div>
          </div>
          <div className="w-[35%]">
            <Image src={Logo} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
