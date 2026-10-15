'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { value: 15, suffix: '+', label: 'Years In Business' },
  { value: 2.5, suffix: 'K', label: 'Happy Clients' },
  { value: 2.5, suffix: 'K', label: 'Projects Completed' },
  { value: 30, suffix: '+', label: 'Trained Staff' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.min(value, value * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  // Handle decimals
  const displayValue = count % 1 !== 0 || value % 1 !== 0 
    ? count.toFixed(1) 
    : Math.floor(count);

  return (
    <span className="text-4xl md:text-5xl font-bold font-montserrat text-brand-primary">
      {displayValue}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 bg-white relative">
      {/* Subtle architectural grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(var(--color-brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-primary) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-gray-100">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center text-center ${index !== 0 ? 'pl-4 md:pl-0' : ''}`}
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="mt-2 text-sm md:text-base font-medium text-gray-600 uppercase tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
