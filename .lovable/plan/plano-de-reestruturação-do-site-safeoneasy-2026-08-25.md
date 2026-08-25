# Plano de reestruturação do site SafeOneasy

## Resumo do projeto

Reestruturar o site institucional da SafeOneasy (tecnologia para gestão de frotas, videotelemetria com IA) com um design mais moderno, visual B2B tecnológico e foco em direcionar o visitante ao contato via WhatsApp.

## Referências visuais recebidas

O usuário enviou screenshots das páginas atuais: Home, Quem Somos e Soluções. O redesign preserva a arquitetura de conteúdo e informações dessas páginas, modernizando visual, tipografia, hierarquia e interações.

## Decisões de design travadas

- **Paleta de cores:** Azul profundo (#0A1628), rosa neon (#F43F7E), branco (#FFFFFF) e azul secundário (#1E3A5F)
- **Tipografia:** Space Grotesk para títulos, DM Sans para corpo de texto
- **Estrutura base:** Hero impactante em tela cheia + seções em camadas full-width

## Processo de redesign

1. **Gerar 3 direções visuais** renderizadas em HTML+Tailwind, mantendo a paleta, tipografia e estrutura travadas, variando em composição, densidade, hierarquia e movimento
2. **Apresentar as 3 direções** ao usuário para escolha
3. **Implementar a direção escolhida** no projeto, respeitando fielmente a composição, quantidade de componentes e seções

## Estrutura do site proposta

### Páginas

1. **Home** — página principal com hero, sobre, soluções, segmentos, depoimentos e blog
2. **Quem Somos** — hero, sobre, propósito, métricas/valores, missão/visão/valores, CTA final
3. **Soluções** — hero de soluções, planos SafeDrive (CORE, PLUS, MAX), SafePerform com funcionalidades e CTAs
4. **Blog** — listagem de artigos (integração com conteúdo existente)

### Seções principais

1. **Navigation** — logo, links (Home, Quem Somos, Soluções, Blog), botão CTA para WhatsApp e "Acessar Plataforma"
2. **Hero** — headline "Tecnologia que enxerga, entende e age na gestão da sua frota", CTA principal para WhatsApp, imagem/ilustração de frota com IA
3. **Sobre** — apresentação da SafeOneasy com texto e cards de métricas
4. **Soluções** — cards/planos para SafeDrive e SafePerform
5. **Segmentos** — Rodoviário, Mineração e Agronegócio
6. **Depoimentos** — carrossel ou grid com Fidens, Ferbasa e J&F
7. **Blog** — preview dos últimos posts
8. **Footer** — contato, links rápidos, redes sociais e botão flutuante de WhatsApp

## Funcionalidades

- **CTA de WhatsApp em destaque** em botões do hero, navegação e footer
- **Link direto para a plataforma** ("Acessar Plataforma")
- **Navegação responsiva** com menu mobile
- **Animações suaves** de entrada e scroll
- **SEO otimizado** com títulos, meta descriptions e Open Graph

## Tecnologia

- TanStack Start + React 19 + TypeScript
- Tailwind CSS v4 com design tokens customizados
- Componentes visuais próprios
- Imagens geradas sob demanda para hero e ilustrações

## Próximos passos

1. Gerar as 3 direções visuais e aguardar escolha
2. Implementar a direção escolhida no código
3. Revisar responsivo e performance
4. Validar preview com o usuário
