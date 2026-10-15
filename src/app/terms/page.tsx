import { Metadata } from 'next';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Green Gypsum Interiors',
};

export default function TermsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold font-montserrat text-brand-charcoal mb-10">Terms & Conditions</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-brand-charcoal mt-8 mb-4">1. Agreement to Terms</h2>
          <p>By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local laws.</p>
          
          <h2 className="text-2xl font-bold text-brand-charcoal mt-8 mb-4">2. Services</h2>
          <p>Green Gypsum Interiors provides interior design and gypsum solutions. Project timelines, costs, and deliverables will be outlined in individual contracts.</p>
          
          <h2 className="text-2xl font-bold text-brand-charcoal mt-8 mb-4">3. Intellectual Property</h2>
          <p>The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary rights.</p>
          
          <h2 className="text-2xl font-bold text-brand-charcoal mt-8 mb-4">4. Limitations</h2>
          <p>In no event shall Green Gypsum Interiors or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p>
        </div>
      </div>
    </PageTransition>
  );
}
