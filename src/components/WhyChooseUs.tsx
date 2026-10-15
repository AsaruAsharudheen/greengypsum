'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Gem, Users } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Accredited Company',
    desc: 'Fully licensed and accredited interior design and gypsum solutions provider.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: '100% Guarantee',
    desc: 'We stand by the quality of our work with comprehensive project guarantees.'
  },
  {
    icon: <Gem className="w-8 h-8" />,
    title: 'Quality Material',
    desc: 'We source only the finest, most durable materials for all our projects.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Experienced Professionals',
    desc: 'A dedicated team of master craftsmen and interior designers.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-offwhite">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold font-montserrat mb-6 text-brand-charcoal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose <br /> Green Gypsum Interiors?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="mx-auto w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-montserrat mb-3 text-brand-charcoal">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
