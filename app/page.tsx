import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Leadership } from "@/components/Leadership";
import { Timeline } from "@/components/Timeline";
import { Certifications } from "@/components/Certifications";
import { Writing } from "@/components/Writing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackgroundFX } from "@/components/BackgroundFX";

export default function Page() {
  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Leadership />
        <Timeline />
        <Certifications />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
