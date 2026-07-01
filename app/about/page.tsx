import Hero from "../about/home/Hero";
import About from "../about/home/About";
import Locations from "../about/home/Locations";
import ScrollToTop from "../components/layout/ScrollToTop";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <About />
      <Locations />
      

      {/* Botón volver arriba */}
      <ScrollToTop />
    </>
  );
}