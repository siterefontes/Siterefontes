import { useEffect, useState } from 'react';
import { Instagram, Facebook, MapPin, ArrowUpRight, ArrowRight, ArrowUp, Menu, X, Star, Clock3, Heart, Sparkles, ChevronDown, MoveUpRight, Scissors, MessageCircle, CalendarDays } from 'lucide-react';

type Lang = 'en' | 'pt' | 'es';

const BOOK = 'https://www.treatwell.ie/place/studio-re-fontes-1/';
const IG = 'https://www.instagram.com/studio_refontes/';
const FB = 'https://www.facebook.com/profile.php?id=100066356987518';
const GOOGLE_REVIEWS = 'https://share.google/IRrDCemIIhv52Tu1t';
const MAP = 'https://www.google.com/maps/search/?api=1&query=Studio+Re+Fontes+4+Dolphins+Barn+Dublin+8';
const MAP_EMBED = 'https://www.google.com/maps?q=Studio%20Re%20Fontes%2C%204%20Dolphin%27s%20Barn%2C%20Dublin%208%2C%20Ireland&output=embed';
const SALON_IMAGE = 'https://cdn1.treatwell.net/images/view/v2.i8781562.w1080.h720.xAE5912E4/';
const MAGAZINE = 'https://fliphtml5.com/vitrinemagazine/VM-Oct-2025/';

const translations = {
  en: {
    announce: 'BRAZILIAN HAIR & BEAUTY SALON', location: 'DUBLIN 8, IRELAND',
    navAbout: 'The studio', navFounder: 'Meet Re', navServices: 'Services', navGallery: 'Instagram', navReviews: 'Reviews', navVisit: 'Visit us',
    navHome: 'Home', navDesktopAbout: 'About', navLocationHours: 'Location & Hours', navContact: 'Contact', heroServices: 'Services', heroBook: 'Book Now', heroGoogle: 'Review on Google', floatingTitle: 'QUICK ACCESS', floatingWhatsApp: 'WhatsApp', floatingBook: 'Book an appointment', floatingTop: 'Back to top',
    book: 'BOOK NOW', closeMenu: 'Close navigation', openMenu: 'Open navigation', langLabel: 'Website language',
    heroEyebrow: 'YOUR BEAUTY, OUR PASSION', heroA: 'Feel beautiful.', heroB: 'Be yourself.',
    heroText: 'Brazilian warmth, beautiful results. Expert hair, beauty and self-care in the heart of Dublin 8.',
    appointment: 'BOOK YOUR APPOINTMENT', explore: 'EXPLORE SERVICES', reviewsOn: 'reviews on Treatwell',
    photoCaption: 'YOUR LITTLE BEAUTY ESCAPE', ticker: 'HAIR & COLOUR ✳ NAILS ✳ BROWS & LASHES ✳ SKIN & FACIALS ✳ SELF-CARE ✳ DUBLIN 8 ✳',
    introEyebrow: 'WELCOME TO STUDIO RE FONTES', introA: 'More than a salon.', introB: 'A moment for you.',
    introText: "Step inside Studio Re Fontes, a Brazilian hair and beauty salon in Dolphin's Barn, Dublin. From colour transformations to nails, lashes and relaxing treatments, everyone deserves to feel welcome and beautiful.",
    introLink: 'DISCOVER OUR STORY',
    founderEyebrow: 'THE WOMAN BEHIND THE STUDIO', founderA: 'A little about', founderB: 'Re Fontes.',
    founderTag: 'BRAZILIAN ROOTS · DUBLIN HEART',
    founderText1: 'Re brought her passion for beauty from Brazil to Ireland more than two decades ago. Having already worked in the industry in Brazil, she continued developing her craft in Ireland and built a loyal community through care, skill and dedication.',
    founderText2: "Today, Studio Re Fontes reflects her journey: a welcoming, multicultural space where the team celebrates individuality and helps clients feel confident in their own beauty.",
    founderLink: 'READ HER FEATURE IN VITRINE',
    servicesEyebrow: 'TREAT YOURSELF', servicesA: 'Beauty in', servicesB: 'every detail.', servicesIntro: 'Your favourite treatments, under one roof.',
    serviceNames: ['Hair & Colour', 'Nails', 'Brows & Lashes', 'Facials & Skin', 'Massage & Body', 'Waxing & Beauty'],
    serviceDetails: ['Highlights · Colour · Haircuts · Blow dry', 'Manicure · Pedicure · Shellac · Nail treatments', 'Brow lamination · Lash lift · Extensions', 'Facials · Exfoliation · Skin treatments', 'Relaxing massage · Body treatments', 'Waxing · Make-up · Beauty treatments'],
    treatments: 'TREATMENTS', servicesFoot: 'Find the full treatment menu and current availability on Treatwell.', servicesLink: 'VIEW ALL SERVICES',
    statementA: 'Good hair. Fresh nails. A little glow.', statementB: 'A whole lot of confidence.', statementTag: 'THE STUDIO RE FONTES EXPERIENCE',
    reviewsEyebrow: 'WORDS FROM OUR CLIENTS', reviewsA: 'Kind words,', reviewsB: 'real experiences.', reviewsIntro: 'Feedback from verified bookings on Treatwell.',
    reviewsBadge: 'Treatwell reviews', verified: 'Verified review · Treatwell', googleLink: 'SEE REVIEWS ON GOOGLE', treatwellLink: 'READ TREATWELL REVIEWS',
    reviewsNote: 'The rating shown is from Treatwell, not Google. Review texts remain in their original language.',
    galleryEyebrow: 'A LOOK INSIDE OUR WORLD', galleryA: 'Beauty, moments', galleryB: '& inspiration.',
    galleryIntro: 'Follow our official Instagram for our latest transformations, hair inspiration, nails and studio moments.',
    galleryStudio: 'Inside Studio Re Fontes', galleryHair: 'Hair transformations', galleryNails: 'Nails & finishing touches', galleryMoments: 'Behind the scenes',
    galleryFollow: 'VIEW OUR INSTAGRAM', galleryNote: 'See current photos and posts on our official Instagram profile.',
    visitEyebrow: 'FIND YOUR WAY TO US', visitA: 'Come on in.', visitB: "We'd love to see you.", studio: 'OUR STUDIO', directions: 'GET DIRECTIONS',
    opening: 'OPENING HOURS', days: ['Monday', 'Tuesday – Friday', 'Saturday', 'Sunday'], visitBubble: 'SEE YOU SOON', visitBook: 'MAKE AN APPOINTMENT',
    socialEyebrow: "LET'S STAY CONNECTED", socialA: 'Follow the', socialB: 'beauty.', socialText: 'New looks, inspiration and updates from our studio.', footerServices: 'Services', footerFounder: 'Meet Re', footerBook: 'Book', copyright: 'All rights reserved.',
  },
  pt: {
    announce: 'SALÃO BRASILEIRO DE BELEZA', location: 'DUBLIN 8, IRLANDA',
    navAbout: 'O estúdio', navFounder: 'Sobre mim', navServices: 'Serviços', navGallery: 'Instagram', navReviews: 'Avaliações', navVisit: 'Onde estamos',
    navHome: 'Início', navDesktopAbout: 'Sobre', navLocationHours: 'Localização e horários', navContact: 'Contato', heroServices: 'Serviços', heroBook: 'Agendar', heroGoogle: 'Avaliar no Google', floatingTitle: 'ACESSO RÁPIDO', floatingWhatsApp: 'WhatsApp', floatingBook: 'Agenda', floatingTop: 'Subir ao topo',
    book: 'AGENDAR', closeMenu: 'Fechar menu', openMenu: 'Abrir menu', langLabel: 'Idioma do site',
    heroEyebrow: 'SUA BELEZA, NOSSA PAIXÃO', heroA: 'Sinta-se linda.', heroB: 'Seja você.',
    heroText: 'O carinho brasileiro e resultados incríveis. Cabelo, beleza e autocuidado no coração de Dublin 8.',
    appointment: 'AGENDAR HORÁRIO', explore: 'CONHEÇA OS SERVIÇOS', reviewsOn: 'avaliações no Treatwell',
    photoCaption: 'SEU MOMENTO DE BELEZA', ticker: 'CABELOS ✳ UNHAS ✳ SOBRANCELHAS E CÍLIOS ✳ CUIDADOS FACIAIS ✳ AUTOCUIDADO ✳ DUBLIN 8 ✳',
    introEyebrow: 'BEM-VINDA AO STUDIO RE FONTES', introA: 'Mais que um salão.', introB: 'Um momento seu.',
    introText: 'Conheça o Studio Re Fontes, um salão brasileiro em Dolphin’s Barn, Dublin. De transformações no cabelo a unhas, cílios e tratamentos relaxantes, queremos que cada pessoa se sinta acolhida e bonita.',
    introLink: 'CONHEÇA NOSSA HISTÓRIA',
    founderEyebrow: 'QUEM ESTÁ POR TRÁS DO ESTÚDIO', founderA: 'Um pouco sobre', founderB: 'Re Fontes.',
    founderTag: 'RAÍZES BRASILEIRAS · CORAÇÃO EM DUBLIN',
    founderText1: 'Re levou do Brasil para a Irlanda sua paixão pela beleza há mais de duas décadas. Com experiência no setor ainda no Brasil, continuou se aperfeiçoando na Irlanda e conquistou uma comunidade de clientes com dedicação, técnica e carinho.',
    founderText2: 'Hoje, o Studio Re Fontes reflete essa trajetória: um espaço acolhedor e multicultural, onde a equipe valoriza a individualidade e ajuda cada cliente a se sentir confiante.',
    founderLink: 'LEIA A ENTREVISTA NA VITRINE',
    servicesEyebrow: 'UM MOMENTO PARA VOCÊ', servicesA: 'Beleza em', servicesB: 'cada detalhe.', servicesIntro: 'Seus tratamentos favoritos em um só lugar.',
    serviceNames: ['Cabelos e Coloração', 'Unhas', 'Sobrancelhas e Cílios', 'Estética Facial', 'Massagem e Corpo', 'Depilação e Beleza'],
    serviceDetails: ['Luzes · Coloração · Corte · Escova', 'Manicure · Pedicure · Shellac · Tratamentos', 'Laminação · Lash lifting · Extensões', 'Limpeza facial · Esfoliação · Tratamentos', 'Massagens relaxantes · Cuidados corporais', 'Depilação · Maquiagem · Cuidados de beleza'],
    treatments: 'TRATAMENTOS', servicesFoot: 'Veja o cardápio completo e os horários disponíveis no Treatwell.', servicesLink: 'VER TODOS OS SERVIÇOS',
    statementA: 'Cabelo lindo. Unhas feitas. Pele radiante.', statementB: 'Muito mais confiança.', statementTag: 'A EXPERIÊNCIA STUDIO RE FONTES',
    reviewsEyebrow: 'PALAVRAS DE NOSSAS CLIENTES', reviewsA: 'Palavras sinceras,', reviewsB: 'experiências reais.', reviewsIntro: 'Avaliações de agendamentos verificados no Treatwell.',
    reviewsBadge: 'avaliações no Treatwell', verified: 'Avaliação verificada · Treatwell', googleLink: 'VER AVALIAÇÕES NO GOOGLE', treatwellLink: 'LER AVALIAÇÕES NO TREATWELL',
    reviewsNote: 'A nota exibida é do Treatwell, não do Google. Os depoimentos foram mantidos no idioma original.',
    galleryEyebrow: 'UM POUCO DO NOSSO UNIVERSO', galleryA: 'Beleza, momentos', galleryB: 'e inspiração.',
    galleryIntro: 'Acompanhe nosso Instagram oficial para ver transformações, inspirações de cabelo, unhas e os bastidores do salão.',
    galleryStudio: 'Conheça o Studio Re Fontes', galleryHair: 'Transformações capilares', galleryNails: 'Unhas e detalhes', galleryMoments: 'Bastidores do estúdio',
    galleryFollow: 'VER NOSSO INSTAGRAM', galleryNote: 'Veja fotos e publicações recentes diretamente no nosso perfil oficial.',
    visitEyebrow: 'SAIBA COMO CHEGAR', visitA: 'Pode entrar.', visitB: 'Vamos adorar te ver.', studio: 'NOSSO ESTÚDIO', directions: 'COMO CHEGAR',
    opening: 'HORÁRIO DE FUNCIONAMENTO', days: ['Segunda-feira', 'Terça a sexta', 'Sábado', 'Domingo'], visitBubble: 'ATÉ BREVE', visitBook: 'AGENDAR ATENDIMENTO',
    socialEyebrow: 'VAMOS NOS CONECTAR', socialA: 'Siga nossa', socialB: 'beleza.', socialText: 'Novidades, inspiração e momentos do nosso estúdio.', footerServices: 'Serviços', footerFounder: 'Sobre mim', footerBook: 'Agendar', copyright: 'Todos os direitos reservados.',
  },
  es: {
    announce: 'SALÓN BRASILEÑO DE BELLEZA', location: 'DUBLÍN 8, IRLANDA',
    navAbout: 'El estudio', navFounder: 'Sobre mí', navServices: 'Servicios', navGallery: 'Instagram', navReviews: 'Reseñas', navVisit: 'Visítanos',
    navHome: 'Inicio', navDesktopAbout: 'Sobre nosotros', navLocationHours: 'Ubicación y horarios', navContact: 'Contacto', heroServices: 'Servicios', heroBook: 'Reservar', heroGoogle: 'Opinar en Google', floatingTitle: 'ACCESO RÁPIDO', floatingWhatsApp: 'WhatsApp', floatingBook: 'Reservar cita', floatingTop: 'Volver arriba',
    book: 'RESERVAR', closeMenu: 'Cerrar menú', openMenu: 'Abrir menú', langLabel: 'Idioma del sitio',
    heroEyebrow: 'TU BELLEZA, NUESTRA PASIÓN', heroA: 'Siéntete hermosa.', heroB: 'Sé tú misma.',
    heroText: 'Calidez brasileña y resultados increíbles. Cabello, belleza y bienestar en el corazón de Dublín 8.',
    appointment: 'RESERVAR CITA', explore: 'VER SERVICIOS', reviewsOn: 'reseñas en Treatwell',
    photoCaption: 'TU ESCAPADA DE BELLEZA', ticker: 'CABELLO ✳ UÑAS ✳ CEJAS Y PESTAÑAS ✳ FACIALES ✳ BIENESTAR ✳ DUBLÍN 8 ✳',
    introEyebrow: 'BIENVENIDA A STUDIO RE FONTES', introA: 'Más que un salón.', introB: 'Un momento para ti.',
    introText: 'Conoce Studio Re Fontes, un salón brasileño en Dolphin’s Barn, Dublín. Desde cambios de color hasta uñas, pestañas y tratamientos relajantes, queremos que cada persona se sienta bienvenida y hermosa.',
    introLink: 'DESCUBRE NUESTRA HISTORIA',
    founderEyebrow: 'LA MUJER DETRÁS DEL ESTUDIO', founderA: 'Conoce a', founderB: 'Re Fontes.',
    founderTag: 'RAÍCES BRASILEÑAS · CORAZÓN EN DUBLÍN',
    founderText1: 'Re llevó su pasión por la belleza de Brasil a Irlanda hace más de dos décadas. Con experiencia previa en Brasil, continuó formándose en Irlanda y creó una comunidad fiel gracias a su dedicación y atención.',
    founderText2: 'Hoy Studio Re Fontes refleja ese camino: un espacio cálido y multicultural donde el equipo celebra la individualidad y ayuda a cada cliente a sentirse segura.',
    founderLink: 'LEE SU ENTREVISTA EN VITRINE',
    servicesEyebrow: 'UN MOMENTO PARA TI', servicesA: 'Belleza en', servicesB: 'cada detalle.', servicesIntro: 'Tus tratamientos favoritos en un solo lugar.',
    serviceNames: ['Cabello y Color', 'Uñas', 'Cejas y Pestañas', 'Faciales y Piel', 'Masajes y Cuerpo', 'Depilación y Belleza'],
    serviceDetails: ['Mechas · Color · Cortes · Peinado', 'Manicura · Pedicura · Shellac · Tratamientos', 'Laminado · Lifting · Extensiones', 'Faciales · Exfoliación · Cuidado de la piel', 'Masajes relajantes · Tratamientos corporales', 'Depilación · Maquillaje · Cuidado personal'],
    treatments: 'TRATAMIENTOS', servicesFoot: 'Consulta los tratamientos y horarios en Treatwell.', servicesLink: 'VER TODOS LOS SERVICIOS',
    statementA: 'Cabello precioso. Uñas perfectas. Un poco de brillo.', statementB: 'Mucha más confianza.', statementTag: 'LA EXPERIENCIA STUDIO RE FONTES',
    reviewsEyebrow: 'OPINIONES DE NUESTRAS CLIENTAS', reviewsA: 'Palabras sinceras,', reviewsB: 'experiencias reales.', reviewsIntro: 'Opiniones de reservas verificadas en Treatwell.',
    reviewsBadge: 'reseñas en Treatwell', verified: 'Reseña verificada · Treatwell', googleLink: 'VER RESEÑAS EN GOOGLE', treatwellLink: 'LEER RESEÑAS EN TREATWELL',
    reviewsNote: 'La puntuación mostrada es de Treatwell, no de Google. Las opiniones conservan su idioma original.',
    galleryEyebrow: 'UN POCO DE NUESTRO MUNDO', galleryA: 'Belleza, momentos', galleryB: 'e inspiración.',
    galleryIntro: 'Sigue nuestro Instagram oficial para ver cambios de imagen, ideas de cabello, uñas y momentos del salón.',
    galleryStudio: 'Dentro de Studio Re Fontes', galleryHair: 'Transformaciones capilares', galleryNails: 'Uñas y detalles', galleryMoments: 'Entre bastidores',
    galleryFollow: 'VER NUESTRO INSTAGRAM', galleryNote: 'Descubre las fotos y publicaciones actuales en nuestro perfil oficial.',
    visitEyebrow: 'ENCUÉNTRANOS', visitA: 'Ven a visitarnos.', visitB: 'Te esperamos.', studio: 'NUESTRO ESTUDIO', directions: 'CÓMO LLEGAR',
    opening: 'HORARIO DE APERTURA', days: ['Lunes', 'Martes a viernes', 'Sábado', 'Domingo'], visitBubble: 'HASTA PRONTO', visitBook: 'RESERVAR CITA',
    socialEyebrow: 'SIGAMOS EN CONTACTO', socialA: 'Sigue la', socialB: 'belleza.', socialText: 'Nuevos estilos, inspiración y novedades de nuestro estudio.', footerServices: 'Servicios', footerFounder: 'Sobre mí', footerBook: 'Reservar', copyright: 'Todos los derechos reservados.',
  },
};
const types = ['hair', 'nails', 'brows', 'facial', 'massage', 'waxing'] as const;
const reviewQuotes = [
  { quote: 'A really brilliant lymphatic drainage massage', name: 'Holly' },
  { quote: 'I always have a lovely relaxed time', name: 'Valerie' },
  { quote: 'Really happy with my brow results!', name: 'Robyn' },
];
const times = ['09:30 – 17:30', '09:30 – 18:00', '09:00 – 18:00', '11:00 – 16:00'];

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [menu, setMenu] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);\n  const [galleryFilter, setGalleryFilter] = useState('all');
  const t = translations[lang];
  const whatsappMessage = lang === 'pt' ? 'Olá! Gostaria de saber mais sobre os serviços do Studio Re Fontes.' : lang === 'es' ? '¡Hola! Me gustaría saber más sobre los servicios de Studio Re Fontes.' : 'Hello! I would like to know more about Studio Re Fontes services.';
  const whatsappLink = 'https://wa.me/353894787308?text=' + encodeURIComponent(whatsappMessage);

  useEffect(() => {
    const saved = window.localStorage.getItem('sr-fontes-lang');
    if (saved === 'en' || saved === 'pt' || saved === 'es') setLang(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es' : 'en-IE';
    window.localStorage.setItem('sr-fontes-lang', lang);
  }, [lang]);
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = menu ? 'hidden' : original;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = original; window.removeEventListener('keydown', onKey); };
  }, [menu]);
  useEffect(() => {
    document.documentElement.classList.add('motion-ready');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -28px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateScrollButton = () => setShowBackToTop(window.scrollY > 280);
    updateScrollButton();
    window.addEventListener('scroll', updateScrollButton, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollButton);
  }, []);

  const close = () => setMenu(false);
  const desktopLinks = [
    { id: 'home', text: t.navHome },
    { id: 'founder', text: t.navDesktopAbout },
    { id: 'services', text: t.navServices },
    { id: 'visit', text: t.navLocationHours },
    { id: 'contact', text: t.navContact },
  ];
  const menuLinks = [
    { id: 'about', text: t.navAbout },
    { id: 'founder', text: t.navFounder },
    { id: 'services', text: t.navServices },
    { id: 'gallery', text: t.navGallery },
    { id: 'reviews', text: t.navReviews },
    { id: 'visit', text: t.navVisit },
  ];

  return <>
    <div className="announcement">{t.announce} <span>✦</span> {t.location}</div>
    <header className="nav">
      <a className="brand" href="#home" onClick={close}><span>STUDIO</span><strong>ReFontes</strong><small>HAIR & BEAUTY</small></a>
      <nav className="desktop-navigation" aria-label="Main navigation">
        {desktopLinks.map(item => <a href={'#'+item.id} key={item.id}>{item.text}</a>)}
      </nav>
      <div className="nav-controls">
        <label className="language-control" aria-label={t.langLabel}>
          <span className="lang-indicator">{lang.toUpperCase()}</span>
          <select aria-label={t.langLabel} value={lang} onChange={e => setLang(e.target.value as Lang)}>
            <option value="en">English</option><option value="pt">Português</option><option value="es">Español</option>
          </select><ChevronDown size={15}/>
        </label>
        <a className="nav-book" href={BOOK} target="_blank" rel="noreferrer">{t.book} <ArrowUpRight size={17}/></a>
        <button type="button" className="menu-toggle" aria-label={menu ? t.closeMenu : t.openMenu} aria-expanded={menu} aria-controls="site-navigation" onClick={() => setMenu(!menu)}>{menu ? <X size={25}/> : <Menu size={25}/>}</button>
      </div>
    </header>
    {menu && <button className="menu-backdrop" type="button" aria-label={t.closeMenu} onClick={close}/>}
    <nav id="site-navigation" className={'nav-links '+(menu ? 'active' : '')} aria-label="Main navigation" aria-hidden={!menu}>
      <span className="menu-kicker">STUDIO RE FONTES · DUBLIN 8</span>
      {menuLinks.map((item,i) => <a tabIndex={menu?0:-1} style={{animationDelay: (i*60)+'ms'}} href={'#'+item.id} key={item.id} onClick={close}><span>0{i+1}</span>{item.text}<ArrowUpRight size={20}/></a>)}
      <a href={IG} tabIndex={menu?0:-1} target="_blank" rel="noreferrer" onClick={close}><span>07</span>Instagram<Instagram size={20}/></a>
      <a className="menu-book" href={BOOK} tabIndex={menu?0:-1} target="_blank" rel="noreferrer" onClick={close}>{t.appointment}<ArrowUpRight size={18}/></a>
    </nav>

    <main id="home">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="line"/>{t.heroEyebrow}</div>
          <h1>{t.heroA}<br/><em>{t.heroB}</em></h1>
          <p>{t.heroText}</p>
          <div className="hero-actions" aria-label="Quick actions">
            <a className="hero-link hero-link-outline" href="#services"><Scissors size={16}/>{t.heroServices}</a>
            <a className="hero-link hero-link-primary" href={BOOK} target="_blank" rel="noreferrer">{t.heroBook}<ArrowUpRight size={17}/></a>
            <a className="hero-link hero-link-google" href={GOOGLE_REVIEWS} target="_blank" rel="noreferrer"><Star size={16}/>{t.heroGoogle}</a>
          </div>
          <div className="rating"><div className="stars" aria-label="5 stars">★★★★★</div><strong>4.9 / 5</strong><span>2,500+ {t.reviewsOn}</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo" role="img" aria-label="Studio Re Fontes exterior photo"/>
          <div className="vertical-note">DUBLIN • BEAUTY • CONFIDENCE</div>
          <div className="photo-tag">{t.photoCaption}<Sparkles size={17}/></div>
          <span className="hero-outline" aria-hidden="true">R</span>
        </div>
      </section>
      <div className="ticker" aria-hidden="true"><div>{t.ticker} {t.ticker} {t.ticker}</div></div>

      <section className="intro section reveal" id="about">
        <div className="intro-left"><div className="eyebrow"><span className="line"/>{t.introEyebrow}</div><h2>{t.introA}<br/><em>{t.introB}</em></h2></div>
        <div className="intro-right reveal"><p>{t.introText}</p><a href="#founder" className="under-link">{t.introLink}<ArrowUpRight size={17}/></a></div>
      </section>

      <section className="founder-section section" id="founder">
        <div className="founder-visual reveal"><div className="founder-image" role="img" aria-label="Studio Re Fontes salon"/><div className="founder-monogram">Re.</div><div className="founder-label">STUDIO RE FONTES <span>✦</span> DUBLIN</div></div>
        <div className="founder-copy reveal">
          <div className="eyebrow"><span className="line"/>{t.founderEyebrow}</div>
          <h2>{t.founderA}<br/><em>{t.founderB}</em></h2>
          <span className="founder-tag"><Sparkles size={15}/>{t.founderTag}</span>
          <p>{t.founderText1}</p><p>{t.founderText2}</p>
          <a className="under-link" href={MAGAZINE} target="_blank" rel="noreferrer">{t.founderLink}<ArrowUpRight size={17}/></a>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-top reveal"><div><div className="eyebrow"><span className="line"/>{t.servicesEyebrow}</div><h2>{t.servicesA} <em>{t.servicesB}</em></h2></div><p>{t.servicesIntro}</p></div>
        <div className="service-grid">{types.map((kind,i) => <a href={BOOK} target="_blank" rel="noreferrer" className={'service-card reveal '+kind} key={kind} style={{transitionDelay:(i%3*65)+'ms'}}>
          <span className="service-num">0{i+1} / {t.treatments}</span>
          <div className="service-card-bottom"><div><h3>{t.serviceNames[i]}</h3><p>{t.serviceDetails[i]}</p></div><span className="circle-arrow"><ArrowUpRight size={22}/></span></div>
        </a>)}</div>
        <div className="service-foot reveal"><span>{t.servicesFoot}</span><a href={BOOK} target="_blank" rel="noreferrer" className="button button-dark">{t.servicesLink}<ArrowUpRight size={17}/></a></div>
      </section>

      <section className="statement"><Sparkles className="reveal" size={27}/><p className="reveal">{t.statementA}<br/><em>{t.statementB}</em></p><span className="reveal">{t.statementTag}</span></section>

      <section className="studio-gallery section" id="gallery">
        <div className="section-top reveal"><div><div className="eyebrow"><span className="line"/>{t.galleryEyebrow}</div><h2>{t.galleryA} <em>{t.galleryB}</em></h2></div><p>{t.galleryIntro}</p></div>
        <div className="gallery-filter reveal" role="group" aria-label={lang === 'pt' ? 'Filtrar galeria' : lang === 'es' ? 'Filtrar galería' : 'Filter gallery'}>
          {[
            { id: 'all', label: lang === 'pt' ? 'Todos' : lang === 'es' ? 'Todo' : 'All' },
            { id: 'hair', label: lang === 'pt' ? 'Cabelos' : lang === 'es' ? 'Cabello' : 'Hair' },
            { id: 'nails', label: lang === 'pt' ? 'Unhas' : lang === 'es' ? 'Uñas' : 'Nails' },
            { id: 'brows', label: lang === 'pt' ? 'Sobrancelhas e cílios' : lang === 'es' ? 'Cejas y pestañas' : 'Brows & lashes' },
            { id: 'skin', label: lang === 'pt' ? 'Estética facial' : lang === 'es' ? 'Faciales' : 'Facials' },
            { id: 'body', label: lang === 'pt' ? 'Corpo e beleza' : lang === 'es' ? 'Cuerpo y belleza' : 'Body & beauty' },
          ].map(filter => <button type="button" key={filter.id} className={'gallery-filter-button '+(galleryFilter === filter.id ? 'active' : '')} onClick={() => setGalleryFilter(filter.id)} aria-pressed={galleryFilter === filter.id}>{filter.label}</button>)}
        </div>
        <div className="portfolio-grid">
          {[
            { id: 1, category: 'hair', title: lang === 'pt' ? 'Transformação capilar' : lang === 'es' ? 'Transformación capilar' : 'Hair transformation' },
            { id: 2, category: 'nails', title: lang === 'pt' ? 'Unhas impecáveis' : lang === 'es' ? 'Uñas impecables' : 'Beautiful nails' },
            { id: 3, category: 'brows', title: lang === 'pt' ? 'Olhar em destaque' : lang === 'es' ? 'Una mirada especial' : 'Beautiful brows & lashes' },
            { id: 4, category: 'skin', title: lang === 'pt' ? 'Cuidado facial' : lang === 'es' ? 'Cuidado facial' : 'Skin care' },
            { id: 5, category: 'hair', title: lang === 'pt' ? 'Cor e brilho' : lang === 'es' ? 'Color y brillo' : 'Colour & shine' },
            { id: 6, category: 'body', title: lang === 'pt' ? 'Momento de autocuidado' : lang === 'es' ? 'Momento de autocuidado' : 'Self-care moment' },
            { id: 7, category: 'nails', title: lang === 'pt' ? 'Detalhes que encantam' : lang === 'es' ? 'Detalles especiales' : 'Finishing touches' },
            { id: 8, category: 'brows', title: lang === 'pt' ? 'Realce natural' : lang === 'es' ? 'Belleza natural' : 'Natural beauty' },
            { id: 9, category: 'hair', title: lang === 'pt' ? 'Novo visual' : lang === 'es' ? 'Nuevo look' : 'A fresh new look' },
            { id: 10, category: 'skin', title: lang === 'pt' ? 'Pele radiante' : lang === 'es' ? 'Piel radiante' : 'Glowing skin' },
            { id: 11, category: 'body', title: lang === 'pt' ? 'Seu momento' : lang === 'es' ? 'Tu momento' : 'Your moment' },
            { id: 12, category: 'nails', title: lang === 'pt' ? 'Arte nas unhas' : lang === 'es' ? 'Arte en las uñas' : 'Nail art' },
          ].filter(item => galleryFilter === 'all' || item.category === galleryFilter).map(item => <div className={'portfolio-card portfolio-'+item.category+' reveal'} key={item.id}>
            <div className="portfolio-placeholder"><span className="portfolio-number">0{item.id < 10 ? item.id : item.id}</span><span className="portfolio-plus"><span>+</span></span><span className="portfolio-placeholder-copy">{lang === 'pt' ? 'Foto será adicionada aqui' : lang === 'es' ? 'La foto se añadirá aquí' : 'Photo will be added here'}</span></div>
            <div className="portfolio-card-caption"><span>{item.title}</span><span className="portfolio-category">{item.category === 'hair' ? (lang === 'pt' ? 'Cabelos' : lang === 'es' ? 'Cabello' : 'Hair') : item.category === 'nails' ? (lang === 'pt' ? 'Unhas' : lang === 'es' ? 'Uñas' : 'Nails') : item.category === 'brows' ? (lang === 'pt' ? 'Sobrancelhas e cílios' : lang === 'es' ? 'Cejas y pestañas' : 'Brows & lashes') : item.category === 'skin' ? (lang === 'pt' ? 'Estética facial' : lang === 'es' ? 'Faciales' : 'Facials') : (lang === 'pt' ? 'Corpo e beleza' : lang === 'es' ? 'Cuerpo y belleza' : 'Body & beauty')}</span></div>
          </div>)}
        </div>
        <div className="gallery-bottom reveal"><p>{lang === 'pt' ? 'Em breve, fotos reais dos nossos trabalhos.' : lang === 'es' ? 'Próximamente, fotos reales de nuestros trabajos.' : 'Real photos of our work coming soon.'}</p><a className="button button-dark" href={IG} target="_blank" rel="noreferrer"><Instagram size={17}/>{t.galleryFollow}<ArrowUpRight size={18}/></a></div>
      </section>

      <section className="reviews-section section" id="reviews">
        <div className="reviews-heading reveal"><div><div className="eyebrow"><span className="line"/>{t.reviewsEyebrow}</div><h2>{t.reviewsA} <em>{t.reviewsB}</em></h2><p>{t.reviewsIntro}</p></div><div className="review-score"><div className="stars">★★★★★</div><strong>4.9 / 5</strong><span>2,500+ {t.reviewsBadge}</span></div></div>
        <div className="review-grid">{reviewQuotes.map(({quote,name},i) => <article className="review-card reveal" key={name} style={{transitionDelay:i*75+'ms'}}><div className="stars">★★★★★</div><p>“{quote}”</p><div className="review-author">{name}<span>{t.verified}</span></div></article>)}</div>
        <div className="reviews-links reveal"><a className="button button-dark" href={GOOGLE_REVIEWS} target="_blank" rel="noreferrer">{t.googleLink}<ArrowUpRight size={17}/></a><a className="under-link" href={BOOK} target="_blank" rel="noreferrer">{t.treatwellLink}<ArrowUpRight size={17}/></a></div>
        <p className="reviews-note reveal">{t.reviewsNote}</p>
      </section>

      <section className="visit section" id="visit">
        <div className="visit-info reveal"><div className="eyebrow"><span className="line"/>{t.visitEyebrow}</div><h2>{t.visitA}<br/><em>{t.visitB}</em></h2>
          <div className="info-unit"><MapPin size={22}/><div><strong>{t.studio}</strong><p>4 Dolphin's Barn<br/>Dublin 8, Ireland</p><a href={MAP} target="_blank" rel="noreferrer">{t.directions}<ArrowUpRight size={15}/></a></div></div>
          <div className="info-unit"><Clock3 size={22}/><div><strong>{t.opening}</strong>{t.days.map((day,i) => <div className="hour" key={day}><span>{day}</span><span>{times[i]}</span></div>)}</div></div>
          <a className="button button-dark" href={BOOK} target="_blank" rel="noreferrer">{t.visitBook}<ArrowUpRight size={17}/></a>
        </div>
        <div className="visit-panel map-panel reveal"><iframe title="Studio Re Fontes Google Maps" src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><div className="visit-bubble"><span>{t.visitBubble}</span><Heart size={23} fill="currentColor"/></div><a className="location-chip" href={MAP} target="_blank" rel="noreferrer"><MapPin size={18}/> DOLPHIN'S BARN, DUBLIN 8 <ArrowUpRight size={17}/></a></div>
      </section>

      <section className="social" id="contact"><div className="eyebrow reveal">{t.socialEyebrow}</div><h2 className="reveal">{t.socialA} <em>{t.socialB}</em></h2><p className="reveal">{t.socialText}</p><div className="social-actions reveal"><a href={IG} target="_blank" rel="noreferrer"><Instagram size={20}/> @studio_refontes <ArrowUpRight size={18}/></a><a href={FB} target="_blank" rel="noreferrer"><Facebook size={20}/> FACEBOOK <ArrowUpRight size={18}/></a></div></section>
    </main>
    <footer><a className="brand footer-brand" href="#home"><span>STUDIO</span><strong>ReFontes</strong><small>HAIR & BEAUTY</small></a><div>4 Dolphin's Barn, Dublin 8 · Ireland</div><div className="footlinks"><a href="#services">{t.footerServices}</a><a href="#founder">{t.footerFounder}</a><a href={BOOK} target="_blank" rel="noreferrer">{t.footerBook}</a><a href={IG} target="_blank" rel="noreferrer">Instagram</a></div><small>© {new Date().getFullYear()} Studio Re Fontes. {t.copyright}</small></footer>
    <aside className="floating-bubbles" aria-label={t.floatingTitle}>
      <a className="floating-bubble bubble-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label={t.floatingWhatsApp} title={t.floatingWhatsApp}>
        <MessageCircle size={23}/><span className="bubble-tooltip">{t.floatingWhatsApp}</span>
      </a>
      <a className="floating-bubble bubble-book" href={BOOK} target="_blank" rel="noreferrer" aria-label={t.floatingBook} title={t.floatingBook}>
        <CalendarDays size={22}/><span className="bubble-tooltip">{t.floatingBook}</span>
      </a>
      <button type="button" className={`floating-bubble bubble-top ${showBackToTop ? 'bubble-visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })} aria-label={t.floatingTop} title={t.floatingTop} tabIndex={showBackToTop ? 0 : -1} aria-hidden={!showBackToTop}>
        <ArrowUp size={22}/><span className="bubble-tooltip">{t.floatingTop}</span>
      </button>
    </aside>
  </>;
}
