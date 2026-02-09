"use client";

import { useState } from "react";
import NextImage from "next/image";
import { motion, useTransform, MotionValue, AnimatePresence } from "framer-motion";
import AurexCanvas from "@/components/AurexCanvas";

interface HeroProps {
  scrollYProgress: MotionValue<number>;
}

function TextSection({
  range,
  children,
  className = "",
  scrollYProgress,
}: {
  range: [number, number];
  children: React.ReactNode;
  className?: string;
  scrollYProgress: MotionValue<number>;
}) {
  const [start, end] = range;
  const fadeInStart = start;
  const fadeInEnd = start + (end - start) * 0.2;
  const fadeOutStart = end - (end - start) * 0.2;
  const fadeOutEnd = end;

  const opacity = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    [0, 1, 1, 0]
  );
  
  const y = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    [40, 0, 0, -40]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className={`fixed inset-0 flex flex-col justify-center pointer-events-none ${className}`}
    >
      {children}
    </motion.div>
  );
}

import { usePreOrder } from "@/context/PreOrderContext";

export default function Hero({ scrollYProgress }: HeroProps) {
  const { openPreOrder } = usePreOrder();

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden">
      <AurexCanvas progress={scrollYProgress} />
      
      <motion.div 
        style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/40 font-mono text-md tracking-[0.3em] uppercase"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="flex flex-col items-center"
        >
          <div className="w-[20px] h-[32px] border-2 border-white/20 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 4, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-1 h-2 bg-white/40 rounded-full"
            />
          </div>
        </motion.div>
        <span>Scroll to Explore</span>
      </motion.div>

      <TextSection range={[0, 0.2]} scrollYProgress={scrollYProgress} className="items-center text-center">
        <h1 className="text-8xl md:text-[12rem] font-bold tracking-tighter text-premium-gradient leading-none">
          AUREX
        </h1>
        <p className="text-md md:text-xl font-mono text-brand-silver mt-4 tracking-[0.8em] uppercase opacity-70">
          Chrono
        </p>
      </TextSection>

      <TextSection range={[0.25, 0.45]} scrollYProgress={scrollYProgress} className="items-start px-12 md:px-32">
        <div className="max-w-3xl">
          <span className="text-brand-silver font-mono text-sm tracking-widest mb-4 block opacity-50 uppercase">The Interior Force</span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[0.9]">
            THE <br/><span className="text-premium-gradient">CALIBRE 01</span>
          </h2>
          <div className="w-20 h-[1px] bg-white/20 mb-8" />
          <p className="text-xl md:text-2xl text-brand-silver font-light leading-relaxed max-w-xl">
            Precision engineering meets absolute zero. 382 handcrafted components working in perfect harmony.
          </p>
        </div>
      </TextSection>

      <TextSection range={[0.5, 0.7]} scrollYProgress={scrollYProgress} className="items-end px-12 md:px-32 text-right">
        <div className="max-w-3xl flex flex-col items-end">
          <span className="text-brand-silver font-mono text-sm tracking-widest mb-4 block opacity-50 uppercase">External Strength</span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-[0.9]">
            AEROSPACE <br/><span className="text-premium-gradient">TITANIUM</span>
          </h2>
          <div className="w-20 h-[1px] bg-white/20 mb-8" />
          <p className="text-xl md:text-2xl text-brand-silver font-light leading-relaxed max-w-xl">
            Forged from Grade 5 alloys. Lighter than air, stronger than steel, finished with diamond-like carbon.
          </p>
        </div>
      </TextSection>

      <TextSection range={[0.75, 0.95]} scrollYProgress={scrollYProgress} className="items-center text-center">
        <div className="flex flex-col items-center relative">
          <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-8">
            OWN THE <br/><span className="text-premium-gradient">SECOND</span>
          </h2>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            onClick={openPreOrder}
            className="pointer-events-auto px-16 py-5 bg-white text-brand-void font-heading font-black tracking-[0.2em] text-sm md:text-base transition-shadow hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] rounded-full uppercase"
          >
            Pre-Order Now
          </motion.button>
        </div>
      </TextSection>
    </div>
  );
}
