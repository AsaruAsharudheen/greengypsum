import { Metadata } from 'next';
import Testimonials from '@/components/Testimonials';
import PageTransition from '@/components/PageTransition';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Testimonials | Green Gypsum Interiors',
  description: 'Read what our clients say about our interior design and gypsum solutions.',
};

export default function TestimonialsPage() {
  return (
    <PageTransition>
      <div className="bg-brand-charcoal py-20 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6">
            Client Testimonials
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Don&apos;t just take our word for it. Hear from our satisfied clients.
          </p>
        </div>
      </div>
      <Testimonials />
      <CTASection />
    </PageTransition>
  );
}
