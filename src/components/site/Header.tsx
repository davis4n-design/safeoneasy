import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { SITE, getWhatsAppLink } from "@/lib/site-data";
import { Menu, X, Shield } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/quem-somos", label: "Quem Somos" },
    { to: "/solucoes", label: "Soluções" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
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

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-pink" }}
              className="hover:text-pink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={SITE.platformUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-white/10 px-5 py-2.5 rounded-full hover:bg-white/5 transition-all text-white/90 font-medium"
          >
            Acessar Plataforma
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink hover:bg-pink/90 px-6 py-2.5 rounded-full text-sm font-bold font-display transition-all shadow-[0_0_20px_rgba(244,63,126,0.25)] text-white"
          >
            Fale Conosco
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy border-b border-white/5">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-slate-300 hover:text-pink transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={SITE.platformUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-sm border border-white/10 px-5 py-2.5 rounded-full text-white/90 font-medium"
              >
                Acessar Plataforma
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-pink px-5 py-2.5 rounded-full text-sm font-bold text-white"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
