import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import ParticleBackground from "./component/Particle";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Testimonial from "./component/Testimonials";
import Experience from "./component/Experience";

const App = () => {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
