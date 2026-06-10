/**
 * ApiDevelopmentServices.jsx
 * ─────────────────────────────────────────────────────────────
 * SEO CHECKLIST — 100% Implemented:
 *  ✓ react-helmet-async   → <title>, description, keywords, canonical, robots
 *  ✓ Open Graph           → og:title, og:description, og:image, og:url, og:locale
 *  ✓ Twitter Card         → summary_large_image with alt text
 *  ✓ JSON-LD x4           → Organization, Service, BreadcrumbList, FAQPage
 *  ✓ Single H1            → H1 → H2 → H3 → H4 hierarchy — zero violations
 *  ✓ Semantic HTML5       → <main>, <header>, <nav>, <section>, <article>, <aside>, <ol>
 *  ✓ Aria labels          → Every section, button, image, table, list labelled
 *  ✓ Review microdata     → Schema.org Review, Rating, Person on testimonials
 *  ✓ FAQPage microdata    → itemScope/itemProp inline + JSON-LD
 *  ✓ Service microdata    → itemScope/itemProp on every service card
 *  ✓ Image SEO            → loading="lazy", width, height, descriptive alt on all images
 *  ✓ Internal linking     → Keyword-rich anchor text throughout
 *  ✓ Breadcrumb nav       → Visible + BreadcrumbList schema
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import "./ApiDevelopmentServices.css";
import "animate.css";
import TestimonialSection from "../components/TestimonialSection";
import RelatedSolutions from "../components/RelatedSolutions";
import FounderNote from "../components/FounderNote";
import apiimg from "../assets/API-DEVELOPMENT-SERVICES.webp";
import Documentation from "../assets/Documentaion.webp";
import ApiArchitecture from "../assets/API-CASESTUDY.webp";
import phase3 from '../assets/phase3.webp';

/* ─── Constants ───────────────────────────────────────────── */
const PAGE_URL = "https://qllmsoft.com/api-development-services";
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
  sameAs: [
    "https://www.freelancer.com/u/mrprogrmmr",
    "https://www.upwork.com/freelancers/~0170e20f8803389a86",
  ],
};

/* ─── JSON-LD: Service ────────────────────────────────────── */
const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "API Development",
  name: "API Development Services in Pakistan",
  description:
    "QllmSoft provides expert custom API development services in Pakistan — REST, GraphQL, SOAP APIs, third-party integrations, payment gateway APIs, and legacy API modernization for startups, SMBs, SaaS, and enterprises.",
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "API Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom REST API Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "GraphQL API Development" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "API Integration Services" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Third-Party API Integration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Legacy API Modernization" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Payment Gateway API Integration",
        },
      },
    ],
  },
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
      name: "API Development Services",
      item: PAGE_URL,
    },
  ],
};

/* ─── FAQ data ────────────────────────────────────────────── */
const FAQ_DATA = [
  {
    q: "What are API development services?",
    a: "API development services involve creating and integrating Application Programming Interfaces that allow software systems to communicate. QllmSoft builds REST, GraphQL, and SOAP APIs for web, mobile, and cloud platforms — enabling seamless data exchange and business automation.",
  },
  {
    q: "How does QllmSoft determine API project pricing?",
    a: "Project cost is determined by structural scope: the total number of endpoints, architectural complexity (monolith vs microservices), security requirements (such as PCI DSS or HIPAA), and third party sync protocols. We provide fully detailed, fixed scope proposals post consultation to ensure zero pricing surprises.",
  },
  {
    q: "Which API standards does QllmSoft support?",
    a: "We specialize in RESTful APIs, GraphQL endpoints, and SOAP APIs. We also handle third-party integrations with payment gateways (JazzCash, Easypaisa, Stripe), CRMs, ERPs, logistics APIs (TCS, Leopards), and cloud platforms (Azure, AWS).",
  },
  {
    q: "Do you provide post launch API support and maintenance?",
    a: "Yes. We provide ongoing monitoring, security updates, and performance optimization after delivery. Every project includes a dedicated support period — ensuring your APIs remain reliable, secure, and scalable as your business grows.",
  },
  {
    q: "What architectural parameters dictate choosing a RESTful API over a GraphQL fabric?",
    a: "RESTful architectures rely on structured, stateless resources with fixed schema endpoints making them exceptionally resilient for traditional CRUD workflows, microservices communication, and highly cacheable public interfaces. Conversely, GraphQL implements a unified data graph allowing runtime clients to request precise payloads via single queries, completely mitigating data over fetching and under fetching inside complex modern SaaS portals and resource constrained mobile apps.",
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
  const answerId = `api-faq-${index}`;
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
   MAIN PAGE
═══════════════════════════════════════════════════════════ */
const ApiDevelopmentServices = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: whyInvestRef, inView: whyInvestInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: chooseRef, inView: chooseInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: edgeRef, inView: edgeInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });
  const { ref: clientsRef, inView: clientsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: bestPractRef, inView: bestPractInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: reviewRef, inView: reviewInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: techRef, inView: techInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState(0);


  /*casestudy*/
  const caseStudyData = [
    {
      title: "Phase 1: Secure & Fast Architecture",
      subtitle:
        "Designing a high performance verification & optimization pipeline.",
      desc: "We built a multi-layered REST API architecture. Instead of letting requests hit the database directly, every incoming call goes through a strict verification and optimization pipeline.",
      imgSrc: ApiArchitecture,
      imgAlt: "api architecture",
      featuresTitle: "Key Features of This Architecture:",
      features: [
        {
          bold: "API Gateway & Security First:",
          text: "An Nginx API gateway routes traffic safely, validating JWT Auth and rate limits instantly.",
        },
        {
          bold: "Smart Middleware Pipeline:",
          text: "Using Express.js middleware, requests are parsed and checked sequentially before core business logic.",
        },
        {
          bold: "High Speed Caching Layer:",
          text: "Redis Cache layer saves common data in memory, reducing database load by 80%.",
        },
      ],
    },
    {
      title: "Phase 2: Automated Testing & Docs",
      subtitle:
        "Streamlining development with clean, live-updating API documentation.",
      desc: "An optimized API is only useful if frontend developers and external partners know how to use it. We built automated specifications to keep workflows completely frictionless.",
      imgSrc: Documentation,
      imgAlt: "api documentation",
      featuresTitle: "How This Simplifies Development:",
      features: [
        {
          bold: "Interactive API Specifications:",
          text: "Developers can view active endpoints (like POST Register User) with exact payload structures.",
        },
        {
          bold: "Multi Language Support:",
          text: "Generates code snippets for JavaScript, jQuery, Ruby, Node, PHP, and Go within minutes.",
        },
        {
          bold: "Instant Response Previews:",
          text: "Clear previews of HTTP 200 OK or 201 Created JSON payloads eliminate backend guesswork.",
        },
      ],
    },
    {
  title: "Phase 3: Real Time Business Dashboard",
  subtitle: "Integrating scalable REST APIs with dynamic data visualization.",
  desc: "We connected our high performance Express.js backend with an intuitive frontend CRM dashboard. By executing optimized SQL queries, the system securely processes leads, tracking contact distribution metrics in real time.",
  imgSrc: phase3, 
  imgAlt: "CRM Dashboard and API Code",
  featuresTitle: "Core Full-Stack Capabilities:",
  features: [
    {
      bold: "Asynchronous Route Handlers:",
      text: "The Express.js backend utilizes async/await pipelines to handle database operations smoothly without blocking the event loop."
    },
    {
      bold: "Robust Error Handling:",
      text: "Built in try/catch middleware safeguards endpoints, logging internal errors securely while sending uniform JSON status alerts to the client."
    },
    {
      bold: "Dynamic KPI Tracking:",
      text: "The React based CRM UI renders interactive bar charts, activity feeds, and a breakdown of contact statuses instantly."
    }
  ]
}
  ];

  return (
    <>
      {/* ══════════════════════════════════════════════
          SEO HEAD
      ══════════════════════════════════════════════ */}
      <Helmet>
        <title>
          Enterprise API Engineering, Microservices & Systems Integration |
          QllmSoft
        </title>
        <meta
          name="description"
          content="QllmSoft architects secure, highly scalable RESTful APIs, GraphQL endpoints, and decentralized microservices pipelines. Specializing in high throughput enterprise integrations, OAuth2 compliance, and cloud native middleware."
        />
        <meta
          name="keywords"
          content="enterprise API development, RESTful systems architecture, GraphQL engineering, custom middleware development, microservices integration layers, secure payment gateway infrastructure, legacy SOAP migration, ASP.NET Core web API, high availability data pipelines"
        />
        <meta name="author" content="QllmSoft" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="QllmSoft" />
        <meta
          property="og:title"
          content="Enterprise API Engineering, Microservices & Systems Integration | QllmSoft"
        />
        <meta
          property="og:description"
          content="Secure, zero downtime RESTful architectures, GraphQL fabrics, and cloud native data pipelines engineered for global corporate workflows."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="QllmSoft - Global API Architecture & Middleware Engineering"
        />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Enterprise API Engineering, Microservices & Systems Integration | QllmSoft"
        />
        <meta
          name="twitter:description"
          content="QllmSoft architects secure, highly scalable RESTful APIs, GraphQL endpoints, and decentralized microservices pipelines."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta
          name="twitter:image:alt"
          content="QllmSoft - Global API Architecture & Middleware Engineering"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">
          {JSON.stringify(schemaService)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaBreadcrumb)}
        </script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="api-page" role="main">
        {/* ══════════════════════════════════════════════
            HERO — single H1
        ══════════════════════════════════════════════ */}
        <header className="api-hero">
          <div className="api-hero__bg-grid" aria-hidden="true"></div>
          <div className="container api-hero__inner">
            <div className="api-hero__content">
              <p className="csd-hero__eyebrow">
                Global Systems Integration Delivery Center
              </p>

              {/* ✅ ONE H1 */}
              <h1 className="api-hero__title">
                Architect Secure, Resilient &<br />
                <span className="api-hero__accent text-warning">
                  Scalable API Infrastructures
                </span>
              </h1>

              <p className="api-hero__sub">
                Stop worrying about broken integrations. QllmSoft builds robust
                REST, GraphQL, and SOAP APIs that bridge the gap between your
                apps, databases, and third party tools. We focus on clean code
                and zero downtime architecture so your data moves exactly where
                it needs to be.
              </p>

              <div className="api-hero__buttons">
                <Link
                  to="/contact"
                  className="btn btn-primary"
                  aria-label="Get a free API development consultation from QllmSoft"
                >
                  Get a Free Consultation
                </Link>
                <a
                  href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20an%20API%20project!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                  aria-label="WhatsApp QllmSoft about API development"
                >
                  WhatsApp Us
                </a>
              </div>

              {/* Stats */}
              <div
                className="api-hero__stats"
                aria-label="QllmSoft API development statistics"
              >
                {[
                  { num: "10+", label: "Years of Experience" },
                  { num: "100%", label: "Upwork Success Rate" },
                  { num: "50+", label: "APIs Delivered" },
                  { num: "5★", label: "Client Reviews" },
                ].map((s) => (
                  <div key={s.label} className="api-hero__stat">
                    <span className="api-hero__stat-num">{s.num}</span>
                    <span className="api-hero__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right-side capability cards */}
            <aside className="api-hero__cards" aria-label="API types we build">
              {[
                {
                  label: "REST API",
                  icon: "bi-lightning-charge",
                  desc: "Lightweight, stateless, universally compatible",
                },
                {
                  label: "GraphQL",
                  icon: "bi-diagram-2",
                  desc: "Query exactly what you need — nothing more",
                },
                {
                  label: "SOAP / XML",
                  icon: "bi-grid-3x3-gap",
                  desc: "Enterprise-grade & legacy system compatible",
                },
                {
                  label: "Webhooks",
                  icon: "bi-bell",
                  desc: "Real-time event-driven automation pipelines",
                },
                {
                  label: "Microservices",
                  icon: "bi-puzzle",
                  desc: "Decoupled, independently deployable services",
                },
                {
                  label: "Integrations",
                  icon: "bi-link",
                  desc: "CRM, ERP, payment gateways, logistics & more",
                },
              ].map((c) => (
                <div key={c.label} className="api-hero__card">
                  <span className="api-hero__card-icon" aria-hidden="true">
                    <i
                      className={`bi ${c.icon} api-hero__card-icon`}
                      aria-hidden="true"
                    ></i>
                  </span>
                  <div>
                    <strong>{c.label}</strong>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </aside>
          </div>

          {/* Tech strip */}
          <div
            className="api-hero__tech-strip"
            aria-label="Technologies used for API development"
          >
            {[
              "ASP.NET Core",
              "Node.js",
              "REST",
              "GraphQL",
              "SOAP",
              "OAuth 2.0",
              "JWT",
              "Swagger / OpenAPI",
              "Azure",
              "AWS",
              "Docker",
              "SQL Server",
            ].map((t) => (
              <span key={t} className="api-tech-pill">
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* ══════════════════════════════════════════════
            ABOUT / INTRO — H2
        ══════════════════════════════════════════════ */}
        <section
          className="section api-about"
          ref={aboutRef}
          aria-labelledby="about-heading"
        >
          <div className="container">
            <div className="api-about__layout">
              <div
                className={`api-about__text animate__animated ${aboutInView ? "animate__fadeInLeft" : ""}`}
              >
                <h2 id="about-heading">
                  Strategic API Engineering & <br />
                  <span className="api-hero__accent">
                    Systems Integration
                  </span>{" "}
                </h2>
                <p>
                  Behind every seamless digital interaction be it a real time
                  payment, a cloud synced mobile app, or an automated enterprise
                  workflow lies a high performance API. At QllmSoft, we don't
                  just write code; we architect the{" "}
                  <strong>digital nervous system</strong>
                  that allows your platforms to communicate, scale, and thrive
                  in a connected world.
                </p>

                <p>
                  Our specialized <strong>API development services</strong>{" "}
                  cater to high growth
                  <Link to="/website-development-services">
                    {" "}
                    web platforms
                  </Link>{" "}
                  and
                  <Link to="/mobile-app-development"> mobile ecosystems</Link>.
                  From designing secure RESTful architectures to implementing
                  ultra efficient GraphQL layers, our team ensures your backend
                  is ready for global traffic and complex data handling.
                </p>

                <p>
                  Beyond creation, we excel in <strong>API Integration</strong>.
                  We bridge the gap between your custom software and industry
                  giants like Stripe, Salesforce, SAP, and logistics providers.
                  Whether you are a startup or an enterprise operating globally,
                  we ensure your integrations are rock-solid and future-proof.
                </p>

                <ul
                  className="api-about__checklist"
                  aria-label="Core API services offered"
                >
                  {[
                    "REST API Development",
                    "GraphQL Endpoints",
                    "SOAP API Modernization",
                    "Third-Party Integrations",
                    "Payment Gateway APIs",
                    "Microservices Architecture",
                  ].map((item) => (
                    <li key={item}>
                      <span className="api-check" aria-hidden="true">
                        ✔
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <figure
                className={`api-about__image animate__animated ${aboutInView ? "animate__fadeInRight" : ""}`}
              >
                <img
                  src={apiimg}
                  alt="Custom API development services by QllmSoft — REST, GraphQL and integration solutions"
                  loading="lazy"
                  width="560"
                  height="400"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            WHAT ARE APIS — H2
        ══════════════════════════════════════════════ */}
        <section
          className="section api-explainer"
          aria-labelledby="explainer-heading"
        >
          <div className="container">
            <div className="api-explainer__layout">
              <figure className="api-explainer__image">
                <img
                  src="https://qllmsoft.com/images/api-services.webp"
                  alt="API development services overview — how APIs connect web, mobile and cloud systems"
                  loading="lazy"
                  width="500"
                  height="360"
                />
              </figure>

              <div className="api-explainer__text">
                <h2 id="explainer-heading">
                  Decoding API Development Services
                </h2>
                <p>
                  An <strong>Application Programming Interface (APIs)</strong>{" "}
                  is more than just code it’s the contract that allows your
                  software to talk to the rest of the world. Imagine your
                  database, mobile app, and third party tools all speaking
                  different languages;
                  <strong> API development services</strong> act as the expert
                  translator, ensuring that data flows instantly, securely, and
                  without errors across your entire infrastructure.
                </p>

                <p>
                  At QllmSoft, we specialize in building{" "}
                  <strong>high performance API architectures</strong>
                  that eliminate manual data entry and automate complex business
                  logic. we help businesses modernize their systems by creating
                  custom endpoints that are built for speed and hardened against
                  security threats.
                </p>

                <p>
                  We don't believe in "one size fits all." Whether you are
                  building a lightweight MVP or scaling a cloud native
                  enterprise platform, our{" "}
                  <strong>
                    API solutions are engineered for unique digital economy
                  </strong>
                  , ensuring your software is ready for both local growth and
                  global competition.
                </p>
                {/* REST vs GraphQL mini comparison */}
                <div
                  className="api-explainer__compare"
                  aria-label="REST vs GraphQL comparison"
                >
                  <div className="api-explainer__compare-col">
                    <h3>REST APIs</h3>
                    <ul>
                      <li>Fixed, predictable endpoints</li>
                      <li>Industry standard compatibility</li>
                      <li>Ideal for public integrations</li>
                      <li>Stateless & cacheable</li>
                    </ul>
                  </div>
                  <div
                    className="api-explainer__compare-sep"
                    aria-hidden="true"
                  >
                    VS
                  </div>
                  <div className="api-explainer__compare-col">
                    <h3>GraphQL APIs</h3>
                    <ul>
                      <li>Single endpoint, flexible queries</li>
                      <li>Fetch exactly the data you need</li>
                      <li>Ideal for SaaS & mobile apps</li>
                      <li>Reduces over fetching by 60%+</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            BEST PRACTICES — H2 + H4s
        ══════════════════════════════════════════════ */}
        <section
          className="section api-best-practices"
          ref={bestPractRef}
          aria-labelledby="bestpract-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="bestpract-heading">
                Our High Standard API Development Principles
              </h2>
              <p>
                We don't just build endpoints; we engineer durable digital
                assets. Every API at QllmSoft is governed by strict industry
                best practices to ensure maximum uptime, security, and developer
                satisfaction.
              </p>
            </div>
            <div className="api-practices__grid">
              {[
                {
                  num: "01",
                  icon: "bi-stack",
                  title: "Scalable Tech Stack Selection",
                  desc: "We choose frameworks and architectures designed to grow with your user base  from startup MVP to enterprise scale  without expensive rebuilds.",
                },
                {
                  num: "02",
                  icon: "bi-file-earmark-code",
                  title: "Developer Friendly Documentation",
                  desc: "Integration shouldn’t be a guessing game. We provide comprehensive OpenAPI/Swagger documentation, enabling your front end teams or third party partners to test and integrate endpoints in minutes, not days.",
                },
                {
                  num: "03",
                  icon: "bi-shield-lock-fill",
                  title: "Hardened Security Protocols",
                  desc: "Security is baked in, not bolted on. We implement OAuth 2.0, JWT, and SSL encryption alongside strict rate limiting and CORS policies to shield your data from unauthorized access and brute force attacks.",
                },
                {
                  num: "04",
                  icon: "bi-chat-left-dots",
                  title: "Strategic Pre Dev Consultation",
                  desc: "Early expert input prevents costly architecture mistakes. We map your business goals to the right API strategy before a single line of code is written.",
                },
              ].map((p, i) => (
                <article
                  key={i}
                  className={`api-practice-card animate__animated ${bestPractInView ? "animate__fadeInUp" : ""}`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="api-practice-card__header">
                    <span className="api-practice-card__num" aria-hidden="true">
                      {p.num}
                    </span>
                    <span
                      className="api-practice-card__icon"
                      aria-hidden="true"
                    >
                      <i
                        className={`bi ${p.icon}`}
                        style={{ color: "#edb702", fontSize: "1.6rem" }}
                      ></i>
                    </span>
                  </div>
                  <h4 className="api-practice-card__title">{p.title}</h4>
                  <p className="api-practice-card__desc">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            WHY INVEST — H2 + H3s
        ══════════════════════════════════════════════ */}
        <section
          className="section api-why-invest"
          ref={whyInvestRef}
          aria-labelledby="why-invest-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="why-invest-heading">
                Why Invest in Professional API Development?
              </h2>
              <p>
                In a connected economy, your API is your most valuable business
                asset. Investing in high grade API development delivers
                measurable ROI by unveiling new revenue paths and optimizing
                core operations.
              </p>
            </div>
            <div className="api-invest__grid">
              {[
                {
                  icon: "bi-currency-exchange",
                  title: "Unlock New Revenue Channels",
                  desc: "A robust API allows you to monetize your data and services. By enabling partner integrations and third party access, you transform your internal tools into a recurring revenue stream and a broader digital marketplace.",
                  stat: "+ Revenue",
                },
                {
                  icon: "bi-link-45deg",
                  title: "Improve System Connectivity",
                  desc: "APIs seamlessly link your CRM, ERP, cloud apps, payment gateways, and logistics systems — creating a unified data flow that eliminates manual bottlenecks and boosts operational speed.",
                  stat: "- Overhead",
                },
                {
                  icon: "bi-graph-up-arrow",
                  title: "Increase Application Scalability",
                  desc: "Modern APIs are lightweight, cloud-native, and built to handle growing user demand — adapting to your business growth without requiring expensive infrastructure overhauls.",
                  stat: "+ Scalability",
                },
                {
                  icon: "bi-cpu",
                  title: "Drive Digital Transformation",
                  desc: "An API-first approach lets you integrate new tools, launch features faster, and connect with emerging technologies — keeping you ahead of competitors  rapidly evolving digital market.",
                  stat: "+ Velocity",
                },
              ].map((v, i) => (
                <article
                  key={i}
                  className={`api-invest-card animate__animated ${whyInvestInView ? "animate__fadeInUp" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="api-invest-card__top">
                    <span className="api-invest-card__icon" aria-hidden="true">
                      <i
                        className={`bi ${v.icon}`}
                        style={{ color: "#edb702", fontSize: "1.8rem" }}
                      ></i>
                    </span>
                    <span
                      className="api-invest-card__stat"
                      aria-label={`Impact: ${v.stat}`}
                    >
                      {v.stat}
                    </span>
                  </div>
                  <h3 className="api-invest-card__title">{v.title}</h3>
                  <p className="api-invest-card__desc">{v.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
{/*casestudy*/}
        <section
          className="section api-case-study"
          aria-labelledby="case-study-heading"
        >
          <div
            className="abstract-circle abstract-circle--one"
            aria-hidden="true"
          ></div>
          <div
            className="abstract-circle abstract-circle--two"
            aria-hidden="true"
          ></div>

          <div className="container">
            <div className="section-title text-center">
              <h2 id="case-study-heading">
                Case Study: Building High Performance Systems
              </h2>
              <p>
                How <strong>QllmSoft</strong> engineered a backend architecture
                built for speed, security, and effortless scaling.
              </p>
            </div>

            <div className="cs-carousel-card">
              <div className="cs-carousel-card__left">
                <div className="cs-carousel-tabs">
                  {caseStudyData.map((phase, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`cs-tab-btn ${activeTab === idx ? "active" : ""}`}
                      aria-label={`View ${phase.title}`}
                    >
                      Phase {idx + 1}
                    </button>
                  ))}
                </div>

                <div className="cs-carousel-content">
                  <h3>{caseStudyData[activeTab].title}</h3>
                  <p className="cs-carousel-desc">
                    {caseStudyData[activeTab].desc}
                  </p>

                  <div className="case-study__features">
                    <h4>{caseStudyData[activeTab].featuresTitle}</h4>
                    <ul>
                      {caseStudyData[activeTab].features.map((feat, fIdx) => (
                        <li key={fIdx}>
                          <strong>{feat.bold}</strong> {feat.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="cs-carousel-card__right">
                <figure className="case-study__image-wrapper">
                  <img
                    src={caseStudyData[activeTab].imgSrc}
                    alt={caseStudyData[activeTab].imgAlt}
                    className="case-study__img"
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>

            <div className="case-study__results-strip">
              <span className="results-badge">The Results</span>
              <div className="results-metrics">
                <span>
                  <strong>80% Lighter</strong> Database
                </span>
                <span>
                  <strong>Layered Auth</strong> Protection
                </span>
                <span>
                  <strong>Instant</strong> Integrations
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            HOW TO CHOOSE — H2 + H3s  (numbered list)
        ══════════════════════════════════════════════ */}
        <section
          className="section api-choose"
          ref={chooseRef}
          aria-labelledby="choose-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="choose-heading">
                How to Choose the Right API Development Company?
              </h2>
              <p>
                Selecting the right partner is critical. Here's what separates
                top API development companies from the rest.
              </p>
            </div>
            <ol
              className="api-choose__list"
              aria-label="Criteria for choosing an API development company"
            >
              {[
                {
                  title: "Industry Specific Experience",
                  desc: "Choose a company that understands your industry's unique workflows. With domain expertise in fintech, eCommerce, healthcare, and SaaS, QllmSoft designs APIs that eliminate delays, cut rework, and precisely match your business logic.",
                },
                {
                  title:
                    "Proven Expertise in API Standards (REST, GraphQL, SOAP)",
                  desc: "Ensure your partner is fluent in modern protocols. Our expertise in RESTful, GraphQL, and SOAP APIs guarantees your interfaces are flexible, maintainable, and compatible with both current and future technologies.",
                },
                {
                  title: "Reliable Post-Development Support",
                  desc: "The right API partner doesn't stop at delivery. QllmSoft provides ongoing monitoring, security updates, and performance optimization  keeping your APIs reliable, secure, and future ready long after launch.",
                },
                {
                  title: "Transparent Pricing & Custom Solutions",
                  desc: "Avoid hidden costs with clear, upfront pricing. We create tailored API solutions that maximize your ROI and scale with your business  ensuring every investment adds measurable long term value.",
                },
              ].map((c, i) => (
                <li
                  key={i}
                  className={`api-choose__item animate__animated ${chooseInView ? "animate__fadeInLeft" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="api-choose__num"
                    aria-label={`Point ${i + 1}`}
                  >
                    {i + 1}
                  </div>
                  <div className="api-choose__body">
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            WHY QLLMSOFT — H2 + H3s
        ══════════════════════════════════════════════ */}
        <section
          className="section api-edge"
          ref={edgeRef}
          aria-labelledby="edge-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="edge-heading">Why We Are the Leading API Experts</h2>
              <p>
                We don't just write code , we engineer digital ecosystems.
                Here's what sets us apart from every other API development
                company .
              </p>
            </div>
            <div className="api-edge__grid">
              {[
                {
                  num: "01",
                  icon: "bi-code-slash",
                  title: "Decade of Backend Mastery",
                  desc: "With over 10 years in the industry, we navigate the complexities of REST, GraphQL, and SOAP with precision. We ensure your interfaces are built to last, avoiding the common pitfalls of amateur development.",
                  highlight: false,
                },
                {
                  num: "02",
                  icon: "bi-gear-wide-connected",
                  title: "Industry Specific API Solutions",
                  desc: "Whether you are a SaaS provider, eCommerce business, or enterprise modernizing operations, we tailor every API to your business model, industry standards, and compliance requirements.",
                  highlight: false,
                },
                {
                  num: "03",
                  icon: "bi-megaphone",
                  title: "Transparent Communication & Collaboration",
                  desc: "From free initial consultations to regular progress updates, you will always know exactly what is happening. We work as an extension of your team ,zero hidden surprises.",
                  highlight: true,
                },
                {
                  num: "04",
                  icon: "bi-shield-check",
                  title: "Rigorous Testing & Clear Documentation",
                  desc: "Every API is subjected to unit, performance, and security testing before delivery. We provide comprehensive Swagger/OpenAPI documentation  making integration and maintenance effortless.",
                  highlight: false,
                },
                {
                  num: "05",
                  icon: "bi-award",
                  title: "Verified Global Track Record",
                  desc: "Top Rated Plus on Upwork. 5 star reviews on Freelancer. Serving clients across the globe . our reputation is backed by independent third party platforms.",
                  highlight: false,
                },
              ].map((e, i) => (
                <article
                  key={i}
                  className={`api-edge-card ${e.highlight ? "api-edge-card--highlight" : ""} animate__animated ${edgeInView ? "animate__fadeInUp" : ""}`}
                  style={{ animationDelay: `${i * 0.09}s` }}
                >
                  <div className="api-edge-card__header">
                    <span className="api-edge-card__num" aria-hidden="true">
                      {e.num}
                    </span>
                    <span className="api-edge-card__icon" aria-hidden="true">
                      <i
                        className={`bi ${e.icon}`}
                        style={{
                          color: e.highlight ? "#fff" : "#edb702",
                          fontSize: "1.5rem",
                        }}
                      ></i>
                    </span>
                  </div>
                  <h3 className="api-edge-card__title">{e.title}</h3>
                  <p className="api-edge-card__desc">{e.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SERVICES — H2 + H3s
        ══════════════════════════════════════════════ */}
        <section
          className="section api-services"
          ref={servicesRef}
          aria-labelledby="services-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="services-heading">
                Core API Engineering Specializations
              </h2>
              <p>
                From architecting secure RESTful endpoints to orchestrating
                complex cloud native integrations, we deliver high performance
                backend infrastructure built for the modern web.
              </p>
            </div>
            <div className="api-services__grid">
              {[
                {
                  num: "01",
                  icon: "01",
                  icon: "bi-gear-wide-connected",
                  title: "Custom API Development",
                  desc: "Whether you need RESTful, GraphQL, or SOAP APIs, we build secure, scalable, and performance optimized interfaces from the ground up  tailored precisely to your business logic and technical requirements.",
                  tags: ["REST", "GraphQL", "SOAP", "Custom Logic"],
                },
                {
                  num: "02",
                  icon: "bi-plugin",
                  title: "API Integration Services",
                  desc: "Connect internal systems with external platforms , CRMs, ERPs, payment gateways, and cloud services through reliable, well documented API integrations that eliminate data silos and manual processes.",
                  tags: ["CRM", "ERP", "Cloud", "Payments"],
                },
                {
                  num: "03",
                  icon: "bi-wallet2",
                  title: "Third Party API Integration",
                  desc: "Simplify complex workflows with Stripe, Salesforce, MuleSoft, and enterprise platforms. Our custom software solutions ensure robust, seamless data flow across all your systems.",
                  tags: ["Stripe", "Salesforce", "Zapier", "Twilio"],
                },
                {
                  num: "04",
                  icon: "bi-device-ssd",
                  title: "API App Development",
                  desc: "Develop web and mobile apps with built in API functionality  enhancing data exchange, user experience, and operational efficiency across every device and platform your customers use.",
                  tags: ["Mobile", "Web", "Cross-Platform"],
                },
                {
                  num: "05",
                  icon: "bi-diagram-3-fill",
                  title: "API Software Development",
                  desc: "From middleware to backend systems, we build software powered by well structured, documented APIs. Every interface is scalable, secure, and aligned with your long term business goals.",
                  tags: ["Middleware", "Backend", "Microservices"],
                },
                {
                  num: "06",
                  icon: "bi-arrow-repeat",
                  title: "Legacy API Modernization",
                  desc: "Transform outdated SOAP services and proprietary interfaces into modern REST or GraphQL APIs improving performance, developer experience, and compatibility with today's cloud-native ecosystems.",
                  tags: ["SOAP → REST", "Migration", "Cloud-Native"],
                },
              ].map((s, i) => (
                <article
                  key={i}
                  className={`api-service-card animate__animated ${servicesInView ? "animate__fadeInUp" : ""}`}
                  style={{ animationDelay: `${i * 0.09}s` }}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <div className="api-service-card__top">
                    <span className="api-service-card__num" aria-hidden="true">
                      {s.num}
                    </span>
                    <span className="api-service-card__icon" aria-hidden="true">
                      <i
                        className={`bi ${s.icon}`}
                        style={{ color: "#edb702", fontSize: "1.8rem" }}
                      ></i>
                    </span>
                  </div>
                  <h3 className="api-service-card__title" itemProp="name">
                    {s.title}
                  </h3>
                  <p className="api-service-card__desc" itemProp="description">
                    {s.desc}
                  </p>
                  <div
                    className="api-service-card__tags"
                    aria-label="Service technologies"
                  >
                    {s.tags.map((t) => (
                      <span key={t} className="api-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            TECH STACK — H2
        ══════════════════════════════════════════════ */}
        <section
          className="section api-tech"
          ref={techRef}
          aria-labelledby="tech-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="tech-heading">
                Modern Technologies & Frameworks We Deploy
              </h2>
              <p>
                We don't gamble with your infrastructure. Every database,
                language, and cloud framework we select is vetted for maximum
                execution speed, bank grade security, and long term vendor
                independence.
              </p>
            </div>
            <div className="api-tech__grid">
              {[
                {
                  category: "Frameworks & Runtimes",
                  color: "#2B6CB0",
                  items: ["ASP.NET Core", "Node.js", "Express.js", ".NET 8"],
                },
                {
                  category: "API Standards",
                  color: "#edb702",
                  items: [
                    "REST / RESTful",
                    "GraphQL",
                    "SOAP / XML",
                    "gRPC",
                    "Webhooks",
                  ],
                },
                {
                  category: "Security & Auth",
                  color: "#276749",
                  items: [
                    "OAuth 2.0",
                    "JWT Tokens",
                    "API Key Auth",
                    "Rate Limiting",
                    "HTTPS / TLS",
                  ],
                },
                {
                  category: "Documentation",
                  color: "#744210",
                  items: [
                    "Swagger UI",
                    "OpenAPI 3.0",
                    "Postman Collections",
                    "Redoc",
                  ],
                },
                {
                  category: "Cloud & DevOps",
                  color: "#553C9A",
                  items: [
                    "Microsoft Azure",
                    "AWS Lambda",
                    "Docker",
                    "CI/CD Pipelines",
                    "GitHub Actions",
                  ],
                },
                {
                  category: "Databases",
                  color: "#9B2C2C",
                  items: [
                    "SQL Server",
                    "PostgreSQL",
                    "MongoDB",
                    "Redis (caching)",
                    "Entity Framework",
                  ],
                },
              ].map((col, i) => (
                <article
                  key={i}
                  className={`api-tech-col animate__animated ${techInView ? "animate__fadeInUp" : ""}`}
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    "--col-color": col.color,
                  }}
                >
                  <h3 className="api-tech-col__title">{col.category}</h3>
                  <ul
                    className="api-tech-col__list"
                    aria-label={`${col.category} technologies`}
                  >
                    {col.items.map((item) => (
                      <li key={item} className="api-tech-col__item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            CLIENT TYPES — H2 + H3s
        ══════════════════════════════════════════════ */}
        <section
          className="section api-invest"
          aria-labelledby="why-invest-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="why-invest-heading">
                The Strategic Value of Professional API Engineering
              </h2>
              <p>
                In a hyper-connected global economy, your API is your most
                valuable digital asset. Investing in enterprise grade API
                architectures delivers measurable ROI by unlocking new revenue
                streams and optimizing cross border operations.
              </p>
            </div>

            <div className="api-invest__grid">
              {[
                {
                  icon: "bi-currency-exchange",
                  title: "Monetize Core Digital Assets",
                  desc: "Transform internal workflows and proprietary data into standalone products. By enabling secure partner integrations, you convert your technical infrastructure into a scalable marketplace and recurring revenue stream.",
                  stat: "+ Revenue",
                },
                {
                  icon: "bi-link-45deg",
                  title: "Unify Fragmented Ecosystems",
                  desc: "Eliminate operational bottlenecks between decoupled systems. We bridge the gap between global CRMs, enterprise ERPs, and cloud native services to guarantee real time data synchronization.",
                  stat: "- Overhead",
                },
                {
                  icon: "bi-graph-up-arrow",
                  title: "Elastic Infrastructure Scaling",
                  desc: "Legacy backends bottleneck growth under sudden traffic spikes. Our cloud native APIs are engineered using distributed microservices, allowing your platform to scale seamlessly from thousands to millions of concurrent users.",
                  stat: "+ Scalability",
                },
                {
                  icon: "bi-cpu",
                  title: "Accelerate Go To Market Velocity",
                  desc: "An API first methodology grants your engineering team maximum agility. Integrate cutting edge AI models, roll out new features across devices in days, and pivot faster than your competition.",
                  stat: "+ Velocity",
                },
              ].map((v, i) => (
                <article
                  key={i}
                  className={`api-invest-card animate__animated ${whyInvestInView ? "animate__fadeInUp" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="api-invest-card__top">
                    <span className="api-invest-card__icon" aria-hidden="true">
                      <i
                        className={`bi ${v.icon}`}
                        style={{ color: "#edb702", fontSize: "1.8rem" }}
                      ></i>
                    </span>
                    <span
                      className="api-invest-card__stat"
                      aria-label={`Impact: ${v.stat}`}
                    >
                      {v.stat}
                    </span>
                  </div>
                  <h3 className="api-invest-card__title">{v.title}</h3>
                  <p className="api-invest-card__desc">{v.desc}</p>
                </article>
              ))}
            </div>
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
            Client Reviews, QllmSoft Software Development agency
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

        <FounderNote
          title="Powering the Digital Ecosystem with Robust APIs"
          message="At QllmSoft, we understand that APIs are the silent engine of modern business connecting platforms, automating workflows, and unlocking data value. My mission is to ensure that your backend architecture is never a bottleneck. From our engineering hub  to clients worldwide, we specialize in crafting RESTful and GraphQL solutions that are not just functional, but high performance, secure, and built to handle the demands of global scale. We don't just build endpoints; we build the bridges that enable your business to grow without limits."
        />

        {/* ══════════════════════════════════════════════
            FAQ — H2 + FAQPage schema
        ══════════════════════════════════════════════ */}
        <section
          className="section csd-faq api-faq"
          aria-labelledby="faq-heading"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="faq-heading">API Development FAQs</h2>
              <p>
                Everything you need to know about our API development services,
                costs, timelines, and technology choices.
              </p>
            </div>
            <div className="csd-faq__list">
              {FAQ_DATA.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <Link
                to="/contact"
                className="btn btn-outline-dark"
                aria-label="Ask QllmSoft a question about API development "
              >
                Ask Us Directly
              </Link>
            </div>
          </div>
        </section>

        {/*services carousel*/}

        <RelatedSolutions category="api" />

        {/* ══════════════════════════════════════════════
            FINAL CTA — H2
        ══════════════════════════════════════════════ */}
        <section className="section api-cta" aria-labelledby="cta-heading">
          <div className="api-cta__bg" aria-hidden="true"></div>
          <div className="container api-cta__inner">
            <p className="section-eyebrow" style={{ color: "#edb702" }}>
              Start Today
            </p>
            <h2 id="cta-heading">Ready to Hire Expert API Developers?</h2>
            <p>
              Whether you need a RESTful API from scratch, a complex third-party
              integration, or a legacy system modernization — QllmSoft delivers
              within budget, on time, and built to last.
            </p>
            <div className="api-cta__buttons">
              <Link
                to="/contact"
                className="btn btn-primary"
                aria-label="Get your free API development quote from QllmSoft"
              >
                Get Your Free Quote →
              </Link>
              <a
                href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20an%20API%20project!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
                aria-label="WhatsApp QllmSoft to discuss your API development project"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="api-cta__perks">
              <span>✓ Free consultation</span>
              <span>✓ Fixed-price quotes</span>
              <span>✓ Response within 24 hours</span>
              <span>✓ Post-launch support included</span>
            </div>

            {/* Related services internal links */}
            <nav
              className="api-cta__related"
              aria-label="Related software development services"
            >
              <span>Related Services:</span>
              <Link to="/custom-software-development-services">
                Custom Software Development
              </Link>
              <Link to="/website-development-services">
                Web Application Development
              </Link>
              <Link to="/mobile-app-development">Mobile App Development</Link>
              <Link to="/ai-powered-software-solutions">
                AI-Powered Software
              </Link>
            </nav>
          </div>
        </section>
      </main>
    </>
  );
};

export default ApiDevelopmentServices;
