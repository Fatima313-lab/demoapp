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
import islamabadimg from "../assets/islamabad.webp";
import karachiimg from "../assets/karachi.webp";
import lhoreimg from "../assets/lahore.webp";
import faislabadim from "../assets/faisalabad.jpg";
import fintech from "../assets/qllm-soft-finance-management-system-11.webp";
import qllmdocs from "../assets/QllmDocs.webp";

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
  serviceType: "Custom Web Development & Software Engineering",
  name: "Global Website Development & Digital Solutions | QllmSoft",
  description:
    "QllmSoft delivers enterprise grade web development services globally. Specializing in high performance React/Next.js apps, ASP.NET Core backends, and scalable eCommerce solutions for clients in the US, UK, UAE, and Pakistan.",
  provider: {
    "@type": "Organization",
    name: "QllmSoft",
    url: "https://qllmsoft.com",
  },
  areaServed: [
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
  ],
  url: PAGE_URL,
  offers: [
    {
      "@type": "Offer",
      name: "Professional Business Website",
      priceCurrency: "PKR",
      price: "50000",
      description: "SEO-optimized 5–10 page business website",
    },
    {
      "@type": "Offer",
      name: "Growth & eCommerce Platform",
      priceCurrency: "PKR",
      price: "100000",
      description: "Custom eCommerce with JazzCash & Easypaisa integration",
    },
    {
      "@type": "Offer",
      name: "SaaS & Web Application",
      priceCurrency: "PKR",
      price: "250000",
      description: "Enterprise SaaS and multi-tenant web applications",
    },
  ],
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
    q: "What is the cost of website development in Pakistan?",
    a: "Website development cost in Pakistan ranges from PKR 50,000 to PKR 250,000+ depending on scope. A 5–10 page professional business site starts from PKR 50,000. Custom web applications and eCommerce platforms start from PKR 100,000. QllmSoft provides free, transparent fixed-price quotes within 24 hours of your enquiry.",
  },
  {
    q: "How long does it take to develop a custom website?",
    a: "A standard custom website takes 6 to 12 weeks: 2 weeks for design and prototyping, 6–8 weeks for development, and 2 weeks for QA testing and SEO optimization. Complex SaaS or enterprise projects may take 12–20 weeks depending on scope.",
  },
  {
    q: "Which technologies does QllmSoft use for website development?",
    a: "We specialize in ASP.NET Core for backend, React JS and Angular for frontend, Microsoft SQL Server for databases, and Azure or AWS for cloud deployment. This stack ensures high performance, enterprise-grade security, and long-term scalability.",
  },
  {
    q: "Why choose QllmSoft over a generic WordPress freelancer?",
    a: "Unlike freelancers using bloated templates, QllmSoft engineers custom coded solutions using React and ASP.NET. This eliminates 'technical debt', ensures sub-2-second load times, and provides enterprise-grade security that generic builders can't match.",
  },
  {
    q: "Will my website rank on Google Pakistan?",
    a: "Yes. We use Architectural SEO — clean semantic HTML5, optimized Core Web Vitals, structured data/schema markup, mobile-first development, and fast load times — to give your website a strong technical foundation for ranking on Google Pakistan from the day of launch.",
  },
  {
    q: "Do you provide website maintenance and support after launch?",
    a: "Yes. Every project includes a 30-day hyper-care period after launch — covering performance monitoring, bug fixes, security patches, and content updates. We also offer ongoing maintenance retainers for businesses that want continuous optimization and support.",
  },
  {
    q: "Can QllmSoft build websites for businesses in Lahore, Karachi, and Islamabad?",
    a: "Absolutely. QllmSoft serves businesses across all of Pakistan — Lahore, Karachi, Islamabad, Faisalabad, Sialkot, Gujrat, and beyond. We operate fully remotely with regular video calls, shared project portals, and transparent sprint reporting. We also serve international clients across the UK, USA, and UAE.",
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
      desc: "Own your customer journey with custom digital storefronts. We build secure, high transaction ecosystems that handle peak traffic without latency  with frictionless checkout flows and JazzCash, Easypaisa, and Stripe integration built in from the start.",
      tags: ["JazzCash / Easypaisa", "Scalable Inventory", "Secure Checkout"],
    },
    {
      num: "03",
      title: "Custom Web Application Development",
      desc: "When off the shelf software fails your business logic, we engineer the solution. From internal ERPs to client facing SaaS platforms  tailored web applications that automate manual processes and integrate seamlessly with your existing data infrastructure.",
      tags: ["Bespoke Architecture", "API First", "Process Automation"],
    },
    {
      num: "04",
      title: "SaaS Platform Development",
      desc: "Build scalable, multi tenant SaaS products with subscription billing, role based access, real time dashboards, and cloud native deployment on Azure or AWS designed for rapid customer acquisition in Pakistan's growing SaaS market.",
      tags: ["Multi Tenant", "Azure / AWS", "Subscription Billing"],
    },
    {
      num: "05",
      title: "Website Redesign & Performance Optimization",
      desc: "Modernize legacy assets without losing SEO equity. We perform deep tier architectural audits to identify performance leaks  upgrading speed, security, and mobile responsiveness to meet current Google algorithm requirements.",
      tags: ["Core Web Vitals", "UX Modernization", "Security Hardening"],
    },
    {
      num: "06",
      title: "SEO Optimized Web Development",
      desc: "Every website we build is a ranking machine from day one. Architectural SEO, schema markup, semantic HTML5, page speed optimization, and mobile first development  baked into the code, not bolted on afterward.",
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
          content="QllmSoft's Global Delivery Center engineers secure, enterprise grade web applications, SaaS platforms & custom solutions using .NET, React, and Angular."
        />
        <meta
          name="keywords"
          content="high performance web development, custom web engineering solutions, website development services Pakistan, web development company Pakistan, custom website development Pakistan, eCommerce website development Pakistan, ASP.NET Core web development, React web development Pakistan, SEO-optimized website Pakistan, web application development Pakistan, website development Lahore Karachi Islamabad"
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
              QllmSoft engineers ultra fast, secure, and production ready
              digital architectures. We transition corporate objectives into
              robust custom web applications that dominate competitors and load
              instantly worldwide.
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
                  At QllmSoft, we engineer more than just standard websites. We
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
                engineering partner for global businesses. From our delivery
                center in Pakistan, we architect elite digital ecosystems
                optimized for international scale.
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

        {/*<section className="section comparison-section">
          <div className="container">
            <div className="section-title text-center">
             
              <h2>
                Custom Development <span>vs</span> Generic Templates
              </h2>
              <p>
                Why QllmSoft chooses React & ASP.NET over cheap WordPress themes
                for long term growth.
              </p>
            </div>

            <div className="comparison-grid">
              <div className="comparison-card template-card">
                <div className="card-head">
                  <span className="badge">WordPress Templates</span>
                  <h3>The "Cheap" Trap</h3>
                </div>
                <ul className="comparison-list">
                  <li>❌ Bloated code slowing down SEO speed.</li>
                  <li>❌ High vulnerability to security hacks.</li>
                  <li>❌ Limited customization and "Same-look" design.</li>
                  <li>❌ High maintenance costs in the long run.</li>
                </ul>
              </div>

              <div className="vs-divider">VS</div>

              <div className="comparison-card custom-card-3d">
                <div className="card-head">
                  <span className="badge premium">QllmSoft Custom</span>
                  <h3>Built for Performance</h3>
                </div>
                <ul className="comparison-list">
                  <li>✅ Clean React code for instant Google indexing.</li>
                  <li>✅ ASP.NET Core: Bank grade security architecture.</li>
                  <li>✅ 100% Unique UI designed for your brand.</li>
                  <li>✅ Scalable architecture that grows with your users.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>*/}

        {/* ══════════════════════════════════════════════════
            PROCESS  —  H2 + H4s
        ══════════════════════════════════════════════════ 
        <section
          className="section wds-process"
          ref={processRef}
          aria-labelledby="process-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="process-heading">
               Our Process: How We Bring Your Vision to Life
              </h2>
              <p>
              We follow a clear, step by step workflow to take your project from an 
      idea to a high performance launch. No guesswork just full 
      transparency at every stage of the journey.
              </p>
            </div>

            <div className="wds-process__image-wrap">
              <img
                src={processsectionimg}
                alt="QllmSoft agile website development process Pakistan — 6-stage engineering workflow"
                loading="lazy"
              />
              <p className="wds-process__note">
                <strong>Note:</strong> We use Agile Scrum methodologies — every
                sprint is documented and shared with you in real time via our
                project portal.
              </p>
            </div>

            <ol
              className="wds-process__steps"
              aria-label="Website development process steps"
            >
              {[
                {
                  n: "01",
                  title: "Architecture & Blueprinting",
                  highlight: false,
                  desc: "We map your operational workflows and data structures. This stage ensures the technical foundation aligns with your business logic before a single line of code is written.",
                },
                {
                  n: "02",
                  title: "Interactive Prototyping",
                  highlight: false,
                  desc: "Experience your site through high-fidelity wireframes. We validate user pathways to ensure the interface meets expectations before committing to full development.",
                },
                {
                  n: "03",
                  title: "Agile Engineering Sprints",
                  highlight: true,
                  desc: "Developers work in 2 week transparent sprints with regular staging access. You see real progress — not just status updates.",
                },
                {
                  n: "04",
                  title: "QA & Security Audit",
                  highlight: false,
                  desc: "Rigorous stress testing, SEO validation, and security sweeps before any code touches production.",
                },
                {
                  n: "05",
                  title: "Live Deployment",
                  highlight: false,
                  desc: "Zero downtime migration to your live domain with DNS management handled by our team.",
                },
                {
                  n: "06",
                  title: "30-Day Hyper-Care",
                  highlight: false,
                  desc: "Post launch monitoring, performance tuning, and bug fixing at no additional cost.",
                },
              ].map((step, i) => (
                <li
                  key={i}
                  className={`wds-process__step ${step.highlight ? "wds-process__step--active" : ""} animate__animated ${processInView ? "animate__fadeInLeft" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="wds-process__step-num"
                    aria-label={`Step ${step.n}`}
                  >
                    {step.n}
                  </div>
                  <div className="wds-process__step-body">
                    <h4>
                      {step.highlight && (
                        <span className="wds-process__in-progress">
                          IN PROGRESS
                        </span>
                      )}
                      {step.title}
                    </h4>
                    <p>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>*/}




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

        <section
          className="section portfolio-showcase"
          aria-labelledby="portfolio-heading"
        >
          <div className="container">
            <div className="section-header">
              <h2 id="portfolio-heading">Featured Web Development Projects</h2>
              <p>
                Helping global clients streamline processes with intelligent
                digital solutions.
              </p>
            </div>

            <div className="projects-grid">
              <div className="project-item">
                <div className="project-image">
                  <img
                    src={fintech}
                    alt="Financial Analysis Web Application Dashboard"
                  />
                </div>
                <div className="project-info">
                  <span>FinTech Solution</span>
                  <h3>Financial Analysis Web Application</h3>
                  <p>
                    A production grade financial management and analytics system
                    providing real time insights, automated reporting, and
                    secure integrations for data driven decision making.
                  </p>
                  <ul>
                    <li>
                      <strong>Tech Stack:</strong> .NET Core, Angular, SQL
                      Server, Bootstrap{" "}
                    </li>
                    <li>
                      <strong>Key Features:</strong> CRM Integration, Investment
                      Tracking, Secure Gateways{" "}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="project-item">
                <div className="project-image">
                  <img
                    src={qllmdocs}
                    alt="QllmDocs Secure Document Management System"
                  />
                </div>
                <div className="project-info">
                  <span>Enterprise SaaS</span>
                  <h3>
                    QllmDocs - Secure & Intelligent Document Management System
                  </h3>
                  <p>
                    QllmSoft developed QllmDocs, a secure cloud based document
                    management system designed for organization needing fast
                    access, safe storage, and real time analytics. the platform
                    features a clean enterprise dashboard with smart insigts and
                    role based access..
                  </p>
                  <ul>
                    <li>
                      <strong>Tech Stack:</strong> React, Azure Cloud Storage,
                      .NET APIs
                    </li>
                    <li>
                      <strong>Key Features:</strong> Lifecycle Automation, Role
                      Based Access, AI Document Search{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            CITIES  —  H2 + H3s
        ══════════════════════════════════════════════════ */}

        <section
          className="section wds-cities"
          ref={citiesRef}
          aria-labelledby="cities-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="cities-heading">
                Website Development Services Across Pakistan
              </h2>
              <p>
                From the industrial hubs to the tech capitals, we engineer
                digital solutions tailored to the unique economic landscape of
                each major city in Pakistan.
              </p>
            </div>

            <div className="wds-cities__grid">
              {[
                {
                  img: lhoreimg,
                  city: "Lahore",
                  segment: "Startups & Software Houses",
                  desc: "The heart of Pakistan's tech ecosystem. We help Lahori startups build MVPs and scalable SaaS products that attract global VC funding and long term growth.",
                },
                {
                  img: karachiimg,
                  city: "Karachi",
                  segment: "Corporate & Large eCommerce",
                  desc: "Powering the financial capital. High concurrency enterprise portals and robust B2B platforms for Karachi's corporate giants and eCommerce leaders.",
                },
                {
                  img: islamabadimg,
                  city: "Islamabad",
                  segment: "Gov Tech & Digital Agencies",
                  desc: "Precision engineering for the capital. Secure, high authority web systems for government bodies, embassies, and digital first agencies.",
                },
                {
                  img: faislabadim,
                  city: "Sialkot & Faisalabad",
                  segment: "Export-Based Manufacturers",
                  desc: "Digitalizing the export sector. Global standard manufacturing portals that help exporters showcase capacity to international buyers.",
                },
              ].map((c, i) => (
                <article
                  key={i}
                  className={`wds-city-card animate__animated ${
                    citiesInView ? "animate__fadeInUp" : ""
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="wds-city-card__imgWrap">
                    <img
                      src={c.img}
                      alt={`${c.city} — Website development services`}
                      className="wds-city-card__img"
                      loading="lazy"
                      width="96"
                      height="96"
                    />
                  </div>

                  <h3 className="wds-city-card__city">{c.city}</h3>
                  <span className="wds-city-card__segment">{c.segment}</span>
                  <p className="wds-city-card__desc">{c.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            LOCAL OPTIMIZATIONS  —  H2 + H3s
        ══════════════════════════════════════════════════ 
        <section
          className="section wds-local"
          ref={localRef}
          aria-labelledby="local-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="local-heading">
                Optimized for the Pakistani Digital Market
              </h2>
              <p className="max-w-2xl mx-auto">
                Generic international themes fail in Pakistan. We solve local
                bottlenecks from payment friction to connectivity challenges on
                3G/4G networks.
              </p>
            </div>
            <div className="wds-local__grid">
              {[
                {
                  icon: "💳",
                  title: "Local Payment Gateway Integration",
                  desc: "Seamless checkout with JazzCash, Easypaisa, 2Checkout, and Checkout.com. We ensure your revenue reaches your account securely and reliably.",
                },
                {
                  icon: "⚡",
                  title: "Low-Bandwidth Optimization",
                  desc: "Pakistan's mobile users run on 3G/4G. We optimize every kilobyte so your site loads instantly even on unstable connections in rural Punjab or urban Karachi.",
                },
                {
                  icon: "🚚",
                  title: "Local Logistics Integration",
                  desc: "Automate fulfillment with TCS, Leopards, and Trax API integrations — syncing orders with courier tracking systems in real time.",
                },
              ].map((l, i) => (
                <article
                  key={i}
                  className={`wds-local-card animate__animated ${localInView ? "animate__fadeInUp" : ""}`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <span className="wds-local-card__icon" aria-hidden="true">
                    {l.icon}
                  </span>
                  <h3 className="wds-local-card__title">{l.title}</h3>
                  <p className="wds-local-card__desc">{l.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section> */}

        {/* ══════════════════════════════════════════════════
          PERFORMANCE ANALYSIS — Global Focus
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

        {/* ══════════════════════════════════════════════════
            COMPARISON TABLE  —  H2
        ══════════════════════════════════════════════════ 
        <section
          className="section wds-comparison"
          ref={comparisonRef}
          aria-labelledby="comparison-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="comparison-heading">
                QllmSoft vs Other Web Development Options in Pakistan
              </h2>
              <p>
                Not all web development is equal. See why Pakistan's growing
                businesses choose QllmSoft over freelancers and template
                agencies.
              </p>
            </div>

            <div className="wds-table-wrap">
              <table
                className={`wds-comparison-table animate__animated ${comparisonInView ? "animate__fadeInUp" : ""}`}
                aria-label="Comparison of QllmSoft vs Freelancer vs Template Agency for web development in Pakistan"
              >
                <thead>
                  <tr>
                    <th scope="col">Key Factor</th>
                    <th scope="col" className="wds-col--highlight">
                      ✦ QllmSoft
                    </th>
                    <th scope="col">Typical Freelancer</th>
                    <th scope="col">Cheap Template Agency</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      factor: "Full Code Ownership",
                      q: "✔ 100% Full Ownership",
                      f: "✘ Often Restricted",
                      t: "✘ Proprietary Lock-in",
                    },
                    {
                      factor: "SEO from Day One",
                      q: "✔ Architectural SEO",
                      f: "⚠ Basic Meta Tags Only",
                      t: "✘ Bloated Code (Anti-SEO)",
                    },
                    {
                      factor: "Post-Launch Support",
                      q: "✔ 30-Day Hyper-Care",
                      f: "✘ Unreliable Availability",
                      t: "⚠ Paid Ticket System",
                    },
                    {
                      factor: "Technical Debt",
                      q: "✔ Zero Bloat",
                      f: "⚠ Variable Quality",
                      t: "✘ High (Template-Based)",
                    },
                    {
                      factor: "Core Web Vitals",
                      q: "✔ Built-In Optimization",
                      f: "⚠ Depends on Skill Level",
                      t: "✘ Rarely Optimized",
                    },
                    {
                      factor: "Security Standard",
                      q: "✔ OWASP Compliant",
                      f: "⚠ Basic SSL Only",
                      t: "✘ Plugin Vulnerabilities",
                    },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="wds-col--factor">{row.factor}</td>
                      <td className="wds-col--highlight wds-col--good">
                        {row.q}
                      </td>
                      <td>{row.f}</td>
                      <td>{row.t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>*/}

        {/* ══════════════════════════════════════════════════
            WHY CHOOSE US  —  H2 + H3s
        ══════════════════════════════════════════════════ */}
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
                  title: "Bespoke Architecture — Zero Template Bloat",
                  desc: "Every line of code is written to support your specific business logic using .NET, React, and Angular — ensuring a lightweight, rankable digital asset with no unnecessary dependencies.",
                },
                {
                  num: "02",
                  title: "Verified Global Track Record",
                  desc: "Our expertise is validated by a history of successful international deliveries. We maintain top tier ratings on Upwork and Freelancer.com, serving clients across the world ",
                },
                {
                  num: "03",
                  title: "Enterprise-Grade Security (OWASP)",
                  desc: "Security is not an afterthought. We implement OWASP best practices, SSL encryption, and secure API integrations to protect your data and your customers.",
                },
                {
                  num: "04",
                  title: "Performance-First Engineering",
                  desc: "Our focus on Core Web Vitals guarantees fast loading, mobile responsive interfaces that lower bounce rates and improve organic search visibility on Google Pakistan.",
                },
                {
                  num: "05",
                  title: "Full-Lifecycle Accountability",
                  desc: "From initial blueprinting to post launch maintenance — we manage the entire SDLC. We don't hand over a site and disappear. We provide 30 day hyper care to ensure operational stability.",
                },
              ].map((w, i) => (
                <article
                  key={i}
                  className={`why-card animate__animated ${whyInView ? "animate__fadeInUp" : ""}`}
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
                Independently Verified on Upwork &amp; Freelancer
              </h3>
              <p>
                Our reputation is backed by third party independent reviews —
                not just what we say about ourselves.
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
            PRICING  —  H2 + H3s
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
                  { icon: "⚡", label: "Custom Functionality & API Logic" },
                  { icon: "🎨", label: "UI/UX Design Complexity" },
                  { icon: "✍️", label: "Content Strategy & Copywriting" },
                  { icon: "🚀", label: "Project Timeline & Urgency" },
                  { icon: "📊", label: "Technical SEO Scope" },
                  { icon: "🔗", label: "Third-Party System Integrations" },
                ].map((f) => (
                  <li key={f.label} className="wds-pricing__factor">
                    <span aria-hidden="true">{f.icon}</span> {f.label}
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
          title="Digital Craftsmanship, Business Results"
          message="At QllmSoft, we believe a website is more than just a digital address it's your most powerful sales engine. I lead a specialized team that transforms complex business requirements into high-performance web experiences. From Lahore to London, we personally ensure that every line of code we write and every pixel we place is strategically designed to drive engagement, ensure rock solid security, and scale alongside your global ambitions."
        />

        {/* ══════════════════════════════════════════════════
            FAQ  —  H2 + FAQPage microdata
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
            FINAL CTA  —  H2
        ══════════════════════════════════════════════════ */}
        <section
          className="section csd-final-cta"
          aria-labelledby="cta-heading"
        >
          <div className="container">
            <div className="csd-final-cta__content">
              <p className="section-eyebrow" style={{ color: "#edb702" }}>
                Let's Get Started
              </p>
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
                Questions? Visit our{" "}
                <Link to="/blog" style={{ color: "#edb702" }}>
                  Expert Blog
                </Link>{" "}
                — we typically respond within 5 minutes.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WebsiteDevelopmentServices;
