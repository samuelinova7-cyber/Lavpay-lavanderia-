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
  CheckCircle2,
  MessageCircle,
  Star,
  Car,
  Baby
} from 'lucide-react';

export const BRAND_NAME = "LAVPAY";
export const SLOGAN = "Lavanderia Self-Service";
export const WHATSAPP_LINK = "https://wa.me/5569992035229?text=Olá! Quero saber mais sobre a lavagem de roupas na LavPay.";
export const GOOGLE_REVIEWS_LINK = "https://g.page/r/CSEM8R32uJ-hEBM/review";
export const INSTAGRAM_LINK = "https://instagram.com/lavpaylavanderia";
export const HISTORY_STUDY_LINK = "https://pt.wikipedia.org/wiki/História_de_Porto_Velho";
export const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.33418512215!2d-63.8732947!3d-8.7423985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x923259683448f415%3A0x86094727188293d2!2sLav%20Pay%20-%20Lavanderia%20Autoatendimento!5e0!3m2!1spt-BR!2sbr!4v1707000000000!5m2!1spt-BR!2sbr";
export const LOCATION_IMAGE = "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/WhatsApp%20Image%202026-03-19%20at%206.37.03%20PM.jpeg";
export const GOOGLE_MAPS_DIRECT_LINK = "https://maps.app.goo.gl/86094727188293d2";

export const LOGO_IMAGE = "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-19%20093919.png";
export const HERO_VIDEO = "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/SnapInsta.to_AQPBFwQa7ArpJfWR-6UgwIExkc_g9IV2gXK7JNXnI7nc2RN2lJ5ViGLMqksa24NPUQ2BU5ALlgvWQ1EstFJwVvRCVCbT8r1mh84G5jw.mp4";

export const NAV_ITEMS = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Como Funciona', href: '#how-it-works' },
  { label: 'Preços', href: '#plans' },
  { label: 'Diferenciais', href: '#differentials' },
  { label: 'História', href: '#history' },
  { label: 'Contato', href: '#contact' },
];

export const DIFFERENTIALS = [
  {
    icon: <MessageCircle size={40} />,
    title: "Suporte humano",
    description: "Atendimento rápido via Whatsapp 24h."
  },
  {
    icon: <Clock size={40} />,
    title: "Tempo Recorde",
    description: "Roupas limpas e secas em média 60 minutos."
  },
  {
    icon: <Baby size={40} />,
    title: "Espaço Kids",
    description: "Diversão para os pequenos."
  },
  {
    icon: <Car size={40} />,
    title: "Estacionamento",
    description: "Chegue, estacione e aproveite nossos serviços com tranquilidade."
  },
  {
    icon: <Droplets size={40} />,
    title: "Máquinas Industriais",
    description: "Nossas máquinas economizam até 70% de água e energia."
  },
  {
    icon: <Heart size={40} />,
    title: "Sustentabilidade",
    description: "Cuidamos do planeta com tecnologia e produtos eco-friendly."
  },
  {
    icon: <Sparkles size={40} />,
    title: "Produtos inclusos",
    description: "Sabão OMO e amaciante Comfort profissionais em todos os ciclos."
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Ambiente Seguro",
    description: "Monitoramento 24h para sua total tranquilidade e segurança."
  },
  {
    icon: <Wifi size={40} />,
    title: "Wi-Fi Gratuito",
    description: "Internet de alta velocidade para você trabalhar ou relaxar."
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
    url: "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/SnapInsta.to_AQN3RWMUwJ33FDg_1W67Ts1WYoL3dFovGnEwaQzbiOJ11rN0R6GnL7NW7p55g4gsafGXRoFl6aSnyFfWjBDi9c1xEizWdYM3UFdNoj8.mp4"
  },
  {
    type: 'video',
    url: "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/SnapInsta.to_AQOM3J_UrdBl-rYFSy1Ux-2gBiWBzaBevvdxCreeBy8Nle_TpAL9VL725l9-kMtBI-U0bT0b900QNFhIbS0haNtfrJBYwAxtFBLzojM.mp4"
  },
  {
    type: 'video',
    url: "https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/SnapInsta.to_AQMEfq8kQrbgNNXvtwcBVdgWzsgEG0CPj_esazz8J9XWZtk51sxJeLu7tOdYeKu5a_NWvuuDelVJunAD--H5GQuMSCTwVpAwEhJTkpA.mp4"
  }
];
