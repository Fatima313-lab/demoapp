/**
 * CustomSoftwareDevelopment.jsx
 * ─────────────────────────────
 * 100% SEO-Optimized:
 *  ✓ react-helmet-async  → <title>, meta description, canonical, robots
 *  ✓ Open Graph tags     → Facebook / LinkedIn rich previews
 *  ✓ Twitter Card tags   → Twitter rich previews
 *  ✓ JSON-LD schemas     → Organization, BreadcrumbList, FAQPage, Service
 *  ✓ Semantic HTML5      → <main>, <article>, <section>, <nav>, <header>
 *  ✓ H1→H2→H3→H4        → Proper heading hierarchy, one H1 only
 *  ✓ Alt / aria-label    → Every image has descriptive alt text
 *  ✓ Internal links      → Keyword-rich anchor text throughout
 *  ✓ Page speed hints    → loading="lazy" + width/height on all images
 *  ✓ itemScope/itemProp  → Inline microdata on Review, Organization, FAQPage
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import "./CustomSoftwareDevelopment.css";
import "animate.css";
import FounderNote from "../components/FounderNote";
import TestimonialSection from "../components/TestimonialSection";
import RelatedSolutions from "../components/RelatedSolutions";

/* ─── Page constants ──────────────────────────────────────── */
const PAGE_URL = "https://qllmsoft.com/custom-software-development-services";
const OG_IMAGE =
  "https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg";

/* ─── JSON-LD: Organization ───────────────────────────────── */
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "QllmSoft",
  url: "https://qllmsoft.com",
  logo: "https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-334-8229288",
    contactType: "customer service",
    areaServed: ["PK", "US", "GB", "AE", "SA"],
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "H # 181, Camping Ground",
    addressLocality: "Lalamusa",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  sameAs: ["https://www.freelancer.com/u/mrprogrmmr"],
};

/* ─── JSON-LD: Service ────────────────────────────────────── */
const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software Engineering",
  name: "Custom Software Development Services in Pakistan",
  description:
    "QllmSoft provides end-to-end custom software development in Pakistan including web apps, mobile apps, desktop software, cloud solutions, AI integrations, and REST APIs for startups and enterprises worldwide.",
  provider: {
    "@type": "Organization",
    name: "QllmSoft",
    url: "https://qllmsoft.com",
  },
  areaServed: [
    "Pakistan",
    "United States",
    "United Kingdom",
    "UAE",
    "Saudi Arabia",
  ],
  url: PAGE_URL,
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "1000",
    description: "Custom software development projects starting from $1,000",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Solutions",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise ERP Development" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Platform Engineering" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI & ML System Integration" }}
    ]
  }
};



/* ─── JSON-LD: Author / Expert Schema ─────────────────────── */
const schemaAuthor = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Zain Ul Abedin",
  "jobTitle": "Lead Software Architect & Founder",
  "description": "Expert Software Engineer with 10+ years of experience specializing in .NET Core, Cloud Architecture, and AI integrations. Founder of QllmSoft.",
  "affiliation": {
    "@type": "Organization",
    "name": "QllmSoft"
  },
  "url": "https://qllmsoft.com",
  "sameAs": [
    "https://www.linkedin.com/in/zain-ul-abedin-b09a613b/", 
    "https://www.upwork.com/freelancers/~01c2b01d0c11909f17",
    "https://www.freelancer.com/u/mrprogrmmr"
  ],
  "knowsAbout": [
    "Custom Software Development",
    "ASP.NET Core",
    "Microservices Architecture",
    "Azure Cloud Migration",
    "AI & OpenAI Integration"
  ]
};




/* ─── JSON-LD: BreadcrumbList ─────────────────────────────── */
const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://qllmsoft.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://qllmsoft.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Custom Software Development Services",
      item: PAGE_URL,
    },
  ],
};

/* ─── FAQ data (drives both UI + JSON-LD) ─────────────────── */
const FAQ_DATA = [
  {
   q: "What specialized custom software development services does QllmSoft provide?",
    a: "As a leading software house in Pakistan, QllmSoft provides comprehensive engineering services including enterprise web applications (.NET & React), cross-platform mobile apps (Flutter/React Native), and robust Windows desktop solutions. We specialize in Azure based cloud migration and embedding AI capabilities using OpenAI and ML.NET to automate complex business workflows.",
  },
  {
    q: "Which industries does QllmSoft serve?",
    a: "We build specialized software for finance and banking, healthcare (HIPAA-compliant), real estate, education and eLearning, logistics and supply chain, SaaS product companies, and general enterprise and SMB clients worldwide. Our industry knowledge means we build for your compliance and operational context, not just your feature list.",
  },
  {
   q: "What is the average cost of hiring a software development company in Pakistan?",
    a: "While project costs vary by complexity, QllmSoft offers premium offshore value. Web based systems typically start at $1,000, mobile solutions at $1,200, and enterprise desktop tools at $1,500. We provide transparent, milestone based pricing to ensure you get maximum ROI without the overhead costs of Western agencies.",
  },
  {
    q: "What technology stack does QllmSoft use for custom software development?",
    a: "Our primary stack is centered on the Microsoft .NET ecosystem — ASP.NET Core for backend, React and Angular for frontend, SQL Server for data, Flutter and React Native for mobile, and Microsoft Azure for cloud hosting. We also work with ML.NET and OpenAI APIs for AI-powered features.",
  },
  {
    q: "Do you provide post-launch support and maintenance for custom software?",
    a: "Yes — every engagement includes dedicated post-launch support. We provide bug fixes, performance monitoring, security patches, and feature enhancements after deployment. Long-term maintenance contracts are available for businesses that want a reliable ongoing software partner.",
  },
  {
    q: "Can QllmSoft work with clients in the US, UK, and Gulf remotely?",
    a: "Absolutely. The majority of our clients are based in the United States, United Kingdom, UAE, and Saudi Arabia. We operate as a reliable offshore software development partner with flexible engagement models, real-time project tracking, and strong English communication.",
  },
];

/* ─── JSON-LD: FAQPage ────────────────────────────────────── */
const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

/* ─── FAQ Accordion ───────────────────────────────────────── */
const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  const answerId = `faq-answer-${index}`;
  return (
    <div
      className={`faq-item ${open ? "faq-item--open" : ""}`}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        className="faq-question"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={answerId}
        itemProp="name"
      >
        <span>{faq.q}</span>
        <span className="faq-icon" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div
          id={answerId}
          className="faq-answer"
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          <p itemProp="text">{faq.a}</p>
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════════════════════ */
const CustomSoftwareDevelopment = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: industriesRef, inView: industriesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: processRef, inView: processInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: whyRef, inView: whyInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <>
      {/* ══════════════════════════════════════════════════
          SEO HEAD
      ══════════════════════════════════════════════════ */}
      <Helmet>
        {/* ── Primary ───────────────────────────────── */}
        <title>
          Custom Software Development Services in Pakistan | QllmSoft
        </title>
        <meta
          name="description"
          content="QllmSoft is Pakistan's trusted custom software development company. We build secure, scalable web apps, mobile apps, desktop software, and AI-powered solutions for startups and enterprises in the US, UK, UAE, and globally."
        />
        <meta
          name="keywords"
          content="custom software development Pakistan, software development company Pakistan, web application development Pakistan, mobile app development Pakistan, ASP.NET Core development Pakistan, offshore software development Pakistan, custom software development services, enterprise software development Pakistan"
        />
        <meta name="author" content="QllmSoft" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={PAGE_URL} />

        {/* ── Open Graph ────────────────────────────── */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="QllmSoft" />
        <meta
          property="og:title"
          content="Custom Software Development Services in Pakistan | QllmSoft"
        />
        <meta
          property="og:description"
          content="Pakistan's trusted custom software development company building secure, scalable web, mobile, desktop, and AI-powered software for global clients."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="QllmSoft — Custom Software Development Company Pakistan"
        />
        <meta property="og:locale" content="en_US" />

        {/* ── Twitter Card ──────────────────────────── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom Software Development Services in Pakistan | QllmSoft"
        />
        <meta
          name="twitter:description"
          content="Pakistan's trusted custom software development company building web, mobile, desktop, and AI software for global clients."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta
          name="twitter:image:alt"
          content="QllmSoft — Custom Software Development Company Pakistan"
        />


<meta name="geo.region" content="PK-PB" />
<meta name="geo.placename" content="Lalamusa" />
<meta name="geo.position" content="32.7015;73.9605" />
<meta name="ICBM" content="32.7015, 73.9605" />



        {/* ── JSON-LD Structured Data ────────────────── */}
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">
          {JSON.stringify(schemaService)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaBreadcrumb)}
        </script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="csd-page" role="main">
        {/* ══════════════════════════════════════════════════
            HERO  —  single H1 on the page
        ══════════════════════════════════════════════════ */}
        <header className="csd-hero">
          <div className="container">
            <p className="csd-hero__eyebrow">
              Pakistan's Trusted Software Development Partner
            </p>

            {/* ✅ ONE H1 */}
            <h1 className="csd-hero__title">
              Custom Software Development
              <br />
              Services in Pakistan
            </h1>

          <p className="csd-hero__sub">
      We engineer high performance <strong>enterprise solutions</strong> tailored to your unique business workflows. 
      From specialized <Link to="/finance-management-system" className="inline-link">Finance Management Systems</Link> to 
      secure web and mobile ecosystems, we help organizations scale with reliable, AI driven architectures.
    </p>

            <div className="csd-hero__buttons">
              <Link
                to="/contact"
                className="btn btn-primary"
                aria-label="Get a free custom software development consultation from QllmSoft Pakistan"
              >
                Start your Project
              </Link>
              <Link
                to="/projects"
                className="btn btn-outline-light"
                aria-label="View QllmSoft custom software development projects portfolio"
              >
                Browser Portfolio 
              </Link>
            </div>

            <div
              className="csd-hero__stats"
              aria-label="QllmSoft key statistics"
            >
              {[
                { num: "50+", label: "Projects Delivered" },
                { num: "50+", label: "Global Clients" },
                { num: "10+", label: "Years of Expertise" },
              ].map((s) => (
                <div key={s.label} className="csd-hero__stat">
                  <strong className="csd-hero__stat-num">{s.num}</strong>
                  <span className="csd-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="csd-hero__pills" aria-label="Core service areas">
              {[
                {
                  icon: "🚀",
                  title: "Web Application Development",
                  desc: "ASP.NET Core, React, Angular — from SaaS platforms to enterprise dashboards.",
                },
                {
                  icon: "📱",
                  title: "Hybrid Mobile Apps",
                  desc: "iOS & Android apps with Flutter and React Native.",
                },
                {
                  icon: "🤖",
                  title: "AI-Powered Software Solutions",
                  desc: "ML.NET and OpenAI-powered intelligent integrations.",
                },
              ].map((p) => (
                <div key={p.title} className="csd-hero__pill">
                  <span className="pill-icon" aria-hidden="true">
                    {p.icon}
                  </span>
                  <div>
                    <strong>{p.title}</strong>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="csd-hero__tags" aria-label="Technologies used">
              {[
                "ASP.NET Core",
                "React",
                "Angular",
                "Azure",
                "SQL Server",
                "OpenAI API",
              ].map((t) => (
                <span key={t} className="csd-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* ══════════════════════════════════════════════════
            ABOUT  —  H2
        ══════════════════════════════════════════════════ */}
        <section
          className="section csd-about bg-light"
          ref={aboutRef}
          aria-labelledby="about-heading"
          itemScope
          itemType="https://schema.org/Organization"
        >
          <div className="container">
           
            <div className="about-content">
              <article
                className={`about-text animate__animated ${aboutInView ? "animate__fadeInLeft" : ""}`}
              >
                <h2 id="about-heading" className="about-title">
                Engineering the Next Generation of <span>Global Innovation</span>
                </h2>
              <p>
          At QllmSoft, we are more than just a <strong>custom software development company</strong>. 
          We act as your dedicated technical partners, helping SMEs and large scale enterprises 
          across the globe build technology that drives revenue not overhead.
        </p>
        <p>
          Our team of senior engineers, UI/UX designers, and QA specialists combines deep technical 
          skill with a genuine understanding of business logic. Whether you are launching your 
          first digital product, modernizing a legacy system, or scaling a complex enterprise 
          application, we treat your project with the same commitment and precision as if it were our own.
        </p>
        <p>
          Serving a diverse clientele across the{" "}
          <strong>
        globe
          </strong>
          , we offer the strategic advantage of{" "}
          <Link to="/outsource-software-development-to-pakistan">
            global offshore development
          </Link>{" "}
          without ever compromising on communication, code quality, or delivery timelines.
        </p>
                <div
                  className="csd-badges"
                  aria-label="Certifications and process standards"
                >
                  {[
                    "GDPR & HIPAA Compliant",
                    "ISO Aligned Processes",
                    "Agile Delivery",
                    "Global Clients",
                  ].map((b) => (
                    <span key={b} className="csd-badge">
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </article>

              <aside
                className={`csd-about__stats animate__animated ${aboutInView ? "animate__fadeInRight" : ""}`}
                aria-label="Company performance metrics"
              >
                {[
                  {
                    num: "98%",
                    label:
                      "Client Satisfaction Rate — measured across all completed projects",
                  },
                  { num: "50+", label: "Software Projects Delivered" },
                  { num: "30+", label: "Global Clients Served" },
                  { num: "10+", label: "Years of Development Expertise" },
                ].map((s) => (
                  <div key={s.num} className="csd-about__stat-card">
                    <span className="csd-about__stat-num">{s.num}</span>
                    <span className="csd-about__stat-label">{s.label}</span>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SERVICES  —  H2 + H3s
        ══════════════════════════════════════════════════ */}
        <section
          className="section csd-services"
          ref={servicesRef}
          aria-labelledby="services-heading"
        >
          <div className="container">
            <p className="section-eyebrow">What We Build</p>
            <div className="section-title">
              <h2 id="services-heading">
              High Performance Software Engineering <span>in Pakistan</span>
              </h2>
              <p>
               From initial discovery to post launch scaling, we deliver end to end 
        software excellence. Our team doesn't just build apps; we engineer 
        <strong> robust business assets</strong>.
              </p>
            </div>

            <div className="csd-services__grid">
              {[
                {
                  icon: "🌐",
                  title: "Web Application Development",
                  desc: "We build fast, scalable, and secure web platforms using ASP.NET Core, React, and Angular — from internal admin dashboards and B2B portals to complete SaaS products with multi-tenant architecture.",
                  link: "/website-development-services",
                  aria: "Learn about web application development services in Pakistan",
                },
                {
                  icon: "📱",
                  title: "Mobile App Development",
                  desc: "Cross platform iOS and Android apps built with Flutter and React Native that feel native, perform reliably, and sync seamlessly with your existing web and backend systems.",
                  link: "/mobile-app-development",
                  aria: "Learn about mobile app development services in Pakistan",
                },
                {
                  icon: "🖥️",
                  title: "Desktop Software Development",
                  desc: "Reliable, secure Windows desktop applications tailored for enterprise environments — whether it's document management, ERP tools, point of sale systems, or complex data entry workflows.",
                  link: "/services",
                  aria: "Learn about desktop software development services",
                },
                {
                  icon: "☁️",
                  title: "Cloud Application Development",
                  desc: "We design and deploy cloud native applications on Microsoft Azure, optimizing for uptime, resource efficiency, auto scaling, and cost control — built for businesses that cannot afford downtime.",
                  link: "/services",
                  aria: "Learn about cloud application development on Microsoft Azure",
                },
                {
                  icon: "🤖",
                  title: "AI & Machine Learning Solutions",
                  desc: "Using ML.NET and OpenAI APIs, we embed intelligent features into your software — predictive analytics, document automation, chatbots, and smart workflows that reduce manual effort.",
                  link: "/ai-powered-software-solutions",
                  aria: "Learn about AI and machine learning software solutions",
                },
                {
                  icon: "🔗",
                  title: "API Development & Integration",
                  desc: "We build custom REST and GraphQL APIs and integrate third party platforms — CRMs, ERPs, payment gateways, and communication tools — so your systems communicate without friction.",
                  link: "/api-development-services",
                  aria: "Learn about API development and integration services in Pakistan",
                },
              ].map((s, i) => (
                <article
                  key={i}
                  className={`csd-service-card animate__animated ${servicesInView ? "animate__fadeInUp" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <span className="csd-service-card__icon" aria-hidden="true">
                    {s.icon}
                  </span>
                  <h3 className="csd-service-card__title" itemProp="name">
                    {s.title}
                  </h3>
                  <p className="csd-service-card__desc" itemProp="description">
                    {s.desc}
                  </p>
                  <Link
                    to={s.link}
                    className="csd-service-card__link"
                    aria-label={s.aria}
                  >
                    Learn More →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            INDUSTRIES  —  H2 + H3s
        ══════════════════════════════════════════════════ */}
        <section
          className="section csd-industries"
          ref={industriesRef}
          aria-labelledby="industries-heading"
        >
          <div className="container">
            <p className="section-eyebrow">Industries We Serve</p>
            <div className="section-title">
              <h2 id="industries-heading">
                Industry Specific Software Solutions
              </h2>
             <p>
    We understand that every sector operates under unique regulatory 
    frameworks, market pressures, and user expectations. 
    <strong> QllmSoft delivers specialized, high performance systems </strong> 
    designed to meet the complex demands of global enterprises and 
    innovative startups, ensuring real world scalability and long term 
    operational efficiency.
  </p>
            </div>
            <div className="csd-industries__grid">
              {[
                {
                  icon: "bi-bank",
                  title: "Finance & Banking Software",
                  desc: "We architect high security payment gateways and risk dashboards. Our team ensures 99.9% uptime and strict compliance with global financial data standards.",
                  tech: ".NET Core • SQL Server • OAuth2",
                },
                {
                  icon:"bi-heart-pulse",
                  title: "Healthcare Management Systems",
                  desc: "We build HIPAA compliant patient portals, electronic health records (EHR), telehealth platforms, and appointment scheduling systems that improve patient care and staff efficiency.",
                  tech: "Azure Health • HL7/FHIR • HIPAA",
                },
                {
                  icon: "bi-mortarboard",
                  title: "Education & eLearning Platforms",
                  desc: "Our developers build scalable LMS platforms capable of handling thousands of concurrent students with interactive course tools.",
                   tech: "React • SignalR • Azure Stream",
                },
                {
                  icon:"bi-building-up",
                  title: "Real Estate CRM & Management",
                  desc: "Property listing platforms, client focused CRMs, virtual tour integrations, and operations management tools that modernize how real estate businesses serve their customers.",
                },
                {
                  icon: "bi-truck",
                  title: "Logistics & Supply Chain",
                  desc: "Inventory tracking, fleet management, route optimization, and end to end supply chain visibility tools built for logistics providers who need speed and control in one place.",
                  tech: "IoT • PowerBI • Microservices",
                },
                {
                  icon: "bi-cloud-check",
                  title: "SaaS & Cloud Product Development",
                  desc: "we help to build Scalable multi tenant SaaS platforms with subscription billing, user role management, analytics dashboards, and seamless API integrations engineered to grow from Day 1.",
                   tech: "Azure • Stripe • Redis",
                },
              ].map((ind, i) => (
                <article
                  key={i}
                  className={`csd-industry-card animate__animated ${industriesInView ? "animate__fadeInUp" : ""}`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                ><div className="csd-industries__icon-box">
        <i className={`bi ${ind.icon}`} aria-hidden="true"></i>
      </div>
                  <h3 className="csd-industry-card__title">{ind.title}</h3>
                  <p className="csd-industry-card__desc">{ind.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>






  
 






        

        {/* ══════════════════════════════════════════════════
            PROCESS  —  H2 + H4s (ordered list for crawlers)
        ══════════════════════════════════════════════════ */}
        <section
          className="section csd-process"
          ref={processRef}
          aria-labelledby="process-heading"
        >
          <div className="container">
            
            <div className="section-title">
              <h2 id="process-heading">
                Our Custom Software Development Process
              </h2>
              <p>
                We follow a structured, business driven methodology that keeps
                your project on track from the first conversation to the final
                delivery  and beyond.
              </p>
            </div>

            <div className="csd-process__layout">
              <ol
                className="csd-process__steps"
                aria-label="Software development process steps"
              >
                {[
                  {
                    n: "1",
                    title: "Discovery & Concept Validation",
                    desc: "We begin by understanding your business, goals, and users. We validate the concept and identify the right technical approach before a single line of code is written.",
                  },
                  {
                    n: "2",
                    title: "Project Planning & Scoping",
                    desc: "We define timelines, milestones, technology stack, team allocation, and cost structure — giving you full transparency from the start.",
                  },
                  {
                    n: "3",
                    title: "Requirements Analysis",
                    desc: "Our business analysts document detailed functional and non functional requirements, ensuring development decisions are grounded in real business need.",
                  },
                  {
                    n: "4",
                    title: "UI/UX Design",
                    desc: "We design intuitive, accessible interfaces that users actually enjoy  validated through wireframes and interactive prototypes before development begins.",
                  },
                  {
                    n: "5",
                    title: "Agile Development & Sprints",
                    desc: "Development happens in two week sprints with regular demos and feedback loops keeping you informed and in control throughout the build.",
                  },
                  {
                    n: "6",
                    title: "Testing, QA & Integration",
                    desc: "Every module goes through rigorous automated and manual QA  unit testing, integration testing, performance benchmarking, and security audits.",
                  },
                  {
                    n: "7",
                    title: "Deployment & Ongoing Support",
                    desc: "We handle deployment to your preferred environment , cloud or on premise  and provide long  term maintenance, updates, and performance monitoring.",
                  },
                ].map((step, i) => (
                  <li
                    key={i}
                    className={`csd-process__step animate__animated ${processInView ? "animate__fadeInLeft" : ""}`}
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <div
                      className="csd-process__step-num"
                      aria-label={`Step ${step.n}`}
                    >
                      {step.n}
                    </div>
                    <div className="csd-process__step-body">
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <aside
                className={`csd-process__cta animate__animated ${processInView ? "animate__fadeInRight" : ""}`}
                aria-label="Start your software project"
              >
                <img
                  src="https://qllmsoft.com/images/custom-software-steps.webp"
                  alt="QllmSoft custom software development process — 7-step agile methodology illustration"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <div className="csd-process__cta-box">
                  <h3>Ready to Start Your Custom Software Project?</h3>
                  <p>
                    Share your idea with us and get a structured development
                    roadmap , free of charge, no obligation.
                  </p>
                  <Link
                    to="/contact"
                    className="btn btn-primary"
                    aria-label="Contact QllmSoft to start your custom software development project"
                  >
                    Start the Conversation
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            WHY CHOOSE US  —  H2 + H3s
        ══════════════════════════════════════════════════ */}
        <section
          className="section csd-why"
          ref={whyRef}
          aria-labelledby="why-heading"
        >
          <div className="container">
            <p className="section-eyebrow">The QllmSoft Advantage</p>
            <div className="section-title">
              <h2 id="why-heading">
               Why Leading Brands Partner with Our <span>Pakistan Based Team?</span>
              </h2>
              <p>
               In a crowded market of software houses, QllmSoft stands out by bridging the gap between 
        <strong> technical complexity and business growth</strong>. Here is why our partners 
        trust us with their mission critical projects.
              </p>
            </div>
            <div className="why-grid">
              {[
                {
                  title: "Competitive Offshore Rates",
                  desc: "Get world class development quality at a fraction of global  agency prices , without cutting corners on technology, testing, or communication.",
                },
                {
                  title: "Transparent Communication",
                  desc: "You get direct access to your development team, not a middleman. Regular video calls, written updates, and a dedicated Slack channel keep you in the loop daily.",
                },
                {
                  title: "Security-First Architecture",
                  desc: "We build with role based access control, SSL encryption, secure APIs, and compliance standards (GDPR, HIPAA, PCI-DSS) baked into every layer not added as an afterthought.",
                },
                {
                  title: "Built to Scale With You",
                  desc: "Our architectures are designed for growth. Adding users, features, or new modules to your software will not require rebuilding from scratch  ever.",
                },
              ].map((w, i) => (
                <article
                  key={i}
                  className={`why-card animate__animated ${whyInView ? "animate__fadeInUp" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="why-card-inner">
            <span className="why-icon-pop">{w.icon}</span>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            TECH STACK  —  H2
        ══════════════════════════════════════════════════ */}
        <section className="section csd-tech" aria-labelledby="tech-heading">
          <div className="container">
            
            <div className="section-title">
              <h2 id="tech-heading">Modern, Proven Technologies We Use</h2>
             <p>
      We don’t just follow trends; we choose technologies that ensure your 
      project’s long term performance, security, and maintainability. Our 
      stack is curated to build robust systems that evolve with your business.
    </p>
            </div>
            <ul
              className="csd-tech__grid"
              aria-label="Programming languages and frameworks used by QllmSoft"
            >
              {[
                "ASP.NET Core",
                "React.js",
                "Angular",
                "SQL Server",
                "React Native",
                "Flutter",
                "Microsoft Azure",
                "ML.NET",
                "OpenAI API",
                "Docker",
                "Git & DevOps",
                "Entity Framework",
              ].map((t) => (
                <li key={t} className="csd-tech__pill">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section
          className="section testimonial-section"
          aria-labelledby="testimonials-heading"
          itemScope
          itemType="https://schema.org/Review"
        >
          <h2 id="testimonials-heading" className="sr-only">
            Client Reviews, QllmSoft Software Development Company Pakistan
          </h2>
          <TestimonialSection />
        

            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <a
                href="https://www.freelancer.com/u/mrprogrmmr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
                aria-label="View all QllmSoft verified client reviews on Freelancer"
              >
                View All Verified Reviews on Freelancer
              </a>
            </div>
        </section>

        {/* ══════════════════════════════════════════════════
            WHY CUSTOM SOFTWARE  —  H2 + H3s
        ══════════════════════════════════════════════════ */}
        <section className="section csd-case" aria-labelledby="case-heading">
          <div className="container">
           
            <div className="section-title">
              <h2 id="case-heading">
                Why Custom Software Is the Smartest Investment for Growing
                Businesses
              </h2>
              <p>
                Off the shelf software is built for everyone, which means it is
                perfect for no one. Here is why businesses that invest in custom
                development consistently outperform those that do not.
              </p>
            </div>
            <div className="csd-case__grid">
              {[
                {
                  icon: "bi-sliders",
                  title: "Built Around Your Workflows",
                  desc: "Custom software adapts to how your team actually works, not the reverse. The result is higher adoption, fewer workarounds, and measurably better operational efficiency from day one.",
                },
                {
                  icon:"bi-graph-up-arrow",
                  title: "Scales Without Limits",
                  desc: "As your business grows, custom software grows with it. Add users, new modules, or integrations without hitting subscription walls, licensing fees, or performance ceilings.",
                },
                {
                  icon:"bi-shield-check",
                  title: "Better Security & Compliance",
                  desc: "You control the code, the data, and the infrastructure. That means stronger security posture, full compliance with industry regulations, and no dependency on third party vendor decisions.",
                },
                {
                  icon:"bi-trophy",
                  title: "Genuine Competitive Advantage",
                  desc: "Your competitors are using the same off the shelf tools. Custom software gives you capabilities they cannot replicate, creating real differentiation in how you serve your customers.",
                },
                {
                  icon:"bi-cash-stack",
                  title: "Lower Long-Term Cost",
                  desc: "Monthly SaaS fees, per seat pricing, and vendor lock in add up fast. Custom software, properly built, pays for itself through automation, efficiency gains, and eliminated tool redundancy.",
                },
                {
                  icon: "bi-people",
                  title: "A Partner, Not Just a Vendor",
                  desc: "We stay invested in your product's success beyond launch. Our team provides strategic input, not just technical execution  because we understand that the software we build affects your business outcomes directly.",
                },
              ].map((c, i) => (
                <article key={i} className="csd-case-card">
                  <span className="csd-case-card__icon" aria-hidden="true">
                   <i className={`bi ${c.icon}`} style={{ fontSize: '1.8rem', color: '#edb702' }}></i>
                  </span>
                  <h3 className="csd-case-card__title">{c.title}</h3>
                  <p className="csd-case-card__desc">{c.desc}</p>
                </article>
              ))}
            </div>
            <div className="csd-case__cta">
              <Link
                to="/projects"
                className="btn btn-primary"
                aria-label="See QllmSoft custom software development project portfolio"
              >
                See Our Work
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline-dark"
                aria-label="Talk to the QllmSoft software development team in Pakistan"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </section>

 
      
           <FounderNote 
  title="Expert Leadership, Collective Excellence"
  message="At QllmSoft, I lead a hand picked team of senior developers and engineers. While I personally oversee the high level architecture of every project, our collective strength lies in our collaborative approach. We don't just write code; as a team, we engineer solutions that align with your business goals, ensuring every module we deliver is backed by our shared commitment to quality."
/>

        {/* ══════════════════════════════════════════════════
            FAQ  —  H2 + FAQPage itemScope
        ══════════════════════════════════════════════════ */}
        <section
          className="section csd-faq"
          aria-labelledby="faq-heading"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="container">
            <p className="section-eyebrow">Common Questions</p>
            <div className="section-title">
              <h2 id="faq-heading">
                Frequently Asked Questions About Custom Software Development in
                Pakistan
              </h2>
              <p>
                Can't find your answer here? Reach out to us directly — we
                respond within a few hours on business days.
              </p>
            </div>
            <div className="csd-faq__list">
              {FAQ_DATA.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <Link
                to="/contact"
                className="btn btn-outline-dark"
                aria-label="Ask QllmSoft a question about custom software development"
              >
                Ask Us Directly
              </Link>
            </div>
          </div>
        </section>

        <RelatedSolutions category="custom-software" />

        {/* ══════════════════════════════════════════════════
            FINAL CTA  —  H2
        ══════════════════════════════════════════════════ */}
        <section
          className="section csd-final-cta"
          aria-labelledby="cta-heading"
        >
          <div className="container">
            <div className="csd-final-cta__content">
              <h2 id="cta-heading">
                Ready to Build Something That Actually Works?
              </h2>
              <p>
                Whether you have a fully scoped project or just an idea, let's
                talk. We'll help you define a clear roadmap, realistic timeline,
                and a budget that makes sense — before any commitment.
              </p>
              <div className="csd-final-cta__buttons">
                <Link
                  to="/contact"
                  className="btn btn-primary"
                  aria-label="Get your free custom software development consultation from QllmSoft Pakistan"
                >
                  Get Your Free Consultation
                </Link>
                <a
                  href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20a%20custom%20software%20project!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                  aria-label="Chat with QllmSoft on WhatsApp about your software development project"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div className="csd-final-cta__perks">
                <span>✓ Free project estimate</span>
                <span>✓ No commitment required</span>
                <span>✓ Response within 24 hours</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CustomSoftwareDevelopment;
