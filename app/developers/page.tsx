import { Button } from '@/components/ui/button';
import { Terminal, Code, BookOpen, Webhook } from 'lucide-react';

export const metadata = {
  title: 'Developers - API & Documentation',
  description: 'Integrate Revenue Intelligence into your stack. Explore the Revnuvo API, SDKs, and webhooks.',
};

export default function DevelopersPage() {
  return (
    <main className="container py-24 md:py-32 mx-auto px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Build with <span className="text-primary">Revenue Intelligence</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Query the Revnuvo Revenue OS via a single, fast, and predictable API. Authenticate, fetch signals, and verify trust in milliseconds.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          {/*
            Bug fix: both buttons previously linked to /docs and /docs/api,
            which are not routes in this app — they 404'd. The actual
            developer documentation lives at the external developers.
            revnuvo.site domain (separate Cloudflare Pages project).
            Using <a> instead of <Link> because this is a cross-origin
            navigation — next/link is for internal routes only.
          */}
          <Button size="lg" asChild>
            <a href="https://developers.revnuvo.site" target="_blank" rel="noopener noreferrer">
              Read the Docs
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://developers.revnuvo.site/apis" target="_blank" rel="noopener noreferrer">
              API Reference
            </a>
          </Button>
        </div>
      </div>

      {/* Code Example Section */}
      <div className="mt-20 grid gap-12 items-center">
        <div className="rounded-xl border bg-zinc-950 text-zinc-50 shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-2.5">
            <Terminal className="h-4 w-4 text-zinc-400" />
            <span className="text-xs font-mono text-zinc-400">revnuvo-api</span>
          </div>
          <pre className="p-4 text-xs leading-relaxed font-mono overflow-x-auto">
            <code>
              <span className="text-emerald-400">$ curl</span> https://api.revnuvo.site/v1/signals \{'\n'}
              <span className="text-zinc-500">  -H</span> <span className="text-amber-300">"Authorization: Bearer rv_live_..."</span> \{'\n'}
              <span className="text-zinc-500">  -d</span> <span className="text-amber-300">{'\'{"domain": "acme.com"}\''}</span>{'\n\n'}
              <span className="text-zinc-600">{'{'}</span>{'\n'}
              <span className="text-sky-300">  "company"</span>: <span className="text-amber-300">"Acme Corp"</span>,{'\n'}
              <span className="text-sky-300">  "intent_score"</span>: <span className="text-emerald-400">92</span>,{'\n'}
              <span className="text-sky-300">  "verified"</span>: <span className="text-emerald-400">true</span>,{'\n'}
              <span className="text-sky-300">  "dns_health"</span>: <span className="text-amber-300">"optimal"</span>{'\n'}
              <span className="text-zinc-600">{'}'}</span>
            </code>
          </pre>
        </div>

        {/* Developer Feature Cards */}
        <div className="grid sm:grid-cols-3 gap-8 pt-8">
          <div className="flex flex-col items-start gap-3">
            <div className="p-2 rounded-md bg-muted">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Official SDKs</h3>
            <p className="text-sm text-muted-foreground">First-class libraries for Node.js, Python, and Go. Typed responses for fast development.</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <div className="p-2 rounded-md bg-muted">
              <Webhook className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Webhooks</h3>
            <p className="text-sm text-muted-foreground">Get real-time notifications when a company's intent score spikes or DNS status changes.</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <div className="p-2 rounded-md bg-muted">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Edge-First</h3>
            <p className="text-sm text-muted-foreground">Responses cached and computed at the Cloudflare edge. 99.99% uptime SLA.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
