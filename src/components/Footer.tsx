import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo.webp"
              alt="Green Gypsum Interiors"
              width={160}
              height={50}
              className="mb-6 object-contain w-auto h-14"
            />
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Premium interior solutions, specialising in gypsum ceilings, partitions, and custom POP craftsmanship with over 15 years of experience.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/greengypsuminterior/" target="_blank" rel="noopener noreferrer" className="bg-brand-deep p-2 rounded-full hover:bg-brand-primary transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-montserrat">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Gallery', 'Why Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-brand-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-montserrat">Services</h3>
            <ul className="space-y-3">
              {['PVC Ceiling', 'VOX Ceiling', 'Gypsum Partition', 'POP Wall Moulding', 'POP Cornice', 'POP Louvres'].map((item) => (
                <li key={item}>
                  <Link href={`/services/${item.toLowerCase().replace(/ /g, '-')}`} className="text-gray-300 hover:text-brand-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-montserrat">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                <a href="tel:+919645862654" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +91 96458 62654
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                <a href="mailto:greengypsumshop@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm break-all">
                  greengypsumshop@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  Head Office: Kothakurssi, Vaniyamkulam Road, Ottapalam, Kerala 679501
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            Copyright © {new Date().getFullYear()} Green Gypsum Interiors. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
