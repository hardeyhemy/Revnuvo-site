import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight">Revnuvo</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/revenue-os" className="transition-colors hover:text-foreground">
              Platform
            </Link>
            <Link href="/products" className="transition-colors hover:text-foreground">
              Solutions
            </Link>
            <Link href="/products" className="transition-colors hover:text-foreground">
              Products
            </Link>
            <Link href="/pricing" className="transition-colors hover:text-foreground">
              Pricing
            </Link>
            <Link href="/developers" className="transition-colors hover:text-foreground">
              Developers
            </Link>
            <Link href="/company" className="transition-colors hover:text-foreground">
              Company
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          <div className="hidden md:block">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
