"use client";

import NextImage from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { usePreOrder } from "@/context/PreOrderContext";

export default function Navbar() {
  const { scrollY } = useScroll();
  const { openPreOrder } = usePreOrder();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-3 transition-all duration-500
        ${hasScrolled ? " backdrop-blur-md py-3" : "bg-transparent"}
      `}
    >
      <Link href="/" className="block relative w-32 h-8 md:w-70 md:h-20 transition-transform hover:scale-105 active:scale-95">
        <NextImage 
          src="/images/logo.png" 
          alt="AUREX Chrono Logo" 
          fill
          className="object-contain object-left"
          priority
        />
      </Link>

      <div className="flex items-center gap-10">
        <div className="hidden md:flex items-center gap-10 text-md items-baseline font-mono tracking-[0.3em] uppercase text-white/40">
          <Link href="#specs" className="hover:text-white transition-colors">
            Specifications
          </Link>
          <Link href="#gallery" className="hover:text-white transition-colors">
            Gallery
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openPreOrder}
          className="bg-white text-brand-void font-heading font-bold text-xs md:text-sm tracking-[0.15em] uppercase px-6 py-2 md:px-8 md:py-3 rounded-full transition-shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          Pre-Order
        </motion.button>
      </div>
    </motion.nav>
  );
}
