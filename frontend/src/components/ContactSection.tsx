import React from "react";

const emailIcon = "/email.png"; // place email.png in frontend/public
const phoneIcon = "/phone.png"; // place phone.png in frontend/public

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-[#f9f8f6] py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#b0a79e] mb-4">Get in touch</p>
        <h2 className="font-serif text-4xl md:text-[40px] text-[#2d241d] mb-2">Begin Your Journey</h2>
        <p className="italic text-[#7a7068] mb-12">“For flawless planning”</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#ede7e0] shadow-[0_10px_18px_rgba(0,0,0,0.05)] rounded-[6px] p-8 flex flex-col items-center text-[#2d241d]">
            <div className="w-10 h-10 rounded-full bg-[#f3eee8] flex items-center justify-center mb-5 overflow-hidden">
              <img src={emailIcon} alt="Email icon" className="w-14 h-14 object-contain" loading="lazy" />
            </div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#9c8b7f] mb-2">Email</p>
            <a href="mailto:vhugalamathivha@gmail.com" className="text-[15px] text-[#2d241d] hover:text-[#7a5f4d] transition">
              vhugalamathivha@gmail.com
            </a>
          </div>

          <div className="bg-white border border-[#ede7e0] shadow-[0_10px_18px_rgba(0,0,0,0.05)] rounded-[6px] p-8 flex flex-col items-center text-[#2d241d]">
            <div className="w-10 h-10 rounded-full bg-[#f3eee8] flex items-center justify-center mb-5 overflow-hidden">
              <img src={phoneIcon} alt="Phone icon" className="w-14 h-14 object-contain" loading="lazy" />
            </div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#9c8b7f] mb-2">Phone</p>
            <a href="tel:+27790457095" className="text-[15px] text-[#2d241d] hover:text-[#7a5f4d] transition">
              079 045 7095
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};