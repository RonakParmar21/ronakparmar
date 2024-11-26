import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Services"><Parallax type="services" /></section>
      <section id="Portfolio">Services</section>
      <section><Parallax type="portfolio" /></section>
      <section id="">Portfolio1</section>
      <section id="About">Portfolio2</section>
      <section id="">Portfolio3</section>
      <section id="Cotact">Contact</section>

      {/* <Test /> */}
    </div>
  );
};

export default App;
