"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 bg-brand-void py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Cinematic Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/[0.01] blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-brand-silver font-mono text-xs tracking-[0.4em] uppercase block mb-6">Concierge</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-10 leading-none">
                GET IN <br/><span className="text-premium-gradient">TOUCH</span>
              </h2>
              <div className="w-20 h-[1px] bg-white/20 mb-10" />
            </motion.div>
            
            <div className="space-y-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/30">Headquarters</h4>
                  <p className="text-white text-lg font-light leading-relaxed">
                    Rue du Rhône 12, <br/>
                    1204 Geneva, <br/>
                    Switzerland
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/30">Support</h4>
                  <p className="text-white text-lg font-light leading-relaxed">
                    concierge@aurex.chrono <br/>
                    +41 22 555 0192
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                 <h4 className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/30">Follow the Void</h4>
                 <div className="flex gap-8 text-white/40 text-xs font-mono tracking-widest uppercase">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">X / Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                 </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 md:p-14 border-white/5">
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Direct Inquiry</h3>
            <form className="space-y-8" suppressHydrationWarning>
              <div className="space-y-2">
                <label className="text-[10px] font-mono tracking-widest text-white/30 uppercase">Subject</label>
                <select className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer" suppressHydrationWarning>
                  <option className="bg-brand-void text-white">General Inquiry</option>
                  <option className="bg-brand-void text-white">Bespoke Build</option>
                  <option className="bg-brand-void text-white">Press & Media</option>
                  <option className="bg-brand-void text-white">Service & Repair</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-widest text-white/30 uppercase">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors" suppressHydrationWarning />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-widest text-white/30 uppercase">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors" suppressHydrationWarning />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono tracking-widest text-white/30 uppercase">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none" suppressHydrationWarning />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-brand-void font-heading font-black tracking-[0.2em] py-5 rounded-full uppercase text-xs transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
