import About from "@/components/About";
import Hero from "@/components/Hero";
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
      <div></div>
    </div>
  );
}
