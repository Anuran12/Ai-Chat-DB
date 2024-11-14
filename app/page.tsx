"use client";
import About from "@/components/About";
import Faq from "@/components/Faq";
import FileList from "@/components/File/FileList";
import FolderList from "@/components/Folder/FolderList";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Ready from "@/components/Ready";
import Topbar from "@/components/Topbar";
import Works from "@/components/Works";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <div className="flex flex-col w-full pt-6 gap-3">
          <div className=" bg-[#010314] py-3 px-10 rounded-[50px]">
            <h1 className="font-bold text-[1.5rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text text-center inline-block w-fit">
              Folder 1
            </h1>
            <div> </div>
          </div>
          <div className="grid grid-cols-4 w-full">
            <div className="col-span-3">
              <FolderList />
              <FileList />
            </div>
            <div className="w-full h-[70vh] bg-[#010314]">
              Storage
              <button onClick={() => signOut()}>Logout</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Topbar />
          <Hero />
          <div className="w-full h-[15vw]"></div>
          <About />
          <Works />
          <Pricing />
          <Faq />
          <Ready />
          <Footer />
        </div>
      )}
    </>
  );
}
