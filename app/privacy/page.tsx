export const metadata = { title: 'Privacy Policy', description: 'How Revnuvo handles your data.' };
export default function PrivacyPage() {
  return (
    <main className="container py-24 md:py-32 mx-auto px-4 max-w-3xl prose dark:prose-invert">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">Privacy Policy</h1>
      <p className="text-muted-foreground">Last updated: July 1, 2024</p>
      
      <h2 className="text-xl font-semibold mt-8">1. Introduction</h2>
      <p>Revnuvo Technologies Ltd. ("Revnuvo") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your information when you use our platform and APIs.</p>
      
      <h2 className="text-xl font-semibold mt-8">2. Data Collection</h2>
      <p>We process two types of data: Customer Data (the data you submit to our APIs, such as domains to monitor) and Operational Data (usage logs, IP addresses, and device information). Because Revnuvo is built on Cloudflare, much of your data is processed at the edge, closest to your users.</p>
      
      <h2 className="text-xl font-semibold mt-8">3. Data Usage</h2>
      <p>We use your data to provide the Revenue Intelligence Platform, verify identities, monitor DNS health, and prevent fraud. We do not sell your Customer Data to third parties.</p>
      
      <h2 className="text-xl font-semibold mt-8">4. Data Retention</h2>
      <p>Customer Data is retained for the duration of your subscription and deleted within 30 days of account termination, unless required by law.</p>
    </main>
  );
}
