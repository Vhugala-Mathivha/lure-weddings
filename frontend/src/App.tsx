import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Inspiration } from "./components/Inspiration";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { VowWriter } from "./components/VowWriter";
import { AboutUs } from "./components/AboutUs";
import {ContactSection } from "./components/ContactSection"
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-ivory text-charcoal">
      <Navbar />
      <Hero />
      <Inspiration />
      <Services />
      <Gallery />
      <VowWriter />
      <AboutUs /> {/* moved below VowWriter */}
      <ContactSection/>
      <Footer />
    </div>
  );
}

export default App;