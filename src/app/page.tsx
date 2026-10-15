import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import AboutSection from '@/components/AboutSection';
import ServicesGrid from '@/components/ServicesGrid';
import FeaturedService from '@/components/FeaturedService';
import WhyChooseUs from '@/components/WhyChooseUs';
import FounderSection from '@/components/FounderSection';
import ProjectsGallery from '@/components/ProjectsGallery';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Stats />
      <ServicesGrid limit={6} />
      <FeaturedService />
      <WhyChooseUs />
      <FounderSection />
      <ProjectsGallery />
      <Testimonials />
      <CTASection />
    </>
  );
}
