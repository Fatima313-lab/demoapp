/**
 * HireReactDevelopers.jsx
 * ─────────────────────────────────────────────────────────
 * TARGET KEYWORDS:
 *  Primary:   hire React developers Pakistan
 *             hire ReactJS developers in Pakistan
 *  Secondary: dedicated React developer Pakistan, React developer for hire Pakistan,
 *             ReactJS development company Pakistan, hire React.js developer,
 *             React developer remote Pakistan, ReactJS web development Pakistan
 *
 * SEO: 5 JSON-LD schemas · Single H1 · H1→H2→H3→H4 ·
 *      Semantic HTML5 · aria-label · Review microdata ·
 *      FAQPage microdata · Service microdata · image alt/lazy ·
 *      Internal + outbound authority links
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './HireDeveloper.css';
import 'animate.css';

const PAGE_URL = 'https://qllmsoft.com/hire-react-developers-pakistan';
const OG_IMAGE  = 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg';

const schemaOrg = {
  '@context':'https://schema.org','@type':'Organization',
  name:'QllmSoft',url:'https://qllmsoft.com',foundingDate:'2015',
  logo:'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp',
  contactPoint:{'@type':'ContactPoint',telephone:'+92-334-8229288',contactType:'customer service',areaServed:['PK','US','GB','AE','SA'],availableLanguage:'English'},
  address:{'@type':'PostalAddress',streetAddress:'H # 181, Camping Ground',addressLocality:'Lalamusa',addressRegion:'Punjab',addressCountry:'PK'},
  sameAs:['https://www.freelancer.com/u/mrprogrmmr','https://www.upwork.com/freelancers/~0170e20f8803389a86'],
};

const schemaService = {
  '@context':'https://schema.org','@type':'Service',
  serviceType:'ReactJS Development',
  name:'Hire React Developers in Pakistan',
  description:'QllmSoft provides dedicated, remote, and offshore React.js developers in Pakistan. Expert ReactJS engineers for custom web applications, SPAs, enterprise dashboards, eCommerce, and full-stack React + .NET solutions for global businesses.',
  provider:{'@type':'Organization',name:'QllmSoft',url:'https://qllmsoft.com'},
  areaServed:['Pakistan','United States','United Kingdom','UAE','Saudi Arabia'],
  url:PAGE_URL,
  hasOfferCatalog:{
    '@type':'OfferCatalog',name:'React Developer Hiring Models',
    itemListElement:[
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Dedicated React Developer Pakistan'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Remote React Developer Pakistan'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Full-Stack React + .NET Developer'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Offshore React Development Team Pakistan'}},
    ],
  },
};

const schemaWebPage = {
  '@context':'https://schema.org','@type':'WebPage',
  name:'Hire React Developers in Pakistan | QllmSoft',
  url:PAGE_URL,
  description:'Hire expert React.js developers in Pakistan from QllmSoft. Dedicated, remote, and offshore ReactJS engineers delivering high-performance web applications at 60% lower cost than US or UK agencies.',
  publisher:{'@type':'Organization',name:'QllmSoft'},
  aggregateRating:{'@type':'AggregateRating',ratingValue:'5',reviewCount:'47',bestRating:'5',worstRating:'1'},
};

const schemaBreadcrumb = {
  '@context':'https://schema.org','@type':'BreadcrumbList',
  itemListElement:[
    {'@type':'ListItem',position:1,name:'Home',item:'https://qllmsoft.com/'},
    {'@type':'ListItem',position:2,name:'Hire Developers',item:'https://qllmsoft.com/services'},
    {'@type':'ListItem',position:3,name:'Hire React Developers Pakistan',item:PAGE_URL},
  ],
};

const FAQ_DATA = [
  { q:'Why should I hire React developers from Pakistan?', a:'Hiring React developers from Pakistan gives you access to senior, internationally experienced ReactJS engineers at 50–65% lower cost than equivalent talent in the US, UK, or Australia. Pakistani React developers are proficient in modern React (v18+), Next.js, Redux Toolkit, and full-stack integration with ASP.NET Core and Node.js — with strong English communication and experience delivering projects for global clients.' },
  { q:'What technologies do QllmSoft React developers specialize in?', a:'Our React developers are experts in React.js (v18+), Next.js, Redux Toolkit, React Query, TypeScript, Tailwind CSS, Material UI, REST API and GraphQL integration, ASP.NET Core backends, SQL Server, Firebase, and deployment on Azure, AWS, and Vercel.' },
  { q:'How quickly can I hire a React developer from QllmSoft?', a:'You can have a React developer start within 24–48 hours of confirming your requirements. We evaluate your technical needs, match the right engineer from our team, and onboard them to your tools and project workflow within the same week.' },
  { q:'What hiring models do you offer for React developers?', a:'We offer three flexible models: dedicated full-time React developers who work exclusively on your project; fixed-price project engagements for well-defined scope; and time-and-material retainers for ongoing or evolving development work. All models include an NDA on day one and full IP ownership.' },
  { q:'Can React developers at QllmSoft work in my time zone?', a:'Yes. Our React developers adjust their working hours to overlap with US, UK, European, and Gulf business hours. We use Slack, GitHub, Jira, and Azure DevOps to ensure full communication transparency regardless of time zone differences.' },
  { q:'What is the difference between React and Next.js — which should I choose?', a:'React is a UI library for building component-based interfaces, typically used for client-side SPAs. Next.js is a full React framework that adds server-side rendering (SSR), static site generation (SSG), API routes, and built-in SEO optimizations. For marketing sites and content-heavy apps, Next.js is generally the better choice. For complex SPAs and internal dashboards, React alone is often sufficient. Our developers will recommend the right approach for your specific requirements.' },
];

const schemaFAQ = {
  '@context':'https://schema.org','@type':'FAQPage',
  mainEntity:FAQ_DATA.map(({q,a})=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}})),
};

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  const id = `react-faq-${index}`;
  return (
    <div className={`faq-item ${open?'faq-item--open':''}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button className="faq-question" onClick={()=>setOpen(o=>!o)} aria-expanded={open} aria-controls={id} itemProp="name">
        <span>{faq.q}</span><span className="faq-icon" aria-hidden="true">{open?'−':'+'}</span>
      </button>
      {open&&<div id={id} className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">{faq.a}</p></div>}
    </div>
  );
};

const HireReactDevelopers = () => {
  const { ref:skillsRef,    inView:skillsInView    } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:servicesRef,  inView:servicesInView  } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:stackRef,     inView:stackInView     } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:modelsRef,    inView:modelsInView    } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:processRef,   inView:processInView   } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:compareRef,   inView:compareInView   } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:industryRef,  inView:industryInView  } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:reviewRef,    inView:reviewInView    } = useInView({ triggerOnce:true, threshold:0.08 });

  return (
    <>
      <Helmet>
        <title>Hire React Developers in Pakistan | Dedicated ReactJS Engineers | QllmSoft</title>
        <meta name="description" content="Hire expert React developers in Pakistan from QllmSoft. Dedicated, remote, and offshore ReactJS engineers for SPAs, enterprise dashboards, and full-stack apps. 50–65% lower cost than US/UK. Free consultation." />
        <meta name="keywords" content="hire React developers Pakistan, hire ReactJS developers Pakistan, dedicated React developer Pakistan, React developer for hire Pakistan, ReactJS development company Pakistan, hire React.js developer, React developer remote Pakistan, full stack React developer Pakistan, Next.js developer Pakistan" />
        <meta name="author" content="QllmSoft" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content="Hire React Developers in Pakistan | Dedicated ReactJS Engineers | QllmSoft" />
        <meta property="og:description" content="Dedicated, remote, and offshore React.js developers in Pakistan. Senior ReactJS engineers at 50–65% lower cost than US/UK agencies. Free consultation." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Hire React Developers Pakistan — QllmSoft" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire React Developers in Pakistan | QllmSoft" />
        <meta name="twitter:description" content="Senior ReactJS engineers in Pakistan — dedicated, remote, or offshore. 50–65% lower cost than US/UK." />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Hire React Developers Pakistan" />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="hd-page" style={{'--hd-accent':'#2B6CB0','--hd-accent-light':'#EBF8FF','--hd-accent-border':'#BEE3F8'}} role="main">

       
        {/* HERO */}
        <header className="hd-hero" role="banner">
          <div className="hd-hero__cut" aria-hidden="true" />
          <div className="container hd-hero__inner">
            <div className="hd-hero__content">
              <div className="hd-hero__eyebrow">
                <span className="hd-hero__dot" aria-hidden="true" />
                Pakistan's Top React.js Engineers — Available Now
              </div>
              <h1 className="hd-hero__title">
                Hire Expert <span className="hd-hero__title-highlight">React Developers</span><br />
                in Pakistan
              </h1>
              <p className="hd-hero__sub">
                Build high-performance, scalable, and modern web applications with
                QllmSoft's dedicated ReactJS engineers — delivering Silicon Valley-grade
                quality at <strong>50–65% lower cost</strong> than US or UK agencies.
              </p>
              <div className="hd-hero__buttons">
                <Link to="/contact" className="hd-btn-primary" aria-label="Hire React developers from QllmSoft Pakistan today">Hire React Developers Now</Link>
                <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20hire%20a%20React%20developer!" target="_blank" rel="noopener noreferrer" className="hd-btn-whatsapp" aria-label="WhatsApp QllmSoft to hire a React developer">💬 WhatsApp Us</a>
              </div>
              <div className="hd-hero__stats" aria-label="QllmSoft React development track record">
                {[{num:'50+',label:'React Projects'},{num:'10+',label:'Years Experience'},{num:'5★',label:'Upwork Rating'},{num:'100%',label:'Job Success'}].map(s=>(
                  <div key={s.label} className="hd-hero__stat">
                    <span className="hd-hero__stat-num">{s.num}</span>
                    <span className="hd-hero__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="hd-hero__models" aria-label="React developer hiring options">
              <p className="hd-hero__models-title">Choose Your Hiring Model</p>
              {[
                {icon:'👤',title:'Dedicated React Developer',desc:'Full-time, exclusive to your project',badge:'Most Popular',badgeClass:'hd-badge-gold'},
                {icon:'🌐',title:'Remote React Engineer',  desc:'Work in your time zone, daily standups', badge:'Flexible',   badgeClass:'hd-badge-blue'},
                {icon:'🚀',title:'Full-Stack React + .NET',desc:'Frontend + ASP.NET Core backend',        badge:'Full Stack', badgeClass:'hd-badge-purple'},
                {icon:'⚡',title:'Offshore React Team',   desc:'Scale a complete React squad',           badge:'Best Value', badgeClass:'hd-badge-green'},
              ].map((m,i)=>(
                <div key={i} className="hd-model-card">
                  <div className="hd-model-card__left">
                    <div className="hd-model-card__icon">{m.icon}</div>
                    <div><strong>{m.title}</strong><p>{m.desc}</p></div>
                  </div>
                  <span className={`hd-model-badge ${m.badgeClass}`}>{m.badge}</span>
                </div>
              ))}
              <div className="hd-hero__tech" aria-label="React technologies">
                {['React 18','Next.js','TypeScript','Redux','Tailwind CSS','REST & GraphQL'].map(t=><span key={t} className="hd-tech-pill">{t}</span>)}
              </div>
            </aside>
          </div>
        </header>

        {/* INTRO */}
        <section className="section hd-intro" aria-labelledby="intro-heading">
          <div className="container">
            <p className="section-eyebrow">Why Hire React Developers from Pakistan</p>
            <div className="hd-intro__layout">
              <div className="hd-intro__text">
                <h2 id="intro-heading">Senior React.js Developers Available for Hire — Pakistan's Premier ReactJS Team</h2>
                <p>React.js has become the dominant choice for building modern, component-based user interfaces — powering everything from early-stage startup MVPs to the dashboards of Fortune 500 enterprises. At QllmSoft, our React developers bring production-grade expertise across the entire React ecosystem: from state management with Redux Toolkit and React Query, to server-side rendering with Next.js, to full-stack integration with ASP.NET Core and Node.js backends.</p>
                <p>Hiring <strong>React developers in Pakistan</strong> from QllmSoft means you access engineers who have delivered 50+ React-based projects for clients in the US, UK, UAE, and Saudi Arabia — at 50–65% lower cost than equivalent talent in Western markets. Our developers don't just write React components; they architect scalable frontend systems, enforce code quality through peer review, and document every interface so your team can maintain and extend the work confidently.</p>
                <p>Whether you need a single dedicated ReactJS developer to embed in your existing team, a fixed-price React project delivered from scratch, or a full offshore React engineering squad — QllmSoft provides the right engagement model, the right talent level, and the right delivery structure for your business. Explore our <Link to="/website-development-services">web development services</Link> or our <Link to="/api-development-services">API development capabilities</Link> for full-stack engagements.</p>
              </div>
              <aside className="hd-intro__highlights" aria-label="React hiring advantages">
                {[
                  {icon:'💰',title:'50–65% Cost Savings',sub:'vs US or UK React agencies'},
                  {icon:'⚡',title:'Onboard in 24–48 Hours',sub:'No long recruitment cycles'},
                  {icon:'🔒',title:'Full IP Ownership',sub:'NDA signed on day one'},
                  {icon:'💬',title:'Fluent English',sub:'Daily communication, no barrier'},
                  {icon:'📋',title:'Agile Delivery',sub:'2-week sprints, live demos'},
                  {icon:'🌍',title:'Any Time Zone',sub:'US, UK, Gulf — we adapt'},
                ].map((h,i)=>(
                  <div key={i} className="hd-highlight">
                    <div className="hd-highlight__icon">{h.icon}</div>
                    <div><strong>{h.title}</strong><span>{h.sub}</span></div>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section hd-skills" ref={skillsRef} aria-labelledby="skills-heading">
          <div className="container">
            <p className="section-eyebrow">Technical Expertise</p>
            <div className="section-title">
              <h2 id="skills-heading">What Our React Developers Build</h2>
              <p>Every React engineer at QllmSoft is tested on real-world scenarios — not just syntax. Here is the breadth of React capability you access when you hire with us.</p>
            </div>
            <div className="hd-skills__grid">
              {[
                {icon:'⚛️',title:'Single Page Applications (SPAs)',desc:'High-performance client-side React apps with code splitting, lazy loading, and optimized bundle sizes — delivering sub-second initial renders even at scale.',tags:['React Router','Code Splitting','Vite','Webpack']},
                {icon:'🚀',title:'Next.js & Server-Side Rendering',desc:"SEO-optimized React applications with Next.js — SSR, SSG, ISR, and App Router for marketing sites, eCommerce storefronts, and content-driven platforms that need Google to find them.",tags:['Next.js 14','App Router','SSR','SSG','ISR']},
                {icon:'📊',title:'Enterprise Dashboards & Portals',desc:'Complex internal tools — admin panels, analytics dashboards, multi-role user portals, and data-rich B2B interfaces built with React and connected to live backend APIs.',tags:['React Query','Recharts','Ant Design','MUI']},
                {icon:'🔗',title:'Full-Stack React + ASP.NET Core',desc:'End-to-end web applications combining React frontends with secure ASP.NET Core Web API backends — with SQL Server data, JWT auth, and Azure deployment.',tags:['ASP.NET Core','Entity Framework','SQL Server','Azure']},
                {icon:'🛒',title:'eCommerce & Marketplace Platforms',desc:'Custom React storefronts with product catalog management, cart systems, Stripe and PayPal integration, and optimized checkout flows built for conversion and performance.',tags:['Stripe','Redux Cart','Product Search','SEO']},
                {icon:'📱',title:'Progressive Web Apps (PWAs)',desc:'React applications that work offline, install to home screens, and deliver app-like performance in the browser — built to Lighthouse standards for Core Web Vitals compliance.',tags:['Service Workers','PWA','Offline-First','Lighthouse']},
              ].map((s,i)=>(
                <article key={i} className={`hd-skill-card animate__animated ${skillsInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.08}s`}} itemScope itemType="https://schema.org/Service">
                  <span className="hd-skill-card__icon" aria-hidden="true">{s.icon}</span>
                  <h3 className="hd-skill-card__title" itemProp="name">{s.title}</h3>
                  <p className="hd-skill-card__desc" itemProp="description">{s.desc}</p>
                  <div className="hd-skill-card__tags">{s.tags.map(t=><span key={t} className="hd-stag">{t}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES (dark) */}
        <section className="section hd-services" ref={servicesRef} aria-labelledby="services-heading">
          <div className="container">
            <p className="section-eyebrow">What You Can Hire For</p>
            <div className="section-title">
              <h2 id="services-heading">React Development Services We Deliver</h2>
              <p>From a single React feature to a fully engineered product — every service is scoped, priced, and delivered with full transparency.</p>
            </div>
            <div className="hd-services__grid">
              {[
                {n:'01',title:'Custom React Application Development',desc:'Bespoke React applications built from the ground up around your business logic — not adapted from a template. We architect the component structure, state management strategy, and data layer before writing a single line of UI code.',tags:['React 18','TypeScript','Component Architecture','State Management']},
                {n:'02',title:'React UI Component Library Development',desc:'Reusable, documented, and tested React component libraries — design systems that accelerate your product team and maintain visual consistency at scale across multiple products.',tags:['Storybook','Styled Components','Design Tokens','Jest']},
                {n:'03',title:'React App Migration & Modernization',desc:'Migrate legacy jQuery, Angular 1.x, or class-component React applications to modern functional React with hooks — improving performance, maintainability, and developer experience without breaking production.',tags:['Hooks Migration','React 18 Upgrade','Bundle Optimization']},
                {n:'04',title:'React Performance Optimization',desc:"Audit and resolve performance bottlenecks in existing React applications — lazy loading, memoization, virtualized lists, code splitting, and Core Web Vitals optimization for Google's Page Experience signals.",tags:['React.memo','useMemo','Virtualization','Lighthouse']},
                {n:'05',title:'API Integration & State Management',desc:'Connect React frontends to REST APIs, GraphQL endpoints, and real-time WebSocket feeds — with clean state management using Redux Toolkit, Zustand, or React Query for server state synchronization.',tags:['Redux Toolkit','React Query','GraphQL','WebSockets']},
                {n:'06',title:'React Testing & QA Engineering',desc:'Comprehensive test suites for React applications — unit testing with Jest and React Testing Library, end-to-end automation with Cypress or Playwright, and CI/CD pipeline integration for every commit.',tags:['Jest','Testing Library','Cypress','Playwright']},
              ].map((s,i)=>(
                <article key={i} className={`hd-service-card animate__animated ${servicesInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.08}s`}} itemScope itemType="https://schema.org/Service">
                  <div className="hd-service-card__num" aria-hidden="true">{s.n}</div>
                  <h3 className="hd-service-card__title" itemProp="name">{s.title}</h3>
                  <p className="hd-service-card__desc" itemProp="description">{s.desc}</p>
                  <div className="hd-service-card__tags">{s.tags.map(t=><span key={t} className="hd-stag-dark">{t}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="section hd-stack" ref={stackRef} aria-labelledby="stack-heading">
          <div className="container">
            <p className="section-eyebrow">Technology Stack</p>
            <div className="section-title">
              <h2 id="stack-heading">React Developer Technology Expertise</h2>
              <p>The full technical stack our React developers command — across frontend, backend, data, and DevOps.</p>
            </div>
            <div className="hd-stack__grid">
              {[
                {color:'#2B6CB0',label:'React Ecosystem',items:['React 18 (Hooks, Concurrent)','Next.js 14 (App Router)','TypeScript','Vite / Webpack / Turbopack','React Native (cross-platform)']},
                {color:'#1A365D',label:'State & Data',items:['Redux Toolkit','Zustand','React Query (TanStack)','SWR','GraphQL (Apollo / urql)']},
                {color:'#edb702',label:'UI & Design',items:['Tailwind CSS','Material UI (MUI v5)','Ant Design','Styled Components','Storybook']},
                {color:'#276749',label:'Backend Integration',items:['ASP.NET Core Web API','.NET 8','Node.js / Express','REST & GraphQL','WebSockets / SignalR']},
              ].map((col,i)=>(
                <article key={i} className={`hd-stack-col animate__animated ${stackInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.1}s`,'--col-color':col.color}} aria-label={`${col.label} technologies`}>
                  <h3 className="hd-stack-col__label">{col.label}</h3>
                  <ul className="hd-stack-col__list">{col.items.map(item=><li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HIRING MODELS */}
        <section className="section hd-models-section" ref={modelsRef} aria-labelledby="models-heading">
          <div className="container">
            <p className="section-eyebrow">Flexible Engagement</p>
            <div className="section-title">
              <h2 id="models-heading">React Developer Hiring Models</h2>
              <p>Choose the engagement model that fits your project size, timeline, and budget — with full flexibility to change as your needs evolve.</p>
            </div>
            <div className="hd-models__grid">
              {[
                {icon:'👤',badge:null,title:'Dedicated React Developer',subtitle:'Full-time, exclusively yours',desc:'A senior React engineer works solely on your project — embedded in your team, attending your standups, using your tools. The most cost-efficient model for ongoing product development.',features:['Exclusive full-time commitment','Direct daily communication','Your tools and workflow','Scale up or add developers monthly'],featured:false},
                {icon:'🎯',badge:'Most Popular',title:'Fixed-Price React Project',subtitle:'Defined scope, fixed cost',desc:'You share your requirements, we scope the work, agree a fixed price, and deliver against milestones. Zero budget surprises — every deliverable documented and signed off before development.',features:['Fixed cost, no surprises','Milestone-based delivery','Full documentation & handover','30 days post-launch support'],featured:true},
                {icon:'⏱️',badge:null,title:'Time & Material Retainer',subtitle:'Pay for hours delivered',desc:'For evolving projects or ongoing feature work, pay only for hours delivered — with weekly time reports, sprint planning, and the flexibility to pause or scale at any point.',features:['Transparent hourly tracking','Adjust scope any sprint','No minimum commitment','Weekly progress reports'],featured:false},
              ].map((m,i)=>(
                <article key={i} className={`hd-model-section-card ${m.featured?'hd-model-section-card--featured':''} animate__animated ${modelsInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.12}s`}}>
                  {m.badge&&<span className="hd-model-section-card__badge">{m.badge}</span>}
                  <div className="hd-model-section-card__icon">{m.icon}</div>
                  <h3 className="hd-model-section-card__title">{m.title}</h3>
                  <p className="hd-model-section-card__subtitle">{m.subtitle}</p>
                  <p className="hd-model-section-card__desc">{m.desc}</p>
                  <ul className="hd-model-section-card__features">{m.features.map(f=><li key={f}>{f}</li>)}</ul>
                  <Link to="/contact" className="hd-model-cta" aria-label={`Enquire about ${m.title} for React development`}>Enquire Now</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section hd-process" ref={processRef} aria-labelledby="process-heading">
          <div className="container">
            <p className="section-eyebrow">How We Work</p>
            <div className="section-title">
              <h2 id="process-heading">Our React Development Delivery Process</h2>
              <p>From your first brief to your first production deployment — structured, transparent, and focused on shipping software that works.</p>
            </div>
            <ol className="hd-process__steps" aria-label="React development process steps">
              {[
                {n:'01',icon:'📋',title:'Requirements & Architecture Planning',desc:'We analyze your business requirements, define the component architecture, choose the right state management approach, and map out API contracts before any code is written.'},
                {n:'02',icon:'🎨',title:'UI/UX Design & Figma Prototyping',desc:'Our designers create high-fidelity Figma prototypes of the React interfaces — validated with your feedback before development begins, eliminating costly rework.'},
                {n:'03',icon:'⚛️',title:'Component-Based Agile Development',desc:"We build in 2-week sprints, delivering working React components to a shared staging environment after each sprint. You see real progress — not status updates saying 'in progress'."},
                {n:'04',icon:'🧪',title:'Code Review, Testing & QA',desc:'Every component is peer-reviewed by a senior engineer. Unit tests cover all logic, integration tests cover API interactions, and end-to-end tests cover critical user journeys.'},
                {n:'05',icon:'🚀',title:'Deployment & Post-Launch Support',desc:'We deploy to your preferred platform — Azure, AWS, or Vercel — and provide 30 days of post-launch monitoring, bug resolution, and performance tuning at no additional cost.'},
              ].map((step,i)=>(
                <li key={i} className={`hd-process__step animate__animated ${processInView?'animate__fadeInLeft':''}`} style={{animationDelay:`${i*0.09}s`}}>
                  <div className="hd-process__step-left">
                    <div className="hd-process__step-num" aria-label={`Step ${step.n}`}>{step.n}</div>
                    <span className="hd-process__step-icon" aria-hidden="true">{step.icon}</span>
                  </div>
                  <div className="hd-process__step-body"><h4>{step.title}</h4><p>{step.desc}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section hd-compare" ref={compareRef} aria-labelledby="compare-heading">
          <div className="container">
            <p className="section-eyebrow">The Business Case</p>
            <div className="section-title">
              <h2 id="compare-heading">In-House vs Freelancer vs QllmSoft for React Development</h2>
              <p>A direct comparison of the three most common approaches to hiring React engineers — and where QllmSoft fits.</p>
            </div>
            <div className="hd-compare-wrap">
              <table className={`hd-compare-table animate__animated ${compareInView?'animate__fadeInUp':''}`} aria-label="Comparison: in-house, freelancer, and QllmSoft React developer hiring">
                <caption>React Developer Hiring — In-House vs Freelancer vs QllmSoft Pakistan</caption>
                <thead><tr><th scope="col">Factor</th><th scope="col">In-House (US/UK)</th><th scope="col">Freelancer Marketplace</th><th scope="col" className="hd-col-highlight">QllmSoft Pakistan ✓</th></tr></thead>
                <tbody>
                  {[
                    {f:'Avg. Cost',     a:'$80–150/hr + benefits', b:'$40–90/hr, variable',    c:'50–65% lower total cost'},
                    {f:'Availability',  a:'Business hours only',   b:'Often shared across jobs', c:'Dedicated, full-time focus'},
                    {f:'Onboarding',    a:'4–8 weeks',             b:'1–3 days',                c:'24–48 hours'},
                    {f:'Accountability',a:'High — employment',     b:'Low — contract only',     c:'High — NDA + milestones'},
                    {f:'Code Quality',  a:'Controlled',            b:'Variable',                c:'Senior review on all code'},
                    {f:'Scalability',   a:'Slow & expensive',      b:'Hard to team up',         c:'Scale up/down monthly'},
                    {f:'IP Ownership',  a:'Full',                  b:'Usually full',            c:'Full — NDA day one'},
                    {f:'Post-Launch',   a:'Full in-house cost',    b:'Extra cost or gone',      c:'30 days free support'},
                  ].map((row,i)=>(
                    <tr key={i}>
                      <td className="hd-col-factor">{row.f}</td>
                      <td>{row.a}</td>
                      <td>{row.b}</td>
                      <td className="hd-col-highlight hd-col-good">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="section hd-industries" ref={industryRef} aria-labelledby="industries-heading">
          <div className="container">
            <p className="section-eyebrow">Industries We Serve</p>
            <div className="section-title">
              <h2 id="industries-heading">React Development Across Every Industry</h2>
              <p>Our React developers bring domain knowledge to match the technical skill — meaning they understand the workflows, compliance requirements, and user expectations of your sector.</p>
            </div>
            <div className="hd-industries__grid">
              {[
                {icon:'💳',title:'Finance & FinTech',desc:'Secure trading dashboards, portfolio trackers, payment UIs, and customer-facing banking interfaces built with React and real-time data feeds.'},
                {icon:'🛒',title:'eCommerce & Retail',desc:'High-converting product pages, filterable catalogs, cart systems, and checkout flows — optimized for Core Web Vitals and mobile-first conversion rates.'},
                {icon:'🏥',title:'Healthcare',desc:'Patient portals, appointment booking systems, EHR data displays, and telemedicine interfaces built to HIPAA-aware standards.'},
                {icon:'🎓',title:'Education & eLearning',desc:'LMS frontends, interactive course players, progress dashboards, and live classroom interfaces built with React for engagement and accessibility.'},
                {icon:'🚚',title:'Logistics & Supply Chain',desc:'Real-time shipment tracking dashboards, driver apps, warehouse management UIs, and fleet monitoring interfaces.'},
                {icon:'☁️',title:'SaaS Platforms',desc:'Multi-tenant SaaS dashboards, subscription billing UIs, user onboarding flows, and feature-rich admin panels for B2B software products.'},
              ].map((ind,i)=>(
                <article key={i} className={`hd-industry-card animate__animated ${industryInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.08}s`}}>
                  <span className="hd-industry-card__icon" aria-hidden="true">{ind.icon}</span>
                  <h3 className="hd-industry-card__title">{ind.title}</h3>
                  <p className="hd-industry-card__desc">{ind.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section hd-testimonials" ref={reviewRef} aria-labelledby="reviews-heading">
          <div className="container">
            <p className="section-eyebrow">Verified Client Reviews</p>
            <div className="section-title">
              <h2 id="reviews-heading">What Clients Say About Hiring React Developers from QllmSoft</h2>
              <p>Independent reviews from global clients — UK, USA, UAE, Saudi Arabia, and Jordan — on Freelancer and Upwork.</p>
            </div>
            <div className="hd-reviews__grid">
              {[
                {name:'Khalid A.',loc:'Riyadh, Saudi Arabia',img:'https://qllmsoft.com/images/khalid A.webp',text:'"Outstanding React development from a team that clearly understands both the technical and business sides. Delivered everything exactly as scoped, on time, with clean and well-documented code."'},
                {name:'Mohammad I.',loc:'Amman, Jordan',img:'https://qllmsoft.com/images/Muhammad I.webp',text:'"My go-to React development team. QllmSoft consistently delivers high quality code, proactive communication, and a genuine understanding of what the business needs from the frontend. Highly recommended."'},
                {name:'Neil P.',loc:'Cardiff, United Kingdom',img:'https://qllmsoft.com/images/Neil P.webp',text:'"Fantastic React work — fast, clean, and exactly what we specified. The communication throughout was excellent and the team flagged potential issues early before they became problems."'},
                {name:'Fernando M.',loc:'Miramar, United States',img:'https://qllmsoft.com/images/fernandoM.webp',text:'"QllmSoft is the benchmark for React development quality I use to evaluate every other team. Professional, skilled, and genuinely invested in the success of the product they are building."'},
              ].map((r,i)=>(
                <article key={i} className={`hd-review-card animate__animated ${reviewInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.1}s`}} itemScope itemType="https://schema.org/Review">
                  <div className="hd-review-card__stars" aria-label="5 out of 5 stars" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content="5" /><meta itemProp="bestRating" content="5" />★★★★★
                  </div>
                  <p className="hd-review-card__text" itemProp="reviewBody">{r.text}</p>
                  <div className="hd-review-card__author" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <img src={r.img} alt={`${r.name} — verified QllmSoft React developer client from ${r.loc}`} loading="lazy" width="46" height="46" />
                    <div><strong itemProp="name">{r.name}</strong><span>{r.loc} — Freelancer</span></div>
                  </div>
                </article>
              ))}
            </div>
            <div style={{textAlign:'center',marginTop:'28px',display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="https://www.freelancer.com/u/mrprogrmmr" target="_blank" rel="noopener noreferrer" className="hd-btn-outline" aria-label="View QllmSoft React developer reviews on Freelancer">View Freelancer Reviews</a>
              <a href="https://www.upwork.com/freelancers/~0170e20f8803389a86" target="_blank" rel="noopener noreferrer" className="hd-btn-outline" aria-label="Verify QllmSoft on Upwork">Verify Upwork Status</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section csd-faq hd-faq" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <p className="section-eyebrow">Common Questions</p>
            <div className="section-title">
              <h2 id="faq-heading">Frequently Asked Questions — Hire React Developers in Pakistan</h2>
              <p>Everything you need to know before hiring a ReactJS developer from QllmSoft.</p>
            </div>
            <div className="csd-faq__list">{FAQ_DATA.map((faq,i)=><FAQItem key={i} faq={faq} index={i} />)}</div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section hd-cta" aria-labelledby="cta-heading">
          <div className="hd-cta__bg" aria-hidden="true" />
          <div className="container hd-cta__inner">
            <div className="hd-cta__left">
              <p className="section-eyebrow" style={{color:'#edb702',textAlign:'left',margin:'0 0 12px'}}>Start Today</p>
              <h2 id="cta-heading">Ready to Hire Expert React Developers in Pakistan?</h2>
              <p className="hd-cta__desc">Whether you need a dedicated React engineer embedded in your team, a fixed-price React project, or a full offshore React squad — QllmSoft delivers the right developer, on the right timeline, at the right cost.</p>
              <div className="hd-cta__buttons">
                <Link to="/contact" className="hd-btn-primary" aria-label="Hire React developers from QllmSoft Pakistan — contact us now">Hire React Developers Now</Link>
                <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20hire%20a%20React%20developer!" target="_blank" rel="noopener noreferrer" className="hd-btn-whatsapp" aria-label="WhatsApp QllmSoft to discuss hiring a React developer">💬 WhatsApp Us</a>
              </div>
              <div className="hd-cta__perks">
                {['✓ Free consultation','✓ NDA on day one','✓ Onboard in 24–48 hours','✓ Full IP ownership','✓ 30 days post-launch support'].map(p=><span key={p}>{p}</span>)}
              </div>
            </div>
            <aside className="hd-cta__right">
              <div className="hd-cta__contact-card">
                <h3>Quick Contact</h3>
                <a href="mailto:qllmsoft@gmail.com" className="hd-cta__contact-row">📧 qllmsoft@gmail.com</a>
                <a href="https://wa.me/923348229288" target="_blank" rel="noopener noreferrer" className="hd-cta__contact-row" aria-label="WhatsApp QllmSoft">💬 WhatsApp — replies in 5 mins</a>
                <a href="tel:+923348229288" className="hd-cta__contact-row">📞 +92 334 8229288</a>
              </div>
              <nav className="hd-cta__related" aria-label="Related developer hiring pages">
                <p className="hd-cta__related-title">Related</p>
                <Link to="/hire-angular-developers-pakistan">Hire Angular Developers</Link>
                <Link to="/hire-dotnet-developers-pakistan">Hire .NET Developers</Link>
                <Link to="/mobile-app-development">Mobile App Development</Link>
                <Link to="/website-development-services">Web Development</Link>
                <Link to="/outsource-software-development-to-pakistan">Outsource to Pakistan</Link>
              </nav>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};
export default HireReactDevelopers;
