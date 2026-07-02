import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/platform-data';

interface ProductCardProps {
  product: Product;
  showFlowArrow?: boolean;
}

export function ProductCard({ product, showFlowArrow = false }: ProductCardProps) {
  return (
    <Card className="relative flex h-full flex-col justify-between border-border/60 transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <span className="text-xs font-mono text-muted-foreground border rounded-full px-2 py-0.5">
            Step {product.flowStep}
          </span>
        </div>
        <p className="mt-2 text-base text-muted-foreground">{product.outcome}</p>
      </CardHeader>
      
      <CardFooter className="flex flex-col items-start gap-3 pt-4">
        <Button variant="outline" className="w-full justify-between" asChild>
          <Link href={`/products/${product.slug}/`}>
            Learn More <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button className="w-full" asChild>
          <a href={product.appUrl} target="_blank" rel="noopener noreferrer">
            {product.primaryCta} <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>

      {/* Flow Arrow for Desktop */}
      {showFlowArrow && (
        <div className="hidden md:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2 items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-background border flex items-center justify-center">
            <ArrowRight className="h-3 w-3 text-muted-foreground" />
          </div>
        </div>
      )}
    </Card>
  );
}
