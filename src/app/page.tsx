"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import Hero from "@/components/sections/Hero";
import Craftsmanship from "@/components/sections/Craftsmanship";
import Specifications from "@/components/sections/Specifications";
import Gallery from "@/components/Gallery";
import Narrative from "@/components/sections/Narrative";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });
  
  return (
    <main className="bg-brand-void min-h-screen">
      
      {/* SCROLLYTELLING HERO SECTION */}
      <div ref={heroRef} className="relative h-[400vh] w-full">
         <Hero scrollYProgress={scrollYProgress} />
      </div>

      {/* CRAFTSMANSHIP SECTION */}
      <Craftsmanship />

      {/* SPECIFICATIONS SECTION */}
      <Specifications />

      {/* GALLERY SECTION */}
      <div id="gallery">
        <Gallery />
      </div>

      {/* NARRATIVE / VISION */}
      <Narrative />

      {/* CONTACT SECTION */}
      <Contact />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}
