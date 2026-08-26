import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — SafeOneasy" },
      {
        name: "description",
        content: "Política de privacidade da SafeOneasy.",
      },
      { property: "og:title", content: "Política de Privacidade — SafeOneasy" },
      { property: "og:description", content: "Política de privacidade da SafeOneasy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-8">
            Política de Privacidade
          </h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed">
              A SafeOneasy valoriza a privacidade dos seus usuários e está comprometida com a
              proteção dos dados pessoais coletados em nossas plataformas e canais de comunicação.
            </p>
            <h2 className="text-xl font-bold text-navy mt-8 mb-4">Coleta de dados</h2>
            <p className="text-slate-600 leading-relaxed">
              Coletamos informações necessárias para prestar nossos serviços, como dados de contato,
              informações da frota e dados técnicos dos veículos monitorados. Essas informações são
              obtidas com o consentimento do titular ou para cumprimento de obrigações legais.
            </p>
            <h2 className="text-xl font-bold text-navy mt-8 mb-4">Uso das informações</h2>
            <p className="text-slate-600 leading-relaxed">
              As informações coletadas são utilizadas para operação e melhoria das nossas soluções,
              atendimento ao cliente, comunicações institucionais e cumprimento de obrigações
              legais.
            </p>
            <h2 className="text-xl font-bold text-navy mt-8 mb-4">Segurança</h2>
            <p className="text-slate-600 leading-relaxed">
              Adotamos medidas técnicas e administrativas de segurança para proteger os dados contra
              acessos não autorizados, vazamentos ou qualquer forma de tratamento inadequado.
            </p>
            <h2 className="text-xl font-bold text-navy mt-8 mb-4">Contato</h2>
            <p className="text-slate-600 leading-relaxed">
              Em caso de dúvidas sobre esta política, entre em contato pelo e-mail
              contato@safeoneasy.com.br.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
