import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SiteNav } from '@/components/layout/site-nav';
import { SiteFooter } from '@/components/layout/site-footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://revnuvo.site'),
  title: {
    default: 'Revnuvo | Infrastructure for Revenue Intelligence',
    template: '%s | Revnuvo',
  },
  description: 'Revnuvo builds AI-powered infrastructure for Revenue, Trust, and Intelligence. Find customers, verify trust, and monitor digital infrastructure.',
  openGraph: {
    title: 'Revnuvo | Infrastructure for Revenue Intelligence',
    description: 'Unify your revenue operations with API-first infrastructure.',
    url: 'https://revnuvo.site',
    siteName: 'Revnuvo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revnuvo',
    description: 'Infrastructure for Revenue Intelligence',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased min-h-screen flex flex-col`}>
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
