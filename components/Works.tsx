import Image from "next/image";
import React from "react";
import UploadImg from "@/public/Upload.png";
import ProcessingImg from "@/public/Processing.png";

export default function Works() {
  return (
    <div className="flex flex-col justify-center items-center pt-[8vw] w-full px-[5vw] mb-20">
      <h1 className="inline-block w-fit font-bold text-[2.8rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text text-center leading-[4.5rem]">
        Build Your AI Assistant in Minutes
      </h1>
      <div className=" grid grid-cols-2 gap-7 justify-center items-center w-[85%]">
        <div className="bg-gradient-to-l from-[#4A90A4] to-[#4467FF] rounded-[30px] py-[2px] col-span-2 shadow-[0px_4px_100px_rgba(102,77,255,0.2)]">
          <div className="flex items-center gap-[1rem] bg-[#010314] rounded-[29px] w-full p-[3vw]">
            <div className="w-[40%]">
              <Image src={UploadImg} alt="" />
            </div>
            <div className="w-[60%] flex justify-center items-center">
              <div className="w-[75%] flex flex-col">
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
                    How It Works
                  </h1>
                </div>
                <h1 className="font-bold text-[2rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text text-center leading-[4.5rem] inline-block w-fit">
                  Upload files and links
                </h1>
                <p className="text-[#77798F] text-left text-[1.2rem]">
                  By providing your files or links, our AI analyzes and learns
                  from your content to create a knowledgeable assistant.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-l from-[#4A90A4] to-[#4467FF] rounded-[30px] pt-[2px] shadow-[0px_4px_100px_rgba(102,77,255,0.2)]">
          <div className="bg-[#010314] rounded-[29px] w-full">
            <div className="w-full h-full flex flex-col gap-[3rem] p-[3vw] rounded-[29px] bg-[radial-gradient(160%_85%_at_50%_25%,rgba(0,0,0,0)_10%,rgba(0,0,0,0.05)_35%,rgba(74,144,164,0.2)_55%,rgba(85,155,170,0.4)_65%,rgba(100,170,180,0.7)_75%,rgba(150,200,210,0.9)_85%,rgba(200,230,240,1)_95%,rgba(255,255,255,1)_100%)]">
              <div className="w-[90%] flex flex-col">
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
                    How It Works
                  </h1>
                </div>
                <h1 className="font-bold text-[2rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text text-center leading-[4.5rem] inline-block w-fit">
                  AI Processes Your Data
                </h1>
                <p className="text-[#77798F] text-left text-[1.2rem]">
                  Wait for less than 5 minutes while our AI learns from your
                  content. The system analyzes and indexes your data to provide
                  accurate responses.
                </p>
              </div>
              <div>
                <Image src={ProcessingImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-l from-[#4A90A4] to-[#4467FF] rounded-[30px] pt-[2px] shadow-[0px_4px_100px_rgba(102,77,255,0.2)]">
          <div className="bg-[#010314] rounded-[29px] w-full">
            <div className="w-full h-full flex flex-col gap-[3rem] p-[3vw] rounded-[29px] bg-[radial-gradient(160%_85%_at_50%_25%,rgba(0,0,0,0)_10%,rgba(0,0,0,0.05)_35%,rgba(74,144,164,0.2)_55%,rgba(85,155,170,0.4)_65%,rgba(100,170,180,0.7)_75%,rgba(150,200,210,0.9)_85%,rgba(200,230,240,1)_95%,rgba(255,255,255,1)_100%)]">
              <div className="w-[90%] flex flex-col">
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
                    How It Works
                  </h1>
                </div>
                <h1 className="font-bold text-[2rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text text-center leading-[4.5rem] inline-block w-fit">
                  Start Chatting
                </h1>
                <p className="text-[#77798F] text-left text-[1.2rem]">
                  Your AI assistant is ready to answer questions and provide
                  insights based on your uploaded content. Get instant, accurate
                  responses.
                </p>
              </div>
              <div>
                <Image src={ProcessingImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
