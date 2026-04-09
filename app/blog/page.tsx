import Link from "next/link";
import { blogPosts } from "../data/blog-posts";

export const metadata = {
  title: "Research Blog | Iron All Day",
  description:
    "Technical research articles on peptide biochemistry, mechanisms of action, synthesis, analytical methods, and laboratory handling protocols. For research purposes only.",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-48 pb-24">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-4">
          Research Library
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
          The IAD Blog
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Technical deep-dives into peptide biochemistry, signaling pathways, analytical chemistry, and research protocols. Written for laboratory researchers.
        </p>
        <p className="text-xs text-gray-600 mt-4 italic">
          For research purposes only. Not for human consumption.
        </p>
      </section>

      {/* Post Grid */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-[#111] rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="text-white/20">·</span>
                  <span className="text-xs text-gray-500">{post.readingTime}</span>
                </div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight leading-tight mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-600">
                    <span>{post.author}</span>
                    <span className="mx-2">·</span>
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <span className="text-accent text-xs font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-block">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
