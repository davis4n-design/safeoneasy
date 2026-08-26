import { blogPosts } from "@/lib/site-data";
import { ArrowRight, Newspaper } from "lucide-react";

export function Blog() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="text-pink text-xs font-bold tracking-widest uppercase mb-3 block">
              Blog
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">
              Leia nosso Blog
            </h2>
          </div>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-pink font-display font-bold hover:gap-4 transition-all"
          >
            Ver todos os artigos
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-slate-400 text-xs font-bold uppercase tracking-wider">
                  <Newspaper className="w-4 h-4" />
                  Artigo
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-3 line-clamp-2 group-hover:text-pink transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600 line-clamp-3">{post.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
