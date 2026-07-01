import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - Talk to the Revnuvo Team',
  description: 'Get in touch with Revnuvo Technologies Ltd. for enterprise inquiries, support, or general questions.',
};

export default function ContactPage() {
  return (
    <main className="container py-24 md:py-32 mx-auto px-4">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Let's talk about your revenue stack
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Whether you're evaluating Revnuvo for your enterprise or need technical support, our team is here to help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="flex flex-col gap-8">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-muted">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Email Us</h3>
              <p className="text-sm text-muted-foreground mt-1">For general inquiries and support.</p>
              <a href="mailto:hello@revnuvo.site" className="text-primary hover:underline mt-1 block">hello@revnuvo.site</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-muted">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Sales & Demos</h3>
              <p className="text-sm text-muted-foreground mt-1">Want a guided tour of the Revenue OS?</p>
              <a href="mailto:sales@revnuvo.site" className="text-primary hover:underline mt-1 block">sales@revnuvo.site</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-muted">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Headquarters</h3>
              <p className="text-sm text-muted-foreground mt-1">Revnuvo Technologies Ltd.</p>
              <p className="text-sm text-muted-foreground">Remote-First / Global</p>
            </div>
          </div>
        </div>

        {/* Contact Form Placeholder */}
        <div className="rounded-xl border bg-card p-8 shadow-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Jane Doe" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Work Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="jane@company.com" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">How can we help?</label>
              <textarea 
                id="message" 
                placeholder="Tell us about your use case..." 
                rows={4}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <Button className="w-full" size="lg">Send Message</Button>
          </form>
        </div>
      </div>
    </main>
  );
}
