'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-24 bg-brand-offwhite">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 border border-brand-primary/30 text-brand-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-brand-primary/5">
              GREEN GYPSUM INTERIORS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-6 text-brand-charcoal leading-tight">
              <span className="block">Modern Spaces Crafted With Purpose</span>
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              With more than 15 years of experience, Green Gypsum Interiors
              delivers premium ceiling, partition and decorative interior
              solutions for homes, commercial spaces and architectural projects.
            </p>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our focus has always been on delivering exceptional quality and
              innovative interior solutions. With an experienced team and a
              commitment to precision, we transform ordinary spaces into
              refined, functional and visually striking interiors.
            </p>

            <div className="flex items-center gap-4 border-l-4 border-brand-primary pl-6">
              <span className="text-5xl font-bold text-brand-primary font-montserrat">
                15+
              </span>
              <span className="text-gray-800 font-medium text-lg leading-tight">
                Years of <br />
                Experience
              </span>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 relative h-[400px] lg:h-[480px] rounded-2xl overflow-hidden group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-brand-primary transition-all duration-500 z-20 rounded-2xl pointer-events-none"></div>

            <Image
              src="/images/gallery-2.webp"
              alt="Premium Interior Craftsmanship"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
