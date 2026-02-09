"use client";

import NextImage from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
          <div className="flex flex-col gap-6">
            <div className="relative w-48 h-10">
              <NextImage src="/images/logo.png" alt="Aurex" fill className="object-contain object-left" />
            </div>
            <p className="text-white/30 font-mono text-md tracking-[0.2em] max-w-xs uppercase leading-relaxed">
              Defining the boundaries of mechanical horology in extreme conditions.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-20 gap-y-10 text-md font-mono tracking-[0.4em] uppercase text-white/40">
            <ul className="flex flex-col gap-4">
              <li className="text-white/80 text-md">Collections</li>
              <li><a href="#" className="hover:text-white transition-colors">Chrono 01</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aerospace</a></li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="text-white/80 text-md">Heritage</li>
              <li><a href="#" className="hover:text-white transition-colors">The Void</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manufacturing</a></li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="text-white/80 text-md">Support</li>
              <li><a href="#contact" className="hover:text-white transition-colors">Concierge</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-md font-mono tracking-[0.2em] text-white/20">
            &copy; 2026 AUREX WATCH CO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-md font-mono tracking-[0.2em] text-white/20 uppercase">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
