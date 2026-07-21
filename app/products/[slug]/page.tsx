import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { platformFlow, getProductBySlug } from '@/lib/platform-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle2, Code2 } from 'lucide-react';
import { LiveStatus } from '@/components/live-status';

// Pre-render all 5 product pages at build time
export async function generateStaticParams() {
  return platformFlow.map((product) => ({
    slug: product.slug,
  }));
}

// Per-product SEO metadata (fixes Bug #3 — pages sharing the homepage title)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product not found',
      description: 'The requested Revnuvo product could not be found.',
    };
  }

  return {
    title: `${product.name} — ${product.outcome}`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Revnuvo`,
      description: product.tagline,
      url: `https://revnuvo.site/products/${product.slug}/`,
      siteName: 'Revnuvo',
      type: 'website',
    },
    alternates: {
      canonical: `https://revnuvo.site/products/${product.slug}/`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Next.js 16+: params is a Promise and must be awaited
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Other products for cross-sell section
  const otherProducts = platformFlow.filter((p) => p.slug !== product.slug);

  return (
    <main className="flex flex-col">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4 py-3 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products/" className="hover:text-foreground">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b">
        <div className="container mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="mb-8">
            <LiveStatus />
          </div>

          <div className="grid gap-10 md:grid-cols-5 md:items-center">
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-muted-foreground border rounded-full px-2 py-0.5">
                  Step {product.flowStep} of {platformFlow.length}
                </span>
                <span className="text-sm font-medium text-primary">Revnuvo {product.name}</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {product.outcome}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed md:text-xl">
                {product.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href={product.appUrl} target="_blank" rel="noopener noreferrer">
                    {product.primaryCta} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact/">Contact Sales</Link>
                </Button>
                {product.docsUrl && (
                  <Button size="lg" variant="ghost" asChild>
                    <a href={product.docsUrl} target="_blank" rel="noopener noreferrer">
                      <Code2 className="mr-2 h-4 w-4" /> Read the docs
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* API endpoint preview card */}
            <div className="md:col-span-2 rounded-lg border bg-muted/50 p-6">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                API Endpoint
              </p>
              {product.apiEndpoint && (
                <code className="block text-sm font-mono bg-background border rounded px-4 py-3 overflow-x-auto">
                  {product.apiEndpoint}
                </code>
              )}
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                Edge-deployed on Cloudflare · Sub-200ms global response · SOC2 Ready (Q4 2024)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="border-b">
        <div className="container mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold mb-4">The problem</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{product.problem}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">The solution</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{product.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
            What {product.name} does
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {product.features.map((feature) => (
              <div key={feature.title} className="space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-b">
        <div className="container mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Use cases</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.useCases.map((useCase) => (
              <div
                key={useCase}
                className="rounded-lg border bg-background p-6 hover:border-primary/50 transition-colors"
              >
                <p className="font-medium">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell — other products */}
      <section>
        <div className="container mx-auto max-w-6xl px-4 py-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Pair {product.name} with
            </h2>
            <Link
              href="/products/"
              className="text-sm font-medium text-primary hover:underline flex items-center"
            >
              View all products <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}/`}
                className="group rounded-lg border p-6 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-muted-foreground border rounded-full px-2 py-0.5">
                    Step {p.flowStep}
                  </span>
                </div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.outcome}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back to platform */}
      <section className="border-t bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <Link
            href="/revenue-os/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to the Revenue OS platform
          </Link>
        </div>
      </section>
    </main>
  );
}
