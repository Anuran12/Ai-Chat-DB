import About from "@/components/About";
import Hero from "@/components/Hero";
import Topbar from "@/components/Topbar";

export default function Home() {
  return (
    <div>
      <Topbar />
      <Hero />
      <div className="w-full h-[15vw]"></div>
      <About />
      <div></div>
    </div>
  );
}
