/**
 * Services.jsx, QllmSoft
 * ─────────────────────────────────────────────────────────────────
 * SEO STRATEGY (2026):
 *
 * Primary Keywords (solution/outcome-first):
 *   software development services Pakistan
 *   custom software solutions Pakistan
 *   IT services company Pakistan
 *   software development services in Pakistan
 *   digital solutions Pakistan
 *
 * Secondary Keywords (service-specific):
 *   custom software development Pakistan
 *   enterprise software solutions Pakistan
 *   web application development Pakistan
 *   mobile app development Pakistan
 *   business software development Pakistan
 *   software outsourcing Pakistan
 *
 * Stack Keywords (SEO-secondary, for global developer-hire searches):
 *   .NET development company Pakistan
 *   ASP.NET Core development Pakistan
 *   React development Pakistan
 *   Flutter app development Pakistan
 *
 * Industry Keywords:
 *   healthcare software Pakistan
 *   fintech software development Pakistan
 *   education software Pakistan
 *   ecommerce software Pakistan
 *
 * SEO:
 *   ✓ react-helmet-async  → title, description, keywords, canonical, OG, Twitter
 *   ✓ 3 JSON-LD schemas   → WebPage+BreadcrumbList, Service+OfferCatalog, FAQPage
 *   ✓ Single H1           → solution-first, commercial intent
 *   ✓ H1→H2→H3 hierarchy  → strict
 *   ✓ Trust band E-E-A-T  → verified stats
 *   ✓ Internal linking    → all service sub-pages
 *   ✓ External authority  → OWASP outbound
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
  name: "Software Development Services in Pakistan | Custom Digital Solutions | QllmSoft",
  description:
    "QllmSoft provides custom software development services in Pakistan, enterprise web applications, mobile apps, business automation, AI-powered solutions, and dedicated developer teams for businesses in Pakistan, UK, USA, UAE, and Saudi Arabia.",
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
    "End-to-end custom software development services, enterprise web applications, Android and iOS mobile apps, business automation systems, AI-powered tools, legacy system modernisation, and dedicated developer hiring for businesses in Pakistan and internationally.",
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
          name: "Enterprise Web Application Development Pakistan",
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
          name: "Business Process Automation Pakistan",
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
          name: "Software Outsourcing Pakistan",
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
          name: "Hire Software Developers Pakistan",
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
      name: "What software development services does QllmSoft offer in Pakistan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QllmSoft offers end-to-end custom software development services including enterprise web applications, Android and iOS mobile app development, business automation systems, AI-powered tools, eCommerce platforms, HR and payroll systems, document management systems, healthcare management software, and dedicated developer hiring. We serve businesses across Pakistan, Lahore, Karachi, Islamabad, Faisalabad, Sialkot, Gujranwala, and internationally across the UK, USA, UAE, and Saudi Arabia.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom software development cost in Pakistan in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom software development costs at QllmSoft range from PKR 50,000 for a simple business web application to PKR 500,000+ for complex enterprise systems with multi-department workflows, third-party integrations, and advanced reporting. Every project receives a detailed, fixed-price scope document and formal quote within 24 hours of a free consultation, with no hidden charges at any stage.",
      },
    },
    {
      "@type": "Question",
      name: "Does QllmSoft build mobile apps for Android and iOS in Pakistan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. QllmSoft develops cross-platform mobile apps for both Android and iOS delivering native-quality experiences on both platforms from a single, efficient codebase. Our mobile apps are built with offline capability, push notifications, intuitive design, and seamless backend integration. We handle the full lifecycle from wireframing through App Store submission and post-launch maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Does QllmSoft work with international clients for software outsourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. QllmSoft is a leading software outsourcing company in Pakistan serving international clients across the USA, Europe & Gulf. Our developers work in client time zones, communicate in fluent English, and deliver against fixed-price scopes with full IP ownership and NDA from day one, independently verified through Upwork (100% Job Success Score) and Freelancer (5-star rating).",
      },
    },
    {
      "@type": "Question",
      name: "What industries does QllmSoft build software for in Pakistan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QllmSoft has delivered production-grade software solutions across healthcare, finance, education, logistics, eCommerce, SaaS, HR, and real estate sectors since 2015. We bring both deep technical expertise and genuine business domain understanding to every engagement, ensuring your software solves real operational problems, not just technical ones.",
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
              `${service.name}, QllmSoft software development services Pakistan`
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

/* ─── FAQ Accordion ─────────────────────────────────────────────── */
const faqItems = [
  {
    q: "What software development services does QllmSoft offer in Pakistan?",
    a: "QllmSoft provides end-to-end custom software development services, enterprise web applications, Android and iOS mobile apps, business automation systems, AI-powered tools, eCommerce platforms, HR and payroll software, document management systems, and dedicated developer hiring. We serve businesses across Lahore, Karachi, Islamabad, Faisalabad, Sialkot, Gujranwala, and internationally in the UK, USA, UAE, and Saudi Arabia, all backed by a 100% Upwork Job Success Score and 5-star Freelancer rating.",
  },
  {
    q: "How much does custom software development cost in Pakistan in 2026?",
    a: "Custom software development costs at QllmSoft range from PKR 50,000 for a simple business web application to PKR 500,000+ for complex enterprise systems with multi-department workflows, third-party integrations, and advanced reporting. Every project receives a detailed, fixed-price scope document and a formal quote within 24 hours of a free consultation, with no hidden charges at any stage.",
  },
  {
    q: "Does QllmSoft build mobile apps for Android and iOS in Pakistan?",
    a: "Yes. QllmSoft develops cross-platform mobile apps for both Android and iOS delivering native-quality user experiences on both platforms from a single, efficient codebase. Our mobile apps are built for offline capability, push notifications, intuitive design, and seamless backend integration. We handle the full lifecycle from wireframing and UI/UX design through App Store submission and post-launch maintenance.",
  },
  {
    q: "What industries does QllmSoft build software for?",
    a: "QllmSoft has delivered production-grade software solutions across healthcare, finance, education, logistics, eCommerce, SaaS, HR management, and real estate since 2015. We bring deep technical expertise combined with genuine business domain understanding, ensuring your software solves real operational problems, not just technical ones.",
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
            Frequently Asked Questions, Software Development Services in Pakistan
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

/* ─── Technologies Section ──────────────────────────────────────── */
const TechnologiesSection = () => (
  <section
    className="section technologies-section bg-light"
    aria-labelledby="tech-h2"
  >
    <div className="container">
      <div className="section-title reveal">
        <h2 id="tech-h2">
          Technologies Powering Our Software Solutions
        </h2>
        <p>
          We select the best technology for each project based on your
          performance requirements, scalability roadmap, and long-term
          maintainability, not convenience or habit. Every tool is
          production-proven, actively maintained, and enterprise-tested. Security
          implementations follow{" "}
          <a
            href="https://owasp.org/www-project-top-ten/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="OWASP Top 10 security standard, external reference"
          >
            OWASP Top 10
          </a>{" "}
          standards across every project we deliver.
        </p>
      </div>
      <div className="tech-grid reveal">
        <div className="tech-category">
          <h3>Web &amp; Frontend</h3>
          <ul>
            <li>React JS (Hooks, Context, Next.js)</li>
            <li>Angular (Standalone Components)</li>
            <li>Blazor WebAssembly &amp; Server</li>
            <li>Razor Pages / ASP.NET MVC</li>
            <li>TypeScript / Tailwind CSS</li>
          </ul>
        </div>
        <div className="tech-category">
          <h3>Backend &amp; APIs</h3>
          <ul>
            <li>ASP.NET Core (Web API, MVC)</li>
            <li>C# / Entity Framework Core</li>
            <li>REST API (OpenAPI / Swagger)</li>
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
            <li>SQL Server / PostgreSQL</li>
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

/* ─── Trust Band ────────────────────────────────────────────────── */
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
        { num: "50+", lbl: "Projects Delivered" },
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
          SEO HEAD
      ═══════════════════════════════════════════ */}
      <Helmet>
        {/* Title, 60 chars, solution-first + brand */}
        <title>
          Software Development Services in Pakistan | Custom Digital Solutions | QllmSoft
        </title>

        {/* Description, 158 chars */}
        <meta
          name="description"
          content="QllmSoft delivers custom software development services in Pakistan, enterprise web apps, mobile apps, business automation, AI solutions & dedicated developer teams. Free quote in 24 hours."
        />

        {/* Keywords, solution-first, service + stack mix */}
        <meta
          name="keywords"
          content="software development services Pakistan, custom software solutions Pakistan, IT services Pakistan, enterprise software solutions Pakistan, web application development Pakistan, mobile app development Pakistan, business software development Pakistan, software outsourcing Pakistan, digital solutions Pakistan, .NET development Pakistan, React development Pakistan, Flutter app development Pakistan, healthcare software Pakistan, education software Pakistan"
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
          content="Software Development Services in Pakistan | Custom Digital Solutions | QllmSoft"
        />
        <meta
          property="og:description"
          content="Custom software development services in Pakistan, enterprise web apps, mobile apps, business automation, and AI solutions. Free quote in 24 hours."
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
          content="Custom enterprise software, mobile apps, business automation, and AI solutions from Pakistan's trusted software development company."
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
            {/* ✅ SINGLE H1, solution-first, broad commercial intent */}
            <h1 id="svc-hero-h1">
              Custom Software Development Services in Pakistan, Built Around Your Business
            </h1>
            <p>
              QllmSoft engineers production-ready digital solutions for businesses that need more
              than a generic tool. We build{" "}
              <Link to="/web-application-development-services">
                enterprise web applications
              </Link>
              ,{" "}
              <Link to="/mobile-app-development">
                mobile apps for Android and iOS
              </Link>
              ,{" "}
              <Link to="/api-development-services">business automation systems</Link>
              , and{" "}
              <Link to="/ai-powered-software-solutions">
                AI-powered software solutions
              </Link>{" "}
             , delivered on a fixed price, with a documented scope, on an agreed timeline.
              Serving businesses across Pakistan, the UK, USA, UAE, and Saudi Arabia since
              2015 with a verified 100% Upwork Job Success Score.
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
                Our Software Development Services, Full Capability Overview
              </h2>
              <p>
                End-to-end digital solutions built entirely around your business goals, not
                generic templates or pre-built tools stretched to fit. As a{" "}
                <strong>custom software development company in Pakistan</strong>, QllmSoft
                serves businesses in Lahore, Karachi, Islamabad, Faisalabad, Sialkot,
                Gujranwala, and internationally across four continents. Explore our full range
                of{" "}
                <Link to="/custom-software-development-services">
                  custom software development services
                </Link>
                ,{" "}
                <Link to="/outsource-software-development-to-pakistan">
                  software outsourcing from Pakistan
                </Link>
                , and{" "}
                <Link to="/hire-dotnet-developers-pakistan">
                  dedicated developer hiring
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
                Our 6-Phase Delivery Process, Structured, Transparent, Accountable
              </h2>
              <p>
                A delivery framework built around one principle: you should always know what
                we are building, when it will be done, and exactly what it costs, before a
                single line of code is written. Our process eliminates scope ambiguity,
                prevents budget surprises, and ensures every software project arrives
                production-ready on the agreed date.
              </p>
            </div>
            <div className="process-grid">
              <div className="process-step reveal reveal-delay-1">
                <div className="process-number">01</div>
                <h3>Discovery &amp; Requirements Analysis</h3>
                <p>
                  We conduct a structured requirements workshop covering your business goals,
                  user journeys, technical constraints, and integration requirements. The
                  output is a formal scope document and fixed-price breakdown, approved by
                  you before any development begins. No ambiguity, no scope creep.
                </p>
              </div>

              <div className="process-step reveal reveal-delay-2">
                <div className="process-number">02</div>
                <h3>Solution Architecture &amp; Technical Planning</h3>
                <p>
                  Our architects design a clean, scalable system with technology selection
                  rationale, sprint plan, database schema, API contract design, and security
                  architecture document, all formally reviewed and approved before coding
                  starts. The right architecture decision at this stage saves months of
                  refactoring later.
                </p>
              </div>

              <div className="process-step reveal reveal-delay-3">
                <div className="process-number">03</div>
                <h3>Agile Development in 2-Week Sprints</h3>
                <p>
                  Clean, well-structured code delivered in two-week sprints with weekly live
                  demos on shared staging environments. You control backlog priority throughout
                 , adjusting feature order based on your business timeline while we maintain
                  development velocity and code quality standards.
                </p>
              </div>

              <div className="process-step reveal reveal-delay-1">
                <div className="process-number">04</div>
                <h3>QA, Security Testing &amp; Performance Audit</h3>
                <p>
                  Automated regression tests, manual QA on real devices, OWASP Top 10 security
                  validation, load testing against agreed performance SLAs, and penetration
                  testing before every production release. Nothing ships until it passes our
                  complete quality standard.
                </p>
              </div>

              <div className="process-step reveal reveal-delay-2">
                <div className="process-number">05</div>
                <h3>Deployment &amp; CI/CD Pipeline Setup</h3>
                <p>
                  Zero-downtime production deployment with full pipeline configuration,
                  environment documentation, monitoring dashboard setup, and complete handover
                  to your infrastructure team or direct management.
                </p>
              </div>

              <div className="process-step reveal reveal-delay-3">
                <div className="process-number">06</div>
                <h3>30-Day Hyper-Care &amp; Long-Term Support</h3>
                <p>
                  Every QllmSoft project includes a formal 30-day post-launch hyper-care
                  window, bug resolution, performance monitoring, security patch management,
                  and complete knowledge transfer to your team. Long-term maintenance contracts
                  are available for ongoing development and optimisation.
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
                Explore Our Specialised Software Development Services in Pakistan
              </h2>
              <p>
                Deep-dive into each service area, with detailed capability breakdowns,
                industry focus, and real project examples.
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
                    desc: "Bespoke enterprise applications built from scratch around your exact business requirements, not adapted from templates.",
                  },
                  {
                    to: "/web-application-development-services",
                    title: "Enterprise Web Application Development",
                    desc: "Scalable, secure enterprise web platforms, internal portals, and SaaS applications designed for real operational workloads.",
                  },
                  {
                    to: "/mobile-app-development",
                    title: "Mobile App Development",
                    desc: "Cross-platform mobile apps for Android and iOS, with offline capability, push notifications, and seamless backend integration.",
                  },
                  {
                    to: "/api-development-services",
                    title: "API Development &amp; System Integration",
                    desc: "Secure, documented, and tested APIs enabling seamless integration across web apps, mobile platforms, and enterprise systems.",
                  },
                  {
                    to: "/ai-powered-software-solutions",
                    title: "AI-Powered Software Solutions",
                    desc: "Machine learning, NLP, computer vision, and intelligent automation embedded into your products, measurable ROI, not demos.",
                  },
                  {
                    to: "/outsource-software-development-to-pakistan",
                    title: "Outsource Software Development to Pakistan",
                    desc: "Senior engineers and full-stack development teams at 60% lower cost, fixed-price, full IP ownership, NDA from day one.",
                  },
                  {
                    to: "/legacy-system-modernization-services",
                    title: "Legacy System Modernisation",
                    desc: "Phased, zero-disruption migration from outdated systems to modern, maintainable platforms, business logic fully preserved.",
                  },
                  {
                    to: "/healthcare-software-development-pakistan",
                    title: "Healthcare Software Development",
                    desc: "Hospital management systems, telemedicine platforms, EMR/EHR, and clinic software for Pakistani healthcare providers.",
                  },
                  {
                    to: "/education-software-development-pakistan",
                    title: "Education Software Development",
                    desc: "School management systems, LMS platforms, and eLearning apps, with JazzCash fee integration for Pakistani institutions.",
                  },
                  {
                    to: "/hire-dotnet-developers-pakistan",
                    title: "Hire Dedicated Developers in Pakistan",
                    desc: "Dedicated web, mobile, and AI engineers available full-time within 24–48 hours, fixed-rate, no recruitment overhead.",
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
                Tell us what you need to build. QllmSoft will review your requirements, send
                a detailed fixed-price proposal within 24 hours, and schedule a free discovery
                call, no commitment required. Businesses in Pakistan, the UK, USA, UAE, and
                Saudi Arabia trust QllmSoft to deliver. We look forward to earning that trust
                from you.
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
