import React from "react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[rgba(0,0,0,0.05)] py-0">
      <div className="lux-container flex flex-col md:flex-row items-center justify-between gap-1 text-[11px] text-[rgba(31,26,23,0.65)]">
        <span>© 2025 LURE Weddings. All rights reserved.</span>
        <div className="flex gap-2">
          <a href="#contact" className="hover:text-charcoal">Contact</a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-charcoal">Instagram</a>
          <a href="https://www.pinterest.com" target="_blank" rel="noreferrer" className="hover:text-charcoal">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}