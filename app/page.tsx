import Header from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Locations from "./components/locations";
import Achievements from "./components/cll";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Locations />
      <Achievements />
      <Footer />
    </>
  );
}
