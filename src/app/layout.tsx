import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SplashScreen from '@/components/SplashScreen';
import NextTopLoader from 'nextjs-toploader';
import ScrollProgress from '@/components/ScrollProgress';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Green Gypsum Interiors | Premium Gypsum & Interior Solutions in Kerala',
  description: 'Green Gypsum Interiors provides premium gypsum ceilings, PVC ceilings, VOX ceilings, partitions, POP moulding, wall panels and customized interior solutions in Kerala.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={`${montserrat.className} font-sans antialiased bg-brand-white text-brand-charcoal`}>
        <ScrollProgress />
        <SplashScreen />
        <NextTopLoader 
          color="#00A751" 
          initialPosition={0.08} 
          crawlSpeed={200} 
          height={3} 
          crawl={true} 
          showSpinner={false} 
          easing="ease" 
          speed={200} 
          shadow="0 0 10px #00A751,0 0 5px #00A751" 
          zIndex={9999}
        />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
