import { ShieldCheck, Cloud, Lock } from 'lucide-react';

export const metadata = { title: 'Security', description: 'Revnuvo security practices.' };
export default function SecurityPage() {
  return (
    <main className="container py-24 md:py-32 mx-auto px-4 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Security at Revnuvo</h1>
        <p className="mt-6 text-lg text-muted-foreground">Security is not a feature; it is our foundation. Revnuvo is built natively on Cloudflare's global edge network.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="mx-auto w-fit p-3 rounded-lg bg-muted mb-4"><Cloud className="h-6 w-6 text-primary" /></div>
          <h3 className="font-semibold text-lg">Edge-Native</h3>
          <p className="mt-2 text-sm text-muted-foreground">Data is processed at the Cloudflare edge, minimizing attack surfaces and reducing latency.</p>
        </div>
        <div>
          <div className="mx-auto w-fit p-3 rounded-lg bg-muted mb-4"><Lock className="h-6 w-6 text-primary" /></div>
          <h3 className="font-semibold text-lg">Encryption</h3>
          <p className="mt-2 text-sm text-muted-foreground">All data in transit is secured via TLS 1.3. APIs require strict authentication via Bearer tokens.</p>
        </div>
        <div>
          <div className="mx-auto w-fit p-3 rounded-lg bg-muted mb-4"><ShieldCheck className="h-6 w-6 text-primary" /></div>
          <h3 className="font-semibold text-lg">Zero-Trust</h3>
          <p className="mt-2 text-sm text-muted-foreground">Our internal infrastructure operates on a zero-trust model. No implicit access between services.</p>
        </div>
      </div>
    </main>
  );
}
