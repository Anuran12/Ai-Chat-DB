import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import Topbar from "@/components/Topbar";
import React from "react";

export default function PricingPage() {
  return (
    <div className="w-full">
      <Topbar />
      <Pricing />
      <div className="flex flex-col mt-10 gap-10 w-full justify-center items-center">
        <h1 className="inline-block w-fit font-bold text-[2.8rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text text-center leading-[4.5rem]">
          Support File Types
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 w-[80%] gap-8 md:gap-0">
          <div className="flex flex-col items-center gap-5">
            <div className="flex gap-3 items-center font-bold text-[1.8rem]">
              <svg
                width="46"
                height="47"
                viewBox="0 0 46 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.7503 4.5H11.5003C10.4837 4.5 9.50864 4.90387 8.78975 5.62276C8.07086 6.34165 7.66699 7.31667 7.66699 8.33333V39C7.66699 40.0167 8.07086 40.9917 8.78975 41.7106C9.50864 42.4295 10.4837 42.8333 11.5003 42.8333H34.5003C35.517 42.8333 36.492 42.4295 37.2109 41.7106C37.9298 40.9917 38.3337 40.0167 38.3337 39V14.0833L28.7503 4.5Z"
                  stroke="#4A90A4"
                  strokeWidth="3.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.833 4.5V12.1667C26.833 13.1833 27.2369 14.1584 27.9558 14.8772C28.6747 15.5961 29.6497 16 30.6663 16H38.333"
                  stroke="#4A90A4"
                  strokeWidth="3.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.1663 17.917H15.333"
                  stroke="#4A90A4"
                  strokeWidth="3.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.6663 25.584H15.333"
                  stroke="#4A90A4"
                  strokeWidth="3.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.6663 33.25H15.333"
                  stroke="#4A90A4"
                  strokeWidth="3.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h1>Documents</h1>
            </div>
            <ul className=" list-disc text-[#9CA3AF] flex flex-col gap-3">
              <li>PDF, DOC, DOCX</li>
              <li>CSV, TXT, MD</li>
              <li>PPT, PPTX</li>
              <li>EPUB, HTML, ODT</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="flex gap-3 items-center font-bold text-[1.8rem]">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.7656 25.5841L40.7764 32.2579C40.9207 32.354 41.0883 32.409 41.2615 32.4173C41.4346 32.4256 41.6068 32.3868 41.7596 32.305C41.9124 32.2231 42.0402 32.1014 42.1293 31.9527C42.2184 31.804 42.2655 31.6339 42.2656 31.4606V15.7516C42.2657 15.583 42.2212 15.4173 42.1368 15.2714C42.0523 15.1254 41.9309 15.0043 41.7847 14.9203C41.6384 14.8363 41.4727 14.7924 41.304 14.793C41.1354 14.7935 40.9699 14.8386 40.8243 14.9236L30.7656 20.7924"
                  stroke="#4A90A4"
                  strokeWidth="3.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.9316 12.167H7.76497C5.64788 12.167 3.93164 13.8832 3.93164 16.0003V31.3337C3.93164 33.4508 5.64788 35.167 7.76497 35.167H26.9316C29.0487 35.167 30.765 33.4508 30.765 31.3337V16.0003C30.765 13.8832 29.0487 12.167 26.9316 12.167Z"
                  stroke="#4A90A4"
                  strokeWidth="3.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h1>Media</h1>
            </div>
            <ul className=" list-disc text-[#9CA3AF] flex flex-col gap-3">
              <li>MP4, AVI, MOV</li>
              <li>MP3, WAV</li>
              <li>JPG, PNG</li>
              <li>JPEG, GIF</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="flex gap-3 items-center font-bold text-[1.8rem]">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4469 33.2507H13.6136C11.0719 33.2507 8.63439 32.241 6.83717 30.4438C5.03994 28.6465 4.03027 26.209 4.03027 23.6673C4.03027 21.1257 5.03994 18.6881 6.83717 16.8909C8.63439 15.0937 11.0719 14.084 13.6136 14.084H17.4469"
                  stroke="#4A90A4"
                  strokeWidth="3.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.9482 14.084H32.7816C35.3232 14.084 37.7608 15.0937 39.558 16.8909C41.3552 18.6881 42.3649 21.1257 42.3649 23.6673C42.3649 26.209 41.3552 28.6465 39.558 30.4438C37.7608 32.241 35.3232 33.2507 32.7816 33.2507H28.9482"
                  stroke="#4A90A4"
                  strokeWidth="3.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5303 23.667H30.8636"
                  stroke="#4A90A4"
                  strokeWidth="3.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h1>Links</h1>
            </div>
            <ul className=" list-disc text-[#9CA3AF] flex flex-col gap-3">
              <li>YouTube Links</li>
              <li>Arxiv Links</li>
              <li>Web URLs</li>
              <li>Other Links</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center px-[5vw] md:px-[9vw] mt-[8vw]">
        <div className="bg-[radial-gradient(160%_85%_at_50%_25%,rgba(0,0,0,0)_10%,rgba(0,0,0,0.05)_35%,rgba(74,144,164,0.2)_55%,rgba(85,155,170,0.4)_65%,rgba(100,170,180,0.7)_75%,rgba(150,200,210,0.9)_85%,rgba(200,230,240,1)_95%,rgba(255,255,255,1)_100%)] w-full h-full rounded-[50px] flex flex-col items-center justify-center border-t-2 border-[#4A90A4]">
          <div className="flex flex-col items-center gap-[1rem] py-[7.5vw]">
            <h1 className=" font-bold text-[3.2rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text text-center leading-[4.5rem]">
              Need Help Choosing?
            </h1>
            <p className="text-[#77798F] w-[80%] text-center text-[1.2rem]">
              Contact our team for personalized recommendation based on your
              needs
            </p>
            <div className="flex gap-3 mt-4">
              <button className=" bg-gradient-to-tl from-[#4A90A4] to-[#4467FF] p-[2px] rounded-[50px] drop-shadow-[0_0px_7px_rgba(119,68,255,0.5)]">
                <div className=" w-full h-full bg-[#1c1c1e] px-8 py-3 rounded-[48px]">
                  Contact Support
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
