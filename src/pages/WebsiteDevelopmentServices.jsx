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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './WebsiteDevelopmentServices.css';
import 'animate.css';

/* ─── Page constants ──────────────────────────────────────── */
const PAGE_URL = 'https://qllmsoft.com/website-development-services';
const OG_IMAGE = 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg';

/* ─── JSON-LD: Organization ───────────────────────────────── */
const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'QllmSoft',
  url: 'https://qllmsoft.com',
  logo: 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+92-334-8229288',
    contactType: 'customer service',
    areaServed: ['PK', 'US', 'GB', 'AE', 'SA'],
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

/* ─── JSON-LD: Service ────────────────────────────────────── */
const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Website Development',
  name: 'Website Development Services in Pakistan',
  description:
    'QllmSoft provides expert custom website development services in Pakistan — SEO-optimized, high-performance business websites, eCommerce platforms, SaaS products, and web applications built with ASP.NET Core, React, and Angular.',
  provider: { '@type': 'Organization', name: 'QllmSoft', url: 'https://qllmsoft.com' },
  areaServed: ['Pakistan', 'United States', 'United Kingdom', 'UAE', 'Saudi Arabia'],
  url: PAGE_URL,
  offers: [
    { '@type': 'Offer', name: 'Professional Business Website', priceCurrency: 'PKR', price: '50000', description: 'SEO-optimized 5–10 page business website' },
    { '@type': 'Offer', name: 'Growth & eCommerce Platform',   priceCurrency: 'PKR', price: '100000', description: 'Custom eCommerce with JazzCash & Easypaisa integration' },
    { '@type': 'Offer', name: 'SaaS & Web Application',        priceCurrency: 'PKR', price: '250000', description: 'Enterprise SaaS and multi-tenant web applications' },
  ],
};

/* ─── JSON-LD: BreadcrumbList ─────────────────────────────── */
const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://qllmsoft.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://qllmsoft.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Website Development Services', item: PAGE_URL },
  ],
};

/* ─── FAQ data ────────────────────────────────────────────── */
const FAQ_DATA = [
  {
    q: 'What is the cost of website development in Pakistan?',
    a: 'Website development cost in Pakistan ranges from PKR 50,000 to PKR 250,000+ depending on scope. A 5–10 page professional business site starts from PKR 50,000. Custom web applications and eCommerce platforms start from PKR 100,000. QllmSoft provides free, transparent fixed-price quotes within 24 hours of your enquiry.',
  },
  {
    q: 'How long does website development take?',
    a: 'A standard custom website takes 6 to 12 weeks: 2 weeks for design and prototyping, 6–8 weeks for development, and 2 weeks for QA testing and SEO optimization. Complex SaaS or enterprise projects may take 12–20 weeks depending on scope.',
  },
  {
    q: 'Which technologies does QllmSoft use for website development?',
    a: 'We specialize in ASP.NET Core for backend, React JS and Angular for frontend, Microsoft SQL Server for databases, and Azure or AWS for cloud deployment. This stack ensures high performance, enterprise-grade security, and long-term scalability.',
  },
  {
    q: 'Will my website rank on Google Pakistan?',
    a: "Yes. We use Architectural SEO — clean semantic HTML5, optimized Core Web Vitals, structured data/schema markup, mobile-first development, and fast load times — to give your website a strong technical foundation for ranking on Google Pakistan from the day of launch.",
  },
  {
    q: 'Do you provide website maintenance and support after launch?',
    a: 'Yes. Every project includes a 30-day hyper-care period after launch — covering performance monitoring, bug fixes, security patches, and content updates. We also offer ongoing maintenance retainers for businesses that want continuous optimization and support.',
  },
  {
    q: 'Can QllmSoft build websites for businesses in Lahore, Karachi, and Islamabad?',
    a: 'Absolutely. QllmSoft serves businesses across all of Pakistan — Lahore, Karachi, Islamabad, Faisalabad, Sialkot, Gujrat, and beyond. We operate fully remotely with regular video calls, shared project portals, and transparent sprint reporting. We also serve international clients across the UK, USA, and UAE.',
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
  const answerId = `wds-faq-${index}`;
  return (
    <div
      className={`faq-item ${open ? 'faq-item--open' : ''}`}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        className="faq-question"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={answerId}
        itemProp="name"
      >
        <span>{faq.q}</span>
        <span className="faq-icon" aria-hidden="true">{open ? '−' : '+'}</span>
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

  const { ref: expertiseRef,     inView: expertiseInView     } = useInView({ triggerOnce: true, threshold: 0.1  });
  const { ref: servicesRef,      inView: servicesInView      } = useInView({ triggerOnce: true, threshold: 0.1  });
  const { ref: processRef,       inView: processInView       } = useInView({ triggerOnce: true, threshold: 0.1  });
  const { ref: techRef,          inView: techInView          } = useInView({ triggerOnce: true, threshold: 0.15 });
  const { ref: citiesRef,        inView: citiesInView        } = useInView({ triggerOnce: true, threshold: 0.1  });
  const { ref: localRef,         inView: localInView         } = useInView({ triggerOnce: true, threshold: 0.1  });
  const { ref: comparisonRef,    inView: comparisonInView    } = useInView({ triggerOnce: true, threshold: 0.1  });
  const { ref: whyRef,           inView: whyInView           } = useInView({ triggerOnce: true, threshold: 0.1  });
  const { ref: testimonialsRef,  inView: testimonialsInView  } = useInView({ triggerOnce: true, threshold: 0.1  });
  const { ref: pricingRef,       inView: pricingInView       } = useInView({ triggerOnce: true, threshold: 0.1  });

  return (
    <>
      {/* ══════════════════════════════════════════════════
          SEO HEAD
      ══════════════════════════════════════════════════ */}
      <Helmet>
        {/* Primary */}
        <title>Website Development Services in Pakistan | QllmSoft</title>
        <meta
          name="description"
          content="Expert custom website development services in Pakistan. QllmSoft builds high-performance, SEO-optimized websites, eCommerce platforms, SaaS products and web apps for startups and enterprises using .NET, React and Angular."
        />
        <meta
          name="keywords"
          content="website development services Pakistan, web development company Pakistan, custom website development Pakistan, eCommerce website development Pakistan, ASP.NET Core web development, React web development Pakistan, SEO-optimized website Pakistan, web application development Pakistan, website development Lahore Karachi Islamabad"
        />
        <meta name="author"  content="QllmSoft" />
        <meta name="robots"  content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type"         content="website" />
        <meta property="og:url"          content={PAGE_URL} />
        <meta property="og:site_name"    content="QllmSoft" />
        <meta property="og:title"        content="Website Development Services in Pakistan | QllmSoft" />
        <meta property="og:description"  content="Expert custom website development in Pakistan. High-performance, SEO-optimized websites, eCommerce platforms and web apps built with .NET, React, and Angular." />
        <meta property="og:image"        content={OG_IMAGE} />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt"    content="QllmSoft Website Development Services Pakistan" />
        <meta property="og:locale"       content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Website Development Services in Pakistan | QllmSoft" />
        <meta name="twitter:description" content="Expert custom website development in Pakistan — SEO-optimized, high-performance sites built with .NET, React, and Angular." />
        <meta name="twitter:image"       content={OG_IMAGE} />
        <meta name="twitter:image:alt"   content="QllmSoft Website Development Services Pakistan" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="wds-page" role="main">

        {/* ── BREADCRUMB ───────────────────────────────── */}
        <nav className="csd-breadcrumb" aria-label="Breadcrumb navigation">
          <div className="container">
            <ol
              className="csd-breadcrumb__list"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <Link to="/" itemProp="item"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <span aria-hidden="true" className="csd-breadcrumb__sep">›</span>
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <Link to="/services" itemProp="item"><span itemProp="name">Services</span></Link>
                <meta itemProp="position" content="2" />
              </li>
              <span aria-hidden="true" className="csd-breadcrumb__sep">›</span>
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Website Development Services</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* ══════════════════════════════════════════════════
            HERO — single H1
        ══════════════════════════════════════════════════ */}
        <header className="wds-hero">
          <div className="container">
            <p className="csd-hero__eyebrow">#1 Web Development Company in Pakistan</p>

            {/* ✅ SINGLE H1 */}
            <h1 className="wds-hero__title">
              Expert Website Development Services in <em>Pakistan</em>
            </h1>

            <p className="wds-hero__sub">
              We don't just build websites — we engineer high-performance digital assets that rank on
              Google Pakistan, load in under 2 seconds on any mobile connection, and convert visitors
              into high-value leads.
            </p>

            <div className="csd-hero__buttons">
              <Link
                to="/contact"
                className="btn btn-primary"
                aria-label="Get a free website development consultation from QllmSoft Pakistan"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/projects"
                className="btn btn-outline-light"
                aria-label="View QllmSoft website development case studies and portfolio"
              >
                View Case Studies
              </Link>
            </div>

            {/* Trust badges */}
            <div className="wds-hero__trust" aria-label="Trust indicators">
              <span>5-Star Upwork Rating</span>
              <span className="wds-trust-sep" aria-hidden="true">|</span>
              <span>10+ Years Experience</span>
              <span className="wds-trust-sep" aria-hidden="true">|</span>
              <span>100% Job Success</span>
            </div>

            {/* Feature pills */}
            <div className="wds-hero__pills" aria-label="Core engineering capabilities">
              {[
                { icon: '⚙️', title: 'Zero Code Bloat',        desc: 'Clean, semantic HTML5 architecture — no unnecessary plugins' },
                { icon: '⚡', title: 'Core Web Vitals Ready',   desc: "Sub-2-second load times on Pakistan's 4G networks" },
                { icon: '🔍', title: 'Architectural SEO',       desc: 'Built to rank on Google Pakistan from day one' },
                { icon: '🛡️', title: 'Enterprise Security',    desc: 'OWASP-compliant, SSL-secured, API-protected' },
              ].map(p => (
                <div key={p.title} className="wds-hero__pill">
                  <span className="wds-pill-icon" aria-hidden="true">{p.icon}</span>
                  <div>
                    <strong>{p.title}</strong>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="wds-hero__stats" aria-label="QllmSoft key statistics">
              {[
                { num: '10+',   label: 'Years of Experience'      },
                { num: '100%',  label: 'Upwork Job Success'        },
                { num: '120+',  label: 'Websites Delivered'        },
                { num: '5★',    label: 'Average Client Rating'     },
                { num: '30-Day',label: 'Post-Launch Support'       },
              ].map(s => (
                <div key={s.label} className="wds-hero__stat">
                  <span className="wds-hero__stat-num">{s.num}</span>
                  <span className="wds-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ══════════════════════════════════════════════════
            INTRO / EXPERTISE  —  H2
        ══════════════════════════════════════════════════ */}
        <section
          className="section wds-intro"
          ref={expertiseRef}
          aria-labelledby="expertise-heading"
        >
          <div className="container">
            <p className="section-eyebrow">Expert Web Engineering</p>
            <div className="section-title">
              <h2 id="expertise-heading">Custom Website Development Services in Pakistan</h2>
            </div>

            <div className="wds-intro__layout">
              <div className={`wds-intro__text animate__animated ${expertiseInView ? 'animate__fadeInLeft' : ''}`}>
                <p>
                  QllmSoft engineers high-performance <strong>SaaS platforms, corporate portals,{' '}
                  <Link to="/web-application-development-services">web applications</Link>, and custom
                  eCommerce ecosystems</strong>. We specialize in helping growth-stage startups and
                  established SMBs transition from restrictive DIY templates to scalable,
                  enterprise-grade digital infrastructure.
                </p>
                <p>
                  Generic website builders hide <strong>"technical debt"</strong> — bloated code that
                  kills your SEO scores and limits your security posture. Our custom-coded solutions
                  prioritize clean architecture, ensuring your website remains fast, secure, and flexible
                  as you scale from local operations across Pakistan to global markets.
                </p>
                <p>
                  We offer specific services for{' '}
                  <Link to="/mobile-app-development">mobile applications</Link>, and enterprise SaaS —
                  ensuring seamless integration and optimal performance at every layer of your digital
                  stack. For organizations requiring cross-platform systems, our{' '}
                  <Link to="/custom-software-development-services">
                    custom software development services
                  </Link>{' '}
                  provide complete engineering coverage.
                </p>

                <div className="wds-intro__cta">
                  <a
                    href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20a%20website%20project!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    aria-label="Consult QllmSoft engineers on WhatsApp about website development"
                  >
                    Consult Our Engineers
                  </a>
                </div>
              </div>

              <aside
                className={`wds-intro__specs animate__animated ${expertiseInView ? 'animate__fadeInRight' : ''}`}
                aria-label="Core specializations"
              >
                <h3 className="wds-intro__specs-title">Core Specializations</h3>
                <ul className="wds-intro__specs-list">
                  {[
                    'Enterprise Web Applications',
                    'Fintech & Payment Portals',
                    'B2B Lead-Generation Engines',
                    'Custom CMS Development',
                    'Real-time Dashboards & Analytics',
                    'eCommerce with PK Payment Gateways',
                  ].map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            LEGACY / CREDENTIALS  —  H2 + H3s
        ══════════════════════════════════════════════════ */}
        <section className="section wds-legacy" aria-labelledby="legacy-heading">
          <div className="container">
            <p className="section-eyebrow">Enterprise Legacy</p>
            <div className="section-title">
              <h2 id="legacy-heading">10+ Years of Software Excellence</h2>
              <p>
                QllmSoft is a premier Pakistani engineering firm delivering complex digital
                infrastructure to a global clientele across the UK, USA, UAE, and Pakistan.
              </p>
            </div>
            <div className="wds-legacy__grid">
              {[
                { icon: '🏛️', title: 'Institutional Depth',           label: 'Since 2015',        desc: 'A collective expertise spanning 10+ years in architecting mission-critical systems and enterprise-level software solutions for clients from Karachi to California.' },
                { icon: '🔄', title: 'End-to-End Engineering',         label: 'Full-Lifecycle',     desc: 'From legacy system modernization to modern cloud-native architectures — we manage the entire SDLC for Pakistani and international enterprises.' },
                { icon: '🏢', title: 'Established Engineering Hub',    label: 'HQ in Pakistan',     desc: 'A full-scale software house operating from our Pakistan headquarters — providing institutional accountability and a permanent local presence.' },
                { icon: '🏆', title: 'Verified Marketplace Authority', label: 'Top-Rated Plus',     desc: 'Top-Rated Plus status and a 100% Job Success Score on global platforms — reflecting years of consistent, on-time, on-budget delivery.' },
                { icon: '🛡️', title: '30-Day Hyper-Care Support',     label: '24/7 Emergency',     desc: "Every project ships with 30-day post-launch support and 24/7 emergency response — because we're here for the long term." },
              ].map((c, i) => (
                <article key={i} className="wds-legacy__card">
                  <span className="wds-legacy__card-badge">{c.label}</span>
                  <span className="wds-legacy__card-icon" aria-hidden="true">{c.icon}</span>
                  <h3 className="wds-legacy__card-title">{c.title}</h3>
                  <p className="wds-legacy__card-desc">{c.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SERVICES  —  H2 + H3s
        ══════════════════════════════════════════════════ */}
        <section
          className="section wds-services"
          ref={servicesRef}
          aria-labelledby="services-heading"
        >
          <div className="container">
            <p className="section-eyebrow">Engineering the Future</p>
            <div className="section-title">
              <h2 id="services-heading">Our Website Development Services</h2>
              <p>
                We don't build websites — we engineer <strong>digital assets</strong>. From
                high-concurrency portals to bespoke enterprise applications, we solve the technical
                bottlenecks that stifle business growth in Pakistan's competitive digital landscape.
              </p>
            </div>

            <div className="wds-services__grid">
              {[
                {
                  num: '01',
                  title: 'Business Website Development',
                  desc: "Transform your corporate identity into a lead-generation engine. We focus on high-authority designs that load instantly and communicate value immediately. By eliminating technical debt and prioritizing Core Web Vitals, we ensure your first impression is both professional and permanent.",
                  tags: ['High-Authority UI', 'Lead Capture', 'Core Web Vitals'],
                },
                {
                  num: '02',
                  title: 'eCommerce Website Development',
                  desc: 'Own your customer journey with custom digital storefronts. We build secure, high-transaction ecosystems that handle peak traffic without latency — with frictionless checkout flows and JazzCash, Easypaisa, and Stripe integration built in from the start.',
                  tags: ['JazzCash / Easypaisa', 'Scalable Inventory', 'Secure Checkout'],
                },
                {
                  num: '03',
                  title: 'Custom Web Application Development',
                  desc: 'When off-the-shelf software fails your business logic, we engineer the solution. From internal ERPs to client-facing SaaS platforms — tailored web applications that automate manual processes and integrate seamlessly with your existing data infrastructure.',
                  tags: ['Bespoke Architecture', 'API-First', 'Process Automation'],
                },
                {
                  num: '04',
                  title: 'SaaS Platform Development',
                  desc: "Build scalable, multi-tenant SaaS products with subscription billing, role-based access, real-time dashboards, and cloud-native deployment on Azure or AWS — designed for rapid customer acquisition in Pakistan's growing SaaS market.",
                  tags: ['Multi-Tenant', 'Azure / AWS', 'Subscription Billing'],
                },
                {
                  num: '05',
                  title: 'Website Redesign & Performance Optimization',
                  desc: 'Modernize legacy assets without losing SEO equity. We perform deep-tier architectural audits to identify performance leaks — upgrading speed, security, and mobile responsiveness to meet current Google algorithm requirements.',
                  tags: ['Core Web Vitals', 'UX Modernization', 'Security Hardening'],
                },
                {
                  num: '06',
                  title: 'SEO-Optimized Web Development',
                  desc: 'Every website we build is a ranking machine from day one. Architectural SEO, schema markup, semantic HTML5, page speed optimization, and mobile-first development — baked into the code, not bolted on afterward.',
                  tags: ['Architectural SEO', 'Schema Markup', 'Mobile-First'],
                },
              ].map((s, i) => (
                <article
                  key={i}
                  className={`wds-service-card animate__animated ${servicesInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <span className="wds-service-card__num" aria-hidden="true">{s.num}</span>
                  <h3 className="wds-service-card__title" itemProp="name">{s.title}</h3>
                  <p className="wds-service-card__desc" itemProp="description">{s.desc}</p>
                  <div className="wds-service-card__tags" aria-label="Service features">
                    {s.tags.map(t => <span key={t} className="wds-tag">{t}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            PROCESS  —  H2 + H4s
        ══════════════════════════════════════════════════ */}
        <section
          className="section wds-process"
          ref={processRef}
          aria-labelledby="process-heading"
        >
          <div className="container">
            <p className="section-eyebrow">The Roadmap</p>
            <div className="section-title">
              <h2 id="process-heading">Our Website Development Process</h2>
              <p>
                A precision-led engineering workflow designed to move your project from concept to
                high-performance launch — with full transparency at every milestone.
              </p>
            </div>

            <div className="wds-process__image-wrap">
              <img
                src="https://qllmsoft.com/images/web-development-process.webp"
                alt="QllmSoft agile website development process Pakistan — 6-stage engineering workflow"
                loading="lazy"
                width="900"
                height="400"
              />
              <p className="wds-process__note">
                <strong>Note:</strong> We use Agile Scrum methodologies — every sprint is documented
                and shared with you in real time via our project portal.
              </p>
            </div>

            <ol className="wds-process__steps" aria-label="Website development process steps">
              {[
                { n:'01', title:'Architecture & Blueprinting',   highlight: false, desc:'We map your operational workflows and data structures. This stage ensures the technical foundation aligns with your business logic before a single line of code is written.' },
                { n:'02', title:'Interactive Prototyping',        highlight: false, desc:'Experience your site through high-fidelity wireframes. We validate user pathways to ensure the interface meets expectations before committing to full development.' },
                { n:'03', title:'Agile Engineering Sprints',      highlight: true,  desc:'Developers work in 2-week transparent sprints with regular staging access. You see real progress — not just status updates.' },
                { n:'04', title:'QA & Security Audit',            highlight: false, desc:'Rigorous stress-testing, SEO validation, and security sweeps before any code touches production.' },
                { n:'05', title:'Live Deployment',                highlight: false, desc:'Zero-downtime migration to your live domain with DNS management handled by our team.' },
                { n:'06', title:'30-Day Hyper-Care',              highlight: false, desc:'Post-launch monitoring, performance tuning, and bug-fixing at no additional cost.' },
              ].map((step, i) => (
                <li
                  key={i}
                  className={`wds-process__step ${step.highlight ? 'wds-process__step--active' : ''} animate__animated ${processInView ? 'animate__fadeInLeft' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="wds-process__step-num" aria-label={`Step ${step.n}`}>{step.n}</div>
                  <div className="wds-process__step-body">
                    <h4>
                      {step.highlight && <span className="wds-process__in-progress">IN PROGRESS</span>}
                      {step.title}
                    </h4>
                    <p>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            TECH STACK  —  H2 + H3s
        ══════════════════════════════════════════════════ */}
        <section
          className="section wds-tech"
          ref={techRef}
          aria-labelledby="tech-heading"
        >
          <div className="container">
            <p className="section-eyebrow">Technology We Use</p>
            <div className="section-title">
              <h2 id="tech-heading">Technology Stack for Website Development</h2>
              <p>
                We choose technologies based on architectural stability and long-term maintainability —
                not what's trending. Every stack decision is made to keep your site performant and
                secure 5 years from now.
              </p>
            </div>

            <div className="wds-tech__grid">
              {[
                {
                  title: 'Frontend & UI',
                  items: [
                    { name: 'React & Angular',           desc: 'Highly responsive, state-driven user interfaces for web apps and SPAs.' },
                    { name: 'Modern CSS / SASS',          desc: 'Pixel-perfect, mobile-first responsiveness across every device.' },
                    { name: 'Progressive Web Apps',       desc: 'Native-app experiences delivered through the browser.' },
                  ],
                },
                {
                  title: 'Backend & API',
                  items: [
                    { name: 'ASP.NET Core',              desc: 'Our primary framework for secure, enterprise-level server-side logic.' },
                    { name: 'Node.js',                   desc: 'Real-time applications and scalable microservices architecture.' },
                    { name: 'RESTful & GraphQL APIs',    desc: 'Seamless integration with payment gateways, CRMs, and ERP systems.' },
                  ],
                },
                {
                  title: 'Data & Infrastructure',
                  items: [
                    { name: 'MS SQL Server',             desc: 'Robust relational data management for complex query handling.' },
                    { name: 'Entity Framework',           desc: 'Streamlined data access layers for faster development cycles.' },
                    { name: 'Azure & AWS',                desc: 'Cloud deployment for 99.9% uptime and auto-scaling under load.' },
                  ],
                },
              ].map((col, i) => (
                <article
                  key={i}
                  className={`wds-tech__col animate__animated ${techInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <h3 className="wds-tech__col-title">{col.title}</h3>
                  <ul className="wds-tech__list">
                    {col.items.map(item => (
                      <li key={item.name} className="wds-tech__list-item">
                        <strong>{item.name}:</strong> {item.desc}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
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
            <p className="section-eyebrow">Local Impact</p>
            <div className="section-title">
              <h2 id="cities-heading">Website Development Services Across Pakistan</h2>
              <p>
                From the industrial hubs to the tech capitals, we engineer digital solutions tailored
                to the unique economic landscape of each major city in Pakistan.
              </p>
            </div>
            <div className="wds-cities__grid">
              {[
                { icon: '🚀', city: 'Lahore',              segment: 'Startups & Software Houses', desc: "The heart of Pakistan's tech ecosystem. We help Lahori startups build MVPs and scalable SaaS products that attract global VC funding and freelance contracts." },
                { icon: '🏢', city: 'Karachi',             segment: 'Corporate & Large eCommerce', desc: "Powering the financial capital. High-concurrency enterprise portals and robust B2B platforms for Karachi's corporate giants and eCommerce leaders." },
                { icon: '⚖️', city: 'Islamabad',           segment: 'Gov-Tech & Digital Agencies', desc: 'Precision engineering for the capital. Secure, high-authority web systems for government bodies, embassies, and digital-first agencies.' },
                { icon: '📦', city: 'Sialkot & Faisalabad', segment: 'Export-Based Manufacturers', desc: 'Digitalizing the export sector. Global-standard manufacturing portals that help Pakistani exporters showcase capacity to international buyers.' },
              ].map((c, i) => (
                <article
                  key={i}
                  className={`wds-city-card animate__animated ${citiesInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="wds-city-card__icon" aria-hidden="true">{c.icon}</span>
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
        ══════════════════════════════════════════════════ */}
        <section
          className="section wds-local"
          ref={localRef}
          aria-labelledby="local-heading"
        >
          <div className="container">
            <p className="section-eyebrow">Engineered for Pakistan</p>
            <div className="section-title">
              <h2 id="local-heading">Optimized for the Pakistani Digital Market</h2>
              <p>
                We solve the bottlenecks that slow down Pakistani businesses — from payment friction
                to connectivity challenges on 3G/4G networks.
              </p>
            </div>
            <div className="wds-local__grid">
              {[
                { icon: '💳', title: 'Local Payment Gateway Integration', desc: 'Seamless checkout with JazzCash, Easypaisa, 2Checkout, and Checkout.com. We ensure your revenue reaches your account securely and reliably.' },
                { icon: '⚡', title: 'Low-Bandwidth Optimization',         desc: "Pakistan's mobile users run on 3G/4G. We optimize every kilobyte so your site loads instantly even on unstable connections in rural Punjab or urban Karachi." },
                { icon: '🚚', title: 'Local Logistics Integration',        desc: 'Automate fulfillment with TCS, Leopards, and Trax API integrations — syncing orders with courier tracking systems in real time.' },
              ].map((l, i) => (
                <article
                  key={i}
                  className={`wds-local-card animate__animated ${localInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <span className="wds-local-card__icon" aria-hidden="true">{l.icon}</span>
                  <h3 className="wds-local-card__title">{l.title}</h3>
                  <p className="wds-local-card__desc">{l.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            PERFORMANCE ANALYSIS (Template Warning)  —  H2 + H3s
        ══════════════════════════════════════════════════ */}
        <section className="section wds-perf" aria-labelledby="perf-heading">
          <div className="container">
            <p className="section-eyebrow">Performance Analysis</p>
            <div className="section-title">
              <h2 id="perf-heading">
                Why Generic Templates Are Killing Your Business Growth in Pakistan
              </h2>
              <p>
                In Pakistan, <strong>over 90% of web traffic comes from mobile devices</strong>, often
                on 3G or 4G. A cheap template looks fine on an office laptop — and fails completely
                on the streets.
              </p>
            </div>
            <div className="wds-perf__grid">
              {[
                { title: 'The Code Bloat Crisis',            desc: "Standard templates carry thousands of lines of unnecessary CSS and JS for features you'll never use. This code bloat causes frozen screens on budget smartphones and instant bounce rates on mobile Google searches." },
                { title: 'The SEO Technical Debt Problem',   desc: "Google's algorithms prioritize Core Web Vitals. Templates fail the LCP test because they load generic sliders and heavy fonts before your actual content. If your site doesn't load in under 2 seconds on 4G, you will never rank on page one of Google Pakistan." },
                { title: 'The Security Vulnerability',       desc: '90% of all WordPress sites are running outdated plugins with known CVEs. A custom-coded site eliminates this attack surface entirely — protecting your business data and your customers\' trust.' },
              ].map((p, i) => (
                <article key={i} className="wds-perf__card">
                  <h3 className="wds-perf__card-title">{p.title}</h3>
                  <p className="wds-perf__card-desc">{p.desc}</p>
                </article>
              ))}
            </div>

            {/* Speed comparison */}
            <div className="wds-perf__comparison" aria-label="Load speed comparison">
              <div className="wds-perf__stat">
                <span className="wds-perf__stat-num">90%</span>
                <span className="wds-perf__stat-label">Mobile Internet Users in Pakistan</span>
              </div>
              <div className="wds-perf__bar-wrap">
                <div className="wds-perf__bar-row">
                  <span>Custom Code (QllmSoft)</span>
                  <div className="wds-perf__bar wds-perf__bar--fast" role="meter" aria-label="~1.4 seconds load time" aria-valuenow="24" aria-valuemin="0" aria-valuemax="100">
                    <span className="wds-perf__bar-label">~1.4s</span>
                  </div>
                </div>
                <div className="wds-perf__bar-row">
                  <span>Generic WordPress Template</span>
                  <div className="wds-perf__bar wds-perf__bar--slow" role="meter" aria-label="~5.8 seconds load time" aria-valuenow="97" aria-valuemin="0" aria-valuemax="100">
                    <span className="wds-perf__bar-label">~5.8s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            COMPARISON TABLE  —  H2
        ══════════════════════════════════════════════════ */}
        <section
          className="section wds-comparison"
          ref={comparisonRef}
          aria-labelledby="comparison-heading"
        >
          <div className="container">
            <p className="section-eyebrow">The QllmSoft Edge</p>
            <div className="section-title">
              <h2 id="comparison-heading">
                QllmSoft vs Other Web Development Options in Pakistan
              </h2>
              <p>
                Not all web development is equal. See why Pakistan's growing businesses choose
                QllmSoft over freelancers and template agencies.
              </p>
            </div>

            <div className="wds-table-wrap">
              <table
                className={`wds-comparison-table animate__animated ${comparisonInView ? 'animate__fadeInUp' : ''}`}
                aria-label="Comparison of QllmSoft vs Freelancer vs Template Agency for web development in Pakistan"
              >
                <thead>
                  <tr>
                    <th scope="col">Key Factor</th>
                    <th scope="col" className="wds-col--highlight">✦ QllmSoft</th>
                    <th scope="col">Typical Freelancer</th>
                    <th scope="col">Cheap Template Agency</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { factor: 'Full Code Ownership',  q: '✔ 100% Full Ownership',       f: '✘ Often Restricted',      t: '✘ Proprietary Lock-in'      },
                    { factor: 'SEO from Day One',      q: '✔ Architectural SEO',          f: '⚠ Basic Meta Tags Only',  t: '✘ Bloated Code (Anti-SEO)'  },
                    { factor: 'Post-Launch Support',   q: '✔ 30-Day Hyper-Care',          f: '✘ Unreliable Availability',t: '⚠ Paid Ticket System'       },
                    { factor: 'Technical Debt',        q: '✔ Zero Bloat',                 f: '⚠ Variable Quality',      t: '✘ High (Template-Based)'    },
                    { factor: 'Core Web Vitals',       q: '✔ Built-In Optimization',      f: '⚠ Depends on Skill Level', t: '✘ Rarely Optimized'        },
                    { factor: 'Security Standard',     q: '✔ OWASP Compliant',            f: '⚠ Basic SSL Only',        t: '✘ Plugin Vulnerabilities'   },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="wds-col--factor">{row.factor}</td>
                      <td className="wds-col--highlight wds-col--good">{row.q}</td>
                      <td>{row.f}</td>
                      <td>{row.t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            WHY CHOOSE US  —  H2 + H3s
        ══════════════════════════════════════════════════ */}
        <section
          className="section wds-why"
          ref={whyRef}
          aria-labelledby="why-heading"
        >
          <div className="container">
            <p className="section-eyebrow">Why QllmSoft</p>
            <div className="section-title">
              <h2 id="why-heading">
                Why Choose QllmSoft for Website Development in Pakistan
              </h2>
              <p>
                We provide verified engineering expertise, moving beyond basic web design to deliver
                high-concurrency, secure digital infrastructure built to rank and scale.
              </p>
            </div>

            <div className="why-grid">
              {[
                { num:'01', title:'Bespoke Architecture — Zero Template Bloat', desc:'Every line of code is written to support your specific business logic using .NET, React, and Angular — ensuring a lightweight, rankable digital asset with no unnecessary dependencies.' },
                { num:'02', title:'Verified Global Track Record',               desc:'Our expertise is validated by a history of successful international deliveries. We maintain top-tier ratings on Upwork and Freelancer.com, serving clients across the UK, USA, UAE, and Pakistan.' },
                { num:'03', title:'Enterprise-Grade Security (OWASP)',          desc:'Security is not an afterthought. We implement OWASP best practices, SSL encryption, and secure API integrations to protect your data and your customers.' },
                { num:'04', title:'Performance-First Engineering',              desc:'Our focus on Core Web Vitals guarantees fast-loading, mobile-responsive interfaces that lower bounce rates and improve organic search visibility on Google Pakistan.' },
                { num:'05', title:'Full-Lifecycle Accountability',              desc:"From initial blueprinting to post-launch maintenance — we manage the entire SDLC. We don't hand over a site and disappear. We provide 30-day hyper-care to ensure operational stability." },
              ].map((w, i) => (
                <article
                  key={i}
                  className={`why-card animate__animated ${whyInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="wds-why__num" aria-hidden="true">{w.num}</span>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </article>
              ))}
            </div>

            {/* Marketplace verification */}
            <div className="wds-why__verification" aria-label="Verified marketplace profiles">
              <h3 className="wds-why__verification-title">Independently Verified on Upwork &amp; Freelancer</h3>
              <p>Our reputation is backed by third-party independent reviews — not just what we say about ourselves.</p>
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

        {/* ══════════════════════════════════════════════════
            TESTIMONIALS  —  H2 + Review microdata
        ══════════════════════════════════════════════════ */}
        <section
          className="section csd-testimonials"
          ref={testimonialsRef}
          aria-labelledby="testimonials-heading"
        >
          <div className="container">
            <p className="section-eyebrow">Client Reviews</p>
            <div className="section-title">
              <h2 id="testimonials-heading">What Our Global Clients Say</h2>
              <p>
                Independent, verified reviews from real clients on Freelancer and Upwork — from the
                UK, USA, UAE, Saudi Arabia, and Jordan.
              </p>
            </div>
            <div className="csd-testimonials__grid">
              {[
                { name:'Khalid A.',    location:'Riyadh, Saudi Arabia',   img:'https://qllmsoft.com/images/khalid A.webp',   text:'"Great work with a great programmer team. Delivered everything exactly as discussed and on time."' },
                { name:'Mohammad I.', location:'Amman, Jordan',           img:'https://qllmsoft.com/images/Muhammad I.webp', text:'"As always, great work. QllmSoft is my reliable choice for store builds and web application logic. The quality of code and communication is consistently excellent. Highly recommended."' },
                { name:'Neil P.',     location:'Cardiff, United Kingdom', img:'https://qllmsoft.com/images/Neil P.webp',     text:'"Fantastic work. Excellent communication throughout, and the final result was exactly what we needed. I will continue to use QllmSoft for future projects without hesitation."' },
                { name:'Fernando M.', location:'Miramar, United States',  img:'https://qllmsoft.com/images/fernandoM.webp',  text:'"Very pleasant developer to collaborate with. QllmSoft consistently delivers a high standard of code, clean architecture, and professional results on every engagement."' },
              ].map((t, i) => (
                <article
                  key={i}
                  className="csd-testimonial-card"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div
                    className="csd-testimonial-card__stars"
                    aria-label="5 out of 5 stars"
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                  >
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating"  content="5" />
                    ★★★★★
                  </div>
                  <p className="csd-testimonial-card__text" itemProp="reviewBody">{t.text}</p>
                  <div
                    className="csd-testimonial-card__author"
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <img
                      src={t.img}
                      alt={`${t.name} — verified QllmSoft website development client review from ${t.location}`}
                      loading="lazy"
                      width="48"
                      height="48"
                    />
                    <div>
                      <strong itemProp="name">{t.name}</strong>
                      <span>{t.location} — Freelancer</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div style={{ textAlign:'center', marginTop:'30px' }}>
              <a
                href="https://www.freelancer.com/u/mrprogrmmr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
                aria-label="View all QllmSoft verified website development reviews on Freelancer"
              >
                View All Verified Reviews on Freelancer
              </a>
            </div>
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
            <p className="section-eyebrow">Investment Guide</p>
            <div className="section-title">
              <h2 id="pricing-heading">
                Transparent Pricing for Website Development in Pakistan
              </h2>
              <p>
                We provide value-based, transparent pricing — no hidden charges, no scope creep
                surprises. Every quote is fixed-price after a free requirement analysis.
              </p>
            </div>

            <div className="wds-pricing__grid">
              {[
                {
                  tier: 'Entry Tier',
                  title: 'Professional Business Website',
                  price: 'PKR 50,000 – 75,000',
                  popular: false,
                  desc: 'Ideal for professional service firms needing a high-converting, 5–10 page SEO-optimized authority site with contact forms, Google Analytics, and mobile optimization.',
                },
                {
                  tier: 'Most Popular',
                  title: 'Growth & eCommerce Platform',
                  price: 'PKR 100,000 – 250,000',
                  popular: true,
                  desc: 'Custom-built platforms with advanced lead tracking, JazzCash/Easypaisa integration, inventory management, and high-scale SEO architectures for growing Pakistani businesses.',
                },
                {
                  tier: 'Enterprise Tier',
                  title: 'SaaS & Web Application',
                  price: 'PKR 250,000+',
                  popular: false,
                  desc: 'Complex multi-tenant SaaS platforms, enterprise portals, ERP integrations, and real-time dashboards — priced on scope after detailed technical discovery.',
                },
              ].map((p, i) => (
                <article
                  key={i}
                  className={`wds-pricing-card ${p.popular ? 'wds-pricing-card--popular' : ''} animate__animated ${pricingInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <span className="wds-pricing-card__tier">{p.tier}</span>
                  <h3 className="wds-pricing-card__title">{p.title}</h3>
                  <p className="wds-pricing-card__price" itemProp="price">{p.price}</p>
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

            <div className="wds-pricing__factors" aria-label="Factors affecting website development cost">
              <h3 className="wds-pricing__factors-title">What determines the final project cost?</h3>
              <ul className="wds-pricing__factors-list">
                {[
                  { icon:'⚡', label:'Custom Functionality & APIs' },
                  { icon:'🎨', label:'UI/UX Design Complexity'     },
                  { icon:'✍️', label:'Content & Copywriting'       },
                  { icon:'🚀', label:'Timeline & Urgency'          },
                  { icon:'📊', label:'SEO Technical Scope'         },
                  { icon:'🔗', label:'Third-Party Integrations'    },
                ].map(f => (
                  <li key={f.label} className="wds-pricing__factor">
                    <span aria-hidden="true">{f.icon}</span> {f.label}
                  </li>
                ))}
              </ul>
              <p className="wds-pricing__cta-text">
                Read our full{' '}
                <Link to="/website-development-cost-in-pakistan">
                  website development cost guide for Pakistan
                </Link>{' '}
                — or get a custom quote within 24 hours.
              </p>
              <Link
                to="/contact"
                className="btn btn-primary"
                aria-label="Request a detailed website development proposal from QllmSoft"
              >
                Request a Detailed Proposal
              </Link>
            </div>
          </div>
        </section>

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
            <p className="section-eyebrow">Knowledge Base</p>
            <div className="section-title">
              <h2 id="faq-heading">
                Website Development FAQs — Pakistan
              </h2>
              <p>
                Everything you need to know about our web development process, costs, and timelines.
              </p>
            </div>
            <div className="csd-faq__list">
              {FAQ_DATA.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            FINAL CTA  —  H2
        ══════════════════════════════════════════════════ */}
        <section className="section csd-final-cta" aria-labelledby="cta-heading">
          <div className="container">
            <div className="csd-final-cta__content">
              <p className="section-eyebrow" style={{ color: '#edb702' }}>Let's Get Started</p>
              <h2 id="cta-heading">
                Ready to Build a Website That Drives Real Results in Pakistan?
              </h2>
              <p>
                Your website should do more than exist — it should attract organic traffic, convert
                high-value leads, and scale alongside your business. Let's engineer yours.
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
              <p style={{ color:'rgba(255,255,255,0.75)', marginTop:'16px', fontSize:'0.9rem' }}>
                Questions? Visit our{' '}
                <Link to="/blog" style={{ color:'#edb702' }}>Expert Blog</Link>{' '}
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
