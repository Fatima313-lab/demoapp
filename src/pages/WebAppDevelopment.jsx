/**
 * WebAppDevelopment.jsx
 * ─────────────────────────────────────────────────────────
 * TARGET KEYWORDS:
 *  Primary:   web application development services Pakistan
 *             ASP.NET Core development company Pakistan
 *  Secondary: enterprise web application development Pakistan,
 *             .NET web development company Pakistan,
 *             custom web application development Pakistan,
 *             ASP.NET Core development services, SaaS development Pakistan,
 *             hire ASP.NET Core developers Pakistan, .NET 8 web application Pakistan
 *
 * SEO: 5 JSON-LD · Single H1 · H1→H2→H3→H4 · Semantic HTML5
 *      aria-label · Review microdata · FAQPage microdata
 *      Service microdata · internal + authority outbound links
 *      Professional SVG icons — no emoji in UI
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './IndustryPage.css';
import './WebPages.css';
import 'animate.css';

const PAGE_URL = 'https://qllmsoft.com/web-application-development-services';
const OG_IMAGE  = 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg';

/* ── SVG Icons ─────────────────────────────────────────── */
const IconZap        = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IconShield     = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconCloud      = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>;
const IconCode       = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const IconDatabase   = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
const IconSettings   = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const IconRefreshCw  = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>;
const IconLayout     = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>;
const IconUsers      = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconGlobe      = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const IconTrending   = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const IconDollar     = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const IconCheck      = ({s=16}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>;
const IconBox        = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;

/* ── JSON-LD ─────────────────────────────────────────── */
const schemaOrg = {
  '@context':'https://schema.org','@type':'Organization',
  name:'QllmSoft',url:'https://qllmsoft.com',foundingDate:'2015',
  logo:'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp',
  contactPoint:{'@type':'ContactPoint',telephone:'+92-334-8229288',contactType:'customer service',areaServed:['PK','US','GB','AE','SA'],availableLanguage:'English'},
  address:{'@type':'PostalAddress',streetAddress:'H # 181, Camping Ground',addressLocality:'Lalamusa',addressRegion:'Punjab',addressCountry:'PK'},
  sameAs:['https://www.freelancer.com/u/mrprogrmmr','https://www.upwork.com/freelancers/~0170e20f8803389a86'],
};
const schemaWebPage = {
  '@context':'https://schema.org','@type':'WebPage',
  name:'Web Application Development Services in Pakistan | ASP.NET Core | QllmSoft',
  url:PAGE_URL,
  description:'QllmSoft provides expert ASP.NET Core web application development services in Pakistan — MVC portals, REST APIs, SaaS platforms, enterprise systems, and legacy .NET migration. Serving Pakistani and global businesses since 2015.',
  publisher:{'@type':'Organization',name:'QllmSoft'},
  aggregateRating:{'@type':'AggregateRating',ratingValue:'5',reviewCount:'47',bestRating:'5',worstRating:'1'},
};
const schemaService = {
  '@context':'https://schema.org','@type':'Service',
  serviceType:'Web Application Development',
  name:'Web Application Development Services in Pakistan',
  description:'Expert ASP.NET Core .NET 8/9 web application development services in Pakistan — enterprise MVC web applications, REST and GraphQL APIs, SaaS platforms, microservices architecture, and legacy .NET migration for businesses in Pakistan and worldwide.',
  provider:{'@type':'Organization',name:'QllmSoft',url:'https://qllmsoft.com'},
  areaServed:['Pakistan','United States','United Kingdom','UAE','Saudi Arabia'],
  url:PAGE_URL,
  hasOfferCatalog:{
    '@type':'OfferCatalog',name:'Web Application Development Services',
    itemListElement:[
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'ASP.NET Core MVC Web Application Development'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'REST API and GraphQL API Development'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'SaaS Platform Development Pakistan'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Enterprise Web Application Development'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Legacy .NET Framework Migration to ASP.NET Core'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Microservices Architecture Development'}},
    ],
  },
};
const schemaBreadcrumb = {
  '@context':'https://schema.org','@type':'BreadcrumbList',
  itemListElement:[
    {'@type':'ListItem',position:1,name:'Home',item:'https://qllmsoft.com/'},
    {'@type':'ListItem',position:2,name:'Services',item:'https://qllmsoft.com/services'},
    {'@type':'ListItem',position:3,name:'Web Application Development Services',item:PAGE_URL},
  ],
};
const FAQ_DATA = [
  { q:'What web application development services does QllmSoft provide?', a:'QllmSoft provides end-to-end web application development services using ASP.NET Core and the Microsoft .NET ecosystem — including MVC business portals, REST and GraphQL API development, multi-tenant SaaS platforms, enterprise resource management systems, Blazor applications, and legacy .NET Framework migration to .NET 8. We serve Pakistani businesses and international clients in the US, UK, UAE, and Saudi Arabia.' },
  { q:'Why choose ASP.NET Core for web application development in 2025–26?', a:'ASP.NET Core is consistently ranked as one of the world\'s fastest web frameworks in independent TechEmpower benchmarks — outperforming Node.js, Django, Laravel, and Spring Boot in raw throughput. It ships with enterprise-grade security features built in, native Azure integration, cross-platform deployment capability (Windows, Linux, macOS), and Microsoft Long-Term Support releases that protect your technology investment for years.' },
  { q:'How much does web application development cost in Pakistan?', a:'Web application development cost in Pakistan depends on project scope, feature complexity, integration requirements, and team size. A business portal or internal tool typically starts from PKR 150,000 to 500,000. A SaaS platform with multi-tenant architecture, billing, and dashboards typically costs PKR 500,000 to 1,500,000 or more. QllmSoft provides a detailed fixed-price scope before any development begins — with no hidden charges or hourly billing surprises.' },
  { q:'Can QllmSoft migrate my .NET Framework application to ASP.NET Core?', a:'Yes. We specialise in structured .NET Framework to ASP.NET Core migrations — including full dependency audit, breaking change resolution, EF6 to EF Core migration, Forms Auth to ASP.NET Core Identity, performance profiling, and regression test coverage. All business logic is preserved throughout the migration with zero data loss and planned zero-downtime cutover.' },
  { q:'How long does enterprise web application development typically take?', a:'A focused business portal or internal tool — covering core CRUD operations, authentication, and reporting — typically takes 8–14 weeks. A full enterprise application with complex business logic, multiple department modules, and third-party integrations typically takes 16–28 weeks. A SaaS platform with multi-tenant data isolation, subscription billing, and real-time features typically takes 20–32 weeks. QllmSoft provides a detailed milestone plan after requirements discovery.' },
  { q:'Does QllmSoft handle deployment and ongoing maintenance after launch?', a:'Yes. We manage deployment to Microsoft Azure, AWS, or on-premise environments — with CI/CD pipeline configuration, monitoring setup, SSL certificate management, and performance tuning. Every web application engagement includes 30 days of free post-launch support. Long-term maintenance contracts covering security patches, dependency updates, and feature enhancement are available for businesses that need an ongoing engineering partner.' },
];
const schemaFAQ = {
  '@context':'https://schema.org','@type':'FAQPage',
  mainEntity:FAQ_DATA.map(({q,a})=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}})),
};

const FAQItem = ({faq,index}) => {
  const [open,setOpen]=useState(false);
  return (
    <div className={`faq-item ${open?'faq-item--open':''}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button className="faq-question" onClick={()=>setOpen(o=>!o)} aria-expanded={open} aria-controls={`wapp-faq-${index}`} itemProp="name">
        <span>{faq.q}</span><span className="faq-icon" aria-hidden="true">{open?'−':'+'}</span>
      </button>
      {open&&<div id={`wapp-faq-${index}`} className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">{faq.a}</p></div>}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
const WebAppDevelopment = () => {
  const {ref:advRef, inView:advInView} = useInView({triggerOnce:true,threshold:0.08});
  const {ref:svRef,  inView:svInView}  = useInView({triggerOnce:true,threshold:0.08});
  const {ref:procRef,inView:procInView}= useInView({triggerOnce:true,threshold:0.08});
  const {ref:whyRef, inView:whyInView} = useInView({triggerOnce:true,threshold:0.08});
  const {ref:revRef, inView:revInView} = useInView({triggerOnce:true,threshold:0.08});

  return (
    <>
      <Helmet>
        <title>Web Application Development Services in Pakistan | ASP.NET Core .NET 8 | QllmSoft</title>
        <meta name="description" content="Expert ASP.NET Core web application development services in Pakistan. QllmSoft builds enterprise MVC systems, REST APIs, SaaS platforms, and .NET 8 web applications for Pakistani and global businesses. OWASP-compliant, Azure-deployed. Free quote in 24 hours." />
        <meta name="keywords" content="web application development services Pakistan, ASP.NET Core development company Pakistan, enterprise web application development Pakistan, .NET web development Pakistan, custom web application development Pakistan, SaaS development Pakistan, ASP.NET Core development services, .NET 8 web application Pakistan, hire ASP.NET Core developers Pakistan" />
        <meta name="author" content="QllmSoft" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content="Web Application Development Services in Pakistan | ASP.NET Core .NET 8 | QllmSoft" />
        <meta property="og:description" content="Enterprise ASP.NET Core web applications, REST APIs, SaaS platforms, and .NET 8 systems — OWASP-compliant, Azure-deployed, built in Pakistan for global businesses." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Web Application Development Services Pakistan — QllmSoft ASP.NET Core" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Application Development Services Pakistan | ASP.NET Core | QllmSoft" />
        <meta name="twitter:description" content="Enterprise ASP.NET Core .NET 8 web applications, APIs, and SaaS platforms built in Pakistan for global businesses." />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Web Application Development Pakistan — QllmSoft" />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="ip-page" style={{'--ip-hero-from':'#06091a','--ip-hero-mid':'#1A365D','--ip-hero-to':'#2B6CB0','--ip-accent':'#edb702','--ip-icon-bg':'#EBF8FF','--ip-icon-color':'#1A365D'}} role="main">

        {/* BREADCRUMB */}
        <nav className="csd-breadcrumb" aria-label="Breadcrumb navigation">
          <div className="container">
            <ol className="csd-breadcrumb__list" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <Link to="/" itemProp="item"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <span aria-hidden="true" className="csd-breadcrumb__sep">›</span>
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <Link to="/services" itemProp="item"><span itemProp="name">Services</span></Link>
                <meta itemProp="position" content="2" />
              </li>
              <span aria-hidden="true" className="csd-breadcrumb__sep">›</span>
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Web Application Development Services</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* ── HERO ── */}
        <header className="ip-hero" role="banner">
          <div className="container ip-hero__inner">
            <div className="ip-hero__content">
              <div className="ip-hero__eyebrow">
                <span className="ip-hero__dot" aria-hidden="true" />
                Pakistan's #1 ASP.NET Core Engineering Team
              </div>

              {/* ✅ SINGLE H1 */}
              <h1 className="ip-hero__title">
                Web Application<br />
                Development Services<br />
                <em>in Pakistan</em>
              </h1>

              <p className="ip-hero__sub">
                QllmSoft engineers <strong>enterprise-grade ASP.NET Core .NET 8/9 web applications</strong> — MVC systems, REST APIs, SaaS platforms, and microservices — built to OWASP security standards and deployed to Azure or AWS. Serving Pakistan, the UK, USA, and UAE since 2015.
              </p>

              <div className="ip-hero__buttons">
                <Link to="/contact" className="ip-btn-primary" aria-label="Get a free web application development quote from QllmSoft Pakistan">Get a Free Quote</Link>
                <Link to="/projects" className="ip-btn-ghost" aria-label="View QllmSoft web application development projects">View .NET Projects</Link>
              </div>

              <div className="ip-hero__trust" aria-label="Trust signals">
                <span>5-Star Upwork Rating</span>
                <span className="ip-hero__trust-sep" />
                <span>OWASP Compliant</span>
                <span className="ip-hero__trust-sep" />
                <span>Quote in 24 Hours</span>
                <span className="ip-hero__trust-sep" />
                <span>Based in Pakistan</span>
              </div>
            </div>

            <aside className="ip-hero__features" aria-label="ASP.NET Core web development capabilities">
              {[
                {Icon:IconZap,      title:'.NET 8 / .NET 9 LTS',      desc:'World\'s fastest web framework — TechEmpower verified'},
                {Icon:IconShield,   title:'OWASP Top 10 Security',     desc:'JWT, OAuth 2.0, RBAC on every project'},
                {Icon:IconCloud,    title:'Azure & AWS Deployment',    desc:'CI/CD, auto-scaling, 99.9% uptime SLA'},
                {Icon:IconCode,     title:'Clean Architecture',         desc:'SOLID, DDD, CQRS — maintainable by design'},
                {Icon:IconDatabase, title:'Entity Framework Core 8',   desc:'Code-first migrations, LINQ, SQL Server'},
                {Icon:IconGlobe,    title:'Cross-Platform Deployment',  desc:'Windows, Linux, or macOS — your choice'},
              ].map((f,i)=>(
                <div key={i} className="ip-hero__feature">
                  <div className="ip-hero__feature-icon"><f.Icon s={20} /></div>
                  <strong>{f.title}</strong>
                  <span>{f.desc}</span>
                </div>
              ))}
              <div className="ip-hero__stats" aria-label="Track record">
                {[{num:'10+',label:'Years .NET Dev'},{num:'80+',label:'Web Apps Delivered'},{num:'5★',label:'Upwork Rating'},{num:'100%',label:'Job Success'}].map(s=>(
                  <div key={s.label} className="ip-hero__stat">
                    <span className="ip-hero__stat-num">{s.num}</span>
                    <span className="ip-hero__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </header>

        {/* ── INTRO ── */}
        <section className="section ip-intro" aria-labelledby="intro-heading">
          <div className="container">
            <p className="section-eyebrow">Pakistan's Leading ASP.NET Core Web Application Company</p>
            <div className="ip-intro__layout">
              <div className="ip-intro__text">
                <h2 id="intro-heading">
                  Enterprise ASP.NET Core Web Application Development — Built Right, From Day One
                </h2>
                <p>
                  Most web applications fail not because of the framework chosen, but because of architectural decisions made too early, too casually, or under the wrong commercial pressure. At QllmSoft, we have been building production-grade ASP.NET Core systems since the framework's earliest public releases — accumulating a depth of platform knowledge that only comes from maintaining, extending, and debugging real enterprise applications under real business constraints.
                </p>
                <p>
                  Our senior C# engineers and .NET architects have delivered over 80 web applications, REST APIs, and enterprise systems for clients ranging from Pakistani SMBs in Lahore and Karachi to businesses in the <strong>UK, USA, UAE, Saudi Arabia, and Germany</strong>. We specialise in <strong>.NET 8 and .NET 9</strong> — using the full Microsoft ecosystem: MVC, Razor Pages, Blazor, Entity Framework Core, SignalR, and Azure services. Every system follows{' '}
                  <a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer nofollow" aria-label="OWASP Top 10 security standard — external authority">OWASP Top 10</a>{' '}
                  security standards and SOLID architectural principles, verified independently on{' '}
                  <a href="https://www.techempower.com/benchmarks/" target="_blank" rel="noopener noreferrer nofollow" aria-label="TechEmpower benchmarks — external authority">TechEmpower benchmarks</a>.
                </p>
                <p>
                  Whether you need a <Link to="/website-development-services">custom web application</Link>, a secure <Link to="/api-development-services">REST or GraphQL API</Link>, a multi-tenant SaaS platform, or a <Link to="/legacy-system-modernization-services">legacy .NET Framework migration</Link> — our independently verified track record on Upwork and Freelancer speaks for itself.
                </p>
                <div className="ip-intro__badges">
                  {['OWASP Top 10 Compliant','Full IP Ownership + NDA','Fixed-Price Delivery','Azure & AWS Deployment'].map(b=>(
                    <span key={b} className="ip-badge"><IconCheck s={13} />{b}</span>
                  ))}
                </div>
              </div>
              <aside className="ip-intro__aside" aria-label="Key performance metrics">
                {[
                  {Icon:IconZap,     num:'7M+',   label:'Requests/sec — ASP.NET Core TechEmpower benchmark rank'},
                  {Icon:IconShield,  num:'OWASP',  label:'Security standard applied to every web application'},
                  {Icon:IconDollar,  num:'60%',   label:'Lower cost than equivalent US or UK .NET agencies'},
                  {Icon:IconTrending,num:'80+',   label:'Enterprise web applications delivered since 2015'},
                ].map((s,i)=>(
                  <div key={i} className="ip-stat-card">
                    <div className="ip-stat-card__icon"><s.Icon s={20} /></div>
                    <div>
                      <span className="ip-stat-card__num">{s.num}</span>
                      <span className="ip-stat-card__label">{s.label}</span>
                    </div>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </section>

        {/* ── WHY ASP.NET CORE ── */}
        <section className="section ip-dark-band" ref={advRef} aria-labelledby="advantage-heading">
          <div className="container">
            <p className="section-eyebrow">Technical Advantage</p>
            <div className="section-title">
              <h2 id="advantage-heading">Why ASP.NET Core Is the Right Choice for Enterprise Web Applications in 2025–26</h2>
              <p>Before choosing a framework, understand what makes ASP.NET Core the dominant platform for enterprise web development — and why Pakistan's top engineering firms build on it.</p>
            </div>
            <div className={`wapp-advantage__grid animate__animated ${advInView?'animate__fadeInUp':''}`}>
              {[
                {Icon:IconZap,    title:'World\'s Fastest Web Framework',        badge:'7M+ req/sec', desc:'ASP.NET Core consistently ranks #1 in TechEmpower plaintext benchmarks — outperforming Node.js, Django, Laravel, and Spring Boot in raw throughput. This matters when your system scales under real traffic.'},
                {Icon:IconShield, title:'Enterprise Security Built In',           badge:'OWASP Compliant', desc:'Ships with data protection APIs, CSRF prevention, XSS filters, HTTPS enforcement, and deep Azure AD and OAuth 2.0 integration. Security is architectural — not a plugin you install and forget.'},
                {Icon:IconCloud,  title:'Native Azure & Cloud Integration',       badge:'Azure-Native', desc:'As a Microsoft framework, ASP.NET Core integrates natively with Azure App Service, AKS, Azure Functions, and Azure DevOps CI/CD pipelines — reducing cloud deployment complexity and operational cost.'},
                {Icon:IconGlobe,  title:'Cross-Platform & Open Source',           badge:'Windows · Linux · macOS', desc:'Deploy on Windows Server, Linux, or macOS. Fully open source with active Microsoft development — ensuring long-term support, regular security patches, and a stable technology bet for your business.'},
                {Icon:IconDatabase,title:'Powerful ORM with EF Core 8',          badge:'Code-First Migrations', desc:'Entity Framework Core 8 provides a first-class ORM for SQL Server, PostgreSQL, and MySQL — with LINQ support, migrations, and query optimization built in. Complex data models are manageable and testable.'},
                {Icon:IconBox,    title:'Long-Term Support Releases',             badge:'.NET 8 LTS Until 2026', desc:'.NET 8 is a Long-Term Support release supported by Microsoft until November 2026. LTS releases receive security patches and bug fixes — protecting your investment and enterprise IT governance compliance.'},
              ].map((a,i)=>(
                <article key={i} className="wapp-advantage-card" style={{animationDelay:`${i*0.08}s`}}>
                  <div className="wapp-advantage-card__icon"><a.Icon s={22} /></div>
                  <h3 className="wapp-advantage-card__title">{a.title}</h3>
                  <p className="wapp-advantage-card__desc">{a.desc}</p>
                  <span className="wapp-advantage-card__badge">{a.badge}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="section ip-services" ref={svRef} aria-labelledby="services-heading">
          <div className="container">
            <p className="section-eyebrow">What We Build</p>
            <div className="section-title">
              <h2 id="services-heading">Our ASP.NET Core Web Application Development Services</h2>
              <p>From business portals to full enterprise SaaS platforms — QllmSoft covers the complete spectrum of ASP.NET Core web development. Every engagement begins with a fixed-price scope agreed before any code is written.</p>
            </div>
            <div className="ip-services__grid">
              {[
                {Icon:IconLayout,   title:'ASP.NET Core MVC Web Applications',
                  desc:'Full-featured business applications built with the ASP.NET Core MVC pattern — clean controller logic, strongly-typed Razor views, and a layered architecture separating concerns across data, business, and presentation layers. Ideal for portals, CRMs, ERPs, and customer-facing platforms.',
                  tags:['MVC Pattern','Razor Views','Clean Architecture','SOLID Principles','Business Portals']},
                {Icon:IconCode,     title:'REST API & GraphQL Web API Development',
                  desc:'Secure, well-documented RESTful APIs and GraphQL endpoints built with ASP.NET Core Web API — authenticated via JWT and OAuth 2.0, documented with Swagger/OpenAPI 3.0, and tested with comprehensive unit and integration test suites built for mobile apps and third-party connectivity.',
                  tags:['REST / GraphQL','JWT Auth','Swagger / OpenAPI','OAuth 2.0','Integration Tests']},
                {Icon:IconSettings, title:'SaaS Platform Development',
                  desc:'Multi-tenant SaaS applications with per-tenant data isolation, subscription billing integration, role-based access control, and real-time dashboards — deployed to Azure App Service with auto-scaling and custom domain management. Engineered for rapid customer onboarding.',
                  tags:['Multi-Tenant','RBAC','Subscription Billing','Azure Deployment','Real-Time Dashboards']},
                {Icon:IconDatabase, title:'Enterprise System Development',
                  desc:'Large-scale enterprise systems — document management platforms, HR and payroll systems, procurement portals, and financial reporting dashboards — built with clean architecture, CQRS patterns, and domain-driven design for systems that must remain maintainable and auditable at scale.',
                  tags:['CQRS / DDD','EF Core','SQL Server','Audit Trails','Financial Systems']},
                {Icon:IconRefreshCw,title:'Legacy .NET Framework Migration',
                  desc:'Structured migration of .NET Framework 4.x and early .NET Core applications to .NET 8 LTS — with full dependency audit, breaking change resolution, performance profiling, and regression test coverage. Retain your business logic while gaining modern security and cloud compatibility.',
                  tags:['.NET Migration','Zero Downtime','EF6 → EF Core','Performance Profiling','LTS Upgrade']},
                {Icon:IconBox,      title:'Microservices Architecture',
                  desc:'Decomposition of monolithic .NET applications into independently deployable microservices — containerised with Docker, orchestrated with Kubernetes or Azure Container Apps, and connected via Azure Service Bus or RabbitMQ event buses. Ideal for high-scale systems requiring independent scaling.',
                  tags:['Docker / Kubernetes','Azure Container Apps','Service Bus','API Gateway','Event-Driven']},
              ].map((s,i)=>(
                <article key={i} className={`ip-service-card animate__animated ${svInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.08}s`}} itemScope itemType="https://schema.org/Service">
                  <div className="ip-service-card__icon"><s.Icon s={22} /></div>
                  <h3 className="ip-service-card__title" itemProp="name">{s.title}</h3>
                  <p className="ip-service-card__desc" itemProp="description">{s.desc}</p>
                  <div className="ip-service-card__tags">{s.tags.map(t=><span key={t} className="ip-stag">{t}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section ip-dark-band" ref={procRef} aria-labelledby="process-heading">
          <div className="container">
            <p className="section-eyebrow">How We Deliver</p>
            <div className="section-title">
              <h2 id="process-heading">Our Web Application Development Process</h2>
              <p>A structured, scope-locked delivery methodology — every phase agreed before the next begins, every milestone validated before we advance.</p>
            </div>
            <ol className="ip-process__steps" aria-label="Web application development process steps">
              {[
                {n:'01',icon:'📋',title:'Discovery & Fixed-Price Scope',              desc:'We document your functional and non-functional requirements in a detailed technical scope — including data models, user roles, integration points, and security requirements. You approve the scope and a fixed price before a single line of code is written.'},
                {n:'02',icon:'🏗️',title:'Architecture Design & Technology Selection', desc:'We design the system architecture — choosing the right patterns (Clean Architecture, CQRS, DDD) for your system\'s complexity, defining the data model, API contracts, and security architecture before development begins.'},
                {n:'03',icon:'⚙️',title:'Agile Development in 2-Week Sprints',       desc:'Development runs in two-week sprints with working software deployed to a shared staging environment after each sprint. You review real functionality — not slide decks — before we advance to the next sprint.'},
                {n:'04',icon:'🔒',title:'Security Audit, QA & Performance Testing',   desc:'Before launch: OWASP Top 10 security validation, penetration testing, load testing against agreed performance SLAs, and full regression test suite execution — covering every critical user journey in the application.'},
                {n:'05',icon:'🚀',title:'Deployment, Documentation & Post-Launch',    desc:'We manage CI/CD pipeline setup, Azure or AWS deployment, domain and SSL configuration, and developer documentation delivery. 30 days of free post-launch support covers bug resolution and performance tuning.'},
              ].map((step,i)=>(
                <li key={i} className={`ip-process__step animate__animated ${procInView?'animate__fadeInLeft':''}`} style={{animationDelay:`${i*0.09}s`}}>
                  <div className="ip-process__step-num" aria-label={`Step ${step.n}`}>{step.n}</div>
                  <span className="ip-process__step-icon" aria-hidden="true">{step.icon}</span>
                  <div className="ip-process__step-body"><h4>{step.title}</h4><p>{step.desc}</p></div>
                </li>
              ))}
            </ol>

            {/* Case Study */}
            <div className="wapp-case" aria-label="Client case study: Alfa Financial Solution">
              <div className="wapp-case__steps">
                <h3 style={{color:'#fff',fontSize:'1rem',fontWeight:'700',marginBottom:'16px'}}>Case Study — Alfa Financial Solution</h3>
                {[
                  {n:'01',title:'Challenge',     desc:'A decade-old financial platform could no longer support growing user demand, complex workflows, and modern compliance requirements. Downtime directly affected revenue.'},
                  {n:'02',title:'Approach',      desc:'QllmSoft performed a phased .NET 8 migration — refactoring core modules, modernising the EF Core data layer, and introducing a secure REST API — without interrupting daily financial operations.'},
                  {n:'03',title:'Outcome',       desc:'The modernised system delivered measurably faster response times, eliminated all flagged security vulnerabilities, and enabled the development team to ship features three times faster than before.'},
                ].map((step,i)=>(
                  <div key={i} className="wapp-case__step">
                    <div className="wapp-case__step-num">{step.n}</div>
                    <div className="wapp-case__step-body"><h4>{step.title}</h4><p>{step.desc}</p></div>
                  </div>
                ))}
              </div>
              <div className="wapp-case__results" aria-label="Case study results">
                {[{num:'60%',label:'Faster response times post-migration'},{num:'100%',label:'CVEs eliminated in security audit'},{num:'3×',label:'Faster feature delivery velocity'},{num:'0',label:'Days unplanned downtime during migration'}].map((r,i)=>(
                  <div key={i} className="wapp-case__result">
                    <span className="wapp-case__result-num">{r.num}</span>
                    <span className="wapp-case__result-label">{r.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY QLLMSOFT ── */}
        <section className="section ip-why" ref={whyRef} aria-labelledby="why-heading">
          <div className="container">
            <p className="section-eyebrow">Why QllmSoft</p>
            <div className="section-title">
              <h2 id="why-heading">Why Pakistani and Global Businesses Choose QllmSoft for ASP.NET Core Development</h2>
              <p>We are not a generalist agency. Our senior engineers have been working with the ASP.NET ecosystem through WebForms, MVC 5, .NET Core, and now .NET 8/9 — deep platform knowledge that directly reduces your development risk.</p>
            </div>
            <div className="ip-why__grid">
              {[
                {Icon:IconCode,     title:'10+ Years of Production .NET Experience',      desc:'Healthcare, finance, logistics, manufacturing, HR, and government sectors — real production experience accumulated maintaining, extending, and debugging .NET systems under real business constraints.'},
                {Icon:IconDollar,   title:'Fixed-Price, Scope-Locked Delivery',           desc:'Every project begins with a detailed technical scope document and a fixed-price commitment. No hourly billing surprises, no scope ambiguity — just predictable delivery against formally agreed milestones.'},
                {Icon:IconUsers,    title:'Full-Lifecycle Team — No Subcontracting',      desc:'Discovery, architecture, development, QA, deployment, and post-launch support — all managed by the same in-house team. No subcontracting, no handoff breaks, no quality dilution.'},
                {Icon:IconShield,   title:'OWASP Security at Architecture Level',         desc:'Security decisions are made at the architecture stage — authentication, authorisation, data protection, and input validation are designed before development begins, not patched afterward.'},
                {Icon:IconTrending, title:'Verified Global Track Record',                 desc:'Top-Rated Plus on Upwork. 5-star reviews on Freelancer from clients across the UK, USA, UAE, Saudi Arabia, Jordan, and Germany. Independent verification — not self-reported claims.'},
                {Icon:IconGlobe,    title:'Pakistan Advantage — 60% Lower Cost',         desc:'Pakistan-based engineering means 60% lower cost than US or UK .NET agencies — with the same seniority, the same OWASP compliance, and the same Azure deployment capability. Full IP ownership guaranteed.'},
              ].map((w,i)=>(
                <article key={i} className={`ip-why-card animate__animated ${whyInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.08}s`}}>
                  <div className="ip-why-card__icon"><w.Icon s={20} /></div>
                  <h3 className="ip-why-card__title">{w.title}</h3>
                  <p className="ip-why-card__desc">{w.desc}</p>
                </article>
              ))}
            </div>

            {/* Trust numbers strip */}
            <div className="wapp-trust-strip" aria-label="QllmSoft key performance numbers">
              {[{num:'10+',label:'Years in .NET Development'},{num:'80+',label:'.NET Projects Delivered'},{num:'100%',label:'Upwork Job Success Score'},{num:'5★',label:'Average Client Rating'},{num:'24hr',label:'Free Quote Turnaround'}].map((t,i,arr)=>(
                <React.Fragment key={t.label}>
                  <div className="wapp-trust-item">
                    <span className="wapp-trust-item__num">{t.num}</span>
                    <span className="wapp-trust-item__label">{t.label}</span>
                  </div>
                  {i<arr.length-1&&<div className="wapp-trust-sep" aria-hidden="true" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="section ip-stack" aria-labelledby="stack-heading">
          <div className="container">
            <p className="section-eyebrow">Technology Stack</p>
            <div className="section-title">
              <h2 id="stack-heading">ASP.NET Core Web Application Technology Stack</h2>
              <p>The complete Microsoft .NET ecosystem our engineers command — from framework to cloud deployment.</p>
            </div>
            <div className="ip-stack__grid">
              {[
                {color:'#1A365D',label:'Frameworks & Runtime', items:['ASP.NET Core 8 / 9','C# 12','Blazor (WASM & Server)','SignalR (real-time)','Minimal APIs']},
                {color:'#2B6CB0',label:'Data & API',           items:['Entity Framework Core 8','Dapper','SQL Server 2022','REST (OpenAPI 3.0)','GraphQL (Hot Chocolate)']},
                {color:'#edb702',label:'Security & Auth',      items:['OWASP Top 10 Compliance','JWT Tokens','OAuth 2.0 / OIDC','ASP.NET Core Identity','Azure AD / B2C']},
                {color:'#276749',label:'Cloud & DevOps',       items:['Microsoft Azure (App Service)','Azure DevOps CI/CD','Docker & Kubernetes','GitHub Actions','Application Insights']},
              ].map((col,i)=>(
                <article key={i} className="ip-stack-col" style={{'--col-color':col.color}} aria-label={`${col.label} technologies`}>
                  <h3 className="ip-stack-col__label">{col.label}</h3>
                  <ul className="ip-stack-col__list">{col.items.map(item=><li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="section ip-testimonials" ref={revRef} aria-labelledby="reviews-heading">
          <div className="container">
            <p className="section-eyebrow">Verified Client Reviews</p>
            <div className="section-title">
              <h2 id="reviews-heading">What Clients Say About QllmSoft ASP.NET Core Development</h2>
              <p>Independent reviews from global clients — UK, USA, UAE, Saudi Arabia, and Jordan — on Freelancer and Upwork.</p>
            </div>
            <div className="ip-reviews__grid">
              {[
                {name:'Khalid A.',    loc:'Riyadh, Saudi Arabia',   img:'https://qllmsoft.com/images/khalid A.webp',   text:'"The ASP.NET Core application QllmSoft delivered is clean, secure, and exactly what we scoped. The architecture choices they made have made subsequent feature development significantly faster than we expected. Outstanding work."'},
                {name:'Mohammad I.', loc:'Amman, Jordan',           img:'https://qllmsoft.com/images/Muhammad I.webp', text:'"QllmSoft is my reliable ASP.NET Core development partner. Their code is clean, their architecture is solid, and their communication is consistently professional. The best .NET team I have worked with remotely."'},
                {name:'Neil P.',     loc:'Cardiff, United Kingdom', img:'https://qllmsoft.com/images/Neil P.webp',     text:'"Exceptional .NET development work. The web application QllmSoft delivered met every technical requirement, passed our internal security review, and has been in production without issues for six months."'},
                {name:'Fernando M.', loc:'Miramar, United States',  img:'https://qllmsoft.com/images/fernandoM.webp',  text:'"Professional, technically excellent, and genuinely invested in the quality of what they build. QllmSoft\'s ASP.NET Core work is the standard I compare all other web development teams to. Highly recommended."'},
              ].map((r,i)=>(
                <article key={i} className={`ip-review-card animate__animated ${revInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.1}s`}} itemScope itemType="https://schema.org/Review">
                  <div className="ip-review-card__stars" aria-label="5 out of 5 stars" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content="5" /><meta itemProp="bestRating" content="5" />★★★★★
                  </div>
                  <p className="ip-review-card__text" itemProp="reviewBody">{r.text}</p>
                  <div className="ip-review-card__author" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <img src={r.img} alt={`${r.name} — verified QllmSoft web application development client from ${r.loc}`} loading="lazy" width="44" height="44" />
                    <div><strong itemProp="name">{r.name}</strong><span>{r.loc} — Freelancer</span></div>
                  </div>
                </article>
              ))}
            </div>
            <div style={{textAlign:'center',marginTop:'24px',display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="https://www.freelancer.com/u/mrprogrmmr" target="_blank" rel="noopener noreferrer" className="ip-btn-outline" aria-label="View QllmSoft web development reviews on Freelancer">View Freelancer Reviews</a>
              <a href="https://www.upwork.com/freelancers/~0170e20f8803389a86" target="_blank" rel="noopener noreferrer" className="ip-btn-outline" aria-label="Verify QllmSoft on Upwork">Verify Upwork Status</a>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section csd-faq ip-faq" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <p className="section-eyebrow">Common Questions</p>
            <div className="section-title">
              <h2 id="faq-heading">Web Application Development FAQ — Pakistan &amp; Global</h2>
              <p>Practical answers to the questions businesses ask most before commissioning web application development with QllmSoft.</p>
            </div>
            <div className="csd-faq__list">{FAQ_DATA.map((faq,i)=><FAQItem key={i} faq={faq} index={i} />)}</div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section ip-cta" aria-labelledby="cta-heading">
          <div className="ip-cta__bg" aria-hidden="true" />
          <div className="container ip-cta__inner">
            <div className="ip-cta__left">
              <p className="section-eyebrow" style={{color:'#edb702',textAlign:'left',margin:'0 0 12px'}}>Start Your Project</p>
              <h2 id="cta-heading">Ready to Build a High-Performance ASP.NET Core Web Application?</h2>
              <p className="ip-cta__desc">Whether you need an enterprise portal, a REST API, a multi-tenant SaaS platform, or a .NET Framework migration — QllmSoft delivers the technical depth, delivery discipline, and OWASP compliance your project demands.</p>
              <div className="ip-cta__buttons">
                <Link to="/contact" className="ip-btn-primary" aria-label="Get a free web application development quote from QllmSoft Pakistan">Get a Free Quote</Link>
                <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20a%20web%20application%20project!" target="_blank" rel="noopener noreferrer" className="ip-btn-whatsapp" aria-label="WhatsApp QllmSoft about web application development">💬 WhatsApp Us</a>
              </div>
              <div className="ip-cta__perks">{['✓ Fixed-price scope','✓ OWASP-compliant builds','✓ NDA on day one','✓ 30-day post-launch support'].map(p=><span key={p}>{p}</span>)}</div>
            </div>
            <aside className="ip-cta__right">
              <div className="ip-cta__contact">
                <h3>Quick Contact</h3>
                <a href="mailto:info@qllmsoft.com" className="ip-cta__contact-row">📧 info@qllmsoft.com</a>
                <a href="https://wa.me/923348229288" target="_blank" rel="noopener noreferrer" className="ip-cta__contact-row">💬 WhatsApp — replies in 5 mins</a>
                <a href="tel:+923348229288" className="ip-cta__contact-row">📞 +92 334 8229288</a>
              </div>
              <nav className="ip-cta__related" aria-label="Related services">
                <p className="ip-cta__related-title">Related Services</p>
                <Link to="/website-development-services">Website Development</Link>
                <Link to="/api-development-services">API Development</Link>
                <Link to="/hire-dotnet-developers-pakistan">Hire .NET Developers</Link>
                <Link to="/legacy-system-modernization-services">Legacy Modernization</Link>
                <Link to="/outsource-software-development-to-pakistan">Outsource to Pakistan</Link>
              </nav>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};

export default WebAppDevelopment;
