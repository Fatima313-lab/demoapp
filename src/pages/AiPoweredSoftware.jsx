/**
 * AiPoweredSoftware.jsx
 * ─────────────────────────────────────────────────────────────────
 * BRAND COLORS: #1A365D · #2B6CB0 · #edb702 · #F7FAFC · #4A5568
 *
 * SEO TARGET KEYWORDS:
 *   Primary:   AI-powered software solutions Pakistan
 *              AI software development company Pakistan
 *   Secondary: custom AI development Pakistan, machine learning development Pakistan,
 *              NLP solutions Pakistan, AI integration services Pakistan,
 *              AI consulting Pakistan, AI automation software Pakistan,
 *              AI development services, OpenAI integration Pakistan
 *
 * SEO SIGNALS:
 *  ✓ 5 JSON-LD schemas  (Organization, Service, WebPage+AggregateRating,
 *                         BreadcrumbList, FAQPage)
 *  ✓ Single H1 only     (strict H1→H2→H3→H4 hierarchy)
 *  ✓ Semantic HTML5     (main, header, nav, section, article, aside, ol, table)
 *  ✓ aria-label         every section / image / table / button
 *  ✓ Review microdata   Schema.org Review, Rating, Person
 *  ✓ FAQPage microdata  itemScope/itemProp + JSON-LD
 *  ✓ Service microdata  itemScope/itemProp on cards
 *  ✓ Image SEO          loading="lazy", width, height, descriptive alt
 *  ✓ Internal linking   keyword-rich anchors
 *  ✓ Outbound links     Google AI, IBM AI (E-E-A-T authority signal)
 *  ✓ Professional SVGs  inline — no emoji, no AI-style clip-art
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './AiPoweredSoftware.css';
import 'animate.css';

/* ─── Constants ───────────────────────────────────────────── */
const PAGE_URL = 'https://qllmsoft.com/ai-powered-software-solutions';
const OG_IMAGE  = 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg';

/* ─── Professional SVG Icon Components ───────────────────── */
const IconBrain = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);
const IconCpu = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <path d="M15 2v2M9 2v2M2 9h2M2 15h2M22 9h-2M22 15h-2M15 22v-2M9 22v-2"/>
  </svg>
);
const IconMessageSquare = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const IconEye = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconZap = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconTrendingUp = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);
const IconShield = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconUsers = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconBarChart = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6"  y1="20" x2="6"  y2="14"/>
    <line x1="2"  y1="20" x2="22" y2="20"/>
  </svg>
);
const IconCode = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);
const IconDatabase = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);
const IconSettings = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);
const IconSearch = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const IconLink = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);
const IconRefreshCw = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
);
const IconTarget = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);
const IconCheckCircle = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

/* ─── JSON-LD: Organization ───────────────────────────────── */
const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'QllmSoft',
  url: 'https://qllmsoft.com',
  logo: 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp',
  foundingDate: '2015',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+92-334-8229288',
    contactType: 'customer service',
    areaServed: ['PK','US','GB','AE','SA'],
    availableLanguage: 'English',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'H # 181, Camping Ground',
    addressLocality: 'Lalamusa',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  sameAs: [
    'https://www.freelancer.com/u/mrprogrmmr',
    'https://www.upwork.com/freelancers/~0170e20f8803389a86',
  ],
};

/* ─── JSON-LD: WebPage + AggregateRating ─────────────────── */
const schemaWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'AI-Powered Software Solutions in Pakistan | QllmSoft',
  url: PAGE_URL,
  description:
    'QllmSoft builds custom AI-powered software solutions in Pakistan — machine learning, NLP, computer vision, AI automation, and OpenAI integrations for businesses worldwide.',
  publisher: { '@type': 'Organization', name: 'QllmSoft' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
};

/* ─── JSON-LD: Service ────────────────────────────────────── */
const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Software Development',
  name: 'AI-Powered Software Solutions in Pakistan',
  description:
    'Custom AI development services in Pakistan — machine learning models, NLP chatbots, computer vision, AI business automation, OpenAI integrations, and AI consulting for startups and enterprises worldwide.',
  provider: { '@type': 'Organization', name: 'QllmSoft', url: 'https://qllmsoft.com' },
  areaServed: ['Pakistan','United States','United Kingdom','UAE','Saudi Arabia'],
  url: PAGE_URL,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Development Services',
    itemListElement: [
      { '@type':'Offer', itemOffered:{ '@type':'Service', name:'Custom AI Application Development Pakistan' } },
      { '@type':'Offer', itemOffered:{ '@type':'Service', name:'Machine Learning Development Pakistan' } },
      { '@type':'Offer', itemOffered:{ '@type':'Service', name:'NLP & Conversational AI Pakistan' } },
      { '@type':'Offer', itemOffered:{ '@type':'Service', name:'AI Business Automation Pakistan' } },
      { '@type':'Offer', itemOffered:{ '@type':'Service', name:'Computer Vision Solutions Pakistan' } },
      { '@type':'Offer', itemOffered:{ '@type':'Service', name:'AI Consulting & Strategy Pakistan' } },
      { '@type':'Offer', itemOffered:{ '@type':'Service', name:'OpenAI & LLM Integration Services' } },
    ],
  },
};

/* ─── JSON-LD: BreadcrumbList ─────────────────────────────── */
const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type':'ListItem', position:1, name:'Home',     item:'https://qllmsoft.com/' },
    { '@type':'ListItem', position:2, name:'Services', item:'https://qllmsoft.com/services' },
    { '@type':'ListItem', position:3, name:'AI-Powered Software Solutions', item: PAGE_URL },
  ],
};

/* ─── FAQ data ────────────────────────────────────────────── */
const FAQ_DATA = [
  {
    q: 'What types of data are needed to start an AI project?',
    a: 'AI systems can be trained on structured data from databases, semi-structured data from logs and APIs, unstructured data such as text, images, and audio, and real-time data from IoT devices. QllmSoft conducts a data readiness assessment at project start to determine volume, quality, and labelling requirements — and helps you build a data pipeline if your existing data needs enrichment.',
  },
  {
    q: 'How do you protect data security and privacy in AI projects?',
    a: 'Data security is built into every layer. We implement AES-256 encryption at rest and in transit, role-based access control, anonymization for training datasets, and follow GDPR and HIPAA-aligned data handling practices. All engagements begin with an NDA, and code repositories use private access with audit logging throughout the development lifecycle.',
  },
  {
    q: 'Can your AI solutions integrate with my existing software systems?',
    a: 'Yes. We design AI integrations using REST APIs, GraphQL endpoints, and custom middleware that connect seamlessly with your existing CRMs, ERPs, web applications, mobile apps, and cloud infrastructure. We prioritize zero-downtime integration with careful staging, rollback planning, and post-deployment monitoring.',
  },
  {
    q: 'How long does it take to develop and deploy an AI solution?',
    a: 'Timelines depend on scope, data complexity, and integration requirements. A focused AI feature — such as a document classifier or recommendation engine — can be delivered in 6–10 weeks. A full custom AI platform with ML pipelines, APIs, and dashboards typically takes 3–6 months. We provide a detailed milestone plan during the discovery phase.',
  },
  {
    q: 'Will AI automation replace my employees?',
    a: 'No — and this is a common misconception worth addressing directly. AI is designed to augment human capability, not replace people. It automates high-volume, repetitive tasks — data entry, document processing, ticket routing — freeing your team to focus on creative work, strategic decisions, and high-value customer interactions. Most organizations that adopt AI see productivity increase alongside headcount, not instead of it.',
  },
  {
    q: 'Can you customize AI solutions for a specific industry in Pakistan?',
    a: 'Absolutely. We build domain-specific AI solutions tailored to the compliance, data formats, and operational workflows of each industry — healthcare, fintech, eCommerce, education, logistics, real estate, and manufacturing. Our Pakistan-based developers also have experience integrating with local payment gateways, ERP systems, and regulatory requirements specific to the Pakistani market.',
  },
  {
    q: 'How do you maintain and improve AI models after launch?',
    a: 'AI models require ongoing care. We provide continuous monitoring for model drift, scheduled retraining with new data, performance benchmarking against baseline metrics, and version control for all model updates. Every production AI deployment includes a monitoring dashboard and an agreed SLA for model performance thresholds.',
  },
];

/* ─── JSON-LD: FAQPage ────────────────────────────────────── */
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_DATA.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

/* ─── FAQ Accordion ───────────────────────────────────────── */
const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  const id = `ai-faq-${index}`;
  return (
    <div
      className={`faq-item ${open ? 'faq-item--open' : ''}`}
      itemScope itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        className="faq-question"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={id}
        itemProp="name"
      >
        <span>{faq.q}</span>
        <span className="faq-icon" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div
          id={id}
          className="faq-answer"
          itemScope itemProp="acceptedAnswer"
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
const AiPoweredSoftware = () => {

  const { ref: introRef,    inView: introInView    } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.06 });
  const { ref: benefitsRef, inView: benefitsInView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: processRef,  inView: processInView  } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: mlRef,       inView: mlInView       } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: casesRef,    inView: casesInView    } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: industryRef, inView: industryInView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: consultRef,  inView: consultInView  } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: techRef,     inView: techInView     } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: reviewRef,   inView: reviewInView   } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: compareRef,  inView: compareInView  } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <>
      {/* ════════════════════════════════════════════════
          SEO HEAD
      ════════════════════════════════════════════════ */}
      <Helmet>
        <title>AI-Powered Software Solutions in Pakistan | Custom AI Development | QllmSoft</title>
        <meta
          name="description"
          content="QllmSoft builds custom AI-powered software solutions in Pakistan — machine learning, NLP, computer vision, AI automation, and OpenAI integrations. Trusted by businesses in the US, UK, UAE, and globally. Get a free AI consultation."
        />
        <meta
          name="keywords"
          content="AI powered software solutions Pakistan, AI software development company Pakistan, custom AI development Pakistan, machine learning development Pakistan, NLP solutions Pakistan, AI automation software Pakistan, AI integration services Pakistan, AI consulting Pakistan, OpenAI integration Pakistan, computer vision Pakistan, artificial intelligence software Pakistan"
        />
        <meta name="author"  content="QllmSoft" />
        <meta name="robots"  content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type"         content="website" />
        <meta property="og:url"          content={PAGE_URL} />
        <meta property="og:site_name"    content="QllmSoft" />
        <meta property="og:title"        content="AI-Powered Software Solutions in Pakistan | Custom AI Development | QllmSoft" />
        <meta property="og:description"  content="Custom AI development in Pakistan — ML models, NLP chatbots, computer vision, AI automation, and OpenAI integrations. Free consultation for startups and enterprises." />
        <meta property="og:image"        content={OG_IMAGE} />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt"    content="QllmSoft AI-Powered Software Solutions Pakistan" />
        <meta property="og:locale"       content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="AI-Powered Software Solutions in Pakistan | QllmSoft" />
        <meta name="twitter:description" content="Custom ML, NLP, computer vision, and OpenAI integrations built in Pakistan for global businesses. Free AI consultation." />
        <meta name="twitter:image"       content={OG_IMAGE} />
        <meta name="twitter:image:alt"   content="QllmSoft AI Software Development Pakistan" />

        {/* JSON-LD × 5 */}
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="ai-page" role="main">

       

        {/* ════════════════════════════════════════════════
            HERO — single H1
        ════════════════════════════════════════════════ */}
        <header className="ai-hero" role="banner">
          <div className="ai-hero__particles" aria-hidden="true">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="ai-hero__particle" style={{
                '--delay': `${(i * 0.4).toFixed(1)}s`,
                '--x': `${8 + i * 7.5}%`,
                '--size': `${3 + (i % 4)}px`,
              }} />
            ))}
          </div>

          <div className="container ai-hero__inner">
            <div className="ai-hero__content">
              <div className="ai-hero__badge">
                <span className="ai-hero__badge-pulse" aria-hidden="true" />
                AI Development Company — Pakistan
              </div>

              {/* ✅ SINGLE H1 */}
              <h1 className="ai-hero__title">
                AI-Powered Software Solutions<br />
                &amp; Custom Development Services<br />
                <span className="ai-hero__title-accent">in Pakistan</span>
              </h1>

              <p className="ai-hero__sub">
                We engineer intelligent software that learns, adapts, and delivers measurable
                business outcomes — using machine learning, NLP, computer vision, and large
                language model integrations built with precision for your specific workflows.
              </p>

              <div className="ai-hero__buttons">
                <Link
                  to="/contact"
                  className="btn btn-primary ai-btn-primary"
                  aria-label="Get a free AI software consultation from QllmSoft Pakistan"
                >
                  Get Free AI Consultation
                </Link>
                <Link
                  to="/projects"
                  className="btn ai-btn-ghost"
                  aria-label="View QllmSoft AI development projects and case studies"
                >
                  View Our Work
                </Link>
              </div>

              <div className="ai-hero__stats" aria-label="AI development track record">
                {[
                  { num: '10+',  label: 'Years Building AI' },
                  { num: '5★',   label: 'Upwork Rating'     },
                  { num: '50+',  label: 'AI Projects'        },
                  { num: '100%', label: 'Job Success'        },
                ].map(s => (
                  <div key={s.label} className="ai-hero__stat">
                    <span className="ai-hero__stat-num">{s.num}</span>
                    <span className="ai-hero__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — capability cards with SVG icons */}
            <aside className="ai-hero__cards" aria-label="AI capabilities overview">
              {[
                { Icon: IconBrain,         label: 'Machine Learning',     desc: 'Predictive models & pattern recognition' },
                { Icon: IconMessageSquare, label: 'NLP & Chatbots',       desc: 'Conversational AI & language understanding' },
                { Icon: IconEye,           label: 'Computer Vision',      desc: 'Image recognition & visual intelligence' },
                { Icon: IconZap,           label: 'AI Automation',        desc: 'Intelligent process & workflow automation' },
                { Icon: IconBarChart,      label: 'Predictive Analytics', desc: 'Data-driven forecasting & trend analysis' },
                { Icon: IconCode,          label: 'LLM Integration',      desc: 'OpenAI, Gemini & custom LLM pipelines' },
              ].map((c, i) => (
                <div key={i} className="ai-hero__card">
                  <div className="ai-hero__card-icon">
                    <c.Icon size={22} />
                  </div>
                  <div>
                    <strong>{c.label}</strong>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}

              {/* Tech strip */}
              <div className="ai-hero__tech" aria-label="AI technologies used">
                {['ML.NET','OpenAI API','Python','TensorFlow','Azure AI','LangChain'].map(t => (
                  <span key={t} className="ai-tech-tag">{t}</span>
                ))}
              </div>
            </aside>
          </div>
        </header>

        {/* ════════════════════════════════════════════════
            INTRO — H2
        ════════════════════════════════════════════════ */}
        <section className="section ai-intro" ref={introRef} aria-labelledby="intro-heading">
          <div className="container">
            <p className="section-eyebrow">Redefining What Software Can Do</p>
            <div className="ai-intro__layout">

              <div className={`ai-intro__text animate__animated ${introInView ? 'animate__fadeInLeft' : ''}`}>
                <h2 id="intro-heading">
                  AI-Powered Software That Works <em>For</em> Your Business — Not Against It
                </h2>
                <p>
                  Most businesses today generate more data than they can act on, rely on manual
                  processes that slow decisions down, and lose competitive ground to companies that
                  already use AI to move faster. At QllmSoft, we close that gap.
                </p>
                <p>
                  Our <strong>AI-powered software development services</strong> turn your data into
                  your most valuable strategic asset. We build custom machine learning models,
                  natural language processing pipelines, computer vision systems, and LLM-powered
                  automation tools — all engineered from the ground up around your specific business
                  challenges, your existing infrastructure, and your growth trajectory.
                </p>
                <p>
                  We serve clients across the <strong>United States, United Kingdom, UAE, Saudi
                  Arabia, and Pakistan</strong> — combining the cost advantage of Pakistan-based
                  engineering with the technical depth of a specialized AI team. Every solution is
                  built with responsible AI principles at its core, referencing frameworks from{' '}
                  <a href="https://ai.google/principles/" target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="Google AI Principles — authoritative external reference">
                    Google's AI guidelines
                  </a>{' '}
                  and{' '}
                  <a href="https://www.ibm.com/artificial-intelligence" target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="IBM AI practices — authoritative external reference">
                    IBM's AI best practices
                  </a>.
                </p>
                <div className="ai-intro__badges">
                  {['Responsible AI Development','GDPR-Aware Data Handling','Agile ML Delivery','Explainable AI'].map(b => (
                    <span key={b} className="ai-badge"><IconCheckCircle size={14} /> {b}</span>
                  ))}
                </div>
              </div>

              <aside className={`ai-intro__stats animate__animated ${introInView ? 'animate__fadeInRight' : ''}`}
                aria-label="AI development impact statistics"
              >
                {[
                  { stat:'40%',  label:'Avg. reduction in manual processing time',  icon:<IconZap size={20} /> },
                  { stat:'99%',  label:'Fraud detection accuracy in fintech deployments', icon:<IconShield size={20} /> },
                  { stat:'20%+', label:'Increase in repeat purchases via AI recommendations', icon:<IconTrendingUp size={20} /> },
                  { stat:'60%',  label:'Faster developer onboarding with documented APIs', icon:<IconCode size={20} /> },
                ].map((s, i) => (
                  <div key={i} className="ai-intro__stat-card">
                    <div className="ai-intro__stat-icon">{s.icon}</div>
                    <div>
                      <span className="ai-intro__stat-num">{s.stat}</span>
                      <p className="ai-intro__stat-label">{s.label}</p>
                    </div>
                  </div>
                ))}
              </aside>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            AI SERVICES — H2 + H3s
        ════════════════════════════════════════════════ */}
        <section className="section ai-services" ref={servicesRef} aria-labelledby="services-heading">
          <div className="container">
            <p className="section-eyebrow">What We Build</p>
            <div className="section-title">
              <h2 id="services-heading">Our AI-Powered Software Development Services</h2>
              <p>
                From a single intelligent feature to a fully AI-native product — every solution
                is engineered with precision, tested rigorously, and documented for your team
                to maintain with confidence.
              </p>
            </div>
            <div className="ai-services__grid">
              {[
                {
                  Icon: IconBrain,
                  accent: '#1A365D',
                  title: 'Custom AI Application Development',
                  desc: 'We design and engineer bespoke AI applications from first principles — recommendation systems, predictive analytics engines, intelligent scoring tools, and AI-native SaaS products built around your exact competitive requirements.',
                  tags: ['ML.NET','Python','Azure AI','Custom Models','Recommendation Engine'],
                },
                {
                  Icon: IconDatabase,
                  accent: '#2B6CB0',
                  title: 'Machine Learning & Data Science',
                  desc: 'We develop supervised, unsupervised, and reinforcement learning models that uncover hidden patterns in your data. From demand forecasting and churn prediction to anomaly detection — models built to perform in production, not just in notebooks.',
                  tags: ['Scikit-learn','TensorFlow','PyTorch','Feature Engineering','Model Deployment'],
                },
                {
                  Icon: IconMessageSquare,
                  accent: '#1A365D',
                  title: 'NLP & Conversational AI',
                  desc: 'We build chatbots, virtual assistants, document classifiers, sentiment analysis tools, and multilingual NLP pipelines. Using OpenAI, Hugging Face, and custom fine-tuned models, we create systems that understand intent — not just keywords.',
                  tags: ['OpenAI API','LangChain','Hugging Face','Sentiment Analysis','Chatbot'],
                },
                {
                  Icon: IconSettings,
                  accent: '#2B6CB0',
                  title: 'AI Business Process Automation',
                  desc: 'We identify high-volume manual workflows — document processing, invoice extraction, report generation, ticket routing — and replace them with intelligent automation pipelines. The result: faster operations, fewer errors, lower cost per transaction.',
                  tags: ['RPA + AI','OCR','Document AI','Workflow Automation','Azure Logic Apps'],
                },
                {
                  Icon: IconEye,
                  accent: '#1A365D',
                  title: 'Computer Vision Solutions',
                  desc: 'We build real-time visual intelligence systems — defect detection on production lines, facial recognition for access control, document scanning with field extraction, and medical image analysis — all engineered for the accuracy your use case demands.',
                  tags: ['OpenCV','YOLO','Azure Vision','Image Classification','Object Detection'],
                },
                {
                  Icon: IconCode,
                  accent: '#2B6CB0',
                  title: 'LLM Integration & OpenAI Development',
                  desc: 'We integrate large language models — GPT-4, Claude, Gemini, or open-source alternatives — directly into your applications. Retrieval-Augmented Generation (RAG) systems, AI-powered search, document Q&A, and custom fine-tuned models for domain-specific use cases.',
                  tags: ['GPT-4','Retrieval-Augmented Generation','Vector DB','Fine-tuning','LLM Pipelines'],
                },
                {
                  Icon: IconTarget,
                  accent: '#1A365D',
                  title: 'AI Consulting & Strategy',
                  desc: 'Not sure where to start with AI? Our consultants conduct AI readiness assessments, identify your highest-impact use cases, select the right frameworks, and build a phased roadmap from proof-of-concept to full-scale deployment — with ROI mapped to every phase.',
                  tags: ['AI Roadmap','PoC Design','Tool Selection','AI Governance','ROI Planning'],
                },
                {
                  Icon: IconLink,
                  accent: '#2B6CB0',
                  title: 'AI Integration with Existing Systems',
                  desc: 'Deploying AI should enhance your current operations, not disrupt them. We integrate AI layers into your existing CRMs, ERPs, web apps, and mobile platforms using REST APIs, custom middleware, and real-time data pipelines — with zero-downtime deployment planning.',
                  tags: ['REST API','Middleware','Real-Time Sync','CRM Integration','ERP AI Layer'],
                },
              ].map((s, i) => (
                <article
                  key={i}
                  className={`ai-service-card animate__animated ${servicesInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.07}s`, '--ai-accent': s.accent }}
                  itemScope itemType="https://schema.org/Service"
                >
                  <div className="ai-service-card__icon-wrap">
                    <s.Icon size={24} />
                  </div>
                  <h3 className="ai-service-card__title" itemProp="name">{s.title}</h3>
                  <p className="ai-service-card__desc" itemProp="description">{s.desc}</p>
                  <div className="ai-service-card__tags">
                    {s.tags.map(t => <span key={t} className="ai-tag">{t}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            BENEFITS — H2 + H3s
        ════════════════════════════════════════════════ */}
        <section className="section ai-benefits" ref={benefitsRef} aria-labelledby="benefits-heading">
          <div className="container">
            <p className="section-eyebrow">Business Value of AI</p>
            <div className="section-title">
              <h2 id="benefits-heading">
                Why Invest in AI-Powered Software Development?
              </h2>
              <p>
                Integrating AI is not about chasing technology trends — it is about gaining
                measurable operational advantages that compound over time.
              </p>
            </div>
            <div className="ai-benefits__layout">
              <div className="ai-benefits__grid">
                {[
                  {
                    Icon: IconZap,
                    title: 'Automate What Slows You Down',
                    desc: 'AI handles high-volume, rule-based tasks — data entry, document processing, email classification, report generation — with greater speed and accuracy than any manual process. Your team focuses on decisions that require human judgment.',
                  },
                  {
                    Icon: IconBarChart,
                    title: 'Decisions Backed by Data, Not Instinct',
                    desc: 'Real-time predictive analytics surfaces the signals your team would otherwise miss. Forecast demand, identify churn risk, detect fraud, and model outcomes — before they happen, not after.',
                  },
                  {
                    Icon: IconUsers,
                    title: 'Experiences Users Actually Prefer',
                    desc: 'From personalized product recommendations to intelligent search and conversational support, AI creates interactions that feel tailored to each user — driving higher engagement, lower bounce rates, and measurable conversion improvement.',
                  },
                  {
                    Icon: IconShield,
                    title: 'Security & Compliance at Scale',
                    desc: 'AI-powered fraud detection, anomaly monitoring, and behavioral analysis identify threats that rule-based systems miss. Protect your customers and your data — in real time, at any transaction volume.',
                  },
                  {
                    Icon: IconTrendingUp,
                    title: 'Infrastructure That Grows With You',
                    desc: 'Unlike manual processes that break under load, AI systems are designed to scale. Add users, transactions, and data volume without adding proportional headcount or process overhead.',
                  },
                  {
                    Icon: IconTarget,
                    title: 'Competitive Advantage That Compounds',
                    desc: 'Businesses that adopt AI create a compounding advantage — better data leads to better models, better models lead to better outcomes, better outcomes attract more users. The earlier you start, the wider the gap you build.',
                  },
                ].map((b, i) => (
                  <article
                    key={i}
                    className={`ai-benefit-card animate__animated ${benefitsInView ? 'animate__fadeInUp' : ''}`}
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <div className="ai-benefit-card__icon"><b.Icon size={22} /></div>
                    <div>
                      <h3 className="ai-benefit-card__title">{b.title}</h3>
                      <p className="ai-benefit-card__desc">{b.desc}</p>
                    </div>
                  </article>
                ))}
              </div>

              <aside className={`ai-benefits__image-col animate__animated ${benefitsInView ? 'animate__fadeInRight' : ''}`}>
                <div className="ai-benefits__image-wrap">
                  <img
                    src="https://qllmsoft.com/images/benefits-of-ai-in-software-development.webp"
                    alt="Benefits of AI in software development — QllmSoft Pakistan showing measurable business outcomes"
                    loading="lazy"
                    width="480"
                    height="380"
                  />
                </div>
                <div className="ai-benefits__cta-card">
                  <h3>Ready to see what AI can do for your business?</h3>
                  <p>Book a free 30-minute AI readiness consultation — no commitment, just clarity.</p>
                  <Link
                    to="/contact"
                    className="btn btn-primary ai-btn-primary"
                    aria-label="Book a free AI readiness consultation with QllmSoft"
                  >
                    Book Free Consultation
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            DEVELOPMENT PROCESS — H2 + H4s
        ════════════════════════════════════════════════ */}
        <section className="section ai-process" ref={processRef} aria-labelledby="process-heading">
          <div className="container">
            <p className="section-eyebrow">How We Work</p>
            <div className="section-title">
              <h2 id="process-heading">Our AI Development Process</h2>
              <p>
                A structured, transparent methodology — from initial discovery to continuous
                post-launch optimization — designed to reduce risk at every stage.
              </p>
            </div>
            <div className="ai-process__track">
              {[
                {
                  n:'01', Icon: IconTarget,
                  title: 'Strategic Discovery',
                  desc: 'We immerse ourselves in your business goals, data landscape, and current processes. We identify the highest-impact AI use cases, map data availability, and define success metrics before any design begins.',
                },
                {
                  n:'02', Icon: IconSettings,
                  title: 'Solution Design & Prototyping',
                  desc: 'We select the right model architecture, data pipeline design, and integration approach. A working prototype validates the core AI logic against real data before full development investment.',
                },
                {
                  n:'03', Icon: IconDatabase,
                  title: 'Development & Model Training',
                  desc: 'We build production-grade software and train AI models using your cleaned, labelled data. Iterative training with cross-validation ensures accuracy benchmarks are met before deployment.',
                },
                {
                  n:'04', Icon: IconLink,
                  title: 'Deployment & Integration',
                  desc: 'We deploy to your preferred environment — Azure, AWS, or on-premise — and integrate with your existing systems via APIs. Zero-downtime deployment with staged rollout and rollback planning.',
                },
                {
                  n:'05', Icon: IconRefreshCw,
                  title: 'Continuous Optimization',
                  desc: 'Post-launch monitoring detects model drift and performance degradation. Scheduled retraining with new data, A/B testing of model versions, and regular performance reporting keep your AI sharp.',
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className={`ai-process__step animate__animated ${processInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="ai-process__step-top">
                    <div className="ai-process__step-num">{step.n}</div>
                    <div className="ai-process__step-icon-wrap"><step.Icon size={20} /></div>
                  </div>
                  <h4 className="ai-process__step-title">{step.title}</h4>
                  <p className="ai-process__step-desc">{step.desc}</p>
                  {i < 4 && <span className="ai-process__connector" aria-hidden="true" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            ML & NLP CAPABILITIES — H2 + H3s
        ════════════════════════════════════════════════ */}
        <section className="section ai-ml" ref={mlRef} aria-labelledby="ml-heading">
          <div className="container">
            <p className="section-eyebrow">Technical Depth</p>
            <div className="section-title">
              <h2 id="ml-heading">Machine Learning &amp; NLP Capabilities</h2>
              <p>
                The specific capabilities our engineers bring to every AI engagement —
                built on industry-standard frameworks and validated in production environments.
              </p>
            </div>
            <div className="ai-ml__layout">

              <article className={`ai-ml__col animate__animated ${mlInView ? 'animate__fadeInLeft' : ''}`}>
                <div className="ai-ml__col-header">
                  <div className="ai-ml__col-icon"><IconCpu size={22} /></div>
                  <h3>Machine Learning Capabilities</h3>
                </div>
                <ul className="ai-ml__list" aria-label="Machine learning capabilities">
                  {[
                    { title:'Predictive Analytics & Forecasting', desc:'Anticipate demand, revenue, churn, and operational trends with validated forecasting models.' },
                    { title:'Real-Time Data Processing',           desc:'Handle and react to high-velocity data streams instantly — critical for fraud detection and IoT applications.' },
                    { title:'Recommendation Engines',             desc:'Deliver personalized product, content, and action recommendations based on user behavior patterns.' },
                    { title:'Anomaly & Fraud Detection',          desc:'Identify unusual transactions, security incidents, and process deviations with statistical precision.' },
                    { title:'Image & Pattern Recognition',        desc:'Classify, detect, and segment visual content for quality control, diagnostics, and access systems.' },
                  ].map((item, i) => (
                    <li key={i} className="ai-ml__item">
                      <div className="ai-ml__item-check"><IconCheckCircle size={16} /></div>
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>

              <article className={`ai-ml__col animate__animated ${mlInView ? 'animate__fadeInRight' : ''}`}>
                <div className="ai-ml__col-header">
                  <div className="ai-ml__col-icon ai-ml__col-icon--alt"><IconMessageSquare size={22} /></div>
                  <h3>Natural Language Processing</h3>
                </div>
                <ul className="ai-ml__list" aria-label="NLP capabilities">
                  {[
                    { title:'Intelligent Chatbots & Assistants', desc:'Context-aware conversational agents that handle multi-turn dialogue, escalation, and intent resolution.' },
                    { title:'Sentiment & Intent Analysis',       desc:'Understand customer emotion and intent from support tickets, reviews, and social media at scale.' },
                    { title:'Language Translation & Transcription', desc:'Real-time translation, speech-to-text, and multilingual content processing across 50+ languages.' },
                    { title:'Automated Message Classification', desc:'Route emails, tickets, and messages to the right team or workflow automatically — zero manual triage.' },
                    { title:'Text Summarization & Extraction',  desc:'Surface key insights from contracts, reports, and research documents in seconds, not hours.' },
                  ].map((item, i) => (
                    <li key={i} className="ai-ml__item">
                      <div className="ai-ml__item-check ai-ml__item-check--alt"><IconCheckCircle size={16} /></div>
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            CASE STUDIES — H2 + H3s
        ════════════════════════════════════════════════ */}
        <section className="section ai-cases" ref={casesRef} aria-labelledby="cases-heading">
          <div className="container">
            <p className="section-eyebrow">Proven Results</p>
            <div className="section-title">
              <h2 id="cases-heading">AI Success Stories That Speak for Themselves</h2>
              <p>
                Real outcomes from AI solutions we have engineered and deployed for clients
                across eCommerce, healthcare, and financial services.
              </p>
            </div>
            <div className="ai-cases__grid">
              {[
                {
                  Icon: IconBarChart,
                  sector: 'eCommerce',
                  title: 'Predictive AI Platform — Customer Retention',
                  problem: 'A leading online retailer was losing customers after their first purchase, with no clear visibility into which users were at highest risk of churning.',
                  solution: 'We built a predictive AI platform that analyzed behavioral signals — session depth, cart abandonment patterns, email engagement — to score churn risk in real time.',
                  results: [
                    { metric:'15%', label:'Reduction in customer churn' },
                    { metric:'20%', label:'Increase in repeat purchases' },
                  ],
                },
                {
                  Icon: IconEye,
                  sector: 'Healthcare',
                  title: 'ML Diagnostic Tool — Medical Imaging',
                  problem: 'A healthcare provider was experiencing diagnostic bottlenecks, with radiologists spending significant time on initial scan review before clinical assessment.',
                  solution: 'We developed a machine learning diagnostic tool trained on labelled medical scans to flag priority cases and pre-score findings for radiologist review.',
                  results: [
                    { metric:'40%', label:'Faster initial diagnosis time' },
                    { metric:'3×',  label:'More time for treatment planning' },
                  ],
                },
                {
                  Icon: IconShield,
                  sector: 'FinTech',
                  title: 'Real-Time Fraud Detection — Financial Services',
                  problem: 'A fintech startup was facing growing transaction fraud that rule-based systems could not catch — leading to financial losses and user trust erosion.',
                  solution: 'We engineered a real-time AI fraud detection system that continuously monitors transaction patterns and flags anomalies using ensemble ML models.',
                  results: [
                    { metric:'99%', label:'Fraud detection accuracy' },
                    { metric:'<50ms',label:'Real-time decision latency' },
                  ],
                },
              ].map((c, i) => (
                <article
                  key={i}
                  className={`ai-case-card animate__animated ${casesInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="ai-case-card__header">
                    <div className="ai-case-card__icon"><c.Icon size={20} /></div>
                    <span className="ai-case-card__sector">{c.sector}</span>
                  </div>
                  <h3 className="ai-case-card__title">{c.title}</h3>
                  <div className="ai-case-card__block">
                    <span className="ai-case-card__block-label">Challenge</span>
                    <p>{c.problem}</p>
                  </div>
                  <div className="ai-case-card__block">
                    <span className="ai-case-card__block-label">Solution</span>
                    <p>{c.solution}</p>
                  </div>
                  <div className="ai-case-card__results" aria-label={`Results for ${c.title}`}>
                    {c.results.map((r, j) => (
                      <div key={j} className="ai-case-card__result">
                        <span className="ai-case-card__result-metric">{r.metric}</span>
                        <span className="ai-case-card__result-label">{r.label}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            AI vs TRADITIONAL — H2 (comparison table)
        ════════════════════════════════════════════════ */}
        <section className="section ai-compare" ref={compareRef} aria-labelledby="compare-heading">
          <div className="container">
            <p className="section-eyebrow">Why AI, Not Just Software</p>
            <div className="section-title">
              <h2 id="compare-heading">AI-Powered Software vs Traditional Software</h2>
              <p>
                The difference is not cosmetic — it is architectural. Here is how AI-powered
                software fundamentally changes what your applications can do.
              </p>
            </div>
            <div className="ai-compare__wrap">
              <table
                className={`ai-compare-table animate__animated ${compareInView ? 'animate__fadeInUp' : ''}`}
                aria-label="Comparison between traditional software and AI-powered software"
              >
                <caption className="ai-compare-table__caption">
                  Traditional Software vs AI-Powered Software — Key Capability Differences
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Capability</th>
                    <th scope="col">Traditional Software</th>
                    <th scope="col" className="ai-col--highlight">AI-Powered Software ✦</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cap:'Decision Logic',        trad:'Fixed rules written by developers',    ai:'Adaptive models trained on real data' },
                    { cap:'User Experience',       trad:'One-size-fits-all interface',           ai:'Personalised in real time per user' },
                    { cap:'Learning Capability',   trad:'Manual reprogramming required',         ai:'Self-improving with new data over time' },
                    { cap:'Automation Scope',      trad:'Limited, task-specific scripts',        ai:'Dynamic, context-aware automation' },
                    { cap:'Anomaly Detection',     trad:'Threshold-based alerts only',           ai:'Pattern-based detection across signals' },
                    { cap:'Language Understanding',trad:'Keyword matching or regex rules',       ai:'Semantic intent and context analysis' },
                    { cap:'Scalability',           trad:'Linear — more users, more overhead',   ai:'Scales with infrastructure, not headcount' },
                    { cap:'Continuous Value',      trad:'Depreciates without re-development',   ai:'Improves with usage and new data' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="ai-col--factor">{row.cap}</td>
                      <td>{row.trad}</td>
                      <td className="ai-col--highlight ai-col--good">{row.ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            INDUSTRIES — H2 + H3s
        ════════════════════════════════════════════════ */}
        <section className="section ai-industries" ref={industryRef} aria-labelledby="industries-heading">
          <div className="container">
            <p className="section-eyebrow">Industries We Serve</p>
            <div className="section-title">
              <h2 id="industries-heading">AI Solutions Across Every Industry</h2>
              <p>
                We build AI systems tailored to the data formats, compliance requirements,
                and operational realities of each specific sector — not generic tools.
              </p>
            </div>
            <div className="ai-industries__grid">
              {[
                { Icon:IconShield,      sector:'Healthcare',          desc:'HIPAA-aware diagnostic support, patient risk stratification, EHR analysis, telehealth AI, and medical imaging interpretation tools.' },
                { Icon:IconBarChart,    sector:'eCommerce & Retail',  desc:'AI recommendation engines, dynamic pricing, demand forecasting, inventory optimization, and NLP-powered customer service bots.' },
                { Icon:IconTrendingUp,  sector:'Finance & FinTech',   desc:'Fraud detection, credit risk scoring, algorithmic insights, AML monitoring, and AI-assisted financial planning for regulated environments.' },
                { Icon:IconSettings,    sector:'Manufacturing',       desc:'Predictive maintenance, visual quality inspection, production yield optimization, and supply chain intelligence for operational efficiency.' },
                { Icon:IconUsers,       sector:'Education & eLearning',desc:'Adaptive learning paths, automated grading, engagement analytics, content recommendation, and AI-powered assessment tools.' },
                { Icon:IconDatabase,    sector:'Real Estate',         desc:'Property valuation models, buyer-behavior prediction, virtual assistant integrations, and market trend forecasting for PropTech platforms.' },
                { Icon:IconZap,         sector:'Logistics',           desc:'Route optimization, fleet management AI, demand-driven inventory, last-mile delivery prediction, and disruption early-warning systems.' },
                { Icon:IconCode,        sector:'SaaS & Tech Startups',desc:'LLM-powered product features, AI-native SaaS architectures, intelligent onboarding, and usage-based personalization for B2B software.' },
              ].map((ind, i) => (
                <article
                  key={i}
                  className={`ai-industry-card animate__animated ${industryInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <div className="ai-industry-card__icon"><ind.Icon size={20} /></div>
                  <h3 className="ai-industry-card__title">{ind.sector}</h3>
                  <p className="ai-industry-card__desc">{ind.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            TECH STACK — H2
        ════════════════════════════════════════════════ */}
        <section className="section ai-tech" ref={techRef} aria-labelledby="tech-heading">
          <div className="container">
            <p className="section-eyebrow">Our AI Technology Stack</p>
            <div className="section-title">
              <h2 id="tech-heading">Technologies &amp; Frameworks We Use</h2>
              <p>
                Every technology choice is driven by your project's accuracy requirements,
                deployment environment, and long-term maintainability.
              </p>
            </div>
            <div className="ai-tech__grid">
              {[
                { color:'#1A365D', label:'AI Frameworks',    items:['ML.NET','TensorFlow','PyTorch','Scikit-learn','Keras'] },
                { color:'#2B6CB0', label:'LLM & NLP',        items:['OpenAI GPT-4','LangChain','Hugging Face','Azure OpenAI','Llama 3'] },
                { color:'#edb702', label:'Computer Vision',  items:['OpenCV','YOLO v8','Azure Computer Vision','Detectron2','PIL/Pillow'] },
                { color:'#276749', label:'Data & Pipelines', items:['Apache Spark','Pandas','Azure Data Factory','Databricks','SQL Server'] },
                { color:'#553C9A', label:'Cloud AI Services',items:['Azure AI Studio','AWS SageMaker','Google Vertex AI','Azure ML','AutoML'] },
                { color:'#9B2C2C', label:'DevOps & MLOps',   items:['MLflow','Docker','Kubernetes','GitHub Actions','Azure DevOps'] },
              ].map((col, i) => (
                <div
                  key={i}
                  className={`ai-tech-col animate__animated ${techInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.09}s`, '--ai-tech-color': col.color }}
                >
                  <h3 className="ai-tech-col__label">{col.label}</h3>
                  <ul className="ai-tech-col__list" aria-label={`${col.label} technologies`}>
                    {col.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            AI CONSULTING — H2 + H3s
        ════════════════════════════════════════════════ */}
        <section className="section ai-consult" ref={consultRef} aria-labelledby="consult-heading">
          <div className="container">
            <div className="ai-consult__layout">

              <div className={`ai-consult__text animate__animated ${consultInView ? 'animate__fadeInLeft' : ''}`}>
                <p className="section-eyebrow" style={{ textAlign:'left' }}>AI Strategy</p>
                <h2 id="consult-heading">
                  AI Consulting &amp; Strategic Planning for Pakistani Businesses
                </h2>
                <p>
                  Not every business knows where AI fits, or whether it's the right investment
                  right now. QllmSoft offers structured AI consulting to answer exactly that
                  question — honestly, practically, and with your specific business context at
                  the centre of every recommendation.
                </p>
                <p>
                  Our consultants evaluate your current systems, data maturity, and operational
                  processes — then identify the AI use cases that will deliver measurable ROI
                  within your existing constraints. We build phased roadmaps from proof-of-concept
                  to full-scale deployment, with clear success metrics at every stage.
                </p>
                <p>
                  We align every recommendation with responsible AI principles — referencing
                  Google's{' '}
                  <a href="https://ai.google/principles/" target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="Google AI Principles — external reference">
                    AI guidelines
                  </a>{' '}
                  and IBM's enterprise AI best practices to ensure ethical, explainable, and
                  governance-compliant deployment.
                </p>
              </div>

              <aside className={`ai-consult__services animate__animated ${consultInView ? 'animate__fadeInRight' : ''}`}>
                <img
                  src="https://qllmsoft.com/images/ai-consulting-and-strategy-for-your-business.webp"
                  alt="AI consulting and strategic planning for businesses in Pakistan — QllmSoft roadmap development"
                  loading="lazy"
                  width="520"
                  height="340"
                />
                <div className="ai-consult__service-list">
                  {[
                    { Icon:IconTarget,    title:'AI Readiness Assessment',      desc:'Evaluate your data, infrastructure, and processes to determine AI viability and priority.' },
                    { Icon:IconSearch,    title:'Use Case Identification',       desc:'Map the processes where AI delivers the highest ROI in your specific operational context.' },
                    { Icon:IconSettings,  title:'Technology & Tool Selection',  desc:'Choose the right models, frameworks, and cloud platforms for your requirements and budget.' },
                    { Icon:IconTrendingUp,title:'Custom AI Roadmap',            desc:'A phased plan from proof-of-concept through full-scale deployment with milestones and KPIs.' },
                    { Icon:IconShield,    title:'Ethical AI Governance',        desc:'Ensure fairness, explainability, and compliance with data ethics and industry regulations.' },
                  ].map((s, i) => (
                    <div key={i} className="ai-consult__service-item">
                      <div className="ai-consult__service-icon"><s.Icon size={18} /></div>
                      <div>
                        <strong>{s.title}</strong>
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="btn btn-primary ai-btn-primary"
                  style={{ display:'block', textAlign:'center', marginTop:'20px' }}
                  aria-label="Get a free AI consulting session with QllmSoft Pakistan"
                >
                  Get Free AI Consultation
                </Link>
              </aside>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            INTEGRATION — H2 + H3s
        ════════════════════════════════════════════════ */}
        <section className="section ai-integration" aria-labelledby="integration-heading">
          <div className="container">
            <p className="section-eyebrow">Seamless Deployment</p>
            <div className="section-title">
              <h2 id="integration-heading">
                AI Integration with Your Existing Systems
              </h2>
              <p>
                Deploying AI should accelerate your business — not require you to rebuild it.
                We connect AI capabilities to the systems and workflows you already depend on.
              </p>
            </div>
            <div className="ai-integration__grid">
              {[
                { Icon:IconZap,     title:'Minimal Downtime, Maximum Efficiency',  desc:'Carefully phased rollout plans ensure smooth operations during every deployment stage. We stage, test, and monitor before pushing to production.' },
                { Icon:IconLink,    title:'Compatibility with Popular Platforms',  desc:'CRMs, ERPs, CMSs, mobile apps, web applications — we work within your existing ecosystem, not against it.' },
                { Icon:IconCode,    title:'Custom APIs & Middleware',             desc:'Secure, scalable API connectors and middleware layers built specifically for your technology stack and data flow requirements.' },
                { Icon:IconRefreshCw,title:'Real-Time Data Sync',                 desc:'Enable live data updates and intelligent decisions using event-driven architectures, webhooks, and streaming data pipelines.' },
                { Icon:IconUsers,   title:'Training & Team Onboarding',           desc:'Documentation, training sessions, and ongoing guidance to ensure your team can operate, monitor, and maintain AI systems confidently.' },
                { Icon:IconShield,  title:'Post-Integration Monitoring',          desc:'30-day post-launch monitoring with performance dashboards, incident response, and model health checks included in every engagement.' },
              ].map((item, i) => (
                <article key={i} className="ai-integration-card">
                  <div className="ai-integration-card__icon"><item.Icon size={20} /></div>
                  <h3 className="ai-integration-card__title">{item.title}</h3>
                  <p className="ai-integration-card__desc">{item.desc}</p>
                </article>
              ))}
            </div>
            <div className="ai-integration__image-row">
              <img
                src="https://qllmsoft.com/images/seamless-integration-%20with-existing-systems.webp"
                alt="Seamless AI integration with existing software systems — QllmSoft Pakistan deployment approach"
                loading="lazy"
                width="960"
                height="360"
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            TESTIMONIALS — H2 + Review microdata
        ════════════════════════════════════════════════ */}
        <section className="section ai-testimonials" ref={reviewRef} aria-labelledby="reviews-heading">
          <div className="container">
            <p className="section-eyebrow">Verified Client Reviews</p>
            <div className="section-title">
              <h2 id="reviews-heading">
                What Clients Say About QllmSoft AI Development
              </h2>
              <p>
                Independent, third-party verified reviews from global clients — from the UK,
                USA, UAE, Saudi Arabia, and Jordan — on Freelancer and Upwork.
              </p>
            </div>
            <div className="ai-reviews__grid">
              {[
                { name:'Khalid A.',    loc:'Riyadh, Saudi Arabia',   img:'https://qllmsoft.com/images/khalid A.webp',   text:'"Outstanding technical work. The AI solution QllmSoft delivered was precisely what we needed — accurate, fast, and well-documented. The team communicated proactively at every stage. Exactly as discussed, on time, and on budget."' },
                { name:'Mohammad I.', loc:'Amman, Jordan',           img:'https://qllmsoft.com/images/Muhammad I.webp', text:'"QllmSoft is my go-to development partner for complex technical builds. Their understanding of the business context behind the code — not just the technical requirements — sets them apart from every other team I have worked with."' },
                { name:'Neil P.',     loc:'Cardiff, United Kingdom', img:'https://qllmsoft.com/images/Neil P.webp',     text:'"Exceptional communication and technical depth throughout the entire engagement. The final solution exceeded our expectations significantly. I will not hesitate to bring QllmSoft back for our next AI integration project."' },
                { name:'Fernando M.', loc:'Miramar, United States',  img:'https://qllmsoft.com/images/fernandoM.webp',  text:'"Clean architecture, professional delivery, and a team that genuinely cares about the outcome — not just closing the ticket. QllmSoft is the benchmark I now use for every other development partner I evaluate."' },
              ].map((r, i) => (
                <article
                  key={i}
                  className={`ai-review-card animate__animated ${reviewInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay:`${i * 0.1}s` }}
                  itemScope itemType="https://schema.org/Review"
                >
                  <div
                    className="ai-review-card__stars"
                    aria-label="5 out of 5 stars"
                    itemProp="reviewRating" itemScope itemType="https://schema.org/Rating"
                  >
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating"  content="5" />
                    ★★★★★
                  </div>
                  <p className="ai-review-card__text" itemProp="reviewBody">{r.text}</p>
                  <div className="ai-review-card__author" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <img src={r.img}
                      alt={`${r.name} — verified QllmSoft AI development client from ${r.loc}`}
                      loading="lazy" width="48" height="48" />
                    <div>
                      <strong itemProp="name">{r.name}</strong>
                      <span>{r.loc} — Freelancer</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div style={{ textAlign:'center', marginTop:'32px', display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
              <a href="https://www.freelancer.com/u/mrprogrmmr" target="_blank"
                rel="noopener noreferrer" className="btn btn-outline-dark"
                aria-label="View all QllmSoft AI development reviews on Freelancer">
                View All Freelancer Reviews
              </a>
              <a href="https://www.upwork.com/freelancers/~0170e20f8803389a86" target="_blank"
                rel="noopener noreferrer" className="btn btn-outline-dark"
                aria-label="Verify QllmSoft Top-Rated Plus status on Upwork">
                Verify Upwork Status
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            FAQ — H2 + FAQPage schema
        ════════════════════════════════════════════════ */}
        <section className="section csd-faq ai-faq"
          aria-labelledby="faq-heading"
          itemScope itemType="https://schema.org/FAQPage"
        >
          <div className="container">
            <p className="section-eyebrow">Common Questions</p>
            <div className="section-title">
              <h2 id="faq-heading">
                Frequently Asked Questions About AI Software Development in Pakistan
              </h2>
              <p>
                Practical answers to the questions businesses ask most before starting
                an AI development engagement.
              </p>
            </div>
            <div className="csd-faq__list ai-faq__list">
              {FAQ_DATA.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
            </div>
            <div style={{ textAlign:'center', marginTop:'32px', display:'flex', gap:'14px', justifyContent:'center', flexWrap:'wrap' }}>
              <Link to="/contact" className="btn btn-primary ai-btn-primary"
                aria-label="Contact QllmSoft with your AI development question">
                Ask Us Directly
              </Link>
              <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20an%20AI%20project!"
                target="_blank" rel="noopener noreferrer"
                className="btn ai-btn-whatsapp"
                aria-label="WhatsApp QllmSoft about an AI development project">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            FINAL CTA — H2
        ════════════════════════════════════════════════ */}
        <section className="section ai-cta" aria-labelledby="cta-heading">
          <div className="ai-cta__bg" aria-hidden="true" />
          <div className="container ai-cta__inner">
            <div className="ai-cta__icon-cluster" aria-hidden="true">
              <IconBrain size={32} />
              <IconZap size={28} />
              <IconMessageSquare size={28} />
            </div>
            <h2 id="cta-heading">
              Ready to Build AI That Drives Real Results?
            </h2>
            <p>
              Whether you have a defined AI use case, a dataset looking for direction,
              or simply a business problem that needs a smarter solution — QllmSoft
              brings the technical depth, delivery discipline, and domain knowledge to
              build AI that works in production, not just in demos.
            </p>
            <div className="ai-cta__buttons">
              <Link to="/contact" className="btn btn-primary ai-btn-primary ai-btn-cta"
                aria-label="Schedule a free AI consultation with QllmSoft Pakistan">
                Schedule Free AI Consultation
              </Link>
              <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20an%20AI%20project!"
                target="_blank" rel="noopener noreferrer"
                className="btn ai-btn-whatsapp"
                aria-label="WhatsApp QllmSoft about your AI project">
                💬 WhatsApp Us
              </a>
            </div>
            <div className="ai-cta__perks">
              {['Free AI readiness assessment','No commitment required','Response within 24 hours','NDA signed on day one'].map(p => (
                <span key={p}><IconCheckCircle size={14} /> {p}</span>
              ))}
            </div>
            <nav className="ai-cta__related" aria-label="Related software development services">
              <span>Also see:</span>
              <Link to="/custom-software-development-services">Custom Software</Link>
              <Link to="/api-development-services">API Development</Link>
              <Link to="/mobile-app-development">Mobile Apps</Link>
              <Link to="/website-development-services">Web Development</Link>
              <Link to="/outsource-software-development-to-pakistan">Outsourcing</Link>
            </nav>
          </div>
        </section>

      </main>
    </>
  );
};

export default AiPoweredSoftware;
