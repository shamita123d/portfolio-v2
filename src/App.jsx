import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Qualification from "./components/Qualification";
import Achievement from "./components/Achievement";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300  selection:text-cyan-900 ${
        darkMode ? "bg-black" : ""
      }`}
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen
      bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
        ></div>
      </div>

      <div className="container mx-auto px-8"></div>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Qualification />
      <Achievement />
      <Contact />
    </div>
  );
}
