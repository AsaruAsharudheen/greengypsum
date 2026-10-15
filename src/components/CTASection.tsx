'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-brand-deep/80 mix-blend-multiply z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/gallery-3.webp)' }}
        />
      </motion.div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 lg:px-8 text-center text-white">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold font-montserrat mb-6 leading-tight max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Elevate <br className="hidden md:block" />
          Your Interiors?
        </motion.h2>

        <motion.p 
          className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let&apos;s create a space that reflects your vision, style and personality.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link 
            href="/contact"
            className="w-full sm:w-auto px-10 py-5 bg-white text-brand-charcoal hover:bg-brand-offwhite rounded-sm font-bold tracking-wide transition-all hover:scale-105 hover:shadow-2xl"
          >
            Connect With Us
          </Link>
          <a 
            href="tel:+919645862654"
            className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-sm font-bold tracking-wide transition-all hover:scale-105"
          >
            Call +91 96458 62654
          </a>
        </motion.div>
      </div>
    </section>
  );
}
