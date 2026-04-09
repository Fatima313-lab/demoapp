/**
 * HireDotnetDevelopersPak.jsx
 * TARGET KEYWORDS:
 *  Primary:   hire dotnet developers Pakistan
 *             hire .NET developers in Pakistan
 *  Secondary: dedicated dotnet developers for hire, hire ASP.NET Core developer Pakistan,
 *             dotnet developer remote Pakistan, offshore .NET development Pakistan,
 *             .NET 8 developer Pakistan, hire C# developer Pakistan, ASP.NET developer Pakistan
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './HireDeveloper.css';
import 'animate.css';

const PAGE_URL = 'https://qllmsoft.com/hire-dotnet-developers-pakistan';
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
  serviceType:'.NET Development',
  name:'Hire .NET Developers in Pakistan',
  description:'QllmSoft provides dedicated, remote, and offshore .NET developers in Pakistan. Expert ASP.NET Core, .NET 8, and C# engineers for enterprise web applications, REST APIs, microservices, and desktop software for global businesses.',
  provider:{'@type':'Organization',name:'QllmSoft',url:'https://qllmsoft.com'},
  areaServed:['Pakistan','United States','United Kingdom','UAE','Saudi Arabia'],
  url:PAGE_URL,
  hasOfferCatalog:{
    '@type':'OfferCatalog',name:'.NET Developer Hiring Models',
    itemListElement:[
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Dedicated .NET Developer Pakistan'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'ASP.NET Core Developer for Hire Pakistan'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Remote .NET Developer Pakistan'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Offshore .NET Development Team Pakistan'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Hire C# Developer Pakistan'}},
    ],
  },
};

const schemaWebPage = {
  '@context':'https://schema.org','@type':'WebPage',
  name:'Hire .NET Developers in Pakistan | QllmSoft',
  url:PAGE_URL,
  description:'Hire expert .NET developers in Pakistan from QllmSoft. Dedicated ASP.NET Core, .NET 8, and C# engineers for enterprise web apps, REST APIs, and microservices at 60% lower cost than US/UK agencies.',
  publisher:{'@type':'Organization',name:'QllmSoft'},
  aggregateRating:{'@type':'AggregateRating',ratingValue:'5',reviewCount:'47',bestRating:'5',worstRating:'1'},
};

const schemaBreadcrumb = {
  '@context':'https://schema.org','@type':'BreadcrumbList',
  itemListElement:[
    {'@type':'ListItem',position:1,name:'Home',item:'https://qllmsoft.com/'},
    {'@type':'ListItem',position:2,name:'Services',item:'https://qllmsoft.com/services'},
    {'@type':'ListItem',position:3,name:'Hire .NET Developers Pakistan',item:PAGE_URL},
  ],
};

const FAQ_DATA = [
  {q:'How do I hire .NET developers from Pakistan?',a:'Contact QllmSoft with your project requirements — technology stack, scope, team size, and timeline. We assess your needs, match the right .NET developer from our senior team, arrange a technical interview if needed, and onboard your developer within 24–48 hours. The entire process from first contact to first commit takes days, not weeks.'},
  {q:'What is the cost of hiring a .NET developer in Pakistan?',a:'Hiring a .NET developer in Pakistan costs 60–70% less than equivalent talent in the US, UK, or Australia — without any compromise on seniority, code quality, or delivery structure. Exact rates depend on experience level and engagement model. Contact us for a transparent, fixed-price quote within 24 hours.'},
  {q:'What .NET technologies does QllmSoft specialize in?',a:'Our developers are expert in ASP.NET Core (6, 7, 8), .NET 8, C#, Entity Framework Core, Blazor, SignalR, Web API development with REST and GraphQL, Dapper, Azure deployment, SQL Server, and microservices architecture with Docker and Kubernetes.'},
  {q:'Can I hire a remote .NET developer from Pakistan?',a:'Yes. QllmSoft provides fully remote .NET developers who work in your time zone, communicate in fluent English, and use industry-standard collaboration tools — Jira, GitHub, Azure DevOps, Slack, and Microsoft Teams — for complete project transparency.'},
  {q:'What is the difference between ASP.NET Core and .NET Framework — which should I use?',a:'ASP.NET Core is the modern, cross-platform successor to .NET Framework — faster, lighter, cloud-ready, and actively supported by Microsoft through .NET 8 and beyond. .NET Framework is a legacy platform, still supported for existing applications but not recommended for new development. QllmSoft recommends ASP.NET Core for all new projects and can migrate existing .NET Framework applications to modern .NET 8.'},
  {q:'Do you provide post-project support after the .NET engagement?',a:'Yes. Every engagement includes a post-delivery support period with bug fixes, performance monitoring, security patches, and feature enhancements. Long-term maintenance retainers are available for teams that need a reliable ongoing .NET engineering partner after the initial project delivery.'},
];

const schemaFAQ = {
  '@context':'https://schema.org','@type':'FAQPage',
  mainEntity:FAQ_DATA.map(({q,a})=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}})),
};

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  const id = `net-faq-${index}`;
  return (
    <div className={`faq-item ${open?'faq-item--open':''}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button className="faq-question" onClick={()=>setOpen(o=>!o)} aria-expanded={open} aria-controls={id} itemProp="name">
        <span>{faq.q}</span><span className="faq-icon" aria-hidden="true">{open?'−':'+'}</span>
      </button>
      {open&&<div id={id} className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">{faq.a}</p></div>}
    </div>
  );
};

const HireDotnetDevelopersPak = () => {
  const { ref:skillsRef,   inView:skillsInView   } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:servicesRef, inView:servicesInView  } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:stackRef,    inView:stackInView     } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:modelsRef,   inView:modelsInView    } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:processRef,  inView:processInView   } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:compareRef,  inView:compareInView   } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:industryRef, inView:industryInView  } = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:reviewRef,   inView:reviewInView    } = useInView({ triggerOnce:true, threshold:0.08 });

  return (
    <>
      <Helmet>
        <title>Hire .NET Developers in Pakistan | Dedicated ASP.NET Core Engineers | QllmSoft</title>
        <meta name="description" content="Hire expert .NET developers in Pakistan from QllmSoft. Dedicated ASP.NET Core, .NET 8, and C# engineers for enterprise web apps, REST APIs, and microservices. 60% lower cost than US/UK agencies. Free consultation." />
        <meta name="keywords" content="hire dotnet developers Pakistan, hire .NET developers Pakistan, dedicated dotnet developers for hire, hire ASP.NET Core developer Pakistan, dotnet developer remote Pakistan, offshore .NET development Pakistan, .NET 8 developer Pakistan, hire C# developer Pakistan, ASP.NET developer Pakistan, dotnet freelancer Pakistan" />
        <meta name="author" content="QllmSoft" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content="Hire .NET Developers in Pakistan | ASP.NET Core Engineers | QllmSoft" />
        <meta property="og:description" content="Dedicated, remote, and offshore .NET developers in Pakistan. Senior ASP.NET Core and .NET 8 engineers at 60% lower cost than US/UK. Free consultation." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Hire .NET Developers Pakistan — QllmSoft" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire .NET Developers in Pakistan | QllmSoft" />
        <meta name="twitter:description" content="Senior ASP.NET Core & .NET 8 engineers in Pakistan — dedicated, remote, offshore. 60% lower cost than US/UK agencies." />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Hire .NET Developers Pakistan" />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="hd-page" style={{'--hd-accent':'#1A365D','--hd-accent-light':'#EBF8FF','--hd-accent-border':'#BEE3F8'}} role="main">

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
                <span itemProp="name" aria-current="page">Hire .NET Developers Pakistan</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* HERO */}
        <header className="hd-hero" role="banner">
          <div className="hd-hero__cut" aria-hidden="true" />
          <div className="container hd-hero__inner">
            <div className="hd-hero__content">
              <div className="hd-hero__eyebrow">
                <span className="hd-hero__dot" aria-hidden="true" />
                Pakistan's #1 .NET Engineering Team
              </div>
              <h1 className="hd-hero__title">
                Hire <span className="hd-hero__title-highlight">.NET Developers</span><br />
                in Pakistan — Remote,<br />
                Dedicated &amp; Offshore
              </h1>
              <p className="hd-hero__sub">
                Scale your product with confidence. QllmSoft's senior ASP.NET Core and .NET 8
                engineers deliver enterprise-grade web applications, REST APIs, and microservices
                at <strong>60% lower cost</strong> than US or UK agencies — without compromising quality.
              </p>
              <div className="hd-hero__buttons">
                <Link to="/contact" className="hd-btn-primary" aria-label="Hire .NET developers from QllmSoft Pakistan today">Hire .NET Developers Now</Link>
                <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20hire%20a%20.NET%20developer!" target="_blank" rel="noopener noreferrer" className="hd-btn-whatsapp" aria-label="WhatsApp QllmSoft to hire a .NET developer">💬 WhatsApp Us</a>
              </div>
              <div className="hd-hero__stats" aria-label="QllmSoft .NET development track record">
                {[{num:'10+',label:'Years .NET Experience'},{num:'5★',label:'Upwork Rating'},{num:'50+',label:'Projects Delivered'},{num:'100%',label:'Job Success'}].map(s=>(
                  <div key={s.label} className="hd-hero__stat">
                    <span className="hd-hero__stat-num">{s.num}</span>
                    <span className="hd-hero__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="hd-hero__models" aria-label=".NET developer hiring options">
              <p className="hd-hero__models-title">Flexible Hiring Models</p>
              {[
                {icon:'👤',title:'Dedicated .NET Developer',  desc:'Full-time, exclusively on your project',  badge:'Most Popular', badgeClass:'hd-badge-gold'},
                {icon:'🌐',title:'Remote .NET Engineer',      desc:'Work in your time zone, daily standups',  badge:'Flexible',     badgeClass:'hd-badge-blue'},
                {icon:'🚢',title:'Offshore .NET Team',        desc:'Full squad — devs, QA, PM included',      badge:'Best Value',   badgeClass:'hd-badge-green'},
                {icon:'⚡',title:'Freelance / Short-Term',   desc:'Bug fixes, modules, specific features',    badge:'Quick Start',  badgeClass:'hd-badge-purple'},
              ].map((m,i)=>(
                <div key={i} className="hd-model-card">
                  <div className="hd-model-card__left">
                    <div className="hd-model-card__icon">{m.icon}</div>
                    <div><strong>{m.title}</strong><p>{m.desc}</p></div>
                  </div>
                  <span className={`hd-model-badge ${m.badgeClass}`}>{m.badge}</span>
                </div>
              ))}
              <div className="hd-hero__tech" aria-label=".NET technologies">
                {['ASP.NET Core 8','C#','Entity Framework','Web API','Azure','Blazor'].map(t=><span key={t} className="hd-tech-pill">{t}</span>)}
              </div>
            </aside>
          </div>
        </header>

        {/* INTRO */}
        <section className="section hd-intro" aria-labelledby="intro-heading">
          <div className="container">
            <p className="section-eyebrow">Why Hire .NET Developers from Pakistan</p>
            <div className="hd-intro__layout">
              <div className="hd-intro__text">
                <h2 id="intro-heading">Senior .NET Developers in Pakistan — ASP.NET Core &amp; .NET 8 Specialists</h2>
                <p>The Microsoft .NET ecosystem remains one of the most productive and enterprise-proven technology stacks in the world. ASP.NET Core consistently ranks among the fastest web frameworks in independent benchmarks, .NET 8 delivers significant performance improvements over its predecessors, and the Microsoft toolchain — Azure, Visual Studio, Entity Framework Core, and Azure DevOps — provides a mature, integrated environment for enterprise software delivery.</p>
                <p>At QllmSoft, our <strong>.NET developers in Pakistan</strong> bring 10+ years of hands-on experience across the full Microsoft stack — ASP.NET Core Web API, C#, Entity Framework Core, Blazor, SignalR, SQL Server, and Azure deployment. They have delivered enterprise applications for clients in the US, UK, UAE, and Saudi Arabia, working across fintech, healthcare, eCommerce, logistics, and SaaS platforms.</p>
                <p>Hiring .NET developers from Pakistan through QllmSoft gives you access to senior, vetted C# engineers at 60% lower cost than US or UK equivalents — with full IP ownership, NDA on day one, agile delivery in 2-week sprints, and a structured post-launch support period. Explore our <Link to="/api-development-services">API development services</Link> and <Link to="/custom-software-development-services">custom software development</Link> capabilities for broader engagement options.</p>
              </div>
              <aside className="hd-intro__highlights" aria-label=".NET hiring advantages">
                {[
                  {icon:'💰',title:'60% Cost Savings',           sub:'vs US or UK .NET agencies'},
                  {icon:'⚡',title:'Onboard in 24–48 Hours',     sub:'Start building this week'},
                  {icon:'🔒',title:'Full IP Ownership',          sub:'NDA signed before work starts'},
                  {icon:'🏗️',title:'.NET 8 Specialists',        sub:'ASP.NET Core, Blazor, SignalR'},
                  {icon:'☁️',title:'Azure-Certified Deployment', sub:'Cloud-ready from day one'},
                  {icon:'🌍',title:'Any Time Zone',              sub:'US, UK, Gulf — we adapt'},
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
            <p className="section-eyebrow">What Our .NET Developers Build</p>
            <div className="section-title">
              <h2 id="skills-heading">.NET Developer Technical Capabilities</h2>
              <p>Our .NET engineers are evaluated on architecture quality, code review standards, and production performance — not just syntax knowledge. Here is the full range of capability you access.</p>
            </div>
            <div className="hd-skills__grid">
              {[
                {icon:'🌐',title:'ASP.NET Core Web Application Development',desc:'Secure, high-performance web applications built with ASP.NET Core MVC and Razor Pages — from customer-facing portals and B2B platforms to internal enterprise tools — engineered with clean architecture and zero bloat.',tags:['ASP.NET Core 8','MVC','Razor Pages','Clean Architecture','CQRS']},
                {icon:'🔗',title:'REST API & Web API Development',desc:'Well-documented, versioned REST APIs built with ASP.NET Core Web API — with proper HTTP semantics, JWT authentication, rate limiting, Swagger/OpenAPI documentation, and comprehensive integration tests.',tags:['Web API','REST','JWT','Swagger','OpenAPI 3.0']},
                {icon:'🧩',title:'Microservices Architecture',desc:'.NET microservices built with clean service boundaries, event-driven communication via Azure Service Bus or RabbitMQ, Docker containerization, and Kubernetes orchestration for distributed enterprise systems.',tags:['Microservices','Docker','Kubernetes','Azure Service Bus']},
                {icon:'💻',title:'Blazor Web & Desktop Applications',desc:'Full-stack C# applications using Blazor WebAssembly for browser-based apps and Blazor Server for real-time connected experiences — eliminating the JavaScript boundary without sacrificing interactivity.',tags:['Blazor WASM','Blazor Server','SignalR','C#']},
                {icon:'🔄',title:'Legacy .NET Migration & Modernization',desc:'Migrate .NET Framework, WebForms, WCF, and SOAP-based applications to modern ASP.NET Core — preserving business logic while eliminating technical debt, improving performance, and restoring Microsoft support coverage.',tags:['.NET Migration','WebForms','WCF → REST','ASP.NET Core Upgrade']},
                {icon:'🏭',title:'Enterprise ERP & CRM System Development',desc:'Custom ERP and CRM platforms built with ASP.NET Core — role-based access control, complex business workflow automation, third-party platform integrations, and high-volume reporting systems for enterprise operations.',tags:['ERP','CRM','RBAC','Workflow Engine','Reporting']},
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
            <p className="section-eyebrow">.NET Services We Deliver</p>
            <div className="section-title">
              <h2 id="services-heading">.NET Development Services in Pakistan</h2>
              <p>From a single API endpoint to a full enterprise .NET platform — every engagement is scoped clearly, priced transparently, and delivered on time.</p>
            </div>
            <div className="hd-services__grid">
              {[
                {n:'01',title:'ASP.NET Core Application Development',desc:'Bespoke ASP.NET Core applications built with domain-driven design, CQRS pattern, and clean architecture — ensuring your codebase remains maintainable and extensible as your product scales over years, not just months.',tags:['ASP.NET Core 8','DDD','CQRS','Mediator Pattern']},
                {n:'02',title:'REST & GraphQL API Development',desc:'Robust, well-documented APIs with proper versioning, error handling, authentication middleware, and rate limiting — built to the OpenAPI 3.0 standard with Swagger UI, tested with integration test suites, and monitored in production.',tags:['Web API','REST','GraphQL','Swagger','Integration Tests']},
                {n:'03',title:'Azure Cloud Application Development',desc:'Cloud-native .NET applications deployed on Microsoft Azure — App Service, Azure Functions serverless, Azure Container Apps, and Azure SQL — with auto-scaling, CI/CD pipelines, and Application Insights monitoring.',tags:['Azure App Service','Azure Functions','Container Apps','App Insights']},
                {n:'04',title:'Database Design & Entity Framework Core',desc:'Efficient, normalized database architectures with Entity Framework Core migrations, Dapper for complex queries, SQL Server or PostgreSQL, Redis caching layers, and performance-optimized stored procedures where required.',tags:['Entity Framework Core','Dapper','SQL Server','Redis','Migrations']},
                {n:'05',title:'Authentication, Security & Compliance',desc:'Enterprise security implementation — ASP.NET Core Identity, OAuth 2.0 / OpenID Connect, JWT tokens, role-based access control, OWASP Top 10 mitigation, and data handling aligned with GDPR and HIPAA requirements.',tags:['ASP.NET Identity','OAuth 2.0','OWASP','GDPR','JWT']},
                {n:'06',title:'.NET Testing, QA & DevOps',desc:'Complete test coverage for .NET projects — xUnit and NUnit for unit testing, Moq for mocking, integration tests with WebApplicationFactory, and CI/CD pipelines via GitHub Actions or Azure DevOps for every deployment.',tags:['xUnit','Moq','Integration Tests','Azure DevOps','GitHub Actions']},
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
              <h2 id="stack-heading">.NET Developer Technology Expertise</h2>
              <p>The complete Microsoft .NET ecosystem our engineers command — backend, data, cloud, and DevOps.</p>
            </div>
            <div className="hd-stack__grid">
              {[
                {color:'#1A365D',label:'Frameworks & Runtime',items:['ASP.NET Core 8 / 7 / 6','C# 12','Blazor (WASM & Server)','.NET MAUI','Minimal APIs']},
                {color:'#2B6CB0',label:'API & Integration',   items:['ASP.NET Web API','GraphQL (Hot Chocolate)','REST (OpenAPI 3.0)','gRPC','SignalR (WebSockets)']},
                {color:'#edb702',label:'Data & ORM',          items:['SQL Server 2022','Entity Framework Core 8','Dapper','PostgreSQL','Redis (StackExchange)']},
                {color:'#276749',label:'Cloud & DevOps',      items:['Microsoft Azure (App Service, Functions)','Docker & Kubernetes','Azure DevOps','GitHub Actions','Application Insights']},
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
              <h2 id="models-heading">.NET Developer Hiring Models</h2>
              <p>Three proven engagement structures — choose the model that fits your project timeline, team size, and budget.</p>
            </div>
            <div className="hd-models__grid">
              {[
                {icon:'👤',badge:null,title:'Dedicated .NET Developer',subtitle:'Full-time, exclusively yours',desc:'A senior .NET engineer works 100% on your project — embedded in your team, using your tools, attending your standups. No context switching, no split focus. The most cost-effective model for ongoing product development.',features:['Exclusive full-time commitment','Direct daily access to your developer','Integrate with your team and tools','Scale up additional developers monthly'],featured:false},
                {icon:'🎯',badge:'Most Popular',title:'Fixed-Price .NET Project',subtitle:'Agreed scope, agreed cost',desc:'For projects with a defined scope and clear requirements. We document, agree on price and timeline, and deliver against signed milestones. Every deliverable is signed off before the next phase begins — zero budget surprises.',features:['Fixed cost, no scope creep surprises','Milestone-based delivery & sign-off','Full code documentation & handover','30 days post-launch support'],featured:true},
                {icon:'⏱️',badge:null,title:'Time & Material',subtitle:'Pay for hours delivered',desc:'For evolving projects or ongoing .NET feature development. Pay only for hours worked each sprint, with weekly time reports, transparent tracking, and the flexibility to pause, accelerate, or redirect at any point.',features:['Weekly transparent time reports','Adjust scope or pace each sprint','No lock-in, no minimum commitment','Scales with your product roadmap'],featured:false},
              ].map((m,i)=>(
                <article key={i} className={`hd-model-section-card ${m.featured?'hd-model-section-card--featured':''} animate__animated ${modelsInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.12}s`}}>
                  {m.badge&&<span className="hd-model-section-card__badge">{m.badge}</span>}
                  <div className="hd-model-section-card__icon">{m.icon}</div>
                  <h3 className="hd-model-section-card__title">{m.title}</h3>
                  <p className="hd-model-section-card__subtitle">{m.subtitle}</p>
                  <p className="hd-model-section-card__desc">{m.desc}</p>
                  <ul className="hd-model-section-card__features">{m.features.map(f=><li key={f}>{f}</li>)}</ul>
                  <Link to="/contact" className="hd-model-cta" aria-label={`Enquire about ${m.title} for .NET development`}>Enquire Now</Link>
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
              <h2 id="process-heading">How to Hire a .NET Developer from QllmSoft — 5 Simple Steps</h2>
              <p>From your first enquiry to your developer's first commit — a friction-free, transparent process that gets you building fast.</p>
            </div>
            <ol className="hd-process__steps" aria-label="Steps to hire a .NET developer from QllmSoft Pakistan">
              {[
                {n:'01',icon:'📋',title:'Share Your Requirements',desc:'Tell us your technology stack, project scope, timeline, and preferred engagement model. We review and schedule a free call within 24 hours to discuss further.'},
                {n:'02',icon:'👥',title:'Meet Your Matched Developer',desc:'We handpick the best-matched .NET developer from our senior team and arrange a technical interview so you can assess skills, communication style, and cultural fit before committing.'},
                {n:'03',icon:'✍️',title:'Sign NDA, Agree Terms & Onboard',desc:'NDA signed on day one. Engagement agreement covers IP ownership, payment milestones, confidentiality, and escalation procedures. Your developer onboards to your tools and repositories within 24–48 hours.'},
                {n:'04',icon:'⚙️',title:'Agile Development in 2-Week Sprints',desc:'Development runs in two-week sprints with daily standups, written progress updates, and shared staging environments. You review every milestone before we advance to the next.'},
                {n:'05',icon:'🚀',title:'Launch, Handover & Ongoing Support',desc:'We handle deployment, full code documentation, and developer handover. 30 days of free post-launch support covers monitoring, bug fixes, and performance tuning.'},
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
              <h2 id="compare-heading">Hiring .NET Developers — In-House vs Freelancer vs QllmSoft Pakistan</h2>
              <p>The numbers and quality factors that matter when deciding how to source .NET engineering talent.</p>
            </div>
            <div className="hd-compare-wrap">
              <table className={`hd-compare-table animate__animated ${compareInView?'animate__fadeInUp':''}`} aria-label=".NET developer hiring comparison: in-house vs freelancer vs QllmSoft Pakistan">
                <caption>.NET Developer Hiring — In-House vs Freelancer vs QllmSoft Pakistan</caption>
                <thead><tr><th scope="col">Factor</th><th scope="col">In-House (US/UK)</th><th scope="col">Freelancer Marketplace</th><th scope="col" className="hd-col-highlight">QllmSoft Pakistan ✓</th></tr></thead>
                <tbody>
                  {[
                    {f:'Total Cost',         a:'$100–180k+/yr salary',   b:'$50–120/hr, variable',     c:'60% lower — transparent rates'},
                    {f:'Seniority Level',    a:'Depends on the hire',    b:'Variable, hard to verify', c:'Senior, vetted before you see them'},
                    {f:'Onboarding Time',    a:'4–10 weeks',             b:'1–3 days',                 c:'24–48 hours, same week'},
                    {f:'Code Review',        a:'Controlled in-house',    b:'Self-reviewed',            c:'Mandatory peer review on all PRs'},
                    {f:'Architecture',       a:'Depends on the hire',    b:'Rarely strategic',         c:'Clean arch, DDD, SOLID by default'},
                    {f:'Scalability',        a:'Slow & expensive',       b:'Hard to team up reliably', c:'Scale developers monthly, no drama'},
                    {f:'IP & NDA',           a:'Employment contract',    b:'Usually available',        c:'NDA signed before work begins'},
                    {f:'Post-Launch',        a:'Full in-house ongoing',  b:'Extra cost or not available', c:'30 days free, retainer available'},
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
              <h2 id="industries-heading">.NET Development Across Every Industry</h2>
              <p>.NET is the preferred stack for regulated, security-sensitive, and data-intensive industries. Our developers bring domain knowledge alongside technical depth.</p>
            </div>
            <div className="hd-industries__grid">
              {[
                {icon:'💳',title:'Finance & FinTech',       desc:'Secure payment processing APIs, banking portals, risk scoring engines, and compliance-aware financial software built on ASP.NET Core with OWASP security.'},
                {icon:'🏥',title:'Healthcare',              desc:'HIPAA-aware patient management systems, EHR integrations, telehealth backends, clinical reporting, and medical device data APIs on .NET.'},
                {icon:'🛒',title:'eCommerce & Retail',      desc:'High-performance eCommerce backends with ASP.NET Core — product catalog APIs, inventory management, JazzCash and Stripe payment integration.'},
                {icon:'🏭',title:'Manufacturing & ERP',    desc:'Custom ERP systems, production planning tools, inventory management, quality control dashboards, and supply chain APIs for industrial operations.'},
                {icon:'🎓',title:'Education & eLearning',  desc:'LMS backends, student data management APIs, progress tracking systems, and institutional reporting tools built on secure ASP.NET Core infrastructure.'},
                {icon:'☁️',title:'SaaS & Cloud Platforms', desc:'Multi-tenant SaaS backends, subscription management APIs, Azure-hosted microservices, and cloud-native .NET platforms designed to scale from day one.'},
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
              <h2 id="reviews-heading">What Clients Say About Hiring .NET Developers from QllmSoft</h2>
              <p>Independent reviews from global clients — UK, USA, UAE, Saudi Arabia, and Jordan — on Freelancer and Upwork.</p>
            </div>
            <div className="hd-reviews__grid">
              {[
                {name:'Khalid A.',    loc:'Riyadh, Saudi Arabia',   img:'https://qllmsoft.com/images/khalid A.webp',   text:'"Excellent .NET development across the board. The ASP.NET Core API QllmSoft delivered is clean, well-documented, and has handled every load we have thrown at it. Exactly what was scoped, delivered on time."'},
                {name:'Mohammad I.', loc:'Amman, Jordan',           img:'https://qllmsoft.com/images/Muhammad I.webp', text:'"My reliable .NET team. QllmSoft consistently delivers clean C# code, solid architecture, and fast turnaround. I have used them for multiple .NET projects and the quality never drops."'},
                {name:'Neil P.',     loc:'Cardiff, United Kingdom', img:'https://qllmsoft.com/images/Neil P.webp',     text:'"Outstanding .NET engineers. The team understood our enterprise architecture requirements from day one and delivered a maintainable, well-tested application our internal team can confidently build on."'},
                {name:'Fernando M.', loc:'Miramar, United States',  img:'https://qllmsoft.com/images/fernandoM.webp',  text:'"Professional, technically excellent, and genuinely invested in the quality of what they build. QllmSoft is the standard I compare every other .NET team to. Highly recommended without reservation."'},
              ].map((r,i)=>(
                <article key={i} className={`hd-review-card animate__animated ${reviewInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.1}s`}} itemScope itemType="https://schema.org/Review">
                  <div className="hd-review-card__stars" aria-label="5 out of 5 stars" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content="5" /><meta itemProp="bestRating" content="5" />★★★★★
                  </div>
                  <p className="hd-review-card__text" itemProp="reviewBody">{r.text}</p>
                  <div className="hd-review-card__author" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <img src={r.img} alt={`${r.name} — verified QllmSoft .NET developer client from ${r.loc}`} loading="lazy" width="46" height="46" />
                    <div><strong itemProp="name">{r.name}</strong><span>{r.loc} — Freelancer</span></div>
                  </div>
                </article>
              ))}
            </div>
            <div style={{textAlign:'center',marginTop:'28px',display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="https://www.freelancer.com/u/mrprogrmmr" target="_blank" rel="noopener noreferrer" className="hd-btn-outline" aria-label="View QllmSoft .NET developer reviews on Freelancer">View Freelancer Reviews</a>
              <a href="https://www.upwork.com/freelancers/~0170e20f8803389a86" target="_blank" rel="noopener noreferrer" className="hd-btn-outline" aria-label="Verify QllmSoft on Upwork">Verify Upwork Status</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section csd-faq hd-faq" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <p className="section-eyebrow">Common Questions</p>
            <div className="section-title">
              <h2 id="faq-heading">Frequently Asked Questions — Hire .NET Developers in Pakistan</h2>
              <p>Everything you need to know before hiring ASP.NET Core and .NET 8 developers from QllmSoft.</p>
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
              <h2 id="cta-heading">Ready to Hire Expert .NET Developers in Pakistan?</h2>
              <p className="hd-cta__desc">Whether you need a dedicated ASP.NET Core engineer embedded in your team, a fixed-price .NET project, or a full offshore .NET development squad — QllmSoft delivers the right developer at the right cost, on your timeline.</p>
              <div className="hd-cta__buttons">
                <Link to="/contact" className="hd-btn-primary" aria-label="Hire .NET developers from QllmSoft Pakistan — contact us now">Hire .NET Developers Now</Link>
                <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20hire%20a%20.NET%20developer!" target="_blank" rel="noopener noreferrer" className="hd-btn-whatsapp" aria-label="WhatsApp QllmSoft to discuss hiring a .NET developer">💬 WhatsApp Us</a>
              </div>
              <div className="hd-cta__perks">
                {['✓ Free consultation','✓ NDA on day one','✓ Onboard in 24–48 hours','✓ Full IP ownership','✓ 30 days post-launch support'].map(p=><span key={p}>{p}</span>)}
              </div>
            </div>
            <aside className="hd-cta__right">
              <div className="hd-cta__contact-card">
                <h3>Quick Contact</h3>
                <a href="mailto:info@qllmsoft.com" className="hd-cta__contact-row">📧 info@qllmsoft.com</a>
                <a href="https://wa.me/923348229288" target="_blank" rel="noopener noreferrer" className="hd-cta__contact-row" aria-label="WhatsApp QllmSoft">💬 WhatsApp — replies in 5 mins</a>
                <a href="tel:+923348229288" className="hd-cta__contact-row">📞 +92 334 8229288</a>
              </div>
              <nav className="hd-cta__related" aria-label="Related developer hiring pages">
                <p className="hd-cta__related-title">Related</p>
                <Link to="/hire-react-developers-pakistan">Hire React Developers</Link>
                <Link to="/hire-angular-developers-pakistan">Hire Angular Developers</Link>
                <Link to="/api-development-services">API Development</Link>
                <Link to="/custom-software-development-services">Custom Software</Link>
                <Link to="/outsource-software-development-to-pakistan">Outsource to Pakistan</Link>
              </nav>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};
export default HireDotnetDevelopersPak;
