import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { aboutMetrics, values, getWhatsAppLink } from "@/lib/site-data";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-fleet.jpg";

const icons: Record<string, React.ReactNode> = {
  MISSÃO: <Target className="w-6 h-6 text-pink" />,
  VISÃO: <Eye className="w-6 h-6 text-pink" />,
  VALORES: <Heart className="w-6 h-6 text-pink" />,
};

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — SafeOneasy" },
      {
        name: "description",
        content:
          "Conheça a SafeOneasy: tecnologia para gestão de frotas com IA, videotelemetria e segurança. Nossa missão, visão e valores.",
      },
      { property: "og:title", content: "Quem Somos — SafeOneasy" },
      {
        property: "og:description",
        content:
          "Conheça a SafeOneasy: tecnologia para gestão de frotas com IA, videotelemetria e segurança.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-navy">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-pink text-xs font-bold tracking-widest uppercase mb-3 block">
              Quem Somos
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white max-w-4xl">
              Tecnologia que protege pessoas e transforma frotas
            </h1>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="rounded-3xl overflow-hidden h-[400px]">
                <img
                  src={aboutImage}
                  alt="Operação de frota SafeOneasy"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="font-display text-4xl font-bold text-navy mb-6">
                  Nossa história
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  A SafeOneasy nasceu com o propósito de revolucionar a gestão de frotas através da
                  tecnologia. Desde o início, unimos inteligência artificial, videotelemetria e
                  conhecimento profundo do setor de transporte para criar soluções que realmente
                  fazem a diferença na segurança e produtividade das operações.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Hoje, atendemos grandes empresas dos segmentos rodoviário, mineração e agronegócio,
                  ajudando-as a reduzir acidentes, otimizar processos e proteger vidas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-navy">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((item) => (
                <div
                  key={item.title}
                  className="bg-navy-light/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink/10 flex items-center justify-center mb-6">
                    {icons[item.title]}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">
                Nossos números
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-navy rounded-2xl p-6 text-white hover:bg-navy-light transition-colors"
                >
                  <div className="font-display text-3xl font-bold text-pink mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-slate-300 leading-tight">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-pink">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para transformar sua frota?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Fale com nossos especialistas e descubra como a SafeOneasy pode levar segurança e
              eficiência para a sua operação.
            </p>
            <a
              href={getWhatsAppLink("Olá, gostaria de falar com um especialista SafeOneasy")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-pink hover:bg-slate-100 rounded-xl font-display font-bold text-lg transition-all group"
            >
              Fale com um especialista
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
