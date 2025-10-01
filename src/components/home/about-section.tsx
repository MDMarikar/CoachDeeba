import Image from 'next/image';
import { aboutMeData } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/profile.jpeg`}
              alt={aboutMeData.name}
              data-ai-hint="profile picture"
              width={320}
              height={320}
              className="rounded-full object-cover shadow-lg aspect-square"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-4 text-lg text-foreground/80 md:text-xl">
              {aboutMeData.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <h3 className="text-2xl font-headline text-primary">
              I work with women facing:
            </h3>

            <ul className="space-y-3">
              {aboutMeData.focusAreas.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground/80 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
