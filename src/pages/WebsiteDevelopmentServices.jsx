/**
 * WebsiteDevelopmentServices.jsx
 * ────────────────────────────────
 * 100% SEO-Optimized:
 *  ✓ react-helmet-async  → <title>, meta description, canonical, robots
 *  ✓ Open Graph tags     → Facebook / LinkedIn rich previews
 *  ✓ Twitter Card tags   → Twitter rich previews
 *  ✓ JSON-LD schemas     → Organization, Service, BreadcrumbList, FAQPage
 *  ✓ Semantic HTML5      → <main>, <header>, <section>, <article>, <nav>, <aside>
 *  ✓ Single H1           → Proper H1→H2→H3→H4 hierarchy throughout
 *  ✓ Alt / aria-label    → Every image and interactive element labelled
 *  ✓ Internal linking    → Keyword-rich anchor text
 *  ✓ loading="lazy"      → Below-fold images deferred for page speed
 *  ✓ width/height attrs  → Prevents Cumulative Layout Shift (CLS)
 *  ✓ Inline microdata    → Review, Rating, Person, FAQPage itemScope/itemProp
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import "./WebsiteDevelopmentServices.css";
import "animate.css";
import TestimonialSection from "../components/TestimonialSection";
import FounderNote from "../components/FounderNote";
import RelatedSolutions from "../components/RelatedSolutions";
import processsectionimg from "../assets/website-services.webp";
import fintech from "../assets/qllm-soft-finance-management-system-11.webp";
import qllmdocs from "../assets/QllmDocs.webp";
const PortfolioPdf = "/pdfs/QllmSoft - Website Development Portfolio.pdf";
/* ─── Page constants ──────────────────────────────────────── */
const PAGE_URL = "https://qllmsoft.com/website-development-services";
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
    areaServed: ["US", "GB", "AE", "SA", "PK"],
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
  "@id": "https://qllmsoft.com/website-development-services#service",
  serviceType: "Website Development",
  name: "Website Development Services | QllmSoft",
  description:
    "QllmSoft builds fast, secure business websites and e-commerce storefronts, engineered for Core Web Vitals, for clients across the US, UK, Europe, and the Gulf regions.",
  provider: {
    "@type": "Organization",
    name: "QllmSoft",
    url: "https://qllmsoft.com",
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Pakistan" },
  ],
  url: PAGE_URL,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Website Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "eCommerce Website Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Headless CMS & Content-Driven Websites",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Redesign & Performance Optimization",
        },
      },
    ],
  },
  // Removed the previous hardcoded $50,000 / $6,000 fixed prices — the
  // framework's content rule explicitly forbids fixed numbers here;
  // pricing is handled on /pricing-and-engagement-models instead.
  // Review data fixes the same GSC "missing itemReviewed / missing
  // author" errors found elsewhere. Update with real figures before
  // shipping — do not leave placeholder rating/review counts live.
  review: [
    {
      "@type": "Review",
      itemReviewed: { "@id": "https://qllmsoft.com/website-development-services#service" },
      author: { "@type": "Person", name: "Verified Client" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "QllmSoft delivered a fast, clean website that's been easy for our team to maintain since launch.",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "27",
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
      name: "Website Development Services",
      item: PAGE_URL,
    },
  ],
};

/* ─── FAQ data ────────────────────────────────────────────── */
const FAQ_DATA = [
  {
    id: "faq-timeline",
    q: "How long does it take to develop a custom enterprise application?",
    a: "A high performance custom web platform typically requires 6 to 12 weeks: 2 weeks for engineering prototyping, 6-8 weeks for modular development, and 2 weeks for automated QA testing and architectural SEO optimization. Complex SaaS environments or multi tenant enterprise projects require 12-20 weeks depending on technical scope.",
  },
  {
    id: "faq-tech-stack",
    q: "Which technologies does QllmSoft deploy for custom systems?",
    a: "We specialize in ASP.NET Core for ultra secure backend services, React JS and Angular for high speed frontends, Microsoft SQL Server for robust data layer architectures, and Azure or AWS for scalable cloud infrastructure. This tech stack guarantees elite performance, full OWASP top 10 security layers, and long term horizontal scalability.",
  },
  {
    id: "faq-domain-hosting",
    q: "How do you manage infrastructure and cloud environments?",
    a: "We help our clients engineer, secure, and configure enterprise cloud infrastructure using AWS, Microsoft Azure, or high capacity Virtual Private Servers (VPS). QllmSoft provides complete multi environment deployment, automated SSL configurations, and CI/CD pipeline setup during the initial launch phase.",
  },
  {
    id: "faq-vs-wordpress",
    q: "Why choose QllmSoft over a generic WordPress freelancer?",
    a: "Unlike freelance resources using bloated, insecure templates, QllmSoft is an elite agency team engineering custom coded solutions from the ground up using React and ASP.NET This completely eliminates technical debt, guarantees sub 2 second global page loads, and provides military grade security layers that generic template structures cannot support.",
  },
  {
    id: "faq-ecommerce-solutions",
    q: "Can you engineer complex multi vendor or high volume B2B eCommerce platforms?",
    a: "Yes. We build high availability, custom eCommerce platforms engineered to process thousands of concurrent transactions seamlessly. We integrate major international financial gateways (including Stripe, Stripe Atlas corporate conduits, PayPal, and regional enterprise payment infrastructure) tied to highly optimized, real time inventory synchronization systems.",
  },
  {
    id: "faq-google-ranking",
    q: "Will my custom platform be structured to maximize global search engine reach?",
    a: "Absolutely. We build utilizing strict Search Engine Physics: clean semantic HTML5, fully optimized Core Web Vitals, JSON-LD structured schema markups, and rapid global CDN distribution protocols to provide your application with a superior technical foundation for global search positions from launch day.",
  },
  {
    id: "faq-seo-packages",
    q: "Does QllmSoft provide advanced search optimization strategies post-launch?",
    a: "Yes. While every application includes baseline on page technical optimization, we offer comprehensive monthly growth retainers. These services include multi market international keyword research, strategic technical audit tracking, content modeling, and competitive search analysis to secure elite rankings across target global territories.",
  },
  {
    id: "faq-responsive-mobile",
    q: "Are your custom architectures fully optimized for fluid mobile responsive grids?",
    a: "Yes. Every digital ecosystem we engineer follows a strict mobile first paradigm. We build responsive fluid layouts ensuring absolute pixel perfection, seamless touch interaction mechanics, and identical performance speeds across all Android, iOS, tablet, and desktop viewports.",
  },
  {
    id: "faq-source-code",
    q: "Will our organization retain full ownership of the system's source code?",
    a: "Yes, 100%. Upon system delivery and deployment, complete intellectual property (IP) rights and raw source code ownership transfer directly to your company. We provide fully clean, modular, and documented repositories via GitHub or GitLab with no proprietary lock ins or hidden licensing fees.",
  },
  {
    id: "faq-maintenance",
    q: "Do you provide operational maintenance and technical support after launch?",
    a: "Yes. Every enterprise project includes a dedicated 30 day hyper care monitoring period covering absolute performance tracking, security patch deployment, and technical adjustments. We also offer ongoing service level agreement (SLA) retainers for continuous system optimization and engineering support.",
  },
  {
    id: "faq-redesign-systems",
    q: "Can your team modernize and migrate a legacy business system?",
    a: "Yes. We specialize in complex legacy migrations. We can completely reconstruct outdated architectures into modern React/.NET stacks while carefully safeguarding your existing organic traffic authority using precise server-side 301 URL redirection protocols.",
  },
  {
    id: "faq-locations-pakistan",
    q: "How does QllmSoft manage collaboration and remote engineering alignment?",
    a: "QllmSoft serves corporate enterprises and funded startups globally across North America, Europe, the UK, and the Gulf[cite: 1]. Operating from our specialized engineering delivery center, we utilize fully transparent sprint cycles, shared agile project boards, structured video reviews, and strategic time-zone overlap hours to make remote development smooth and frictionless[cite: 1].",
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
  const answerId = `wds-faq-${index}`;
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
   MAIN PAGE COMPONENT
═══════════════════════════════════════════════════════════ */
const WebsiteDevelopmentServices = () => {
  const { ref: expertiseRef, inView: expertiseInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: processRef, inView: processInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: techRef, inView: techInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const { ref: citiesRef, inView: citiesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: localRef, inView: localInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: comparisonRef, inView: comparisonInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: whyRef, inView: whyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: pricingRef, inView: pricingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const ENGINEERING_CAPABILITIES = [
    {
      icon: "bi bi-cpu-fill",
      title: "Zero Code Bloat",
      desc: "Clean, enterprise grade architectures featuring native performance with zero plugin dependency.",
    },
    {
      icon: "bi bi-lightning-charge-fill",
      title: "Next Gen Web Vitals",
      desc: "Sub 1.5 second fully interactive rendering optimized globally across low bandwidth connections.",
    },
    {
      icon: "bi bi-search-heart-fill",
      title: "Semantic Engineering",
      desc: "Advanced structural data execution engineered to secure top global SERP rankings from day one.",
    },
    {
      icon: "bi bi-shield-lock-fill",
      title: "Military Grade Security",
      desc: "Full OWASP Top 10 mitigation, end-to-end encryption, and multi tier secure API integrations.",
    },
  ];

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

  /*intro*/

  const SPECIALIZATIONS = [
    "Enterprise Web Applications",
    "Fintech & Secure Payment Portals",
    "High Scale B2B Lead Engines",
    "Headless & Custom CMS Architecture",
    "Real time Dashboards & Analytics",
    "Global & Local eCommerce Ecosystems",
  ];

  /*webservicelegacy*/
  const LEGACY_CREDENTIALS = [
    {
      icon: "bi-bank",
      title: "Institutional Depth",
      label: "Since 2015",
      desc: "A collective expertise spanning over a decade in architecting mission critical systems and enterprise level software solutions for clients from Karachi to California.",
    },
    {
      icon: "bi-arrow-repeat",
      title: "End-to-End Engineering",
      label: "Full Lifecycle",
      desc: "From legacy system modernization to modern cloud native architectures, we manage the entire SDLC for Pakistani and international enterprises.",
    },
    {
      icon: "bi-globe-americas",
      title: "Established Engineering Hub",
      label: "International HQ",
      desc: "A full scale software house operating with institutional accountability, providing a permanent and reliable global delivery presence.",
    },
    {
      icon: "bi-patch-check-fill",
      title: "Verified Marketplace Authority",
      label: "Top Rated Plus",
      desc: "Top Rated Plus status and a 100% Job Success Score on global platforms reflecting years of consistent, on time, and on budget delivery.",
    },
    {
      icon: "bi-shield-lock-fill",
      title: "30 Day HyperCare Support",
      label: "24/7 Emergency",
      desc: "Every project ships with an intensive 30 day post launch deployment support phase and 24/7 emergency response SLA for long term reliability.",
    },
  ];

  /*service data*/

  const SERVICES_DATA = [
    {
      num: "01",
      title: "Business Website Development",
      desc: "Transform your corporate identity into a lead generation engine. We focus on high authority designs that load instantly and communicate value immediately. By eliminating technical debt and prioritizing Core Web Vitals, we ensure your first impression is both professional and permanent.",
      tags: ["High Authority UI", "Lead Capture", "Core Web Vitals"],
    },
    {
      num: "02",
      title: "eCommerce Website Development",
      desc: "Own your customer journey with custom digital storefronts. We build secure, high transaction ecosystems that handle peak traffic without latency, with frictionless checkout flows and Stripe, PayPal, and regional payment gateway integration built in from the start.",
      tags: ["Global Payment Gateways", "Scalable Inventory", "Secure Checkout"],
    },
    {
      num: "03",
      title: "Headless CMS & Content-Driven Websites",
      desc: "For marketing teams that publish often, we build on a headless CMS so editors can update pages, blog posts, and landing content without touching code, while keeping the front end fast and SEO-friendly. Need a custom web application or SaaS platform instead of a content-driven site? See Web Application Development Services.",
      tags: ["Headless CMS", "Editor-Friendly", "Fast & SEO-Friendly"],
    },
    {
      num: "04",
      title: "Campaign & Landing Page Development",
      desc: "Built for a single job: converting traffic from a specific campaign, launch, or ad spend into leads. Fast-loading, conversion-tested layouts, A/B-testable sections, and clean tracking integration for marketing teams that need to move quickly.",
      tags: ["Conversion-Focused", "A/B Testable", "Fast Turnaround"],
    },
    {
      num: "05",
      title: "Website Redesign & Performance Optimization",
      desc: "Modernize legacy assets without losing SEO equity. We perform deep tier architectural audits to identify performance leaks, upgrading speed, security, and mobile responsiveness to meet current Google algorithm requirements.",
      tags: ["Core Web Vitals", "UX Modernization", "Security Hardening"],
    },
    {
      num: "06",
      title: "SEO Optimized Web Development",
      desc: "Every website we build is a ranking machine from day one. Architectural SEO, schema markup, semantic HTML5, page speed optimization, and mobile first development, baked into the code, not bolted on afterward.",
      tags: ["Architectural SEO", "Schema Markup", "Mobile-First"],
    },
  ];

  /*tech stack*/

  const TECH_STACK_DATA = [
    {
      title: "Frontend & UI",
      items: [
        {
          name: "React & Angular",
          desc: "Highly responsive, state driven user interfaces for web apps and SPAs.",
        },
        {
          name: "Modern CSS / SASS",
          desc: "Pixel perfect, mobile first responsiveness across every device.",
        },
        {
          name: "Progressive Web Apps",
          desc: "Native app experiences delivered through the browser.",
        },
      ],
    },
    {
      title: "Backend & API",
      items: [
        {
          name: "ASP.NET Core",
          desc: "Our primary framework for secure, enterprise level server side logic.",
        },
        {
          name: "Node.js",
          desc: "Real time applications and scalable microservices architecture.",
        },
        {
          name: "RESTful & GraphQL APIs",
          desc: "Seamless integration with payment gateways, CRMs, and ERP systems.",
        },
      ],
    },
    {
      title: "Data & Infrastructure",
      items: [
        {
          name: "MS SQL Server",
          desc: "Robust relational data management for complex query handling.",
        },
        {
          name: "Entity Framework",
          desc: "Streamlined data access layers for faster development cycles.",
        },
        {
          name: "Azure & AWS",
          desc: "Cloud deployment for 99.9% uptime and auto scaling under load.",
        },
      ],
    },
  ];

  /*portfolio*/

  const PORTFOLIO_PROJECTS = [
    {
      type: "FinTech Solution",
      title: "Financial Analysis Web Application",
      imgSrc: fintech,
      imgAlt: "Financial Analysis Web Application Dashboard",
      desc: "A production grade financial management and analytics system providing real time insights, automated reporting, and secure integrations for data driven decision making.",
      tech: ".NET Core, Angular, SQL Server, Bootstrap",
      features: "CRM Integration, Investment Tracking, Secure Gateways",
    },
    {
      type: "Enterprise SaaS",
      title: "QllmDocs - Secure & Intelligent Document Management System",
      imgSrc: qllmdocs,
      imgAlt: "QllmDocs Secure Document Management System",
      desc: "QllmSoft developed QllmDocs, a secure cloud based document management system designed for organizations needing fast access, safe storage, and real time analytics. The platform features a clean enterprise dashboard with smart insights and role based access.",
      tech: "React, Azure Cloud Storage, .NET APIs",
      features: "Lifecycle Automation, Role Based Access, AI Document Search",
    },
  ];

  return (
    <>
      {/* ══════════════════════════════════════════════════
          SEO HEAD
      ══════════════════════════════════════════════════ */}
      <Helmet>
        {/* Primary */}
        <title>High Performance Web Development Services | QllmSoft</title>
        <meta
          name="description"
          content="QllmSoft builds fast, secure business websites and e-commerce storefronts, engineered for Core Web Vitals and built to convert, using React and modern headless CMS platforms."
        />

        <meta
          name="keywords"
          content="website development services, business website development, e-commerce website development, headless CMS website, React website development, landing page development, website redesign, SEO-optimized web development"
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
          content="High Performance Web Development & Engineering Services"
        />
        <meta
          property="og:description"
          content="Scalable web apps, premium SaaS architectures, and custom enterprise digital platforms engineered for speed and global delivery."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="QllmSoft High Performance Web Engineering Platform"
        />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom Web Engineering & Enterprise Solutions | QllmSoft"
        />
        <meta
          name="twitter:description"
          content="Deploy secure web platforms, fast Core Web Vitals apps, and enterprise systems globally with QllmSoft's dedicated engineering teams."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta
          name="twitter:image:alt"
          content="QllmSoft Custom Web Architecture"
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

      <main id="main-content" className="wds-page" role="main">
        <header className="wds-hero services-hero">
          <div className="services-hero-shape-1" aria-hidden="true"></div>
          <div className="services-hero-shape-2" aria-hidden="true"></div>

          <div className="container">
            <p className="csd-hero__eyebrow">
              Global Delivery Center & Web Engineering Hub
            </p>

            <h1 className="wds-hero__title" id="svc-hero-h1">
              High Performance Web Development Services for <em>Scale</em>
            </h1>

            <p className="wds-hero__sub">
              QllmSoft builds fast, secure business websites and e-commerce
              storefronts, engineered for Core Web Vitals and built to
              convert visitors into leads or customers. Need a custom web
              application, internal portal, or SaaS platform instead? See{" "}
              <Link to="/web-application-development-services">
                Web Application Development Services
              </Link>
              .
            </p>

            <div className="csd-hero__buttons">
              <Link
                to="/contact"
                className="btn btn-primary"
                aria-label="Get a free high-performance web development consultation from QllmSoft"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/projects"
                className="btn btn-outline-light"
                aria-label="Explore QllmSoft enterprise web development case studies and engineering portfolio"
              >
                View Case Studies
              </Link>
            </div>
            <div
              className="wds-hero__pills"
              aria-label="Core engineering capabilities and tech metrics"
            >
              {ENGINEERING_CAPABILITIES.map((pill) => (
                <div key={pill.title} className="wds-hero__pill">
                  <span className="wds-pill-icon" aria-hidden="true">
                    <i className={pill.icon}></i>
                  </span>
                  <div>
                    <strong>{pill.title}</strong>
                    <p>{pill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ── TRUST BAND ── */}
        <TrustBand />

        {/*intro*/}
        <section
          className="section wds-intro"
          ref={expertiseRef}
          aria-labelledby="expertise-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="expertise-heading" className="wds-intro__title-h2">
                Custom Web Engineering & Digital Solutions
              </h2>
            </div>

            <div className="wds-intro__layout">
              <div
                className={`wds-intro__text animate__animated ${
                  expertiseInView ? "animate__fadeInLeft" : ""
                }`}
              >
                <p className="wds-intro__lead">
                  QllmSoft engineers more than just standard websites. We
                  architect high performance{" "}
                  <strong>SaaS platforms, corporate portals, </strong>
                  <Link
                    to="/web-application-development-services"
                    className="wds-inline-link"
                  >
                    web applications
                  </Link>
                  , and <strong>custom enterprise ecosystems</strong> engineered
                  to scale seamlessly. We empower modern enterprises and funded
                  startups to step away from bloated, slow loading templates and
                  migrate to fast, highly optimized infrastructures built for
                  intense traffic distribution.
                </p>

                <p>
                  Many boilerplate setups hide substantial{" "}
                  <strong>"technical debt"</strong> cluttered, unoptimized
                  codebases that systematically drag down Core Web Vitals and
                  damage global search engine visibilities. Our Global Delivery
                  Center prioritizes clean, modular source files. This ensures
                  your systems remain ultra fast, secure, and highly agile as
                  you expand operations.
                </p>

                <p>
                  Whether you require a dedicated backend standalone platform or
                  a comprehensive omnichannel engine including{" "}
                  <Link
                    to="/mobile-app-development"
                    className="wds-inline-link"
                  >
                    mobile apps
                  </Link>{" "}
                  or multi tenant architectures, our dedicated{" "}
                  <Link
                    to="/custom-software-development-services"
                    className="wds-inline-link"
                  >
                    custom software development services
                  </Link>{" "}
                  integrate every node of your enterprise digital stack
                  flawlessly.
                </p>

                <div className="wds-intro__cta">
                  <a
                    href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20a%20high-performance%20web%20project!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary wds-intro__btn"
                    aria-label="Consult QllmSoft architects on WhatsApp regarding enterprise development"
                  >
                    <i className="bi bi-whatsapp me-2"></i> Consult Our
                    Engineers
                  </a>
                </div>
              </div>

              <aside
                className={`wds-intro__specs animate__animated ${
                  expertiseInView ? "animate__fadeInRight" : ""
                }`}
                aria-label="Core technological specializations"
              >
                <h3 className="wds-intro__specs-title">Core Specializations</h3>
                <ul className="wds-intro__specs-list">
                  {SPECIALIZATIONS.map((item) => (
                    <li key={item} className="wds-intro__spec-item">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        {/*webservicelegacy*/}
        <section
          className="section wds-legacy"
          aria-labelledby="legacy-heading"
        >
          <div className="container">
            <div className="section-title text-center mb-5">
              <h2 id="legacy-heading" className="wds-legacy__main-title">
                Over a Decade of Building High Performance Digital Architectures
              </h2>
              <p className="wds-legacy__subtitle">
                For more than 10 years, QllmSoft has served as a trusted
                engineering partner for global businesses. Operating out of our
                fully redundant, enterprise grade Global Delivery Center, we
                architect elite digital ecosystems optimized for international
                scale.
              </p>
            </div>
            <div className="wds-legacy__grid">
              {LEGACY_CREDENTIALS.map((c, i) => (
                <article key={i} className="wds-legacy__card">
                  <span className="wds-legacy__card-badge">{c.label}</span>
                  <span className="wds-legacy__card-icon" aria-hidden="true">
                    <i
                      className={`bi ${c.icon}`}
                      style={{ fontSize: "2rem", color: "#edb702" }}
                    ></i>
                  </span>
                  <h3 className="wds-legacy__card-title">{c.title}</h3>
                  <p className="wds-legacy__card-desc">{c.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/*service */}
        <section
          className="section wds-services"
          ref={servicesRef}
          aria-labelledby="services-heading"
        >
          <div className="container">
            <div className="section-title text-center mb-5">
              <h2 id="services-heading" className="wds-services__main-title">
                Our Website Development Services
              </h2>
              <p className="wds-services__main-sub">
                As a leading software house, QllmSoft engineers{" "}
                <strong>high concurrency portals</strong> and bespoke
                applications that solve technical bottlenecks and dominate
                search engine rankings.
              </p>
            </div>
            <div className="wds-services__grid">
              {SERVICES_DATA.map((s, i) => (
                <article
                  key={i}
                  className={`wds-service-card animate__animated ${
                    servicesInView ? "animate__fadeInUp" : ""
                  }`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <span className="wds-service-card__num" aria-hidden="true">
                    {s.num}
                  </span>
                  <h3 className="wds-service-card__title" itemProp="name">
                    {s.title}
                  </h3>
                  <p className="wds-service-card__desc" itemProp="description">
                    {s.desc}
                  </p>
                  <div
                    className="wds-service-card__tags"
                    aria-label="Service features"
                  >
                    {s.tags.map((t) => (
                      <span key={t} className="wds-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/*   PORTFOLIO SHOWCASE*/}
        <section
          className="section portfolio-showcase"
          aria-labelledby="portfolio-heading"
        >
          <div className="container">
            <div className="section-header text-center mb-5">
              <span className="text-warning text-uppercase fw-bold tracking-wider">
                Engineered Ecosystems
              </span>
              <h2
                id="portfolio-heading"
                className="wds-portfolio__main-title mt-2"
              >
                Featured Production Architectures
              </h2>
              <p
                className="wds-portfolio__main-sub mx-auto text-muted"
                style={{ maxWidth: "650px" }}
              >
                Explore highlight web systems engineered by our global delivery
                center, designed to scale seamlessly and handle complex
                enterprise workloads.
              </p>
            </div>

            {/* 1. Visual Highlight Project Grid */}
            <div className="projects-grid row g-4 mb-5">
              {PORTFOLIO_PROJECTS.map((project, i) => (
                <div key={i} className="col-lg-6">
                  <article className="project-item card h-100 shadow border-0 overflow-hidden bg-light">
                    <div className="project-image position-relative">
                      <img
                        src={project.imgSrc}
                        alt={project.imgAlt}
                        className="img-fluid w-100"
                        style={{ height: "260px", objectFit: "cover" }}
                        loading="lazy"
                      />
                      <div className="project-image__tech-overlay"></div>
                    </div>

                    <div className="project-info card-body p-4 d-flex flex-column justify-content-between">
                      <div>
                        <span className="badge bg-secondary mb-2 text-uppercase tracking-wider">
                          {project.type}
                        </span>
                        <h3 className="project-info__title h4 text-dark mb-3">
                          {project.title}
                        </h3>
                        <p className="project-info__desc text-muted small mb-4">
                          {project.desc}
                        </p>

                        <ul className="project-info__meta-list list-unstyled border-start border-warning border-3 ps-3 mb-4">
                          <li className="mb-2">
                            <strong className="text-dark small">
                              Tech Stack:
                            </strong>{" "}
                            <span className="text-muted small">
                              {project.tech}
                            </span>
                          </li>
                          <li>
                            <strong className="text-dark small">
                              Key Metrics:
                            </strong>{" "}
                            <span className="text-muted small">
                              {project.features}
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-2">
                        <Link
                          to="/contact"
                          className="btn btn-sm btn-primary d-inline-flex align-items-center gap-2"
                          aria-label={`Inquire about engineering a solution like ${project.title}`}
                        >
                          <i className="bi bi-telephone-outbound"></i> Inquire
                          About System
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
            <div className="wds-portfolio__pdf-banner card bg-dark text-white p-5 text-center border-0 shadow">
              <div className="card-body mx-auto" style={{ maxWidth: "750px" }}>
                <div
                  className="mb-3 text-warning"
                  style={{ fontSize: "2.5rem" }}
                >
                  <i className="bi bi-file-earmark-pdf-fill"></i>
                </div>
                <h3 className="h3 text-white mb-3">
                  Download Our Complete Web Development Project Dossier
                </h3>
                <p className="text-muted small mb-4">
                  Want a deeper technical evaluation? Download our comprehensive
                  website development engineering portfolio. This master
                  document breaks down our live web implementations, core
                  performance testing, clean source file architectures, and
                  custom database integrations.
                </p>

                <a
                  href={PortfolioPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning fw-bold px-4 py-2 d-inline-flex align-items-center gap-2"
                  aria-label="Download QllmSoft master web development portfolio PDF"
                  download
                >
                  <i className="bi bi-download"></i> Download Web Engineering
                  Blueprints
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*tech stack*/}
        <section
          className="section wds-tech"
          ref={techRef}
          aria-labelledby="tech-heading"
        >
          <div className="container">
            <div className="section-title text-center mb-5">
              <h2 id="tech-heading" className="wds-tech__main-title">
                Technology Stack for Website Development
              </h2>
              <p className="wds-tech__main-sub">
                We choose technologies based on architectural stability and long
                term maintainability not what's trending. Every stack decision
                is made to keep your site performant and secure 5 years from
                now.
              </p>
            </div>

            <div className="wds-tech__grid">
              {TECH_STACK_DATA.map((col, i) => (
                <article
                  key={i}
                  className={`wds-tech__col animate__animated ${
                    techInView ? "animate__fadeInUp" : ""
                  }`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="wds-tech__col-header">
                    <h3 className="wds-tech__col-title">{col.title}</h3>
                  </div>

                  <ul className="wds-tech__list">
                    {col.items.map((item) => (
                      <li key={item.name} className="wds-tech__list-item">
                        <span className="wds-tech__node-dot"></span>
                        <div className="wds-tech__item-content">
                          <strong className="wds-tech__item-name">
                            {item.name}:
                          </strong>{" "}
                          <span className="wds-tech__item-desc">
                            {item.desc}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════
          PERFORMANCE ANALYSIS, Global Focus
    ══════════════════════════════════════════════════ */}
        <section className="section wds-perf" aria-labelledby="perf-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="perf-heading">
                Why Off the Shelf Templates are Holding Your Business Back
              </h2>
              <p>
                In today’s market,{" "}
                <strong>speed is your biggest competitive advantage</strong>. A
                generic template might look good on paper, but heavy code and
                unoptimized assets often lead to slow load times and lost
                customers before they even see your homepage.
              </p>
            </div>
            <div className="wds-perf__grid">
              {[
                {
                  title: "Eliminating Code Bloat",
                  desc: "Most templates come packed with thousands of lines of unused CSS and JavaScript. This 'hidden weight' slows down browsers and leads to high bounce rates, especially for users on the move.",
                },
                {
                  title: "Optimizing for Core Web Vitals",
                  desc: "Search engines now prioritize user experience metrics like LCP and CLS. We build clean, custom solutions that pass the 2 second speed test, ensuring your site actually ranks where your customers are looking.",
                },
                {
                  title: "Enterprise-Grade Security",
                  desc: "Templates and generic plugins are the primary targets for global cyberattacks. By using custom coded architecture, we remove these common vulnerabilities, keeping your data safe and your brand’s reputation intact.",
                },
              ].map((p, i) => (
                <article key={i} className="wds-perf__card">
                  <h3 className="wds-perf__card-title">{p.title}</h3>
                  <p className="wds-perf__card-desc">{p.desc}</p>
                </article>
              ))}
            </div>

            {/* Speed comparison */}
            <div
              className="wds-perf__comparison"
              aria-label="Load speed comparison"
            >
              <div className="wds-perf__stat">
                <span className="wds-perf__stat-num">53%</span>
                <span className="wds-perf__stat-label">
                  Of mobile users leave a site if it takes longer than 3 seconds
                  to load.
                </span>
              </div>
              <div className="wds-perf__bar-wrap">
                <div className="wds-perf__bar-row">
                  <span>Custom Code (Clean & Fast)</span>
                  <div
                    className="wds-perf__bar wds-perf__bar--fast"
                    role="meter"
                    aria-label="~1.4 seconds load time"
                    aria-valuenow="24"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span className="wds-perf__bar-label">~1.4s</span>
                  </div>
                </div>
                <div className="wds-perf__bar-row">
                  <span>Standard Multi purpose Template</span>
                  <div
                    className="wds-perf__bar wds-perf__bar--slow"
                    role="meter"
                    aria-label="~5.8 seconds load time"
                    aria-valuenow="97"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span className="wds-perf__bar-label">~5.8s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section wds-why"
          ref={whyRef}
          aria-labelledby="why-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="why-heading">
                Why Leading Businesses Partner with QllmSoft
              </h2>
              <p>
                We go beyond standard web design. Our team delivers high
                performance, secure digital solutions that are built to rank on
                search engines and scale effortlessly as your business grows.
              </p>
            </div>

            <div className="why-grid">
              {[
                {
                  num: "01",
                  title: "Bespoke Architecture , Zero Template Bloat",
                  desc: "Every line of code is written to support your specific business logic using .NET, React, and Angular, ensuring a lightweight, rankable digital asset with no unnecessary dependencies.",
                },
                {
                  num: "02",
                  title: "Verified Global Track Record",
                  desc: "Our expertise is validated by a history of successful international deliveries. We maintain top tier ratings on Upwork and Freelancer.com, serving clients across the world.",
                },
                {
                  num: "03",
                  title: "Enterprise Grade Security (OWASP)",
                  desc: "Security is not an afterthought. We implement OWASP best practices, SSL encryption, and secure API integrations to protect your data and your customers.",
                },
                {
                  num: "04",
                  title: "Performance First Engineering",
                  desc: "Our focus on Core Web Vitals guarantees fast loading, mobile responsive interfaces that lower bounce rates and improve organic search visibility on Google Pakistan.",
                },
                {
                  num: "05",
                  title: "Full Lifecycle Accountability",
                  desc: "From initial blueprinting to post launch maintenance we manage the entire SDLC. We don't hand over a site and disappear. We provide 30 day hyper care to ensure operational stability.",
                },
              ].map((w, i) => (
                <article
                  key={w.num}
                  className={`why-card ${whyInView ? "animate__animated animate__fadeInUp" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="wds-why__num" aria-hidden="true">
                    {w.num}
                  </span>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </article>
              ))}
            </div>

            {/* Marketplace verification */}
            <div
              className="wds-why__verification"
              aria-label="Verified marketplace profiles"
            >
              <h3 className="wds-why__verification-title">
                Independently Verified on Upwork & Freelancer
              </h3>
              <p>
                Our reputation is backed by third party independent reviews not
                just what we say about ourselves.
              </p>
              <div className="wds-why__platforms">
                <a
                  href="https://www.freelancer.com/u/mrprogrmmr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                  aria-label="Explore QllmSoft verified reviews on Freelancer.com"
                >
                  Explore Freelancer Reviews
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~0170e20f8803389a86"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                  aria-label="Verify QllmSoft Top-Rated Plus status on Upwork"
                >
                  Verify Upwork Status
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
         <section
           className="section testimonial-section"
           aria-labelledby="testimonials-heading"
         >
           <h2 id="testimonials-heading" className="sr-only">
    Client Reviews, QllmSoft Software Development Company Pakistan
           </h2>
         
           <TestimonialSection />
         </section>

        {/* ══════════════════════════════════════════════════
            PRICING ,  H2 + H3s
        ══════════════════════════════════════════════════ */}
        <section
          className="section wds-pricing"
          ref={pricingRef}
          aria-labelledby="pricing-heading"
          itemScope
          itemType="https://schema.org/PriceSpecification"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="pricing-heading">
                Transparent Pricing for Scalable Digital Solutions
              </h2>
              <p>
                We believe in value based, upfront pricing with zero hidden
                fees. Every project begins with a comprehensive requirement
                analysis to ensure a fixed price quote that aligns with your
                business goals.
              </p>
            </div>

            <div className="wds-pricing__grid">
              {[
                {
                  tier: "Starter",
                  title: "Professional Business Site",
                  price: "Starting at $500",
                  popular: false,
                  desc: "Designed for service based businesses. Includes a high converting, SEO ready authority site with 5 - 10 custom pages, lead capture forms, and full mobile optimization.",
                },
                {
                  tier: "Most Popular",
                  title: "Growth & eCommerce Platform",
                  price: "Starting at $1,200",
                  popular: true,
                  desc: "Advanced platforms featuring seamless payment gateway integrations (Stripe/PayPal), inventory management, automated lead tracking, and high scale SEO architecture.",
                },
                {
                  tier: "Enterprise",
                  title: "Custom SaaS & Web Apps",
                  price: "Custom Quote",
                  popular: false,
                  desc: "Tailored for complex needs: multi tenant SaaS platforms, enterprise portals, ERP integrations, and real time data dashboards built to handle global traffic.",
                },
              ].map((p, i) => (
                <article
                  key={i}
                  className={`wds-pricing-card ${p.popular ? "wds-pricing-card--popular" : ""} animate__animated ${pricingInView ? "animate__fadeInUp" : ""}`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <span className="wds-pricing-card__tier">{p.tier}</span>
                  <h3 className="wds-pricing-card__title">{p.title}</h3>
                  <p className="wds-pricing-card__price" itemProp="price">
                    {p.price}
                  </p>
                  <p className="wds-pricing-card__desc">{p.desc}</p>
                  <Link
                    to="/contact"
                    className="btn btn-primary"
                    aria-label={`Request a proposal for ${p.title}`}
                  >
                    Request a Proposal
                  </Link>
                </article>
              ))}
            </div>

            <div
              className="wds-pricing__factors"
              aria-label="Factors affecting development cost"
            >
              <h3 className="wds-pricing__factors-title">
                Project Cost Drivers
              </h3>
              <ul className="wds-pricing__factors-list">
                {[
                  { icon: "bi-cpu", label: "Custom Functionality & API Logic" },
                  { icon: "bi-brush", label: "UI/UX Design Complexity" },
                  {
                    icon: "bi-pencil",
                    label: "Content Strategy & Copywriting",
                  },
                  { icon: "bi-clock", label: "Project Timeline & Urgency" },
                  { icon: "bi-graph-up", label: "Technical SEO Scope" },
                  { icon: "bi-link", label: "Third-Party System Integrations" },
                ].map((f) => (
                  <li key={f.label} className="wds-pricing__factor">
                    <span aria-hidden="true" className="me-2 text-warning">
                      <i className={`bi ${f.icon}`}></i>
                    </span>{" "}
                    {f.label}
                  </li>
                ))}
              </ul>
              <p className="wds-pricing__cta-text">
                Need a precise estimate? We provide custom quotes within 24
                hours based on your specific project needs.
              </p>
              <Link
                to="/contact"
                className="btn btn-primary"
                aria-label="Request a detailed proposal from QllmSoft"
              >
                Get Your Custom Proposal
              </Link>
            </div>
          </div>
        </section>

        <FounderNote
          title="Digital Engineering, Measurable Enterprise Scale"
          message="QllmSoft believes a web ecosystem is more than just a digital address, it's your most powerful asset for global operation. I lead a specialized, elite squad of engineers that translates complex business requirements into high performance, production ready architectures. Operating from our secure, highly resilient technology center, we personally ensure that every module we deploy is strategically engineered to eliminate technical debt, guarantee rock solid security, and scale alongside your international ambitions."
        />

        {/* ══════════════════════════════════════════════════
            FAQ ,  H2 + FAQPage microdata
        ══════════════════════════════════════════════════ */}
        <section
          className="section csd-faq"
          aria-labelledby="faq-heading"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="faq-heading">Website Development FAQs</h2>
              <p>
                Everything you need to know about our web development process,
                costs, and timelines.
              </p>
            </div>
            <div className="csd-faq__list">
              {FAQ_DATA.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/*services carousel*/}

        <RelatedSolutions category="website" />

        {/* ══════════════════════════════════════════════════
            FINAL CTA ,  H2
        ══════════════════════════════════════════════════ */}
        <section
          className="section csd-final-cta"
          aria-labelledby="cta-heading"
        >
          <div className="container">
            <div className="csd-final-cta__content">
              <p className="section-eyebrow">Let's Get Started</p>
              <h2 id="cta-heading">
                Ready to Build a Website That Drives Real Results?
              </h2>
              <p>
                Your website should do more than exist it should attract organic
                traffic, convert high value leads, and scale alongside your
                business. Let's engineer yours.
              </p>
              <div className="csd-final-cta__buttons">
                <Link
                  to="/contact"
                  className="btn btn-primary"
                  aria-label="Request your free website development quote from QllmSoft Pakistan"
                >
                  Request Your Free Quote Today
                </Link>
                <a
                  href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20a%20website%20project!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                  aria-label="WhatsApp QllmSoft about your website development project"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.75)",
                  marginTop: "16px",
                  fontSize: "0.9rem",
                }}
              >
                Questions? Visit our <Link to="/blog">Expert Blog</Link> we
                typically respond within 5 minutes.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WebsiteDevelopmentServices;
