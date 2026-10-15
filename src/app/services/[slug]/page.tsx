import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/services';
import PageTransition from '@/components/PageTransition';
import CTASection from '@/components/CTASection';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} | Green Gypsum Interiors`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter(s => s.id !== service.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <PageTransition>
      {/* Breadcrumb & Hero */}
      <div className="bg-brand-charcoal text-white pt-12 pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-brand-primary transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{service.title}</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 -mt-12 relative z-10 mb-24">
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl bg-brand-offwhite">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold font-montserrat mb-6 text-brand-charcoal">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.description}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold font-montserrat mb-6 text-brand-charcoal">Key Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-brand-offwhite p-4 rounded-xl border border-brand-border">
                    <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>
            
            {service.gallery && service.gallery.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold font-montserrat mb-6 text-brand-charcoal">Project Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.gallery.map((img, idx) => (
                    <div key={idx} className="relative aspect-video rounded-xl overflow-hidden">
                      <Image src={img} alt={`${service.title} Gallery ${idx+1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="bg-brand-offwhite p-8 rounded-2xl border border-brand-border">
                <h3 className="text-xl font-bold font-montserrat mb-6 text-brand-charcoal">Applications</h3>
                <ul className="space-y-4">
                  {service.applications.map((app, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-brand-primary rounded-full mr-3 shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-charcoal p-8 rounded-2xl text-white text-center">
                <h3 className="text-xl font-bold font-montserrat mb-4">Interested in this service?</h3>
                <p className="text-gray-300 mb-6 text-sm">Contact our team for a detailed consultation and quote tailored to your needs.</p>
                <Link href="/contact" className="block w-full py-4 bg-brand-primary hover:bg-brand-deep rounded-sm font-bold transition-colors">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <section className="bg-brand-offwhite py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-montserrat mb-12 text-center text-brand-charcoal">Explore More Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((rs) => (
              <Link key={rs.id} href={`/services/${rs.slug}`} className="group block relative rounded-2xl overflow-hidden bg-white border border-brand-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={rs.image} alt={rs.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-montserrat mb-2 text-brand-charcoal group-hover:text-brand-primary transition-colors">{rs.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{rs.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
