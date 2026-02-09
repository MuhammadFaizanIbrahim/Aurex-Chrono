"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PreOrderModal({ isOpen, onClose }: PreOrderModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-void/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-3xl bg-brand-void border border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)]"
          >
            {/* Visual Side */}
            <div className="relative hidden md:block group overflow-hidden border-r border-white/5">
              <div className="absolute inset-0 bg-[url('/ui/preorder_bg.png')] bg-cover bg-center transition-transform duration-[10s] ease-linear group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-void/80" />
              <div className="absolute bottom-12 left-12">
                 <span className="text-white/40 font-mono text-[10px] tracking-[0.5em] uppercase block mb-2">Technical Core</span>
                 <h3 className="text-white text-3xl font-bold tracking-tighter">ENGINEERED <br/>FOR THE VOYAGE</h3>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-8 md:p-14 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[80px] -translate-y-1/2 translate-x-1/2" />
               
               <button 
                onClick={onClose}
                className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors z-10"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {!isSuccess ? (
                <>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-10"
                  >
                    <span className="text-brand-silver font-mono text-[10px] tracking-[0.4em] uppercase block mb-4 opacity-50">Reservation Tier 01</span>
                    <h2 className="text-4xl font-black tracking-tighter text-white mb-4 uppercase">Secure <br/><span className="text-premium-gradient">Your Build</span></h2>
                    <p className="text-white/30 text-[11px] leading-relaxed max-w-[280px] uppercase tracking-wide">
                      Production slot allocation for the Calibre 01 series.
                    </p>
                  </motion.div>

                  <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-1.5"
                    >
                      <label className="text-[9px] font-mono tracking-[0.3em] text-white/20 uppercase">Personal Identification</label>
                      <input 
                        required
                        type="text" 
                        suppressHydrationWarning
                        className="w-full bg-white/[0.02] border border-white/5 py-4 px-5 text-white focus:outline-none focus:border-white/20 transition-all rounded-lg placeholder:text-white/10 text-sm"
                        placeholder="FULL NAME"
                      />
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-1.5"
                    >
                      <label className="text-[9px] font-mono tracking-[0.3em] text-white/20 uppercase">Communication Terminal</label>
                      <input 
                        required
                        type="email" 
                        suppressHydrationWarning
                        className="w-full bg-white/[0.02] border border-white/5 py-4 px-5 text-white focus:outline-none focus:border-white/20 transition-all rounded-lg placeholder:text-white/10 text-sm"
                        placeholder="EMAIL ADDRESS"
                      />
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-1.5"
                    >
                      <label className="text-[9px] font-mono tracking-[0.3em] text-white/20 uppercase">Specifications</label>
                      <select suppressHydrationWarning className="w-full bg-white/[0.02] border border-white/5 py-4 px-5 text-white focus:outline-none focus:border-white/20 transition-all rounded-lg appearance-none cursor-pointer text-sm">
                        <option className="bg-brand-void text-white">CHRONO 01 - TITANIUM</option>
                        <option className="bg-brand-void text-white">CHRONO 01 - BLACK DLC</option>
                        <option className="bg-brand-void text-white">CHRONO 01 - HERITAGE GOLD</option>
                      </select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="pt-6"
                    >
                      <motion.button
                        whileHover={{ scale: 1.01, backgroundColor: "#fff", color: "#000" }}
                        whileTap={{ scale: 0.99 }}
                        disabled={isSubmitting}
                        className="w-full border border-white/10 text-white font-heading font-black tracking-[0.3em] py-5 rounded-lg uppercase text-[10px] transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? "Allocating Slot..." : "Finalize Pre-Order"}
                      </motion.button>
                    </motion.div>
                    
                    <p className="text-center text-[8px] font-mono text-white/10 tracking-[0.3em] uppercase">
                      Transmission encrypted &middot; secure link
                    </p>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center text-center py-10">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mb-8 relative"
                  >
                     <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl" />
                     <svg className="w-8 h-8 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                     </svg>
                  </motion.div>
                  <h2 className="text-3xl font-black tracking-tighter text-white mb-4 uppercase">BUILD <br/><span className="text-premium-gradient">SECURED</span></h2>
                  <p className="text-white/30 text-xs font-mono tracking-widest uppercase mb-10">Archive Reference: #702-AX</p>
                  <button 
                    onClick={onClose}
                    className="text-[10px] font-mono tracking-[0.4em] text-white/40 hover:text-white transition-colors uppercase border border-white/10 px-10 py-4 rounded-full"
                  >
                    CONTINUE
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
