import { notFound } from 'next/navigation';
import { platformFlow } from '@/lib/platform-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LiveStatus } from '@/components/live-status';

export async function generateStaticParams() {
  return platformFlow.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = platformFlow.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="container py-24 md:py-32 mx-auto px-4 max-w-4xl">
      <div className="mb-8">
        <LiveStatus />
      </div>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{product.name}</h1>
      <p className="mt-4 text-xl text-muted-foreground">{product.outcome}</p>
      
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Button size="lg" asChild>
          <a href={product.appUrl} target="_blank" rel="noopener noreferrer">
            {product.primaryCta} <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/contact/">Contact Sales</Link>
        </Button>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
          <p className="text-muted-foreground text-lg">{product.problem}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
          <p className="text-muted-foreground text-lg">{product.solution}</p>
        </div>
      </div>
    </main>
  );
}
