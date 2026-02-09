"use client";

import { motion } from "framer-motion";

const SPECS = [
  { label: "Movement", value: "Calibre 01 Automatic" },
  { label: "Case", value: "Grade 5 Titanium" },
  { label: "Glass", value: "Sapphire Crystal" },
  { label: "Water Resistance", value: "200m / 660ft" },
  { label: "Diameter", value: "42.5mm" },
  { label: "Power Reserve", value: "72 Hours" },
];

export default function Specifications() {
  return (
    <section id="specs" className="relative z-10 bg-brand-void py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
              <span className="text-white">TECHNICAL</span> <br/>
              <span className="text-white/30">CORE</span>
            </h3>
            <p className="text-brand-silver text-xl font-light leading-relaxed max-w-md opacity-60">
              Every component of the Aurex Chrono is machined to a tolerance of 0.001mm. 
              Tested in G-Force chambers and cryo-vacuum environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-12">
            {SPECS.map((spec, i) => (
              <motion.div 
                key={spec.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group"
              >
                <h4 className="text-md font-mono tracking-[0.4em] uppercase text-white/30 mb-2 group-hover:text-white/50 transition-colors">{spec.label}</h4>
                <p className="text-white text-xl md:text-2xl font-bold tracking-tight">{spec.value}</p>
                <div className="w-full h-[1px] bg-white/5 mt-4 group-hover:bg-white/20 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
