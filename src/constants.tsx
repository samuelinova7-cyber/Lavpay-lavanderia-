import React from 'react';
import { 
  Clock, 
  ShieldCheck, 
  Zap, 
  Heart, 
  Droplets, 
  Wind, 
  Shirt, 
  Sparkles,
  Wifi,
  Smartphone,
  CreditCard,
  CheckCircle2
} from 'lucide-react';

export const BRAND_NAME = "LavPay";
export const SLOGAN = "Lavanderia de Autoatendimento: Sua vida mais leve, suas roupas prontas num Pix.";
export const WHATSAPP_LINK = "https://wa.me/5569992035229?text=Olá! Quero saber mais sobre a lavagem de roupas na LavPay.";
export const GOOGLE_REVIEWS_LINK = "https://www.google.com/maps/place/Lav+Pay+-+Lavanderia+Autoatendimento/@-8.7423985,-63.8732947,17z/data=!4m8!3m7!1s0x923259683448f415:0x86094727188293d2!8m2!3d-8.7423985!4d-63.8707198!9m1!1b1!16s%2Fg%2F11v0_v_v_v?entry=ttu";
export const INSTAGRAM_LINK = "https://instagram.com/lavpaylavanderia";
export const HISTORY_STUDY_LINK = "https://pt.wikipedia.org/wiki/História_de_Porto_Velho";
export const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.33418512215!2d-63.8732947!3d-8.7423985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x923259683448f415%3A0x86094727188293d2!2sLav%20Pay%20-%20Lavanderia%20Autoatendimento!5e0!3m2!1spt-BR!2sbr!4v1707000000000!5m2!1spt-BR!2sbr";

export const LOGO_VIDEO = "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/grok-video-a37699be-1923-489c-a537-70e3334124ba.mp4";
export const HERO_VIDEO = "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/a13752e3-6d61-4166-80c0-f17b8c22bc3b.mp4";

export const NAV_ITEMS = [
  { label: 'Início', href: '#home' },
  { label: 'Como Funciona', href: '#how-it-works' },
  { label: 'Preços', href: '#plans' },
  { label: 'História', href: '#history' },
  { label: 'Contato', href: '#contact' },
];

export const DIFFERENTIALS = [
  {
    icon: <Clock size={40} />,
    title: "Aberto das 06h às 23h",
    description: "Atendimento todos os dias, incluindo domingos e feriados."
  },
  {
    icon: <Wifi size={40} />,
    title: "Wi-Fi Grátis",
    description: "Trabalhe ou divirta-se enquanto suas roupas ficam prontas."
  },
  {
    icon: <Zap size={40} />,
    title: "Rápido e Prático",
    description: "Lave e seque suas roupas em pouco mais de uma hora."
  },
  {
    icon: <Heart size={40} />,
    title: "Produtos Inclusos",
    description: "Sabão e amaciante profissionais (OMO e Comfort) já dosados."
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    icon: <Shirt size={48} />,
    title: "Prepare",
    description: "Coloque suas roupas no cesto medidor da loja para verificar a carga."
  },
  {
    icon: <CreditCard size={48} />,
    title: "Pague",
    description: "Use o totem de autoatendimento. Aceitamos Cartão e Pix."
  },
  {
    icon: <Droplets size={48} />,
    title: "Lave/Seque",
    description: "Escolha a máquina disponível e aguarde o ciclo finalizar."
  },
  {
    icon: <CheckCircle2 size={48} />,
    title: "Pronto",
    description: "Saia com suas roupas limpas, secas e extremamente cheirosas."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Natalia Alvarenga",
    comment: "Ambiente limpo e organizado, os produtos utilizados na lavagem são de qualidade, e tem três opções de cheirinho sob a mesa pra passar na roupa antes de secar, que dão um toque especial 😍🥰🥰",
    avatar: "NA"
  },
  {
    id: 2,
    name: "Tania Campagnolli",
    comment: "Foi ótima. Roupa limpa e cheirosa. Quando usamos a secadora a roupa nem precisa passar. Ótima para lavar e secar roupas pretas, não deixam pelos, saem perfeitas da secadora.",
    avatar: "TC"
  },
  {
    id: 3,
    name: "Ana Carolina",
    comment: "Excelente! Opção de escolher o tipo de lavagem. Tem Wi-Fi no local, cheirinhos para passar na roupa após lavagem; excelente localização, bem limpa e arrumada.",
    avatar: "AC"
  },
  {
    id: 4,
    name: "BRUNO ABREU",
    comment: "Após as lavagens, as roupas saem cheirosas e limpas. A secadora deixa a roupa pronta para uso. Mini espaço de entretenimento para meu filho. Excelente local. Super Indico",
    avatar: "BA"
  },
  {
    id: 5,
    name: "Waldir Lima",
    comment: "Lugar limpo e ambiente maravilhoso, localização muito boa. Tudo organizado e ótimo preço e os produtos muito bom. Super recomendo.",
    avatar: "WL"
  },
  {
    id: 6,
    name: "Dino Almeida",
    comment: "Excelente serviço de lavanderia, a lavagem é 30 minutos e a roupa sai bem limpa e perfuma. Serviço com ótimo custo e benefício. Recomendo!",
    avatar: "DA"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Quanto tempo leva o ciclo de lavagem?",
    answer: "O ciclo de lavagem leva aproximadamente 30 minutos, garantindo limpeza profunda e rapidez."
  },
  {
    question: "E o ciclo de secagem?",
    answer: "A secagem leva cerca de 45 minutos, deixando as roupas prontas para uso ou para guardar."
  },
  {
    question: "Quais produtos são utilizados?",
    answer: "Utilizamos exclusivamente sabão OMO e amaciante Comfort profissionais, dosados automaticamente em cada ciclo."
  },
  {
    question: "Posso lavar edredons?",
    answer: "Sim! Nossas máquinas industriais comportam edredons de casal e king size com total eficiência."
  },
  {
    question: "Preciso levar sabão ou amaciante?",
    answer: "Não! Nossas máquinas possuem dosagem automática de sabão OMO e amaciante Comfort profissionais inclusos no valor."
  },
  {
    question: "Quais as formas de pagamento?",
    answer: "Aceitamos Cartão de Crédito, Débito e Pix diretamente no nosso totem de autoatendimento."
  },
  {
    question: "As máquinas são higienizadas?",
    answer: "Sim! Nossas máquinas possuem ciclos automáticos de higienização e manutenção preventiva rigorosa."
  },
  {
    question: "Posso lavar tênis ou calçados?",
    answer: "Não é permitido lavar calçados em nossas máquinas para garantir a durabilidade dos equipamentos e a higiene para todos."
  },
  {
    question: "Tem Wi-Fi no local?",
    answer: "Sim! Oferecemos Wi-Fi gratuito de alta velocidade para que você possa trabalhar ou se divertir enquanto espera."
  },
  {
    question: "Qual o horário de funcionamento?",
    answer: "Funcionamos todos os dias, incluindo domingos e feriados, das 06h às 23h."
  },
  {
    question: "Preciso agendar um horário?",
    answer: "Não é necessário agendamento. O atendimento é por ordem de chegada e temos várias máquinas disponíveis."
  },
  {
    question: "O que faço se tiver algum problema?",
    answer: "Temos um canal de suporte via WhatsApp disponível para auxiliar em qualquer dúvida ou imprevisto na loja."
  },
  {
    question: "As roupas saem realmente secas?",
    answer: "Sim! Nossas secadoras industriais deixam as roupas prontas para dobrar e guardar, muitas vezes sem necessidade de passar."
  },
  {
    question: "Posso lavar roupas de animais de estimação?",
    answer: "Por questões de higiene e respeito a todos os clientes, não é permitida a lavagem de itens de pets em nossas máquinas."
  }
];

export const STRUCTURE_IMAGES = [
  "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800"
];

export const INSTAGRAM_POSTS = [
  {
    type: 'video',
    url: "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/SnapInsta.to_AQPBFwQa7ArpJfWR-6UgwIExkc_g9IV2gXK7JNXnI7nc2RN2lJ5ViGLMqksa24NPUQ2BU5ALlgvWQ1EstFJwVvRCVCbT8r1mh84G5jw.mp4"
  },
  {
    type: 'video',
    url: "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/SnapInsta.to_AQOM3J_UrdBl-rYFSy1Ux-2gBiWBzaBevvdxCreeBy8Nle_TpAL9VL725l9-kMtBI-U0bT0b900QNFhIbS0haNtfrJBYwAxtFBLzojM.mp4"
  },
  {
    type: 'video',
    url: "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/SnapInsta.to_AQO3wPr_ALkNZxigfub9rQGBNhzM7kMuoF_JK1xsSAzIH8Nfc6T_xSq83PYvyAwY66IdPvpi0N4vHtGfkMcA-tqo1iWB-_QfzL8JJmU.mp4"
  },
  {
    type: 'image',
    url: "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-18%20123142.png"
  }
];
