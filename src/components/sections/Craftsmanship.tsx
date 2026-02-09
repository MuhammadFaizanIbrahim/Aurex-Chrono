"use client";

import { motion } from "framer-motion";

export default function Craftsmanship() {
  return (
    <section className="relative z-10 bg-brand-void py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full aspect-video rounded-3xl overflow-hidden mb-16 relative border border-white/5"
        >
          <div className="absolute inset-0 bg-[url('/gallery/Gemini_Generated_Image_3ay9883ay9883ay9.png')] bg-cover bg-center opacity-40 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-void via-brand-void/20 to-brand-void" />
          <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
            <h2 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">
              HANDCRAFTED <br/> IN SWITZERLAND
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
