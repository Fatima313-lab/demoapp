/**
 * OutsourceApiDevelopment.jsx
 * TARGET KEYWORDS (already ranking — now improve depth & quality):
 *  Primary:   outsource API development to Pakistan
 *             API development outsourcing Pakistan
 *  Secondary: outsource REST API development, offshore API development Pakistan,
 *             outsource API integration services, API outsourcing company Pakistan,
 *             outsource GraphQL development Pakistan, API development center Pakistan,
 *             hire API developers Pakistan
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './IndustryPage.css';
import 'animate.css';

const PAGE_URL = 'https://qllmsoft.com/outsource-api-development-to-pakistan';
const OG_IMAGE  = 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg';

const IconLink      = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
const IconCode      = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const IconShield    = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconZap       = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IconGlobe     = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const IconDatabase  = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
const IconSettings  = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const IconUsers     = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconDollar    = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const IconTrending  = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const IconCheck     = ({s=16}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>;

const schemaOrg = { '@context':'https://schema.org','@type':'Organization',name:'QllmSoft',url:'https://qllmsoft.com',foundingDate:'2015',logo:'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp',contactPoint:{'@type':'ContactPoint',telephone:'+92-334-8229288',contactType:'customer service',areaServed:['PK','US','GB','AE','SA'],availableLanguage:'English'},address:{'@type':'PostalAddress',streetAddress:'H # 181, Camping Ground',addressLocality:'Lalamusa',addressRegion:'Punjab',addressCountry:'PK'},sameAs:['https://www.freelancer.com/u/mrprogrmmr','https://www.upwork.com/freelancers/~0170e20f8803389a86'] };
const schemaService = { '@context':'https://schema.org','@type':'Service',serviceType:'API Development Outsourcing',name:'Outsource API Development to Pakistan',description:'QllmSoft provides offshore API development outsourcing services from Pakistan — REST, GraphQL, gRPC, SOAP APIs, third-party integrations, API testing, and dedicated API development teams for businesses worldwide at 60% lower cost than Western agencies.',provider:{'@type':'Organization',name:'QllmSoft',url:'https://qllmsoft.com'},areaServed:['Pakistan','United States','United Kingdom','UAE','Saudi Arabia'],url:PAGE_URL };
const schemaBreadcrumb = { '@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://qllmsoft.com/'},{'@type':'ListItem',position:2,name:'Services',item:'https://qllmsoft.com/services'},{'@type':'ListItem',position:3,name:'Outsource API Development to Pakistan',item:PAGE_URL}] };
const FAQ_DATA = [
  {q:'What does outsourcing API development to Pakistan mean?',a:'Outsourcing API development to Pakistan means engaging an external team — like QllmSoft — to design, build, test, document, and maintain your APIs instead of building this capability in-house. You gain access to senior REST, GraphQL, and gRPC API engineers with 10+ years of production experience, at 50–65% lower cost than equivalent US, UK, or Australian teams, with full IP ownership and structured delivery accountability.'},
  {q:'Why should I outsource API development to Pakistan specifically?',a:'Pakistan offers a deep pool of highly skilled API developers proficient in ASP.NET Core, Node.js, Python, Java Spring Boot, and cloud platforms — with strong English communication, flexible time zone alignment, and competitive rates. QllmSoft specifically brings a verified track record on Upwork (100% Job Success Score) and Freelancer, serving clients across the US, UK, UAE, and Saudi Arabia with production-grade API solutions.'},
  {q:'What API standards and technologies does QllmSoft support for outsourcing?',a:'We support the full spectrum of API standards — RESTful APIs (OpenAPI 3.0 / Swagger), GraphQL endpoints (using Hot Chocolate for .NET or Apollo for Node.js), gRPC for high-performance service communication, WebSockets and SignalR for real-time APIs, and SOAP/XML for legacy enterprise system integration. We also handle third-party API integrations with payment gateways, CRMs, ERPs, and cloud platforms.'},
  {q:'Can I outsource only API testing rather than full development?',a:'Yes. QllmSoft offers standalone API testing and quality assurance services — performance load testing, security penetration testing, functional regression testing, contract testing, and Swagger/Postman collection documentation — for APIs already developed by another team. Our testing services ensure your APIs meet performance, security, and reliability standards before they go to production.'},
  {q:'How does QllmSoft ensure API quality when working as an outsourcing partner?',a:'Quality is maintained through mandatory Swagger/OpenAPI documentation on every API, comprehensive automated test suites (unit, integration, and contract tests), peer code review by a senior engineer on every pull request, performance benchmarking against agreed SLAs, and security audit before delivery — including OWASP API Security Top 10 validation.'},
  {q:'What is the difference between outsourcing API development and hiring a dedicated API developer?',a:'Outsourcing API development typically means engaging QllmSoft to deliver a defined API project or service — with us managing the team, quality, and timeline. Hiring a dedicated API developer means a specific QllmSoft engineer is embedded full-time in your team, using your tools, attending your standups, and working exclusively on your project. Both models are available — we recommend the right fit after understanding your project scope and long-term requirements.'},
];
const schemaFAQ = { '@context':'https://schema.org','@type':'FAQPage',mainEntity:FAQ_DATA.map(({q,a})=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}})) };
const schemaWebPage = { '@context':'https://schema.org','@type':'WebPage',name:'Outsource API Development to Pakistan | REST, GraphQL & Integration | QllmSoft',url:PAGE_URL,description:'Outsource API development to Pakistan with QllmSoft. Expert REST, GraphQL, gRPC, and integration API development at 50–65% lower cost than US/UK. Free consultation.',publisher:{'@type':'Organization',name:'QllmSoft'},aggregateRating:{'@type':'AggregateRating',ratingValue:'5',reviewCount:'47',bestRating:'5',worstRating:'1'} };

const FAQItem = ({faq,index}) => {
  const [open,setOpen]=useState(false); const id=`api-out-faq-${index}`;
  return (
    <div className={`faq-item ${open?'faq-item--open':''}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button className="faq-question" onClick={()=>setOpen(o=>!o)} aria-expanded={open} aria-controls={id} itemProp="name"><span>{faq.q}</span><span className="faq-icon" aria-hidden="true">{open?'−':'+'}</span></button>
      {open&&<div id={id} className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">{faq.a}</p></div>}
    </div>
  );
};

const OutsourceApiDevelopment = () => {
  const {ref:svRef,inView:svInView}=useInView({triggerOnce:true,threshold:0.08});
  const {ref:whyRef,inView:whyInView}=useInView({triggerOnce:true,threshold:0.08});
  const {ref:procRef,inView:procInView}=useInView({triggerOnce:true,threshold:0.08});
  const {ref:clientRef,inView:clientInView}=useInView({triggerOnce:true,threshold:0.08});
  const {ref:revRef,inView:revInView}=useInView({triggerOnce:true,threshold:0.08});
  const {ref:compareRef,inView:compareInView}=useInView({triggerOnce:true,threshold:0.08});

  return (
    <>
      <Helmet>
        <title>Outsource API Development to Pakistan | REST, GraphQL & Integration | QllmSoft</title>
        <meta name="description" content="Outsource API development to Pakistan with QllmSoft. Expert REST, GraphQL, gRPC, SOAP, and third-party integration API development at 50–65% lower cost than US/UK agencies. Serving startups, SMBs, SaaS, and enterprises globally. Free consultation." />
        <meta name="keywords" content="outsource API development to Pakistan, API development outsourcing Pakistan, outsource REST API development, offshore API development Pakistan, outsource API integration services, API outsourcing company Pakistan, outsource GraphQL development Pakistan, API development center Pakistan, hire API developers Pakistan, outsource API testing Pakistan" />
        <meta name="author" content="QllmSoft" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" /><meta property="og:url" content={PAGE_URL} /><meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content="Outsource API Development to Pakistan | REST, GraphQL & Integrations | QllmSoft" />
        <meta property="og:description" content="Expert REST, GraphQL, gRPC, and third-party integration API development outsourced from Pakistan. 50–65% lower cost, senior developers, full documentation, free consultation." />
        <meta property="og:image" content={OG_IMAGE} /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" /><meta property="og:image:alt" content="Outsource API Development to Pakistan — QllmSoft" /><meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="Outsource API Development to Pakistan | QllmSoft" /><meta name="twitter:description" content="REST, GraphQL, gRPC & integration API development outsourced from Pakistan. 50–65% lower cost than US/UK." /><meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="ip-page" style={{'--ip-hero-from':'#0d1e3d','--ip-hero-mid':'#1A365D','--ip-hero-to':'#1a4a7a','--ip-accent':'#edb702','--ip-icon-bg':'#EBF8FF','--ip-icon-color':'#2B6CB0'}} role="main">

       
        {/* HERO */}
        <header className="ip-hero" role="banner">
          <div className="container ip-hero__inner">
            <div className="ip-hero__content">
              <div className="ip-hero__eyebrow"><span className="ip-hero__dot" aria-hidden="true"/>API Outsourcing Experts — Pakistan</div>
              <h1 className="ip-hero__title">Outsource API Development<br/>to Pakistan with<br/><em>QllmSoft</em></h1>
              <p className="ip-hero__sub">Connect, scale, and innovate faster. QllmSoft's offshore API development team builds secure, high-performing REST, GraphQL, and integration APIs — at <strong>50–65% lower cost</strong> than US or UK agencies — with full documentation and post-launch support included.</p>
              <div className="ip-hero__buttons">
                <Link to="/contact" className="ip-btn-primary" aria-label="Get a free API outsourcing consultation from QllmSoft Pakistan">Get a Free Consultation</Link>
                <Link to="/api-development-services" className="ip-btn-ghost" aria-label="View QllmSoft API development services in detail">View API Services</Link>
              </div>
              <div className="ip-hero__trust">
                <span>✓ 100% Upwork Job Success</span><span className="ip-hero__trust-sep"/><span>✓ 5-Star Freelancer Rating</span><span className="ip-hero__trust-sep"/><span>✓ 50+ APIs Delivered</span>
              </div>
            </div>
            <aside className="ip-hero__features" aria-label="API types we outsource">
              {[
                {Icon:IconCode,    title:'REST API Development',   desc:'Scalable RESTful APIs with OpenAPI 3.0 docs'},
                {Icon:IconGlobe,   title:'GraphQL Development',    desc:'Flexible queries, single endpoint architecture'},
                {Icon:IconLink,    title:'Third-Party Integration', desc:'CRM, ERP, payment & logistics APIs'},
                {Icon:IconShield,  title:'API Security & Testing',  desc:'OWASP-compliant, penetration-tested APIs'},
                {Icon:IconDatabase,title:'gRPC & SOAP APIs',       desc:'High-performance & enterprise legacy APIs'},
                {Icon:IconSettings,title:'API Consulting',         desc:'Architecture strategy & stack selection'},
              ].map((f,i)=>(
                <div key={i} className="ip-hero__feature">
                  <div className="ip-hero__feature-icon"><f.Icon s={20}/></div>
                  <strong>{f.title}</strong><span>{f.desc}</span>
                </div>
              ))}
              <div className="ip-hero__stats">
                {[{num:'50+',label:'APIs Delivered'},{num:'10+',label:'Years Experience'},{num:'5★',label:'Client Rating'},{num:'50–65%',label:'Cost Savings'}].map(s=>(
                  <div key={s.label} className="ip-hero__stat"><span className="ip-hero__stat-num">{s.num}</span><span className="ip-hero__stat-label">{s.label}</span></div>
                ))}
              </div>
            </aside>
          </div>
        </header>

        {/* INTRO */}
        <section className="section ip-intro" aria-labelledby="intro-heading">
          <div className="container">
            <p className="section-eyebrow">What API Outsourcing Actually Means</p>
            <div className="ip-intro__layout">
              <div className="ip-intro__text">
                <h2 id="intro-heading">Outsource API Development to Pakistan — Senior Engineers, Transparent Delivery, 60% Lower Cost</h2>
                <p>Every modern digital product runs on APIs. The payment processing your eCommerce platform depends on, the real-time data feed powering your analytics dashboard, the integration connecting your CRM to your marketing platform — all of it is API infrastructure. When that infrastructure is poorly designed, poorly documented, or poorly secured, the costs compound quickly in both technical debt and business risk.</p>
                <p>Outsourcing API development to Pakistan with QllmSoft means you access a team of senior engineers who have built production API systems for clients across the <strong>US, UK, UAE, Saudi Arabia, and Jordan</strong> — REST APIs with OpenAPI documentation, GraphQL endpoints with efficient query resolution, gRPC services for high-throughput microservices, and complex third-party integration layers connecting Stripe, Salesforce, SAP, JazzCash, and dozens of other enterprise platforms.</p>
                <p>In straightforward terms, <strong>outsourcing API development</strong> means engaging QllmSoft to design, build, test, document, and maintain your APIs instead of building this capability in-house — giving you senior engineering expertise at 50–65% lower cost, with structured delivery accountability and full IP ownership from the first line of code. Learn more about our full <Link to="/api-development-services">API development services</Link> or how we approach <Link to="/outsource-software-development-to-pakistan">software outsourcing to Pakistan</Link> more broadly.</p>
                <div className="ip-intro__badges">
                  {['Full Swagger/OpenAPI Documentation','OWASP API Security Compliant','NDA Signed Day One','100% IP Ownership'].map(b=><span key={b} className="ip-badge"><IconCheck s={13}/>{b}</span>)}
                </div>
              </div>
              <aside className="ip-intro__aside" aria-label="API outsourcing impact metrics">
                {[
                  {Icon:IconDollar,   num:'50–65%', label:'Cost savings vs US, UK, or Australian API agencies'},
                  {Icon:IconZap,      num:'24–48hr', label:'Time to onboard a dedicated API developer from QllmSoft'},
                  {Icon:IconTrending, num:'100%',   label:'Upwork Job Success Score across all API engagements'},
                  {Icon:IconShield,   num:'OWASP',  label:'API Security Top 10 compliance on every API delivered'},
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
            <p className="section-eyebrow">What You Can Outsource</p>
            <div className="section-title">
              <h2 id="services-heading">API Development Outsourcing Services We Provide</h2>
              <p>From a single REST endpoint to a full API platform — every outsourced API engagement is scoped, documented, tested, and delivered with full transparency.</p>
            </div>
            <div className="ip-services__grid">
              {[
                {Icon:IconCode,     title:'Outsource Custom REST API Development',
                  desc:'We design and build RESTful APIs following OpenAPI 3.0 standards — proper HTTP semantics, resource-based URL design, versioning strategy, JWT and OAuth 2.0 authentication, rate limiting, and comprehensive Swagger documentation that your developers can integrate against immediately.',
                  tags:['REST / RESTful','OpenAPI 3.0','JWT / OAuth 2.0','Rate Limiting','Swagger UI']},
                {Icon:IconGlobe,    title:'Outsource GraphQL API Development',
                  desc:'We build GraphQL APIs that eliminate over-fetching and under-fetching — with schema-first design, efficient resolver patterns, persisted queries, subscription support for real-time data, and Apollo or Strawberry integration depending on your technology stack.',
                  tags:['GraphQL','Apollo Server','Hot Chocolate (.NET)','Subscriptions','Schema Design']},
                {Icon:IconLink,     title:'Outsource Third-Party API Integration',
                  desc:'We integrate your applications with the external platforms your business depends on — Stripe, PayPal, JazzCash, Easypaisa, Salesforce, HubSpot, SAP, Twilio, SendGrid, Google APIs, AWS services, and dozens more — with error handling, retry logic, and webhook management built in from the start.',
                  tags:['Stripe / PayPal','JazzCash / Easypaisa','Salesforce / HubSpot','Twilio / SendGrid','Webhook Management']},
                {Icon:IconShield,   title:'Outsource API Testing & Quality Assurance',
                  desc:'We provide standalone API testing services — functional regression testing, performance and load testing, security penetration testing against OWASP API Security Top 10, contract testing, and Postman collection delivery — for APIs already developed by another team that need independent quality validation.',
                  tags:['OWASP API Security','Load Testing','Contract Testing','Postman Collections','Security Audit']},
                {Icon:IconDatabase, title:'Outsource gRPC & SOAP API Development',
                  desc:'For high-throughput microservices communication, we build gRPC services with Protocol Buffers — delivering 5–10× better performance than REST for internal service-to-service calls. For legacy enterprise integration, we build and modernize SOAP/XML APIs and manage WSDL contracts.',
                  tags:['gRPC / Protobuf','SOAP / WSDL','Microservices','High-Throughput','Enterprise Integration']},
                {Icon:IconSettings, title:'API Consulting & Architecture Strategy',
                  desc:'Not sure which API approach is right for your project — REST, GraphQL, gRPC, or event-driven? Our API architects assess your system requirements, team capability, and long-term scalability goals, then recommend the right API strategy with a clear implementation roadmap.',
                  tags:['API Strategy','Architecture Review','Stack Selection','Scalability Planning','Team Mentoring']},
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
            <p className="section-eyebrow">Our Outsourcing Process</p>
            <div className="section-title">
              <h2 id="process-heading">How Our API Development Outsourcing Process Works</h2>
              <p>A clear, structured process that takes your API project from requirements to production — with full transparency and zero hidden steps.</p>
            </div>
            <ol className="ip-process__steps">
              {[
                {n:'01',icon:'📋',title:'Requirement Analysis & API Strategy',desc:'We analyse your business requirements, integration context, consumer needs, and performance targets. We define the API architecture, versioning strategy, authentication approach, and documentation standard before any development begins.'},
                {n:'02',icon:'🏗️',title:'API Architecture & Schema Design',desc:'We design the API structure — endpoint naming conventions, data models, request/response schemas, error response standards, and security policies — all documented in OpenAPI 3.0 format for team alignment before coding starts.'},
                {n:'03',icon:'⚙️',title:'Development & Integration',desc:'API development proceeds in two-week sprints with each sprint delivering a testable API surface. Integration with your existing systems, databases, and third-party platforms is built and tested incrementally throughout development.'},
                {n:'04',icon:'🔒',title:'Security Audit, Testing & Documentation',desc:'Before delivery, every API undergoes OWASP API Security Top 10 validation, performance load testing, functional regression testing, and comprehensive Swagger/Postman documentation generation — ensuring your team can integrate and maintain with confidence.'},
                {n:'05',icon:'🚀',title:'Deployment & Post-Launch Monitoring',desc:'We manage deployment to your preferred environment — Azure, AWS, or on-premise — with monitoring dashboards, error alerting, and a 30-day post-launch support period for performance tuning, bug resolution, and integration assistance.'},
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

        {/* WHO WE SERVE */}
        <section className="section ip-dark-band" ref={clientRef} aria-labelledby="clients-heading" style={{background:'linear-gradient(145deg,#1A365D,#2B6CB0)'}}>
          <div className="container">
            <p className="section-eyebrow">Who Outsources API Development to Us</p>
            <div className="section-title">
              <h2 id="clients-heading">Businesses That Outsource API Development to QllmSoft Pakistan</h2>
              <p>Four categories of business that consistently benefit from API development outsourcing to Pakistan — and why outsourcing works for each.</p>
            </div>
            <div className="ip-clients__grid">
              {[
                {Icon:IconZap,      title:'Startups & MVPs',           desc:'Launch faster without building an API team in-house. Cost-effective REST API development for MVPs, mobile app backends, and third-party integrations that let you validate your product without a large upfront engineering investment.'},
                {Icon:IconUsers,    title:'Small & Medium Businesses',  desc:'Automate your CRM, ERP, payment, and logistics workflows through custom API integrations — without hiring and managing a dedicated API team internally. Pay for what you need, scale when your business demands it.'},
                {Icon:IconDatabase, title:'Enterprise & Large Corporations', desc:'Add specialized API engineering capacity without headcount — for microservices migration projects, legacy API modernization, third-party platform integration, and high-volume API infrastructure that requires senior architectural oversight.'},
                {Icon:IconGlobe,    title:'SaaS & Platform Companies',  desc:'Build the API layer that powers your SaaS product\'s third-party integrations, public developer API, and internal service-to-service communication — with the documentation and developer experience that enterprise customers demand.'},
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

        {/* COMPARISON TABLE */}
        <section className="section ip-compare" ref={compareRef} aria-labelledby="compare-heading">
          <div className="container">
            <p className="section-eyebrow">The Business Case</p>
            <div className="section-title">
              <h2 id="compare-heading">Outsource API Development vs Build In-House — A Direct Comparison</h2>
              <p>A clear look at the cost, speed, and quality trade-offs between building API capability in-house and outsourcing to QllmSoft Pakistan.</p>
            </div>
            <div className="ip-compare-wrap">
              <table className={`ip-compare-table animate__animated ${compareInView?'animate__fadeInUp':''}`} aria-label="API development: in-house vs outsourcing to QllmSoft Pakistan">
                <caption>API Development — In-House vs Agency vs Outsourcing to Pakistan</caption>
                <thead><tr><th scope="col">Factor</th><th scope="col">In-House Team (US/UK)</th><th scope="col">Western Agency</th><th scope="col" className="ip-col-highlight">QllmSoft Pakistan ✓</th></tr></thead>
                <tbody>
                  {[
                    {f:'Avg. Cost',          a:'$100–180k+/yr per developer',b:'$120–250/hr',              c:'50–65% lower total cost'},
                    {f:'Time to Start',      a:'4–10 weeks recruitment',     b:'1–3 weeks proposal',       c:'24–48 hours onboarding'},
                    {f:'API Documentation',  a:'Often inconsistent',         b:'Usually included',         c:'Full Swagger/OpenAPI always'},
                    {f:'Security Standards', a:'Depends on the hire',        b:'Usually OWASP-aware',      c:'OWASP API Top 10 on all APIs'},
                    {f:'Scalability',        a:'Slow to add capacity',       b:'Fixed team size',          c:'Scale developers monthly'},
                    {f:'IP Ownership',       a:'Employment contract',        b:'Usually full',             c:'Full — NDA signed day one'},
                    {f:'Post-Launch Support',a:'Full in-house cost',         b:'Paid retainer',            c:'30 days free, SLA available'},
                    {f:'Documentation',      a:'Often deprioritised',        b:'Included',                 c:'Postman + Swagger always delivered'},
                  ].map((row,i)=>(
                    <tr key={i}><td className="ip-col-factor">{row.f}</td><td>{row.a}</td><td>{row.b}</td><td className="ip-col-highlight ip-col-good">{row.c}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* WHY QLLMSOFT */}
        <section className="section ip-why" ref={whyRef} aria-labelledby="why-heading">
          <div className="container">
            <p className="section-eyebrow">Why QllmSoft for API Outsourcing</p>
            <div className="section-title">
              <h2 id="why-heading">Why Businesses Choose QllmSoft for API Development Outsourcing in Pakistan</h2>
              <p>There are many API development companies in Pakistan. Here is the specific combination of factors that makes QllmSoft the trusted outsourcing partner for global businesses.</p>
            </div>
            <div className="ip-why__grid">
              {[
                {Icon:IconCode,     title:'10+ Years of Production REST, GraphQL & gRPC APIs',    desc:'Our developers bring hands-on, production-validated experience with every major API standard — not just tutorial-level knowledge. Fewer surprises, faster delivery, and interfaces built to perform under real load.'},
                {Icon:IconShield,   title:'Security-First API Engineering',                       desc:'OWASP API Security Top 10 compliance is mandatory on every API we deliver — not optional. Authentication, rate limiting, input validation, and secure data handling are built in from the architecture phase.'},
                {Icon:IconGlobe,    title:'Full Swagger/OpenAPI Documentation Always',            desc:'Every API we deliver includes complete Swagger UI documentation and Postman collection — so your development team can integrate immediately without reverse-engineering what the API does.'},
                {Icon:IconZap,      title:'Pakistan-Specific Payment Gateway Expertise',          desc:'We have built native integrations with JazzCash, Easypaisa, 2Checkout, and Checkout.com — alongside TCS, Leopards, and Trax logistics APIs — giving Pakistani businesses technical advantages that international agencies simply cannot match.'},
                {Icon:IconUsers,    title:'Verified Global Track Record',                         desc:'100% Job Success Score on Upwork. 5-star reviews on Freelancer from clients across the UK, USA, UAE, and Saudi Arabia. Independent verification that our API quality is real — not just claimed.'},
                {Icon:IconTrending, title:'Transparent Communication & Agile Delivery',           desc:'Direct developer access — no account manager middlemen. Regular sprint demos, written progress updates, shared repositories, and daily standup availability across your time zone make remote API outsourcing genuinely seamless.'},
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

        {/* TECH STACK */}
        <section className="section ip-stack" aria-labelledby="stack-heading">
          <div className="container">
            <p className="section-eyebrow">Platforms &amp; Technologies</p>
            <div className="section-title">
              <h2 id="stack-heading">API Development Technologies We Outsource In</h2>
              <p>No matter your technology stack, we have the expertise to build, test, and maintain your APIs.</p>
            </div>
            <div className="ip-stack__grid">
              {[
                {color:'#1A365D',label:'Backend Frameworks',  items:['ASP.NET Core 8 (Web API)','Node.js / Express','Python (Django REST, FastAPI)','Java Spring Boot','PHP (Laravel API)']},
                {color:'#2B6CB0',label:'API Standards',       items:['REST / RESTful','GraphQL (Apollo, Hot Chocolate)','gRPC / Protocol Buffers','WebSockets / SignalR','SOAP / XML / WSDL']},
                {color:'#edb702',label:'Security & Auth',     items:['OAuth 2.0 / OpenID Connect','JWT Token Authentication','API Key Management','Rate Limiting (Redis)','OWASP API Security Top 10']},
                {color:'#276749',label:'Docs & Testing',      items:['Swagger / OpenAPI 3.0','Postman Collections','K6 Performance Testing','OWASP ZAP Security Testing','Contract Testing (Pact)']},
              ].map((col,i)=>(
                <article key={i} className="ip-stack-col" style={{'--col-color':col.color}} aria-label={`${col.label} technologies`}>
                  <h3 className="ip-stack-col__label">{col.label}</h3>
                  <ul className="ip-stack-col__list">{col.items.map(item=><li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section ip-testimonials" ref={revRef} aria-labelledby="reviews-heading">
          <div className="container">
            <p className="section-eyebrow">Verified Client Reviews</p>
            <div className="section-title">
              <h2 id="reviews-heading">What Clients Say About Outsourcing API Development to QllmSoft</h2>
              <p>Independent reviews from global clients on Freelancer and Upwork — UK, USA, UAE, Saudi Arabia, and Jordan.</p>
            </div>
            <div className="ip-reviews__grid">
              {[
                {name:'Khalid A.',    loc:'Riyadh, Saudi Arabia', img:'https://qllmsoft.com/images/khalid A.webp',   text:'"The REST API QllmSoft delivered is exactly what we needed — well-structured, fully documented in Swagger, and secure. The team delivered within the agreed timeline and communicated proactively throughout. Outstanding."'},
                {name:'Neil P.',     loc:'Cardiff, United Kingdom',img:'https://qllmsoft.com/images/Neil P.webp',    text:'"We outsourced our entire API layer to QllmSoft. The quality of the code, the completeness of the documentation, and the team\'s responsiveness to integration questions post-delivery made this one of the best technical engagements we have had."'},
                {name:'Mohammad I.', loc:'Amman, Jordan',          img:'https://qllmsoft.com/images/Muhammad I.webp',text:'"QllmSoft built a complex API integration between our CRM, payment gateway, and logistics provider. The result was clean, well-tested, and handled every edge case we threw at it. My most reliable API development partner."'},
                {name:'Fernando M.', loc:'Miramar, United States', img:'https://qllmsoft.com/images/fernandoM.webp', text:'"Outsourcing our GraphQL API to QllmSoft was the right decision. The architecture they designed is scalable, the queries are efficient, and the documentation means our frontend team integrated in a day. Genuinely excellent work."'},
              ].map((r,i)=>(
                <article key={i} className={`ip-review-card animate__animated ${revInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.1}s`}} itemScope itemType="https://schema.org/Review">
                  <div className="ip-review-card__stars" aria-label="5 out of 5 stars" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating"><meta itemProp="ratingValue" content="5"/><meta itemProp="bestRating" content="5"/>★★★★★</div>
                  <p className="ip-review-card__text" itemProp="reviewBody">{r.text}</p>
                  <div className="ip-review-card__author" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <img src={r.img} alt={`${r.name} — verified QllmSoft API outsourcing client from ${r.loc}`} loading="lazy" width="44" height="44"/>
                    <div><strong itemProp="name">{r.name}</strong><span>{r.loc} — Freelancer</span></div>
                  </div>
                </article>
              ))}
            </div>
            <div style={{textAlign:'center',marginTop:'24px',display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="https://www.freelancer.com/u/mrprogrmmr" target="_blank" rel="noopener noreferrer" className="ip-btn-outline" aria-label="View QllmSoft API outsourcing reviews on Freelancer">View Freelancer Reviews</a>
              <a href="https://www.upwork.com/freelancers/~0170e20f8803389a86" target="_blank" rel="noopener noreferrer" className="ip-btn-outline" aria-label="Verify QllmSoft Upwork status">Verify Upwork Status</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section csd-faq ip-faq" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <p className="section-eyebrow">Common Questions</p>
            <div className="section-title">
              <h2 id="faq-heading">FAQ — Outsource API Development to Pakistan</h2>
              <p>Answers to the most common questions businesses ask before outsourcing API development to Pakistan.</p>
            </div>
            <div className="csd-faq__list">{FAQ_DATA.map((faq,i)=><FAQItem key={i} faq={faq} index={i}/>)}</div>
          </div>
        </section>

        {/* CTA */}
        <section className="section ip-cta" aria-labelledby="cta-heading">
          <div className="ip-cta__bg" aria-hidden="true"/>
          <div className="container ip-cta__inner">
            <div className="ip-cta__left">
              <p className="section-eyebrow" style={{color:'#edb702',textAlign:'left',margin:'0 0 12px'}}>Start Outsourcing Today</p>
              <h2 id="cta-heading">Ready to Outsource API Development to Pakistan?</h2>
              <p className="ip-cta__desc">Whether you need a REST API from scratch, a GraphQL endpoint, a complex third-party integration, or standalone API testing services — QllmSoft delivers within budget, on time, and fully documented.</p>
              <div className="ip-cta__buttons">
                <Link to="/contact" className="ip-btn-primary" aria-label="Get a free API outsourcing consultation from QllmSoft Pakistan">Get a Free Consultation</Link>
                <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20outsource%20API%20development!" target="_blank" rel="noopener noreferrer" className="ip-btn-whatsapp" aria-label="WhatsApp QllmSoft about API outsourcing">💬 WhatsApp Us</a>
              </div>
              <div className="ip-cta__perks">{['✓ Free consultation','✓ NDA on day one','✓ Full Swagger docs included','✓ OWASP security compliant','✓ 30-day post-launch support'].map(p=><span key={p}>{p}</span>)}</div>
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
                <Link to="/api-development-services">API Development Services</Link>
                <Link to="/outsource-software-development-to-pakistan">Outsource Software</Link>
                <Link to="/custom-software-development-services">Custom Software</Link>
                <Link to="/hire-dotnet-developers-pakistan">Hire .NET Developers</Link>
                <Link to="/website-development-services">Web Development</Link>
              </nav>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};
export default OutsourceApiDevelopment;
