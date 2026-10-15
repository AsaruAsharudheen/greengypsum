import { Metadata } from 'next';
import PageTransition from '@/components/PageTransition';
import CTASection from '@/components/CTASection';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Gallery | Green Gypsum Interiors',
  description: 'View our portfolio of premium gypsum ceilings, partitions, and custom interior design gallery across Kerala.',
};

export default function GalleryPage() {
  return (
    <PageTransition>
      <div className="bg-brand-charcoal py-20 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6">
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light">
            A showcase of our finest work, highlighting our commitment to quality, design, and attention to detail.
          </p>
        </div>
      </div>
      
      <GalleryGrid />

      <CTASection />
    </PageTransition>
  );
}
