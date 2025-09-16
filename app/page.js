import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Important from "./components/Important";
import Special from "./components/Special";
import What from "./components/What";
import Where from "./components/Where";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <What />
      <Where />
      <Special />
      <Important />
      <Footer />
    </div>
  );
}
