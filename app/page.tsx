"use client";
import About from "@/components/About";
import Faq from "@/components/Faq";
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
        <div>
          CHAT
          <button onClick={() => signOut()}>Logout</button>
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
