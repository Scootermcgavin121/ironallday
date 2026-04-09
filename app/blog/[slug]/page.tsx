import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "../../data/blog-posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Iron All Day Research Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Iron All Day",
      url: "https://ironallday.com",
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ironallday.com/blog/${post.slug}`,
    },
    keywords: post.category,
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-48 pb-24">
      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Breadcrumbs */}
      <nav className="max-w-3xl mx-auto px-6 mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-white transition">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-white transition">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-white line-clamp-1">{post.title}</span>
      </nav>

      {/* Article Header */}
      <header className="max-w-3xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">
            {post.category}
          </span>
          <span className="text-white/20">·</span>
          <span className="text-xs text-gray-500">{post.readingTime}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-6">
          {post.title}
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-600 border-t border-white/5 pt-6">
          <span className="font-semibold text-white/60">{post.author}</span>
          <span>·</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </header>

      {/* Article Body */}
      <article
        className="max-w-3xl mx-auto px-6 prose prose-invert prose-lg max-w-none
          prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-white
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-accent prose-h2:pl-4
          prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-accent
          prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
          prose-li:text-gray-300 prose-li:leading-relaxed
          prose-strong:text-white
          prose-a:text-accent prose-a:no-underline hover:prose-a:underline
          prose-code:text-accent prose-code:bg-white/5 prose-code:px-1 prose-code:rounded
          prose-pre:bg-[#111] prose-pre:border prose-pre:border-white/10
          prose-hr:border-white/10 prose-hr:my-12
          prose-ol:text-gray-300 prose-ul:text-gray-300"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Back to Blog */}
      <div className="max-w-3xl mx-auto px-6 mt-16 pt-8 border-t border-white/5">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
        >
          ← Back to Research Blog
        </Link>
      </div>
    </main>
  );
}
