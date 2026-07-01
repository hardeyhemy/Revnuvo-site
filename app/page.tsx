import Link from 'next/link';
import { platformFlow, trustIndicators } from '@/lib/platform-data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center gap-6 py-32 text-center md:py-48">
        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium text-muted-foreground">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2" /> Cloudflare-Powered Edge Network
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:max-w-4xl">
          Infrastructure for <span className="text-primary">Revenue Intelligence</span>
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          Revnuvo helps businesses discover customers, verify trust, and automate intelligence. 
          Stop juggling point solutions. Start building a predictable revenue engine.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/revenue-os">Explore the Platform <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Talk to Sales</Link>
          </Button>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-y bg-muted/50">
        <div className="container py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-between">
            {trustIndicators.map((indicator) => (
              <div key={indicator} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {indicator}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Revenue Flow (Platform Narrative) */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            One platform. Complete revenue lifecycle.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Revnuvo connects the entire journey—from finding accounts to verifying their infrastructure—so your teams always have context.
          </p>
        </div>

        {/* Flow Visualization */}
        <div className="grid gap-6 md:grid-cols-5 relative">
          {platformFlow.map((product, index) => (
            <div key={product.slug} className="relative">
              <ProductCard product={product} showFlowArrow={index < platformFlow.length - 1} />
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Snippet */}
      {/* (Would include cards for Sales Teams, Marketing, Security, etc.) */}
      
    </main>
  );
}
