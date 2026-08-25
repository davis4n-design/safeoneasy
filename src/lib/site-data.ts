export const SITE = {
  name: "SafeOneasy",
  tagline: "Safe System",
  whatsapp: "5531997398680",
  whatsappMessage:
    "Olá, visitei o site da Safe On Easy e gostaria de saber mais sobre as soluções de monitoramento e gestão de frotas.",
  platformUrl: "https://app.safeoneasy.com.br/",
  email: "contato@safeoneasy.com.br",
  phone: "(31) 99739-8680",
  address: "Rua Ursulina de Melo, 286 - Bairro Alípio de Melo - Belo Horizonte - MG",
  social: {
    instagram: "https://instagram.com/safeoneasy",
    facebook: "https://facebook.com/safeoneasy",
    linkedin: "https://linkedin.com/company/safeoneasy",
  },
};

export function getWhatsAppLink(message?: string) {
  const text = encodeURIComponent(message ?? SITE.whatsappMessage);
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export const stats = [
  { value: "1", label: "ano no mercado de tecnologia para frotas" },
  { value: "9", label: "anos de experiência no segmento com profissionais qualificados" },
  { value: "+3,5k", label: "alertas processados por dia" },
  { value: "+2mil", label: "veículos monitorados com nossa solução" },
];

export const solutions = [
  {
    id: "safedrive",
    name: "SafeDrive",
    shortDescription:
      "Videotelemetria com IA que enxerga riscos, entende comportamentos e age em tempo real para evitar acidentes e proteger vidas.",
    fullDescription:
      "A SafeDrive é nossa solução de videotelemetria com inteligência artificial que monitora o comportamento do condutor e condições da estrada em tempo real. Detecta fadiga, distração, uso de celular e outros riscos, emitindo alertas instantâneos para prevenir acidentes.",
    plans: [
      {
        name: "SafeDrive CORE",
        description: "Núcleo da solução: simples, robusto e eficaz",
        features: ["Monitoramento por vídeo"],
      },
      {
        name: "SafeDrive PLUS",
        description: "Funcionalidades expandidas para operações mais exigentes",
        features: ["Evitar acidentes fatais", "IA como copiloto do condutor embarcada (ADAS e DMS)"],
      },
      {
        name: "SafeDrive MAX",
        description: "Proteção total com o que há de mais completo",
        features: [
          "Evitar acidentes fatais e monitorar pessoas e processos",
          "Câmera de fadiga",
          "Rastreamento de pessoas",
          "Radar",
          "Alerta de proximidade",
          "Câmeras e telas embarcadas",
        ],
      },
    ],
    image: "safedrive-dashboard",
  },
  {
    id: "safeperform",
    name: "SafePerform",
    shortDescription:
      "Solução para controle operacional, otimização de rotas, redução de desperdícios e aumento da produtividade da frota.",
    fullDescription:
      "A SafePerform otimiza a operação da sua frota com controle de velocidade, geolocalização, sensoriamento de máquinas e análise de produtividade. Reduz custos operacionais, elimina desperdícios e aumenta a eficiência do dia a dia.",
    features: [
      "Hodômetro e hodômetro",
      "Identificação do uso do cinto de segurança",
      "Monitoramento de freadas excessivas e bruscas",
      "Mapa de calor dos equipamentos e mapa de rota realizada",
      "Registro de operador com limite de acesso",
      "Sensor de para-brisa monitorando velocidade na chuva e no seco",
      "Alerta do uso de báscula em movimento",
      "Sensor de temperatura em tempo real",
      "RPM e horímetro",
      "Monitoramento de ré e manobras",
      "Geolocalização em tempo real",
      "Ignição, identificação e tempo de ignição ligada",
      "Cerca eletrônica com controle de velocidade",
      "Porta CAN para leitura de dados do veículo",
    ],
    image: "safeperform-dashboard",
  },
];

export const segments = [
  {
    id: "road",
    title: "RODOVIÁRIO",
    description:
      "Nossas soluções atuam para aumentar a segurança, reduzir custos e aprimorar a gestão de frotas rodoviárias, tornando cada viagem mais eficiente e previsível.",
    image: "segment-road",
  },
  {
    id: "mining",
    title: "MINERAÇÃO",
    description:
      "Em ambientes de alto risco, nossas soluções monitoram comportamento, previnem acidentes e asseguram operações mais seguras e produtivas.",
    image: "segment-mining",
  },
  {
    id: "agro",
    title: "AGRONEGÓCIO",
    description:
      "Nossas tecnologias monitoram máquinas e condutores, prevenindo falhas operacionais, otimizando rotas e garantindo mais segurança e produtividade em todas as etapas da operação.",
    image: "segment-agro",
  },
];

export const testimonials = [
  {
    quote:
      "A escolha da SafeOneasy foi porque quem nos apresentou foram as mesmas pessoas que venderam os produtos de gerenciamento, então unificou tudo. Tudo em um único sistema.",
    author: "Felipe",
    company: "Fidens",
  },
  {
    quote:
      "Eu acredito que não só a integração, mas, antes de tudo, a confiança, a aposta da empresa no cliente. Uma relação de confiança que se estabelece na apresentação do produto.",
    author: "Cícero Siqueira",
    company: "Ferbasa",
  },
  {
    quote:
      "A gente avaliou a solução de três empresas. O fator preponderante neste ponto foi a questão do prazo de entrega.",
    author: "Diego Ardaya",
    company: "J&F",
  },
];

export const blogPosts = [
  {
    title: "Fadiga ao volante: o risco silencioso que ainda desafia as operações de transporte",
    description:
      "Soluções de videotelemetria com IA conseguem analisar e identificar sinais compatíveis com a fadiga ao volante e sonolência.",
    image: "https://safeoneasy.com.br/wp-content/uploads/2026/08/fadiga-ao-volante-capa.png",
    url: "https://safeoneasy.com.br/fadiga-ao-volante-o-risco-silencioso/",
  },
  {
    title: "Custos invisíveis da frota: quanto sua operação perde sem perceber?",
    description:
      "Descubra quais são os custos invisíveis da frota e como videotelemetria e IA ajudam a reduzir perdas e melhorar resultados.",
    image: "https://safeoneasy.com.br/wp-content/uploads/2026/07/custos-invisiveis-da-frota-capa.png",
    url: "https://safeoneasy.com.br/custos-invisiveis-da-frota/",
  },
  {
    title: "Segurança na mineração: como a tecnologia está transformando o transporte e a operação em campo",
    description:
      "Descubra como videotelemetria e IA ajudam na segurança na mineração, prevenindo acidentes e aumentando a eficiência operacional.",
    image: "https://safeoneasy.com.br/wp-content/uploads/2026/06/seguranca-na-mineracao-capa.png",
    url: "https://safeoneasy.com.br/seguranca-na-mineracao/",
  },
];

export const values = [
  {
    title: "MISSÃO",
    description:
      "Garantir a segurança e otimização das operações de frotas com soluções tecnológicas inovadoras e personalizadas, sendo um parceiro estratégico para nossos clientes.",
  },
  {
    title: "VISÃO",
    description:
      "Ser referência em tecnologia e inovação em segurança e gestão de frotas, oferecendo alto valor agregado.",
  },
  {
    title: "VALORES",
    description: "Foco no cliente • Inovação contínua • Compromisso com a segurança • Busca constante por excelência",
  },
];

export const aboutMetrics = [
  { value: "4", label: "anos no mercado de tecnologia para frotas" },
  { value: "20+", label: "anos de experiência dos profissionais qualificados no segmento" },
  { value: "Todas", label: "Atuação em todas as regiões do Brasil (com projeto de expansão para o exterior)" },
  { value: "7.500", label: "alertas processados por dia" },
  { value: "Tecnologia", label: "Incorporamos a mais avançada tecnologia eletrônica com foco na aquisição de dados de forma remota" },
  { value: "+5 mil", label: "veículos monitorados com nossa solução" },
  { value: "Qualidade", label: "Priorizamos a qualidade e a inteligência embarcada" },
  { value: "IA", label: "Tecnologia que enxerga, entende e age na gestão da sua frota" },
];
