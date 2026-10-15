import { Metadata } from 'next';
import AboutSection from '@/components/AboutSection';
import Stats from '@/components/Stats';
import FounderSection from '@/components/FounderSection';
import PageTransition from '@/components/PageTransition';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About Us | Green Gypsum Interiors',
  description: 'Learn about Green Gypsum Interiors, our history, founders, and our commitment to delivering exceptional interior design and gypsum solutions.',
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="bg-brand-charcoal py-20 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6">
            About Green Gypsum
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light">
            With over 15 years of excellence, we are redefining modern interiors through craftsmanship, precision, and passion.
          </p>
        </div>
      </div>
      <AboutSection />
      <Stats />
      <FounderSection />
      <CTASection />
    </PageTransition>
  );
}
