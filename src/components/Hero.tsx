'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Responsive state
  const [isMobile, setIsMobile] = useState(false);
  const [frameCount, setFrameCount] = useState(194);
  const [framePrefix, setFramePrefix] = useState('/video-frames/');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 70,
    mass: 0.1
  });

  // Handle Resize and determine mobile/desktop
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setFrameCount(242);
        setFramePrefix('/video-frames-mobile/');
      } else {
        setFrameCount(194);
        setFramePrefix('/video-frames/');
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preload images whenever framePrefix or frameCount changes
  useEffect(() => {
    setImagesLoaded(false);
    imagesRef.current = [];
    
    let loadedCount = 0;
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Pad to 4 digits
      const paddedIndex = i.toString().padStart(4, '0');
      img.src = `${framePrefix}frame_${paddedIndex}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) {
          // Trigger first frame draw immediately when the first frame loads
          setImagesLoaded(true);
        }
      };
      imagesRef.current.push(img);
    }
  }, [frameCount, framePrefix]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    
    // Set appropriate canvas resolution
    if (isMobile) {
      canvas.width = 720;
      canvas.height = 1280;
    } else {
      canvas.width = 1280;
      canvas.height = 720;
    }
    
    let animationFrameId: number;
    let lastRenderedIndex = -1;

    const renderLoop = () => {
      const progress = smoothProgress.get();
      const frameIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(progress * frameCount))
      );

      if (frameIndex !== lastRenderedIndex) {
        const img = imagesRef.current[frameIndex];
        if (img && img.complete) {
          // Draw the image exactly to the canvas bounds
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
          lastRenderedIndex = frameIndex;
        }
      }
      
      animationFrameId = requestAnimationFrame(renderLoop);
    };
    
    if (imagesLoaded) {
       renderLoop();
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [smoothProgress, imagesLoaded, isMobile, frameCount]);

  const textOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.3], [0, -100]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-brand-charcoal">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Canvas for High-Performance Scrubbing */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0  pointer-events-none" />

        {/* Hero Text Content */}
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="container relative z-20 mx-auto px-4 md:px-6 lg:px-8 text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1.5 px-4 mb-6 text-xs md:text-sm font-semibold tracking-widest uppercase bg-brand-primary/20 border border-brand-primary/50 backdrop-blur-sm rounded-full">
              Premium Gypsum & Interior Solutions
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transforming Spaces <br className="hidden md:block" />
            Into Exceptional Interiors
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Premium ceiling, partition and POP solutions crafted with precision, creativity and attention to detail.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              href="/services"
              className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-brand-deep text-white rounded-sm font-semibold transition-all hover:-translate-y-1 shadow-lg"
            >
              Explore Our Services
            </Link>
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-sm font-semibold transition-all hover:-translate-y-1"
            >
              Get a Free Consultation
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
        >
          <span className="text-white/80 text-xs tracking-widest uppercase mb-3 font-semibold">Scroll Down</span>
          <div className="w-[1px] h-16 bg-white/20 overflow-hidden">
            <motion.div 
              className="w-full h-1/2 bg-brand-primary"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
