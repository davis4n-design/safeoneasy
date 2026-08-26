import { SITE, getWhatsAppLink } from "@/lib/site-data";
import { Link } from "@tanstack/react-router";
import { Shield, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { to: "/", label: "Home" },
    { to: "/quem-somos", label: "Quem Somos" },
    { to: "/solucoes", label: "Soluções" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-pink to-navy-light rounded-lg flex items-center justify-center p-2">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold tracking-tight uppercase text-white">
                  {SITE.name}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">
                  {SITE.tagline}
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">{SITE.address}</p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Menu</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 hover:text-pink transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/politica-de-privacidade"
                  className="text-sm text-slate-400 hover:text-pink transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-pink transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-pink transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5" />
                {SITE.address}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-pink hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-pink hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-pink hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-slate-500">
            © {currentYear} {SITE.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
