'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            className="text-3xl md:text-5xl font-bold font-montserrat mb-6 text-brand-charcoal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Let&apos;s Create Something <br /> Exceptional Together
          </motion.h1>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Reach out to discuss your project, request a quote, or simply ask a question.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold font-montserrat text-brand-charcoal mb-4 flex items-center">
                  <MapPin className="w-5 h-5 text-brand-primary mr-2" /> HEAD OFFICE
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Kothakurssi,<br />
                  Vaniyamkulam Road,<br />
                  Ottapalam,<br />
                  Kerala 679501
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-montserrat text-brand-charcoal mb-4 flex items-center">
                  <MapPin className="w-5 h-5 text-brand-primary mr-2" /> BANGALORE OFFICE
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  21, Imran Manzil,<br />
                  1st Main, 1st Cross,<br />
                  BHBCS Layout, BTM 2nd Stage,<br />
                  Wayshiya Colony, Bengaluru,<br />
                  Karnataka 560076
                </p>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <div className="space-y-4">
                  <a href="tel:+919645862654" className="flex items-center text-lg text-brand-charcoal hover:text-brand-primary transition-colors">
                    <Phone className="w-6 h-6 mr-4 text-brand-primary" /> +91 96458 62654
                  </a>
                  <a href="mailto:greengypsumshop@gmail.com" className="flex items-center text-lg text-brand-charcoal hover:text-brand-primary transition-colors break-all">
                    <Mail className="w-6 h-6 mr-4 text-brand-primary" /> greengypsumshop@gmail.com
                  </a>
                  <a href="https://www.instagram.com/greengypsuminterior/" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-brand-charcoal hover:text-brand-primary transition-colors">
                    <svg className="w-6 h-6 mr-4 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> @greengypsuminterior
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-brand-offwhite p-8 md:p-10 rounded-2xl border border-brand-border"
          >
            <h3 className="text-2xl font-bold font-montserrat text-brand-charcoal mb-8">Send us a message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-brand-charcoal mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-sm border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all bg-white"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-sm border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all bg-white"
                    placeholder="+91"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-sm border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-charcoal mb-2">Service Required</label>
                <select className="w-full px-4 py-3 rounded-sm border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all bg-white text-gray-700">
                  <option>Select a service...</option>
                  <option>PVC Ceiling</option>
                  <option>VOX Ceiling</option>
                  <option>Gypsum Partition</option>
                  <option>POP Wall Moulding</option>
                  <option>POP Wall Plastering</option>
                  <option>POP Louvres</option>
                  <option>Gypsum Board Ceiling</option>
                  <option>INSU Board Ceiling</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-charcoal mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-sm border border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all bg-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-brand-primary hover:bg-brand-deep text-white font-bold rounded-sm transition-all hover:-translate-y-1"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
