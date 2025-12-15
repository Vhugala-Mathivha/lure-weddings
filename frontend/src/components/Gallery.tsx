import React from "react";

const INSPIRATION_IMAGES = [
  { id: 1, url: "/3fc47e66c0d63b01d1d594c1070d87f8.jpg", alt: "Elegant table setting with greenery" },
  { id: 2, url: "/5f2ecca8240d9f9a27f4568ff2cc9b9d.jpg", alt: "Bridal bouquet details" },
  { id: 3, url: "/7dce4b34c2d1526e0c5ad2fcce5e864f.jpg", alt: "Bride and groom with bouquet" },
  { id: 4, url: "/21cc2c7fbc23486032c5310424c5980d.jpg", alt: "Bride and groom shoes" },
  { id: 5, url: "/221af125389a0fca52abb7e87d1fb951.jpg", alt: "Outdoor ceremony arch at sunset" },
  { id: 6, url: "/2036be4a8b636fbb29d5539609749bfe.jpg", alt: "Groom details" },
  { id: 7, url: "/474bf40c6d8ec6547b5d0f762ae56547.jpg", alt: "Wedding cake" },
  { id: 8, url: "/e0ad1b12affc6f30ad8ea358288e59ba.jpg", alt: "Wedding rings on bouquet" },
  { id: 9, url: "/acf046be109bcf05cf1ad03870767a7a.jpg", alt: "Just married couple walking" },
  { id: 10, url: "/e898f512649ec3b00a9cbee005d3a7aa.jpg", alt: "Champagne toast with rings" },
  { id: 11, url: "/e6a1d6de336a7c8c61de70c8d399138a.jpg", alt: "Invitation flatlay" },
  { id: 12, url: "/f687f51f71f11c3cdf5125b780d83dcd.jpg", alt: "Pastel floral centerpiece" },
];

export const Gallery: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-[11px] tracking-[0.38em] uppercase text-[#b0a79e] mb-3">
            The Gallery
          </p>
          <h3 className="font-serif text-4xl md:text-[40px] text-[#2d241d] mb-4">
            Curated Moments
          </h3>
          <p className="text-[15px] text-[#7a7068] leading-relaxed">
            A collection of timeless aesthetics to spark your imagination.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {INSPIRATION_IMAGES.map((img) => (
            <div key={img.id} className="break-inside-avoid overflow-hidden">
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-auto object-cover align-top"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};