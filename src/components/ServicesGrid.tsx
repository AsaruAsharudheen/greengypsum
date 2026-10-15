'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

interface ServicesGridProps {
  limit?: number;
}

export default function ServicesGrid({ limit }: ServicesGridProps) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold font-montserrat mb-6 text-brand-charcoal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Interior Solutions <br /> Designed Around You
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            From functional ceilings to detailed POP craftsmanship, we create interior solutions that combine beauty, durability and precision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <Link href={`/services/${service.slug}`} className="group block relative rounded-2xl overflow-hidden bg-brand-offwhite border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="relative h-64 w-full overflow-hidden shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                
                {/* Green accent line on hover */}
                <div className="h-1 w-0 bg-brand-primary transition-all duration-500 group-hover:w-full shrink-0" />
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-brand-charcoal group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
                    {service.shortDescription}
                  </p>
                  
                  <div className="flex items-center text-brand-primary font-semibold text-sm mt-auto">
                    Explore Solution
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {limit && (
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary hover:bg-brand-deep text-white rounded-sm font-semibold transition-all hover:-translate-y-1 shadow-lg"
            >
              View More Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
