import { getWhatsAppLink } from "@/lib/site-data";
import { ArrowRight, Eye } from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent z-10" />
        <img
          src={heroTruck}
          alt="Frota de caminhões com telemetria digital"
          className="w-full h-full object-cover opacity-50"
          width={1920}
          height={1080}
        />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-pink/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-light/40 border border-pink/20 text-pink text-xs font-bold tracking-widest uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink opacity-75" />
                <span className="relative inline-flex rounded-full h-full w-full bg-pink" />
              </span>
              IA para Gestão de Frotas
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-8 text-white">
              Tecnologia que <span className="text-pink">enxerga</span> e entende sua frota
            </h1>

            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl font-light">
              Transforme a segurança e produtividade da sua operação com videotelemetria inteligente e inteligência artificial embarcada.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={getWhatsAppLink("Olá, gostaria de solicitar uma demo da SafeOneasy")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-pink hover:bg-pink/90 rounded-xl font-display font-bold text-lg transition-all flex items-center gap-3 group text-white"
              >
                Solicitar Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/solucoes"
                className="px-8 py-4 bg-navy-light/50 hover:bg-navy-light rounded-xl font-display font-bold text-lg transition-all border border-white/10 backdrop-blur-sm text-white"
              >
                Nossas Soluções
              </a>
            </div>

            <div className="mt-16 flex flex-wrap gap-10 md:gap-16">
              <div>
                <div className="font-display text-3xl font-bold text-white">+2mil</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Veículos</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-pink">+3,5k</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Alertas/Dia</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-white">9</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Anos Exp.</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink/20 to-transparent blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-navy-light/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex justify-between items-start mb-6">
                <div className="h-12 w-12 rounded-full bg-pink flex items-center justify-center shadow-[0_0_20px_rgba(244,63,126,0.4)]">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-1 rounded font-bold uppercase tracking-tighter">
                  Live Analysis
                </span>
              </div>
              <div className="space-y-4">
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-pink rounded-full animate-pulse" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 bg-white/5 rounded-lg border border-white/5" />
                  <div className="h-16 bg-pink/10 rounded-lg border border-pink/20" />
                  <div className="h-16 bg-white/5 rounded-lg border border-white/5" />
                </div>
                <div className="text-xs text-slate-400 font-mono leading-relaxed">
                  [SYSTEM] Detectando fadiga do condutor...<br />
                  [IA] Nível crítico: 82%<br />
                  [ACAO] Alerta sonoro emitido.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
