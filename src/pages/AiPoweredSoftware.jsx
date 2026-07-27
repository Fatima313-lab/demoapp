/**
 * AiPoweredSoftware.jsx
 * ─────────────────────────────────────────────────────────────────
 * CORE SECTION PILLAR (reclassified per the Semantic SEO audit — this
 * was previously duplicated between /ai-powered-software-solutions and
 * /blog/ai-powered-software-solutions; the blog URL is now 301-redirected
 * here, and this is the single surviving URL for the topic).
 *
 * Central Search Intent: "Hire a company to add AI features to existing
 *                          software, or build AI-powered software from scratch."
 * URL: /ai-powered-software-solutions
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './AiPoweredSoftware.css';
import TestimonialSection from "../components/TestimonialSection";
import FounderNote from "../components/FounderNote";

/* ─── Constants ───────────────────────────────────────────── */
const PAGE_URL = 'https://qllmsoft.com/ai-powered-software-solutions';
const OG_IMAGE  = 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg';

/* ─── Icon Components (unchanged, reused across cards) ─────── */
const IconBrain = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);
const IconCpu = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
    <path d="M15 2v2M9 2v2M2 9h2M2 15h2M22 9h-2M22 15h-2M15 22v-2M9 22v-2"/>
  </svg>
);
const IconMessageSquare = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const IconEye = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconZap = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconBarChart = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);
const IconCode = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const IconDatabase = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);
const IconSettings = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);
const IconShield = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconTrendingUp = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);
const IconCheckCircle = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
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
    'https://qllmdocs.com',
    'https://www.freelancer.com/u/mrprogrmmr',
    'https://www.upwork.com/freelancers/~0170e20f8803389a86',
  ],
};

/* ─── JSON-LD: Service ────────────────────────────────────── */
const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Software Development',
  name: 'AI-Powered Software Solutions | QllmSoft',
  description:
    'QllmSoft builds AI-powered software and adds AI features to existing systems — machine learning, NLP, computer vision, and OpenAI/LLM integrations — for businesses that want AI to actually change how their software works, not just check a box.',
  provider: { '@type': 'Organization', name: 'QllmSoft', url: 'https://qllmsoft.com' },
  areaServed: ['Pakistan','United States','United Kingdom','UAE','Saudi Arabia'],
  url: PAGE_URL,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Development Services',
    itemListElement: [
      { '@type':'Offer', itemOffered:{ '@type':'Service', name:'Custom AI Application Development' } },
      { '@type':'Offer', itemOffered:{ '@type':'Service', name:'Machine Learning Development' } },
      { '@type':'Offer', itemOffered:{ '@type':'Service', name:'NLP & Conversational AI' } },
      { '@type':'Offer', itemOffered:{ '@type':'Service', name:'Computer Vision Solutions' } },
      { '@type':'Offer', itemOffered:{ '@type':'Service', name:'OpenAI & LLM Integration' } },
    ],
  },
};

/* ─── JSON-LD: BreadcrumbList ─────────────────────────────── */
const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type':'ListItem', position:1, name:'Home', item:'https://qllmsoft.com/' },
    { '@type':'ListItem', position:2, name:'Services', item:'https://qllmsoft.com/services' },
    { '@type':'ListItem', position:3, name:'AI-Powered Software Solutions', item: PAGE_URL },
  ],
};

const integrationItems = [
  { Icon: IconZap, title: 'Staged, Low-Risk Rollout', desc: 'We stage and monitor before anything touches production — AI features go live in phases, not as a single risky cutover.' },
  { Icon: IconCode, title: 'Custom APIs & Middleware', desc: 'Connector layers built for your actual stack, not a generic plugin that half-fits.' },
  { Icon: IconDatabase, title: 'Works With What You Have', desc: 'CRMs, ERPs, CMSs, mobile and web apps — the AI layer sits on top of your existing systems instead of replacing them.' },
  { Icon: IconSettings, title: 'Real-Time Data Sync', desc: 'Event-driven pipelines and webhooks so the AI is working from current data, not a nightly batch export.' },
];

/* ─── FAQ data ────────────────────────────────────────────── */
const FAQ_DATA = [
  {
    q: 'How do I know if my business actually needs AI, or if it\'s just a trend I should skip?',
    a: 'The honest test: can you point to a specific, repeated task that\'s expensive because a human has to make a judgment call on it — sorting support tickets, flagging suspicious transactions, predicting which customers will churn? If yes, AI is probably worth exploring. If you\'re asking "should we have AI" without a specific problem attached, you\'re not ready yet, and we\'ll tell you that directly in a discovery call rather than sell you a project you don\'t need.',
  },
  {
    q: 'What data do you need from us before starting an AI project?',
    a: 'It depends on the project, but generally: whatever historical data reflects the decision you want the model to make. For a churn predictor, that\'s past customer behavior and outcomes. For a document classifier, that\'s a set of labeled examples. We run a short data readiness check at the start of every engagement — sometimes the data\'s in good shape, sometimes it needs cleanup work before modeling can even begin, and we\'ll tell you which situation you\'re in before quoting a timeline.',
  },
  {
    q: 'Will AI replace jobs on my team?',
    a: 'In our experience, no — not the way people worry it will. AI is genuinely good at high-volume repetitive judgment calls: sorting, flagging, drafting a first pass. It\'s not good at the parts of a job that involve context, relationships, or unusual situations. Most of our clients end up reallocating time toward that harder work rather than cutting headcount, but we won\'t pretend that\'s a universal outcome — it depends on what the AI is actually automating.',
  },
  {
    q: 'How do you handle data privacy and security in AI projects?',
    a: 'Every engagement starts with an NDA, and sensitive data is encrypted at rest and in transit. For projects touching regulated data, we follow GDPR- and HIPAA-aligned handling practices — access control, anonymization where appropriate, and audit logging on the repositories involved. If your industry has specific compliance requirements, tell us upfront and we\'ll build around them rather than retrofit them later.',
  },
  {
    q: 'Can you integrate AI into software you didn\'t originally build?',
    a: 'Yes, this is a large share of our AI work. We connect through REST APIs, GraphQL endpoints, or custom middleware into whatever CRM, ERP, or platform you\'re already running. The first step is always a short technical review of your existing system so we know what we\'re integrating with before proposing an approach.',
  },
  {
    q: 'What happens after the AI model is deployed — does it just keep working forever?',
    a: 'No, and any vendor who tells you it does is being optimistic. Models drift as real-world data shifts away from what they were trained on. We include a monitoring dashboard and set performance thresholds with you upfront, and most clients move into a retraining schedule — monthly or quarterly, depending on how fast the underlying data changes.',
  },
];

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_DATA.map(({ q, a }) => ({
    '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

/* ─── FAQ Accordion ───────────────────────────────────────── */
const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  const id = `ai-faq-${index}`;
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button className="faq-question" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls={id} itemProp="name">
        <span>{faq.q}</span>
        <span className="faq-icon" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div id={id} className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
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
  const { ref: processRef,  inView: processInView  } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: mlRef,       inView: mlInView       } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: casesRef,    inView: casesInView    } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: industryRef, inView: industryInView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <>
      <Helmet>
        <title>AI-Powered Software Solutions | QllmSoft</title>
        <meta
          name="description"
          content="QllmSoft builds AI-powered software and adds AI features to existing systems — machine learning, NLP, computer vision, and OpenAI/LLM integrations for real business use cases."
        />
        <meta name="author"  content="QllmSoft" />
        <meta name="robots"  content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content="AI-Powered Software Solutions | QllmSoft" />
        <meta property="og:description" content="Machine learning, NLP, computer vision, and LLM integration — built into your existing software, not bolted on." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="QllmSoft AI-powered software development" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered Software Solutions | QllmSoft" />
        <meta name="twitter:description" content="Machine learning, NLP, computer vision, and LLM integration for real business use cases." />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="ai-page" role="main">

        {/* ══════════════ HERO — single H1 + direct answer ══════════════ */}
        <header className="ai-hero" role="banner">
          <div className="container ai-hero__inner">
            <div className="ai-hero__content">
              <div className="ai-hero__badge">
                <span className="ai-hero__badge-pulse" aria-hidden="true" />
                AI Development
              </div>

              <h1 className="ai-hero__title">AI-Powered Software Solutions</h1>

              <p className="ai-hero__sub">
                We build machine learning models, NLP tools, computer vision systems, and LLM
                integrations that plug into the software you already run, or into something
                new, if you are starting from scratch. The goal isn't "add AI" as a headline
                feature; it's removing a specific cost or bottleneck that a human is currently
                handling manually.
              </p>

              <div className="ai-hero__buttons">
                <Link to="/contact" className="btn btn-primary ai-btn-primary" aria-label="Get a free AI software consultation from QllmSoft">
                  Get Free AI Consultation
                </Link>
                <Link to="/projects" className="btn ai-btn-ghost" aria-label="View QllmSoft AI development projects and case studies">
                  View Our Work
                </Link>
              </div>

              <div className="ai-hero__stats" aria-label="AI development track record">
                {[
                  { num: '10+',  label: 'Years Building Software' },
                  { num: '50+',  label: 'AI Projects Delivered' },
                  { num: '5',    label: 'Countries Served' },
                ].map(s => (
                  <div key={s.label} className="ai-hero__stat">
                    <span className="ai-hero__stat-num">{s.num}</span>
                    <span className="ai-hero__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="ai-hero__cards" aria-label="AI capabilities overview">
              {[
                { Icon: IconBrain,         label: 'Machine Learning',     desc: 'Predictive models & pattern recognition' },
                { Icon: IconMessageSquare, label: 'NLP & Chatbots',       desc: 'Conversational AI & language understanding' },
                { Icon: IconEye,           label: 'Computer Vision',      desc: 'Image recognition & visual inspection' },
                { Icon: IconZap,           label: 'AI Automation',        desc: 'Workflow automation with judgment built in' },
                { Icon: IconBarChart,      label: 'Predictive Analytics', desc: 'Forecasting from historical data' },
                { Icon: IconCode,          label: 'LLM Integration',      desc: 'OpenAI, Claude, Gemini & custom pipelines' },
              ].map((c, i) => (
                <div key={i} className="ai-hero__card">
                  <div className="ai-hero__card-icon"><c.Icon size={22} /></div>
                  <div><strong>{c.label}</strong><p>{c.desc}</p></div>
                </div>
              ))}
              <div className="ai-hero__tech" aria-label="AI technologies used">
                {['ML.NET','OpenAI API','Python','TensorFlow','Azure AI','LangChain'].map(t => (
                  <span key={t} className="ai-tech-tag">{t}</span>
                ))}
              </div>
            </aside>
          </div>
        </header>

        {/* ══════════════ INTRO — H2 ══════════════ */}
        <section className="section ai-intro" ref={introRef} aria-labelledby="intro-heading">
          <div className="container">
            <div className="ai-intro__layout">
              <div className={`ai-intro__text animate__animated ${introInView ? 'animate__fadeInLeft' : ''}`}>
                <h2 id="intro-heading">Where AI actually earns its cost, and where it doesn't</h2>
                <p>
                  A lot of AI marketing skips past the honest answer, which is that most
                  business problems don't need a model, they need better software, full
                  stop. AI earns its cost specifically where a human is currently making a
                  high-volume judgment call: is this transaction fraudulent, is this support
                  ticket urgent, will this customer churn, what's in this scanned document.
                  Those are pattern-recognition problems, and that's exactly what machine
                  learning is built for.
                </p>
                <p>
                  What we build tends to fall into a few buckets: predictive models trained on
                  your historical data, natural language tools that read and route text at a
                  volume no team could keep up with manually, computer vision for anything
                  involving images or video, and, increasingly, LLM integrations that add a
                  genuinely useful assistant or search layer on top of your existing product.
                </p>
                <p>
                  We build to a set of practices that line up with{' '}
                  <a href="https://ai.google/principles/" target="_blank" rel="noopener noreferrer nofollow" aria-label="Google AI Principles, external reference">
                    Google's published AI principles
                  </a>{' '}
                  and{' '}
                  <a href="https://www.ibm.com/artificial-intelligence" target="_blank" rel="noopener noreferrer nofollow" aria-label="IBM AI best practices, external reference">
                    IBM's enterprise AI guidance
                  </a>{' '}
                  , not because a badge looks good on this page, but because those principles
                  (explainability, data minimization, human oversight on high-stakes decisions)
                  are genuinely the right defaults for production systems.
                </p>
                <div className="ai-intro__badges">
                  {['Explainable Models','GDPR-Aware Data Handling','Agile Delivery','Human Oversight by Default'].map(b => (
                    <span key={b} className="ai-badge"><IconCheckCircle size={14} /> {b}</span>
                  ))}
                </div>
              </div>

              <aside className={`ai-intro__stats animate__animated ${introInView ? 'animate__fadeInRight' : ''}`} aria-label="AI development impact statistics">
                {[
                  { stat:'40%',  label:'Typical reduction in manual processing time on document/ticket workflows',  icon:<IconZap size={20} /> },
                  { stat:'99%',  label:'Detection accuracy on a recent fintech fraud-monitoring build', icon:<IconShield size={20} /> },
                  { stat:'20%+', label:'Increase in repeat purchases after adding a recommendation engine', icon:<IconTrendingUp size={20} /> },
                ].map((s, i) => (
                  <div key={i} className="ai-intro__stat-card">
                    <div className="ai-intro__stat-icon">{s.icon}</div>
                    <div><span className="ai-intro__stat-num">{s.stat}</span><p className="ai-intro__stat-label">{s.label}</p></div>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </section>

        {/* ══════════════ SERVICES — H2 + H3s ══════════════ */}
        <section className="section ai-services" ref={servicesRef} aria-labelledby="services-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="services-heading">What we build</h2>
              <p>Each of these is scoped and priced separately, we do not sell a bundled "AI package" that doesn't match your actual use case.</p>
            </div>
            <div className="ai-services__grid">
              {[
                { Icon: IconBrain, accent: '#1A365D', title: 'Custom AI Applications', desc: 'Recommendation systems, scoring tools, and AI-native features built around your specific competitive angle, not a generic template.' },
                { Icon: IconDatabase, accent: '#2B6CB0', title: 'Machine Learning & Data Science', desc: 'Supervised, unsupervised, and reinforcement learning models — demand forecasting, churn prediction, anomaly detection — built to run in production, not just a notebook.' },
                { Icon: IconMessageSquare, accent: '#1A365D', title: 'NLP & Conversational AI', desc: 'Chatbots, document classifiers, sentiment analysis, and multilingual pipelines using OpenAI, Hugging Face, or fine-tuned custom models.' },
                { Icon: IconSettings, accent: '#2B6CB0', title: 'AI Business Process Automation', desc: 'Replacing manual document processing, invoice extraction, and ticket routing with pipelines that handle the routine cases and flag the exceptions for a human.' },
                { Icon: IconEye, accent: '#1A365D', title: 'Computer Vision', desc: 'Defect detection on a production line, document scanning with field extraction, or image classification — built to the accuracy your use case actually requires.' },
                { Icon: IconCode, accent: '#2B6CB0', title: 'LLM Integration & OpenAI Development', desc: 'Retrieval-augmented generation, AI-powered search, and document Q&A, integrated with GPT-4, Claude, Gemini, or open-source alternatives.' },
              ].map((s, i) => (
                <article key={i} className={`ai-service-card animate__animated ${servicesInView ? 'animate__fadeInUp' : ''}`} style={{ animationDelay: `${i * 0.07}s`, '--ai-accent': s.accent }} itemScope itemType="https://schema.org/Service">
                  <div className="ai-service-card__icon-wrap"><s.Icon size={24} /></div>
                  <h3 className="ai-service-card__title" itemProp="name">{s.title}</h3>
                  <p className="ai-service-card__desc" itemProp="description">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ PROCESS — H2 + H4s ══════════════ */}
        <section className="section ai-process" ref={processRef} aria-labelledby="process-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="process-heading">How an AI project runs with us</h2>
              <p>The order matters, skipping the data assessment to jump straight to modeling is the single most common way AI projects go over budget.</p>
            </div>
            <div className="ai-process__track">
              {[
                { n:'01', Icon: IconTrendingUp, title: 'Discovery & Use-Case Selection', desc: 'We look at your data and processes and identify where AI actually has a measurable payoff, before any design work starts.' },
                { n:'02', Icon: IconSettings, title: 'Prototype', desc: 'A working prototype validates the core logic against real data before we commit to full development.' },
                { n:'03', Icon: IconDatabase, title: 'Development & Training', desc: 'We build the surrounding software and train the model on your cleaned, labeled data, validating against agreed accuracy benchmarks.' },
                { n:'04', Icon: IconCode, title: 'Deployment & Integration', desc: 'Deployed to Azure, AWS, or on-premise, and integrated with your existing systems via API, with a staged rollout rather than a single cutover.' },
                { n:'05', Icon: IconZap, title: 'Monitoring & Retraining', desc: 'We watch for model drift after launch and retrain on a schedule agreed with you — quarterly is typical, faster if your data shifts quickly.' },
              ].map((step, i) => (
                <div key={i} className={`ai-process__step animate__animated ${processInView ? 'animate__fadeInUp' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}>
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

        {/* ══════════════ ML & NLP CAPABILITIES — H2 + H3s ══════════════ */}
        <section className="section ai-ml" ref={mlRef} aria-labelledby="ml-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="ml-heading">Machine learning and NLP, in more detail</h2>
              <p>The specific capabilities behind the service categories above.</p>
            </div>
            <div className="ai-ml__layout">
              <article className={`ai-ml__col animate__animated ${mlInView ? 'animate__fadeInLeft' : ''}`}>
                <div className="ai-ml__col-header"><div className="ai-ml__col-icon"><IconCpu size={22} /></div><h3>Machine Learning</h3></div>
                <ul className="ai-ml__list" aria-label="Machine learning capabilities">
                  {[
                    { title:'Predictive Analytics & Forecasting', desc:'Demand, revenue, and churn forecasting validated against holdout data before deployment.' },
                    { title:'Real-Time Data Processing', desc:'Models that react to streaming data — useful for fraud detection and IoT applications where a delay defeats the purpose.' },
                    { title:'Recommendation Engines', desc:'Personalized product or content suggestions based on actual behavioral patterns, not rule-based guesses.' },
                    { title:'Anomaly & Fraud Detection', desc:'Statistical flagging of transactions and process deviations that rule-based thresholds miss.' },
                    { title:'Image & Pattern Recognition', desc:'Classification and segmentation for quality control, diagnostics, and access systems.' },
                  ].map((item, i) => (
                    <li key={i} className="ai-ml__item">
                      <div className="ai-ml__item-check"><IconCheckCircle size={16} /></div>
                      <div><strong>{item.title}</strong><p>{item.desc}</p></div>
                    </li>
                  ))}
                </ul>
              </article>
              <article className={`ai-ml__col animate__animated ${mlInView ? 'animate__fadeInRight' : ''}`}>
                <div className="ai-ml__col-header"><div className="ai-ml__col-icon ai-ml__col-icon--alt"><IconMessageSquare size={22} /></div><h3>Natural Language Processing</h3></div>
                <ul className="ai-ml__list" aria-label="NLP capabilities">
                  {[
                    { title:'Intelligent Chatbots & Assistants', desc:'Multi-turn conversational agents that handle escalation and intent resolution, not just scripted replies.' },
                    { title:'Sentiment & Intent Analysis', desc:'Understanding customer emotion and intent from support tickets and reviews at a volume no team could read manually.' },
                    { title:'Translation & Transcription', desc:'Real-time translation and speech-to-text across dozens of languages.' },
                    { title:'Automated Message Classification', desc:'Routing emails and tickets to the right team automatically, without manual triage.' },
                    { title:'Text Summarization & Extraction', desc:'Pulling the key facts from contracts and reports in seconds instead of hours.' },
                  ].map((item, i) => (
                    <li key={i} className="ai-ml__item">
                      <div className="ai-ml__item-check ai-ml__item-check--alt"><IconCheckCircle size={16} /></div>
                      <div><strong>{item.title}</strong><p>{item.desc}</p></div>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ══════════════ CASE STUDIES — H2 + H3s ══════════════ */}
        <section className="section ai-cases" ref={casesRef} aria-labelledby="cases-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="cases-heading">A few recent projects</h2>
              <p>Specific outcomes, not vague success language.</p>
            </div>
            <div className="ai-cases__grid">
              {[
                {
                  Icon: IconBarChart, sector: 'eCommerce', title: 'Churn Prediction for an Online Retailer',
                  problem: 'A retailer was losing customers after their first purchase with no visibility into who was at risk of not returning.',
                  solution: 'We built a model that scores churn risk in real time from behavioral signals — session depth, cart abandonment, email engagement.',
                  results: [{ metric:'15%', label:'Reduction in churn' }, { metric:'20%', label:'Increase in repeat purchases' }],
                },
                {
                  Icon: IconEye, sector: 'Healthcare', title: 'Triage Support for Medical Imaging',
                  problem: 'Radiologists were spending significant time on initial scan review before getting to actual clinical assessment.',
                  solution: 'A machine learning tool trained on labeled scans flags priority cases and pre-scores findings for radiologist review — it assists, it doesn\'t diagnose.',
                  results: [{ metric:'40%', label:'Faster initial review time' }, { metric:'3×', label:'More time for treatment planning' }],
                },
                {
                  Icon: IconShield, sector: 'FinTech', title: 'Real-Time Fraud Detection',
                  problem: 'A fintech startup was losing money to transaction fraud that rule-based thresholds weren\'t catching.',
                  solution: 'An ensemble model monitors transaction patterns continuously and flags anomalies within milliseconds.',
                  results: [{ metric:'99%', label:'Detection accuracy' }, { metric:'<50ms', label:'Decision latency' }],
                },
              ].map((c, i) => (
                <article key={i} className={`ai-case-card animate__animated ${casesInView ? 'animate__fadeInUp' : ''}`} style={{ animationDelay: `${i * 0.12}s` }}>
                  <div className="ai-case-card__header"><div className="ai-case-card__icon"><c.Icon size={20} /></div><span className="ai-case-card__sector">{c.sector}</span></div>
                  <h3 className="ai-case-card__title">{c.title}</h3>
                  <div className="ai-case-card__block"><span className="ai-case-card__block-label">Challenge</span><p>{c.problem}</p></div>
                  <div className="ai-case-card__block"><span className="ai-case-card__block-label">Solution</span><p>{c.solution}</p></div>
                  <div className="ai-case-card__results" aria-label={`Results for ${c.title}`}>
                    {c.results.map((r, j) => (
                      <div key={j} className="ai-case-card__result"><span className="ai-case-card__result-metric">{r.metric}</span><span className="ai-case-card__result-label">{r.label}</span></div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ INDUSTRIES — H2 + H3s ══════════════ */}
        <section className="section ai-industries" ref={industryRef} aria-labelledby="industries-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="industries-heading">AI across different industries</h2>
              <p>The right approach depends heavily on the sector's data formats and compliance requirements — a few examples of where we've worked.</p>
            </div>
            <div className="ai-industries__grid">
              {[
                { Icon:IconShield, sector:'Healthcare', desc:'HIPAA-aware diagnostic support tools, patient risk stratification, and medical imaging triage — always positioned as clinician support, not a replacement for one.' },
                { Icon:IconBarChart, sector:'eCommerce & Retail', desc:'Recommendation engines, demand forecasting, and NLP-powered customer service.' },
                { Icon:IconTrendingUp, sector:'Finance & FinTech', desc:'Fraud detection, credit risk scoring, and AML monitoring for regulated environments.' },
                { Icon:IconSettings, sector:'Manufacturing', desc:'Predictive maintenance and visual quality inspection on the production line.' },
                { Icon:IconCode, sector:'SaaS & Tech Startups', desc:'LLM-powered product features and usage-based personalization for B2B software.' },
              ].map((ind, i) => (
                <article key={i} className={`ai-industry-card animate__animated ${industryInView ? 'animate__fadeInUp' : ''}`} style={{ animationDelay: `${i * 0.07}s` }}>
                  <div className="ai-industry-card__icon"><ind.Icon size={20} /></div>
                  <h3 className="ai-industry-card__title">{ind.sector}</h3>
                  <p className="ai-industry-card__desc">{ind.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ TIMELINE & COST — H2 ══════════════ */}
        <section className="section ai-timeline" aria-labelledby="timeline-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="timeline-heading">Timeline and cost</h2>
              <p>
                A focused AI feature,A a document classifier or a recommendation engine — is
                usually a 6-10 week project. A full custom AI platform with a training pipeline,
                APIs, and a monitoring dashboard is more commonly 3-6 months. The single biggest
                cost driver isn't the model itself, it's the state of your data — clean, labeled
                data is fast; data that needs cleanup work adds real time upfront. We'll tell you
                which situation you're in during the discovery call. For our general engagement
                and pricing structure, see the <Link to="/pricing-and-engagement-models">pricing and engagement guide</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════ INTEGRATION — H2 + H3s ══════════════ */}
        <section className="section ai-integration" aria-labelledby="integration-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="integration-heading">Adding AI to software you already run</h2>
              <p>Most of our AI work is integration, not greenfield — connecting a model to a system that already exists and already matters to your business.</p>
            </div>
            <div className="ai-integration__main-layout">
              <div className="ai-integration__grid">
                {integrationItems.map((item, i) => (
                  <article key={i} className="ai-integration-card">
                    <div className="ai-integration-card__icon"><item.Icon size={20} /></div>
                    <h3 className="ai-integration-card__title">{item.title}</h3>
                    <p className="ai-integration-card__desc">{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="section testimonial-section" aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="sr-only">Client Reviews, QllmSoft Software Development Agency</h2>
          <TestimonialSection />
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <a href="https://www.freelancer.com/u/mrprogrmmr" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark" aria-label="View all QllmSoft verified client reviews on Freelancer">
              View All Verified Reviews on Freelancer
            </a>
          </div>
        </section>

        <FounderNote
          title="Why we turn down more AI projects than we take"
          message="A fair number of the AI inquiries we get don't actually need AI — they need a better-organized database, or a dashboard, or someone to fix a workflow that's broken for reasons that have nothing to do with machine learning. We say so when that's the case, even though it means losing the project. The AI work we do take on gets the attention it needs precisely because we're not spreading it across engagements that were never going to work in the first place."
        />

        {/* ══════════════ FAQ — H2 + FAQPage schema ══════════════ */}
        <section className="section csd-faq ai-faq" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <div className="section-title">
              <h2 id="faq-heading">Frequently Asked Questions About AI Software Development</h2>
              <p>Practical answers to what businesses ask most before starting an AI engagement.</p>
            </div>
            <div className="csd-faq__list ai-faq__list">
              {FAQ_DATA.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
            </div>
            <div style={{ textAlign:'center', marginTop:'32px', display:'flex', gap:'14px', justifyContent:'center', flexWrap:'wrap' }}>
              <Link to="/contact" className="btn btn-primary ai-btn-primary" aria-label="Contact QllmSoft with your AI development question">
                Ask Us Directly
              </Link>
              <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20an%20AI%20project!" target="_blank" rel="noopener noreferrer" className="btn ai-btn-whatsapp" aria-label="WhatsApp QllmSoft about an AI development project">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════ FINAL CTA — H2 ══════════════ */}
        <section className="section ai-cta" aria-labelledby="cta-heading">
          <div className="ai-cta__bg" aria-hidden="true" />
          <div className="container ai-cta__inner">
            <h2 id="cta-heading">Have a process an AI model could realistically improve?</h2>
            <p>
              Tell us the specific task that's costing you time or money today. If AI is the
              right fix, we'll scope it. If it isn't, we'll tell you that too.
            </p>
            <div className="ai-cta__buttons">
              <Link to="/contact" className="btn btn-primary ai-btn-primary ai-btn-cta" aria-label="Schedule a free AI consultation with QllmSoft">
                Schedule Free AI Consultation
              </Link>
              <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20an%20AI%20project!" target="_blank" rel="noopener noreferrer" className="btn ai-btn-whatsapp" aria-label="WhatsApp QllmSoft about your AI project">
                WhatsApp Us
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
            </nav>
          </div>
        </section>

      </main>
    </>
  );
};

export default AiPoweredSoftware;
