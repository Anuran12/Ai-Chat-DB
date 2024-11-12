import About from "@/components/About";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
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
      <div></div>
    </div>
  );
}
