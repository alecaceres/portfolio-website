import GradientSpot from "@/components/GradientSpot";
import {About, Education, Experience, Hero, Navbar, Technologies, Projects, ContactForm, Footer} from "@/sections";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <GradientSpot/>
      <Navbar />
      <div className="flex flex-col container mt-24 mx-auto px-6 md:px-10 lg:px-12 py-4 relative gap-y-12 sm:gap-y-16 md:gap-y-20 lg:gap-y-24">
        <Hero />
        <Technologies/>
        <About/>
        <Experience/>
        <Education/>
        <Projects/>
        <ContactForm/>
      </div>
      <Footer/>
    </main>
  );
}