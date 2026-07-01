import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Cloud, Zap } from 'lucide-react';

export const metadata = {
  title: 'About Us - Building Revenue Infrastructure',
  description: 'Revnuvo exists to unify disconnected revenue tools. Learn about our mission to build the infrastructure layer for modern business.',
};

export default function AboutPage() {
  return (
    <main className="container py-24 md:py-32 mx-auto px-4 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Why Revnuvo Exists
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Modern revenue teams use dozens of disconnected tools. Data gets lost between CRMs, prospecting tools, and verification services. We knew there had to be a better way.
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
        <p>
          Revnuvo was founded to fix the broken pipeline of B2B revenue generation. Instead of forcing companies to stitch together five different SaaS products, we built a single, unified infrastructure layer. 
        </p>
        <p>
          By unifying lead discovery, market intelligence, verification, and infrastructure monitoring, Revnuvo ensures that your revenue teams always have the context they need, exactly when they need it. We don't just build tools; we build the operating system for your revenue.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center pt-16 border-t">
        <div>
          <div className="mx-auto w-fit p-3 rounded-lg bg-muted">
            <Cloud className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-4 font-semibold">Edge-Native</h3>
          <p className="mt-2 text-sm text-muted-foreground">Built entirely on Cloudflare's global network for sub-millisecond latency.</p>
        </div>
        <div>
          <div className="mx-auto w-fit p-3 rounded-lg bg-muted">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-4 font-semibold">API-First</h3>
          <p className="mt-2 text-sm text-muted-foreground">Everything is programmable. Integrate Revnuvo directly into your existing workflows.</p>
        </div>
        <div>
          <div className="mx-auto w-fit p-3 rounded-lg bg-muted">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-4 font-semibold">Security-Focused</h3>
          <p className="mt-2 text-sm text-muted-foreground">Enterprise-grade security by design. Your data is isolated and encrypted.</p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Button size="lg" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </main>
  );
}
