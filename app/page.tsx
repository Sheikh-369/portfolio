// import About from "./components/About";
// import Contact from "./components/Contact";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";

import About from "./components/About";
import BackgroundBlobs from "./components/BackgroundBlobs";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

// export default function Home() {
//   return (
//     <main className="font-body min-h-screen relative z-10">
//       <Navbar />
//       <Hero />
//       <Skills />
//       <Projects />
//       <About />
//       <Contact />
//     </main>
//   );
// }

//2nd


export default function Home() {
  return (
    <main>
      <BackgroundBlobs />

      <Navbar />

      <Hero />

      <Skills />

      <Projects/>

      <About />

      <Contact />

      {/* <Footer /> */}

    </main>
  );
}