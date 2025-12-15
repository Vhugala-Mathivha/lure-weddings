import React from "react";
import bg1 from "../assets/bg1.jpg"; // ensure this file exists; adjust path if needed

interface HeroProps {
  onStartPlanning?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartPlanning }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-stone-900 text-white"
    >
      {/* Background image with soft overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg1}
          alt="Elegant wedding backdrop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-16">
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/80 mb-4">
          Est. 2025
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
          Curating Your <br />
          <span className="italic text-lure-200">Forever</span>
        </h1>
        <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Experience the art of modern wedding planning. From AI-curated aesthetics to heartfelt vows,
          LURE brings effortless elegance to your special day.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <button
            onClick={() => onStartPlanning && onStartPlanning()}
            className="group relative px-8 py-4 bg-white text-stone-900 font-medium tracking-wide overflow-hidden transition hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center gap-3">
              WRITE VOWS
            </span>
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition" />
          </button>

          <button
            onClick={() => scrollToSection("vision-section")}
            className="px-8 py-4 bg-transparent border border-white/60 text-white font-medium tracking-wide hover:bg-white/10 transition"
          >
            FIND INSPIRATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;