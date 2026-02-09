import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AUREX Chrono | Own the Second",
  description: "Swiss Precision. Aerospace Materials. The Future of Time.",
};

import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { PreOrderProvider } from "@/context/PreOrderContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased text-white bg-[#050505]`}
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          <PreOrderProvider>
            <Navbar />
            {children}
          </PreOrderProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
