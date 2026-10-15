import { Metadata } from 'next';
import ServicesGrid from '@/components/ServicesGrid';
import PageTransition from '@/components/PageTransition';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Our Services | Green Gypsum Interiors',
  description: 'Explore our wide range of premium gypsum ceilings, PVC ceilings, partitions, and custom POP craftsmanship.',
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="bg-brand-charcoal py-20 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6">
            Our Premium Services
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light">
            We offer a comprehensive range of interior solutions tailored to meet the highest standards of quality and aesthetics.
          </p>
        </div>
      </div>
      <ServicesGrid />
      <CTASection />
    </PageTransition>
  );
}
