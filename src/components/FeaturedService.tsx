'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { services } from '@/data/services';

export default function FeaturedService() {
  const featured = services.find(s => s.slug === 'vox-ceiling');

  if (!featured) return null;

  return (
    <section className="py-20 lg:py-28 bg-brand-charcoal text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden group shadow-2xl">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-charcoal/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 border border-brand-primary/50 text-brand-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-brand-primary/10">
              FEATURED SOLUTION
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat mb-6 leading-tight">
              {featured.title}
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
              {featured.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
              {featured.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <Link 
              href={`/services/${featured.slug}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary hover:bg-brand-deep text-white rounded-sm font-semibold transition-all hover:-translate-y-1 shadow-lg shadow-brand-primary/20"
            >
              View Service Details
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
