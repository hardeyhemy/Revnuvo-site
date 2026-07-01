import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Pricing - Simple, transparent platform pricing',
  description: 'Start free. Upgrade as your revenue operations scale.',
};

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'For individuals exploring the Revnuvo ecosystem.',
    features: ['100 API requests / month', 'Leadgen Basic Access', 'Community Support', '1 User Seat'],
    cta: 'Start Free',
    href: '/contact',
    highlighted: false,
  },
  {
    name: 'Developer',
    price: '$29',
    description: 'For builders integrating Revenue OS into their apps.',
    features: ['10,000 API requests / month', 'Full API Access', 'Webhooks & SDKs', 'Email Support'],
    cta: 'Get Started',
    href: '/contact',
    highlighted: false,
  },
  {
    name: 'Business',
    price: '$199',
    description: 'For teams scaling their outbound and verification.',
    features: ['100,000 API requests / month', 'Full Platform Access (5 Apps)', 'Team Collaboration (5 Seats)', 'Priority Support'],
    cta: 'Start Free Trial',
    href: '/contact',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations with advanced security & scale needs.',
    features: ['Unlimited API requests', 'SAML SSO & SCIM', 'Dedicated Edge Infrastructure', '99.99% SLA'],
    cta: 'Contact Sales',
    href: '/contact',
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <main className="container py-24 md:py-32 mx-auto px-4">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Pricing that scales with your revenue
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          One plan. Access to the entire Revnuvo platform. No hidden fees, no per-product gating.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        {tiers.map((tier) => (
          <div 
            key={tier.name} 
            className={`relative rounded-2xl border p-8 flex flex-col bg-card ${tier.highlighted ? 'border-primary shadow-xl scale-105 z-10' : 'border-border/60'}`}
          >
            {tier.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-semibold">{tier.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground min-h-[40px]">{tier.description}</p>
            <p className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
              {tier.price !== 'Custom' && <span className="text-sm text-muted-foreground">/mo</span>}
            </p>
            
            <Button 
              className="mt-6 w-full" 
              variant={tier.highlighted ? 'default' : 'outline'} 
              asChild
            >
              <Link href={tier.href}>{tier.cta}</Link>
            </Button>

            <ul className="mt-8 space-y-3 text-sm flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
