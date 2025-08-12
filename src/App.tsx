import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#02040a] via-[#05060a] to-[#071127]">
      <Nav />
      <main>
        <div className="container">
          <Hero />
          <About />
          <Skills />
          <Timeline />
          <Projects />
          <Publications />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
