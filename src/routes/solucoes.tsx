import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { solutions, getWhatsAppLink } from "@/lib/site-data";
import { Check, ArrowRight, ShieldCheck, Gauge } from "lucide-react";
import safedriveDashboard from "@/assets/safedrive-dashboard.jpg";
import safeperformDashboard from "@/assets/safeperform-dashboard.jpg";

const images: Record<string, string> = {
  safedrive: safedriveDashboard,
  safeperform: safeperformDashboard,
};

const icons: Record<string, React.ReactNode> = {
  safedrive: <ShieldCheck className="w-10 h-10 text-pink" />,
  safeperform: <Gauge className="w-10 h-10 text-pink" />,
};

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Soluções — SafeOneasy" },
      {
        name: "description",
        content:
          "Conheça as soluções SafeDrive e SafePerform: videotelemetria com IA, controle operacional e gestão inteligente de frotas.",
      },
      { property: "og:title", content: "Soluções — SafeOneasy" },
      {
        property: "og:description",
        content:
          "Conheça as soluções SafeDrive e SafePerform: videotelemetria com IA, controle operacional e gestão inteligente de frotas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-navy">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-pink text-xs font-bold tracking-widest uppercase mb-3 block">
              Soluções
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Tecnologia para cada desafio da sua frota
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Da prevenção de acidentes à otimização operacional, nossas soluções usam IA para
              transformar dados em decisões inteligentes.
            </p>
          </div>
        </section>

        {solutions.map((solution, index) => (
          <section
            key={solution.id}
            className={`py-24 ${index % 2 === 0 ? "bg-white" : "bg-navy"}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-6">
                    {icons[solution.id]}
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">
                      {solution.name}
                    </h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {solution.fullDescription}
                  </p>

                  {solution.plans && (
                    <div className="space-y-4 mb-8">
                      {solution.plans.map((plan) => (
                        <div
                          key={plan.name}
                          className="bg-navy/5 rounded-2xl p-6 border border-navy/10"
                        >
                          <h3 className="font-display text-xl font-bold text-navy mb-2">
                            {plan.name}
                          </h3>
                          <p className="text-sm text-slate-500 mb-4">{plan.description}</p>
                          <ul className="space-y-2">
                            {plan.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2 text-sm text-slate-700"
                              >
                                <Check className="w-4 h-4 text-pink mt-0.5 shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {solution.features && (
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {solution.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <Check className="w-4 h-4 text-pink mt-0.5 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}

                  <a
                    href={getWhatsAppLink(
                      `Olá, gostaria de saber mais sobre a solução ${solution.name} da SafeOneasy`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-pink hover:bg-pink/90 rounded-xl font-display font-bold text-lg transition-all group text-white"
                  >
                    Falar com especialista
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div
                  className={`rounded-3xl overflow-hidden shadow-2xl h-[400px] ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <img
                    src={images[solution.id]}
                    alt={`Dashboard ${solution.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
