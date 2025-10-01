import { AboutSection } from '@/components/home/about-section';
import { ContactSection } from '@/components/home/contact-section';
import { HeroSection } from '@/components/home/hero-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';

export default function Home() {
  return (
    <div className="flex flex-col animate-fade-in">
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
