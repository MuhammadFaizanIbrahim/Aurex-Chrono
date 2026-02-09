"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

// Lazy load non-critical sections
const Craftsmanship = dynamic(() => import("@/components/sections/Craftsmanship"), { ssr: true });
const Specifications = dynamic(() => import("@/components/sections/Specifications"), { ssr: true });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: true });
const Narrative = dynamic(() => import("@/components/sections/Narrative"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

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
