import GradientSpot from "@/components/GradientSpot";
import {About, Education, Experience, Hero, Navbar, Technologies, Projects} from "@/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <GradientSpot/>
      <Navbar />
      <div className="flex flex-col container mt-24 mx-auto px-12 py-4 relative gap-y-24">
        <Hero />
        <Technologies/>
        <About/>
        <Experience/>
        <Education/>
        <Projects/>
      </div>
    </main>
  );
}