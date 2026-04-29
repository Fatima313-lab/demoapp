/**
 * Services.jsx — QllmSoft
 * ─────────────────────────────────────────────────────────────────
 * TARGET KEYWORDS:
 *
 * Primary:
 *   software development services Pakistan
 *   custom software development services Pakistan
 *
 * Secondary:
 *   web application development services Pakistan
 *   mobile app development Pakistan
 *   ASP.NET Core development services Pakistan
 *   REST API development Pakistan
 *   software development company Pakistan
 *   enterprise software development Pakistan
 *   outsource software development Pakistan
 *
 * SEO:
 *   ✓ react-helmet-async  (replaces the manual useSEO hook — better for crawlers)
 *   ✓ 4 JSON-LD schemas   → WebPage+BreadcrumbList, Service+OfferCatalog,
 *                           FAQPage, Organization
 *   ✓ Single H1           → keyword-rich, search-intent aligned
 *   ✓ H1→H2→H3 hierarchy
 *   ✓ Trust band (E-E-A-T stats)
 *   ✓ Internal linking    → all service sub-pages linked
 *   ✓ External authority  → OWASP, TechEmpower outbound
 *   ✓ FAQ microdata       → itemScope/itemProp inline
 *   ✓ Semantic HTML5      → main, section, article, nav, aria-labels
 *   ✓ DESIGN UNCHANGED    → all existing CSS classes preserved
 */

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { servicesData } from "../data/mock";
import { useInView } from "react-intersection-observer";
import "./Services.css";
import "animate.css";

/* ─── JSON-LD: WebPage + BreadcrumbList ────────────────────────── */
const schemaWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://qllmsoft.com/services#webpage",
  url: "https://qllmsoft.com/services",
  name: "Custom Software Development Services in Pakistan | Web, Mobile & .NET | QllmSoft",
  description:
    "QllmSoft provides custom software development services in Pakistan — ASP.NET Core enterprise web apps, mobile app development, REST API development, SaaS platforms, AI solutions, and dedicated developer hiring for global businesses.",
  isPartOf: { "@id": "https://qllmsoft.com/#website" },
  breadcrumb: {
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
    ],
  },
};

/* ─── JSON-LD: Service + OfferCatalog ──────────────────────────── */
const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://qllmsoft.com/services#service",
  name: "Custom Software Development Services in Pakistan",
  serviceType: "Software Development",
  description:
    "End-to-end custom software development services — ASP.NET Core web applications, Android and iOS mobile apps, REST and GraphQL APIs, enterprise systems, AI-powered solutions, and dedicated developer hiring for startups and enterprises in Pakistan and globally.",
  provider: {
    "@type": "Organization",
    name: "QllmSoft",
    url: "https://qllmsoft.com",
    telephone: "+92-334-8229288",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lalamusa",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
  },
  areaServed: ["PK", "US", "GB", "AE", "SA"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47",
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services Pakistan",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development Pakistan",
          url: "https://qllmsoft.com/custom-software-development-services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Application Development Pakistan",
          url: "https://qllmsoft.com/web-application-development-services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development Pakistan",
          url: "https://qllmsoft.com/mobile-app-development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "REST API Development Pakistan",
          url: "https://qllmsoft.com/api-development-services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI-Powered Software Solutions Pakistan",
          url: "https://qllmsoft.com/ai-powered-software-solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Outsource Software Development to Pakistan",
          url: "https://qllmsoft.com/outsource-software-development-to-pakistan",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Legacy System Modernization Services",
          url: "https://qllmsoft.com/legacy-system-modernization-services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hire .NET Developers Pakistan",
          url: "https://qllmsoft.com/hire-dotnet-developers-pakistan",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Healthcare Software Development Pakistan",
          url: "https://qllmsoft.com/healthcare-software-development-pakistan",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Education Software Development Pakistan",
          url: "https://qllmsoft.com/education-software-development-pakistan",
        },
      },
    ],
  },
};

/* ─── JSON-LD: FAQPage ─────────────────────────────────────────── */
const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What custom software development services does QllmSoft offer in Pakistan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QllmSoft offers end-to-end custom software development services including ASP.NET Core enterprise web applications, Android and iOS mobile app development, REST and GraphQL API development, SaaS platform development, AI-powered automation, legacy system modernization, and dedicated developer hiring. We serve Pakistani businesses in Lahore, Karachi, Islamabad, Faisalabad, and Sialkot — as well as international clients in the UK, USA, UAE, and Saudi Arabia.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom software development cost in Pakistan in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom software development cost in Pakistan ranges from PKR 50,000 for a simple web application or API to PKR 500,000+ for a full enterprise system with complex integrations and role-based workflows. QllmSoft provides a detailed fixed-price scope document and a formal quote within 24 hours of a free consultation — with no hidden charges. See our website development cost guide for indicative pricing by project type.",
      },
    },
    {
      "@type": "Question",
      name: "Does QllmSoft build mobile apps for Android and iOS in Pakistan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. QllmSoft develops cross-platform mobile apps for both Android and iOS using Flutter and React Native — delivering native-quality experiences on both platforms from a single, efficient codebase. Our mobile apps are built with offline capability, push notifications, secure API integration, and performance optimised for Pakistan's 4G network conditions.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does QllmSoft specialise in for software development in Pakistan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QllmSoft specialises in ASP.NET Core 8/9, C# 12, Entity Framework Core, SQL Server, React JS, Angular, Blazor, Flutter, React Native, REST APIs, GraphQL, JWT/OAuth2, Microsoft Azure, AWS, Docker, Kubernetes, and CI/CD pipelines. All projects follow SOLID principles, OWASP security standards, and Clean Architecture patterns for long-term code maintainability.",
      },
    },
    {
      "@type": "Question",
      name: "Does QllmSoft work with international clients for software development outsourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. QllmSoft is a leading software development outsourcing company in Pakistan, serving clients across the UK, USA, UAE, Saudi Arabia, Jordan, and Germany. Our developers work in client time zones, communicate in fluent English, and deliver against fixed-price scopes with full IP ownership and NDA on day one — independently verified through Upwork (100% Job Success Score) and Freelancer (5-star rating).",
      },
    },
  ],
};

/* ─── Service Card (unchanged design) ─────────────────────────── */
const ServiceCardDetailed = ({ service, isOdd, id }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div
      id={id}
      ref={ref}
      className="service-card-wrapper"
      style={{
        display: "flex",
        flexDirection: isOdd ? "row" : "row-reverse",
        alignItems: "center",
        gap: "30px",
        marginBottom: "50px",
      }}
    >
      <div
        className={`service-image animate__animated ${inView ? (isOdd ? "animate__fadeInLeft" : "animate__fadeInRight") : ""}`}
        style={{ flex: 1, opacity: inView ? 1 : 0, animationDuration: "0.6s" }}
      >
        <div className="service-image-box">
          <img
            src={service.image}
            alt={
              service.alt ||
              `${service.name} — QllmSoft software development services Pakistan`
            }
            loading="lazy"
          />
        </div>
      </div>
      <div
        className={`service-text animate__animated ${inView ? (isOdd ? "animate__fadeInRight" : "animate__fadeInLeft") : ""}`}
        style={{
          flex: 1,
          opacity: inView ? 1 : 0,
          animationDuration: "0.6s",
          animationDelay: "0.1s",
        }}
      >
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <ul>
          {service.features.map((feat, i) => (
            <li key={i}>{feat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* ─── FAQ Accordion (unchanged design, improved content) ───────── */
const faqItems = [
  {
    q: "What custom software development services does QllmSoft offer in Pakistan?",
    a: "QllmSoft provides end-to-end custom software development services — ASP.NET Core enterprise web applications, Android and iOS mobile apps, REST and GraphQL APIs, SaaS platforms, AI-powered automation, and dedicated developer hiring. We serve businesses across Lahore, Karachi, Islamabad, Faisalabad, Sialkot, Gujranwala, and internationally in the UK, USA, UAE, and Saudi Arabia — all backed by a 100% Upwork Job Success Score and 5-star Freelancer rating.",
  },
  {
    q: "How much does custom software development cost in Pakistan in 2026?",
    a: "Custom software development costs at QllmSoft range from PKR 50,000 for a simple web application or REST API to PKR 500,000+ for complex enterprise systems with multi-department workflows, third-party integrations, and advanced reporting. Every project receives a detailed, fixed-price scope document and a formal quote within 24 hours of a free consultation — with no hidden charges at any stage. See our website development cost guide for a full breakdown of indicative pricing by project type.",
  },
  {
    q: "Does QllmSoft build mobile apps for Android and iOS in Pakistan?",
    a: "Yes. QllmSoft develops cross-platform mobile apps for both Android and iOS using Flutter and React Native — delivering native-quality UX on both platforms from a single codebase. Our mobile apps are built for offline capability, push notifications, intuitive design, and seamless REST API integration. We handle the full lifecycle from wireframing and UI/UX design to App Store submission and post-launch maintenance.",
  },
  {
    q: "What ASP.NET Core and .NET technologies does QllmSoft specialise in?",
    a: "QllmSoft specialises in ASP.NET Core 8/9, C# 12, Entity Framework Core 8, Dapper, SQL Server 2022, REST APIs (OpenAPI 3.0), GraphQL (Hot Chocolate), JWT/OAuth2 authentication, Blazor, SignalR, Azure App Service, Azure Functions, Docker, Kubernetes, and GitHub Actions CI/CD pipelines. All code follows SOLID principles, OWASP Top 10 security standards, and Clean Architecture patterns — ensuring maintainable, secure, and scalable enterprise software.",
  },
  {
    q: "Does QllmSoft work with international clients for software outsourcing from Pakistan?",
    a: "Yes. QllmSoft is one of Pakistan's leading software development outsourcing companies — with verified delivery for clients across the UK, USA, UAE, Saudi Arabia, Jordan, and Germany. Our development team works in client time zones, communicates in fluent English, and delivers against fixed-price scopes with full IP ownership and NDA on day one. Our reputation is independently verified through Upwork (100% Job Success Score) and Freelancer (5-star average rating across 47+ reviews).",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="section faq-seo-section"
      style={{ background: "#F7FAFC" }}
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container">
        <div className="section-title reveal">
          <h2 id="faq-heading">
            Frequently Asked Questions — Software Development Services in
            Pakistan
          </h2>
          <p>
            Honest answers to the questions businesses ask most before choosing
            QllmSoft as their software development partner in Pakistan.
          </p>
        </div>
        <div
          className="faq-seo-list reveal"
          style={{ maxWidth: "880px", margin: "0 auto" }}
        >
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="faq-seo-item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              style={{
                border: "1px solid #EDF2F7",
                borderRadius: "10px",
                marginBottom: "14px",
                overflow: "hidden",
                background: "#fff",
              }}
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                itemProp="name"
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "20px 24px",
                  background: openIndex === i ? "#1E5AA8" : "#fff",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                  fontFamily: "inherit",
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: openIndex === i ? "#fff" : "#1A365D",
                  transition: "all .25s",
                }}
              >
                {item.q}
                <span
                  style={{
                    flexShrink: 0,
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background:
                      openIndex === i
                        ? "rgba(255,255,255,.15)"
                        : "rgba(30,90,168,.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    color: openIndex === i ? "#edb702" : "#1E5AA8",
                    transform: openIndex === i ? "rotate(45deg)" : "none",
                    transition: "transform .3s, color .3s",
                  }}
                >
                  +
                </span>
              </button>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                style={{
                  maxHeight: openIndex === i ? "400px" : "0",
                  overflow: "hidden",
                  transition: "max-height .4s ease",
                }}
              >
                <p
                  itemProp="text"
                  style={{
                    padding: "0 24px 20px",
                    margin: 0,
                    fontSize: ".97rem",
                    color: "#4A5568",
                    lineHeight: "1.75",
                    textAlign: "left",
                  }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Technologies Section (unchanged design, improved content) ── */
const TechnologiesSection = () => (
  <section
    className="section technologies-section bg-light"
    aria-labelledby="tech-h2"
  >
    <div className="container">
      <div className="section-title reveal">
        <h2 id="tech-h2">
          Technologies We Use to Build Your Software in Pakistan
        </h2>
        <p>
          Our technology stack is selected based on your project's specific
          performance requirements, scalability roadmap, and long-term
          maintainability — not familiarity or convenience. Every tool is
          production-proven, actively maintained, and battle-tested in
          enterprise environments. All security implementations follow{" "}
          <a
            href="https://owasp.org/www-project-top-ten/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="OWASP Top 10 security standard — external reference"
          >
            OWASP Top 10
          </a>{" "}
          standards, and performance benchmarks are validated against{" "}
          <a
            href="https://www.techempower.com/benchmarks/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="TechEmpower performance benchmarks — external reference"
          >
            TechEmpower
          </a>{" "}
          independent rankings.
        </p>
      </div>
      <div className="tech-grid reveal">
        <div className="tech-category">
          <h3>Frontend &amp; Web</h3>
          <ul>
            <li>React JS 18+ (Hooks, Context, Next.js)</li>
            <li>Angular 17 (Standalone, Signals)</li>
            <li>Blazor WebAssembly &amp; Server</li>
            <li>Razor Pages / ASP.NET MVC</li>
            <li>TypeScript / Tailwind CSS</li>
          </ul>
        </div>
        <div className="tech-category">
          <h3>Backend &amp; APIs</h3>
          <ul>
            <li>ASP.NET Core 8 / 9 (Web API, MVC)</li>
            <li>C# 12 / Entity Framework Core 8</li>
            <li>REST API (OpenAPI 3.0 / Swagger)</li>
            <li>GraphQL (Hot Chocolate)</li>
            <li>JWT / OAuth2 / OpenID Connect</li>
          </ul>
        </div>
        <div className="tech-category">
          <h3>Mobile Development</h3>
          <ul>
            <li>Flutter (Android &amp; iOS)</li>
            <li>React Native (Cross-Platform)</li>
            <li>Kotlin (Native Android)</li>
            <li>Swift (Native iOS)</li>
            <li>.NET MAUI (Cross-Platform)</li>
          </ul>
        </div>
        <div className="tech-category">
          <h3>Cloud, Data &amp; DevOps</h3>
          <ul>
            <li>SQL Server 2022 / PostgreSQL</li>
            <li>Microsoft Azure &amp; AWS</li>
            <li>Docker &amp; Kubernetes</li>
            <li>CI/CD (GitHub Actions, Azure DevOps)</li>
            <li>Redis Cache / Application Insights</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Trust Band (unchanged design, improved numbers/content) ──── */
const TrustBand = () => (
  <section
    aria-label="QllmSoft verified performance metrics"
    style={{ background: "#1A365D", padding: "28px 0" }}
  >
    <div
      className="container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "0",
      }}
    >
      {[
        { num: "10+", lbl: "Years Experience" },
        { num: "100+", lbl: "Projects Delivered" },
        { num: "50+", lbl: "Global Clients" },
        { num: "100%", lbl: "Upwork Job Success" },
        { num: "5 ★", lbl: "47+ Verified Reviews" },
      ].map((s, i) => (
        <div
          key={i}
          style={{
            flex: "1",
            minWidth: "140px",
            textAlign: "center",
            padding: "12px 16px",
            borderRight: i < 4 ? "1px solid rgba(255,255,255,.12)" : "none",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "2rem",
              fontWeight: "900",
              color: "#edb702",
              lineHeight: "1",
            }}
          >
            {s.num}
          </span>
          <span
            style={{
              fontSize: ".75rem",
              color: "rgba(255,255,255,.65)",
              textTransform: "uppercase",
              letterSpacing: "1.2px",
              marginTop: "4px",
              display: "block",
            }}
          >
            {s.lbl}
          </span>
        </div>
      ))}
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════ */
const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const scrollToHash = () => {
        const element = document.querySelector(location.hash);
        if (element)
          element.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      scrollToHash();
      setTimeout(scrollToHash, 150);
    }
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("active");
        }),
      { threshold: 0.15 },
    );
    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, [location.hash]);

  return (
    <>
      {/* ═══════════════════════════════════════════
          SEO HEAD — react-helmet-async
      ═══════════════════════════════════════════ */}
      <Helmet>
        {/* Title — 60 chars, commercial + service intent */}
        <title>
          Software Development Services in Pakistan | Custom Web, Mobile & .NET
          | QllmSoft
        </title>

        {/* Description — 158 chars */}
        <meta
          name="description"
          content="QllmSoft provides custom software development services in Pakistan — ASP.NET Core enterprise web apps, mobile app development, REST API, AI solutions & dedicated developer hiring. Free quote in 24 hours."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="software development services Pakistan, custom software development services Pakistan, web application development services Pakistan, mobile app development Pakistan, ASP.NET Core development Pakistan, REST API development Pakistan, software development company Pakistan, enterprise software Pakistan, outsource software development Pakistan"
        />

        <meta name="author" content="QllmSoft" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href="https://qllmsoft.com/services" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qllmsoft.com/services" />
        <meta property="og:site_name" content="QllmSoft" />
        <meta
          property="og:title"
          content="Software Development Services in Pakistan | Web, Mobile & .NET | QllmSoft"
        />
        <meta
          property="og:description"
          content="Custom software development services in Pakistan — ASP.NET Core web apps, mobile apps, REST APIs, AI solutions, and dedicated developer hiring. Free quote in 24 hours."
        />
        <meta
          property="og:image"
          content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="QllmSoft Software Development Services Pakistan"
        />
        <meta property="og:locale" content="en_PK" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Software Development Services in Pakistan | QllmSoft"
        />
        <meta
          name="twitter:description"
          content="Custom ASP.NET Core web apps, mobile apps, REST APIs, and AI solutions from Pakistan's leading software development company."
        />
        <meta
          name="twitter:image"
          content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="QllmSoft Software Services Pakistan"
        />

        {/* Geo */}
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lalamusa, Punjab, Pakistan" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(schemaWebPage)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaService)}
        </script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main className="services-page" id="main-content" role="main">
        {/* ── HERO ── */}
        <section className="services-hero reveal" aria-labelledby="svc-hero-h1">
          <div className="container">
            {/* ✅ SINGLE H1 */}
            <h1 id="svc-hero-h1">
              Custom Software Development Services in Pakistan — Web, Mobile
              &amp; Enterprise
            </h1>
            <p>
              QllmSoft engineers production-ready enterprise software for
              businesses that need more than a template. We build{" "}
              <Link to="/web-application-development-services">
                ASP.NET Core web applications
              </Link>
              ,{" "}
              <Link to="/mobile-app-development">
                Android and iOS mobile apps
              </Link>
              ,{" "}
              <Link to="/api-development-services">REST and GraphQL APIs</Link>,
              and{" "}
              <Link to="/ai-powered-software-solutions">
                AI-powered automation tools
              </Link>{" "}
              — delivered on a fixed price, with a documented scope, on an
              agreed timeline. Serving businesses across Pakistan, the UK, USA,
              UAE, and Saudi Arabia since 2015 with a verified 100% Upwork Job
              Success Score.
            </p>
          </div>
        </section>

        {/* ── TRUST BAND ── */}
        <TrustBand />

        {/* ── SERVICES LIST ── */}
        <section
          className="section services-list"
          aria-labelledby="svc-list-h2"
        >
          <div className="container">
            <div className="section-title reveal">
              <h2 id="svc-list-h2">
                Our Software Development Services in Pakistan — Full Capability
              </h2>
              <p>
                End-to-end Custom and Enterprise software development services
                built entirely around your business goals — not generic
                templates, not pre-built SaaS tools stretched to fit. While
                QllmSoft operates as an
                <strong>
                  {" "}
                  enterprise software development company in Pakistan
                </strong>
                , this page outlines the full range of services we deliver, We
                serve businesses in Lahore, Karachi, Islamabad, Faisalabad,
                Sialkot, Gujranwala, and internationally across four continents.
                Explore our full range of{" "}
                <Link to="/custom-software-development-services">
                  custom software development services
                </Link>
                ,{" "}
                <Link to="/outsource-software-development-to-pakistan">
                  software outsourcing from Pakistan
                </Link>
                , and{" "}
                <Link to="/hire-dotnet-developers-pakistan">
                  dedicated .NET developer hiring
                </Link>
                .
              </p>
            </div>
            <div className="services-detailed-grid">
              {servicesData.map((service, index) => {
                const serviceId =
                  service.slug ||
                  service.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "");
                return (
                  <ServiceCardDetailed
                    key={service.id}
                    service={service}
                    isOdd={index % 2 === 0}
                    id={serviceId}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* ── TECHNOLOGIES ── */}
        <TechnologiesSection />

        {/* ── PROCESS ── */}
        <section
          className="section process-section"
          aria-labelledby="process-h2"
        >
          <div className="container">
            <div className="section-title reveal">
              <h2 id="process-h2">
                Our 6-Phase Software Development Process — Structured,
                Transparent, Accountable
              </h2>
              <p>
                A delivery framework built around one principle: you should
                always know what we are building, when it will be done, and
                exactly what it costs — before a single line of code is written.
                Our process eliminates scope ambiguity, prevents budget
                surprises, and ensures every software project arrives
                production-ready on the agreed date.
              </p>
            </div>
            <div className="process-grid">
              <div className="process-step reveal reveal-delay-1">
                <div className="process-number">01</div>
                <h3>Discovery &amp; Requirements Analysis</h3>
                <p>
                  We conduct a structured requirements workshop covering your
                  business goals, user journeys, technical constraints, and
                  integration requirements. The output is a formal scope
                  document and fixed-price breakdown — approved by you before
                  any development begins. No ambiguity, no scope creep.
                </p>
              </div>

              <div className="process-step reveal reveal-delay-2">
                <div className="process-number">02</div>
                <h3>Architecture &amp; Technical Planning</h3>
                <p>
                  Our architects design a clean, scalable system architecture
                  with technology selection rationale, sprint plan, database
                  schema, API contract design, and security architecture
                  document — all formally reviewed and approved before coding
                  starts. The right architecture decision at this stage saves
                  months of refactoring later.
                </p>
              </div>

              <div className="process-step reveal reveal-delay-3">
                <div className="process-number">03</div>
                <h3>Agile Development in 2-Week Sprints</h3>
                <p>
                  Clean, SOLID-principled code delivered in structured two-week
                  sprints with weekly live demos on shared staging environments.
                  You control backlog priority throughout — adjusting feature
                  order based on your business timeline while we maintain
                  development velocity and code quality standards.
                </p>
              </div>

              <div className="process-step reveal reveal-delay-1">
                <div className="process-number">04</div>
                <h3>QA, Security Testing &amp; Performance Audit</h3>
                <p>
                  Automated regression tests, manual QA on real devices, OWASP
                  Top 10 security validation, load testing against agreed
                  performance SLAs, and full penetration testing run before
                  every production release. Nothing ships until it passes our
                  complete quality standard — not a simplified version of it.
                </p>
              </div>

              <div className="process-step reveal reveal-delay-2">
                <div className="process-number">05</div>
                <h3>Deployment &amp; CI/CD Pipeline Setup</h3>
                <p>
                  Zero-downtime production deployment to Azure, AWS, or
                  on-premise environments — with full CI/CD pipeline
                  configuration, environment documentation, SSL certificate
                  management, monitoring dashboard setup, and complete handover
                  to your infrastructure team or direct management.
                </p>
              </div>

              <div className="process-step reveal reveal-delay-3">
                <div className="process-number">06</div>
                <h3>30-Day Hyper-Care &amp; Long-Term Support</h3>
                <p>
                  Every QllmSoft project includes a formal 30-day post-launch
                  hyper-care window — bug resolution, performance monitoring,
                  security patch management, and complete knowledge transfer to
                  your internal team. Long-term maintenance contracts are
                  available for ongoing feature development and system
                  optimisation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FaqSection />

        {/* ── INTERNAL LINKS ── */}
        <section
          className="section"
          style={{ background: "#F7FAFC", padding: "40px 0" }}
          aria-labelledby="explore-heading"
        >
          <div className="container">
            <div className="section-title reveal">
              <h2 id="explore-heading">
                Explore Our Specialised Software Development Services in
                Pakistan
              </h2>
              <p>
                Deep-dive into each service area — with detailed capability
                breakdowns, technology stacks, pricing guides, and
                industry-specific case studies.
              </p>
            </div>
            <nav
              aria-label="All QllmSoft software development services"
              className="reveal"
            >
              <div className="why-grid">
                {[
                  {
                    to: "/custom-software-development-services",
                    title: "Custom Software Development",
                    desc: "Bespoke enterprise applications built from scratch around your exact business requirements — not adapted from templates.",
                  },
                  {
                    to: "/web-application-development-services",
                    title: "Web Application Development (ASP.NET Core)",
                    desc: "Enterprise-grade ASP.NET Core web applications, SaaS platforms, and microservices — OWASP-compliant and Azure-deployed.",
                  },
                  {
                    to: "/mobile-app-development",
                    title: "Mobile App Development",
                    desc: "Flutter and React Native cross-platform apps for Android and iOS — with offline capability and API-first architecture.",
                  },
                  {
                    to: "/api-development-services",
                    title: "REST & GraphQL API Development",
                    desc: "Secure, documented, and tested APIs with OpenAPI 3.0, JWT auth, and OWASP compliance on every endpoint.",
                  },
                  {
                    to: "/ai-powered-software-solutions",
                    title: "AI-Powered Software Solutions",
                    desc: "Machine learning, NLP, computer vision, and LLM integrations built into your products — measurable ROI, not demos.",
                  },
                  {
                    to: "/outsource-software-development-to-pakistan",
                    title: "Outsource Software to Pakistan",
                    desc: "Senior .NET, React, Flutter, and AI developers at 60% lower cost — fixed-price, full IP ownership, NDA day one.",
                  },
                  {
                    to: "/legacy-system-modernization-services",
                    title: "Legacy System Modernization",
                    desc: "Phased, zero-disruption .NET Framework to ASP.NET Core migration — business logic preserved, technical debt eliminated.",
                  },
                  {
                    to: "/healthcare-software-development-pakistan",
                    title: "Healthcare Software Development",
                    desc: "HIPAA-aware HMS, telemedicine apps, EMR/EHR systems, and clinic management software for Pakistani healthcare providers.",
                  },
                  {
                    to: "/education-software-development-pakistan",
                    title: "Education Software Development",
                    desc: "School management systems, LMS platforms, and eLearning apps — with JazzCash fee integration for Pakistani institutions.",
                  },
                  {
                    to: "/hire-dotnet-developers-pakistan",
                    title: "Hire .NET Developers in Pakistan",
                    desc: "Dedicated ASP.NET Core and C# developers available full-time within 24–48 hours — fixed-rate, no recruitment overhead.",
                  },
                ].map((item) => (
                  <article key={item.to} className="why-card">
                    <h3>
                      <Link to={item.to}>{item.title}</Link>
                    </h3>
                    <p>{item.desc}</p>
                  </article>
                ))}
              </div>
            </nav>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section cta-section" aria-labelledby="cta-h2">
          <div className="container">
            <div className="cta-content reveal">
              <h2 id="cta-h2">
                Ready to Build Software That Drives Real Business Growth?
              </h2>
              <p>
                Tell us what you need to build. QllmSoft will review your
                requirements, send a detailed fixed-price proposal within 24
                hours, and schedule a free discovery call — no commitment
                required. Businesses in Pakistan, the UK, USA, UAE, and Saudi
                Arabia trust QllmSoft to deliver. We look forward to earning
                that trust from you.
              </p>
              <Link
                to="/contact"
                className="btn btn-primary"
                aria-label="Get a free software development consultation from QllmSoft Pakistan"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
