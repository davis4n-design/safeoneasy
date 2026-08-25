# Plano de reestruturação do site SafeOneasy

## Resumo do projeto

Reestruturar o site institucional da SafeOneasy (tecnologia para gestão de frotas, videotelemetria com IA) com um design mais moderno, visual B2B tecnológico e foco em direcionar o visitante ao contato via WhatsApp.

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

1. **Home** — página principal com todas as seções institucionais
2. **Quem Somos** — história, missão, valores e diferenciais
3. **Soluções** — detalhamento dos produtos SafeDrive e SafePerform
4. **Blog** — listagem de artigos (integração com conteúdo existente)

### Seções da Home

1. **Navigation** — logo, links (Home, Quem Somos, Soluções, Blog), botão CTA para WhatsApp e "Acessar Plataforma"
2. **Hero** — headline "Tecnologia que enxerga, entende e age na gestão da sua frota", subheadline, CTA principal para WhatsApp, imagem/ilustração de caminhão com sensores de IA
3. **About / SafeOneasy** — bloco de apresentação da empresa com cards de métricas (anos no mercado, experiência, alertas/dia, veículos monitorados)
4. **Soluções** — cards para SafeDrive (videotelemetria com IA) e SafePerform (controle operacional e produtividade)
5. **Segmentos** — ícones/cards para Rodoviário, Mineração e Agronegócio
6. **Depoimentos** — carrossel ou grid com os depoimentos de Fidens, Ferbasa e J&F
7. **Blog** — preview dos últimos posts com thumbnails
8. **Footer** — contato, links rápidos, redes sociais e botão flutuante de WhatsApp

## Funcionalidades

- **CTA de WhatsApp em destaque** em botões do hero, navegação e footer
- **Link direto para a plataforma** ("Acessar Plataforma")
- **Navegação responsiva** com menu mobile
- **Animações suaves** de entrada e scroll (revelação de seções, hover nos cards)
- **SEO otimizado** com títulos, meta descriptions, schema de organização e Open Graph

## Tecnologia

- TanStack Start + React 19 + TypeScript
- Tailwind CSS v4 com design tokens customizados
- Componentes visuais próprios (não dependência excessiva de shadcn)
- Imagens geradas sob demanda para hero e ilustrações de seções

## Próximos passos pós aprovação

1. Gerar as 3 direções visuais e aguardar escolha
2. Implementar a direção escolhida no código
3. Revisar responsivo e performance
4. Validar preview com o usuário
