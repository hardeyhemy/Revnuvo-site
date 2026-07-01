import { platformFlow } from '@/lib/platform-data';
import { ProductCard } from '@/components/product-card';

export const metadata = {
  title: 'Products',
  description: 'Explore the Revnuvo product suite: Leadgen, Signals, Intelligence, Trust, and DNS Intelligence.',
};

export default function ProductsPage() {
  return (
    <main className="container py-24 md:py-32 mx-auto px-4">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          The Revnuvo Product Suite
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Explore the individual applications that make up the Revnuvo Revenue Intelligence Platform. Use them standalone, or connect them via our unified API.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {platformFlow.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </main>
  );
}
