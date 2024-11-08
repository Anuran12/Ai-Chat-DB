import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center px-[5vw]">
      <div className="bg-[radial-gradient(160%_85%_at_50%_25%,rgba(0,0,0,0)_10%,rgba(0,0,0,0.05)_35%,rgba(74,144,164,0.2)_55%,rgba(85,155,170,0.4)_65%,rgba(100,170,180,0.7)_75%,rgba(150,200,210,0.9)_85%,rgba(200,230,240,1)_95%,rgba(255,255,255,1)_100%)] w-full h-full rounded-[50px] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-[1rem]">
          <div className="flex gap-3">
            <svg
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.15754 0C7.15754 0 7.45955 2.81891 8.63593 3.99529C9.81231 5.17167 12.6312 5.47368 12.6312 5.47368C12.6312 5.47368 9.81231 5.7757 8.63593 6.95208C7.45955 8.12846 7.15754 10.9474 7.15754 10.9474C7.15754 10.9474 6.85552 8.12846 5.67914 6.95208C4.50276 5.7757 1.68385 5.47368 1.68385 5.47368C1.68385 5.47368 4.50276 5.17167 5.67914 3.99529C6.85552 2.81891 7.15754 0 7.15754 0ZM19.4733 4.10526C19.4733 4.10526 19.9263 8.33363 21.6909 10.0982C23.4555 11.8628 27.6839 12.3158 27.6839 12.3158C27.6839 12.3158 23.4555 12.7688 21.6909 14.5334C19.9263 16.2979 19.4733 20.5263 19.4733 20.5263C19.4733 20.5263 19.0203 16.2979 17.2557 14.5334C15.4912 12.7688 11.2628 12.3158 11.2628 12.3158C11.2628 12.3158 15.4912 11.8628 17.2557 10.0982C19.0203 8.33363 19.4733 4.10526 19.4733 4.10526ZM9.00552 17.3099C7.53505 15.8394 7.15754 12.3158 7.15754 12.3158C7.15754 12.3158 6.78002 15.8394 5.30955 17.3099C3.83907 18.7804 0.31543 19.1579 0.31543 19.1579C0.31543 19.1579 3.83907 19.5354 5.30955 21.0059C6.78002 22.4764 7.15754 26 7.15754 26C7.15754 26 7.53505 22.4764 9.00552 21.0059C10.476 19.5354 13.9996 19.1579 13.9996 19.1579C13.9996 19.1579 10.476 18.7804 9.00552 17.3099Z"
                fill="url(#paint0_linear_375_162)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_375_162"
                  x1="2.16682"
                  y1="2.05263"
                  x2="29.2023"
                  y2="4.55099"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.0695937" stopColor="#4467FF" />
                  <stop offset="0.816425" stopColor="#4A90A4" />
                </linearGradient>
              </defs>
            </svg>
            <h1 className="uppercase bg-gradient-to-tl from-[#4A90A4] to-[#4467FF] p-[2px] text-transparent bg-clip-text tracking-widest">
              Welcome to AI Chat DB
            </h1>
          </div>
          <h1 className="w-[60%] font-bold text-[3.7rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text text-center leading-[4.5rem]">
            Instantly build an AI chatbot with your knowledge base
          </h1>
          <p className="text-[#77798F] w-[40%] text-center text-[1.2rem]">
            Transform your data into an intelligent conversation partner.
            Upload, chat, and get insights in minutes.
          </p>
          <div className="flex gap-3 mt-4">
            <button className=" bg-gradient-to-tl from-[#4A90A4] to-[#4467FF] p-[2px] rounded-[50px] drop-shadow-[0_0px_7px_rgba(119,68,255,0.5)]">
              <div className=" w-full h-full bg-[#1c1c1e] px-8 py-3 rounded-[48px]">
                Get started for free
              </div>
            </button>
            <button className=" border-2 border-[#2A2B3A] px-8 py-3 rounded-[50px] flex gap-3 justify-center items-center">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7061 5.50337C14.4899 7.04992 15.8817 7.82319 15.8817 9C15.8817 10.1768 14.4899 10.9501 11.7061 12.4966L5.94257 15.6986C3.29518 17.1693 1.97149 17.9047 0.985744 17.3247C-7.75645e-07 16.7447 -7.09455e-07 15.2304 -5.77075e-07 12.2019L-2.97153e-07 5.79806C-1.64772e-07 2.76955 -9.85824e-08 1.2553 0.985744 0.675286C1.97149 0.095271 3.29518 0.830657 5.94257 2.30143L11.7061 5.50337Z"
                  fill="white"
                />
              </svg>
              Watch Video
            </button>
          </div>
        </div>
        <div className="w-full h-[30%]"></div>
      </div>
    </div>
  );
}
