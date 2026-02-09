"use client";

import { useRef, useEffect, useState } from "react";
import { useMotionValueEvent, MotionValue, useSpring } from "framer-motion";

const FRAME_COUNT = 240;
const CANVAS_WIDTH = 1920; 
const CANVAS_HEIGHT = 1080;

interface AurexCanvasProps {
  progress: MotionValue<number>;
}

export default function AurexCanvas({ progress }: AurexCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const smoothProgress = useSpring(progress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        // Format frame number to 4 digits: 0001, 0002, ...
        const frameNumber = i.toString().padStart(4, "0");
        img.src = `/frames2/frame_${frameNumber}.webp`;
        
        await new Promise((resolve) => {
            img.onload = () => {
                loadedCount++;
                setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                resolve(null);
            };
            img.onerror = () => {
                 console.error(`Failed to load frame_${frameNumber}.webp`);
                 // Resolve anyway to prevent blocking
                 loadedCount++; 
                 resolve(null);
            }
        });
        loadedImages.push(img);
      }

      setImages(loadedImages);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ensure index is within bounds
    const safeIndex = Math.min(
      Math.max(Math.round(index), 0),
      images.length - 1
    );
    
    const img = images[safeIndex];
    if (!img) return;

    // Resize canvas to match window size for high fidelity
    // But we need to maintain aspect ratio logic "contain"
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    canvas.width = windowWidth;
    canvas.height = windowHeight;

    const imgRatio = CANVAS_WIDTH / CANVAS_HEIGHT;
    const winRatio = windowWidth / windowHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (winRatio > imgRatio) {
      // Window is wider than image -> fit width (cover)
      drawWidth = windowWidth;
      drawHeight = windowWidth / imgRatio;
      offsetX = 0;
      offsetY = (windowHeight - drawHeight) / 2;
    } else {
      // Window is taller than image -> fit height (cover)
      drawHeight = windowHeight;
      drawWidth = windowHeight * imgRatio;
      offsetX = (windowWidth - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, windowWidth, windowHeight);
    
    // Smooth image rendering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (isLoaded) {
      const frameIndex = latest * (images.length - 1);
      requestAnimationFrame(() => renderFrame(frameIndex));
    }
  });

  // Initial render when loaded
  useEffect(() => {
    if (isLoaded) {
      renderFrame(0);
    }
  }, [isLoaded]);

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
           if(isLoaded) {
             // Re-render current frame on resize
             const currentProgress = smoothProgress.get();
             const frameIndex = currentProgress * (images.length - 1);
             renderFrame(frameIndex);
           }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded, smoothProgress]);


  return (
    <>
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white">
           <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
               <div 
                 className="h-full bg-white transition-all duration-100 ease-out" 
                 style={{ width: `${loadProgress}%` }}
               />
           </div>
           <p className="font-mono text-xs tracking-widest text-white/50">INITIALIZING SEQUENCE {loadProgress}%</p>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full object-contain pointer-events-none"
        style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 1s ease-in-out" }}
      />
    </>
  );
}
