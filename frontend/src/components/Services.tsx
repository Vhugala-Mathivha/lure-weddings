import React from "react";

interface ServicesProps {
  onNavigate?: (view: string, sectionId?: string) => void;
}

type Service = {
  id: string;
  view: string;
  sectionId?: string;
  title: string;
  description: string;
  image: string;
  iconImage: string;
  iconAlt: string;
};

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services: Service[] = [
    {
      id: "planner",
      view: "planner",
      title: "General Wedding Planning",
      description:
        "Expert guidance on etiquette, timelines, and logistics from our AI concierge.",
      image:
        "/plan.jpg",
      iconImage:
        "/icon.png",
      iconAlt: "Planning icon",
    },
    {
      id: "vision",
      view: "home",
      sectionId: "vision-section",
      title: "Aesthetic Vision Board",
      description:
        "Generate bespoke visual inspiration for your decor, attire, and venue. Scroll down on the home page to start.",
      image:
        "/6726043c22bf3ac45684472580ef5427.jpg",
      iconImage:
        "/icon.png",
      iconAlt: "Vision board icon",
    },
    {
      id: "vows",
      view: "vows",
      title: "Vow Atelier",
      description:
        "Craft articulate, heartfelt vows that capture your unique love story.",
      image:
        "/vow.jpg",
      iconImage:
        "/icon.png",
      iconAlt: "Writing icon",
    },
  ];

  const handleServiceClick = (service: Service) => {
    if (!onNavigate) return;
    if (service.id === "vision") {
      onNavigate(service.view, service.sectionId);
    } else {
      onNavigate(service.view);
    }
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-serif text-[34px] md:text-[40px] text-[#2d241d] mb-4">
            Our Curated Services
          </h2>
          <p className="text-[15px] text-[#7a7068] leading-relaxed">
            LURE combines timeless wedding expertise with advanced intelligence to offer a suite of planning
            tools designed for the modern couple.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service)}
              className="cursor-pointer bg-white rounded-[10px] border border-[#e8e2dc] shadow-[0_8px_16px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_22px_rgba(0,0,0,0.08)]"
            >
              <div className="h-[210px] md:h-[230px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-8 py-8 text-center">
                <div className="w-10 h-10 mx-auto mb-5 rounded-full border border-[#e6e1dc] flex items-center justify-center overflow-hidden">
                  <img
                    src={service.iconImage}
                    alt={service.iconAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h3 className="font-serif text-xl text-[#2d241d] mb-3">
                  {service.title}
                </h3>
                <p className="text-[13px] leading-6 text-[#7a7068] mb-6">
                  {service.description}
                </p>

                <span className="inline-flex items-center justify-center text-[11px] font-semibold tracking-[0.14em] uppercase text-[#2d241d]">
                  Access Tool <span className="ml-2">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};