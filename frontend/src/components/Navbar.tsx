import React, { useState } from "react";

const logoSrc = "/logo.png"; // ensure logo.png is in frontend/public

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#inspiration", label: "Inspiration" },
  { href: "#vows", label: "Vow Writer" },
  { href: "#contact", label: "Contact" },
];

const scrollToHash = (hash: string) => {
  const el = document.querySelector(hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    // Fallback: set the hash to let the browser jump
    window.location.hash = hash;
  }
};

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (href: string) => {
    setIsMobileMenuOpen(false);
    scrollToHash(href);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-[rgba(0,0,0,0.05)]"
      style={{ height: "2.2cm" }}
    >
      <div className="lux-container h-full flex items-center justify-between py-3">
        <button
          onClick={() => handleNav("#home")}
          className="h-full flex items-center"
          aria-label="Go to home"
        >
          <img
            src={logoSrc}
            className="h-12 w-auto object-contain"
            loading="lazy"
            alt="LURE Weddings logo"
          />
        </button>

        <nav className="hidden md:flex h-full items-center gap-8 text-sm uppercase tracking-[0.18em] text-[rgba(31,26,23,0.72)]">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="relative pb-1 hover:text-charcoal"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="md:hidden h-full flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="text-stone-600 hover:text-charcoal text-lg px-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[rgba(0,0,0,0.05)] shadow-sm">
          <div className="flex flex-col px-6 py-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="py-3 text-sm uppercase tracking-[0.16em] text-left text-[rgba(31,26,23,0.7)]"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};