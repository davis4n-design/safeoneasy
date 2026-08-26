import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Solutions } from "@/components/site/Solutions";
import { Segments } from "@/components/site/Segments";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "SafeOneasy — Segurança e Tecnologia para Frotas",
      },
      {
        name: "description",
        content:
          "Videotelemetria com IA para gestão de frotas. Reduza acidentes, aumente a produtividade e proteja seus motoristas com SafeDrive e SafePerform.",
      },
      {
        property: "og:title",
        content: "SafeOneasy — Segurança e Tecnologia para Frotas",
      },
      {
        property: "og:description",
        content:
          "Videotelemetria com IA para gestão de frotas. Reduza acidentes, aumente a produtividade e proteja seus motoristas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Segments />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
