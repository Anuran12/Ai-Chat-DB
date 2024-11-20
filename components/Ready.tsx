import React from "react";

export default function Ready() {
  return (
    <div className="w-full flex justify-center items-center px-[5vw] md:px-[9vw]">
      <div className="bg-[radial-gradient(160%_85%_at_50%_25%,rgba(0,0,0,0)_10%,rgba(0,0,0,0.05)_35%,rgba(74,144,164,0.2)_55%,rgba(85,155,170,0.4)_65%,rgba(100,170,180,0.7)_75%,rgba(150,200,210,0.9)_85%,rgba(200,230,240,1)_95%,rgba(255,255,255,1)_100%)] w-full h-full rounded-[50px] flex flex-col items-center justify-center border-t-2 border-[#4A90A4]">
        <div className="flex flex-col items-center gap-[1rem] py-[10vw]">
          <h1 className=" font-bold text-[8vw] md:text-[3.2vw] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text text-center leading-[4.5rem]">
            Ready to Get Started?
          </h1>
          <p className="text-[#77798F] w-[90%] md:w-[80%] text-center text-[1.2rem]">
            Join thousands of users who are already experiencing the power of
            AI-driven conversations with their data.
          </p>
          <div className="flex flex-col md:flex-row gap-3 mt-4">
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
      </div>
    </div>
  );
}
