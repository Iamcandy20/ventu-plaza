import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Locations from "./components/home/Locations";
import CorpLadyLee from "./components/home/CorpLadyLee";
import ScrollToTop from "./components/layout/ScrollToTop";

export default function Home() {
  return (
    <>
      <Hero />

      <Locations />
     

      {/* Botón volver arriba */}
      <ScrollToTop />
    </>
  );
}