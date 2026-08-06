import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";

// scroll-mt-24 = offset so anchored sections don't hide under the fixed h-20 navbar
const sectionClass = "scroll-mt-24 relative";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
        {/* Ambient background depth — soft, fixed, sits behind every section */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-144 w-xl -translate-x-1/2 rounded-full bg-amber-400/5 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-112 w-md rounded-full bg-indigo-500/6 blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_60%)]" />
        </div>

        <section id="home" className={sectionClass}>
          <Hero />
        </section>

        <Divider />
        <section id="about" className={sectionClass}>
          <About />
        </section>

        <Divider />
        <section id="skills" className={sectionClass}>
          <Skills />
        </section>

        <Divider />
        <section id="experience" className={sectionClass}>
          <Experience />
        </section>

        <Divider />
        <section id="projects" className={sectionClass}>
          <Projects />
        </section>

        <Divider />
        <section id="education" className={sectionClass}>
          <Education />
        </section>

        <Divider />
        <section id="certificates" className={sectionClass}>
          <Certificates />
        </section>

        <Divider />
        <section id="contact" className={sectionClass}>
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

// Hairline gradient divider between sections — quiet, not decorative for its own sake
function Divider() {
  return (
    <div className="mx-auto h-px w-full max-w-5xl bg-linear-to-r from-transparent via-white/10 to-transparent" />
  );
}