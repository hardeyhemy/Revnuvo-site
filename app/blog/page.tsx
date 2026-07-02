import Link from 'next/link';

export const metadata = {
  title: 'Blog - Revnuvo Insights',
  description: 'Insights on Revenue Intelligence, Edge Infrastructure, and Trust.',
};

const posts = [
  { title: 'Why Revenue Operations Needs an Edge-Native Architecture', date: 'July 2024', excerpt: 'Exploring how moving data processing to the edge reduces latency and improves data privacy for revenue teams.' },
  { title: 'Beyond Lead Generation: The Shift to Revenue Intelligence', date: 'June 2024', excerpt: 'How combining leadgen with real-time DNS monitoring and identity trust creates a complete revenue picture.' },
  { title: 'Securing Your Pipeline: The Role of Zero-Trust in B2B Sales', date: 'May 2024', excerpt: 'Why verifying identities and infrastructure is no longer optional for modern sales teams.' }
];

export default function BlogPage() {
  return (
    <main className="container py-24 md:py-32 mx-auto px-4 max-w-4xl">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-12">Revnuvo Insights</h1>
      <div className="space-y-10">
        {posts.map((post, index) => (
          <div key={index} className="border-b border-border/40 pb-8">
            <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
            <h2 className="text-2xl font-semibold mb-3 hover:text-primary transition-colors cursor-pointer">{post.title}</h2>
            <p className="text-muted-foreground text-lg">{post.excerpt}</p>
            <Link href="/blog" className="text-primary font-medium mt-4 inline-block hover:underline">Read more →</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
