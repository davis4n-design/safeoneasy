import { testimonials } from "@/lib/site-data";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-pink text-xs font-bold tracking-widest uppercase mb-3 block">
            Depoimentos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            O que os nossos clientes dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-navy-light/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative"
            >
              <Quote className="w-10 h-10 text-pink/30 mb-4" />
              <p className="text-slate-300 leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="border-t border-white/10 pt-6">
                <div className="font-display font-bold text-white">{testimonial.author}</div>
                <div className="text-sm text-pink">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
