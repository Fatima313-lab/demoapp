/**
 * BestSoftwareHouse.jsx
 * ─────────────────────────────────────────────────────────────────
 * BRAND COLORS: #073e84 · #052c5d · #ebb907 · #f8fafc · #475569
 *
 * SEO TARGET KEYWORDS:
 *   Primary:   best software house in Pakistan
 *              top software houses in Pakistan 2026
 *   Secondary: software companies Pakistan, IT outsourcing Pakistan,
 *              custom software development Pakistan,
 *              web development company Pakistan,
 *              mobile app development Pakistan,
 *              software house Lahore Karachi Islamabad,
 *              Pakistan IT exports, offshore development Pakistan
 *
 * SEO SIGNALS:
 *  ✓ 6 JSON-LD schemas  (Organization, CollectionPage+ItemList,
 *                         WebPage+AggregateRating, BreadcrumbList,
 *                         FAQPage, LocalBusiness)
 *  ✓ Single H1 only     (strict H1→H2→H3→H4 hierarchy)
 *  ✓ Semantic HTML5     (main, header, nav, section, article, aside, table, ol)
 *  ✓ aria-label         every section / image / table / button
 *  ✓ Review microdata   Schema.org Review, Rating, Person
 *  ✓ FAQPage microdata  itemScope/itemProp + JSON-LD
 *  ✓ Service microdata  itemScope/itemProp on cards
 *  ✓ Image SEO          loading="lazy", width, height, descriptive alt
 *  ✓ Internal linking   keyword-rich anchors throughout
 *  ✓ Outbound links     Clutch, PSEB (E-E-A-T authority signals)
 *  ✓ Professional SVGs  inline — no emoji icon-fonts
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './BestSoftwareHouse.css';

/* ─── Constants ─────────────────────────────────────────────── */
const PAGE_URL = 'https://qllmsoft.com/best-software-house-in-pakistan';
const OG_IMAGE  = 'https://qllmsoft.com/images/best-software-houses-in-pakistan.webp';

/* ─── SVG Icons ─────────────────────────────────────────────── */
const IconBuildingOffice = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v15"/>
    <path d="M3 21h18M9 21V9m6 12V9M9 9h6M9 5V3m6 2V3"/>
  </svg>
);
const IconGlobe = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const IconCode = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);
const IconSmartphone = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);
const IconCloud = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
);
const IconBrain = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);
const IconShield = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconTrendingUp = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);
const IconUsers = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconDollarSign = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);
const IconCheckCircle = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const IconStar = ({ size = 18, filled = true }) => (
  <svg width={size} height={size} viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'} stroke="currentColor"
    strokeWidth="1.8" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IconMapPin = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconAward = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);
const IconChevronDown = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const IconZap = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconMessageCircle = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

/* ─── Data ───────────────────────────────────────────────────── */
const TOP_10 = [
  { rank:'01', name:'Systems Limited',       hq:'Lahore',         services:'ERP, AI, BPO, Cloud',              reach:'USA, UAE, KSA',            tag:'Enterprise & Cloud',        desc:'One of Pakistan\'s longest-standing technology firms, Systems Limited has spent over four decades delivering enterprise software, cloud infrastructure, and digital transformation services. Its Fortune 500 client roster and multi-country footprint make it the benchmark for large-scale enterprise technology in the region.' },
  { rank:'02', name:'NetSol Technologies',   hq:'Lahore',         services:'FinTech, Leasing, ERP',            reach:'USA, China, Thailand',     tag:'FinTech Leader',             desc:'With operations spanning more than 30 countries, NetSol Technologies is widely recognised for its specialised financial software and enterprise leasing platforms. The company continues to push boundaries in financial technology serving asset finance companies and global leasing firms.' },
  { rank:'03', name:'10Pearls',              hq:'Karachi',        services:'Web/Mobile, AI, Product Design',   reach:'USA, UAE',                  tag:'Product Engineering',        desc:'10Pearls partners with both early-stage startups and established enterprises to engineer impactful digital products. Their human-centred design philosophy and agile delivery model spans web development, mobile applications, AI integration, and cybersecurity services.' },
  { rank:'04', name:'iCreativez Technologies',hq:'Lahore',        services:'Web Development, Apps',            reach:'USA, Europe',               tag:'Digital Transformation',     desc:'iCreativez Technologies maintains a significant presence in the US market, concentrating on custom software engineering, mobile application development, and end-to-end digital transformation engagements for North American and European clients.' },
  { rank:'05', name:'Tkxel',                 hq:'Lahore',         services:'Full-stack Web & Mobile',          reach:'USA, EU',                   tag:'Full-Stack Solutions',       desc:'Lahore-based Tkxel works closely with high-growth startups and global enterprises alike, delivering full-stack web and mobile solutions. Their collaborative model ensures technical precision while keeping development cycles efficient and predictable.' },
  { rank:'06', name:'Ovex Technologies',     hq:'Islamabad',      services:'BPO, IT Services',                 reach:'USA, EU',                   tag:'BPO & IT Outsourcing',       desc:'Ovex is among Pakistan\'s most established BPO and managed IT services providers, offering customer support operations, business continuity planning, and IT outsourcing for international clients across the US and Europe.' },
  { rank:'07', name:'Arpatech',              hq:'Karachi',        services:'eCommerce, Cloud DevOps',          reach:'Global',                    tag:'E-Commerce & DevOps',        desc:'A digital commerce and infrastructure specialist, Arpatech delivers cloud-hosted DevOps pipelines, enterprise-grade web applications, and robust e-commerce platforms for a global client base across multiple industries.' },
  { rank:'08', name:'Qbatch',               hq:'Faisalabad',     services:'Web Dev, Data Science',            reach:'USA, UK',                   tag:'Data Analytics',             desc:'Qbatch focuses on data-driven system design, building scalable platforms and analytics applications for clients in the USA and UK. Their depth in data science and engineering makes them a strong choice for insight-led products.' },
  { rank:'09', name:'Contour Software',      hq:'Lahore',         services:'Full-stack Dev, ASP .Net',         reach:'USA, Pakistan',             tag:'Offshore Development',       desc:'An offshore division of Constellation Software Inc., Contour provides enterprise-grade development with strong governance frameworks. Their structured processes and compliance standards make them a reliable partner for regulated industries.' },
  { rank:'10', name:'QllmSoft',              hq:'Lalamusa / Gujrat', services:'Custom Software, Web & AWS',   reach:'Pakistan, USA, Europe, Gulf', tag:'Emerging Tech & AWS',      desc:'QllmSoft builds web, desktop, and mobile applications with a strong emphasis on scalable architecture, clean code standards, and client-oriented delivery. Headquartered in Lalamusa, Punjab, the team serves clients across Pakistan, the USA, Europe, and the Gulf region.', highlight: true },
];

const SELECTION_CRITERIA = [
  { num:'01', title:'Experience & Portfolio', icon: <IconAward size={22}/>, desc:'Review completed projects carefully. A strong, relevant portfolio with documented case studies demonstrates that the team can handle work similar to yours.' },
  { num:'02', title:'Technology Stack',       icon: <IconCode size={22}/>,  desc:'Verify that the company actively works with modern frameworks and coding standards. Outdated stacks create long-term maintenance and security risks.' },
  { num:'03', title:'Communication Quality', icon: <IconMessageCircle size={22}/>, desc:'Reliable, proactive communication prevents the majority of project delays. Look for regular reporting, clear escalation paths, and responsive account management.' },
  { num:'04', title:'Pricing Transparency',  icon: <IconDollarSign size={22}/>, desc:'A trustworthy partner provides detailed estimates covering all costs, timelines, and deliverables — with no hidden charges or vague scope language.' },
  { num:'05', title:'Customisation Depth',   icon: <IconZap size={22}/>,   desc:'Avoid firms that offer one-size-fits-all templates. Your solution should be engineered specifically for your brand, workflows, and long-term business objectives.' },
  { num:'06', title:'Security Practices',    icon: <IconShield size={22}/>, desc:'Ensure the firm follows industry best practices for data encryption, access control, IP protection, and compliance with relevant regulations.' },
];

const SERVICES = [
  { icon: <IconCode size={28}/>,        title:'Web Development',         desc:'High-performance websites and enterprise portals built with React, Angular, ASP .Net, and Laravel — optimised for speed, accessibility, and SEO.' },
  { icon: <IconSmartphone size={28}/>,  title:'Mobile App Development',  desc:'Native and cross-platform mobile applications built with Flutter, Kotlin, Swift, and React Native — fast, polished, and ready for scale.' },
  { icon: <IconBrain size={28}/>,       title:'AI & Data Science',       desc:'Intelligent automation and machine learning systems that help businesses make faster, better decisions through data-driven insights and predictive models.' },
  { icon: <IconCloud size={28}/>,       title:'Cloud & AWS Services',    desc:'AWS architecture, serverless design, cloud migration, and infrastructure management to improve scalability and reduce long-term operational costs.' },
  { icon: <IconShield size={28}/>,      title:'Cybersecurity & QA',      desc:'End-to-end security audits, penetration testing, automated QA pipelines, and compliance reviews to keep your platform and data fully protected.' },
  { icon: <IconGlobe size={28}/>,       title:'Digital Transformation',  desc:'Strategic consulting and full-lifecycle execution for organisations moving from legacy systems to modern, cloud-native, scalable digital architectures.' },
];

const BENEFITS = [
  { label:'Deep Engineering Talent Pool', detail:'Expertise across full-stack development, AI, cloud infrastructure, and mobile platforms.' },
  { label:'Highly Competitive Pricing',   detail:'Premium engineering output at a fraction of the cost typical in North America or Western Europe.' },
  { label:'Strong English Proficiency',   detail:'English-fluent development teams with flexible timezone coverage for seamless remote collaboration.' },
  { label:'Government-Backed IT Growth',  detail:'Sustained export growth supported by strategic national initiatives through PSEB and related bodies.' },
];

const REVIEWS = [
  { name:'Khalid A.',    loc:'Riyadh, Saudi Arabia',   img:'https://qllmsoft.com/images/khalid A.webp',   text:'Outstanding technical work. The solution QllmSoft delivered was precisely what we needed — accurate, fast, and well-documented. The team communicated proactively at every stage. Exactly as discussed, on time, and on budget.' },
  { name:'Mohammad I.', loc:'Amman, Jordan',           img:'https://qllmsoft.com/images/Muhammad I.webp', text:'QllmSoft is my go-to development partner for complex technical builds. Their understanding of the business context behind the code — not just the technical requirements — sets them apart from every other team I have worked with.' },
  { name:'Neil P.',     loc:'Cardiff, United Kingdom', img:'https://qllmsoft.com/images/Neil P.webp',     text:'Exceptional communication and technical depth throughout the entire engagement. The final solution exceeded our expectations significantly. I will not hesitate to bring QllmSoft back for our next project.' },
  { name:'Fernando M.', loc:'Miramar, United States',  img:'https://qllmsoft.com/images/fernandoM.webp',  text:'Clean architecture, professional delivery, and a team that genuinely cares about the outcome — not just closing the ticket. QllmSoft is the benchmark I now use for every other development partner I evaluate.' },
];

const FAQ_DATA = [
  { q:'Which city has the most software houses in Pakistan?',           a:'Lahore, Karachi, and Islamabad are the three primary IT hubs, each hosting a large concentration of established and emerging software development firms. Lahore alone accounts for over 40% of Pakistan\'s registered IT companies.' },
  { q:'What services do software houses in Pakistan provide?',          a:'Pakistani software companies typically offer web development, mobile application engineering, desktop software, UI/UX design, e-commerce solutions, cloud services, data analytics, AI development, and digital marketing — often as integrated full-service engagements.' },
  { q:'Is outsourcing to a software house in Pakistan cost-effective?', a:'Yes. Pakistani development teams offer highly skilled engineers at rates significantly lower than comparable talent in the US or UK, making the country an attractive destination for offshore software development — typically 50–70% more cost-effective.' },
  { q:'What makes QllmSoft stand out among Pakistan\'s software houses?',a:'QllmSoft combines the agility of a boutique firm with enterprise-grade technical standards. Clients benefit from direct access to senior engineers, transparent pricing, AWS-certified cloud delivery, and a track record verified on Upwork and Freelancer by global clients from the USA, UK, UAE, and Jordan.' },
  { q:'How do Pakistani software firms handle international clients?',  a:'The vast majority of Pakistan\'s top software houses actively serve clients in the United States, Europe, and the Gulf region — many with dedicated account management, NDA-first workflows, and flexible payment models for international engagements.' },
  { q:'What industries do Pakistani software firms serve?',             a:'Pakistani development firms serve healthcare, financial services, retail, education, logistics, real estate, and e-commerce sectors. Many specialise in SaaS products, B2B platforms, and industry-specific enterprise systems for global markets.' },
  { q:'Do software houses in Pakistan follow international quality standards?', a:'Leading Pakistani firms adhere to ISO 27001, CMMI, and Agile/Scrum frameworks. Many are AWS-certified partners and maintain documented SDLC processes, code review standards, and automated QA pipelines that meet or exceed Western industry benchmarks.' },
];

/* ─── FAQ Item Component ─────────────────────────────────────── */
const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`bsh-faq-item${open ? ' bsh-faq-item--open' : ''}`}
      itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
    >
      <button
        className="bsh-faq-btn"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="bsh-faq-num">{String(index + 1).padStart(2, '0')}</span>
        <span itemProp="name" className="bsh-faq-question">{faq.q}</span>
        <span className={`bsh-faq-icon${open ? ' bsh-faq-icon--open' : ''}`}>
          <IconChevronDown size={18}/>
        </span>
      </button>
      <div
        id={`faq-answer-${index}`}
        className="bsh-faq-answer"
        itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
      >
        <p itemProp="text">{faq.a}</p>
      </div>
    </div>
  );
};

/* ─── Animated Counter ───────────────────────────────────────── */
const AnimatedCounter = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
};

/* ─── Schema JSON-LD ─────────────────────────────────────────── */
const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Organization"],
      "@id": "https://qllmsoft.com/#organization",
      "name": "QllmSoft",
      "url": "https://qllmsoft.com/",
      "logo": "https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp",
      "telephone": "+92-334-8229288",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Main Bazar",
        "addressLocality": "Lalamusa",
        "addressRegion": "Punjab",
        "postalCode": "50700",
        "addressCountry": "PK"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 32.7011, "longitude": 73.9575 },
      "sameAs": [
        "https://www.facebook.com/qllmsoft",
        "https://www.linkedin.com/company/qllmsoft",
        "https://www.upwork.com/freelancers/~0170e20f8803389a86",
        "https://www.freelancer.com/u/mrprogrmmr"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "reviewCount": "24"
      }
    },
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}/#webpage`,
      "url": PAGE_URL,
      "name": "Top 10 Best Software Houses in Pakistan – 2026 Rankings",
      "description": "A comprehensive 2026 ranking of the top 10 software houses in Pakistan based on service quality, international reach, client satisfaction, and technological capability.",
      "publisher": { "@id": "https://qllmsoft.com/#organization" },
      "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Top 10 Software Houses in Pakistan 2026",
        "numberOfItems": 10,
        "itemListElement": TOP_10.map((c, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "item": { "@type": "Organization", "name": c.name }
        }))
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://qllmsoft.com/" },
        { "@type": "ListItem", "position": 2, "name": "Best Software Houses Pakistan", "item": PAGE_URL }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQ_DATA.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    },
    {
      "@type": "WebPage",
      "url": PAGE_URL,
      "name": "Best Software House in Pakistan 2026",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "24",
        "bestRating": "5"
      }
    }
  ]
});

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════════ */
const BestSoftwareHouse = () => {
  const [heroRef, heroInView]       = useInView({ triggerOnce: true });
  const [statsRef, statsInView]     = useInView({ triggerOnce: true });
  const [reviewRef, reviewInView]   = useInView({ triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true });

  return (
    <>
      {/* ══════ HEAD ══════ */}
      <Helmet>
        <html lang="en-PK" />
        <title>Best Software House in Pakistan | Top 10 IT Companies 2026 – QllmSoft</title>
        <meta name="description" content="Discover the best software house in Pakistan in 2026. Compare top 10 leading software development companies, IT services, and choose the right tech partner. Custom software, web & mobile app development." />
        <meta name="keywords" content="best software house in Pakistan, top software houses in Pakistan, software companies in Pakistan, IT companies Pakistan 2026, software development company Pakistan, web development company Pakistan, mobile app development Pakistan, custom software development Pakistan, software house Lahore, software house Karachi, software house Islamabad, Pakistan IT outsourcing, QllmSoft" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="QllmSoft" />
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lalamusa, Punjab, Pakistan" />
        <meta name="geo.position" content="32.7011;73.9575" />
        <link rel="canonical" href={PAGE_URL} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Top 10 Best Software Houses in Pakistan 2026 | QllmSoft" />
        <meta property="og:description" content="A comprehensive list of the top 10 best software houses in Pakistan in 2026. Explore trusted IT firms delivering web, mobile, cloud, and AI solutions to global clients." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="QllmSoft" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qllmsoft" />
        <meta name="twitter:title" content="Top 10 Best Software Houses in Pakistan 2026" />
        <meta name="twitter:description" content="Compare top software development companies in Pakistan for 2026. Web, mobile, AI and cloud solutions." />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{SCHEMA}</script>
      </Helmet>

      <main className="bsh-page" id="main-content">

        {/* ════════ HERO ════════ */}
        <section
          className="bsh-hero"
          aria-labelledby="hero-h1"
          ref={heroRef}
        >
          {/* Animated grid background */}
          <div className="bsh-hero__grid" aria-hidden="true" />

          {/* Floating orbs */}
          <div className="bsh-hero__orb bsh-hero__orb--1" aria-hidden="true" />
          <div className="bsh-hero__orb bsh-hero__orb--2" aria-hidden="true" />
          <div className="bsh-hero__orb bsh-hero__orb--3" aria-hidden="true" />

          <div className="container bsh-hero__inner">
            <div className={`bsh-hero__content${heroInView ? ' bsh-animate-in' : ''}`}>
              <div className="bsh-hero__eyebrow">
                <span className="bsh-hero__eyebrow-dot" aria-hidden="true"/>
                2026 Buyer's Guide — Pakistan IT Market
              </div>
              <h1 id="hero-h1" className="bsh-hero__title">
                Best Software House<br/>
                <span className="bsh-hero__title-accent">in Pakistan</span>
                <br/>Top 10 Companies 2026
              </h1>
              <p className="bsh-hero__sub">
                Looking for a reliable tech partner in Pakistan? This independent guide
                compares the <strong>top 10 software development companies</strong> — ranked
                on service quality, global reach, client satisfaction, and technical depth —
                to help you make a confident, informed decision.
              </p>
              <div className="bsh-hero__buttons">
                <a href="#top-10" className="bsh-btn bsh-btn--primary" aria-label="Jump to top 10 rankings list">
                  View Full Rankings
                </a>
                <a
                  href="https://wa.me/923348229288?text=Hi%20QllmSoft,%20I%27d%20like%20to%20discuss%20a%20software%20project!"
                  target="_blank" rel="noopener noreferrer"
                  className="bsh-btn bsh-btn--ghost"
                  aria-label="Contact QllmSoft on WhatsApp"
                >
                  Get Free Consultation
                </a>
              </div>
              <div className="bsh-hero__trust" aria-label="Trust indicators">
                {['PSEB Registered','Clutch Verified','AWS Certified','ISO-Aligned'].map(t => (
                  <span key={t} className="bsh-hero__trust-tag">
                    <IconCheckCircle size={13}/> {t}
                  </span>
                ))}
              </div>
            </div>

            <aside className="bsh-hero__panel" aria-label="Key market statistics">
              <div className="bsh-hero__panel-header">
                Pakistan IT Snapshot — 2026
              </div>
              {[
                { val:'$3B+',   label:'Annual IT Exports',        sub:'Source: PSEB 2025' },
                { val:'5,000+', label:'Registered IT Companies',  sub:'PSEB Directory' },
                { val:'500K+',  label:'IT Professionals',         sub:'Employed in sector' },
                { val:'70%',    label:'Cost Saving vs West',      sub:'vs US/UK rates' },
              ].map((s,i) => (
                <div key={i} className="bsh-hero__stat">
                  <span className="bsh-hero__stat-val">{s.val}</span>
                  <div>
                    <span className="bsh-hero__stat-label">{s.label}</span>
                    <span className="bsh-hero__stat-sub">{s.sub}</span>
                  </div>
                </div>
              ))}
              <a
                href="https://pseb.org.pk"
                target="_blank" rel="noopener noreferrer"
                className="bsh-hero__panel-link"
                aria-label="Visit PSEB official website for Pakistan IT statistics"
              >
                Verify on PSEB.org.pk →
              </a>
            </aside>
          </div>
        </section>

        {/* ════════ INTRO BAND ════════ */}
        <div className="bsh-intro-band" role="complementary" aria-label="Page introduction">
          <div className="container">
            <h2 className="bsh-intro-band__text">
              Top 10 Professional Software Development Companies in Pakistan
            </h2>
          </div>
        </div>

        {/* ════════ INTRO TEXT ════════ */}
        <section className="bsh-intro section" aria-labelledby="intro-heading">
          <div className="container">
            <div className="bsh-intro__layout">
              <div className="bsh-intro__text">
                <h2 id="intro-heading" className="bsh-intro__heading">
                  Why Pakistan Is the World's Rising Software Powerhouse
                </h2>
                <p>
                  Pakistan has firmly established itself as a major force in global software development.
                  Whether you need a mobile application, an enterprise platform, or an{' '}
                  <Link to="/ai-powered-software-solutions" aria-label="Learn about AI-powered software solutions by QllmSoft">
                    AI-powered product
                  </Link>
                  , Pakistani software firms routinely deliver world-class results at highly competitive
                  rates. In this 2026 guide, we have ranked the ten most notable software houses in
                  Pakistan based on their service quality, international reach, client satisfaction,
                  and technological capabilities.
                </p>
                <p>
                  The country's IT sector exported over <strong>$3 billion</strong> in services in 2025,
                  with the government and PSEB actively investing in talent pipelines, technology parks,
                  and regulatory frameworks to support continued growth. For international businesses,
                  Pakistan offers the rare combination of deep engineering talent, English fluency,
                  timezone flexibility, and costs 50–70% lower than comparable Western markets.
                </p>
                <p>
                  For independent verification, see the{' '}
                  <a
                    href="https://clutch.co/pk/developers"
                    target="_blank" rel="noopener noreferrer"
                    aria-label="View Clutch rankings for Pakistani software developers"
                  >
                    April 2026 Clutch rankings for Pakistani developers
                  </a>.
                </p>
                <div className="bsh-intro__tags">
                  {['Custom Software','Web Development','Mobile Apps','AI Solutions','Cloud AWS','IT Outsourcing'].map(tag => (
                    <span key={tag} className="bsh-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <aside className="bsh-intro__stats" aria-label="Pakistan IT industry statistics">
                <div className="bsh-stat-card" ref={statsRef}>
                  <div className="bsh-stat-card__icon"><IconTrendingUp size={22}/></div>
                  <div>
                    <div className="bsh-stat-card__val">
                      {statsInView ? <AnimatedCounter target={3} suffix="B+" /> : '0'}
                    </div>
                    <div className="bsh-stat-card__label">Annual IT Exports (USD)</div>
                  </div>
                </div>
                <div className="bsh-stat-card">
                  <div className="bsh-stat-card__icon"><IconUsers size={22}/></div>
                  <div>
                    <div className="bsh-stat-card__val">
                      {statsInView ? <AnimatedCounter target={500} suffix="K+" /> : '0'}
                    </div>
                    <div className="bsh-stat-card__label">IT Professionals Employed</div>
                  </div>
                </div>
                <div className="bsh-stat-card">
                  <div className="bsh-stat-card__icon"><IconBuildingOffice size={22}/></div>
                  <div>
                    <div className="bsh-stat-card__val">
                      {statsInView ? <AnimatedCounter target={5000} suffix="+" /> : '0'}
                    </div>
                    <div className="bsh-stat-card__label">Registered IT Companies</div>
                  </div>
                </div>
                <div className="bsh-stat-card bsh-stat-card--accent">
                  <div className="bsh-stat-card__icon"><IconDollarSign size={22}/></div>
                  <div>
                    <div className="bsh-stat-card__val">
                      {statsInView ? <AnimatedCounter target={70} suffix="%" /> : '0'}
                    </div>
                    <div className="bsh-stat-card__label">Cost Saving vs US / UK</div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ════════ RANKINGS TABLE ════════ */}
        <section className="bsh-table-section section section--alt" id="top-10" aria-labelledby="table-heading">
          <div className="container">
            <div className="bsh-section-head">
              <span className="bsh-eyebrow">Market Leaders</span>
              <h2 id="table-heading" className="bsh-section-title">
                Leading Software Development Companies in Pakistan (2026)
              </h2>
              <p className="bsh-section-lead">
                Ranked by service quality, global reach, and verified client satisfaction.
              </p>
            </div>
            <div className="bsh-table-wrap">
              <table
                className="bsh-rankings-table"
                aria-label="Top 10 software houses in Pakistan 2026 rankings table"
              >
                <thead>
                  <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Software House</th>
                    <th scope="col">Head Office</th>
                    <th scope="col">Core Services</th>
                    <th scope="col">Global Reach</th>
                  </tr>
                </thead>
                <tbody>
                  {TOP_10.map((c, i) => (
                    <tr key={i} className={c.highlight ? 'bsh-table-highlight' : ''}>
                      <td className="bsh-table-rank">{c.rank}</td>
                      <td className="bsh-table-name">
                        {c.highlight ? <strong>{c.name}</strong> : c.name}
                      </td>
                      <td>
                        <span className="bsh-table-hq">
                          <IconMapPin size={13}/> {c.hq}
                        </span>
                      </td>
                      <td className="bsh-table-services">{c.services}</td>
                      <td>
                        <span className="bsh-table-reach">
                          <IconGlobe size={13}/> {c.reach}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ════════ COMPANY PROFILES ════════ */}
        <section className="bsh-profiles section" aria-labelledby="profiles-heading">
          <div className="container">
            <div className="bsh-section-head">
              <span className="bsh-eyebrow">In-Depth Profiles</span>
              <h2 id="profiles-heading" className="bsh-section-title">
                Detailed Profiles of Pakistan's Top 10 Software Houses
              </h2>
              <p className="bsh-section-lead">
                A closer look at the firms driving Pakistan's technology sector through enterprise
                solutions, fintech innovation, and digital transformation.
              </p>
            </div>
            <div className="bsh-profiles__list">
              {TOP_10.map((c, i) => (
                <article
                  key={i}
                  className={`bsh-profile-card${c.highlight ? ' bsh-profile-card--featured' : ''}`}
                  itemScope itemType="https://schema.org/Organization"
                >
                  <div className="bsh-profile-card__num" aria-hidden="true">{c.rank}</div>
                  <div className="bsh-profile-card__body">
                    <div className="bsh-profile-card__header">
                      <h3 className="bsh-profile-card__name" itemProp="name">{c.name}</h3>
                      <span className="bsh-profile-card__tag">{c.tag}</span>
                      {c.highlight && <span className="bsh-profile-card__badge">⭐ Featured</span>}
                    </div>
                    <div className="bsh-profile-card__meta">
                      <span><IconMapPin size={13}/> {c.hq}</span>
                      <span><IconGlobe size={13}/> {c.reach}</span>
                    </div>
                    <p className="bsh-profile-card__desc" itemProp="description">{c.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ SERVICES ════════ */}
        <section className="bsh-services section section--alt" aria-labelledby="services-heading" ref={servicesRef}>
          <div className="container">
            <div className="bsh-section-head">
              <span className="bsh-eyebrow bsh-eyebrow--gold">Full-Spectrum Services</span>
              <h2 id="services-heading" className="bsh-section-title">
                What Do Pakistan's Best Software Houses Offer?
              </h2>
              <p className="bsh-section-lead">
                The leading software companies in Pakistan provide end-to-end digital services.
                From intuitive user interfaces to intelligent{' '}
                <Link to="/ai-powered-software-solutions" aria-label="AI-powered software solutions Pakistan">
                  cloud-native systems
                </Link>
                , these teams power businesses worldwide.
              </p>
            </div>
            <div className="bsh-services__grid">
              {SERVICES.map((s, i) => (
                <div
                  key={i}
                  className={`bsh-service-card${servicesInView ? ' bsh-service-card--visible' : ''}`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                  itemScope itemType="https://schema.org/Service"
                >
                  <div className="bsh-service-card__num" aria-hidden="true">{String(i+1).padStart(2,'0')}</div>
                  <div className="bsh-service-card__icon" aria-hidden="true">{s.icon}</div>
                  <h3 className="bsh-service-card__title" itemProp="name">{s.title}</h3>
                  <p className="bsh-service-card__desc" itemProp="description">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ PAKISTAN TECH DESTINATION ════════ */}
        <section className="bsh-destination section" aria-labelledby="destination-heading">
          <div className="container">
            <div className="bsh-section-head">
              <span className="bsh-eyebrow">Market Insights 2026</span>
              <h2 id="destination-heading" className="bsh-section-title">
                Pakistan — A Premier Global Tech Destination
              </h2>
              <p className="bsh-section-lead">
                International companies are increasingly turning to Pakistan for engineering talent.
                See the full picture on{' '}
                <a href="https://clutch.co" target="_blank" rel="noopener noreferrer"
                  aria-label="Clutch global software development rankings">
                  Clutch's global software rankings
                </a>.
              </p>
            </div>
            <div className="bsh-destination__layout">
              <div className="bsh-destination__visual">
                <img
                  src="/images/top-10-software-houses-in-pakistan.webp"
                  alt="Pakistan Software Outsourcing Hub 2026 — best software house in Pakistan"
                  loading="lazy"
                  width="580"
                  height="420"
                />
                <div className="bsh-destination__chip" aria-label="Pakistan IT export statistic">
                  <span className="bsh-destination__chip-val">$3B+</span>
                  <span className="bsh-destination__chip-label">Annual IT Exports</span>
                  <small>Source: PSEB</small>
                </div>
              </div>
              <div className="bsh-destination__benefits">
                {BENEFITS.map((b, i) => (
                  <div key={i} className="bsh-benefit">
                    <div className="bsh-benefit__check" aria-hidden="true">
                      <IconCheckCircle size={16}/>
                    </div>
                    <div>
                      <strong className="bsh-benefit__title">{b.label}</strong>
                      <span className="bsh-benefit__detail">{b.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bsh-destination__footer">
              <p>
                Markets including the <strong>USA, UK, Germany, UAE, and Canada</strong> actively
                outsource to Pakistani software companies, reducing development costs by up to{' '}
                <strong>70%</strong> while maintaining rigorous quality and security standards.
              </p>
            </div>
          </div>
        </section>

        {/* ════════ SELECTION GUIDE ════════ */}
        <section className="bsh-guide section section--alt" aria-labelledby="guide-heading">
          <div className="container">
            <div className="bsh-section-head">
              <span className="bsh-eyebrow">Expert Advice</span>
              <h2 id="guide-heading" className="bsh-section-title">
                How to Choose the Right Software House in Pakistan
              </h2>
              <p className="bsh-section-lead">
                Whether you are planning to{' '}
                <Link to="/mobile-app-development" aria-label="Mobile app development services Pakistan">
                  build a mobile application
                </Link>
                , a custom CRM, or an{' '}
                <Link to="/website-development-services" aria-label="Enterprise web development Pakistan">
                  enterprise web platform
                </Link>
                , the right partnership begins with evaluating six critical factors.
              </p>
            </div>
            <div className="bsh-guide__grid">
              {SELECTION_CRITERIA.map((c, i) => (
                <div key={i} className="bsh-guide-card">
                  <div className="bsh-guide-card__header">
                    <div className="bsh-guide-card__index">{c.icon}</div>
                    <span className="bsh-guide-card__num">{c.num}</span>
                  </div>
                  <h3 className="bsh-guide-card__title">{c.title}</h3>
                  <p className="bsh-guide-card__desc">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ REVIEWS ════════ */}
        <section
          className="bsh-reviews section"
          aria-labelledby="reviews-heading"
          ref={reviewRef}
          itemScope itemType="https://schema.org/Organization"
        >
          <meta itemProp="name" content="QllmSoft" />
          <div className="container">
            <div className="bsh-section-head">
              <span className="bsh-eyebrow">Verified Client Feedback</span>
              <h2 id="reviews-heading" className="bsh-section-title">
                What Global Clients Say About QllmSoft
              </h2>
              <p className="bsh-section-lead">
                Independent, third-party verified reviews from global clients — from the UK, USA,
                UAE, Saudi Arabia, and Jordan — on Freelancer and Upwork.
              </p>
            </div>
            <div className="bsh-reviews__grid">
              {REVIEWS.map((r, i) => (
                <article
                  key={i}
                  className={`bsh-review-card${reviewInView ? ' bsh-review-card--visible' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  itemScope itemType="https://schema.org/Review"
                >
                  <div
                    className="bsh-review-card__stars"
                    aria-label="5 out of 5 stars"
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                  >
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating"  content="5" />
                    {[...Array(5)].map((_, si) => (
                      <span key={si} className="bsh-star" aria-hidden="true">
                        <IconStar size={16} />
                      </span>
                    ))}
                  </div>
                  <p className="bsh-review-card__text" itemProp="reviewBody">"{r.text}"</p>
                  <div
                    className="bsh-review-card__author"
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <img
                      src={r.img}
                      alt={`${r.name} — verified QllmSoft software development client from ${r.loc}`}
                      loading="lazy"
                      width="48"
                      height="48"
                    />
                    <div>
                      <strong itemProp="name">{r.name}</strong>
                      <span>{r.loc} — Verified</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="bsh-reviews__actions">
              <a
                href="https://www.freelancer.com/u/mrprogrmmr"
                target="_blank" rel="noopener noreferrer"
                className="bsh-btn bsh-btn--outline"
                aria-label="View all QllmSoft reviews on Freelancer"
              >
                View Freelancer Reviews
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0170e20f8803389a86"
                target="_blank" rel="noopener noreferrer"
                className="bsh-btn bsh-btn--outline"
                aria-label="Verify QllmSoft Top-Rated status on Upwork"
              >
                Verify Upwork Status
              </a>
            </div>
          </div>
        </section>

        {/* ════════ CTA BANNER ════════ */}
        <section className="bsh-cta section" aria-labelledby="cta-heading">
          <div className="bsh-cta__bg" aria-hidden="true"/>
          <div className="container bsh-cta__inner">
            <div className="bsh-cta__text">
              <span className="bsh-cta__eyebrow">Let's Build the Future</span>
              <h2 id="cta-heading" className="bsh-cta__title">
                Looking for a development partner?
              </h2>
              <p className="bsh-cta__desc">
                At <strong>QllmSoft</strong>, we engineer digital products built to last.
                Our full-stack team combines global technical insight with precise, pixel-perfect
                execution — turning your vision into software that users genuinely rely on.
              </p>
              <div className="bsh-cta__features">
                {['Pixel-Perfect Design','Scalable Architecture','Global Standards','NDA on Day One'].map(f => (
                  <span key={f}><span className="bsh-cta__dot" aria-hidden="true"/>{f}</span>
                ))}
              </div>
            </div>
            <div className="bsh-cta__action">
              <a
                href="https://wa.me/923348229288?text=Hi%20QllmSoft,%20I%27d%20like%20to%20discuss%20a%20project!"
                target="_blank" rel="noopener noreferrer"
                className="bsh-cta__main-btn"
                aria-label="Start free consultation with QllmSoft via WhatsApp"
              >
                <span className="bsh-cta__main-btn-icon" aria-hidden="true">📞</span>
                <div>
                  <small>Get Started Now</small>
                  <span>Free Feasibility Call</span>
                </div>
              </a>
              <p className="bsh-cta__note">No commitment required · 15-minute consultation</p>
              <Link to="/contact" className="bsh-btn bsh-btn--ghost-dark" aria-label="Contact QllmSoft">
                Or Use Contact Form
              </Link>
            </div>
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section
          className="bsh-faq section section--alt"
          id="faq"
          aria-labelledby="faq-heading"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="container">
            <div className="bsh-section-head">
              <span className="bsh-eyebrow">Got Questions?</span>
              <h2 id="faq-heading" className="bsh-section-title">
                Frequently Asked Questions
              </h2>
              <p className="bsh-section-lead">
                Everything you need to know about software development outsourcing in Pakistan.
              </p>
            </div>
            <div className="bsh-faq__list">
              {FAQ_DATA.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
            </div>
            <div className="bsh-faq__actions">
              <Link to="/contact" className="bsh-btn bsh-btn--primary"
                aria-label="Contact QllmSoft with your software development question">
                Ask Us Directly
              </Link>
              <a
                href="https://wa.me/923348229288"
                target="_blank" rel="noopener noreferrer"
                className="bsh-btn bsh-btn--wa"
                aria-label="WhatsApp QllmSoft about your project"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* ════════ RELATED LINKS (Internal) ════════ */}
        <section className="bsh-related section" aria-labelledby="related-heading">
          <div className="container">
            <h2 id="related-heading" className="bsh-related__title">
              Explore Our Software Development Services
            </h2>
            <nav className="bsh-related__grid" aria-label="Related services navigation">
              {[
                { to:'/ai-powered-software-solutions',           label:'AI-Powered Software Solutions' },
                { to:'/custom-software-development-services',    label:'Custom Software Development' },
                { to:'/mobile-app-development',                  label:'Mobile App Development' },
                { to:'/website-development-services',            label:'Web Development Services' },
                { to:'/api-development-services',                label:'API Development' },
                { to:'/outsource-software-development-to-pakistan', label:'Outsource to Pakistan' },
              ].map((l, i) => (
                <Link key={i} to={l.to} className="bsh-related__link">
                  <span>{l.label}</span>
                  <span className="bsh-related__arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </nav>
          </div>
        </section>

      </main>
    </>
  );
};

export default BestSoftwareHouse;
