import Link from 'next/link';
import { platformFlow } from '@/lib/platform-data';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Revenue OS - The Intelligence Platform',
  description: 'Discover how Revnuvo connects lead generation, signals, intelligence, trust, and DNS monitoring into a single Revenue Operating System.',
};

export default function RevenueOSPage() {
  return (
    <main className="container py-24 md:py-32 mx-auto px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          The Operating System for <br/> <span className="text-primary">Revenue Intelligence</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Most companies stitch together 5 different tools to find, research, and verify customers. Revnuvo unifies this into a single, fast, edge-deployed platform.
        </p>
      </div>

      <div className="mt-20 flex flex-col items-center gap-8">
        {platformFlow.map((product) => (
          <div key={product.slug} className="flex flex-col items-center">
            <Link href={`/products/${product.slug}/`} className="group relative w-full max-w-md rounded-xl border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-xl">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <span className="text-xs text-muted-foreground">0{product.flowStep}</span>
              </div>
              <p className="text-muted-foreground">{product.outcome}</p>
            </Link>
            {product.flowStep < platformFlow.length && (
              <div className="h-10 w-px bg-border my-4 relative">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 border-r border-b border-border"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-24 max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight">Ready to unify your revenue stack?</h2>
        <p className="mt-4 text-muted-foreground">Deploy on the edge. API-first. Secure by design.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/contact">Contact Sales</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/developers">View Documentation</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
