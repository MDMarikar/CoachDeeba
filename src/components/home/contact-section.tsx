import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-headline text-primary">Intake Form</CardTitle>
              <CardDescription>
                Ready to start your transformation? Please fill out the form below and I'll get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full" style={{ height: '850px' }}>
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLScJa4UpKuLO6o8vYzqRlQEq430HBjcfyf7bt00C9HC2tW2tTA/viewform?embedded=true" 
                  className="w-full h-full"
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                >
                  Loading…
                </iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
