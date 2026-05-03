/**
 * LegacyModernization.jsx
 * TARGET KEYWORDS:
 *  Primary:   legacy system modernization services
 *             legacy system modernization Pakistan
 *  Secondary: legacy application modernization, .NET framework migration ASP.NET Core,
 *             cloud migration services Pakistan, application refactoring services,
 *             legacy software upgrade services, monolith to microservices Pakistan,
 *             legacy system migration services
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './IndustryPage.css';
import 'animate.css';

const PAGE_URL = 'https://qllmsoft.com/legacy-system-modernization-services';
const OG_IMAGE  = 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg';

const IconRefreshCw = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>;
const IconCloud     = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>;
const IconCode      = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const IconSettings  = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const IconShield    = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconLayout    = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>;
const IconDatabase  = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
const IconTrending  = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const IconAlertTriangle=({s=24})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
const IconDollarSign=({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const IconCheck     = ({s=16}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>;

const schemaOrg = { '@context':'https://schema.org','@type':'Organization',name:'QllmSoft',url:'https://qllmsoft.com',foundingDate:'2015',logo:'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp',contactPoint:{'@type':'ContactPoint',telephone:'+92-334-8229288',contactType:'customer service',areaServed:['PK','US','GB','AE','SA'],availableLanguage:'English'},address:{'@type':'PostalAddress',streetAddress:'H # 181, Camping Ground',addressLocality:'Lalamusa',addressRegion:'Punjab',addressCountry:'PK'},sameAs:['https://www.freelancer.com/u/mrprogrmmr','https://www.upwork.com/freelancers/~0170e20f8803389a86'] };
const schemaService = { '@context':'https://schema.org','@type':'Service',serviceType:'Legacy System Modernization',name:'Legacy System Modernization Services',description:'QllmSoft provides end-to-end legacy system modernization services — application re-architecture, cloud migration, .NET framework to ASP.NET Core migration, database modernization, UI/UX upgrades, and ongoing optimization for enterprises and SMBs worldwide.',provider:{'@type':'Organization',name:'QllmSoft',url:'https://qllmsoft.com'},areaServed:['Pakistan','United States','United Kingdom','UAE','Saudi Arabia'],url:PAGE_URL };
const schemaBreadcrumb = { '@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://qllmsoft.com/'},{'@type':'ListItem',position:2,name:'Services',item:'https://qllmsoft.com/services'},{'@type':'ListItem',position:3,name:'Legacy System Modernization Services',item:PAGE_URL}] };
const FAQ_DATA = [
  {q:'What is legacy system modernization and why does it matter?',a:'Legacy system modernization is the process of upgrading outdated software applications, infrastructure, or technology stacks to meet current performance, security, scalability, and integration requirements. Rather than rebuilding everything from scratch, modernization preserves valuable business logic while replacing the technical foundation — eliminating security vulnerabilities, reducing maintenance costs, and enabling cloud adoption, API connectivity, and modern user experience.'},
  {q:'How do you modernize a legacy system without disrupting live operations?',a:'We use a phased modernization approach — analysing the system first, modernizing non-critical modules before core components, maintaining parallel operation during transition periods, and using feature flags and staged rollouts to minimize risk. Every modernization engagement includes a rollback plan and is executed during lower-traffic windows to protect operational continuity.'},
  {q:'What is the difference between refactoring, re-platforming, and rebuilding a legacy system?',a:'Refactoring improves the internal code structure without changing external behaviour — ideal for systems with sound business logic but poor code quality. Re-platforming moves the application to a new infrastructure or framework with targeted improvements, balancing cost and impact. Rebuilding redesigns the application from scratch using modern architecture — justified when the legacy system fundamentally cannot support future business needs. QllmSoft recommends the right approach after a thorough assessment of your system\'s technical debt, business criticality, and modernization goals.'},
  {q:'Can you migrate our .NET Framework application to ASP.NET Core?',a:'Yes. We specialise in .NET Framework to ASP.NET Core migrations — assessing compatibility, refactoring controllers and data access layers, migrating authentication from Forms Auth to ASP.NET Core Identity, updating third-party dependencies, and implementing CI/CD pipelines for the modernized application. We preserve all business logic throughout the migration with zero data loss.'},
  {q:'How long does legacy system modernization typically take?',a:'A focused re-platforming engagement — for example, migrating a .NET Framework web application to ASP.NET Core with cloud deployment — typically takes 8–16 weeks. A full re-architecture from monolith to microservices, including API design, service decomposition, and infrastructure migration, typically takes 20–36 weeks depending on system complexity. We provide a detailed timeline estimate following the initial assessment.'},
  {q:'What ROI can we expect from legacy system modernization?',a:'Businesses typically see 30–60% reductions in annual maintenance costs within 12 months of modernization, alongside significant improvements in development velocity (new features shipped faster), system performance (faster response times and higher availability), and security posture (elimination of unpatched vulnerability exposure). The exact ROI depends on the current maintenance burden and the modernization scope — which we calculate during discovery.'},
];
const schemaFAQ = { '@context':'https://schema.org','@type':'FAQPage',mainEntity:FAQ_DATA.map(({q,a})=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}})) };
const schemaWebPage = { '@context':'https://schema.org','@type':'WebPage',name:'Legacy System Modernization Services | Secure & Scalable Software Upgrades | QllmSoft',url:PAGE_URL,description:'QllmSoft provides legacy system modernization services — application re-architecture, cloud migration, .NET migration, database modernization, and UI/UX upgrades for enterprises and SMBs worldwide.',publisher:{'@type':'Organization',name:'QllmSoft'},aggregateRating:{'@type':'AggregateRating',ratingValue:'5',reviewCount:'47',bestRating:'5',worstRating:'1'} };

const FAQItem = ({faq,index}) => {
  const [open,setOpen]=useState(false); const id=`leg-faq-${index}`;
  return (
    <div className={`faq-item ${open?'faq-item--open':''}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button className="faq-question" onClick={()=>setOpen(o=>!o)} aria-expanded={open} aria-controls={id} itemProp="name"><span>{faq.q}</span><span className="faq-icon" aria-hidden="true">{open?'−':'+'}</span></button>
      {open&&<div id={id} className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">{faq.a}</p></div>}
    </div>
  );
};

const LegacyModernization = () => {
  const {ref:warnRef,inView:warnInView}=useInView({triggerOnce:true,threshold:0.08});
  const {ref:svRef,inView:svInView}=useInView({triggerOnce:true,threshold:0.08});
  const {ref:approachRef,inView:approachInView}=useInView({triggerOnce:true,threshold:0.08});
  const {ref:procRef,inView:procInView}=useInView({triggerOnce:true,threshold:0.08});
  const {ref:whyRef,inView:whyInView}=useInView({triggerOnce:true,threshold:0.08});
  const {ref:revRef,inView:revInView}=useInView({triggerOnce:true,threshold:0.08});

  return (
    <>
      <Helmet>
        <title>Legacy System Modernization Services | Cloud Migration & .NET Upgrade | QllmSoft</title>
        <meta name="description" content="QllmSoft provides expert legacy system modernization services — application re-architecture, cloud migration, .NET Framework to ASP.NET Core migration, monolith to microservices, database modernization, and UI/UX upgrades. Serving enterprises and SMBs worldwide. Free assessment." />
        <meta name="keywords" content="legacy system modernization services, legacy application modernization, legacy system modernization Pakistan, .NET framework migration ASP.NET Core, cloud migration services, application refactoring services, legacy software upgrade services, monolith to microservices, legacy system migration, legacy system re-architecture" />
        <meta name="author" content="QllmSoft" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" /><meta property="og:url" content={PAGE_URL} /><meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content="Legacy System Modernization Services | Cloud Migration & .NET Upgrade | QllmSoft" />
        <meta property="og:description" content="Expert legacy system modernization — application re-architecture, cloud migration, .NET upgrade, database modernization. Zero-disruption, phased approach for enterprises and SMBs." />
        <meta property="og:image" content={OG_IMAGE} /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" /><meta property="og:image:alt" content="Legacy System Modernization Services — QllmSoft" /><meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="Legacy System Modernization Services | QllmSoft" /><meta name="twitter:description" content="Application re-architecture, cloud migration, .NET upgrade, and database modernization — zero disruption, phased delivery." /><meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="ip-page" style={{'--ip-hero-from':'#1a0e3d','--ip-hero-mid':'#2d1b6e','--ip-hero-to':'#1A365D','--ip-accent':'#edb702','--ip-icon-bg':'#EBF8FF','--ip-icon-color':'#1A365D'}} role="main">

        {/* BREADCRUMB */}
        <nav className="csd-breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <ol className="csd-breadcrumb__list" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem"><Link to="/" itemProp="item"><span itemProp="name">Home</span></Link><meta itemProp="position" content="1"/></li>
              <span aria-hidden="true" className="csd-breadcrumb__sep">›</span>
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem"><Link to="/services" itemProp="item"><span itemProp="name">Services</span></Link><meta itemProp="position" content="2"/></li>
              <span aria-hidden="true" className="csd-breadcrumb__sep">›</span>
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem"><span itemProp="name" aria-current="page">Legacy System Modernization Services</span><meta itemProp="position" content="3"/></li>
            </ol>
          </div>
        </nav>

        {/* HERO */}
        <header className="ip-hero" role="banner">
          <div className="container ip-hero__inner">
            <div className="ip-hero__content">
              <div className="ip-hero__eyebrow"><span className="ip-hero__dot" aria-hidden="true"/>Modernize Without Disruption — Enterprise &amp; SMB</div>
              <h1 className="ip-hero__title">Legacy System<br/>Modernization Services<br/><em>for Future-Ready Software</em></h1>
              <p className="ip-hero__sub">We transform outdated, costly legacy systems into <strong>high-performance, cloud-ready applications</strong> — without disrupting your business operations. From monolithic platforms to scalable microservices, QllmSoft delivers secure, cost-efficient modernization.</p>
              <div className="ip-hero__buttons">
                <Link to="/contact" className="ip-btn-primary" aria-label="Get a free legacy system modernization assessment from QllmSoft">Get a Free Assessment</Link>
                <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20legacy%20system%20modernization!" target="_blank" rel="noopener noreferrer" className="ip-btn-whatsapp" aria-label="WhatsApp QllmSoft about legacy system modernization">💬 WhatsApp Us</a>
              </div>
              <div className="ip-hero__trust">
                <span>✓ Zero-Disruption Phased Approach</span><span className="ip-hero__trust-sep"/><span>✓ Business Logic Preserved</span><span className="ip-hero__trust-sep"/><span>✓ .NET, Java, PHP Migration Experts</span>
              </div>
            </div>
            <aside className="ip-hero__features" aria-label="Modernization capabilities">
              {[
                {Icon:IconCode,       title:'.NET Migration',        desc:'Framework to ASP.NET Core 8 upgrade'},
                {Icon:IconCloud,      title:'Cloud Migration',       desc:'Azure, AWS & hybrid cloud deployment'},
                {Icon:IconSettings,   title:'Re-Architecture',       desc:'Monolith to modular / microservices'},
                {Icon:IconLayout,     title:'UI/UX Modernization',   desc:'Legacy interfaces rebuilt for modern UX'},
                {Icon:IconDatabase,   title:'Database Modernization',desc:'Schema optimisation & secure migration'},
                {Icon:IconShield,     title:'Security Hardening',    desc:'Eliminate CVEs & compliance gaps'},
              ].map((f,i)=>(
                <div key={i} className="ip-hero__feature">
                  <div className="ip-hero__feature-icon"><f.Icon s={20}/></div>
                  <strong>{f.title}</strong><span>{f.desc}</span>
                </div>
              ))}
              <div className="ip-hero__stats">
                {[{num:'10+',label:'Years Experience'},{num:'30–60%',label:'Maintenance Cost Reduction'},{num:'0',label:'Downtime Target'},{num:'5★',label:'Client Rating'}].map(s=>(
                  <div key={s.label} className="ip-hero__stat"><span className="ip-hero__stat-num">{s.num}</span><span className="ip-hero__stat-label">{s.label}</span></div>
                ))}
              </div>
            </aside>
          </div>
        </header>

        {/* INTRO */}
        <section className="section ip-intro" aria-labelledby="intro-heading">
          <div className="container">
            <p className="section-eyebrow">What Legacy Modernization Actually Means</p>
            <div className="ip-intro__layout">
              <div className="ip-intro__text">
                <h2 id="intro-heading">Legacy System Modernization Services That Preserve Business Logic While Eliminating Technical Debt</h2>
                <p>Legacy systems are rarely just a technology problem. They are a business risk. Every year a mission-critical application runs on an unsupported .NET Framework version, an end-of-life database, or a tightly coupled monolithic architecture is another year of growing vulnerability exposure, spiralling maintenance costs, and lost developer productivity. And every integration request that your legacy system blocks is a feature your competitors are shipping instead.</p>
                <p>At QllmSoft, we approach legacy system modernization differently from the typical "big bang rewrite" that has derailed many modernization initiatives. We use a <strong>phased, risk-first methodology</strong> — comprehensive technical assessment first, targeted module-by-module modernization second, and validated performance improvement at every stage. Business logic that has years of refinement embedded in it is preserved and re-expressed in modern, maintainable code — not discarded.</p>
                <p>We have modernized financial platforms, ERP systems, healthcare applications, and enterprise CRM systems for clients in the <strong>US, UK, UAE, and Pakistan</strong> — across .NET Framework to <Link to="/hire-dotnet-developers-pakistan">ASP.NET Core</Link> migrations, Java EE to Spring Boot upgrades, monolith decomposition, and full <Link to="/outsource-software-development-to-pakistan">cloud migration to Azure and AWS</Link>. Explore our <Link to="/api-development-services">API development services</Link> for post-modernization integration capability.</p>
                <div className="ip-intro__badges">
                  {['Phased Zero-Disruption Approach','Business Logic 100% Preserved','Rollback Planning Included','Post-Migration Optimization'].map(b=><span key={b} className="ip-badge"><IconCheck s={13}/>{b}</span>)}
                </div>
              </div>
              <aside className="ip-intro__aside" aria-label="Modernization impact metrics">
                {[
                  {Icon:IconDollarSign, num:'30–60%',label:'Reduction in annual maintenance costs post-modernization'},
                  {Icon:IconShield,     num:'100%',  label:'Critical vulnerabilities eliminated in assessed systems'},
                  {Icon:IconTrending,   num:'3–5×',  label:'Faster feature delivery after architectural modernization'},
                  {Icon:IconRefreshCw,  num:'0',     label:'Target business disruption days during phased migration'},
                ].map((s,i)=>(
                  <div key={i} className="ip-stat-card">
                    <div className="ip-stat-card__icon"><s.Icon s={20}/></div>
                    <div><span className="ip-stat-card__num">{s.num}</span><span className="ip-stat-card__label">{s.label}</span></div>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </section>

        {/* WARNING SIGNS */}
        <section className="section ip-services" ref={warnRef} aria-labelledby="warning-heading">
          <div className="container">
            <p className="section-eyebrow">Is Your System Holding You Back?</p>
            <div className="section-title">
              <h2 id="warning-heading">Signs Your Legacy System Needs Modernization Now</h2>
              <p>Legacy systems rarely fail dramatically — they slow everything down gradually until the cost of keeping them becomes greater than the cost of fixing them. These are the signals that threshold has been crossed.</p>
            </div>
            <div className="ip-services__grid">
              {[
                {Icon:IconDollarSign,   title:'Maintenance Costs Exceed Value Delivered',
                  desc:'When specialised legacy developers cost more than modernization, when patches take weeks, and when infrastructure bills keep rising without new capability — your system is consuming budget that should fund growth.',
                  tags:['High Maintenance Spend','Specialist Developer Shortage','Infrastructure Overhead']},
                {Icon:IconShield,       title:'Security Vulnerabilities Cannot Be Patched',
                  desc:'Unsupported frameworks mean no security updates. Known CVEs accumulate, compliance audits surface unresolvable findings, and the business data risk grows with every month the system runs on end-of-life dependencies.',
                  tags:['End-of-Life Dependencies','Known CVEs','Compliance Failures','Audit Risk']},
                {Icon:IconAlertTriangle,title:'Frequent Downtime and Performance Degradation',
                  desc:'Slow response times, memory leaks, unplanned outages, and crash frequency that increases as load grows are all signs of architectural debt that will only worsen as the business scales.',
                  tags:['Response Time Issues','Memory Leaks','Outage Frequency','Cannot Scale']},
                {Icon:IconCode,         title:'Cannot Integrate with Modern Tools and APIs',
                  desc:'If your system cannot connect to modern CRMs, payment gateways, cloud services, or analytics platforms without elaborate workarounds — it is blocking digital transformation initiatives that have real business value.',
                  tags:['API Incompatibility','Cloud Blockers','CRM/ERP Gap','Digital Transformation']},
                {Icon:IconSettings,     title:'Feature Development Is Slow and Risky',
                  desc:'When adding a new feature requires touching code that no one fully understands, risking regression in unrelated areas, and taking three times longer than it should — the architecture has become a competitive liability.',
                  tags:['Tightly Coupled Code','Slow Feature Delivery','Regression Risk','Technical Debt']},
                {Icon:IconLayout,       title:'User Interface Does Not Meet Modern Standards',
                  desc:'Legacy UIs built for desktop browsers look broken on mobile, lack accessibility compliance, and drive up training costs. Poor UX reduces staff productivity and — for customer-facing systems — drives users to competitors.',
                  tags:['Not Mobile-Responsive','Accessibility Issues','Poor Usability','Staff Productivity']},
              ].map((s,i)=>(
                <article key={i} className={`ip-service-card animate__animated ${warnInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.08}s`}} >
                  <div className="ip-service-card__icon"><s.Icon s={22}/></div>
                  <h3 className="ip-service-card__title">{s.title}</h3>
                  <p className="ip-service-card__desc">{s.desc}</p>
                  <div className="ip-service-card__tags">{s.tags.map(t=><span key={t} className="ip-stag">{t}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MODERNIZATION SERVICES */}
        <section className="section ip-services" ref={svRef} aria-labelledby="services-heading" style={{background:'#F7FAFC'}}>
          <div className="container">
            <p className="section-eyebrow">Our Modernization Services</p>
            <div className="section-title">
              <h2 id="services-heading">End-to-End Legacy System Modernization Services</h2>
              <p>Six modernization disciplines — each designed to address a specific dimension of technical debt while preserving the business logic and operational continuity your organisation depends on.</p>
            </div>
            <div className="ip-services__grid">
              {[
                {Icon:IconCode,      title:'Legacy Application Assessment & Roadmapping',
                  desc:'Every engagement begins with a comprehensive technical audit — codebase analysis, dependency mapping, security vulnerability assessment, and business risk evaluation. We deliver a clear modernization roadmap with phased milestones, cost estimates, and ROI projections before any development begins.',
                  tags:['Codebase Audit','Dependency Review','Risk Analysis','ROI Projection','Phased Roadmap']},
                {Icon:IconSettings,  title:'Application Re-Architecture & Code Refactoring',
                  desc:'We improve maintainability and scalability by modernizing application architecture — decomposing monoliths into modular components or microservices, applying SOLID principles, implementing clean architecture patterns, and creating the testable, maintainable codebase that your development team needs to move fast.',
                  tags:['Monolith Decomposition','Microservices','SOLID Principles','Clean Architecture','Unit Testing']},
                {Icon:IconCloud,     title:'Cloud Migration & Cloud-Native Modernization',
                  desc:'We migrate legacy on-premise applications to secure, scalable cloud environments on Microsoft Azure or AWS — with containerization using Docker and Kubernetes, CI/CD pipeline implementation, auto-scaling configuration, and cost optimization for cloud resource consumption.',
                  tags:['Azure / AWS','Docker & Kubernetes','CI/CD Pipelines','Auto-scaling','IaC (Terraform)']},
                {Icon:IconLayout,    title:'UI/UX Modernization',
                  desc:'We rebuild legacy user interfaces using modern frontend frameworks — React, Angular, or Blazor — creating mobile-responsive, accessible, and intuitive interfaces that reduce training time, improve staff productivity, and meet WCAG 2.1 accessibility standards for customer-facing applications.',
                  tags:['React / Angular','Mobile-Responsive','WCAG Accessibility','Figma Prototyping','Component Library']},
                {Icon:IconDatabase,  title:'Database & Infrastructure Modernization',
                  desc:'We modernize legacy database architectures — migrating from obsolete database versions to SQL Server 2022, PostgreSQL, or Azure SQL, optimizing schema design, improving query performance, implementing secure data migration with full audit trails, and hardening infrastructure security.',
                  tags:['SQL Server 2022','PostgreSQL','Azure SQL','Schema Optimization','Secure Migration']},
                {Icon:IconRefreshCw, title:'Ongoing Support & Continuous Optimization',
                  desc:'Modernization does not end at deployment. We provide proactive post-migration monitoring, performance benchmarking against pre-modernization baselines, security patch management, and iterative optimization — ensuring your modernized system continues to improve over time.',
                  tags:['Performance Monitoring','Security Patches','SLA Support','Iterative Optimization']},
              ].map((s,i)=>(
                <article key={i} className={`ip-service-card animate__animated ${svInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.08}s`}} itemScope itemType="https://schema.org/Service">
                  <div className="ip-service-card__icon"><s.Icon s={22}/></div>
                  <h3 className="ip-service-card__title" itemProp="name">{s.title}</h3>
                  <p className="ip-service-card__desc" itemProp="description">{s.desc}</p>
                  <div className="ip-service-card__tags">{s.tags.map(t=><span key={t} className="ip-stag">{t}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MODERNIZATION APPROACHES */}
        <section className="section ip-compare" ref={approachRef} aria-labelledby="approaches-heading">
          <div className="container">
            <p className="section-eyebrow">Choosing the Right Approach</p>
            <div className="section-title">
              <h2 id="approaches-heading">Legacy System Modernization Approaches — A Decision Guide</h2>
              <p>There is no single correct modernization path. The right approach depends on your system's current state, business criticality, budget, and timeline — which is why assessment comes first.</p>
            </div>
            <div className="ip-compare-wrap">
              <table className={`ip-compare-table animate__animated ${approachInView?'animate__fadeInUp':''}`} aria-label="Comparison of legacy system modernization approaches">
                <caption>Modernization Approach Comparison — Cost, Timeline, and Best Use Case</caption>
                <thead><tr><th scope="col">Approach</th><th scope="col">Relative Cost</th><th scope="col">Timeline</th><th scope="col">Best Used When</th><th scope="col" className="ip-col-highlight">Risk Level</th></tr></thead>
                <tbody>
                  {[
                    {a:'Rehosting (Lift & Shift)',  b:'Low',      c:'4–8 weeks',    d:'Infrastructure outdated, application logic stable',              e:'Low'},
                    {a:'Refactoring',               b:'Medium',   c:'8–20 weeks',   d:'Performance & maintainability are key concerns',                 e:'Low-Medium'},
                    {a:'Re-platforming',            b:'Medium',   c:'10–24 weeks',  d:'Selective modernization without full redesign',                  e:'Medium'},
                    {a:'Re-architecting',           b:'High',     c:'20–40 weeks',  d:'Architecture limits future growth or innovation',               e:'Medium-High'},
                    {a:'Rebuilding',                b:'High',     c:'24–52 weeks',  d:'Legacy architecture cannot meet current business needs',         e:'High (mitigated)'},
                    {a:'Replacing (SaaS Adoption)', b:'Variable', c:'4–12 weeks',   d:'Off-the-shelf solution meets requirements with low differentiation',e:'Low'},
                  ].map((row,i)=>(
                    <tr key={i}><td className="ip-col-factor">{row.a}</td><td>{row.b}</td><td>{row.c}</td><td>{row.d}</td><td className="ip-col-highlight ip-col-good">{row.e}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section ip-dark-band" ref={procRef} aria-labelledby="process-heading">
          <div className="container">
            <p className="section-eyebrow">Our Modernization Methodology</p>
            <div className="section-title">
              <h2 id="process-heading">How We Modernize Legacy Systems Without Disrupting Your Business</h2>
              <p>A risk-first, phased methodology that protects operational continuity at every stage while systematically eliminating technical debt.</p>
            </div>
            <ol className="ip-process__steps">
              {[
                {n:'01',icon:'🔍',title:'Deep Technical & Business Assessment',desc:'We conduct a comprehensive codebase audit, dependency inventory, security vulnerability scan, performance baseline measurement, and business risk classification — delivering a detailed assessment report and modernization roadmap before any development begins.'},
                {n:'02',icon:'🗺️',title:'Phased Modernization Planning',desc:'We design a phased modernization plan that sequences work by business risk, dependency chain, and impact — ensuring high-risk modules are modernized last, after lower-risk components validate the approach and team capability.'},
                {n:'03',icon:'⚙️',title:'Iterative Modernization Sprints',desc:'Development proceeds in two-week sprints with each sprint delivering a modernized module validated against the legacy system\'s behaviour. Parallel operation ensures the business is never dependent on unvalidated modernized components.'},
                {n:'04',icon:'🧪',title:'Regression Testing & Performance Validation',desc:'Every modernized component is tested against the legacy system\'s functional baseline — ensuring feature parity — plus performance benchmarking against pre-modernization response times to validate improvement.'},
                {n:'05',icon:'🚀',title:'Staged Cutover & Go-Live',desc:'We manage staged traffic cutover — routing a percentage of users to the modernized system first, monitoring closely, and completing full cutover only after performance and stability are confirmed. Rollback capability is maintained throughout.'},
                {n:'06',icon:'📊',title:'Post-Migration Monitoring & Optimization',desc:'Post-migration, we monitor performance metrics, error rates, and security telemetry — delivering a 30-day post-migration health report and implementing optimizations identified from real production usage patterns.'},
              ].map((step,i)=>(
                <li key={i} className={`ip-process__step animate__animated ${procInView?'animate__fadeInLeft':''}`} style={{animationDelay:`${i*0.09}s`}}>
                  <div className="ip-process__step-num">{step.n}</div>
                  <span className="ip-process__step-icon" aria-hidden="true">{step.icon}</span>
                  <div className="ip-process__step-body"><h4>{step.title}</h4><p>{step.desc}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WHY QLLMSOFT */}
        <section className="section ip-why" ref={whyRef} aria-labelledby="why-heading">
          <div className="container">
            <p className="section-eyebrow">Why QllmSoft for Modernization</p>
            <div className="section-title">
              <h2 id="why-heading">Why Enterprises Choose QllmSoft for Legacy System Modernization</h2>
              <p>Legacy modernization is one of the highest-stakes technology decisions an organisation makes. These are the reasons businesses trust QllmSoft to get it right.</p>
            </div>
            <div className="ip-why__grid">
              {[
                {Icon:IconCode,       title:'Deep .NET & Enterprise Technology Expertise',  desc:'Our engineers are specialists in .NET Framework to ASP.NET Core migrations, Java EE modernization, and legacy database upgrades — with 10+ years of production experience in enterprise environments where getting it wrong is not an option.'},
                {Icon:IconRefreshCw,  title:'Phased Approach That Protects Business Continuity', desc:'We never modernize mission-critical systems as a single high-risk rewrite. Every engagement uses a phased approach with parallel operation, staged cutover, and rollback planning — protecting your business at every step.'},
                {Icon:IconShield,     title:'Security-First Modernization Standards',        desc:'We treat modernization as a security remediation opportunity — eliminating known vulnerabilities, implementing modern authentication standards, and hardening infrastructure security alongside every architectural improvement.'},
                {Icon:IconCloud,      title:'Cloud-Native Deployment Expertise',             desc:'We are experienced with Microsoft Azure, AWS, and hybrid cloud environments — deploying modernized applications with containerization, auto-scaling, managed databases, and cost optimization from day one.'},
                {Icon:IconTrending,   title:'Measurable ROI at Every Phase',                 desc:'Every modernization phase has measurable success criteria — performance benchmarks, maintenance cost reduction targets, and developer productivity metrics. We do not just modernize; we prove the value of each investment.'},
                {Icon:IconDollarSign, title:'Competitive Offshore Rates Without Quality Trade-Offs',desc:'Pakistan-based modernization expertise means 60% lower cost than US or UK equivalents — with the same senior engineer quality, the same delivery standards, and the same accountability that enterprise modernization demands.'},
              ].map((w,i)=>(
                <article key={i} className={`ip-why-card animate__animated ${whyInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.08}s`}}>
                  <div className="ip-why-card__icon"><w.Icon s={20}/></div>
                  <h3 className="ip-why-card__title">{w.title}</h3>
                  <p className="ip-why-card__desc">{w.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section ip-testimonials" ref={revRef} aria-labelledby="reviews-heading">
          <div className="container">
            <p className="section-eyebrow">Verified Reviews</p>
            <div className="section-title">
              <h2 id="reviews-heading">What Clients Say About QllmSoft Legacy Modernization</h2>
              <p>Independent reviews from clients across Freelancer and Upwork — UK, USA, UAE, Saudi Arabia, and Jordan.</p>
            </div>
            <div className="ip-reviews__grid">
              {[
                {name:'Khalid A.',    loc:'Riyadh, Saudi Arabia', img:'https://qllmsoft.com/images/khalid A.webp',   text:'"QllmSoft modernized our decade-old financial platform without a single day of unplanned downtime. The phased approach they used meant our team was never exposed to unvalidated code in production. Exceptional work."'},
                {name:'Neil P.',     loc:'Cardiff, United Kingdom',img:'https://qllmsoft.com/images/Neil P.webp',    text:'"Our legacy .NET Framework system was a security liability. QllmSoft\'s migration to ASP.NET Core eliminated every flagged vulnerability, improved response times by 60%, and the codebase is now something our team can actually maintain."'},
                {name:'Fernando M.', loc:'Miramar, United States', img:'https://qllmsoft.com/images/fernandoM.webp', text:'"The modernization QllmSoft delivered has transformed our development velocity. What used to take three weeks to ship now takes three days. The architectural improvements they made have compounded in value every quarter since."'},
                {name:'Mohammad I.', loc:'Amman, Jordan',          img:'https://qllmsoft.com/images/Muhammad I.webp',text:'"Professional, technically excellent, and genuinely careful with our business-critical system. QllmSoft treated our legacy platform with the respect it deserved and delivered a modernized system that performs and is a pleasure to work with."'},
              ].map((r,i)=>(
                <article key={i} className={`ip-review-card animate__animated ${revInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.1}s`}} itemScope itemType="https://schema.org/Review">
                  <div className="ip-review-card__stars" aria-label="5 out of 5 stars" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating"><meta itemProp="ratingValue" content="5"/><meta itemProp="bestRating" content="5"/>★★★★★</div>
                  <p className="ip-review-card__text" itemProp="reviewBody">{r.text}</p>
                  <div className="ip-review-card__author" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <img src={r.img} alt={`${r.name} — verified QllmSoft legacy modernization client from ${r.loc}`} loading="lazy" width="44" height="44"/>
                    <div><strong itemProp="name">{r.name}</strong><span>{r.loc} — Freelancer</span></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section csd-faq ip-faq" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <p className="section-eyebrow">Common Questions</p>
            <div className="section-title">
              <h2 id="faq-heading">Legacy System Modernization FAQ</h2>
              <p>Practical answers to the questions businesses ask most before beginning a modernization engagement.</p>
            </div>
            <div className="csd-faq__list">{FAQ_DATA.map((faq,i)=><FAQItem key={i} faq={faq} index={i}/>)}</div>
          </div>
        </section>

        {/* CTA */}
        <section className="section ip-cta" aria-labelledby="cta-heading">
          <div className="ip-cta__bg" aria-hidden="true"/>
          <div className="container ip-cta__inner">
            <div className="ip-cta__left">
              <p className="section-eyebrow" style={{color:'#edb702',textAlign:'left',margin:'0 0 12px'}}>Start Your Modernization</p>
              <h2 id="cta-heading">Ready to Modernize Your Legacy System Without Disruption?</h2>
              <p className="ip-cta__desc">Whether you need a .NET migration, a cloud transition, a monolith decomposition, or a full re-architecture — QllmSoft delivers the technical expertise, risk management, and delivery discipline that enterprise modernization requires.</p>
              <div className="ip-cta__buttons">
                <Link to="/contact" className="ip-btn-primary" aria-label="Get a free legacy system modernization assessment from QllmSoft">Get a Free Assessment</Link>
                <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20legacy%20modernization!" target="_blank" rel="noopener noreferrer" className="ip-btn-whatsapp" aria-label="WhatsApp QllmSoft about legacy modernization">💬 WhatsApp Us</a>
              </div>
              <div className="ip-cta__perks">{['✓ Free technical assessment','✓ Phased zero-disruption approach','✓ Business logic 100% preserved','✓ 30-day post-migration support'].map(p=><span key={p}>{p}</span>)}</div>
            </div>
            <aside className="ip-cta__right">
              <div className="ip-cta__contact">
                <h3>Quick Contact</h3>
                <a href="mailto:qllmsoft@gmail.com" className="ip-cta__contact-row">📧 qllmsoft@gmail.com</a>
                <a href="https://wa.me/923348229288" target="_blank" rel="noopener noreferrer" className="ip-cta__contact-row">💬 WhatsApp — replies in 5 mins</a>
                <a href="tel:+923348229288" className="ip-cta__contact-row">📞 +92 334 8229288</a>
              </div>
              <nav className="ip-cta__related" aria-label="Related services">
                <p className="ip-cta__related-title">Related Services</p>
                <Link to="/custom-software-development-services">Custom Software</Link>
                <Link to="/api-development-services">API Development</Link>
                <Link to="/hire-dotnet-developers-pakistan">Hire .NET Developers</Link>
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
export default LegacyModernization;
