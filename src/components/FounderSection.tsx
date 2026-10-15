'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const founders = [
  {
    name: 'Mr. Faisal',
    role: 'MD, Green Gypsum Interiors',
    image: '/images/faisal.webp',
    quote: '“At Green Gypsum Interiors, my focus has always been on delivering exceptional quality and innovative solutions. With our experienced team and cutting-edge technology, we’ve been able to complete projects that exceed client expectations. I’m proud to be part of a company that values professionalism, customer satisfaction, and a commitment to excellence in every project.”'
  },
  {
    name: 'Mr. Anoop',
    role: 'MD, Green Gypsum Interiors',
    image: '/images/anoop.webp',
    quote: '“For me, the foundation of Green Gypsum Interiors is our dedication to providing reliable and high-standard interior solutions. With over 15 years of experience, we’ve built trust through our hard work, attention to detail, and passion for transforming spaces. I’m excited to continue delivering outstanding results to our clients.”'
  }
];

export default function FounderSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-6 text-brand-charcoal">
            Messages From Our Founders
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-brand-offwhite p-8 md:p-12 rounded-3xl relative overflow-hidden group border border-brand-border"
            >
              <Quote className="absolute -top-4 -right-4 w-32 h-32 text-brand-primary/10 rotate-12 group-hover:scale-110 transition-transform duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-brand-primary shadow-lg">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat text-brand-charcoal">
                      {founder.name}
                    </h3>
                    <p className="text-brand-primary font-medium text-sm mt-1">
                      {founder.role}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-base md:text-lg italic leading-relaxed flex-grow">
                  {founder.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
