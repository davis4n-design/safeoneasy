import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { blogPosts } from "@/lib/site-data";
import { Newspaper, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — SafeOneasy" },
      {
        name: "description",
        content:
          "Artigos e conteúdos sobre gestão de frotas, videotelemetria, segurança e inteligência artificial.",
      },
      { property: "og:title", content: "Blog — SafeOneasy" },
      {
        property: "og:description",
        content:
          "Artigos e conteúdos sobre gestão de frotas, videotelemetria, segurança e inteligência artificial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-navy">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-pink text-xs font-bold tracking-widest uppercase mb-3 block">
              Blog
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Conhecimento para sua frota
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Artigos, tendências e boas práticas sobre segurança, produtividade e tecnologia para
              gestão de frotas.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <a
                  key={index}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all flex flex-col"
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3 text-slate-400 text-xs font-bold uppercase tracking-wider">
                      <Newspaper className="w-4 h-4" />
                      Artigo
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy mb-3 line-clamp-2 group-hover:text-pink transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3">{post.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
