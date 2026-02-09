"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";

const GALLERY_IMAGES = [
  "/gallery/Gemini_Generated_Image_3ay9883ay9883ay9.png",
  "/gallery/Gemini_Generated_Image_ld19hald19hald19.png",
  "/gallery/Gemini_Generated_Image_y02xw3y02xw3y02x.png",
  "/gallery/Gemini_Generated_Image_zb7j2hzb7j2hzb7j.png",
  "/gallery/Whisk_1050c2b7f1ee896bad0489e482ed449adr.jpeg",
  "/gallery/Whisk_1adf2e9259decc991ea4c82e2fe89171dr.jpeg",
  "/gallery/Gemini_Generated_Image_x8y1tkx8y1tkx8y1.png",
  "/gallery/Whisk_4bed491f8d396eb896644439c6cd3e76dr.jpeg",
  "/gallery/Whisk_6d8be167b5f5282a41f4218a4bb01379dr.jpeg",
  "/gallery/Whisk_a50bf19afba5a18ad8948d112bafd995dr.jpeg",
];

export default function Gallery() {
  return (
    <section className="py-48 px-6 md:px-12 bg-black overflow-hidden relative">
      {/* Subtle Grain Overly */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 flex flex-col items-center text-center"
        >
          <span className="text-white/20 font-mono text-sm tracking-[0.5em] mb-6 uppercase">Curated Exhibition</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8">
            MASTERPIECE <br/><span className="text-white/20 italic">COLLECTION</span>
          </h2>
          <div className="w-1 h-20 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {GALLERY_IMAGES.map((src, index) => {
            // High-end Exhibition Layout Logic
            const isWide = index === 0 || index === 6;
            const isTall = index === 2 || index === 5 || index === 8;
            
            let gridClass = "md:col-span-4";
            if (isWide) gridClass = "md:col-span-8";
            if (isTall) gridClass = "md:col-span-4 translate-y-24";
            if (index === 1 || index === 7) gridClass = "md:col-span-4 -translate-y-12";

            return (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.98, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 1.5, 
                  delay: (index % 3) * 0.2,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`relative overflow-hidden group ${gridClass}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10 group-hover:border-white/30 transition-colors duration-700">
                  <NextImage
                    src={src}
                    alt={`Aurex Chrono Artifact ${index + 1}`}
                    fill
                    className="object-cover transition-all duration-[2s] ease-out scale-105 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
                    <p className="text-white font-mono text-xs tracking-widest mb-2 opacity-60">REF: ARCHIVE_0{index + 1}</p>
                    <h3 className="text-white text-2xl font-bold tracking-tight">VISUAL SPECIMEN</h3>
                  </div>
                </div>
                {/* Minimalist Caption Below */}
                <div className="mt-6 flex justify-between items-baseline px-2">
                   <span className="text-white/20 font-mono text-[10px] tracking-widest uppercase">Sequence_{index + 1}</span>
                   <div className="h-[1px] flex-grow mx-4 bg-white/5" />
                   <span className="text-white/40 font-mono text-[10px] tracking-widest">© 2026</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
