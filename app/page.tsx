import About from "@/components/About";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Ready from "@/components/Ready";
import Topbar from "@/components/Topbar";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div>
      <Topbar />
      <Hero />
      <div className="w-full h-[15vw]"></div>
      <About />
      <Works />
      <Pricing />
      <Faq />
      <Ready />
      <div></div>
    </div>
  );
}
