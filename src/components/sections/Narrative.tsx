"use client";

import { motion } from "framer-motion";

export default function Narrative() {
  return (
    <section id="story" className="relative z-10 bg-brand-void py-48 px-6">
      <div className="text-center max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-[10rem] font-black tracking-tighter mb-16 leading-[0.8] text-white"
        >
          BORN IN <br/><span className="text-premium-gradient">THE VOID</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-2xl md:text-4xl text-brand-silver font-light leading-relaxed italic"
        >
          &quot;Time is not linear. It is a construct we created to measure our existence. 
          The Aurex Chrono is a monument to that measurement.&quot;
        </motion.p>
        <div className="mt-12 w-1 h-32 bg-gradient-to-b from-white/20 to-transparent mx-auto" />
      </div>
    </section>
  );
}
