"use client";
import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import HomeComponent from "./components/home/home";
import "./styles.css";
import AboutMe from "./components/about-me/aboutme";
import Education from "./components/education/education";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Skills from "./components/skills/skills";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#083344] to-[#0a2e3f] text-white relative overflow-x-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 bg-repeat" />

      <div className="relative z-10">
        <Navbar />

        <div className="container mx-auto px-4 space-y-24 pt-20">
          <section id="home" className="min-h-screen flex items-center">
            <HomeComponent />
          </section>

          <section id="about" className="scroll-mt-20">
            <AboutMe />
          </section>

          <section id="education" className="scroll-mt-20">
            <Education />
          </section>

          <section id="experience" className="scroll-mt-20">
            <Experience />
          </section>

          <section id="skills" className="scroll-mt-20">
            <Skills />
          </section>

          <section id="projects" className="scroll-mt-20">
            <Projects />
          </section>

          <section id="contact" className="scroll-mt-20 pb-24">
            <Contact />
          </section>
        </div>
      </div>
    </main>
  );
}
