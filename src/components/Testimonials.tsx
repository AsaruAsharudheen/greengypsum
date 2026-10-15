'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-brand-offwhite relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold font-montserrat mb-6 text-brand-charcoal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-brand-border text-center relative"
            >
              <Quote className="w-16 h-16 mx-auto text-brand-primary/20 mb-8" />
              <p className="text-xl md:text-2xl text-brand-charcoal font-medium leading-relaxed italic mb-10">
                {testimonials[currentIndex].text}
              </p>
              <div>
                <h4 className="text-lg font-bold font-montserrat text-brand-primary">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  {testimonials[currentIndex].project}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-brand-charcoal hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === currentIndex ? 'bg-brand-primary' : 'bg-brand-border hover:bg-brand-primary/50'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-brand-charcoal hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
