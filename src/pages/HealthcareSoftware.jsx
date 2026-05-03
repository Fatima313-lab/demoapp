/**
 * HealthcareSoftware.jsx
 * ─────────────────────────────────────────────────────
 * TARGET KEYWORDS:
 *  Primary:   healthcare software development Pakistan
 *             hospital management software Pakistan
 *  Secondary: HIPAA compliant software Pakistan, EMR EHR system Pakistan,
 *             clinic management system Pakistan, telemedicine app development Pakistan,
 *             custom healthcare software development, healthcare app development company Pakistan
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './IndustryPage.css';
import 'animate.css';

const PAGE_URL = 'https://qllmsoft.com/healthcare-software-development-pakistan';
const OG_IMAGE  = 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg';

/* ── SVG Icons ─────────────────────────────────────────── */
const IconHospital   = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><line x1="12" y1="12" x2="12" y2="22"/><line x1="9"  y1="17" x2="15" y2="17"/><line x1="12" y1="12" x2="12" y2="7"/></svg>;
const IconActivity   = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
const IconShield     = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconSmartphone = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>;
const IconDatabase   = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
const IconZap        = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IconUsers      = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconLock       = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
const IconTrendingUp = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const IconCheck      = ({s=16}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>;

/* ── JSON-LD ───────────────────────────────────────────── */
const schemaOrg = { '@context':'https://schema.org','@type':'Organization',name:'QllmSoft',url:'https://qllmsoft.com',foundingDate:'2015',logo:'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp',contactPoint:{'@type':'ContactPoint',telephone:'+92-334-8229288',contactType:'customer service',areaServed:['PK','US','GB','AE','SA'],availableLanguage:'English'},address:{'@type':'PostalAddress',streetAddress:'H # 181, Camping Ground',addressLocality:'Lalamusa',addressRegion:'Punjab',addressCountry:'PK'},sameAs:['https://www.freelancer.com/u/mrprogrmmr','https://www.upwork.com/freelancers/~0170e20f8803389a86'] };
const schemaService = { '@context':'https://schema.org','@type':'Service',serviceType:'Healthcare Software Development',name:'Healthcare Software Development Services in Pakistan',description:'QllmSoft provides custom HIPAA-compliant healthcare software development in Pakistan — hospital management systems, EMR/EHR, telemedicine apps, clinic management, and healthcare automation for providers in Pakistan and globally.',provider:{'@type':'Organization',name:'QllmSoft',url:'https://qllmsoft.com'},areaServed:['Pakistan','United States','United Kingdom','UAE','Saudi Arabia'],url:PAGE_URL };
const schemaBreadcrumb = { '@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://qllmsoft.com/'},{'@type':'ListItem',position:2,name:'Services',item:'https://qllmsoft.com/services'},{'@type':'ListItem',position:3,name:'Healthcare Software Development Pakistan',item:PAGE_URL}] };
const FAQ_DATA = [
  {q:'What healthcare software development services does QllmSoft offer?',a:'QllmSoft provides end-to-end healthcare software development including hospital management systems (HMS), electronic medical records (EMR/EHR), telemedicine and video consultation apps, clinic management systems, healthcare mobile applications, AI-powered diagnostics, and healthcare process automation — all built to HIPAA and GDPR compliance standards.'},
  {q:'Is QllmSoft healthcare software HIPAA and GDPR compliant?',a:'Yes. Every healthcare application we build follows HIPAA security rules — including AES-256 data encryption, role-based access controls, audit trails, secure data transmission over HTTPS/TLS, and business associate agreement (BAA) provisions. For international clients, we additionally apply GDPR-aligned data handling and consent management practices.'},
  {q:'Why choose a healthcare software company in Pakistan?',a:'Choosing QllmSoft in Pakistan gives you access to senior healthcare software engineers with 10+ years of experience — at 60–70% lower cost than equivalent US or UK development agencies. Our developers understand both Pakistani healthcare infrastructure requirements and international compliance standards, making us uniquely positioned to serve both local and global healthcare clients.'},
  {q:'How long does it take to develop a hospital management system?',a:'A standard clinic management system takes 8–14 weeks. A full hospital management system with billing, pharmacy, lab integration, and multi-department coordination typically takes 16–24 weeks. A telemedicine platform with video consultation, appointment booking, and patient portal takes 10–16 weeks. Timelines depend on complexity and integration requirements.'},
  {q:'Can you integrate with existing laboratory and pharmacy systems?',a:'Yes. We build secure integration layers using HL7, FHIR, and custom REST APIs to connect with existing laboratory information systems (LIS), pharmacy management systems, radiology systems (PACS/RIS), and billing platforms. We assess existing system architecture during discovery and design integration that minimises disruption to live operations.'},
  {q:'Do you provide post-launch maintenance for healthcare software?',a:'Yes. All healthcare software engagements include a structured post-launch support period with security patch management, performance monitoring, user training, regulatory update compliance, and feature enhancements. Long-term maintenance contracts are available for healthcare providers that require ongoing SLA-based support.'},
];
const schemaFAQ = { '@context':'https://schema.org','@type':'FAQPage',mainEntity:FAQ_DATA.map(({q,a})=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}})) };
const schemaWebPage = { '@context':'https://schema.org','@type':'WebPage',name:'Healthcare Software Development Services in Pakistan | QllmSoft',url:PAGE_URL,description:'Custom HIPAA-compliant healthcare software development in Pakistan — HMS, EMR/EHR, telemedicine, clinic management, and healthcare automation by QllmSoft. Free consultation.',publisher:{'@type':'Organization',name:'QllmSoft'},aggregateRating:{'@type':'AggregateRating',ratingValue:'5',reviewCount:'47',bestRating:'5',worstRating:'1'} };

const FAQItem = ({faq,index}) => {
  const [open,setOpen]=useState(false); const id=`hc-faq-${index}`;
  return (
    <div className={`faq-item ${open?'faq-item--open':''}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button className="faq-question" onClick={()=>setOpen(o=>!o)} aria-expanded={open} aria-controls={id} itemProp="name"><span>{faq.q}</span><span className="faq-icon" aria-hidden="true">{open?'−':'+'}</span></button>
      {open&&<div id={id} className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">{faq.a}</p></div>}
    </div>
  );
};

const HealthcareSoftware = () => {
  const {ref:svRef,inView:svInView}=useInView({triggerOnce:true,threshold:0.08});
  const {ref:whyRef,inView:whyInView}=useInView({triggerOnce:true,threshold:0.08});
  const {ref:procRef,inView:procInView}=useInView({triggerOnce:true,threshold:0.08});
  const {ref:clientRef,inView:clientInView}=useInView({triggerOnce:true,threshold:0.08});
  const {ref:revRef,inView:revInView}=useInView({triggerOnce:true,threshold:0.08});

  return (
    <>
      <Helmet>
        <title>Healthcare Software Development Services in Pakistan | HIPAA-Compliant | QllmSoft</title>
        <meta name="description" content="QllmSoft provides custom HIPAA-compliant healthcare software development in Pakistan — hospital management systems, EMR/EHR, telemedicine apps, clinic management, and healthcare automation. Serving hospitals, clinics, and startups in Pakistan and globally. Free consultation." />
        <meta name="keywords" content="healthcare software development Pakistan, hospital management software Pakistan, HIPAA compliant software Pakistan, EMR EHR system Pakistan, clinic management system Pakistan, telemedicine app development Pakistan, custom healthcare software development, healthcare mobile app development Pakistan, electronic health records Pakistan" />
        <meta name="author" content="QllmSoft" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" /><meta property="og:url" content={PAGE_URL} /><meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content="Healthcare Software Development in Pakistan | HIPAA-Compliant | QllmSoft" />
        <meta property="og:description" content="Custom HIPAA-compliant healthcare software — HMS, EMR/EHR, telemedicine, clinic management. Serving Pakistan and global healthcare providers." />
        <meta property="og:image" content={OG_IMAGE} /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" /><meta property="og:image:alt" content="Healthcare Software Development Pakistan — QllmSoft" /><meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="Healthcare Software Development in Pakistan | QllmSoft" /><meta name="twitter:description" content="Custom HIPAA-compliant healthcare software — HMS, EMR/EHR, telemedicine, clinic management from Pakistan." /><meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="ip-page" style={{'--ip-hero-from':'#0a1f0e','--ip-hero-mid':'#0d4423','--ip-hero-to':'#1a6b3a','--ip-accent':'#edb702','--ip-icon-bg':'#F0FFF4','--ip-icon-color':'#276749'}} role="main">

        {/* BREADCRUMB */}
        <nav className="csd-breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <ol className="csd-breadcrumb__list" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem"><Link to="/" itemProp="item"><span itemProp="name">Home</span></Link><meta itemProp="position" content="1"/></li>
              <span aria-hidden="true" className="csd-breadcrumb__sep">›</span>
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem"><Link to="/services" itemProp="item"><span itemProp="name">Services</span></Link><meta itemProp="position" content="2"/></li>
              <span aria-hidden="true" className="csd-breadcrumb__sep">›</span>
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem"><span itemProp="name" aria-current="page">Healthcare Software Development</span><meta itemProp="position" content="3"/></li>
            </ol>
          </div>
        </nav>

        {/* HERO */}
        <header className="ip-hero" role="banner">
          <div className="container ip-hero__inner">
            <div className="ip-hero__content">
              <div className="ip-hero__eyebrow"><span className="ip-hero__dot" aria-hidden="true"/>Healthcare Technology — Pakistan &amp; Global</div>
              <h1 className="ip-hero__title">Healthcare Software<br/>Development Services<br/><em>in Pakistan</em></h1>
              <p className="ip-hero__sub">We engineer custom, <strong>HIPAA-compliant</strong> healthcare software that transforms hospital operations, improves patient outcomes, and scales with your organisation — for providers in Pakistan and worldwide.</p>
              <div className="ip-hero__buttons">
                <Link to="/contact" className="ip-btn-primary" aria-label="Get a free healthcare software consultation from QllmSoft">Get a Free Consultation</Link>
                <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20healthcare%20software!" target="_blank" rel="noopener noreferrer" className="ip-btn-whatsapp" aria-label="WhatsApp QllmSoft about healthcare software">💬 WhatsApp Us</a>
              </div>
              <div className="ip-hero__trust" aria-label="Trust indicators">
                <span>✓ HIPAA-Compliant Builds</span><span className="ip-hero__trust-sep"/><span>✓ GDPR-Ready</span><span className="ip-hero__trust-sep"/><span>✓ 10+ Years Experience</span><span className="ip-hero__trust-sep"/><span>✓ 5★ Rated</span>
              </div>
            </div>
            <aside className="ip-hero__features" aria-label="Healthcare software capabilities">
              {[
                {Icon:IconHospital,  title:'Hospital Management',  desc:'End-to-end HMS for admissions, billing, pharmacy'},
                {Icon:IconDatabase,  title:'EMR / EHR Systems',    desc:'Secure, structured electronic health records'},
                {Icon:IconSmartphone,title:'Telemedicine Apps',    desc:'Video consultation & patient engagement'},
                {Icon:IconActivity,  title:'AI Diagnostics',       desc:'ML-powered clinical decision support'},
                {Icon:IconZap,       title:'Healthcare Automation', desc:'Billing, scheduling & workflow automation'},
                {Icon:IconShield,    title:'HIPAA Security',       desc:'Encryption, access control, audit trails'},
              ].map((f,i)=>(
                <div key={i} className="ip-hero__feature">
                  <div className="ip-hero__feature-icon"><f.Icon s={20}/></div>
                  <strong>{f.title}</strong><span>{f.desc}</span>
                </div>
              ))}
              <div className="ip-hero__stats" aria-label="Key figures">
                {[{num:'10+',label:'Years Healthcare Dev'},{num:'HIPAA',label:'Compliant Builds'},{num:'60%',label:'Cost vs US Agencies'},{num:'5★',label:'Client Rating'}].map(s=>(
                  <div key={s.label} className="ip-hero__stat"><span className="ip-hero__stat-num">{s.num}</span><span className="ip-hero__stat-label">{s.label}</span></div>
                ))}
              </div>
            </aside>
          </div>
        </header>

        {/* INTRO */}
        <section className="section ip-intro" aria-labelledby="intro-heading">
          <div className="container">
            <p className="section-eyebrow">Why QllmSoft for Healthcare Software</p>
            <div className="ip-intro__layout">
              <div className="ip-intro__text">
                <h2 id="intro-heading">Custom Healthcare Software Development That Transforms Patient Care in Pakistan and Beyond</h2>
                <p>Running a modern healthcare facility without the right software is like navigating a hospital without a map. Missed appointments, paper-based records, manual billing, and disconnected departments cost real money, real time, and in the worst cases — real patient outcomes. At QllmSoft, we build the digital infrastructure that makes healthcare organisations work.</p>
                <p>Our healthcare software engineering team has delivered custom hospital management systems, EMR platforms, telehealth applications, and clinic management solutions for healthcare providers across <strong>Pakistan, the UAE, Saudi Arabia, and the United Kingdom</strong>. Every solution is built from the ground up around your specific workflows — not adapted from a template — and engineered to meet the strict requirements of <a href="https://www.hhs.gov/hipaa/index.html" target="_blank" rel="noopener noreferrer nofollow" aria-label="HIPAA official guidelines — external authority">HIPAA</a> and GDPR from the first line of code.</p>
                <p>Pakistan-based development means you access senior healthcare software engineers at 60–70% lower cost than equivalent teams in the US or UK — without any compromise on regulatory compliance, security architecture, or delivery quality. Explore our broader <Link to="/custom-software-development-services">custom software development capabilities</Link> or see how we approach <Link to="/api-development-services">secure API development</Link> for healthcare integrations.</p>
                <div className="ip-intro__badges">
                  {['HIPAA-Compliant Builds','GDPR-Aligned Data Handling','Agile Sprint Delivery','30-Day Post-Launch Support'].map(b=><span key={b} className="ip-badge"><IconCheck s={13}/>{b}</span>)}
                </div>
              </div>
              <aside className="ip-intro__aside" aria-label="Healthcare impact metrics">
                {[
                  {Icon:IconActivity,  num:'40%',    label:'Faster diagnosis with AI-assisted workflows'},
                  {Icon:IconUsers,     num:'2×',     label:'More patients served via telemedicine platforms'},
                  {Icon:IconShield,    num:'99%',    label:'Data security in HIPAA-compliant deployments'},
                  {Icon:IconTrendingUp,num:'35%',    label:'Operational efficiency gain in HMS deployments'},
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

        {/* SERVICES */}
        <section className="section ip-services" ref={svRef} aria-labelledby="services-heading">
          <div className="container">
            <p className="section-eyebrow">What We Build</p>
            <div className="section-title">
              <h2 id="services-heading">Our Healthcare Software Development Services</h2>
              <p>Six core healthcare software disciplines — each engineered to meet international security standards and the real operational workflows of clinical environments.</p>
            </div>
            <div className="ip-services__grid">
              {[
                {Icon:IconHospital, title:'Hospital Management System (HMS)',
                  desc:'A fully integrated HMS that manages every department — from patient admission and doctor scheduling to pharmacy inventory, lab results, billing, and discharge — reducing administrative overhead and giving clinical staff instant access to what they need.',
                  tags:['Patient Admissions','Billing & Insurance','Pharmacy Control','Doctor Portals','Lab Integration']},
                {Icon:IconSmartphone,title:'Telemedicine & Mobile Healthcare Apps',
                  desc:'Native Android and iOS telemedicine applications with HD video consultations, online appointment booking, secure patient-doctor messaging, prescription management, and health monitoring integrations — connecting patients to care without geographic constraints.',
                  tags:['Video Consultation','Appointment Booking','Secure Messaging','Health Tracking','React Native']},
                {Icon:IconDatabase, title:'EMR / EHR System Development',
                  desc:'Structured, regulation-compliant electronic health record systems that centralise patient history, lab results, imaging reports, and clinical notes — with role-based access, audit trails, and integration with laboratory and pharmacy platforms.',
                  tags:['HL7 / FHIR','Audit Trails','Lab Integration','HIPAA Compliant','Role-Based Access']},
                {Icon:IconActivity, title:'Clinic Management System',
                  desc:'Lightweight yet powerful clinic management software for single-site and multi-branch facilities — covering patient databases, prescription management, appointment scheduling, fee collection, and real-time branch synchronisation across locations.',
                  tags:['Multi-Branch Sync','Prescriptions','Online Scheduling','Fee Management','Patient History']},
                {Icon:IconZap,      title:'Healthcare Process Automation',
                  desc:'AI-powered and rule-based automation tools that eliminate manual bottlenecks — automated appointment reminders, billing workflows, insurance claim processing, discharge documentation, and intelligent patient triage support systems.',
                  tags:['AI Workflows','Billing Automation','Appointment Reminders','Chatbot Support','Insurance Claims']},
                {Icon:IconShield,   title:'Custom Healthcare Software Solutions',
                  desc:'Bespoke healthcare applications for diagnostic labs, rehabilitation centres, mental health platforms, and specialist clinics — with custom reporting, IoT device integration, wearable data feeds, and cloud-based 24/7 secure access for clinical teams.',
                  tags:['IoT Integration','Wearable Data','Cloud-Native','Custom Reporting','Diagnostic Tools']},
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

        {/* PROCESS */}
        <section className="section ip-dark-band" ref={procRef} aria-labelledby="process-heading">
          <div className="container">
            <p className="section-eyebrow">How We Build Healthcare Software</p>
            <div className="section-title">
              <h2 id="process-heading">Our Healthcare Software Development Process</h2>
              <p>A structured, compliance-first development methodology — designed to minimise risk, ensure regulatory alignment, and deliver software that clinical teams actually want to use.</p>
            </div>
            <ol className="ip-process__steps" aria-label="Healthcare software development process">
              {[
                {n:'01',icon:'🔍',title:'Discovery & Compliance Mapping',desc:'We analyse your clinical workflows, data structures, and compliance requirements. HIPAA and GDPR obligations are documented before architecture decisions are made — not retrofitted afterward.'},
                {n:'02',icon:'🏗️',title:'Solution Architecture & Security Design',desc:'We design the system architecture with security-first principles — data classification, encryption strategy, access control layers, audit logging, and integration architecture for existing clinical systems.'},
                {n:'03',icon:'⚙️',title:'Agile Development & Clinical Testing',desc:'Development runs in two-week sprints with clinical workflow testing embedded in every cycle. Real clinical scenarios are used to validate features before they reach staging environments.'},
                {n:'04',icon:'🔒',title:'Security Audit, Penetration Testing & Compliance Review',desc:'Before launch, every healthcare application undergoes a full security audit — penetration testing, data flow mapping, access control verification, and a formal compliance review against applicable standards.'},
                {n:'05',icon:'🚀',title:'Deployment, Staff Training & Post-Launch Support',desc:'We manage deployment with zero-downtime migration planning, provide staff training documentation and live sessions, and deliver 30 days of free post-launch support for bug resolution and performance tuning.'},
              ].map((step,i)=>(
                <li key={i} className={`ip-process__step animate__animated ${procInView?'animate__fadeInLeft':''}`} style={{animationDelay:`${i*0.09}s`}}>
                  <div className="ip-process__step-num" aria-label={`Step ${step.n}`}>{step.n}</div>
                  <span className="ip-process__step-icon" aria-hidden="true">{step.icon}</span>
                  <div className="ip-process__step-body"><h4>{step.title}</h4><p>{step.desc}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WHO WE HELP */}
        <section className="section ip-dark-band" ref={clientRef} aria-labelledby="clients-heading" style={{background:'linear-gradient(145deg,#1A365D,#2B6CB0)'}}>
          <div className="container">
            <p className="section-eyebrow">Who We Serve</p>
            <div className="section-title">
              <h2 id="clients-heading">Healthcare Providers We Build For</h2>
              <p>We build for every clinical environment — from solo practitioners to multi-hospital networks and digital health startups.</p>
            </div>
            <div className="ip-clients__grid">
              {[
                {Icon:IconHospital, title:'Hospitals',            desc:'Public and private hospitals managing high patient volumes across multiple departments — digitising patient management, inter-department coordination, and clinical reporting.'},
                {Icon:IconUsers,    title:'Clinics & Practices',  desc:'Single-site and multi-branch clinics requiring centralised patient records, appointment scheduling, prescription management, and financial reporting under one system.'},
                {Icon:IconSmartphone,title:'Health Startups',    desc:'Early-stage digital health companies building telemedicine platforms, wellness apps, or SaaS healthcare products that need a technical partner from MVP to scale.'},
                {Icon:IconActivity, title:'Diagnostic Labs',      desc:'Diagnostic laboratories and testing centres requiring structured result management, integration with hospital systems, and automated patient notification workflows.'},
              ].map((c,i)=>(
                <article key={i} className={`ip-client-card animate__animated ${clientInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.1}s`}}>
                  <div className="ip-client-card__icon"><c.Icon s={20}/></div>
                  <h3 className="ip-client-card__title">{c.title}</h3>
                  <p className="ip-client-card__desc">{c.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY QLLMSOFT */}
        <section className="section ip-why" ref={whyRef} aria-labelledby="why-heading">
          <div className="container">
            <p className="section-eyebrow">Why Choose QllmSoft</p>
            <div className="section-title">
              <h2 id="why-heading">Why Healthcare Organisations Choose QllmSoft in Pakistan</h2>
              <p>We combine deep healthcare domain knowledge with technical rigour and the cost advantage of Pakistan-based engineering — a combination no Western agency can match.</p>
            </div>
            <div className="ip-why__grid">
              {[
                {Icon:IconShield,    title:'Regulatory Compliance Built In',         desc:'HIPAA security rules and GDPR requirements are embedded into architecture from day one — not added as an afterthought. Every data flow, access point, and storage mechanism is designed to meet the standard.'},
                {Icon:IconActivity,  title:'Deep Healthcare Domain Knowledge',       desc:'Our team understands clinical workflows, HL7/FHIR integration standards, medical billing cycles, and the real operational pressures that hospitals and clinics face — not just the technical requirements.'},
                {Icon:IconTrendingUp,title:'60–70% Lower Cost Than Western Agencies',desc:'Senior healthcare software engineers in Pakistan deliver the same regulatory compliance and code quality as US or UK teams — at a fraction of the cost. No hidden charges, transparent milestone-based pricing.'},
                {Icon:IconDatabase,  title:'Seamless Integration Capability',        desc:'We integrate with existing laboratory systems, pharmacy platforms, insurance portals, and third-party diagnostic tools using HL7, FHIR, REST APIs, and custom middleware — without disrupting live clinical operations.'},
                {Icon:IconZap,       title:'Agile Delivery with Clinical Validation', desc:'Two-week sprints with clinical use-case validation at every cycle. Features are tested against real clinical scenarios — not just technical requirements — before they move to staging.'},
                {Icon:IconLock,      title:'Post-Launch Security & Compliance Maintenance',desc:'Healthcare compliance is not a one-time event. We provide ongoing security patch management, compliance monitoring for regulatory changes, and proactive system hardening after every deployment.'},
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

        {/* PRICING TABLE */}
        <section className="section ip-compare" aria-labelledby="pricing-heading">
          <div className="container">
            <p className="section-eyebrow">Transparent Pricing</p>
            <div className="section-title">
              <h2 id="pricing-heading">Healthcare Software Development Cost Guide — Pakistan</h2>
              <p>Indicative cost ranges based on 2025–26 project standards. All estimates are project-specific — contact us for a precise, no-obligation quote within 24 hours.</p>
            </div>
            <div className="ip-compare-wrap">
              <table className="ip-compare-table" aria-label="Healthcare software development cost comparison Pakistan">
                <caption>Healthcare Software Development — Indicative Cost Ranges (Pakistan Pricing)</caption>
                <thead><tr><th scope="col">Solution Type</th><th scope="col">Est. Cost (PKR)</th><th scope="col">Est. Cost (USD)</th><th scope="col" className="ip-col-highlight">Projected ROI Impact</th></tr></thead>
                <tbody>
                  {[
                    {a:'Clinic Management System',  b:'450K – 1.2M',   c:'$3,000 – $6,000',   d:'35% More Efficient Operations'},
                    {a:'Telemedicine Platform',     b:'1.5M – 3.5M',   c:'$12,000 – $25,000', d:'2× More Patients Served'},
                    {a:'Custom EMR / EHR System',   b:'2.5M – 6M+',    c:'$20,000 – $50,000+',d:'99% Reduction in Record Errors'},
                    {a:'Hospital Management (HMS)', b:'3.5M – 8M+',    c:'$28,000 – $65,000+',d:'40% Reduction in Admin Costs'},
                    {a:'AI Diagnostic Tool',        b:'3.1M – 8M',     c:'$25,000 – $80,000', d:'50% Faster Initial Triage'},
                    {a:'Healthcare Mobile App',     b:'1.2M – 2.8M',   c:'$9,000 – $22,000',  d:'3× Patient Engagement'},
                  ].map((row,i)=>(
                    <tr key={i}><td className="ip-col-factor">{row.a}</td><td>{row.b}</td><td>{row.c}</td><td className="ip-col-highlight ip-col-good">{row.d}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section ip-testimonials" ref={revRef} aria-labelledby="reviews-heading">
          <div className="container">
            <p className="section-eyebrow">Verified Client Reviews</p>
            <div className="section-title">
              <h2 id="reviews-heading">What Clients Say About QllmSoft Healthcare Software</h2>
              <p>Verified reviews from global clients across Freelancer and Upwork — UK, USA, UAE, Saudi Arabia, and Jordan.</p>
            </div>
            <div className="ip-reviews__grid">
              {[
                {name:'Khalid A.',    loc:'Riyadh, Saudi Arabia', img:'https://qllmsoft.com/images/khalid A.webp',   text:'"QllmSoft delivered a fully functional clinic management system exactly to our specification. The HIPAA compliance documentation was thorough, and the team understood our clinical workflows from day one. Outstanding work."'},
                {name:'Neil P.',     loc:'Cardiff, United Kingdom',img:'https://qllmsoft.com/images/Neil P.webp',    text:'"We needed a telemedicine platform that could handle UK patient data compliantly. QllmSoft delivered a secure, professional application that has been running in production without issues. I will absolutely use them again."'},
                {name:'Mohammad I.', loc:'Amman, Jordan',          img:'https://qllmsoft.com/images/Muhammad I.webp',text:'"The hospital management system QllmSoft built for our network has dramatically reduced administrative errors and improved patient throughput. The code is clean, well-documented, and the support has been excellent."'},
                {name:'Fernando M.', loc:'Miramar, United States', img:'https://qllmsoft.com/images/fernandoM.webp', text:'"Professional, technically skilled, and genuinely invested in the outcome. QllmSoft built our EMR system with the security and reliability that healthcare demands. A trusted long-term technology partner."'},
              ].map((r,i)=>(
                <article key={i} className={`ip-review-card animate__animated ${revInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.1}s`}} itemScope itemType="https://schema.org/Review">
                  <div className="ip-review-card__stars" aria-label="5 out of 5 stars" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating"><meta itemProp="ratingValue" content="5"/><meta itemProp="bestRating" content="5"/>★★★★★</div>
                  <p className="ip-review-card__text" itemProp="reviewBody">{r.text}</p>
                  <div className="ip-review-card__author" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <img src={r.img} alt={`${r.name} — verified QllmSoft healthcare software client from ${r.loc}`} loading="lazy" width="44" height="44"/>
                    <div><strong itemProp="name">{r.name}</strong><span>{r.loc} — Freelancer</span></div>
                  </div>
                </article>
              ))}
            </div>
            <div style={{textAlign:'center',marginTop:'24px',display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="https://www.freelancer.com/u/mrprogrmmr" target="_blank" rel="noopener noreferrer" className="ip-btn-outline" aria-label="View QllmSoft healthcare software reviews on Freelancer">View Freelancer Reviews</a>
              <a href="https://www.upwork.com/freelancers/~0170e20f8803389a86" target="_blank" rel="noopener noreferrer" className="ip-btn-outline" aria-label="Verify QllmSoft status on Upwork">Verify Upwork Status</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section csd-faq ip-faq" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <p className="section-eyebrow">Common Questions</p>
            <div className="section-title">
              <h2 id="faq-heading">Healthcare Software Development FAQ — Pakistan &amp; Global</h2>
              <p>Practical answers to the questions healthcare providers ask most before commissioning custom software development.</p>
            </div>
            <div className="csd-faq__list">{FAQ_DATA.map((faq,i)=><FAQItem key={i} faq={faq} index={i}/>)}</div>
          </div>
        </section>

        {/* CTA */}
        <section className="section ip-cta" aria-labelledby="cta-heading">
          <div className="ip-cta__bg" aria-hidden="true"/>
          <div className="container ip-cta__inner">
            <div className="ip-cta__left">
              <p className="section-eyebrow" style={{color:'#edb702',textAlign:'left',margin:'0 0 12px'}}>Start Your Healthcare Project</p>
              <h2 id="cta-heading">Ready to Build HIPAA-Compliant Healthcare Software?</h2>
              <p className="ip-cta__desc">Whether you need a hospital management system, a telemedicine platform, or a custom EMR for your clinic network — QllmSoft delivers the compliance, security, and clinical alignment your project demands.</p>
              <div className="ip-cta__buttons">
                <Link to="/contact" className="ip-btn-primary" aria-label="Get a free healthcare software consultation from QllmSoft Pakistan">Get Free Consultation</Link>
                <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20healthcare%20software!" target="_blank" rel="noopener noreferrer" className="ip-btn-whatsapp" aria-label="WhatsApp QllmSoft about healthcare software development">💬 WhatsApp Us</a>
              </div>
              <div className="ip-cta__perks">{['✓ Free consultation','✓ HIPAA-compliant by design','✓ NDA on day one','✓ 30-day post-launch support'].map(p=><span key={p}>{p}</span>)}</div>
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
                <Link to="/education-software-development-pakistan">Education Software</Link>
                <Link to="/custom-software-development-services">Custom Software</Link>
                <Link to="/mobile-app-development">Mobile App Development</Link>
                <Link to="/api-development-services">API Development</Link>
                <Link to="/ai-powered-software-solutions">AI Solutions</Link>
              </nav>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};
export default HealthcareSoftware;
