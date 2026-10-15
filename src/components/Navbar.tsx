'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Why Us', href: '/why-us' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || !isHome
          ? 'glass-nav py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-50 flex items-center">
            <Image
              src="/images/logo.webp"
              alt="Green Gypsum Interiors Logo"
              width={180}
              height={60}
              className="object-contain h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-primary',
                  (!isHome || isScrolled) ? 'text-brand-charcoal' : 'text-white hover:text-brand-primary',
                  pathname === link.href && 'text-brand-primary font-semibold'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-brand-primary hover:bg-brand-deep text-white px-6 py-2.5 rounded-sm font-medium transition-colors text-sm"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className={cn('h-7 w-7', (!isHome || isScrolled) ? 'text-brand-charcoal' : 'text-white')} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Modal (matching user requested design) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col h-[100dvh]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 shadow-sm">
              <Image
                src="/images/logo.webp"
                alt="Green Gypsum Logo"
                width={120}
                height={40}
                className="object-contain h-10 w-auto"
              />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-gray-50 rounded-full text-brand-charcoal hover:bg-gray-100"
              >
                <X className="h-6 w-6 font-bold" />
              </button>
            </div>

            {/* Modal Links */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <nav className="flex flex-col">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'text-lg font-semibold py-4 border-b border-gray-100 transition-colors',
                        isActive ? 'text-brand-primary' : 'text-brand-charcoal'
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center bg-[#253E58] hover:bg-brand-charcoal text-white px-6 py-4 rounded-md font-medium text-lg transition-colors shadow-md"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
            

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
