export type Product = {
  slug: string;
  name: string;
  outcome: string; // Outcome-driven description
  problem: string;
  solution: string;
  appUrl: string;
  primaryCta: string;
  secondaryCta: string;
  flowStep: number;
};

export const platformFlow: Product[] = [
  {
    slug: 'leadgen',
    name: 'Leadgen',
    outcome: 'Find companies ready to buy.',
    problem: 'Outbound teams waste time on accounts that aren\'t ready to purchase.',
    solution: 'AI-powered identification of high-intent accounts based on real-time web activity and firmographics.',
    appUrl: 'https://leadgen.revnuvo.site',
    primaryCta: 'Start Free',
    secondaryCta: 'Learn More',
    flowStep: 1
  },
  {
    slug: 'signals',
    name: 'Signals',
    outcome: 'Know exactly when to reach out.',
    problem: 'Timing is everything, but most teams rely on guesswork.',
    solution: 'Monitor buying signals across the web to trigger outreach at the exact moment of intent.',
    appUrl: 'https://signals.revnuvo.site',
    primaryCta: 'Request Access',
    secondaryCta: 'Learn More',
    flowStep: 2
  },
  {
    slug: 'intelligence',
    name: 'Intelligence',
    outcome: 'Understand your market deeply.',
    problem: 'Account research is manual, slow, and often outdated.',
    solution: 'Automated company research, tech stack analysis, and market intelligence delivered instantly.',
    appUrl: 'https://intelligence.revnuvo.site',
    primaryCta: 'View Demo',
    secondaryCta: 'Learn More',
    flowStep: 3
  },
  {
    slug: 'trust',
    name: 'Trust',
    outcome: 'Verify identities, reduce risk.',
    problem: 'Fraud and fake accounts pollute your pipeline and waste resources.',
    solution: 'Real-time identity verification and risk scoring to ensure every lead is a legitimate opportunity.',
    appUrl: 'https://trust.revnuvo.site',
    primaryCta: 'Start Free',
    secondaryCta: 'Learn More',
    flowStep: 4
  },
  {
    slug: 'dns-intelligence',
    name: 'DNS Intelligence',
    outcome: 'Monitor digital infrastructure health.',
    problem: 'DNS issues and infrastructure changes go unnoticed until it\'s too late.',
    solution: 'Continuous DNS monitoring, anomaly detection, and infrastructure change alerts.',
    appUrl: 'https://dns.revnuvo.site',
    primaryCta: 'Use API',
    secondaryCta: 'Learn More',
    flowStep: 5
  }
];

export const trustIndicators = [
  'Cloudflare-powered infrastructure',
  'API-first architecture',
  'Fast global edge deployment',
  'Security-first design',
  'Transparent pricing',
  'SOC2 Ready (Q4 2024)'
];
