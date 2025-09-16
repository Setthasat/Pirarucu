import React from "react";
import HeroImg from "../../public/Hero.png";
import { Play } from "lucide-react";

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#134E4A] via-[#115E59] to-[#0F172A]">
        <img src={HeroImg.src} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <div className="mb-6 text-7xl font-extrabold">
          <h1 className="text-white">
            Meet the <span className="text-[#5EEAD4]">Pirarucu</span>
          </h1>
        </div>
        <div className="w-full flex justify-center items-center px-4">
          <p className="text-white">
            Discover one of the Amazon's most magnificent giants - a freshwater
            fish that can grow over 2 meters long and breathe air like no other.
          </p>
        </div>
        <div className="mt-6 flex justify-center items-center gap-6">
          <a
            href="https://en.wikipedia.org/wiki/Arapaima_gigas"
            target="_blank"
            className="bg-[#5EEAD4] w-[40%] text-white font-bold py-3 px-4 rounded flex justify-center items-center cursor-pointer gap-2"
          >
            <Play /> Watch Documentary
          </a>
          <a
            href="#feature"
            className="w-[30%] text-white border font-bold py-3 px-4 rounded cursor-pointer hover:text-[#5EEAD4] hover:border-[#5EEAD4]"
          >
            Explore Facts
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
