import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      {/* <section id="Services"><Parallax type="services" /></section> */}
      <section id="Portfolio"><Services /></section>
      {/* <section><Parallax type="portfolio" /></section> */}
        <Projects />
      <section id="Cotact"><Contact /></section>

      {/* <Test /> */}
      
    </div>
  );
};

export default App;
