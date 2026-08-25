import { SITE, getWhatsAppLink } from "@/lib/site-data";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all hover:scale-110"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
    </a>
  );
}
