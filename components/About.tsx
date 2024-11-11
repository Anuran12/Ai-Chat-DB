import Image from "next/image";
import React from "react";
import Logo from "@/public/Logo2.png";

export default function About() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center px-[5vw]">
      <div className="bg-[radial-gradient(160%_85%_at_50%_75%,rgba(0,0,0,0)_10%,rgba(0,0,0,0.05)_35%,rgba(74,144,164,0.2)_55%,rgba(85,155,170,0.4)_65%,rgba(100,170,180,0.7)_75%,rgba(150,200,210,0.9)_85%,rgba(200,230,240,1)_95%,rgba(255,255,255,1)_100%)] w-full h-full rounded-[50px] flex flex-col items-center justify-center">
        <div className="w-full h-[30%]"></div>
        <div className="bg-gradient-to-l from-[#4A90A4] to-[#4467FF] w-[85%] rounded-[30px] py-[2px] ">
          <div className="flex items-center gap-[1rem] bg-[#010314] rounded-[29px] w-full p-[3vw]">
            <div className="w-[65%] flex flex-col gap-[3vw]">
              <h1 className="font-bold text-[2rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text inline-block w-fit">
                Why choose AI Chat DB?
              </h1>
              <div className="grid grid-cols-3 gap-2.5">
                <div className="bg-white/15 p-5 rounded-[35px] flex flex-col gap-3">
                  <div className="bg-[#4A90A4]/30 w-fit p-3 rounded-[20px] aspect-square flex justify-center items-center">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25 12.5V25H32.5M47.5 25C47.5 37.4265 37.4265 47.5 25 47.5C12.5736 47.5 2.5 37.4265 2.5 25C2.5 12.5736 12.5736 2.5 25 2.5C37.4265 2.5 47.5 12.5736 47.5 25Z"
                        stroke="#4A90A4"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h1 className="text-[1.85rem] font-bold leading-8">
                    Quick
                    <br />
                    Setup
                  </h1>
                  <p className="text-white/70 leading-5">
                    Quick and easy integration with your existing documentation.
                  </p>
                </div>
                <div className="bg-white/15 p-5 rounded-[35px] flex flex-col gap-3">
                  <div className="bg-[#4A90A4]/30 w-fit p-3 rounded-[20px] aspect-square flex justify-center items-center">
                    <svg
                      width="46"
                      height="53"
                      viewBox="0 0 46 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.255 49.0373C21.8085 49.36 22.0853 49.5215 22.4758 49.6053C22.779 49.6703 23.221 49.6703 23.5242 49.6053C23.9147 49.5215 24.1915 49.36 24.745 49.0373C29.615 46.196 43 37.271 43 25V11.5C43 10.1052 43 9.40775 42.7315 8.8762C42.4935 8.40495 42.1217 8.0288 41.6532 7.78522C41.125 7.51047 40.4157 7.5021 38.997 7.48533C31.568 7.39748 27.284 6.78403 23 2.5C18.716 6.78403 14.432 7.39748 7.003 7.48533C5.58433 7.5021 4.87498 7.51047 4.34663 7.78522C3.87823 8.0288 3.50647 8.40495 3.26847 8.8762C3 9.40775 3 10.1052 3 11.5V25C3 37.271 16.3849 46.196 21.255 49.0373Z"
                        stroke="#4A90A4"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h1 className="text-[1.85rem] font-bold leading-8">
                    Enterprise
                    <br />
                    Security
                  </h1>
                  <p className="text-white/70 leading-5">
                    Your data is encrypted and secure with SOC 2 compliance.
                  </p>
                </div>
                <div className="bg-white/15 p-5 rounded-[35px] flex flex-col gap-3">
                  <div className="bg-[#4A90A4]/30 w-fit p-3 rounded-[20px] aspect-square flex justify-center items-center">
                    <svg
                      width="40"
                      height="55"
                      viewBox="0 0 40 55"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.6525 0.0868608C21.7428 0.381636 22.5 1.37079 22.5 2.50024V20.0002H37.5C38.3953 20.0002 39.222 20.4788 39.6678 21.2551C40.1138 22.0313 40.1105 22.9866 39.6595 23.7598L22.1595 53.7598C21.5903 54.7356 20.4378 55.2083 19.3475 54.9136C18.2573 54.6188 17.5 53.6296 17.5 52.5003V35.0003H2.5C1.60483 35.0003 0.778002 34.5216 0.332152 33.7453C-0.113698 32.9691 -0.110499 32.0138 0.340551 31.2406L17.8405 1.24056C18.4098 0.264961 19.5623 -0.207892 20.6525 0.0868608ZM6.8526 30.0003H20C21.3808 30.0003 22.5 31.1196 22.5 32.5003V43.2528L33.1475 25.0003H20C18.6193 25.0003 17.5 23.8811 17.5 22.5002V11.7475L6.8526 30.0003Z"
                        fill="#4A90A4"
                      />
                    </svg>
                  </div>
                  <h1 className="text-[1.85rem] font-bold leading-8">
                    Lightning
                    <br />
                    Fast
                  </h1>
                  <p className="text-white/70 leading-5">
                    Powered by cutting-edge AI for instant responses.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[35%] px-3">
              <Image src={Logo} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
