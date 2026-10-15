import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="relative mb-8 animate-pulse">
        <Image 
          src="/images/logo.webp" 
          alt="Green Gypsum Interiors" 
          width={240} 
          height={80} 
          className="object-contain"
          priority
        />
      </div>
      
      {/* Small loading spinner */}
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 border-4 border-brand-primary/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-brand-primary rounded-full border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
}
