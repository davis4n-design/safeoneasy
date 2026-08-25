import { stats, getWhatsAppLink } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              SafeOneasy
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Somos uma empresa de tecnologia especializada em soluções inteligentes para segurança,
              produtividade e gestão de frotas. Nossa plataforma utiliza IA para oferecer recursos
              avançados em videotelemetria, monitoramento e auditoria, transformando a operação de
              transportes logísticos e de mineração em um processo mais eficiente, seguro e descomplicado.
            </p>
            <a
              href="/quem-somos"
              className="inline-flex items-center gap-2 text-pink font-display font-bold hover:gap-4 transition-all"
            >
              Saiba mais sobre nós
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-navy rounded-2xl p-6 text-white hover:bg-navy-light transition-colors"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-pink mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-300 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
