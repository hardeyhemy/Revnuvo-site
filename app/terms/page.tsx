export const metadata = { title: 'Terms of Service', description: 'The terms and conditions for using Revnuvo.' };
export default function TermsPage() {
  return (
    <main className="container py-24 md:py-32 mx-auto px-4 max-w-3xl prose dark:prose-invert">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">Terms of Service</h1>
      <p className="text-muted-foreground">Last updated: July 1, 2024</p>

      <h2 className="text-xl font-semibold mt-8">1. Acceptance of Terms</h2>
      <p>By accessing or using the Revnuvo Revenue Intelligence Platform, you agree to be bound by these Terms of Service. If you are using Revnuvo on behalf of a company, you represent that you have authority to bind that entity.</p>

      <h2 className="text-xl font-semibold mt-8">2. API Usage & Rate Limits</h2>
      <p>Access to Revnuvo APIs is subject to rate limits based on your subscription tier. Exceeding these limits may result in temporary throttling. You agree not to use the APIs to scrape, spam, or violate applicable laws.</p>

      <h2 className="text-xl font-semibold mt-8">3. Acceptable Use</h2>
      <p>You may not use Revnuvo to verify identities for illegal purposes, distribute malware, or interfere with the integrity of our edge infrastructure. Violations will result in immediate account termination.</p>
    </main>
  );
}
