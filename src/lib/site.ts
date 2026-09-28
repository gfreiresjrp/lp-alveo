/**
 * Configuração central da marca / contato ALVEO.
 * Troque estes valores pelos reais (WhatsApp, e-mail, redes) quando tiver.
 */
export const site = {
  name: "ALVEO",
  fullName: "ALVEO Marketing e Vendas",
  tagline: "Marketing especializado em odontologia",
  // WhatsApp em formato internacional, sem símbolos (ex.: 55 + DDD + número)
  whatsapp: "5517981664728",
  whatsappMessage:
    "Olá! Vim pelo site da ALVEO e gostaria de agendar uma conversa sobre o marketing da minha clínica.",
  email: "contato@alveo.com.br",
  instagram: "https://instagram.com/alveo",
} as const;

export function whatsappUrl(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * OFERTA + ESCASSEZ: mantenha estes números VERDADEIROS e atualize todo mês.
 * (Escassez falsa derruba a confiança e pode gerar problema com o Procon/CDC.)
 */
export const offer = {
  /** Valor do primeiro mês (sem contrato), em reais. */
  price: 700,
  /** Vagas de clínicas novas abertas neste mês. */
  vagasTotal: 5,
  /** Vagas que ainda restam neste mês. Atualize conforme fechar clientes. */
  vagasRestantes: 3,
  /** Exclusividade: quantas clínicas atendemos por região/bairro. */
  porRegiao: 1,
} as const;

export const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export const nav = [
  { label: "Método", href: "#metodo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Dúvidas", href: "#faq" },
] as const;

/** ID do Meta Pixel (Facebook Ads). */
export const META_PIXEL_ID = "920322627533112";

/** Âncora do formulário (todos os CTAs da página levam pra cá). */
export const FORM_ID = "diagnostico";

/**
 * Depoimentos em vídeo (formato Reels 9:16).
 * Para cada um, preencha `youtubeId` (ID de um Short/vídeo do YouTube)
 * OU `src` (arquivo em /public/videos). Sem nenhum dos dois, mostra o
 * placeholder "vídeo em breve".
 */
export const testimonials: {
  name: string;
  company: string;
  youtubeId?: string;
  src?: string;
  poster?: string;
}[] = [
  { name: "Dr(a). Cliente ALVEO", company: "Implantodontia" },
  { name: "Dr(a). Cliente ALVEO", company: "Ortodontia" },
  { name: "Dr(a). Cliente ALVEO", company: "Clínica geral" },
];

/**
 * Fotos da seção "Quem somos". Coloque os arquivos em /public/fotos e
 * preencha `src`. Sem `src`, mostra o placeholder.
 */
export const aboutPhotos: { caption: string; src?: string }[] = [
  { caption: "Equipe ALVEO" },
  { caption: "Nosso escritório" },
];
