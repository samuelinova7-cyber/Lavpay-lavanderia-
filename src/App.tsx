import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Instagram as InstagramIcon, 
  Facebook, 
  Phone, 
  MapPin, 
  Clock as ClockIcon, 
  ChevronRight, 
  ChevronDown, 
  Star,
  MessageCircle,
  Play,
  CheckCircle2,
  PartyPopper,
  Droplets,
  Wind,
  Medal,
  Gem,
  HelpCircle,
  Heart,
  Sparkles,
  Shirt,
  Zap,
  Volume2,
  VolumeX,
  Wifi,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  NAV_ITEMS, 
  DIFFERENTIALS, 
  TESTIMONIALS, 
  FAQ_ITEMS, 
  STRUCTURE_IMAGES,
  INSTAGRAM_POSTS,
  WHATSAPP_LINK,
  GOOGLE_REVIEWS_LINK,
  INSTAGRAM_LINK,
  HISTORY_STUDY_LINK,
  BRAND_NAME,
  SLOGAN,
  LOGO_IMAGE,
  HERO_VIDEO,
  HOW_IT_WORKS_STEPS,
  GOOGLE_MAPS_EMBED,
  LOCATION_IMAGE,
  GOOGLE_MAPS_DIRECT_LINK
} from './constants';

// --- Utility Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href,
  target
}: { 
  children?: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'success' | 'navy'; 
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
}) => {
  const base = "px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider";
  const variants = {
    primary: "bg-lavpay-blue text-white hover:opacity-90 shadow-md",
    secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    outline: "border-2 border-lavpay-blue text-lavpay-blue hover:bg-blue-50",
    ghost: "text-slate-600 hover:text-lavpay-blue hover:bg-blue-50",
    accent: "bg-yellow-500 text-slate-900 hover:bg-yellow-600 shadow-md",
    success: "bg-lavpay-green text-lavpay-blue hover:opacity-90 shadow-md",
    navy: "bg-lavpay-blue text-white hover:opacity-90 shadow-md"
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component 
      href={href}
      onClick={onClick} 
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
};

const VideoPlayer = ({ src, className = "", overlayClassName = "", autoPlay = true, loop = true, playsInline = true }: { src: string, className?: string, overlayClassName?: string, autoPlay?: boolean, loop?: boolean, playsInline?: boolean }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-full group/video">
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        muted={isMuted}
        loop={loop}
        playsInline={playsInline}
        className={`${className} cursor-pointer`}
        onClick={toggleMute}
      />
      <button
        onClick={toggleMute}
        className={`absolute bottom-4 right-4 z-30 p-2 md:p-3 bg-black/60 hover:bg-black/80 text-white rounded-full md:rounded-xl backdrop-blur-md transition-all duration-300 shadow-xl flex items-center gap-2 border border-white/20 ${overlayClassName}`}
        aria-label={isMuted ? "Ativar som" : "Desativar som"}
      >
        {isMuted ? (
          <>
            <VolumeX size={20} className="md:w-6 md:h-6" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider pr-1">Ativar Som</span>
          </>
        ) : (
          <>
            <Volume2 size={20} className="md:w-6 md:h-6" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider pr-1">Mudar para Mudo</span>
          </>
        )}
      </button>
    </div>
  );
};

// --- Section Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-lavpay-blue shadow-md' : 'bg-lavpay-blue/90 backdrop-blur-md'}`}>
      {/* Marquee Top Bar */}
      <div className="bg-white/10 text-white text-sm py-2 overflow-hidden flex items-center border-b border-white/10">
        <div className="animate-infinite-scroll flex whitespace-nowrap items-center">
          {[...Array(2)].map((_, copyIdx) => (
            <div key={copyIdx} className="flex items-center gap-8 px-4">
              {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                  <span className="flex items-center gap-2"><ClockIcon size={14} /> Aberto das 06h às 23h</span>
                  <span className="flex items-center gap-2"><MapPin size={14} /> Porto Velho - RO</span>
                  <span className="flex items-center gap-2"><Wind size={14} /> Lave e Seque em 1h</span>
                  <span className="flex items-center gap-2"><Wifi size={14} /> Wi-Fi Grátis</span>
                  <span className="flex items-center gap-2"><Droplets size={14} /> Ambiente Climatizado</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={`container mx-auto px-4 flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <a href="#home" className="flex items-center gap-3">
          <img 
            src={LOGO_IMAGE} 
            alt={BRAND_NAME}
            className={`rounded-full object-cover shadow-sm transition-all duration-300 ${scrolled ? 'w-16 h-16' : 'w-28 h-28'}`}
            referrerPolicy="no-referrer"
          />
          <span className={`font-bold font-heading text-white transition-all duration-300 ${scrolled ? 'text-2xl' : 'text-4xl'}`}>{BRAND_NAME}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="font-medium text-white transition-colors hover:text-lavpay-green"
            >
              {item.label}
            </a>
          ))}
          <Button variant="success" href={WHATSAPP_LINK} className="rounded-full">
            <MessageCircle size={18} /> WhatsApp
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-lavpay-blue shadow-xl border-t border-white/10 p-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-lg font-medium text-white border-b border-white/10 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button variant="success" className="w-full rounded-full" href={WHATSAPP_LINK}>
            Fale Conosco
          </Button>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="max-w-xl z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-lavpay-blue text-sm font-bold mb-6 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-lavpay-green"></span>
              Tecnologia e Praticidade
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold font-heading text-slate-900 leading-[1.2] mb-6 tracking-tight">
              Lavanderia Self-Service em Porto Velho – <span className="text-lavpay-blue">Rápida, Moderna</span> e com <span className="text-lavpay-green">Benefícios Exclusivos</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Na Lav Pay Lavanderia você lava e seca suas roupas em aproximadamente 60 minutos, com produtos profissionais inclusos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="navy" className="text-lg px-8 py-4 rounded-xl shadow-lg" href={WHATSAPP_LINK}>
                Falar no WhatsApp <ChevronRight size={20} />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 rounded-xl border-lavpay-green text-lavpay-blue hover:bg-green-50" href="#contact">
                Como Chegar
              </Button>
            </div>
          </div>

          {/* Right Media Content */}
          <div className="relative z-20">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-100 border-8 border-white">
              <VideoPlayer
                src={HERO_VIDEO}
                className="absolute inset-0 w-full h-full object-cover"
                overlayClassName="bottom-32 right-6"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#002366]/40 via-transparent to-transparent"></div>
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <img 
                  src={LOGO_IMAGE} 
                  alt={BRAND_NAME}
                  className="w-14 h-14 rounded-xl object-cover shadow-sm shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{BRAND_NAME}</h3>
                  <p className="text-base text-slate-600">Sua roupa limpa em 1 hora</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-[#32CD32] font-bold text-2xl mb-2">Simples e Rápido</h3>
          <h2 className="text-4xl md:text-6xl font-bold text-[#002366]">Como Funciona</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 rounded-2xl bg-blue-50 text-[#002366] flex items-center justify-center mb-6 group-hover:bg-[#002366] group-hover:text-white transition-colors">
                {step.icon}
              </div>
              <h4 className="text-2xl font-bold text-[#002366] mb-4">{step.title}</h4>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Plans = () => {
  const plans = [
    {
      title: "Ciclo de Lavagem",
      description: "Lave tudo o que couber no cesto medidor (aprox. 10kg). Sabão e amaciante inclusos.",
      price: "15",
      cents: "00",
      unit: "ciclo",
      icon: <Droplets size={44} className="text-[#002366]" />,
      buttonText: "Lavar Agora",
      variant: "navy" as const
    },
    {
      title: "Ciclo de Secagem",
      description: "Roupas secas e prontas para usar em 45 minutos.",
      price: "15",
      cents: "00",
      unit: "ciclo",
      icon: <Wind size={44} className="text-[#002366]" />,
      buttonText: "Secar Agora",
      variant: "navy" as const
    }
  ];

  return (
    <section id="plans" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#002366] mb-4">Preços Justos</h2>
          <p className="text-slate-500 text-xl">Economia real para o seu dia a dia. Tudo o que couber no cesto!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {plans.map((plan, idx) => (
            <div key={idx} className="relative bg-slate-50 rounded-[40px] p-10 shadow-xl border border-slate-100 flex flex-col items-center text-center">
              <div className="mb-6">
                {plan.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-[#002366] mb-4">{plan.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-[280px]">
                {plan.description}
              </p>
              <div className="flex items-start text-[#002366] mb-10">
                <span className="text-lg font-bold mt-2 mr-1">R$</span>
                <span className="text-7xl font-bold leading-none">{plan.price}</span>
                <div className="flex flex-col items-start ml-1">
                  <span className="text-3xl font-bold border-b-2 border-[#32CD32] leading-none mb-1">,{plan.cents}</span>
                  <span className="text-xs font-medium text-slate-400">/ {plan.unit}</span>
                </div>
              </div>
              <Button 
                variant="navy" 
                className="w-full py-4 text-base bg-[#002366]"
                href={WHATSAPP_LINK}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Usage Rules Section */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-slate-100 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-50 text-lavpay-blue rounded-xl">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Regras de Uso e Segurança</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-lavpay-green shrink-0 mt-1" />
                <p className="text-slate-600 text-sm">Respeite a capacidade indicada em cada máquina.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-lavpay-green shrink-0 mt-1" />
                <p className="text-slate-600 text-sm">Meça as peças sempre soltas, sem compactar no cesto e ultrapassar a borda.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-lavpay-green shrink-0 mt-1" />
                <p className="text-slate-600 text-sm">Respeite a ordem de chegada.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <X size={20} className="text-red-500 shrink-0 mt-1" />
                <p className="text-slate-600 text-sm">Proibido lavar ou secar tapetes, travesseiro, panos de chão, sapatos, roupas com graxa, areia ou excesso de pelos.</p>
              </div>
              <div className="flex items-start gap-3">
                <X size={20} className="text-red-500 shrink-0 mt-1" />
                <p className="text-slate-600 text-sm">Proibido adicionar produtos em pó em nossos equipamentos.</p>
              </div>
              <div className="flex items-start gap-3">
                <X size={20} className="text-red-500 shrink-0 mt-1" />
                <p className="text-slate-600 text-sm">Não adicione roupas sem centrifugar em nossas secadoras.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Instagram = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-[#002366] mb-4">Siga nosso Instagram</h2>
        <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Acompanhe nossas novidades, promoções e dicas de lavagem em tempo real!
        </p>
        <Button 
          variant="navy" 
          className="rounded-xl px-10 py-4 mb-20 bg-[#002366]"
          href={INSTAGRAM_LINK}
        >
          <InstagramIcon size={20} className="mr-2" /> @lavpaylavanderia
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <div 
              key={idx} 
              className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl group border-4 border-white"
            >
              {post.type === 'video' ? (
                <VideoPlayer 
                  src={post.url} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src={post.url} 
                  alt={`Instagram Post ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <InstagramIcon size={32} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  return (
    <section id="differentials" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-[#002366] mb-4 tracking-tight">Diferenciais LavPay</h2>
        <p className="text-slate-500 text-xl">Conforto e tecnologia para você e suas roupas.</p>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
        {DIFFERENTIALS.map((item, idx) => (
          <div 
            key={idx} 
            className="p-10 rounded-[20px] bg-[#002366] text-white flex flex-col items-center text-center shadow-2xl transition-transform hover:-translate-y-2 duration-300"
          >
            <div className="mb-6 text-[#32CD32]">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold mb-4 leading-snug">{item.title}</h4>
            <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-[#002366] mb-4">O que nossos clientes dizem</h2>
        <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Nota 5.0 no Google! Veja por que a LavPay é a lavanderia preferida de Porto Velho.
        </p>
        <Button 
          variant="navy" 
          className="rounded-xl px-10 py-4 mb-20 bg-[#002366]"
          href={GOOGLE_REVIEWS_LINK}
        >
          Deixe sua Avaliação
        </Button>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id} 
              className="min-w-[300px] md:min-w-[400px] bg-white p-10 rounded-[20px] shadow-xl border border-slate-100 flex flex-col h-full snap-center"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex-grow border-l-2 border-[#32CD32] pl-6 mb-10">
                <p className="text-slate-600 italic text-lg leading-relaxed">
                  "{item.comment}"
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-[#002366] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {item.avatar}
                </div>
                <span className="font-bold text-[#002366]">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-[#002366] mb-4">
            <HelpCircle size={30} />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#002366] mb-4">Perguntas Frequentes</h2>
          <p className="text-slate-500 text-xl font-medium">Tire suas dúvidas sobre a LavPay.</p>
        </div>
        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={idx} className="overflow-hidden">
              <button 
                className="w-full py-6 flex items-center justify-between text-left group transition-all" 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === idx ? 'text-[#32CD32]' : 'text-slate-800'}`}>
                  {item.question}
                </span>
                <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-[#32CD32]' : ''}`} size={20} />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-slate-500 text-lg leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#32CD32]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#002366]/10 rounded-full blur-3xl" />
            
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl z-10 group">
              <img 
                src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/Captura%20de%20tela%202026-03-18%20123142.png" 
                alt="LavPay Lavanderia" 
                className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Shine Effect */}
              <motion.div
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1.5
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20 z-20 pointer-events-none"
              />
              
              {/* Sparkle effects */}
              <motion.div 
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute top-10 left-10 text-yellow-300 z-30"
              >
                <Sparkles size={32} />
              </motion.div>
              <motion.div 
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-20 right-10 text-white z-30"
              >
                <Sparkles size={24} />
              </motion.div>
            </div>

          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#002366]/5 text-[#002366] font-semibold text-sm">
              <span className="w-2 h-2 rounded-full bg-[#32CD32]" />
              Nossa História
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#002366] leading-tight">
              A forma mais prática de lavar roupas em Porto Velho.
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                A LavPay Lavanderia nasceu de um sonho: trazer para Porto Velho a modernidade e a praticidade das lavanderias de autoatendimento que são sucesso no mundo todo.
              </p>
              <p>
                Desde o início da nossa trajetória, celebramos não apenas o crescimento da nossa marca, mas também cada minuto de tempo livre que devolvemos aos nossos clientes. Acreditamos que lavar roupa não deve ser um peso, mas um processo rápido, eficiente e até prazeroso.
              </p>
              <p>
                Com tecnologia de ponta e um ambiente acolhedor, a LavPay vem se consolidando como referência em cuidado têxtil na região, sempre focada em inovação e na satisfação de quem confia suas roupas a nós.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <p className="text-3xl font-bold text-[#002366] mb-1">100%</p>
                <p className="text-sm text-gray-500 font-medium">Autoatendimento</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <p className="text-3xl font-bold text-[#002366] mb-1">+3 ton</p>
                <p className="text-sm text-gray-500 font-medium">Roupas Cuidadas</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <p className="text-3xl font-bold text-[#002366] mb-1">+2.000h</p>
                <p className="text-sm text-gray-500 font-medium">Tempo Economizado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Fabrics = () => {
  const fabrics = [
    {
      title: "Algodão e Dia a Dia",
      description: "Camisetas, jeans e roupas íntimas. Lavagem eficiente que preserva as fibras naturais.",
      icon: <Shirt size={24} />,
      tips: "Ideal para o ciclo padrão de 35 minutos."
    },
    {
      title: "Sintéticos e Esportivos",
      description: "Roupas de academia e tecidos tecnológicos. Secagem rápida e remoção de odores.",
      icon: <Zap size={24} />,
      tips: "Use temperatura média na secagem para maior durabilidade."
    },
    {
      title: "Cama e Banho",
      description: "Lençóis, toalhas e edredons. Higienização profunda para o seu conforto.",
      icon: <Wind size={24} />,
      tips: "Nossas máquinas suportam edredons de casal com facilidade."
    },
    {
      title: "Tecidos Delicados",
      description: "Lãs, sedas e roupas com detalhes. Cuidado extra para peças especiais.",
      icon: <Sparkles size={24} />,
      tips: "Recomendamos o uso de sacos protetores para maior segurança."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002366] mb-6">
            Cuidado Especial para Cada Tipo de Tecido
          </h2>
          <p className="text-gray-600 text-lg">
            Nossas máquinas são programadas para oferecer o melhor tratamento para suas roupas, garantindo limpeza profunda sem danificar as peças.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fabrics.map((fabric, index) => (
            <div key={index} className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 rounded-2xl bg-[#002366]/5 text-[#002366] flex items-center justify-center mb-6 group-hover:bg-[#32CD32] group-hover:text-[#002366] transition-colors">
                {fabric.icon}
              </div>
              <h3 className="text-xl font-bold text-[#002366] mb-4">{fabric.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {fabric.description}
              </p>
              <div className="pt-4 border-t border-gray-50">
                <p className="text-xs text-gray-500 italic">{fabric.tips}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-[#32CD32] font-bold text-2xl mb-2">Onde Estamos</h3>
            <h2 className="text-4xl md:text-6xl font-bold text-[#002366] mb-8 tracking-tight">Visite a LavPay</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-blue-50 rounded-2xl text-[#002366]"><MapPin size={28} /></div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900">Endereço</h4>
                  <p className="text-slate-600 text-lg">Rua Décima Avenida, 4272 - Sala 03 - Rio Madeira, Porto Velho - RO, 76821-340</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="p-4 bg-blue-50 rounded-2xl text-[#002366]"><ClockIcon size={28} /></div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900">Horário de Funcionamento</h4>
                  <p className="text-slate-600 text-lg">Todos os dias: 06h às 23h</p>
                  <p className="text-sm text-[#32CD32] font-bold mt-1">Aberto aos Domingos e Feriados!</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 bg-blue-50 rounded-2xl text-[#002366]"><Phone size={28} /></div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900">Telefone / WhatsApp</h4>
                  <p className="text-slate-600 text-lg">(69) 99203-5229</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="navy" className="rounded-xl px-8 py-4 bg-[#002366]" href={WHATSAPP_LINK}>
                Falar no WhatsApp
              </Button>
              <Button variant="outline" className="rounded-xl px-8 py-4 border-[#002366] text-[#002366]" href={GOOGLE_MAPS_DIRECT_LINK} target="_blank">
                Como chegar
              </Button>
              <Button variant="outline" className="rounded-xl px-8 py-4 border-[#002366] text-[#002366]" href={GOOGLE_REVIEWS_LINK}>
                Ver Avaliações
              </Button>
            </div>
          </div>
          
          <div className="h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50 relative group">
            <a 
              href={GOOGLE_MAPS_DIRECT_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full relative overflow-hidden"
            >
              <motion.div 
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              >
                <img 
                  src={LOCATION_IMAGE} 
                  alt="Localização LavPay Porto Velho" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Animated Shine Effect */}
                <motion.div 
                  className="absolute inset-0 z-10"
                  initial={{ x: '-150%', skewX: -25 }}
                  animate={{ x: '250%', skewX: -25 }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3, 
                    ease: "easeInOut",
                    repeatDelay: 2
                  }}
                  style={{
                    background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)'
                  }}
                />

                {/* Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                
                {/* Hover Label */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                  <div className="bg-white/90 backdrop-blur-sm text-[#002366] px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <MapPin size={20} />
                    Abrir no Google Maps
                  </div>
                </div>
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const PortoVelhoHistory = () => {
  return (
    <section id="history" className="py-24 bg-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-lavpay-green/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/cgi/WhatsApp%20Image%202026-03-20%20at%2010.51.20%20AM%20(1).jpeg" 
                alt="História de Porto Velho" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lavpay-blue/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80">Tradição & Modernidade</p>
                <h3 className="text-3xl font-bold font-heading">Porto Velho: Do Rio Madeira ao Autoatendimento</h3>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavpay-blue/5 text-lavpay-blue text-sm font-bold uppercase tracking-wider w-fit">
              Nossa História em PVH
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 leading-tight">
              A Evolução de Lavar Roupa em <span className="text-lavpay-blue">Porto Velho</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Desde os tempos mais remotos, a lavagem de roupas foi uma atividade essencial na vida das comunidades. Em Porto Velho, Rondônia, essa prática encontra um novo protagonismo com a <span className="font-bold text-lavpay-blue">Lavanderia LAVPAY</span>.
              </p>
              <p>
                Localizada na capital, a <span className="font-bold text-lavpay-blue">LAVPAY</span> combina a tradição das lavagens cuidadosas com a modernidade dos serviços automatizados. Inspirada pela proximidade do Rio Madeira, que foi palco das lavagens tradicionais, a <span className="font-bold text-lavpay-blue">LAVPAY</span> se destaca hoje como uma referência na cidade, oferecendo agilidade, praticidade e um cuidado especial com cada peça.
              </p>
              <p>
                Assim, a <span className="font-bold text-lavpay-blue">LAVPAY</span> não é apenas um serviço, mas um elo entre o passado, representado pelo Rio Madeira, e o futuro do cuidado com as roupas na capital rondoniense.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <h4 className="text-3xl font-bold text-lavpay-blue mb-1">100%</h4>
                <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Portovelhense</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <h4 className="text-3xl font-bold text-lavpay-green mb-1">60 min</h4>
                <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Lave e Seque</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-lavpay-blue text-white pt-20 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
        <div className="max-w-xs mx-auto md:mx-0">
          <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
            <img 
              src={LOGO_IMAGE} 
              alt={BRAND_NAME}
              className="w-32 h-32 rounded-full object-cover shadow-sm"
              referrerPolicy="no-referrer"
            />
            <h2 className="text-4xl font-bold font-heading text-white">{BRAND_NAME}</h2>
          </div>
          <p className="text-slate-300">A lavanderia que facilita sua rotina em Porto Velho. Tecnologia e cuidado para suas roupas.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold font-heading text-lavpay-green">Navegação</h4>
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}><a href={item.href} className="text-slate-300 hover:text-lavpay-green transition-colors">{item.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold font-heading text-lavpay-green">Contato</h4>
          <ul className="space-y-2 text-slate-300">
            <li>Rua Décima Avenida, 4272 - Sala 03</li>
            <li>Rio Madeira, Porto Velho - RO</li>
            <li>(69) 99203-5229</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold font-heading text-lavpay-green">Redes Sociais</h4>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-lavpay-green hover:text-lavpay-blue transition-all"><InstagramIcon size={20} /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-10 border-t border-white/10 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} {BRAND_NAME} Lavanderia Autoatendimento. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

const WhatsAppWidget = () => {
  return (
    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl">
      <MessageCircle size={32} />
    </a>
  );
};

export default function App() {
  return (
    <div className="antialiased overflow-x-hidden font-body selection:bg-lavpay-blue selection:text-white">
      <Header />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <Fabrics />
      <Plans />
      <Differentials />
      <Instagram />
      <Testimonials />
      <FAQ />
      <Contact />
      <PortoVelhoHistory />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
