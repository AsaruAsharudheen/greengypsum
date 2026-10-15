'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

const ITEMS_PER_PAGE = 12;
const galleryImages = Array.from({ length: 31 }, (_, i) => `/images/gallery-${i + 1}.webp`);

export default function GalleryGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const totalPages = Math.ceil(galleryImages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentImages = galleryImages.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') handleLightboxNext();
      if (e.key === 'ArrowLeft') handleLightboxPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, selectedImageIndex]);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(p => p + 1);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(p => p - 1);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const openLightbox = (globalIndex: number) => {
    setSelectedImageIndex(globalIndex);
    setLightboxOpen(true);
  };

  const handleLightboxNext = () => {
    setSelectedImageIndex(prev => (prev + 1) % galleryImages.length);
  };

  const handleLightboxPrev = () => {
    setSelectedImageIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <>
      <section className="py-24 bg-white min-h-[800px]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
            >
              {currentImages.map((src, idx) => {
                const globalIndex = startIndex + idx;
                return (
                  <div 
                    key={globalIndex} 
                    onClick={() => openLightbox(globalIndex)}
                    className="break-inside-avoid relative rounded-xl overflow-hidden group shadow-sm border border-gray-100 cursor-pointer"
                  >
                    <img 
                      src={src} 
                      alt={`Green Gypsum Gallery Image ${globalIndex + 1}`} 
                      loading="lazy"
                      className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl flex items-center justify-center">
                      <span className="bg-white/90 text-brand-charcoal text-sm font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-95 group-hover:scale-100 transform">
                        View Image
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          <div className="mt-16 flex items-center justify-center space-x-4">
            <button 
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="p-3 rounded-full border border-gray-200 text-brand-charcoal hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-brand-charcoal disabled:hover:border-gray-200 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-2 flex-wrap justify-center">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentPage(i + 1);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                    currentPage === i + 1 
                      ? 'bg-brand-primary text-white shadow-md' 
                      : 'bg-gray-50 text-brand-charcoal hover:bg-gray-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button 
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full border border-gray-200 text-brand-charcoal hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-brand-charcoal disabled:hover:border-gray-200 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          >
            <button 
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/25 rounded-full text-white transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); handleLightboxPrev(); }}
              className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/25 rounded-full text-white transition-all hover:scale-110 z-50"
            >
              <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            <div className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4 sm:mx-24 flex items-center justify-center">
              <img 
                src={galleryImages[selectedImageIndex]}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain select-none rounded-sm shadow-2xl"
              />
              <div className="absolute bottom-[-40px] text-white/50 text-sm tracking-widest font-mono">
                {selectedImageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); handleLightboxNext(); }}
              className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/25 rounded-full text-white transition-all hover:scale-110 z-50"
            >
              <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
