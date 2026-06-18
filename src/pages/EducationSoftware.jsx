/**
 * EducationSoftware.jsx
 * TARGET KEYWORDS:
 *  Primary:   education software development Pakistan
 *             school management software Pakistan
 *  Secondary: LMS development Pakistan, eLearning platform development Pakistan,
 *             student management system Pakistan, custom education app development Pakistan,
 *             online classes software Pakistan, education app development company Pakistan
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import "./IndustryPage.css";
import "animate.css";
import TestimonialSection from "../components/TestimonialSection";
import FounderNote from "../components/FounderNote";

const PAGE_URL = "https://qllmsoft.com/education-software-development-pakistan";
const OG_IMAGE =
  "https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg";

const IconBook = ({ s = 24 }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
const IconVideo = ({ s = 24 }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);
const IconBarChart = ({ s = 24 }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);
const IconUsers = ({ s = 24 }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconDollarSign = ({ s = 24 }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const IconShield = ({ s = 24 }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconCpu = ({ s = 24 }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M15 2v2M9 2v2M2 9h2M2 15h2M22 9h-2M22 15h-2M15 22v-2M9 22v-2" />
  </svg>
);
const IconSmartphone = ({ s = 24 }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);
const IconCheck = ({ s = 16 }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconTrending = ({ s = 24 }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
const IconZap = ({ s = 24 }) => (
  <svg
    width={s}
    height={s}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "QllmSoft",
  url: "https://qllmsoft.com",
  foundingDate: "2015",
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
const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Education Software Development & EdTech Engineering",
  name: "Custom Education Software Development Services",
  description:
    "QllmSoft engineers custom education software solutions and cloud native EdTech platforms. We build multi tenant school management hubs, custom LMS platforms, offline first eLearning mobile apps, and secure student analytics engines for global academic institutions and scaling startups.",
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
};
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
      name: "Education Software Development Pakistan",
      item: PAGE_URL,
    },
  ],
};
const FAQ_DATA = [
  {
    q:
      "What custom education software development services does QllmSoft engineer?",
    a:
      "QllmSoft delivers end-to-end EdTech engineering services. We architect multi tenant Campus Management Hubs, Enterprise Learning Management Systems (LMS), cross-platform mobile eLearning applications (iOS & Android), automated assessment engines, real-time student telemetry dashboards, and programmatic billing ledger infrastructures for global academic institutions, corporate L&D setups, and high growth startups.",
  },
  {
    q:
      "How does bespoke education software differ from off-the-shelf SaaS solutions?",
    a:
      "Off-the-shelf software forces your institution to distort its native administrative workflows to fit rigid software constraints. Our custom systems are engineered around your exact pedagogical models, enrollment funnels, custom grading rules, and complex fee structures. Furthermore, you receive 100% intellectual property (IP) ownership, completely eliminating recurring user license fees you pay once, own the code, and control the data layer.",
  },
  {
    q:
      "Can you engineer a high-concurrency custom LMS for enterprise training or universities?",
    a:
      "Yes. We specialize in custom LMS development built on decoupled, high-concurrency content architectures. We integrate modular course builders, SCORM/xAPI compliance, advanced quiz engines, programmatic certification protocols, and seamless native API connections to major real-time communication networks (Zoom, MS Teams, Google Meet) for high availability digital lecture delivery.",
  },
  {
    q:
      "How do your educational mobile apps handle variable network environments?",
    a:
      "Our mobile apps utilize advanced offline-first architectures, local SQLite data syncing, and aggressive edge-media caching arrays. This advanced engineering ensures that multimedia courses, interactive quizzes, and messaging channels run seamlessly regardless of bandwidth constraints or hardware limitations, providing a flawless mobile experience globally.",
  },
  {
    q:
      "What are your typical development timelines for custom EdTech platforms?",
    a:
      "Timelines depend entirely on the complexity of your custom features. Core administrative platforms with enrollment, grade book, and ledger features typically take 10–16 weeks. A comprehensive, multi-role LMS with mobile app parity ranges from 14-20 weeks. Scaling multi tenant EdTech SaaS infrastructures built for global distribution generally span 20 - 28 weeks of engineering.",
  },
  {
    q:
      "Can your platforms integrate with our existing ERP tools and payment infrastructure?",
    a:
      "Yes. We build secure RESTful API integrations with legacy Student Information Systems (SIS), enterprise ERP databases, and major global payment processors (Stripe, PayPal, Adyen) alongside customizable local financial gateways (including bank APIs, JazzCash, and Easypaisa). Every endpoint is secured via OAuth 2.0 with strict validation and fallback error handling.",
  },
  {
    q:
      "How does QllmSoft handle international data compliance and student privacy laws?",
    a:
      "Data protection is deeply embedded into our development lifecycle. We design platforms to comply with international regulations including FERPA for North American academic registries, GDPR for European platforms, and highly localized compliance frameworks across the Middle East and Asia incorporating advanced role-based access control (RBAC) and encrypted database schemas.",
  },
  {
    q:
      "What is your approach to migrating legacy institutional data into a new custom system?",
    a:
      "We design custom ETL (Extract, Transform, Load) data pipelines to securely migrate historic student profiles, transcript archives, and financial ledgers from your legacy systems or disorganized spreadsheets. We run comprehensive schema validation and data sanitization routines to ensure zero data loss and absolute integrity upon launch.",
  },
  {
    q:
      "What post-launch support, DevOps, and SLA maintenance structures do you provide?",
    a:
      "Every custom deployment includes a comprehensive 30-day hyper-care support window covering code updates, server performance tuning, and structural optimization. Beyond launch, we offer tailored DevOps SLAs providing continuous cloud monitoring, automated security patch application, load balancer adjustments, and iterative feature scaling.",
  },
];

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};
const schemaWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Custom Education Software Development Services",
  url: PAGE_URL,
  description:
    "QllmSoft engineers custom education software solutions and cloud native EdTech platforms. We build multi tenant school management hubs, custom LMS platforms, offline first eLearning mobile apps, and secure student analytics engines for global academic institutions and scaling startups.",
  provider: { "@type": "Organization", name: "QllmSoft" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
};

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  const id = `ed-faq-${index}`;
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
        aria-controls={id}
        itemProp="name"
      >
        <span>{faq.q}</span>
        <span className="faq-icon" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div
          id={id}
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

const EducationSoftware = () => {
  const { ref: svRef, inView: svInView } = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });
  const { ref: whyRef, inView: whyInView } = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });
  const { ref: procRef, inView: procInView } = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });
  const { ref: clientRef, inView: clientInView } = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });
  const { ref: revRef, inView: revInView } = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  return (
    <>
      <Helmet>
        <title>
          Custom Education Software Development | LMS & School Management |
          QllmSoft
        </title>
        <meta
          name="description"
          content="QllmSoft builds custom EdTech solutions, scalable LMS platforms, next gen eLearning apps, and cloud based school management software for global institutions and startups."
        />
        <meta
          name="keywords"
          content="custom education software development, LMS platform development, EdTech software solutions, enterprise school management system, eLearning app development, virtual classroom software, remote dedicated development teams"
        />
        <meta name="author" content="QllmSoft" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="QllmSoft" />
        <meta
          property="og:title"
          content="Custom Education Software Development & LMS Platforms | QllmSoft"
        />
        <meta
          property="og:description"
          content="Scale your educational institution or EdTech startup with custom LMS platforms, school management systems, and high performance eLearning apps."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Custom EdTech & Education Software Development, QllmSoft"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom EdTech & Education Software Development | QllmSoft"
        />
        <meta
          name="twitter:description"
          content="Empowering global educational institutions and startups with custom LMS, school management, and next-gen eLearning apps."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">
          {JSON.stringify(schemaWebPage)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaService)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaBreadcrumb)}
        </script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="ip-page" role="main">
        {/* HERO */}
        <header className="ip-hero" role="banner">
          <div className="container ip-hero__inner">
            <div className="ip-hero__content">
              <div className="ip-hero__eyebrow">
                <span className="ip-hero__dot" aria-hidden="true" />
                Next Gen EdTech Solutions - Global Engineering Hub
              </div>
              <h1 className="ip-hero__title">
                Custom EdTech Software
                <br />
                Development Services
                <br />
                <em>& Enterprise LMS Solutions</em>
              </h1>
              <p className="ip-hero__sub">
                We architect scalable learning management systems, custom
                eLearning applications, and secure cloud infrastructure that
                empower global universities, institutions, and high-growth{" "}
                <strong>EdTech startups</strong> to drive measurable learning
                outcomes.
              </p>
              <div className="ip-hero__buttons">
                <Link
                  to="/contact"
                  className="ip-btn-primary"
                  aria-label="Get a free education software consultation from QllmSoft"
                >
                  Book Solution Architecture Call
                </Link>
                <a
                  href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20education%20software!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ip-btn-whatsapp"
                  aria-label="WhatsApp QllmSoft about education software"
                >
                  💬 WhatsApp Us
                </a>
              </div>
              <div className="ip-hero__trust" aria-label="Trust indicators">
                <span>✓ Custom LMS Development</span>
                <span className="ip-hero__trust-sep" />
                <span>✓ Enterprise Student Information Systems (SIS)</span>
                <span className="ip-hero__trust-sep" />
                <span>✓ Cross Platform eLearning Mobile Apps</span>
              </div>
            </div>
            <aside
              className="ip-hero__features"
              aria-label="Education software architectural capabilities"
            >
              {[
                {
                  Icon: IconBook,
                  title: "Enterprise Architecture",
                  desc: "Scalable core engines for admissions, compliance, and institutional operations.",
                },
                {
                  Icon: IconVideo,
                  title: "Virtual Classrooms",
                  desc: "WebRTC-powered live streaming, interactive whiteboards, and multi tenant hosting.",
                },
                {
                  Icon: IconCpu,
                  title: "LMS Platform Engineering",
                  desc: "SCORM/xAPI compliant course delivery, automated assessments, and micro credentials.",
                },
                {
                  Icon: IconBarChart,
                  title: "Data & Predictive Analytics",
                  desc: "Centralized executive dashboards tracking student engagement and retention metrics.",
                },
                {
                  Icon: IconSmartphone,
                  title: "Omnichannel Learning Apps",
                  desc: "High performance native and cross platform iOS & Android learner applications.",
                },
                {
                  Icon: IconUsers,
                  title: "Collaboration Ecosystems",
                  desc: "Secure, real time portal frameworks connecting educators, learners, and administrators.",
                },
              ].map((f, i) => (
                <div key={i} className="ip-hero__feature">
                  <div className="ip-hero__feature-icon">
                    <f.Icon s={20} />
                  </div>
                  <strong>{f.title}</strong>
                  <span>{f.desc}</span>
                </div>
              ))}
              <div className="ip-hero__stats">
                {[
                  { num: "50+", label: "EdTech Deliveries" },
                  { num: "10+ Yrs", label: "Core Experience" },
                  { num: "5.0★", label: "Clutch Global Rating" },
                  { num: "Optimized", label: "Offshore Value Arbitrage" },
                ].map((s) => (
                  <div key={s.label} className="ip-hero__stat">
                    <span className="ip-hero__stat-num">{s.num}</span>
                    <span className="ip-hero__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </header>

        {/* INTRO */}
        <section className="section ip-intro" aria-labelledby="intro-heading">
          <div className="container">
            <div className="ip-intro__layout">
              <div className="ip-intro__text">
                <h2 id="intro-heading">
                  Enterprise EdTech Engineering That Scales Learning
                  Infrastructure Across Global Borders
                </h2>
                <p>
                  The global digital learning landscape is evolving rapidly. To
                  deliver true value, modern educational institutions and high
                  growth platforms require custom digital infrastructure that
                  ensures high availability, secure data pipelines, and seamless
                  user experiences. At QllmSoft, we engineer those
                  enterprise-grade foundations.
                </p>
                <p>
                  Our specialized software engineering teams architect custom
                  Learning Management Systems (LMS), comprehensive Student
                  Information Systems (SIS), and native mobile eLearning
                  applications. Every solution we deliver is optimized for cross
                  border scalability, automated administrative workflows, and
                  multi tenant delivery. We proudly deploy robust platforms for
                  organizations across the globe ranging from enterprise
                  corporate training hubs to multi campus academic networks.
                </p>
                <p>
                  Aligning with international framework benchmarks championed by
                  entities like{" "}
                  <a
                    href="https://www.unesco.org/education"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="UNESCO education initiatives - external authority"
                  >
                    UNESCO
                  </a>{" "}
                  and global data standards, our platforms support personalized
                  learning pathways at scale. Whether you are a venture-backed
                  EdTech startup scaling an MVP or a major institution
                  digitizing legacy operations, QllmSoft provides the deep
                  technical stack proficiency and transparent offshore
                  engineering efficiency your roadmap demands. Explore our{" "}
                  <Link to="/mobile-app-development">
                    mobile app development services
                  </Link>{" "}
                  or our{" "}
                  <Link to="/custom-software-development-services">
                    custom software capabilities
                  </Link>{" "}
                  to review our comprehensive engineering scope.
                </p>
                <div className="ip-intro__badges">
                  {[
                    "Global Gateway Integrations (Stripe, PayPal, Local APIs)",
                    "WebRTC, Zoom & Teams API Sync",
                    "SCORM, xAPI & LTI Compliance",
                    "GDPR & FERPA Data Security Standards",
                  ].map((b) => (
                    <span key={b} className="ip-badge">
                      <IconCheck s={13} />
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <aside
                className="ip-intro__aside"
                aria-label="Education software impact metrics"
              >
                {[
                  {
                    Icon: IconTrending,
                    num: "3×",
                    label:
                      "Increase in platform engagement with interactive LMS engines",
                  },
                  {
                    Icon: IconZap,
                    num: "40%",
                    label:
                      "Reduction in operational overhead via custom administrative workflows",
                  },
                  {
                    Icon: IconDollarSign,
                    num: "Efficient",
                    label:
                      "High tier engineering arbitrage compared to onshore Western firms",
                  },
                  {
                    Icon: IconUsers,
                    num: "50+",
                    label:
                      "EdTech & educational software solutions deployed globally",
                  },
                ].map((s, i) => (
                  <div key={i} className="ip-stat-card">
                    <div className="ip-stat-card__icon">
                      <s.Icon s={20} />
                    </div>
                    <div>
                      <span className="ip-stat-card__num">{s.num}</span>
                      <span className="ip-stat-card__label">{s.label}</span>
                    </div>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          className="section ip-services"
          ref={svRef}
          aria-labelledby="services-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="services-heading">
                Enterprise EdTech & Education Software Solutions We Engineer
              </h2>
              <p>
                Six core digital learning solutions engineered to satisfy
                rigorous administrative, pedagogical, and technical benchmarks
                for global institutions, enterprise training, and scaling
                startups.
              </p>
            </div>
            <div className="ip-services__grid">
              {[
                {
                  Icon: IconBook,
                  title: "Enterprise School & Campus Management Systems",
                  desc: "Centralized multi tenant operating hubs that orchestrate admissions pipelines, complex course scheduling, student registries, automated grade books, and academic audit trails. Architected to sync natively with global curriculum structures and enterprise ERP workflows.",
                  tags: [
                    "SIS Architecture",
                    "Automated Rostering",
                    "Multi Campus Data Sync",
                    "Admissions CRM",
                    "API Gateway Sync",
                  ],
                },
                {
                  Icon: IconCpu,
                  title: "Custom LMS Platform Engineering",
                  desc: "Scalable, high concurrency Learning Management Systems built with decoupled content architecture, automated grading matrix engines, custom certification protocols, and intuitive progression paths. Engineered specifically for complex corporate training structures and academic deployments.",
                  tags: [
                    "SCORM / xAPI / LTI",
                    "Multi Tenant Engines",
                    "Interactive Quizzing",
                    "Automated Certifications",
                    "Custom Learning Paths",
                  ],
                },
                {
                  Icon: IconVideo,
                  title: "Next Gen Virtual Classroom Software",
                  desc: "WebRTC-powered real time video delivery networks supporting low latency interactive whiteboards, dynamic breakout rooms, and live student participation analytics. Built to deliver seamless media streams even in variable bandwidth constraints.",
                  tags: [
                    "WebRTC Protocols",
                    "Low Latency Streaming",
                    "Session Recording Storage",
                    "Automated Attendance logs",
                    "Zoom/Teams Native APIs",
                  ],
                },
                {
                  Icon: IconSmartphone,
                  title: "Custom eLearning & Educational Mobile Apps",
                  desc: "Cross platform and native iOS/Android mobile applications designed with offline first synchronization architectures, smart edge caching for multimedia course content, native push systems, and secure parent educator communication channels.",
                  tags: [
                    "React Native / Flutter",
                    "Offline-First Storage",
                    "Edge Media Caching",
                    "Real-time Messaging",
                    "Biometric Security",
                  ],
                },
                {
                  Icon: IconBarChart,
                  title: "Predictive Student Information & Analytics Engines",
                  desc: "Data layer architectures that aggregate student telemetry data to generate advanced predictive performance models, at risk behavioral indicators, and centralized operational dashboards for real time compliance reporting.",
                  tags: [
                    "Telemetry Dashboards",
                    "Predictive Modeling",
                    "At Risk Risk Alerts",
                    "Automated Board Exports",
                    "Data Pipeline Security",
                  ],
                },
                {
                  Icon: IconDollarSign,
                  title: "Automated Tuition Ledger & Billing Integration",
                  desc: "Secure financial billing engines supporting multi currency tuition management, split ledger tracking, custom scholarship application rules, and automated invoice scheduling. Built with programmatic hooks for international payment infrastructure.",
                  tags: [
                    "Stripe / Global Gateways",
                    "Multi Currency Invoicing",
                    "Split Ledger Accounting",
                    "Automated Webhooks",
                    "Financial Audit Logs",
                  ],
                },
              ].map((s, i) => (
                <article
                  key={i}
                  className={`ip-service-card animate__animated ${svInView ? "animate__fadeInUp" : ""}`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <div className="ip-service-card__icon">
                    <s.Icon s={22} />
                  </div>
                  <h3 className="ip-service-card__title" itemProp="name">
                    {s.title}
                  </h3>
                  <p className="ip-service-card__desc" itemProp="description">
                    {s.desc}
                  </p>
                  <div className="ip-service-card__tags">
                    {s.tags.map((t) => (
                      <span key={t} className="ip-stag">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          className="section ip-dark-band"
          ref={procRef}
          aria-labelledby="process-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="process-heading">
                Our Education Software Development Process
              </h2>
              <p>
                A collaborative, institution centred process that ensures the
                software we build matches your real workflows not generic
                education software assumptions.
              </p>
            </div>
            <ol
              className="ip-process__steps"
              aria-label="Education software development process steps"
            >
              {[
                {
                  n: "01",
                  icon: "bi-file-earmark-text",
                  title: "Research & Institutional Analysis",
                  desc: "We analyse your institution's unique structure , curriculum frameworks, assessment methods, fee systems, and reporting requirements. We also map technical constraints like existing systems and network infrastructure before designing anything.",
                },
                {
                  n: "02",
                  icon: "bi-palette",
                  title: "UI/UX Design for Educators & Students",
                  desc: "We design intuitive interfaces tested against real teacher, student, and parent mental models. Dashboards are clear, navigation is simple, and the system works for staff with varying levels of technical confidence.",
                },
                {
                  n: "03",
                  icon: "bi-gear",
                  title: "Agile Development & Institution Testing",
                  desc: "We build in two week sprints with institution staff involved in testing every major feature cycle. Real administrative scenarios and classroom situations are used to validate system behaviour before it reaches production.",
                },
                {
                  n: "04",
                  icon: "bi-plug",
                  title: "Integration with Existing Systems & Platforms",
                  desc: "We integrate with Zoom, Google Meet, Google Classroom, national board APIs, JazzCash, Easypaisa, and any existing ERP or library management systems the institution uses  with thorough data migration from legacy databases.",
                },
                {
                  n: "05",
                  icon: "bi-cloud-upload",
                  title: "Deployment, Staff Training & Ongoing Support",
                  desc: "We manage phased deployment to minimise disruption to active academic terms, provide staff training sessions and documentation, and deliver 30 days of free post launch support for every engagement.",
                },
              ].map((step, i) => (
                <li
                  key={i}
                  className={`ip-process__step animate__animated ${procInView ? "animate__fadeInLeft" : ""}`}
                  style={{ animationDelay: `${i * 0.09}s` }}
                >
                  <div className="ip-process__step-num">{step.n}</div>
                  <span className="ip-process__step-icon" aria-hidden="true">
                    <i
                      className={`bi ${step.icon}`}
                      style={{ fontSize: "2rem", color: "edb702" }}
                    />
                  </span>
                  <div className="ip-process__step-body">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="section ip-why"
          ref={whyRef}
          aria-labelledby="why-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="why-heading">
                Why Leading Global Institutions and EdTech Startups Partner with
                QllmSoft
              </h2>
              <p>
                We bridge deep pedagogical domain knowledge with rigorous,
                cloud-native software engineering delivering premium technical
                talent through a highly optimized global delivery model.
              </p>
            </div>
            <div className="ip-why__grid">
              {[
                {
                  Icon: IconBook,
                  title: "Global EdTech Domain Expertise",
                  desc: "Our engineering squad deeply understands multi tenant academic workflows, complex curriculum architectures (including K-12, higher education, and corporate training matrices), and the strict operational realities of modern digital learning.",
                },
                {
                  Icon: IconShield,
                  title: "Enterprise Data Security & Student Privacy",
                  desc: "We prioritize international student data compliance. Every system is architected with role-based access controls (RBAC), end-to-end data encryption, and robust audit logging that complies strictly with GDPR, FERPA, and international data standards.",
                },
                {
                  Icon: IconDollarSign,
                  title: "Strategic Cost & Engineering Arbitrage",
                  desc: "Access premier, Silicon Valley-standard software engineers via our centralized delivery hub. Benefit from massive budget optimization compared to onshore Western development agencies while maintaining 100% IP ownership.",
                },
                {
                  Icon: IconCpu,
                  title: "Bespoke Engineering - Zero Platform Compromise",
                  desc: "We write clean, modular software tailored entirely around your unique institutional blueprints. No clunky plugins, no forced adaptations to legacy off-the-shelf modules your platform scales exactly as your vision dictates.",
                },
                {
                  Icon: IconZap,
                  title: "Programmatic Omni-Channel Integrations",
                  desc: "We build native, highly secure integrations for enterprise global payment gateways (Stripe, PayPal, Adyen) alongside customizable local financial APIs, ensuring flawless multi-currency transactions and real-time ledger reconciliation.",
                },
                {
                  Icon: IconTrending,
                  title: "Resilient Infrastructure & High-Availability Scaling",
                  desc: "Operating from Tier 1 technical hubs with full power redundancy and dual fiber connectivity, our systems scale elastically. We ensure high availability and ultra-low latency for student user bases ranging from 1,000 to over 100,000+ simultaneous learners.",
                },
              ].map((w, i) => (
                <article
                  key={i}
                  className={`ip-why-card animate__animated ${whyInView ? "animate__fadeInUp" : ""}`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="ip-why-card__icon">
                    <w.Icon s={20} />
                  </div>
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
            <div className="section-title">
              <h2 id="stack-heading">
                Technologies Behind Our Education Software
              </h2>
              <p>
                Modern, proven technologies selected for reliability,
                performance, and long-term maintainability not trends.
              </p>
            </div>
            <div className="ip-stack__grid">
              {[
                {
                  label: "Backend",
                  items: [
                    "ASP.NET Core 8",
                    "Node.js",
                    "Python / Django",
                    "REST & GraphQL APIs",
                    "SignalR (real-time)",
                  ],
                },
                {
                  label: "Frontend",
                  items: [
                    "React.js",
                    "Angular",
                    "Blazor",
                    "Tailwind CSS",
                    "Bootstrap 5",
                  ],
                },
                {
                  label: "Mobile",
                  items: [
                    "React Native",
                    "Flutter",
                    "Android (Kotlin)",
                    "iOS (Swift)",
                    "Offline-First PWA",
                  ],
                },
                {
                  label: "Cloud & DevOps",
                  items: [
                    "Microsoft Azure",
                    "AWS",
                    "Docker",
                    "CI/CD Pipelines",
                    "Azure DevOps",
                  ],
                },
              ].map((col, i) => (
                <article
                  key={i}
                  className="ip-stack-col"
                  style={{ "--col-color": col.color }}
                  aria-label={`${col.label} technologies`}
                >
                  <h3 className="ip-stack-col__label">{col.label}</h3>
                  <ul className="ip-stack-col__list">
                    {col.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
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
  title="Engineering Resilient Architecture for Global EdTech Innovation"
  message="At QllmSoft, we believe true educational transformation requires more than just skin deep digital features it demands embedding robust enterprise grade engineering into the very core of your institution’s digital infrastructure. Our mission is to ensure your campus platforms do not just log records, but actively optimize administrative workflows and student learning outcomes. From our high performance technical delivery hub to enterprise institutions and scaling startups worldwide, we build high concurrency campus hubs, low latency virtual learning networks, and secure predictive analytics frameworks designed for global scale. We aren't just shipping code; we are engineering the resilient, intelligent foundations that empower modern education to adapt, scale, and thrive without limits."
/>


        {/* FAQ */}
        <section
          className="section csd-faq ip-faq"
          aria-labelledby="faq-heading"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="faq-heading">
                EdTech & Custom Education Software Engineering FAQ
              </h2>
              <p>
                Answers to the most common questions educational institutions
                ask before commissioning custom software development.
              </p>
            </div>
            <div className="csd-faq__list">
              {FAQ_DATA.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section ip-cta" aria-labelledby="cta-heading">
          <div className="ip-cta__bg" aria-hidden="true" />
          <div className="container ip-cta__inner">
            <div className="ip-cta__left">
              <p
                className="section-eyebrow"
                style={{
                  color: "#edb702",
                  textAlign: "left",
                  margin: "0 0 12px",
                }}
              >
                Scale Your Educational Infrastructure
              </p>
              <h2 id="cta-heading">
                Ready to Architect Your Next-Gen EdTech Platform?
              </h2>
              <p className="ip-cta__desc">
                Whether you are building an enterprise learning management
                system, a native cross platform eLearning app, or an intelligent
                student analytics engine QllmSoft delivers the deep technical
                stack proficiency and transparent global delivery your
                engineering roadmap requires.
              </p>
              <div className="ip-cta__buttons">
                <Link
                  to="/contact"
                  className="ip-btn-primary"
                  aria-label="Get a free education software consultation from QllmSoft Pakistan"
                >
                  Get a Free Demo
                </Link>
                <a
                  href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20education%20software!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ip-btn-whatsapp"
                  aria-label="WhatsApp QllmSoft about education software development"
                >
                  💬 WhatsApp Us
                </a>
              </div>
              <div className="ip-cta__perks">
                {[
                  "✓ Free consultation",
                  "✓ 100% Bespoke clean code architecture",
                  "✓ Comprehensive IP ownership transfer",
                  "✓ 30-day post-launch support",
                ].map((p) => (
                  <span key={p}>{p}</span>
                ))}
              </div>
            </div>
            <aside className="ip-cta__right">
              <div className="ip-cta__contact">
                <h3>Quick Contact</h3>
                <a
                  href="mailto:qllmsoft@gmail.com"
                  className="ip-cta__contact-row"
                >
                  📧 qllmsoft@gmail.com
                </a>
                <a
                  href="https://wa.me/923348229288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ip-cta__contact-row"
                >
                  💬 WhatsApp - replies in 5 mins
                </a>
                <a href="tel:+923348229288" className="ip-cta__contact-row">
                  📞 +92 334 8229288
                </a>
              </div>
              <nav className="ip-cta__related" aria-label="Related services">
                <p className="ip-cta__related-title">Related Services</p>
                <Link to="/healthcare-software-development-pakistan">
                  Healthcare Software
                </Link>
                <Link to="/custom-software-development-services">
                  Custom Software
                </Link>
                <Link to="/mobile-app-development">Mobile App Development</Link>
                <Link to="/ai-powered-software-solutions">AI Solutions</Link>
                <Link to="/outsource-software-development-to-pakistan">
                  Outsource to Pakistan
                </Link>
              </nav>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};
export default EducationSoftware;
