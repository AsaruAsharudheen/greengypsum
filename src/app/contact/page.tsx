import { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';
import PageTransition from '@/components/PageTransition';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Contact Us | Green Gypsum Interiors',
  description: 'Get in touch with Green Gypsum Interiors for premium ceiling, partition and interior solutions.',
};

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactSection />
      <CTASection />
    </PageTransition>
  );
}
