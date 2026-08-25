import { solutions, getWhatsAppLink } from "@/lib/site-data";
import { ArrowRight, ShieldCheck, Gauge } from "lucide-react";
import safedriveDashboard from "@/assets/safedrive-dashboard.jpg";
import safeperformDashboard from "@/assets/safeperform-dashboard.jpg";

const images: Record<string, string> = {
  safedrive: safedriveDashboard,
  safeperform: safeperformDashboard,
};

const icons: Record<string, React.ReactNode> = {
  safedrive: <ShieldCheck className="w-8 h-8 text-pink" />,
  safeperform: <Gauge className="w-8 h-8 text-pink" />,
};

export function Solutions() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-pink text-xs font-bold tracking-widest uppercase mb-3 block">
            Nossas Soluções
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Uma plataforma, duas soluções inteligentes
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="group bg-navy-light/20 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-pink/30 transition-all"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={images[solution.id]}
                  alt={`Dashboard ${solution.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {icons[solution.id]}
                  <h3 className="font-display text-2xl font-bold text-white">{solution.name}</h3>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">{solution.shortDescription}</p>
                <a
                  href="/solucoes"
                  className="inline-flex items-center gap-2 text-pink font-display font-bold hover:gap-4 transition-all"
                >
                  Saiba mais
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={getWhatsAppLink("Olá, gostaria de conversar sobre as soluções SafeOneasy")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-pink hover:bg-pink/90 rounded-xl font-display font-bold text-lg transition-all group text-white"
          >
            Fale com um especialista
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
