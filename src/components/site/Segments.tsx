import { segments } from "@/lib/site-data";
import segmentRoad from "@/assets/segment-road.jpg";
import segmentMining from "@/assets/segment-mining.jpg";
import segmentAgro from "@/assets/segment-agro.jpg";

const images: Record<string, string> = {
  "segment-road": segmentRoad,
  "segment-mining": segmentMining,
  "segment-agro": segmentAgro,
};

export function Segments() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-pink text-xs font-bold tracking-widest uppercase mb-3 block">
            Segmentos Atendidos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">
            Soluções para cada tipo de operação
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((segment) => (
            <div
              key={segment.id}
              className="group relative rounded-3xl overflow-hidden h-[420px]"
            >
              <img
                src={images[segment.image]}
                alt={segment.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  {segment.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">{segment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
