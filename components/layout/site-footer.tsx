import Link from "next/link"
import { RevnuvoLogo } from "./logo" // Assuming a logo component exists, or replace with text

// Note: If you don't have a RevnuvoLogo component, replace <RevnuvoLogo /> with:
// <span className="font-bold text-xl tracking-tight">Revnuvo</span>

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl tracking-tight">Revnuvo</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Infrastructure for Revenue Intelligence. Unify your revenue operations with API-first architecture.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/revenue-os" className="hover:text-foreground transition-colors">
                  Revenue OS
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/developers" className="hover:text-foreground transition-colors">
                  Developers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/products/leadgen/" className="hover:text-foreground transition-colors">
                  Leadgen
                </Link>
              </li>
              <li>
                <Link href="/products/signals/" className="hover:text-foreground transition-colors">
                  Signals
                </Link>
              </li>
              <li>
                <Link href="/products/intelligence/" className="hover:text-foreground transition-colors">
                  Intelligence
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-foreground transition-colors">
                  Trust
                </Link>
              </li>
              <li>
                <Link href="/products/dns-intelligence/" className="hover:text-foreground transition-colors">
                  DNS Intelligence
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-foreground transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Revnuvo Technologies Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              All systems operational
            </span>
            <span>·</span>
            <span>Powered by Cloudflare</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
