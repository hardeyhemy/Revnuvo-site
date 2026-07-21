export type Product = {
  slug: string;
  name: string;
  outcome: string; // Outcome-driven description (short tagline)
  tagline: string;  // Longer one-liner for the product page hero
  description: string; // Full-paragraph description for the product page
  problem: string;
  solution: string;
  appUrl: string;
  primaryCta: string;
  secondaryCta: string;
  flowStep: number;
  features: { title: string; description: string }[];
  useCases: string[];
  apiEndpoint?: string;
  docsUrl?: string;
};

export const platformFlow: Product[] = [
  {
    slug: 'leadgen',
    name: 'Leadgen',
    outcome: 'Find companies ready to buy.',
    tagline: 'Find companies ready to buy — in seconds, not weeks.',
    description:
      'Revnuvo Leadgen is a B2B prospecting API that surfaces companies matching your ideal customer profile — enriched with firmographics, tech-stack signals, and infrastructure fingerprints. Build targeted lists in seconds and pipe them directly into your CRM or sequencing tool via a single API call.',
    problem: 'Outbound teams waste time on accounts that aren\'t ready to purchase. Manual list-building takes days, firmographic data goes stale within weeks, and tech-stack intent is invisible to most prospecting tools.',
    solution: 'AI-powered identification of high-intent accounts based on real-time web activity, firmographics, and infrastructure fingerprints — delivered through a single API call with sub-second response time on Cloudflare\'s edge network.',
    appUrl: 'https://leadgen.revnuvo.site',
    primaryCta: 'Start Free',
    secondaryCta: 'Learn More',
    flowStep: 1,
    features: [
      {
        title: 'Firmographic filtering',
        description: 'Filter 400M+ companies by industry, size, geography, revenue, and funding stage.',
      },
      {
        title: 'Tech-stack detection',
        description: 'Identify companies using specific tools (Snowflake, HubSpot, Stripe, etc.) from live infrastructure scans.',
      },
      {
        title: 'Intent signals baked in',
        description: 'Each lead comes with a 0-100 intent score derived from DNS, hiring, and web-traffic signals.',
      },
      {
        title: 'CRM-ready payloads',
        description: 'Every response is shaped for direct insertion into HubSpot, Salesforce, Attio, or Clay.',
      },
    ],
    useCases: [
      'Outbound prospecting lists',
      'Account-based marketing enrichment',
      'Salesforce / HubSpot list building',
      'Investment target screening',
    ],
    apiEndpoint: 'GET /v1/leadgen/search',
    docsUrl: 'https://docs.revnuvo.site/leadgen',
  },
  {
    slug: 'signals',
    name: 'Signals',
    outcome: 'Know exactly when to reach out.',
    tagline: 'Real-time buying signals — fired the moment they happen.',
    description:
      'Revnuvo Signals monitors your target accounts in real time and fires webhook events the moment a buying trigger occurs — funding rounds, leadership changes, hiring surges, tech-stack migrations, or traffic spikes. Stop guessing when to call. Let the data tell you.',
    problem: 'Timing is everything, but most teams rely on guesswork. By the time a sales team hears about a funding round or leadership change, the window has already closed.',
    solution: 'Monitor 12+ buying signals across the web — funding, hiring, leadership changes, product launches, traffic surges, DNS changes — and trigger outreach at the exact moment of intent via real-time webhooks.',
    appUrl: 'https://signals.revnuvo.site',
    primaryCta: 'Request Access',
    secondaryCta: 'Learn More',
    flowStep: 2,
    features: [
      {
        title: 'Real-time webhook delivery',
        description: 'Sub-second signal delivery to any HTTPS endpoint, with retries and dead-letter queues built in.',
      },
      {
        title: '12 trigger types out of the box',
        description: 'Funding, hiring, leadership changes, product launches, traffic surges, DNS changes, and more.',
      },
      {
        title: 'Custom signal builder',
        description: 'Compose your own triggers from any combination of firmographic, intent, and infrastructure events.',
      },
      {
        title: 'Account-level deduplication',
        description: 'One event per account per trigger window — no noisy duplicates in your CRM.',
      },
    ],
    useCases: [
      'Sales trigger-based outreach',
      'Churn early-warning systems',
      'Investment thesis monitoring',
      'Competitive intelligence',
    ],
    apiEndpoint: 'POST /v1/signals/subscribe',
    docsUrl: 'https://docs.revnuvo.site/signals',
  },
  {
    slug: 'intelligence',
    name: 'Intelligence',
    outcome: 'Understand your market deeply.',
    tagline: 'Market research API — ask in plain English, get cited answers.',
    description:
      'Revnuvo Intelligence is a market-research API that synthesises firmographic, intent, and trust data into actionable insight — TAM sizing, competitor mapping, market-share estimates, and segment growth rates. Ask a question in plain English, get a structured answer with citations.',
    problem: 'Account research is manual, slow, and often outdated. Analysts spend days compiling TAM models, competitor matrices, and segment growth estimates that are stale the moment they ship.',
    solution: 'Automated company research, tech-stack analysis, and market intelligence delivered instantly via a natural-language API — with methodology and citations attached to every answer.',
    appUrl: 'https://intelligence.revnuvo.site',
    primaryCta: 'View Demo',
    secondaryCta: 'Learn More',
    flowStep: 3,
    features: [
      {
        title: 'Natural-language queries',
        description: 'Ask "How many Series B fintechs in EMEA use Snowflake?" and get a structured, cited answer in seconds.',
      },
      {
        title: 'TAM / SAM / SOM modelling',
        description: 'Generate total-addressable-market estimates from your ICP filters, with methodology documented.',
      },
      {
        title: 'Competitor infrastructure mapping',
        description: 'See which tools your competitors\' customers use, and which they\'re migrating away from.',
      },
      {
        title: 'Segment growth rates',
        description: 'Quarter-over-quarter growth in company count, headcount, and tech-stack adoption for any segment.',
      },
    ],
    useCases: [
      'Market sizing for board decks',
      'Competitive positioning analysis',
      'Investment thesis validation',
      'GTM segment prioritisation',
    ],
    apiEndpoint: 'POST /v1/intelligence/query',
    docsUrl: 'https://docs.revnuvo.site/intelligence',
  },
  {
    slug: 'trust',
    name: 'Trust',
    outcome: 'Verify identities, reduce risk.',
    tagline: 'Identity verification and fraud scoring — sub-200ms on the edge.',
    description:
      'Revnuvo Trust is an identity-verification and fraud-scoring API for B2B workflows. Resolve company entities across registries, verify beneficial ownership, score inbound leads for fraud risk, and comply with KYC/AML requirements — all from a single endpoint with sub-200ms response time on Cloudflare\'s edge.',
    problem: 'Fraud and fake accounts pollute your pipeline and waste resources. Manual KYC checks take days, beneficial-ownership lookups require multiple registries, and fraud scores from legacy vendors are too slow for real-time onboarding.',
    solution: 'Real-time identity verification, entity resolution, and risk scoring to ensure every lead is a legitimate opportunity — with KYC/AML compliance built in and SOC2, ISO 27001, and HIPAA readiness on the roadmap.',
    appUrl: 'https://trust.revnuvo.site',
    primaryCta: 'Start Free',
    secondaryCta: 'Learn More',
    flowStep: 4,
    features: [
      {
        title: 'Entity resolution',
        description: 'Match a company name, domain, or registration number to a canonical legal entity across 200+ jurisdictions.',
      },
      {
        title: 'Beneficial ownership',
        description: 'Pull UBO structures up to 25% ownership threshold, with source documents cited.',
      },
      {
        title: 'Fraud risk scoring',
        description: '0-100 risk score per lead, derived from DNS age, infrastructure fingerprints, and known fraud patterns.',
      },
      {
        title: 'KYC / AML compliance',
        description: 'Sanctions screening, PEP checks, and adverse-media alerts — SOC2, ISO 27001, and HIPAA ready.',
      },
    ],
    useCases: [
      'B2B onboarding KYC',
      'Fraud screening for inbound leads',
      'Vendor due diligence',
      'Regulatory compliance workflows',
    ],
    apiEndpoint: 'POST /v1/trust/verify',
    docsUrl: 'https://docs.revnuvo.site/trust',
  },
  {
    slug: 'dns-intelligence',
    name: 'DNS Intelligence',
    outcome: 'Monitor digital infrastructure health.',
    tagline: 'Passive DNS, certificate transparency, and BGP monitoring — in one API.',
    description:
      'Revnuvo DNS Intelligence is a passive-DNS and certificate-transparency API that monitors the digital infrastructure of any domain in real time. Detect DNS hijacks, certificate mis-issuance, subdomain takeover risks, and infrastructure migrations — all delivered as a streaming API or webhook-based alerts.',
    problem: 'DNS issues and infrastructure changes go unnoticed until it\'s too late. Certificate mis-issuance, subdomain takeovers, and BGP hijacks all happen silently — and most teams find out from a customer or a Twitter post, not from their monitoring stack.',
    solution: 'Continuous DNS monitoring, certificate-transparency alerts, subdomain enumeration with takeover-risk scoring, and BGP route monitoring — all delivered as a streaming API with webhook-based alerts for critical events.',
    appUrl: 'https://dns.revnuvo.site',
    primaryCta: 'Use API',
    secondaryCta: 'Learn More',
    flowStep: 5,
    features: [
      {
        title: 'Passive DNS history',
        description: 'Full A/AAAA/MX/TXT/NS record history for any domain, with 5+ years of retention.',
      },
      {
        title: 'Certificate transparency monitoring',
        description: 'Real-time alerts when a new TLS certificate is issued for any of your monitored domains.',
      },
      {
        title: 'Subdomain enumeration',
        description: 'Discover all known subdomains for a domain, with takeover-risk scoring per subdomain.',
      },
      {
        title: 'BGP route monitoring',
        description: 'Detect BGP hijacks and route leaks affecting your domains or your customers\' domains.',
      },
    ],
    useCases: [
      'Brand protection monitoring',
      'Phishing domain detection',
      'M&A infrastructure due diligence',
      'Security operations centre (SOC) feeds',
    ],
    apiEndpoint: 'GET /v1/dns-intelligence/lookup',
    docsUrl: 'https://docs.revnuvo.site/dns-intelligence',
  },
];

export const trustIndicators = [
  'Cloudflare-powered infrastructure',
  'API-first architecture',
  'Fast global edge deployment',
  'Security-first design',
  'Transparent pricing',
  'SOC2 Ready (Q4 2024)',
];

export function getProductBySlug(slug: string): Product | undefined {
  return platformFlow.find((p) => p.slug === slug);
}
