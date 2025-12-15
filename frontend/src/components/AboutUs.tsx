import React from "react";

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="bg-white animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className="relative py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-lure-600 text-xs tracking-[0.3em] uppercase mb-6 font-semibold">
            The Philosophy
          </h2>
          <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-8 leading-tight">
            Redefining the <br /> <span className="italic">Art of Planning</span>
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-lure-200 z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800"
              alt="Wedding Details"
              className="relative z-10 w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 shadow-md"
            />
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-3xl text-stone-900">Technology Meets Tradition</h3>
            <p className="text-stone-600 font-light leading-loose text-lg">
              LURE was founded on the belief that wedding planning should be as beautiful as the day itself. We
              strip away the stress of logistics, replacing spreadsheets with intuitive, AI-driven guidance.
            </p>
            <p className="text-stone-600 font-light leading-loose text-lg">
              Our tools are designed not just to organize, but to inspire. From crafting the perfect vows to
              visualizing your dream aesthetic, LURE serves as your silent partner, ensuring every detail reflects
              your unique love story.
            </p>
            <div className="pt-8">
              <div className="h-px w-20 bg-lure-400 mb-6"></div>
              <p className="font-serif italic text-[17px] leading-8 text-[#5a463a]">
                “Elegance is not about being noticed, it’s about being remembered.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};