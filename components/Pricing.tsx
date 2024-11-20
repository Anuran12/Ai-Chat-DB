import React from "react";

export default function Pricing() {
  return (
    <div className="flex flex-col justify-center items-center gap-[6vw] p-[3vw]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="inline-block w-fit font-bold text-[2.8rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text text-center leading-[4.5rem]">
          Choose Your Plan
        </h1>
        <p className="text-[#9CA3AF] text-center">
          Select the perfect plan for your needs. Upgrade or downgrade at any
          time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5">
        <div className="rounded-[29px] bg-[radial-gradient(160%_85%_at_50%_25%,rgba(0,0,0,0)_10%,rgba(0,0,0,0.05)_35%,rgba(74,144,164,0.2)_55%,rgba(85,155,170,0.4)_65%,rgba(100,170,180,0.7)_75%,rgba(150,200,210,0.9)_85%,rgba(200,230,240,1)_95%,rgba(255,255,255,1)_100%)]">
          <div className="w-full bg-white/5 flex flex-col gap-2 p-3 rounded-[50px]">
            <div className="flex flex-col gap-2 p-8">
              <h1 className="text-[2.5rem] text-[#4A90A4] font-bold">Free</h1>
              <p className="text-[#9CA3AF]">Perfect for getting started</p>
              <div className="flex items-center gap-3.5">
                <h1 className="font-bold text-[4rem]">$0</h1>
                <p className="text-[1.3rem]">/month</p>
              </div>
              <div className="flex gap-3 items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.3046 20.1797H3.30078"
                    stroke="#0784A8"
                    strokeWidth="3.30038"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.99394 8.81023L3.30078 20.18V30.0812C3.30078 30.9565 3.6485 31.796 4.26744 32.4149C4.88638 33.0339 5.72585 33.3816 6.60116 33.3816H33.0042C33.8795 33.3816 34.719 33.0339 35.3379 32.4149C35.9569 31.796 36.3046 30.9565 36.3046 30.0812V20.18L30.6114 8.81023C30.3382 8.26036 29.917 7.79762 29.3952 7.47403C28.8734 7.15045 28.2716 6.97884 27.6576 6.97852H11.9478C11.3338 6.97884 10.732 7.15045 10.2102 7.47403C9.68838 7.79762 9.26717 8.26036 8.99394 8.81023Z"
                    stroke="#0784A8"
                    strokeWidth="3.30038"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.90137 26.7793H9.91615"
                    stroke="#0784A8"
                    strokeWidth="3.30038"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 26.7793H16.5148"
                    stroke="#0784A8"
                    strokeWidth="3.30038"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-[1.3rem]">1GB Storage</p>
              </div>
              <p className="text-[#9CA3AF] pl-10">
                Upload and process up to 1GB of files
              </p>
              <div className="mt-5">
                <p>Supported File Types:</p>
                <div className="flex gap-2 items-center">
                  <svg
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3337 1.60938L6.25033 11.6927L1.66699 7.10938"
                      stroke="#22C55E"
                      strokeWidth="1.83333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>PDF Documents</p>
                </div>
                <div className="flex gap-2 items-center">
                  <svg
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3337 1.60938L6.25033 11.6927L1.66699 7.10938"
                      stroke="#22C55E"
                      strokeWidth="1.83333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Word Documents &#40;DOC, DOCX&#41;</p>
                </div>
                <div className="flex gap-2 items-center">
                  <svg
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3337 1.60938L6.25033 11.6927L1.66699 7.10938"
                      stroke="#22C55E"
                      strokeWidth="1.83333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Audio Files &#40;MP3&#41;</p>
                </div>
              </div>
            </div>
            <button className="w-full bg-[#4A90A4] py-3 rounded-[50px] mt-7 text-[1.3rem] font-bold">
              Get Started
            </button>
          </div>
        </div>
        <div className="rounded-[29px] bg-[radial-gradient(160%_85%_at_50%_25%,rgba(0,0,0,0)_10%,rgba(0,0,0,0.05)_35%,rgba(74,144,164,0.2)_55%,rgba(85,155,170,0.4)_65%,rgba(100,170,180,0.7)_75%,rgba(150,200,210,0.9)_85%,rgba(200,230,240,1)_95%,rgba(255,255,255,1)_100%)]">
          <div className="w-full bg-white/5 flex flex-col gap-2 p-3 rounded-[50px]">
            <div className="flex flex-col gap-2 p-8">
              <h1 className="text-[2.5rem] text-[#4A90A4] font-bold">Free</h1>
              <p className="text-[#9CA3AF]">Perfect for getting started</p>
              <div className="flex items-center gap-3.5">
                <h1 className="font-bold text-[4rem]">$0</h1>
                <p className="text-[1.3rem]">/month</p>
              </div>
              <div className="flex gap-3 items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.3046 20.1797H3.30078"
                    stroke="#0784A8"
                    strokeWidth="3.30038"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.99394 8.81023L3.30078 20.18V30.0812C3.30078 30.9565 3.6485 31.796 4.26744 32.4149C4.88638 33.0339 5.72585 33.3816 6.60116 33.3816H33.0042C33.8795 33.3816 34.719 33.0339 35.3379 32.4149C35.9569 31.796 36.3046 30.9565 36.3046 30.0812V20.18L30.6114 8.81023C30.3382 8.26036 29.917 7.79762 29.3952 7.47403C28.8734 7.15045 28.2716 6.97884 27.6576 6.97852H11.9478C11.3338 6.97884 10.732 7.15045 10.2102 7.47403C9.68838 7.79762 9.26717 8.26036 8.99394 8.81023Z"
                    stroke="#0784A8"
                    strokeWidth="3.30038"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.90137 26.7793H9.91615"
                    stroke="#0784A8"
                    strokeWidth="3.30038"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 26.7793H16.5148"
                    stroke="#0784A8"
                    strokeWidth="3.30038"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-[1.3rem]">1GB Storage</p>
              </div>
              <p className="text-[#9CA3AF] pl-10">
                Upload and process up to 1GB of files
              </p>
              <div className="mt-5">
                <p>Supported File Types:</p>
                <div className="flex gap-2 items-center">
                  <svg
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3337 1.60938L6.25033 11.6927L1.66699 7.10938"
                      stroke="#22C55E"
                      strokeWidth="1.83333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>PDF Documents</p>
                </div>
                <div className="flex gap-2 items-center">
                  <svg
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3337 1.60938L6.25033 11.6927L1.66699 7.10938"
                      stroke="#22C55E"
                      strokeWidth="1.83333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Word Documents &#40;DOC, DOCX&#41;</p>
                </div>
                <div className="flex gap-2 items-center">
                  <svg
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3337 1.60938L6.25033 11.6927L1.66699 7.10938"
                      stroke="#22C55E"
                      strokeWidth="1.83333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Audio Files &#40;MP3&#41;</p>
                </div>
              </div>
            </div>
            <button className="w-full bg-[#4A90A4] py-3 rounded-[50px] mt-7 text-[1.3rem] font-bold">
              Get Started
            </button>
          </div>
        </div>
        <div className="rounded-[29px] bg-[radial-gradient(160%_85%_at_50%_25%,rgba(0,0,0,0)_10%,rgba(0,0,0,0.05)_35%,rgba(74,144,164,0.2)_55%,rgba(85,155,170,0.4)_65%,rgba(100,170,180,0.7)_75%,rgba(150,200,210,0.9)_85%,rgba(200,230,240,1)_95%,rgba(255,255,255,1)_100%)]">
          <div className="w-full bg-white/5 flex flex-col gap-2 p-3 rounded-[50px]">
            <div className="flex flex-col gap-2 p-8">
              <h1 className="text-[2.5rem] text-[#4A90A4] font-bold">Free</h1>
              <p className="text-[#9CA3AF]">Perfect for getting started</p>
              <div className="flex items-center gap-3.5">
                <h1 className="font-bold text-[4rem]">$0</h1>
                <p className="text-[1.3rem]">/month</p>
              </div>
              <div className="flex gap-3 items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.3046 20.1797H3.30078"
                    stroke="#0784A8"
                    strokeWidth="3.30038"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.99394 8.81023L3.30078 20.18V30.0812C3.30078 30.9565 3.6485 31.796 4.26744 32.4149C4.88638 33.0339 5.72585 33.3816 6.60116 33.3816H33.0042C33.8795 33.3816 34.719 33.0339 35.3379 32.4149C35.9569 31.796 36.3046 30.9565 36.3046 30.0812V20.18L30.6114 8.81023C30.3382 8.26036 29.917 7.79762 29.3952 7.47403C28.8734 7.15045 28.2716 6.97884 27.6576 6.97852H11.9478C11.3338 6.97884 10.732 7.15045 10.2102 7.47403C9.68838 7.79762 9.26717 8.26036 8.99394 8.81023Z"
                    stroke="#0784A8"
                    strokeWidth="3.30038"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.90137 26.7793H9.91615"
                    stroke="#0784A8"
                    strokeWidth="3.30038"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 26.7793H16.5148"
                    stroke="#0784A8"
                    strokeWidth="3.30038"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-[1.3rem]">1GB Storage</p>
              </div>
              <p className="text-[#9CA3AF] pl-10">
                Upload and process up to 1GB of files
              </p>
              <div className="mt-5">
                <p>Supported File Types:</p>
                <div className="flex gap-2 items-center">
                  <svg
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3337 1.60938L6.25033 11.6927L1.66699 7.10938"
                      stroke="#22C55E"
                      strokeWidth="1.83333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>PDF Documents</p>
                </div>
                <div className="flex gap-2 items-center">
                  <svg
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3337 1.60938L6.25033 11.6927L1.66699 7.10938"
                      stroke="#22C55E"
                      strokeWidth="1.83333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Word Documents &#40;DOC, DOCX&#41;</p>
                </div>
                <div className="flex gap-2 items-center">
                  <svg
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3337 1.60938L6.25033 11.6927L1.66699 7.10938"
                      stroke="#22C55E"
                      strokeWidth="1.83333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Audio Files &#40;MP3&#41;</p>
                </div>
              </div>
            </div>
            <button className="w-full bg-[#4A90A4] py-3 rounded-[50px] mt-7 text-[1.3rem] font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
