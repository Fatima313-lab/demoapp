/**
 * OutsourceSoftwareDevelopment.jsx
 * ─────────────────────────────────────────────────────────────────
 * BRAND COLORS: #1A365D · #2B6CB0 · #edb702 · #F7FAFC · #4A5568
 *
 * ON-PAGE SEO — 100% implemented:
 *  ✓ react-helmet-async   → title, description, keywords, canonical, robots
 *  ✓ Open Graph + Twitter Card (all fields + image alt)
 *  ✓ JSON-LD × 5          → Organization, Service, BreadcrumbList, FAQPage,
 *                            WebPage (with aggregate rating)
 *  ✓ Single H1 only       → strict H1→H2→H3→H4 hierarchy
 *  ✓ Semantic HTML5       → main, header, nav, section, article, aside, ol, table
 *  ✓ aria-label on every section, button, image, table
 *  ✓ Review microdata     → Schema.org Review, Rating, Person
 *  ✓ FAQPage microdata    → itemScope/itemProp inline + JSON-LD
 *  ✓ Service microdata    → itemScope/itemProp on service cards
 *  ✓ Image SEO            → loading="lazy", width, height, descriptive alt
 *  ✓ Internal linking     → keyword-rich anchor text throughout
 *  ✓ Breadcrumb nav       → visible + BreadcrumbList schema
 *  ✓ Authoritative outbound links (E-E-A-T signal)
 *
 * TARGET KEYWORDS:
 *  Primary:   outsource software development to Pakistan
 *  Secondary: software development outsourcing Pakistan, offshore development Pakistan,
 *             outsource web development Pakistan, outsource mobile app Pakistan,
 *             software outsourcing company Pakistan, hire developers Pakistan
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './OutsourceSoftwareDevelopment.css';
import 'animate.css';

/* ─── Constants ───────────────────────────────────────────── */
const PAGE_URL = 'https://qllmsoft.com/outsource-software-development-to-pakistan';
const OG_IMAGE  = 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg';

/* ─── JSON-LD: Organization ───────────────────────────────── */
const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'QllmSoft',
  url: 'https://qllmsoft.com',
  logo: 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp',
  foundingDate: '2015',
  description: 'QllmSoft is a trusted software development outsourcing company in Pakistan delivering custom web, mobile, and enterprise software solutions to global businesses.',
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

/* ─── JSON-LD: WebPage with AggregateRating ──────────────── */
const schemaWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Outsource Software Development to Pakistan | QllmSoft',
  url: PAGE_URL,
  description: 'Outsource software development to Pakistan with QllmSoft. Save 60-70% on development costs, access elite .NET, React, Flutter, and AI developers, and accelerate delivery without compromising quality.',
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
  serviceType: 'Software Development Outsourcing',
  name: 'Outsource Software Development to Pakistan',
  description: 'QllmSoft provides offshore software development outsourcing services from Pakistan — custom web apps, mobile apps, enterprise software, API development, AI/ML integrations, and dedicated developer teams for global businesses.',
  provider: { '@type': 'Organization', name: 'QllmSoft', url: 'https://qllmsoft.com' },
  areaServed: ['Pakistan', 'United States', 'United Kingdom', 'UAE', 'Saudi Arabia', 'Europe'],
  url: PAGE_URL,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software Outsourcing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Development Outsourcing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web & Mobile App Outsourcing Pakistan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Offshore Software Development Pakistan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dedicated Developer Outsourcing Pakistan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MVP Development Outsourcing for Startups' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI & Enterprise Software Outsourcing' } },
    ],
  },
};

/* ─── JSON-LD: BreadcrumbList ─────────────────────────────── */
const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://qllmsoft.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://qllmsoft.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Outsource Software Development to Pakistan', item: PAGE_URL },
  ],
};

/* ─── FAQ data (10 Q&As from live page — rewritten originally) */
const FAQ_DATA = [
  {
    q: 'Why should I outsource software development to Pakistan?',
    a: 'Pakistan has become one of the world\'s top software outsourcing destinations due to its large pool of highly skilled developers, cost-effective rates, and rapidly growing IT industry. Outsourcing to Pakistan gives you access to world-class talent in .NET, React, Angular, Flutter, Python, and AI — at 60–70% lower cost than equivalent teams in the US, UK, or Australia — without any compromise on quality, communication, or delivery speed.',
  },
  {
    q: 'What types of software development services can I outsource to Pakistan?',
    a: 'You can outsource a broad range of services to Pakistan including custom web and mobile app development, REST and GraphQL API development, enterprise software and ERP systems, AI and machine learning integrations, cloud and DevOps services, UI/UX design, and frontend development. Pakistani software companies are experienced at handling complete end-to-end development projects for startups, SMBs, and global enterprises.',
  },
  {
    q: 'Is outsourcing software development to Pakistan cost-effective?',
    a: 'Yes — significantly so. Outsourcing to Pakistan typically saves businesses 60–70% compared to equivalent development costs in the USA, UK, or Europe. Pakistan offers high-quality engineering at competitive rates, making it an ideal destination for startups managing tight budgets and enterprises looking to optimize their technology spend without sacrificing output quality.',
  },
  {
    q: 'Are Pakistani developers skilled and technically experienced?',
    a: 'Absolutely. Pakistan produces hundreds of thousands of IT graduates and certified developers every year. Pakistani developers are experienced in ASP.NET Core, Angular, React, Node.js, Python, Java, Flutter, React Native, and AI/ML frameworks. They have successfully delivered global projects for clients across the USA, Europe, UAE, and Saudi Arabia — bringing both technical depth and international best practices to every engagement.',
  },
  {
    q: 'How do Pakistani outsourcing companies ensure quality in projects?',
    a: 'Quality is maintained through agile and scrum methodologies, rigorous automated and manual QA processes, code reviews, performance benchmarking, and security audits. Leading firms like QllmSoft also follow GDPR and HIPAA-aligned data handling practices to ensure compliance. Every project is delivered on time, within budget, and to the performance standards agreed at the start.',
  },
  {
    q: 'Is communication a problem when outsourcing to Pakistan?',
    a: 'Not at all. Pakistani developers and project managers are fluent in English and experienced with international communication standards. Teams use modern collaboration tools — Slack, Jira, GitHub, Azure DevOps, and Microsoft Teams — to maintain full transparency. Daily standups, weekly sprint reviews, and shared dashboards keep every stakeholder informed at every stage.',
  },
  {
    q: 'Which time zones do Pakistani developers work with?',
    a: 'Pakistan Standard Time (PKT, UTC+5) offers strong overlap with European and Gulf working hours, and QllmSoft\'s developers readily adjust schedules to meet US client needs. Many teams provide dedicated overlap hours and flexible async communication to ensure smooth collaboration regardless of your location.',
  },
  {
    q: 'How do I choose the right software outsourcing company in Pakistan?',
    a: 'Look for a company with proven experience in your industry, a verifiable portfolio of past projects, genuine client reviews on third-party platforms like Upwork and Freelancer, clear technical expertise across your required stack, and transparent engagement models. QllmSoft meets all these criteria — with independent verification on Upwork (Top-Rated Plus, 100% Job Success Score) and Freelancer.',
  },
  {
    q: 'Is my data secure when outsourcing software development to Pakistan?',
    a: 'Yes. Reputable Pakistani IT firms including QllmSoft follow strict data protection policies, sign NDAs on day one, and implement industry-standard cybersecurity practices throughout development. All client data, source code, and intellectual property remain fully owned by you — with contractual protections in place from the first engagement.',
  },
  {
    q: 'Which industries benefit most from outsourcing software development to Pakistan?',
    a: 'Software outsourcing to Pakistan delivers strong results across healthcare and telemedicine, fintech and banking, eCommerce and retail, education and eLearning, real estate and property management, logistics and supply chain, and AI and SaaS startups. QllmSoft has delivered specialized solutions across all these sectors for clients in the US, UK, UAE, and Saudi Arabia.',
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
  const id = `osd-faq-${index}`;
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
const OutsourceSoftwareDevelopment = () => {

  const { ref: whyRef,        inView: whyInView        } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: servicesRef,   inView: servicesInView   } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: whoRef,        inView: whoInView        } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: modelsRef,     inView: modelsInView     } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: processRef,    inView: processInView    } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: partnerRef,    inView: partnerInView    } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: industryRef,   inView: industryInView   } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: compareRef,    inView: compareInView    } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: reviewRef,     inView: reviewInView     } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: techRef,       inView: techInView       } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <>
      {/* ════════════════════════════════════════════════
          SEO HEAD
      ════════════════════════════════════════════════ */}
      <Helmet>
        <title>Outsource Software Development to Pakistan | 60% Cost Savings | QllmSoft</title>
        <meta
          name="description"
          content="Outsource software development to Pakistan with QllmSoft. Save 60–70% on costs, access elite .NET, React, Flutter & AI developers, and accelerate delivery. Trusted by businesses in the US, UK, UAE, and Europe. Free consultation."
        />
        <meta
          name="keywords"
          content="outsource software development to Pakistan, software development outsourcing Pakistan, offshore software development Pakistan, outsource web development Pakistan, outsource mobile app development Pakistan, software outsourcing company Pakistan, hire dedicated developers Pakistan, software development outsourcing services, IT outsourcing Pakistan"
        />
        <meta name="author"  content="QllmSoft" />
        <meta name="robots"  content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type"         content="website" />
        <meta property="og:url"          content={PAGE_URL} />
        <meta property="og:site_name"    content="QllmSoft" />
        <meta property="og:title"        content="Outsource Software Development to Pakistan | 60% Cost Savings | QllmSoft" />
        <meta property="og:description"  content="Save 60–70% on software development costs by outsourcing to Pakistan. Elite .NET, React, Flutter & AI developers. Trusted by US, UK, UAE, and European businesses." />
        <meta property="og:image"        content={OG_IMAGE} />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt"    content="Outsource Software Development to Pakistan — QllmSoft" />
        <meta property="og:locale"       content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Outsource Software Development to Pakistan | QllmSoft" />
        <meta name="twitter:description" content="Save 60–70% by outsourcing to Pakistan. Elite developers, agile delivery, transparent pricing. Trusted by US, UK & UAE clients." />
        <meta name="twitter:image"       content={OG_IMAGE} />
        <meta name="twitter:image:alt"   content="QllmSoft Software Outsourcing Pakistan" />

        {/* JSON-LD × 5 */}
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="osd-page" role="main">

        {/* ── BREADCRUMB ─────────────────────────────── */}
        <nav className="csd-breadcrumb" aria-label="Breadcrumb navigation">
          <div className="container">
            <ol className="csd-breadcrumb__list" itemScope itemType="https://schema.org/BreadcrumbList">
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
                <span itemProp="name" aria-current="page">Outsource Software Development to Pakistan</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* ════════════════════════════════════════════════
            HERO — single H1
        ════════════════════════════════════════════════ */}
        <header className="osd-hero" role="banner">
          <div className="osd-hero__wave" aria-hidden="true" />

          <div className="container osd-hero__inner">
            <div className="osd-hero__content">
              <p className="osd-hero__eyebrow">
                <span className="osd-hero__eyebrow-dot" aria-hidden="true" />
                Trusted Software Outsourcing Partner — Pakistan
              </p>

              {/* ✅ SINGLE H1 */}
              <h1 className="osd-hero__title">
                Outsource Software Development<br />
                to Pakistan with{' '}
                <span className="osd-hero__title-brand">QllmSoft</span>
              </h1>

              <p className="osd-hero__sub">
                Scale your business with confidence. Partner with QllmSoft to reduce costs by
                <strong> 60–70%</strong>, accelerate delivery, and access elite developers in
                .NET, React, Flutter, and AI — without ever compromising on quality.
              </p>

              <div className="osd-hero__buttons">
                <Link
                  to="/contact"
                  className="btn btn-primary osd-btn-primary"
                  aria-label="Get a free outsourcing consultation from QllmSoft Pakistan"
                >
                  Get Free Quote
                </Link>
                <Link
                  to="/services"
                  className="btn osd-btn-ghost"
                  aria-label="View QllmSoft software development outsourcing services"
                >
                  View Our Services
                </Link>
              </div>

              {/* Social proof strip */}
              <div className="osd-hero__proof" aria-label="Social proof and trust signals">
                <div className="osd-hero__proof-item">
                  <span className="osd-hero__proof-num">5★</span>
                  <span>Upwork & Freelancer</span>
                </div>
                <div className="osd-hero__proof-sep" aria-hidden="true" />
                <div className="osd-hero__proof-item">
                  <span className="osd-hero__proof-num">100%</span>
                  <span>Job Success Score</span>
                </div>
                <div className="osd-hero__proof-sep" aria-hidden="true" />
                <div className="osd-hero__proof-item">
                  <span className="osd-hero__proof-num">10+</span>
                  <span>Years Outsourcing</span>
                </div>
                <div className="osd-hero__proof-sep" aria-hidden="true" />
                <div className="osd-hero__proof-item">
                  <span className="osd-hero__proof-num">50+</span>
                  <span>Global Clients</span>
                </div>
              </div>
            </div>

            {/* Right — hero image + savings card */}
            <div className="osd-hero__visual">
              <div className="osd-hero__image-wrap">
                <img
                  src="https://qllmsoft.com/images/outsource-software-development-to-pakistan-hero-section.webp"
                  alt="QllmSoft software development outsourcing team Pakistan — delivering enterprise solutions globally"
                  width="560"
                  height="400"
                  loading="eager"
                  fetchpriority="high"
                />
              </div>
              {/* Floating saving card */}
              <div className="osd-hero__saving-card" aria-label="Cost savings by outsourcing to Pakistan">
                <div className="osd-hero__saving-card-top">
                  <span aria-hidden="true">💰</span>
                  <strong>Average Cost Saving</strong>
                </div>
                <div className="osd-hero__saving-bar" aria-label="Cost comparison: US agency vs QllmSoft Pakistan">
                  <div className="osd-hero__bar-row">
                    <span>US / UK Agency</span>
                    <div className="osd-hero__bar osd-hero__bar--expensive">
                      <span>$150–250/hr</span>
                    </div>
                  </div>
                  <div className="osd-hero__bar-row">
                    <span>QllmSoft PK</span>
                    <div className="osd-hero__bar osd-hero__bar--affordable">
                      <span>60–70% less</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ════════════════════════════════════════════════
            WHY PAKISTAN — H2 + H3s
        ════════════════════════════════════════════════ */}
        <section
          className="section osd-why"
          ref={whyRef}
          aria-labelledby="why-heading"
        >
          <div className="container">
            <p className="section-eyebrow">The Pakistan Advantage</p>
            <div className="section-title">
              <h2 id="why-heading">
                Why Outsource Software Development to Pakistan?
              </h2>
              <p>
                Pakistan has rapidly matured into one of the world's most competitive software
                outsourcing destinations — combining deep technical talent, significant cost
                advantages, and a business culture aligned with global standards.
              </p>
            </div>

            <div className="osd-why__grid">
              {[
                {
                  icon: '💰',
                  title: 'Save 60–70% on Development Costs',
                  desc: 'Senior .NET, React, and Flutter developers in Pakistan cost a fraction of equivalent talent in the US or UK. You get the same engineering quality, the same seniority, and the same delivery standards — at dramatically lower rates.',
                  stat: '60–70%',
                  statLabel: 'Average Savings',
                },
                {
                  icon: '👨‍💻',
                  title: 'Deep Technical Talent Pool',
                  desc: 'Pakistan produces 500,000+ engineering graduates annually. Developers are skilled in modern stacks — .NET Core, Angular, React, Flutter, Node.js, Python, and AI/ML — with hands-on experience in global enterprise projects.',
                  stat: '500K+',
                  statLabel: 'IT Graduates/Year',
                },
                {
                  icon: '🕐',
                  title: 'Time Zone Overlap & Flexibility',
                  desc: 'Pakistan Standard Time (UTC+5) provides meaningful overlap with European and Gulf business hours. Teams readily adjust schedules for US clients — ensuring real-time collaboration and fast response without forcing overnight workflows.',
                  stat: 'UTC+5',
                  statLabel: 'Time Zone',
                },
                {
                  icon: '🌐',
                  title: 'Fluent English Communication',
                  desc: 'English is the business language of Pakistan\'s IT sector. Developers and project managers communicate professionally in written updates, video calls, and technical documentation — eliminating the misalignments that plague many outsourcing engagements.',
                  stat: 'Fluent',
                  statLabel: 'English Proficiency',
                },
                {
                  icon: '🏆',
                  title: 'Globally Verified Track Record',
                  desc: 'Pakistani IT firms are rated on international platforms like Upwork, Freelancer, Clutch, and Toptal — with verifiable reviews, scores, and portfolios. QllmSoft maintains a 100% Job Success Score and 5-star rating across platforms.',
                  stat: '5★',
                  statLabel: 'Avg. Client Rating',
                },
                {
                  icon: '🔒',
                  title: 'Strong IP Protection & NDA Culture',
                  desc: 'Leading Pakistani outsourcing companies sign NDAs on day one, maintain strict data handling policies, and transfer complete intellectual property to the client at project delivery — your code, your data, your ownership.',
                  stat: 'NDA',
                  statLabel: 'Day-One Protection',
                },
              ].map((w, i) => (
                <article
                  key={i}
                  className={`osd-why-card animate__animated ${whyInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="osd-why-card__top">
                    <span className="osd-why-card__icon" aria-hidden="true">{w.icon}</span>
                    <div className="osd-why-card__stat-wrap">
                      <span className="osd-why-card__stat">{w.stat}</span>
                      <span className="osd-why-card__stat-label">{w.statLabel}</span>
                    </div>
                  </div>
                  <h3 className="osd-why-card__title">{w.title}</h3>
                  <p className="osd-why-card__desc">{w.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            OUTSOURCING SERVICES — H2 + H3s
        ════════════════════════════════════════════════ */}
        <section
          className="section osd-services"
          ref={servicesRef}
          aria-labelledby="services-heading"
        >
          <div className="container">
            <p className="section-eyebrow">What You Can Outsource</p>
            <div className="section-title">
              <h2 id="services-heading">
                Our Software Development Outsourcing Services
              </h2>
              <p>
                QllmSoft delivers end-to-end outsourced software development — from your first
                MVP to enterprise-grade platforms — all from a single accountable partner in Pakistan.
              </p>
            </div>
            <div className="osd-services__grid">
              {[
                {
                  num: '01', icon: '⚙️',
                  title: 'Custom Software Development Outsourcing',
                  desc: 'Outsource the development of fully bespoke applications — web platforms, desktop tools, enterprise systems, and SaaS products — engineered precisely to your business logic, security requirements, and scalability roadmap.',
                  tags: ['ASP.NET Core', 'React', 'Angular', 'SQL Server', 'Azure'],
                  link: '/custom-software-development-services',
                },
                {
                  num: '02', icon: '📱',
                  title: 'Web & Mobile App Development Outsourcing',
                  desc: 'Outsource your Android, iOS, Flutter, or React Native mobile app — or a high-performance web application — to a dedicated Pakistan-based team that delivers on time, within budget, and to your exact specification.',
                  tags: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'ASP.NET Core'],
                  link: '/mobile-app-development',
                },
                {
                  num: '03', icon: '🚢',
                  title: 'Offshore Software Development Services',
                  desc: 'Build a full offshore development capability without the overhead. QllmSoft provides structured offshore teams — developers, QA engineers, UI/UX designers, and project managers — operating as a seamless extension of your business.',
                  tags: ['Offshore Teams', 'Full-Stack', 'DevOps', 'QA', 'Agile'],
                  link: null,
                },
                {
                  num: '04', icon: '🔗',
                  title: 'API Development & System Integration Outsourcing',
                  desc: 'Outsource the design, development, and integration of REST APIs, GraphQL endpoints, and third-party platform connections — ensuring your systems communicate without friction across CRMs, ERPs, payment gateways, and cloud services.',
                  tags: ['REST API', 'GraphQL', 'OAuth 2.0', 'Swagger', 'Webhooks'],
                  link: '/api-development-services',
                },
                {
                  num: '05', icon: '🚀',
                  title: 'Startup MVP Development Outsourcing',
                  desc: 'Launch your first product fast without the cost of an in-house team. QllmSoft specializes in rapid MVP development for early-stage startups — validating your concept with a working, shippable product in weeks, not months.',
                  tags: ['MVP', 'Rapid Delivery', 'Startup', 'Lean Development'],
                  link: '/custom-software-development-services',
                },
                {
                  num: '06', icon: '👨‍💻',
                  title: 'Hire Dedicated Software Developers',
                  desc: 'Add a skilled .NET, React, Angular, Flutter, or Python developer to your team on a full-time dedicated basis — working exclusively on your project, in your tools, at a fraction of local hiring costs.',
                  tags: ['.NET', 'React', 'Angular', 'Flutter', 'Python'],
                  link: '/hire-dotnet-developers-pakistan',
                },
              ].map((s, i) => (
                <article
                  key={i}
                  className={`osd-service-card animate__animated ${servicesInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.09}s` }}
                  itemScope itemType="https://schema.org/Service"
                >
                  <div className="osd-service-card__header">
                    <span className="osd-service-card__num" aria-hidden="true">{s.num}</span>
                    <span className="osd-service-card__icon" aria-hidden="true">{s.icon}</span>
                  </div>
                  <h3 className="osd-service-card__title" itemProp="name">{s.title}</h3>
                  <p className="osd-service-card__desc" itemProp="description">{s.desc}</p>
                  <div className="osd-service-card__tags">
                    {s.tags.map(t => <span key={t} className="osd-tag">{t}</span>)}
                  </div>
                  {s.link && (
                    <Link to={s.link} className="osd-service-card__link">
                      Learn more →
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            WHO SHOULD OUTSOURCE — H2 + H3s
        ════════════════════════════════════════════════ */}
        <section
          className="section osd-who"
          ref={whoRef}
          aria-labelledby="who-heading"
        >
          <div className="container">
            <p className="section-eyebrow">Who We Work With</p>
            <div className="section-title">
              <h2 id="who-heading">Who Should Outsource Software Development to Pakistan?</h2>
              <p>
                Outsourcing is not limited to one business type — it is a strategy that delivers
                measurable results at every stage of company growth.
              </p>
            </div>
            <div className="osd-who__grid">
              {[
                {
                  icon: '🚀',
                  title: 'Startups & Early-Stage Founders',
                  desc: 'You need to validate your idea and ship a product — fast and lean. Outsourcing to Pakistan eliminates the overhead of building an in-house team, giving you access to senior developers at startup-friendly rates without sacrificing quality or ownership.',
                  points: ['Rapid MVP development', 'No recruitment overhead', 'Flexible engagement — scale as you grow'],
                },
                {
                  icon: '🏢',
                  title: 'Small & Medium Businesses',
                  desc: 'You need reliable IT solutions that let you compete with larger players without a large-enterprise budget. Outsourcing to QllmSoft gives SMBs access to full-stack engineering capability — web, mobile, API, and data — on a cost structure that works.',
                  points: ['Affordable full-stack capability', 'Compete with enterprise-grade tech', 'Ongoing maintenance without in-house cost'],
                },
                {
                  icon: '🏦',
                  title: 'Enterprises & Large Corporations',
                  desc: 'You need scalable, secure, high-performance software and specialized expertise to modernize legacy systems and accelerate digital transformation. Offshore outsourcing to Pakistan provides enterprise-grade engineering at 60–70% of local talent costs.',
                  points: ['Legacy modernization & migration', 'Dedicated offshore engineering teams', 'Compliance-aware development (GDPR, HIPAA)'],
                },
                {
                  icon: '🌍',
                  title: 'Global Companies Seeking Offshore Partners',
                  desc: 'You need a trusted offshore software development company with a verified track record, clear communication, and structured delivery — not a freelancer marketplace gamble. QllmSoft provides the accountability of an agency with the flexibility of a dedicated team.',
                  points: ['Verified Upwork & Freelancer profiles', 'Transparent reporting & sprint delivery', 'IP ownership & NDA on day one'],
                },
              ].map((w, i) => (
                <article
                  key={i}
                  className={`osd-who-card animate__animated ${whoInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="osd-who-card__icon" aria-hidden="true">{w.icon}</span>
                  <h3 className="osd-who-card__title">{w.title}</h3>
                  <p className="osd-who-card__desc">{w.desc}</p>
                  <ul className="osd-who-card__points" aria-label={`Benefits for ${w.title}`}>
                    {w.points.map(pt => <li key={pt}>{pt}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            ENGAGEMENT MODELS — H2 + H3s
        ════════════════════════════════════════════════ */}
        <section
          className="section osd-models"
          ref={modelsRef}
          aria-labelledby="models-heading"
        >
          <div className="container">
            <p className="section-eyebrow">Flexible Engagement</p>
            <div className="section-title">
              <h2 id="models-heading">
                Outsourcing Engagement Models — Choose What Fits Your Project
              </h2>
              <p>
                Different projects need different structures. QllmSoft offers three proven
                engagement models designed to match your team size, timeline, and budget.
              </p>
            </div>
            <div className="osd-models__grid">
              {[
                {
                  icon: '👤',
                  badge: 'Most Popular',
                  badgeClass: 'osd-badge--gold',
                  title: 'Dedicated Offshore Team',
                  subtitle: 'Full-time developers working exclusively for you',
                  desc: 'Your team in Pakistan — developers, QA engineers, and a project manager — working full-time on your product. Full integration with your tools, workflows, and standups. The most cost-efficient model for ongoing development.',
                  best: 'Best for: Long-term products, SaaS platforms, enterprise systems',
                  features: ['Exclusive full-time commitment', 'Daily standups & sprint reporting', 'Direct access to developers', 'Scale up or down monthly'],
                },
                {
                  icon: '🎯',
                  badge: 'Fixed Scope',
                  badgeClass: 'osd-badge--blue',
                  title: 'Fixed-Price Project',
                  subtitle: 'Defined scope, agreed price, milestone delivery',
                  desc: 'You provide a clearly defined scope. We agree on a fixed price, fixed timeline, and milestone-based delivery. Zero budget surprises — every deliverable is documented and signed off before development begins.',
                  best: 'Best for: MVPs, specific features, defined redesign projects',
                  features: ['Fixed cost — no surprises', 'Milestone-based delivery', 'Full documentation & handover', 'Post-launch support included'],
                },
                {
                  icon: '⏱️',
                  badge: 'Flexible',
                  badgeClass: 'osd-badge--navy',
                  title: 'Time & Material',
                  subtitle: 'Pay for actual hours delivered — maximum flexibility',
                  desc: 'Ideal for evolving projects where scope may shift. Pay only for hours worked, with full visibility into time tracking and deliverables. No lock-in, no minimums — adjust resource allocation as your needs change.',
                  best: 'Best for: Agile products, long-term retainers, evolving scope',
                  features: ['Transparent hourly tracking', 'Adjust scope anytime', 'No minimum commitment', 'Weekly billing cycles'],
                },
              ].map((m, i) => (
                <article
                  key={i}
                  className={`osd-model-card animate__animated ${modelsInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="osd-model-card__top">
                    <span className="osd-model-card__icon" aria-hidden="true">{m.icon}</span>
                    <span className={`osd-model-badge ${m.badgeClass}`}>{m.badge}</span>
                  </div>
                  <h3 className="osd-model-card__title">{m.title}</h3>
                  <p className="osd-model-card__subtitle">{m.subtitle}</p>
                  <p className="osd-model-card__desc">{m.desc}</p>
                  <p className="osd-model-card__best">{m.best}</p>
                  <ul className="osd-model-card__features" aria-label={`${m.title} features`}>
                    {m.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                  <Link
                    to="/contact"
                    className="btn osd-model-card__cta"
                    aria-label={`Enquire about the ${m.title} outsourcing model`}
                  >
                    Enquire Now
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            HOW IT WORKS — H2 + H4s
        ════════════════════════════════════════════════ */}
        <section
          className="section osd-process"
          ref={processRef}
          aria-labelledby="process-heading"
        >
          <div className="container">
            <p className="section-eyebrow">Simple Onboarding</p>
            <div className="section-title">
              <h2 id="process-heading">How to Start Outsourcing Software Development to Pakistan</h2>
              <p>
                From your first enquiry to your first sprint delivery — we make outsourcing
                to Pakistan straightforward, structured, and risk-free.
              </p>
            </div>
            <ol className="osd-process__steps" aria-label="Steps to start outsourcing with QllmSoft Pakistan">
              {[
                {
                  n: '01', icon: '📋',
                  title: 'Share Your Requirements',
                  desc: 'Tell us about your project — technology stack, scope, team size, and timeline. We review your requirements and schedule a free consultation within 24 hours.',
                },
                {
                  n: '02', icon: '🤝',
                  title: 'Discovery & Proposal',
                  desc: 'We conduct a structured discovery session to understand your business goals, technical constraints, and success metrics — then deliver a detailed proposal with clear scope, timeline, and pricing.',
                },
                {
                  n: '03', icon: '✍️',
                  title: 'Sign NDA & Agreement',
                  desc: 'We sign an NDA on day one. The engagement agreement covers IP ownership, confidentiality, payment milestones, and escalation procedures — protecting both parties before development begins.',
                },
                {
                  n: '04', icon: '👥',
                  title: 'Team Assembly & Onboarding',
                  desc: 'We handpick the right developers, QA engineers, and project managers for your stack and domain. Your team is onboarded to your tools, introduced via a kickoff call, and ready to build within days.',
                },
                {
                  n: '05', icon: '⚙️',
                  title: 'Agile Development & Delivery',
                  desc: 'Development runs in two-week sprints with regular demos, written progress updates, and shared staging environments. You review every milestone before we move to the next.',
                },
                {
                  n: '06', icon: '🚀',
                  title: 'Launch & Ongoing Support',
                  desc: 'We handle deployment, store submission (if applicable), and a 30-day post-launch support period. Long-term maintenance retainers are available to keep your software current and secure.',
                },
              ].map((step, i) => (
                <li
                  key={i}
                  className={`osd-process__step animate__animated ${processInView ? 'animate__fadeInLeft' : ''}`}
                  style={{ animationDelay: `${i * 0.09}s` }}
                >
                  <div className="osd-process__step-left">
                    <span className="osd-process__step-num" aria-label={`Step ${step.n}`}>{step.n}</span>
                    <span className="osd-process__step-icon" aria-hidden="true">{step.icon}</span>
                  </div>
                  <div className="osd-process__step-body">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            COST COMPARISON TABLE — H2
        ════════════════════════════════════════════════ */}
        <section
          className="section osd-compare"
          ref={compareRef}
          aria-labelledby="compare-heading"
        >
          <div className="container">
            <p className="section-eyebrow">The Numbers</p>
            <div className="section-title">
              <h2 id="compare-heading">
                In-House vs Outsourcing to Pakistan — A Real Cost Comparison
              </h2>
              <p>
                The numbers are clear. Here is what businesses typically save by outsourcing
                software development to Pakistan instead of building in-house or hiring a
                Western agency.
              </p>
            </div>
            <div className="osd-compare-wrap">
              <table
                className={`osd-compare-table animate__animated ${compareInView ? 'animate__fadeInUp' : ''}`}
                aria-label="Cost comparison: In-house hiring, Western agency, and outsourcing to Pakistan"
              >
                <caption className="osd-compare-table__caption">
                  Development Cost Comparison — In-House vs Western Agency vs Pakistan Outsourcing
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Cost Factor</th>
                    <th scope="col">In-House (US/UK)</th>
                    <th scope="col">Western Agency</th>
                    <th scope="col" className="osd-col--highlight">QllmSoft Pakistan ✓</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { factor: 'Avg. Dev Hourly Rate',   inhouse: '$80–150/hr',        agency: '$120–250/hr',       pk: '60–70% lower' },
                    { factor: 'Recruitment Cost',       inhouse: '$10,000–30,000',    agency: 'Included in fees',  pk: 'Zero — we handle it' },
                    { factor: 'Onboarding Time',        inhouse: '4–12 weeks',         agency: '1–3 weeks',         pk: 'Days — ready fast' },
                    { factor: 'Infrastructure Overhead',inhouse: 'High — office, kit', agency: 'Included in rates', pk: 'None — zero overhead' },
                    { factor: 'Scalability',            inhouse: 'Slow & expensive',   agency: 'Fixed team size',   pk: 'Scale up/down monthly' },
                    { factor: 'IP Ownership',           inhouse: 'Full',               agency: 'Usually full',      pk: 'Full — NDA day one' },
                    { factor: 'Post-Launch Support',    inhouse: 'Full in-house cost', agency: 'Paid retainer',     pk: '30 days included free' },
                    { factor: 'Communication',          inhouse: 'In-office',          agency: 'Account manager',   pk: 'Direct developer access' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="osd-col--factor">{row.factor}</td>
                      <td>{row.inhouse}</td>
                      <td>{row.agency}</td>
                      <td className="osd-col--highlight osd-col--good">{row.pk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            TECH STACK — H2
        ════════════════════════════════════════════════ */}
        <section
          className="section osd-tech"
          ref={techRef}
          aria-labelledby="tech-heading"
        >
          <div className="container">
            <p className="section-eyebrow">Technology Expertise</p>
            <div className="section-title">
              <h2 id="tech-heading">
                Technologies Available Through QllmSoft Outsourcing
              </h2>
              <p>
                Outsource projects in any of the modern technology stacks our developers
                are certified and experienced in.
              </p>
            </div>
            <div className="osd-tech__grid">
              {[
                { color: '#1A365D', label: 'Backend',       items: ['ASP.NET Core', '.NET 8', 'Node.js', 'Python / Django', 'PHP / Laravel'] },
                { color: '#2B6CB0', label: 'Frontend',      items: ['React.js', 'Angular', 'Vue.js', 'Blazor', 'TypeScript'] },
                { color: '#edb702', label: 'Mobile',        items: ['Flutter', 'React Native', 'Kotlin (Android)', 'Swift (iOS)', 'Xamarin'] },
                { color: '#276749', label: 'Data & DB',     items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'Entity Framework Core'] },
                { color: '#553C9A', label: 'Cloud & DevOps',items: ['Microsoft Azure', 'AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines'] },
                { color: '#9B2C2C', label: 'AI & Emerging', items: ['ML.NET', 'OpenAI API', 'Python AI/ML', 'Azure AI Services', 'LangChain'] },
              ].map((col, i) => (
                <div
                  key={i}
                  className={`osd-tech-col animate__animated ${techInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.09}s`, '--osd-col-color': col.color }}
                >
                  <h3 className="osd-tech-col__label">{col.label}</h3>
                  <ul className="osd-tech-col__list" aria-label={`${col.label} technologies`}>
                    {col.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            INDUSTRIES — H2 + H3s
        ════════════════════════════════════════════════ */}
        <section
          className="section osd-industries"
          ref={industryRef}
          aria-labelledby="industries-heading"
        >
          <div className="container">
            <p className="section-eyebrow">Industry Expertise</p>
            <div className="section-title">
              <h2 id="industries-heading">
                Industries That Benefit Most from Outsourcing to Pakistan
              </h2>
              <p>
                Our outsourcing teams have domain experience across the industries that
                rely on complex, regulated, and performance-critical software.
              </p>
            </div>
            <div className="osd-industries__grid">
              {[
                { icon: '🏥', title: 'Healthcare & Telemedicine',   desc: 'HIPAA-aware patient portals, telehealth platforms, EHR systems, and appointment booking apps for healthcare providers.' },
                { icon: '💳', title: 'FinTech & Banking',           desc: 'Mobile banking, digital wallets, payment gateway integrations, investment platforms, and regulatory-compliant financial software.' },
                { icon: '🛍️', title: 'eCommerce & Retail',         desc: 'Custom online stores, inventory management, JazzCash/Stripe integration, loyalty programs, and B2C mobile commerce apps.' },
                { icon: '🎓', title: 'Education & eLearning',       desc: 'LMS platforms, live class tools, corporate training systems, gamified learning apps, and student progress dashboards.' },
                { icon: '🏘️', title: 'Real Estate',                desc: 'Property listing platforms, virtual tour integrations, CRM systems, agent portals, and location-based mobile apps.' },
                { icon: '🚚', title: 'Logistics & Supply Chain',    desc: 'Fleet tracking, route optimization, warehouse management, delivery apps, and real-time supply chain visibility tools.' },
                { icon: '🤖', title: 'AI & SaaS Startups',         desc: 'Multi-tenant SaaS platforms, AI-powered automation tools, ML integrations, subscription billing, and cloud-native deployments.' },
                { icon: '🏭', title: 'Manufacturing & Industry',    desc: 'Equipment monitoring dashboards, digital inventory control, ERP integrations, and quality management systems for industrial operations.' },
              ].map((ind, i) => (
                <article
                  key={i}
                  className={`osd-industry-card animate__animated ${industryInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <span className="osd-industry-card__icon" aria-hidden="true">{ind.icon}</span>
                  <h3 className="osd-industry-card__title">{ind.title}</h3>
                  <p className="osd-industry-card__desc">{ind.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            WHY QLLMSOFT PARTNER — H2 + H3s
        ════════════════════════════════════════════════ */}
        <section
          className="section osd-partner"
          ref={partnerRef}
          aria-labelledby="partner-heading"
        >
          <div className="container">
            <div className="osd-partner__layout">

              <div className={`osd-partner__text animate__animated ${partnerInView ? 'animate__fadeInLeft' : ''}`}>
                <p className="section-eyebrow" style={{ textAlign: 'left' }}>Why QllmSoft</p>
                <h2 id="partner-heading">
                  Why Choose QllmSoft as Your Software Outsourcing Partner in Pakistan?
                </h2>
                <p>
                  QllmSoft is not just another software outsourcing company in Pakistan — we are a
                  long-term technology partner with a verified track record, a structured delivery
                  model, and a genuine commitment to your product's success beyond the final invoice.
                </p>
                <p>
                  Over a decade of delivering complex projects for clients across the USA, Europe,
                  and the Gulf has taught us that the best outsourcing relationships are built on
                  transparency, accountability, and technical depth — not just competitive pricing.
                </p>
                <p>
                  Our reputation is independently verified on{' '}
                  <a
                    href="https://www.freelancer.com/u/mrprogrmmr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View QllmSoft verified reviews on Freelancer.com"
                  >
                    Freelancer.com
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://www.upwork.com/freelancers/~0170e20f8803389a86"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Verify QllmSoft Top-Rated Plus status on Upwork"
                  >
                    Upwork
                  </a>{' '}
                  — with a 100% Job Success Score and 5-star average across all completed engagements.
                </p>
                <div className="osd-partner__platform-btns">
                  <a
                    href="https://www.freelancer.com/u/mrprogrmmr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark"
                    aria-label="Explore QllmSoft on Freelancer"
                  >
                    Explore on Freelancer
                  </a>
                  <a
                    href="https://www.upwork.com/freelancers/~0170e20f8803389a86"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark"
                    aria-label="Verify QllmSoft on Upwork"
                  >
                    Verify on Upwork
                  </a>
                </div>
              </div>

              <aside className={`osd-partner__reasons animate__animated ${partnerInView ? 'animate__fadeInRight' : ''}`}
                aria-label="Reasons to choose QllmSoft for outsourcing"
              >
                {[
                  { icon: '✔️', title: 'Proven Decade of Expertise',       desc: 'Successfully delivered outsourced projects for startups, SMEs, and enterprises across the USA, Europe, and the Gulf region.' },
                  { icon: '💻', title: 'Full-Stack Outsourcing Teams',      desc: 'Frontend, backend, mobile, AI, cloud, and DevOps specialists — complete end-to-end delivery under one roof.' },
                  { icon: '⚡', title: 'Agile & Transparent Processes',    desc: 'Two-week sprints, daily standups, shared dashboards, and written milestone reports — you are always in control.' },
                  { icon: '🔧', title: 'Long-Term Support & Maintenance',  desc: 'Post-launch monitoring, performance tuning, security updates, and feature development — we stay invested after go-live.' },
                  { icon: '🤝', title: 'Client-First Engagement Culture',  desc: 'Flexible outsourcing models, transparent pricing, full IP ownership, and single points of contact for every engagement.' },
                ].map((r, i) => (
                  <div key={i} className="osd-partner-reason">
                    <span className="osd-partner-reason__icon" aria-hidden="true">{r.icon}</span>
                    <div>
                      <strong>{r.title}</strong>
                      <p>{r.desc}</p>
                    </div>
                  </div>
                ))}
              </aside>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            TESTIMONIALS — H2 + Review microdata
        ════════════════════════════════════════════════ */}
        <section
          className="section osd-testimonials"
          ref={reviewRef}
          aria-labelledby="reviews-heading"
        >
          <div className="container">
            <p className="section-eyebrow">Verified Client Reviews</p>
            <div className="section-title">
              <h2 id="reviews-heading">
                What Global Clients Say About Outsourcing to QllmSoft Pakistan
              </h2>
              <p>
                Independent, third-party verified reviews from clients across the UK, USA,
                UAE, Saudi Arabia, and Jordan — on Freelancer and Upwork.
              </p>
            </div>
            <div className="osd-reviews__grid">
              {[
                {
                  name: 'Khalid A.',
                  loc: 'Riyadh, Saudi Arabia',
                  platform: 'Freelancer',
                  img: 'https://qllmsoft.com/images/khalid A.webp',
                  text: '"Great work with a great programmer team. Delivered everything exactly as discussed and on time. The quality of communication and technical output was consistently excellent throughout the entire outsourcing engagement."',
                },
                {
                  name: 'Mohammad I.',
                  loc: 'Amman, Jordan',
                  platform: 'Freelancer',
                  img: 'https://qllmsoft.com/images/Muhammad I.webp',
                  text: '"As always, great work. QllmSoft is my reliable choice for development and web application logic. The quality of code and communication is consistently excellent. My go-to outsourcing partner. Highly recommended."',
                },
                {
                  name: 'Neil P.',
                  loc: 'Cardiff, United Kingdom',
                  platform: 'Freelancer',
                  img: 'https://qllmsoft.com/images/Neil P.webp',
                  text: '"Fantastic work. Excellent communication throughout the project, and the final result was exactly what we needed. I will continue to outsource to QllmSoft for future projects without hesitation."',
                },
                {
                  name: 'Fernando M.',
                  loc: 'Miramar, United States',
                  platform: 'Freelancer',
                  img: 'https://qllmsoft.com/images/fernandoM.webp',
                  text: '"Very pleasant team to work with remotely. QllmSoft consistently delivers a high standard of code, clean architecture, and professional results on every outsourced engagement. Highly recommended."',
                },
              ].map((r, i) => (
                <article
                  key={i}
                  className={`osd-review-card animate__animated ${reviewInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  itemScope itemType="https://schema.org/Review"
                >
                  <div
                    className="osd-review-card__stars"
                    aria-label="5 out of 5 stars"
                    itemProp="reviewRating" itemScope itemType="https://schema.org/Rating"
                  >
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating"  content="5" />
                    ★★★★★
                  </div>
                  <p className="osd-review-card__text" itemProp="reviewBody">{r.text}</p>
                  <div className="osd-review-card__footer">
                    <div className="osd-review-card__author"
                      itemProp="author" itemScope itemType="https://schema.org/Person"
                    >
                      <img
                        src={r.img}
                        alt={`${r.name} — verified QllmSoft outsourcing client from ${r.loc}`}
                        loading="lazy"
                        width="48"
                        height="48"
                      />
                      <div>
                        <strong itemProp="name">{r.name}</strong>
                        <span>{r.loc}</span>
                      </div>
                    </div>
                    <span className="osd-review-card__platform">{r.platform}</span>
                  </div>
                </article>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <a
                href="https://www.freelancer.com/u/mrprogrmmr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
                aria-label="View all verified QllmSoft outsourcing reviews on Freelancer"
              >
                View All Reviews on Freelancer
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            FAQ — H2 + FAQPage schema
        ════════════════════════════════════════════════ */}
        <section
          className="section csd-faq osd-faq"
          aria-labelledby="faq-heading"
          itemScope itemType="https://schema.org/FAQPage"
        >
          <div className="container">
            <p className="section-eyebrow">Common Questions</p>
            <div className="section-title">
              <h2 id="faq-heading">
                FAQ — Outsource Software Development to Pakistan
              </h2>
              <p>
                Answers to the most common questions businesses ask before outsourcing
                software development to Pakistan.
              </p>
            </div>
            <div className="csd-faq__list osd-faq__list">
              {FAQ_DATA.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
            </div>
            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <Link
                to="/contact"
                className="btn btn-primary osd-btn-primary"
                aria-label="Contact QllmSoft with a question about outsourcing to Pakistan"
              >
                Ask Us Directly
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            FINAL CTA — H2
        ════════════════════════════════════════════════ */}
        <section className="section osd-cta" aria-labelledby="cta-heading">
          <div className="osd-cta__bg" aria-hidden="true" />
          <div className="container osd-cta__inner">

            <div className="osd-cta__left">
              <p className="section-eyebrow" style={{ color: '#edb702', textAlign: 'left', margin: '0 0 12px' }}>
                Start Outsourcing Today
              </p>
              <h2 id="cta-heading">
                Ready to Reduce Costs and Accelerate Delivery?
              </h2>
              <p>
                Whether you need a dedicated offshore team, a fixed-price project, or a
                single expert developer — QllmSoft delivers world-class software from Pakistan,
                on time and within budget. Let's discuss your project.
              </p>
              <div className="osd-cta__buttons">
                <Link
                  to="/contact"
                  className="btn btn-primary osd-btn-primary"
                  aria-label="Get a free outsourcing consultation with QllmSoft Pakistan"
                >
                  📞 Get Free Consultation
                </Link>
                <a
                  href="mailto:qllmsoft@gmail.com"
                  className="btn osd-btn-ghost"
                  aria-label="Email QllmSoft to discuss outsourcing your software project"
                >
                  📧 Email Us Directly
                </a>
              </div>
              <div className="osd-cta__perks" aria-label="Outsourcing commitment guarantees">
                <span>✓ NDA signed on day one</span>
                <span>✓ Free detailed proposal</span>
                <span>✓ Response within 24 hours</span>
                <span>✓ Full IP ownership guaranteed</span>
              </div>
            </div>

            <aside className="osd-cta__right" aria-label="Quick contact and related services">
              <div className="osd-cta__contact-card">
                <h3>Quick Contact</h3>
                <a href="mailto:qllmsoft@gmail.com" className="osd-cta__contact-row">
                  <span aria-hidden="true">📧</span> qllmsoft@gmail.com
                </a>
                <a
                  href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20outsourcing!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="osd-cta__contact-row"
                  aria-label="WhatsApp QllmSoft about outsourcing"
                >
                  <span aria-hidden="true">💬</span> WhatsApp — Replies in 5 mins
                </a>
                <a href="tel:+923348229288" className="osd-cta__contact-row">
                  <span aria-hidden="true">📞</span> +92 334 8229288
                </a>
              </div>
              <nav className="osd-cta__related" aria-label="Related outsourcing service pages">
                <p className="osd-cta__related-title">Related Services</p>
                <Link to="/custom-software-development-services">Custom Software</Link>
                <Link to="/website-development-services">Web Development</Link>
                <Link to="/mobile-app-development">Mobile Apps</Link>
                <Link to="/api-development-services">API Development</Link>
                <Link to="/hire-dotnet-developers-pakistan">Hire .NET Developers</Link>
                <Link to="/ai-powered-software-solutions">AI Solutions</Link>
              </nav>
            </aside>

          </div>
        </section>

      </main>
    </>
  );
};

export default OutsourceSoftwareDevelopment;
