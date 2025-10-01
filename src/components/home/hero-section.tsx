import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40">
      <Image
        src="/coach_background.jpeg"
        alt="Person watching a sunset"
        width={1920}
        height={1080}
        className="object-cover -z-10 absolute inset-0 w-full h-full"
        data-ai-hint="person sunset"
        priority
      />
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div className="container px-4 md:px-6 relative">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h1 className="text-4xl font-headline tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
            Unlock Your Full Potential.
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            I'm here to guide you on your journey of self-discovery and growth. Insha Allah, together, we'll navigate life's challenges and connect with Allah
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white">
              <Link href="/blog">Read My Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
