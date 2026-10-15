import { Metadata } from 'next';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Privacy Policy | Green Gypsum Interiors',
};

export default function PrivacyPolicyPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold font-montserrat text-brand-charcoal mb-10">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-brand-charcoal mt-8 mb-4">1. Introduction</h2>
          <p>Welcome to Green Gypsum Interiors. We respect your privacy and are committed to protecting your personal data.</p>
          
          <h2 className="text-2xl font-bold text-brand-charcoal mt-8 mb-4">2. Information We Collect</h2>
          <p>We collect information that you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us.</p>
          
          <h2 className="text-2xl font-bold text-brand-charcoal mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, to process your requests, and to communicate with you.</p>
          
          <h2 className="text-2xl font-bold text-brand-charcoal mt-8 mb-4">4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at greengypsumshop@gmail.com.</p>
        </div>
      </div>
    </PageTransition>
  );
}
