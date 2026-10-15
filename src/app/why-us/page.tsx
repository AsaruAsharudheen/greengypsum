import { Metadata } from 'next';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import PageTransition from '@/components/PageTransition';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Why Choose Us | Green Gypsum Interiors',
  description: 'Discover why Green Gypsum Interiors is the preferred choice for premium interior solutions and gypsum works.',
};

export default function WhyUsPage() {
  return (
    <PageTransition>
      <div className="bg-brand-charcoal py-20 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6">
            Why Choose Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light">
            We deliver uncompromising quality, reliable service, and innovative designs that transform spaces.
          </p>
        </div>
      </div>
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </PageTransition>
  );
}
