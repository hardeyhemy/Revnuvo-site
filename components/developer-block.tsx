// components/developer-block.tsx
import { Terminal } from 'lucide-react';

export function DeveloperBlock() {
  return (
    <section className="container py-24 md:py-32 border-t bg-muted/30">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            API-First. Built for Developers.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stop scraping disparate services. Query the Revnuvo Revenue OS via a single, fast, and predictable API. Authenticate, fetch signals, and verify trust in milliseconds.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="/docs" className="text-primary font-medium hover:underline">Read the Docs →</a>
            <a href="/docs/quickstart" className="text-primary font-medium hover:underline">Quickstart →</a>
          </div>
        </div>
        
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
      </div>
    </section>
  );
}
