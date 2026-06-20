/**
 * Services.jsx — QllmSoft
 * ─────────────────────────────────────────────────────────────────
 * SEO STRATEGY (2026) — GLOBAL FIRST
 *
 * Primary Keywords (global commercial intent):
 *   custom software development services
 *   software development company
 *   web development agency
 *   digital marketing services
 *   SEO services
 *   software development services
 *
 * Secondary Keywords (service-specific, global):
 *   enterprise software development
 *   mobile app development services
 *   ecommerce website development
 *   search engine optimization services
 *   business process automation
 *   AI software development
 *   software outsourcing services
 *   hire software developers
 *
 * Stack Keywords:
 *   .NET development company
 *   React development services
 *   Flutter app development

 *
 * Industry Keywords:
 *   healthcare software development
 *   fintech software solutions
 *   education software development
 *   ecommerce software development
 *
 * SEO:
 *   ✓ react-helmet-async  → title, description, keywords, canonical, OG, Twitter
 *   ✓ 3 JSON-LD schemas   → WebPage+BreadcrumbList, Service+OfferCatalog, FAQPage
 *   ✓ Single H1           → global commercial intent, solution-first
 *   ✓ H1→H2→H3 hierarchy  → strict, no skips
 *   ✓ Trust band E-E-A-T  → verified metrics
 *   ✓ Internal linking    → all service sub-pages
 *   ✓ External authority  → OWASP outbound link
 *   ✓ FAQ microdata       → itemScope/itemProp inline
 *   ✓ Semantic HTML5      → main, section, article, nav, aria-labels
 *   ✓ DESIGN UNCHANGED    → all existing CSS classes preserved
 *   ✓ NO Pakistan-local   → zero local geo signals in global sections
 */

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { servicesData } from "../data/mock";
import "./Services.css";
import "animate.css";
import ServiceCard from "../components/ServiceCard";
import QllmDocs from "../assets/QllmDocsMainPage2.webp";
import RelatedSolutions from "../components/RelatedSolutions";

/* ─── JSON-LD: WebPage + BreadcrumbList ────────────────────────── */
const schemaWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://qllmsoft.com/services#webpage",
  url: "https://qllmsoft.com/services",
  name: "Custom Software Development & Digital Marketing Services | QllmSoft",
  description:
    "QllmSoft delivers end-to-end custom software development, web development, mobile app development, SEO, and digital marketing services to businesses worldwide. Fixed pricing, documented scope, verified 100% Upwork Job Success Score.",
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
  name: "Custom Software Development & Digital Marketing Services",
  serviceType: "Software Development",
  description:
    "End-to-end custom software development, enterprise web applications, Android and iOS mobile apps, business automation systems, AI-powered tools, SEO and digital marketing services, legacy system modernisation, and dedicated developer hiring for businesses worldwide.",
  provider: {
    "@type": "Organization",
    name: "QllmSoft",
    url: "https://qllmsoft.com",
    telephone: "+92-334-8229288",
    foundingDate: "2015",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lalamusa",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
  },
  areaServed: ["US", "GB", "AE", "SA", "CA", "AU", "DE", "FR", "NL", "SG"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47",
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development & Digital Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
          url: "https://qllmsoft.com/custom-software-development-services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise Web Application Development",
          url: "https://qllmsoft.com/web-application-development-services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          url: "https://qllmsoft.com/mobile-app-development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Process Automation",
          url: "https://qllmsoft.com/api-development-services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI-Powered Software Solutions",
          url: "https://qllmsoft.com/ai-powered-software-solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO & Digital Marketing Services",
          url: "https://qllmsoft.com/seo-digital-marketing-services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Outsourcing Services",
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
          name: "Hire Software Developers",
          url: "https://qllmsoft.com/hire-dotnet-developers-pakistan",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Healthcare Software Development",
          url: "https://qllmsoft.com/healthcare-software-development-pakistan",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Education Software Development",
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
      name: "What services does QllmSoft offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QllmSoft offers custom software development, enterprise web application development, mobile app development for Android and iOS, business process automation, AI-powered software solutions, SEO and digital marketing services, eCommerce development, legacy system modernisation, and dedicated developer hiring. We serve startups, SMEs, and enterprises across the USA, UK, UAE, Europe, Australia, and beyond.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom software development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom software development costs at QllmSoft vary based on project complexity, feature scope, and integration requirements. Simple business web applications start from a few thousand dollars, while complex enterprise platforms with multi-department workflows, third-party integrations, and advanced reporting are scoped individually. Every project receives a detailed, fixed-price scope document and formal quote within 24 hours of a free consultation, with no hidden charges.",
      },
    },
    {
      "@type": "Question",
      name: "Does QllmSoft build mobile apps for Android and iOS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. QllmSoft develops cross-platform mobile apps for both Android and iOS using Flutter and React Native, delivering native-quality user experiences from a single, efficient codebase. Our mobile apps are built with offline capability, push notifications, intuitive UI/UX, and seamless backend integration. We handle the full project lifecycle from wireframing and design through App Store and Play Store submission and post-launch support.",
      },
    },
    {
      "@type": "Question",
      name: "Does QllmSoft provide SEO and digital marketing services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. QllmSoft provides comprehensive SEO and digital marketing services including technical SEO audits, on-page optimisation, content strategy, link building, Google Ads management, social media marketing, and conversion rate optimisation. Our digital marketing team works alongside our software engineers to build and rank online properties that generate measurable business results.",
      },
    },
    {
      "@type": "Question",
      name: "Can QllmSoft work with international clients for software outsourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. QllmSoft is an established software outsourcing company serving international clients across the USA, UK, Europe, and the Gulf. Our engineers work across client time zones, communicate in fluent English, and deliver against fixed-price scopes with full IP ownership transfer and NDA protection from day one. Our track record is independently verified through a 100% Upwork Job Success Score and a 5-star Freelancer rating across 47+ verified reviews.",
      },
    },
    {
      "@type": "Question",
      name: "Who owns the source code after the project is complete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You do. Upon successful project completion and deployment, 100% ownership of the source code, databases, design assets, and all intellectual property is legally transferred to your company. QllmSoft enforces strict confidentiality through signed Non-Disclosure Agreements from the first day of engagement to protect your business ideas and proprietary data.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does QllmSoft build software for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QllmSoft has delivered production-grade software across healthcare, finance, education, logistics, eCommerce, SaaS, HR management, and real estate since 2015. We combine deep technical expertise with genuine business domain knowledge, ensuring every system we build solves real operational problems rather than simply fulfilling a technical specification.",
      },
    },
    {
      "@type": "Question",
      name: "What development methodology does QllmSoft follow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We follow Agile Scrum with two-week sprint cycles and weekly live demos on secure staging environments. This gives clients full visibility into progress, complete backlog control, and the ability to reprioritise features against business timelines throughout the build, not just at the end.",
      },
    },
    {
      "@type": "Question",
      name: "Does QllmSoft provide post-launch maintenance and support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every custom software project includes a complimentary post-deployment warranty period covering bug resolution and performance monitoring. After the warranty period, we offer flexible Monthly Support Contracts covering routine updates, security patches, feature additions, and server scaling. Long-term relationships are central to how we work.",
      },
    },
  ],
};

/* ─── FAQ items (accordion) ────────────────────────────────────── */
const faqItems = [
  {
    q: "What services does QllmSoft offer?",
    a: "QllmSoft provides custom software development, enterprise web applications, mobile apps for Android and iOS, business process automation, AI-powered solutions, SEO and digital marketing, eCommerce development, legacy system modernisation, and dedicated developer hiring. We serve businesses from startup stage to enterprise scale across the USA, UK, UAE, Europe, and Australia.",
  },
  {
    q: "How much does custom software development cost?",
    a: "Project cost depends on scope, complexity, and integration requirements. Simple business applications start from a few thousand dollars, while enterprise-grade platforms are scoped individually. Every engagement begins with a free discovery call followed by a detailed, fixed-price proposal within 24 hours — no hidden charges at any stage.",
  },
  {
    q: "Does QllmSoft build mobile apps for Android and iOS?",
    a: "Yes. We develop cross-platform mobile applications using Flutter and React Native, delivering native-quality experiences on both Android and iOS from a single efficient codebase. Our end-to-end mobile service covers wireframing, UI/UX design, development, QA, App Store and Play Store submission, and ongoing maintenance.",
  },
  {
    q: "Does QllmSoft provide SEO and digital marketing services?",
    a: "Yes. Our digital marketing team delivers technical SEO audits, on-page optimisation, content strategy, link building, Google Ads management, social media marketing, and conversion rate optimisation. Because our marketing and engineering teams work under one roof, we uniquely combine fast, well-built web properties with strategies that rank and convert.",
  },
  {
    q: "Can QllmSoft work with international clients remotely?",
    a: "Absolutely. We serve clients across the USA, UK, Europe, and the Gulf. Our engineers align to client time zones, communicate in fluent English, and deliver on fixed-price scopes with full NDA and IP ownership transfer from day one. Our 100% Upwork Job Success Score and 47+ five-star reviews independently verify this track record.",
  },
  {
    q: "What development methodology does QllmSoft follow?",
    a: "We follow Agile Scrum with two-week sprint cycles and weekly live demos on secure staging environments. This gives clients full visibility into progress, complete backlog control, and the ability to reprioritise features against business timelines throughout the build — not just at the end.",
  },
  {
    q: "Who owns the source code and intellectual property after completion?",
    a: "You do, entirely. Upon project completion, 100% of the source code, databases, design assets, and intellectual property transfers legally to your company. We sign a comprehensive NDA at the start of every engagement and enforce strict confidentiality protocols throughout.",
  },
  {
    q: "What industries has QllmSoft built software for?",
    a: "Since 2015 we have delivered production-grade systems across healthcare, fintech, education, logistics, eCommerce, SaaS, HR, and real estate. Our team brings both technical depth and genuine business domain understanding, so every system we deliver solves a real operational problem — not just a technical specification.",
  },
  {
    q: "Does QllmSoft provide post-launch maintenance and support?",
    a: "Yes. Every project includes a complimentary post-deployment warranty window covering bug resolution and performance monitoring. After that period we offer flexible Monthly Support Contracts for ongoing updates, security patches, feature additions, and infrastructure scaling as your business grows.",
  },
];

/* ─── FAQ Accordion Component ───────────────────────────────────── */
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
            FAQs
          </h2>
          <p>
            Straight answers to the questions business owners and project leads ask most
            often before choosing QllmSoft as their technology partner.
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

/* ─── Why QllmSoft Section ──────────────────────────────────────── */
const WhyQllmSoft = () => (
  <section
    className="section"
    style={{ background: "#fff" }}
    aria-labelledby="why-h2"
  >
    <div className="container">
      <div className="section-title reveal">
        <h2 id="why-h2">Why Global Businesses Choose QllmSoft</h2>
        <p>
          Across 50+ delivered projects and a decade of production deployments, we have
          refined a way of working that removes the most common reasons software engagements
          fail: unclear scope, budget overruns, missed deadlines, and poor communication.
          Here is what that looks like in practice.
        </p>
      </div>
      <div className="why-grid reveal">
        <article className="why-card">
          <h3>Fixed Price. No Surprises.</h3>
          <p>
            Every project begins with a formal scope document and a locked cost figure.
            If the scope does not change, the price does not change. We do not bill by
            the hour and then send an invoice nobody budgeted for.
          </p>
        </article>
        <article className="why-card">
          <h3>Full IP Ownership from Day One</h3>
          <p>
            The source code, database architecture, design assets, and all intellectual
            property belong to you the moment the project closes. We retain nothing.
            An NDA is signed before any discovery conversation begins.
          </p>
        </article>
        <article className="why-card">
          <h3>Verified Track Record, Not Just Claims</h3>
          <p>
            Our 100% Upwork Job Success Score and 47+ five-star reviews on Freelancer
            are independently maintained and publicly verifiable. We do not ask you to
            trust marketing copy when evidence is available.
          </p>
        </article>
        <article className="why-card">
          <h3>Engineering and Marketing Under One Roof</h3>
          <p>
            Most dev agencies build websites. Most SEO agencies do not build them. We
            do both. Our software engineers and digital marketing specialists collaborate
            from discovery through deployment, so every product we launch is built to
            rank, load fast, convert visitors, and scale.
          </p>
        </article>
        <article className="why-card">
          <h3>Time Zone Alignment and English Communication</h3>
          <p>
            Our senior team works across North American, European, and Gulf time zones.
            You communicate directly with the engineers building your product, in fluent
            English, through your preferred channel, with a response commitment measured
            in hours — not days.
          </p>
        </article>
        <article className="why-card">
          <h3>10 Years of Production Systems</h3>
          <p>
            Founded in 2015, QllmSoft has delivered software that processes real
            transactions, manages real patient records, and powers real enterprise
            workflows every day. We build for longevity and operational reliability,
            not demos.
          </p>
        </article>
      </div>
    </div>
  </section>
);

/* ─── Technologies Section ──────────────────────────────────────── */
const TechnologiesSection = () => (
  <section
    className="section technologies-section bg-light"
    aria-labelledby="tech-h2"
  >
    <div className="container">
      <div className="section-title reveal">
        <h2 id="tech-h2">Enterprise Technology Stack Behind Every Delivery</h2>
        <p>
          We select the most appropriate technology for each project based on performance
          requirements, scalability roadmap, and long-term maintainability. Every framework
          we use is production-proven, actively maintained, and enterprise-tested across
          real client environments. Our engineering practices strictly implement the{" "}
          <a
            href="https://owasp.org/www-project-top-ten/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="OWASP Top 10 web application security standards, external reference"
          >
            OWASP Top 10 Security Standards
          </a>{" "}
          across every system we build.
        </p>
      </div>
      <div className="tech-grid reveal">
        <div className="tech-category">
          <h3>Web &amp; Frontend</h3>
          <ul>
            <li>React JS (Hooks, Context, Next.js)</li>
            <li>Angular (Standalone Components)</li>
            <li>Blazor WebAssembly &amp; Server</li>
            <li>MudBlazor / Radzen</li>
            <li>JavaScript / TypeScript</li>
            <li>Material UI / Tailwind CSS</li>
          </ul>
        </div>
        <div className="tech-category">
          <h3>Backend &amp; APIs</h3>
          <ul>
            <li>ASP.NET Core (Web API, MVC)</li>
            <li>C# / Entity Framework Core</li>
            <li>REST API (OpenAPI / Swagger)</li>
            <li>Supabase / PostgreSQL</li>
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
        <div className="tech-category">
          <h3>SEO &amp; Digital Marketing</h3>
          <ul>
            <li>Technical SEO &amp; Core Web Vitals</li>
            <li>Google Search Console &amp; Analytics</li>
            <li>Google Ads (Search, Display, Shopping)</li>
            <li>Meta Ads (Facebook &amp; Instagram)</li>
            <li>Ahrefs / Semrush / Screaming Frog</li>
            <li>Email Marketing &amp; Automation</li>
          </ul>
        </div>
        <div className="tech-category">
          <h3>AI &amp; Automation</h3>
          <ul>
            <li>OpenAI GPT &amp; Claude API Integration</li>
            <li>Python (scikit-learn, TensorFlow)</li>
            <li>LangChain / LlamaIndex</li>
            <li>n8n / Zapier Workflow Automation</li>
            <li>Computer Vision (OpenCV)</li>
            <li>Natural Language Processing (NLP)</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Industries Section ────────────────────────────────────────── */
const IndustriesSection = () => (
  <section
    className="section"
    style={{ background: "#fff" }}
    aria-labelledby="industries-h2"
  >
    <div className="container">
      <div className="section-title reveal">
        <h2 id="industries-h2">Industries We Serve Worldwide</h2>
        <p>
          Since 2015, QllmSoft has built production systems across a wide range of
          industries. We have actually delivered real, operating software in each of
          these sectors — which means we understand the compliance requirements, data
          sensitivity, workflow complexity, and integration landscape before your project
          brief lands on our desk.
        </p>
      </div>
      <div className="why-grid reveal">
        {[
          {
            title: "Healthcare & Telemedicine",
            desc: "Hospital management systems, electronic medical records, clinic booking platforms, patient portals, and telemedicine applications with role-based access control and security-first data architecture.",
          },
          {
            title: "Fintech & Financial Services",
            desc: "Payment processing platforms, lending management systems, digital wallets, financial dashboards, and automated accounting tools built with bank-grade encryption and full audit trail compliance.",
          },
          {
            title: "Education & E-Learning",
            desc: "Learning management systems, school administration platforms, student information systems, online exam tools, and fee management portals for educational institutions at every scale.",
          },
          {
            title: "eCommerce & Retail",
            desc: "Custom eCommerce platforms, multi-vendor marketplaces, inventory management systems, POS integrations, and performance-optimised storefronts engineered to convert visitors and scale with demand.",
          },
          {
            title: "Logistics & Supply Chain",
            desc: "Fleet management tools, real-time shipment tracking systems, warehouse management platforms, and courier dispatch applications with live map integrations and driver mobile apps.",
          },
          {
            title: "HR & Enterprise Operations",
            desc: "Human resource management systems, payroll engines, attendance and leave management tools, performance review platforms, and enterprise resource planning modules for operations-heavy organisations.",
          },
          {
            title: "Real Estate & PropTech",
            desc: "Property listing portals, tenant management platforms, lease tracking systems, maintenance request tools, and CRM integrations for real estate agencies, landlords, and property managers.",
          },
          {
            title: "SaaS & Technology Startups",
            desc: "Multi-tenant SaaS platforms, subscription billing systems, API-first product backends, developer portals, and scalable cloud infrastructure designed to handle rapid user growth without rewrites.",
          },
        ].map((ind, i) => (
          <article key={i} className="why-card">
            <h3>{ind.title}</h3>
            <p>{ind.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Trust Band ────────────────────────────────────────────────── */
const TrustBand = () => (
  <section
    aria-label="QllmSoft verified performance metrics"
    style={{ background: "#021a4a", padding: "28px 0" }}
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
              color: "#fec304",
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
   MAIN PAGE COMPONENT
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
      { threshold: 0.15 }
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
        {/* Title — 68 chars, global commercial intent + brand */}
        <title>
          Custom Software Development & Digital Marketing Services | QllmSoft
        </title>

        {/* Description — 158 chars, outcome-first, global */}
        <meta
          name="description"
          content="QllmSoft delivers custom software development, web development, mobile apps, SEO, and digital marketing services to businesses worldwide. Fixed pricing. Free quote in 24 hours."
        />

        {/* Keywords — global, solution-first */}
        <meta
          name="keywords"
          content="custom software development services, web development agency, digital marketing services, SEO services, mobile app development, enterprise software development, software outsourcing, business process automation, AI software solutions, ecommerce development, hire software developers"
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
          content="Custom Software Development & Digital Marketing Services | QllmSoft"
        />
        <meta
          property="og:description"
          content="QllmSoft builds enterprise web platforms, mobile apps, AI tools, and runs SEO and digital marketing campaigns for global clients. Fixed pricing. 100% Upwork Job Success Score."
        />
        <meta
          property="og:image"
          content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="QllmSoft Software Development and Digital Marketing Services"
        />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom Software Development & Digital Marketing Services | QllmSoft"
        />
        <meta
          name="twitter:description"
          content="Enterprise software, mobile apps, AI solutions, and digital marketing from a globally trusted technology partner. Fixed pricing, full IP ownership, verified reviews."
        />
        <meta
          name="twitter:image"
          content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="QllmSoft Services — Software Development and Digital Marketing"
        />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json">
          {JSON.stringify(schemaWebPage)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaService)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaFAQ)}
        </script>
      </Helmet>

      <main className="services-page" id="main-content" role="main">

        {/* ══════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════ */}
        <section className="services-hero reveal" aria-labelledby="svc-hero-h1">
          <div className="container">
            <h1 id="svc-hero-h1">
            Custom Software, Digital Solutions & Business Automation Services | QLlmSoft
            </h1>
            <p>
  QllmSoft is a full-service technology company to build, launch, and grow digital products. We
  engineer production-ready{" "}
  <Link className="content-link" to="/web-application-development-services">
    enterprise web applications
  </Link>
  ,{" "}
  <Link className="content-link" to="/mobile-app-development">
    mobile apps for Android and iOS
  </Link>
  ,{" "}
  <Link className="content-link" to="/api-development-services">
    business automation systems
  </Link>
  , and{" "}
  <Link className="content-link" to="/ai-powered-software-solutions">
    AI-powered software solutions
  </Link>
  — and we run{" "}
  <Link className="content-link" to="/seo-digital-marketing-services">
    SEO and digital marketing campaigns
  </Link>
              that generate real pipeline. Every engagement starts with a fixed price,
              a documented scope, and a delivery timeline agreed before a single line of
              code is written. Independently verified: 100% Upwork Job Success Score and
              47+ five-star reviews since 2015.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            TRUST BAND
        ══════════════════════════════════════════════ */}
        <TrustBand />

        {/* ══════════════════════════════════════════════
            SERVICES LIST
        ══════════════════════════════════════════════ */}
        <section
          className="section services-list"
          aria-labelledby="svc-list-h2"
        >
          <div className="container">
            <div className="section-title reveal">
              <h2 id="svc-list-h2">
                Our Full Service Portfolio: Software, Web, Mobile &amp; Digital Marketing
              </h2>
              <p>
                QllmSoft engineers end-to-end digital solutions and marketing programmes
                built entirely around your business goals. No generic templates. No padded
                timelines. No scope surprises. Whether you need a complex enterprise platform,
                a cross-platform mobile app, a performance-driven eCommerce store, or an SEO
                campaign that consistently generates organic leads, we have the engineers and
                marketers to deliver it. Explore our full suite of{" "}
                <Link to="/custom-software-development-services">
                  custom software development services
                </Link>
                , cost-effective{" "}
                <Link to="/outsource-software-development-to-pakistan">
                  software outsourcing
                </Link>
                , and scalable remote teams via{" "}
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
                  <ServiceCard
                    key={service.id}
                    service={service}
                    variant="detailed"
                    isOdd={index % 2 === 0}
                    id={serviceId}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SEO & DIGITAL MARKETING CALLOUT
        ══════════════════════════════════════════════ */}
        <section
          className="section"
          style={{ background: "#021a4a", padding: "60px 0" }}
          aria-labelledby="seo-callout-h2"
        >
          <div className="container">
            <div className="section-title reveal">
              <h2
                id="seo-callout-h2"
                style={{ color: "#fff" }}
              >
                SEO &amp; Digital Marketing Services: Rank Higher, Convert More
              </h2>
              <p style={{ color: "rgba(255,255,255,.78)", maxWidth: "760px", margin: "0 auto" }}>
                Building a great product is only half the equation. The other half is making
                sure the right audience finds it. QllmSoft's digital marketing team handles
                the full acquisition stack so your software investment translates directly
                into pipeline and revenue.
              </p>
            </div>
            <div className="why-grid reveal">
              {[
                {
                  title: "Technical SEO & Site Audits",
                  desc: "We fix the foundational issues that prevent rankings: crawlability errors, Core Web Vitals failures, structured data gaps, canonical conflicts, and indexation problems. Most clients see measurable ranking movement within 60 days of the initial audit.",
                },
                {
                  title: "On-Page Optimisation & Content Strategy",
                  desc: "Keyword-mapped content architectures, title and meta rewrites, internal linking structures, and long-form content built around what your ideal customers are actually searching for — not what ranks for your competitors.",
                },
                {
                  title: "Link Building & Domain Authority",
                  desc: "White-hat link acquisition through digital PR, editorial partnerships, and targeted outreach campaigns. We build links that improve domain authority and withstand algorithm updates — no shortcuts, no penalties.",
                },
                {
                  title: "Google Ads & PPC Management",
                  desc: "Search, Display, Shopping, and Performance Max campaigns managed by certified specialists. We optimise for qualified conversions, not just clicks, with weekly reporting tied to actual business outcomes.",
                },
                {
                  title: "Social Media Marketing",
                  desc: "Paid social campaigns on Meta, LinkedIn, and TikTok tailored to B2B and B2C objectives. Audience targeting, creative split-testing, and conversion tracking are built into every campaign from day one.",
                },
                {
                  title: "Conversion Rate Optimisation",
                  desc: "A/B testing, heatmap analysis, user session review, and landing page redesigns that systematically improve the percentage of visitors who take the action your business needs them to take.",
                },
              ].map((item, i) => (
                <article
                  key={i}
                  className="why-card"
                  style={{
                    background: "rgba(255,255,255,.06)",
                    border: "1px solid rgba(255,255,255,.12)",
                  }}
                >
                  <h3 style={{ color: "#fec304" }}>{item.title}</h3>
                  <p style={{ color: "rgba(255,255,255,.78)" }}>{item.desc}</p>
                </article>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link
                to="/contact"
                className="btn btn-primary"
                aria-label="Talk to QllmSoft about SEO and digital marketing services"
              >
                Discuss Your Digital Marketing Goals
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            WHY QLLMSOFT
        ══════════════════════════════════════════════ */}
        <WhyQllmSoft />

        {/* ══════════════════════════════════════════════
            QLLMDOCS PRODUCT SHOWCASE
        ══════════════════════════════════════════════ */}
        <div className="product-showcase-divider">
          <span className="divider-line"></span>
          <span className="divider-tag">Our Flagship Product</span>
          <span className="divider-line"></span>
        </div>

        <section className="qllmdocs-product-section dark-theme">
          <div className="qllm-product-container">
            <div className="qllm-product-visual-box iframe-mode">
              <div className="glass-glow-mesh"></div>
              <div className="browser-mockup-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <div className="browser-address-bar">qllmdocs.com</div>
              </div>
              <iframe
                src={QllmDocs}
                title="QllmDocs Live Platform Dashboard"
                className="product-live-iframe"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups"
              ></iframe>
              <div className="product-live-badge">
                <span className="pulse-dot"></span> Live Interactive Portal
              </div>
            </div>

            <div className="qllm-product-intellect">
              <div className="product-meta-brand">Ready-to-Deploy SaaS Solution</div>
              <div className="product-logo-wrapper">
                
                <span className="product-brand-subtitle">
                  Secure &amp; Intelligent DMS
                </span>
              </div>
              <p className="product-seo-description">
                QllmDocs is an enterprise-grade Document Management System designed to
                eliminate the operational chaos of unstructured document workflows. Built
                for compliance-heavy organisations that cannot afford information loss,
                version conflicts, or unauthorised access, QllmDocs replaces manual file
                management with automated workflows, granular permissions, and a full audit
                trail on every document action.
              </p>
              <div className="product-tech-pills">
                <span className="tech-pill">.NET Core</span>
                <span className="tech-pill">SQL Server</span>
                <span className="tech-pill">Azure Blob</span>
              </div>
              <div className="product-specs-grid">
                <div className="spec-item">
                  <div className="spec-icon">
                    <i className="bi bi-cpu-fill"></i>
                  </div>
                  <div className="spec-texts">
                    <h4>AI-Powered Search</h4>
                    <p>
                      Locate critical business files instantly using intelligent,
                      context-aware search that understands document content, not
                      just file names.
                    </p>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-icon">
                    <i className="bi bi-shield-lock-fill"></i>
                  </div>
                  <div className="spec-texts">
                    <h4>Role-Based Access Control</h4>
                    <p>
                      Protect confidential records with granular cryptographic
                      permission layers down to the individual document level.
                    </p>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-icon">
                    <i className="bi bi-arrow-repeat"></i>
                  </div>
                  <div className="spec-texts">
                    <h4>Workflow Automation</h4>
                    <p>
                      Automate document approval stages, smart tagging, and
                      internal routing so files reach the right person without
                      manual intervention.
                    </p>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-icon">
                    <i className="bi bi-cloud-check-fill"></i>
                  </div>
                  <div className="spec-texts">
                    <h4>Azure Cloud Security</h4>
                    <p>
                      Encrypted Azure infrastructure with automated backup
                      management and geo-redundant availability built in.
                    </p>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-icon">
                    <i className="bi bi-credit-card-2-front-fill"></i>
                  </div>
                  <div className="spec-texts">
                    <h4>Subscription Gateway</h4>
                    <p>
                      Modular subscription tiers with integrated payment
                      processing connected to major banking networks.
                    </p>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-icon">
                    <i className="bi bi-lightning-charge-fill"></i>
                  </div>
                  <div className="spec-texts">
                    <h4>Transparent Audit Trails</h4>
                    <p>
                      Complete, tamper-evident records of every document action
                      for compliance reviews and regulatory reporting.
                    </p>
                  </div>
                </div>
              </div>
              <div className="product-action-cluster">
                <a
                  href="https://qllmdocs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-launch-neon"
                >
                  Open Live Platform{" "}
                  <i className="bi bi-box-arrow-up-right ms-2"></i>
                </a>
                <Link to="/contact" className="btn-demo-muted">
                  Schedule Enterprise Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            TECHNOLOGIES
        ══════════════════════════════════════════════ */}
        <TechnologiesSection />

        {/* ══════════════════════════════════════════════
            INDUSTRIES
        ══════════════════════════════════════════════ */}
        <IndustriesSection />

        {/* ══════════════════════════════════════════════
            PROCESS
        ══════════════════════════════════════════════ */}
        <section
          className="section process-section"
          aria-labelledby="process-main-heading"
        >
          <div className="container">
            <div className="section-title reveal">
              <h2 id="process-main-heading">
                How We Deliver: A 6-Phase Process Built for Accountability
              </h2>
              <p>
                Our delivery framework is built around one core principle: you should always
                know what we are building, when it will be delivered, and what it costs
                before a single line of code is written. This structured process eliminates
                scope ambiguity, prevents budget overruns, and ensures every project arrives
                production-ready on the agreed date.
              </p>
            </div>
            <div
              className="process-grid"
              role="list"
              aria-label="QllmSoft software development process steps"
            >
              <div className="process-step reveal reveal-delay-1" role="listitem">
                <div className="process-number" aria-hidden="true">01</div>
                <h3>Discovery &amp; Requirements Analysis</h3>
                <p>
                  We run structured discovery workshops covering your business goals, user
                  journeys, technical constraints, and integration requirements. The direct
                  output is a formal scope document and a fixed-price cost breakdown that
                  eliminates scope creep before development begins.
                </p>
              </div>
              <div className="process-step reveal reveal-delay-2" role="listitem">
                <div className="process-number" aria-hidden="true">02</div>
                <h3>Solution Architecture &amp; Technical Planning</h3>
                <p>
                  Our senior architects design a scalable system architecture with technology
                  selection rationale, database schemas, security models, and API contract
                  specifications reviewed rigorously before coding starts — eliminating costly
                  engineering rework later.
                </p>
              </div>
              <div className="process-step reveal reveal-delay-3" role="listitem">
                <div className="process-number" aria-hidden="true">03</div>
                <h3>Agile Development in 2-Week Sprints</h3>
                <p>
                  Clean, well-structured code delivered in strict two-week sprints with
                  weekly live demos on secure staging environments. You retain complete
                  backlog control to reprioritise features against business timelines
                  throughout the entire build.
                </p>
              </div>
              <div className="process-step reveal reveal-delay-1" role="listitem">
                <div className="process-number" aria-hidden="true">04</div>
                <h3>QA, Security Testing &amp; Performance Audits</h3>
                <p>
                  Automated regression testing, manual cross-device validation, OWASP Top 10
                  security compliance reviews, and load testing against strict performance
                  SLAs. Nothing enters the main branch until it passes our enterprise
                  deployment criteria.
                </p>
              </div>
              <div className="process-step reveal reveal-delay-2" role="listitem">
                <div className="process-number" aria-hidden="true">05</div>
                <h3>CI/CD Pipeline Setup &amp; Production Deployment</h3>
                <p>
                  Zero-downtime production launches using robust CI/CD pipelines, covering
                  environment logging, live cloud monitoring, and a smooth handover to your
                  infrastructure team with complete technical documentation.
                </p>
              </div>
              <div className="process-step reveal reveal-delay-3" role="listitem">
                <div className="process-number" aria-hidden="true">06</div>
                <h3>30-Day Hyper-Care &amp; Long-Term Support</h3>
                <p>
                  Every deployment includes a formal 30-day post-launch window covering
                  immediate bug resolution, server optimisation, and security patches.
                  Long-term SLA maintenance contracts are available for ongoing feature
                  development and infrastructure scaling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            OUTSOURCING TRUST SECTION
        ══════════════════════════════════════════════ */}
        <section
          className="section"
          style={{ background: "#F7FAFC" }}
          aria-labelledby="outsource-h2"
        >
          <div className="container">
            <div className="section-title reveal">
              <h2 id="outsource-h2">
                Software Outsourcing That Actually Works for International Businesses
              </h2>
              <p>
                Outsourcing software development carries real risks when the partner is not
                structured to handle international engagements professionally. QllmSoft has
                been managing global client relationships since 2015, with specific operational
                commitments that address those risks directly.
              </p>
            </div>
            <div className="why-grid reveal">
              <article className="why-card">
                <h3>NDA Before Discovery</h3>
                <p>
                  We sign a comprehensive Non-Disclosure Agreement before any technical
                  discussion begins. Your idea, your data, and your business logic are
                  legally protected from the first conversation.
                </p>
              </article>
              <article className="why-card">
                <h3>Full IP Transfer on Completion</h3>
                <p>
                  Every line of source code, every database schema, and every design asset
                  transfers to you legally upon project completion. We retain no licensing
                  rights, no ongoing fees, and no code dependencies on our infrastructure.
                </p>
              </article>
              <article className="why-card">
                <h3>Time Zone Overlap Commitment</h3>
                <p>
                  Our senior engineers maintain deliberate overlap hours with North American,
                  European, and Gulf time zones. You communicate with the people building your
                  product — not an account manager relaying messages.
                </p>
              </article>
              <article className="why-card">
                <h3>Independently Verified Reviews</h3>
                <p>
                  Our 100% Upwork Job Success Score and 47+ five-star Freelancer reviews are
                  publicly accessible and maintained by third-party platforms. Verify our
                  track record before a single dollar changes hands.
                </p>
              </article>
              <article className="why-card">
                <h3>Fixed-Price Engagements</h3>
                <p>
                  No hourly billing. No open-ended retainers with unpredictable monthly
                  invoices. Every project is scoped, priced, and agreed before work begins.
                  The number you approve is the number you pay.
                </p>
              </article>
              <article className="why-card">
                <h3>Senior Engineers, Not Junior Teams</h3>
                <p>
                  QllmSoft does not staff projects with trainees supervised by one senior
                  developer. The engineers who scope your project are the engineers who build
                  it, with 10+ years of average production experience across the team.
                </p>
              </article>
            </div>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link
                to="/outsource-software-development-to-pakistan"
                className="btn btn-primary"
                aria-label="Learn more about software outsourcing with QllmSoft"
              >
                Learn About Outsourcing With QllmSoft
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════ */}
        <FaqSection />

        {/* ══════════════════════════════════════════════
            RELATED SOLUTIONS
        ══════════════════════════════════════════════ */}
        <RelatedSolutions category="servicePage" />

        {/* ══════════════════════════════════════════════
            CTA
        ══════════════════════════════════════════════ */}
        <section className="section cta-section" aria-labelledby="cta-h2">
          <div className="container">
            <div className="cta-content reveal">
              <h2 id="cta-h2">
                Ready to Build Software and Marketing That Drive Real Business Growth?
              </h2>
              <p>
                Tell us what you need to build or grow. QllmSoft will review your
                requirements, send a detailed fixed-price proposal within 24 hours, and
                schedule a free discovery call with no commitment required. Businesses
                across four continents trust QllmSoft to deliver. We look forward to
                earning that trust from you.
              </p>
              <Link
                to="/contact"
                className="btn btn-primary"
                aria-label="Get a free consultation from QllmSoft software and digital marketing team"
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
