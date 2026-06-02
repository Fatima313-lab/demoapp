/**
 * DedicatedTeamsPage.jsx
 * ─────────────────────────────
 * 100% SEO-Optimized:
 *  ✓ react-helmet-async  → <title>, meta description, canonical, robots
 *  ✓ Open Graph tags     → Facebook / LinkedIn rich previews
 *  ✓ Twitter Card tags   → Twitter rich previews
 *  ✓ JSON-LD schemas     → Organization, BreadcrumbList, FAQPage, Service
 *  ✓ Semantic HTML5      → <main>, <article>, <section>, <nav>, <header>
 *  ✓ H1→H2→H3→H4        → Proper heading hierarchy, one H1 only
 *  ✓ Alt / aria-label    → Every image has descriptive alt text
 *  ✓ Internal links      → Keyword-rich anchor text throughout
 *  ✓ Page speed hints    → loading="lazy" + width/height on all images
 *  ✓ itemScope/itemProp  → Inline microdata on Service, FAQPage, Organization
 */
 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './DedicatedTeamsPage.css';
import 'animate.css';
 
/* ─── Page constants ──────────────────────────────────────── */
const PAGE_URL = 'https://qllmsoft.com/remote-dedicated-development-teams';
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
  sameAs: ['https://www.freelancer.com/u/mrprogrmmr'],
};
 
/* ─── JSON-LD: Service ────────────────────────────────────── */
const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Remote Dedicated Development Teams',
  name: 'Remote Dedicated Development Teams | QllmSoft Pakistan',
  description:
    'QllmSoft provides remote dedicated engineering teams for startups and enterprises worldwide. Scale your engineering capacity on demand with pre-vetted developers specializing in .NET, React, Azure, AI, and DevOps.',
  provider: { '@type': 'Organization', name: 'QllmSoft', url: 'https://qllmsoft.com' },
  areaServed: ['Pakistan', 'United States', 'United Kingdom', 'UAE', 'Saudi Arabia'],
  url: PAGE_URL,
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: '1000',
    description: 'Dedicated development team engagements starting from $1,000/month',
  },
};
 
/* ─── JSON-LD: BreadcrumbList ─────────────────────────────── */
const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://qllmsoft.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://qllmsoft.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Remote Dedicated Development Teams', item: PAGE_URL },
  ],
};
 
/* ─── FAQ data (drives both UI + JSON-LD) ─────────────────── */
const FAQ_DATA = [
  {
    q: 'How does QllmSoft handle time-zone differences with remote dedicated teams?',
    a: 'We utilize a follow-the-sun support model, ensuring our workflows overlap with your team\'s core working hours for real-time collaboration, while utilizing the remaining hours for continuous, uninterrupted development. Most of our clients in the US, UK, and Gulf have found this model highly effective.',
  },
  {
    q: 'Can QllmSoft\'s dedicated team work alongside my existing in-house developers?',
    a: 'Absolutely. Our dedicated teams are designed to function as a seamless extension of your existing setup. We integrate with your project management tools, code repositories, and communication channels to fill specific skill gaps or augment capacity without disrupting your internal dynamics.',
  },
  {
    q: 'What does a remote dedicated development team from QllmSoft include?',
    a: 'A dedicated team typically includes senior software engineers, a project manager, a QA specialist, and a UI/UX designer depending on your project scope. Every team is assembled specifically around your technical requirements and product goals, not generic role templates.',
  },
  {
    q: 'How quickly can a dedicated development team be onboarded?',
    a: 'Our pre-vetted engineers are ready to integrate into your stack from Day 1. Following an initial discovery call and NDA signing, we typically have a team operational within 3 to 5 business days — significantly faster than traditional recruitment processes.',
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
 
/* ─── FAQ Accordion Item ──────────────────────────────────── */
const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  const answerId = `faq-answer-${index}`;
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
   PAGE COMPONENT
═══════════════════════════════════════════════════════════ */
const DedicatedTeamsPage = () => {
 
  const { ref: whyRef,       inView: whyInView       } = useInView({ triggerOnce: true, threshold: 0.12 });
  const { ref: diffRef,      inView: diffInView      } = useInView({ triggerOnce: true, threshold: 0.1  });
  const { ref: capsRef,      inView: capsInView      } = useInView({ triggerOnce: true, threshold: 0.1  });
  const { ref: trustRef,     inView: trustInView     } = useInView({ triggerOnce: true, threshold: 0.12 });
  const { ref: workflowRef,  inView: workflowInView  } = useInView({ triggerOnce: true, threshold: 0.1  });
  const { ref: faqRef,       inView: faqInView       } = useInView({ triggerOnce: true, threshold: 0.1  });
 
  return (
    <>
      {/* ══════════════════════════════════════════════════
          SEO HEAD
      ══════════════════════════════════════════════════ */}
      <Helmet>
        {/* ── Primary ───────────────────────────────── */}
        <title>Remote Dedicated Development Teams | Scale Engineering Capacity | QllmSoft</title>
        <meta
          name="description"
          content="QllmSoft provides remote dedicated development teams for startups and enterprises. Scale your engineering capacity on demand with pre-vetted .NET, React, Azure, and AI specialists from Pakistan — serving clients in the US, UK, UAE, and globally."
        />
        <meta
          name="keywords"
          content="remote dedicated development team Pakistan, offshore development team Pakistan, dedicated software engineers Pakistan, hire remote developers Pakistan, dedicated .NET developers, dedicated React developers Pakistan, offshore engineering team, remote software team Pakistan"
        />
        <meta name="author"  content="QllmSoft" />
        <meta name="robots"  content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />
 
        {/* ── Open Graph ────────────────────────────── */}
        <meta property="og:type"         content="website" />
        <meta property="og:url"          content={PAGE_URL} />
        <meta property="og:site_name"    content="QllmSoft" />
        <meta property="og:title"        content="Remote Dedicated Development Teams | QllmSoft Pakistan" />
        <meta property="og:description"  content="Scale your engineering capacity on demand with QllmSoft's remote dedicated development teams. Pre-vetted engineers who integrate into your stack from Day 1." />
        <meta property="og:image"        content={OG_IMAGE} />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt"    content="QllmSoft — Remote Dedicated Development Teams Pakistan" />
        <meta property="og:locale"       content="en_US" />
 
        {/* ── Twitter Card ──────────────────────────── */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Remote Dedicated Development Teams | QllmSoft Pakistan" />
        <meta name="twitter:description" content="Scale your engineering capacity with QllmSoft's remote dedicated development teams — pre-vetted engineers, Day 1 integration, follow-the-sun support." />
        <meta name="twitter:image"       content={OG_IMAGE} />
        <meta name="twitter:image:alt"   content="QllmSoft — Remote Dedicated Development Teams Pakistan" />
 
        {/* ── JSON-LD Structured Data ────────────────── */}
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>
 
      <main id="main-content" className="dtp-page" role="main">
 
        {/* ── BREADCRUMB ───────────────────────────────── */}
        <nav className="dtp-breadcrumb" aria-label="Breadcrumb navigation">
          <div className="dtp-container">
            <ol
              className="dtp-breadcrumb__list"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <Link to="/" itemProp="item"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <span aria-hidden="true" className="dtp-breadcrumb__sep">›</span>
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <Link to="/services" itemProp="item"><span itemProp="name">Services</span></Link>
                <meta itemProp="position" content="2" />
              </li>
              <span aria-hidden="true" className="dtp-breadcrumb__sep">›</span>
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Remote Dedicated Development Teams</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>
 
        {/* ══════════════════════════════════════════════════
            HERO — single H1 on the page
        ══════════════════════════════════════════════════ */}
        <header className="dtp-hero">
          <div className="dtp-hero-content">
            <p className="dtp-hero__eyebrow">Remote Dedicated Teams</p>
 
            {/* ✅ ONE H1 */}
            <h1 className="dtp-hero__title">
              Scale Your Engineering<br />
              Capacity <span className="dtp-gold">On Demand.</span>
            </h1>
 
            <p className="dtp-hero__sub">
              Talent scarcity. High operational overhead. Development bottlenecks.
              A dedicated remote engineering team is the strategic pivot your product needs to stay competitive —
              serving clients across the US, UK, Europe, and the Gulf from our base in Pakistan.
            </p>
 
            <div className="dtp-hero__actions">
              <Link
                to="/contact"
                className="dtp-btn-primary"
                aria-label="Book a 15-minute strategy call with QllmSoft dedicated team experts"
              >
                Book a 15-Minute Strategy Call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
 
            <div className="dtp-hero__stats" aria-label="QllmSoft key statistics">
              {[
                { num: 'Day 1', label: 'Integration Ready'  },
                { num: '100%',  label: 'NDA Compliant'      },
                { num: '24/7',  label: 'Follow-the-Sun'     },
                { num: '50+',   label: 'Global Clients'     },
              ].map(s => (
                <div key={s.label} className="dtp-hero__stat">
                  <span className="dtp-hero__stat-num">{s.num}</span>
                  <span className="dtp-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
 
          <aside className="dtp-hero-image-wrap" aria-label="Remote development team visual">
            <div className="dtp-hero-img-frame">
              <img
                src="https://www.trio.dev/hubfs/Top%20Collaboration%20Tools%20to%20Streamline%20Software%20Development%20Outsourcing%20%281%29.jpg"
                alt="Remote dedicated software development team collaborating on enterprise project — QllmSoft Pakistan"
                loading="eager"
                width="640"
                height="480"
                className="dtp-hero-img"
              />
              <div className="dtp-hero-img-badge" aria-label="500 plus projects delivered">
                <span className="dtp-img-badge-num">500+</span>
                <span className="dtp-img-badge-text">Projects Delivered</span>
              </div>
            </div>
          </aside>
        </header>
 
        {/* ══════════════════════════════════════════════════
            WHY REMOTE TEAMS — H2
        ══════════════════════════════════════════════════ */}
        <section
          className="dtp-section bg-white"
          ref={whyRef}
          aria-labelledby="why-heading"
        >
          <div className="dtp-container">
            <p className="dtp-section-label">Why It Works</p>
            <div className="dtp-why-layout">
              <div className="dtp-why-text">
                <h2 id="why-heading" className="dtp-section-title">
                  Traditional recruitment is<br />
                  <span className="dtp-blue">slow and expensive.</span>
                </h2>
                <p className="dtp-why-intro">
                  Our model provides immediate, reliable engineering velocity without the overhead of
                  traditional hiring cycles, HR costs, or talent scarcity constraints.
                </p>
              </div>
              <div className="dtp-why-cards" aria-label="Key benefits of remote dedicated teams">
                {[
                  {
                    title: 'Instant Technical Readiness',
                    desc: 'Access pre-vetted engineers who integrate into your stack on day one — no ramp-up delays, no technical assessments on your end.',
                  },
                  {
                    title: 'Operational Agility',
                    desc: 'Scale your team size dynamically based on your product\'s lifecycle requirements — expand during heavy builds, contract during stable phases.',
                  },
                  {
                    title: 'Global Knowledge Exchange',
                    desc: 'Partner with a diverse team that brings proven solutions from international markets to your specific business challenges.',
                  },
                ].map((item, i) => (
                  <article
                    key={i}
                    className={`dtp-why-card animate__animated ${whyInView ? 'animate__fadeInUp' : ''}`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <span className="dtp-why-check" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#073e84" fillOpacity="0.1"/>
                        <path d="M6 10l3 3 5-5" stroke="#073e84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div>
                      <h3 className="dtp-why-title" itemProp="name">{item.title}</h3>
                      <p className="dtp-why-desc" itemProp="description">{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
 
        {/* ══════════════════════════════════════════════════
            QLLMSOFT DIFFERENCE — H2 + H3s
        ══════════════════════════════════════════════════ */}
        <section
          className="dtp-section bg-lightblue"
          ref={diffRef}
          aria-labelledby="diff-heading"
        >
          <div className="dtp-container">
            <p className="dtp-section-label">The QllmSoft Difference</p>
            <h2 id="diff-heading" className="dtp-section-title center">
              We don't fill roles.{' '}
              <span className="dtp-blue">We deliver outcomes.</span>
            </h2>
 
            <div className="dtp-diff-grid" aria-label="QllmSoft differentiators">
              {[
                {
                  title: 'Cultural Alignment',
                  desc: 'Our team adopts your internal standards, communication style, and project management tools — ensuring zero friction in daily operations.',
                },
                {
                  title: 'Technical Deep-Dive',
                  desc: 'We focus on the heavy lifting — AI-driven features, complex system integrations, and high-performance backend development — so your leadership can focus on product strategy.',
                },
                {
                  title: 'Continuous Improvement',
                  desc: 'We prioritize architectural longevity, clean code practices, and sustainable systems over quick fixes that create long-term technical debt.',
                },
              ].map((item, i) => (
                <article
                  key={i}
                  className={`dtp-diff-card animate__animated ${diffInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="dtp-diff-number" aria-hidden="true">0{i + 1}</div>
                  <h3 className="dtp-diff-title">{item.title}</h3>
                  <p className="dtp-diff-desc">{item.desc}</p>
                </article>
              ))}
            </div>
 
            <div className="dtp-center-cta">
              <Link
                to="/contact"
                className="dtp-btn-outline"
                aria-label="Explore QllmSoft's technical approach for dedicated development teams"
              >
                Explore Our Technical Approach
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>
 
        {/* ══════════════════════════════════════════════════
            TECHNICAL CAPABILITIES — H2 + H3s
        ══════════════════════════════════════════════════ */}
        <section
          className="dtp-section bg-navy"
          ref={capsRef}
          aria-labelledby="caps-heading"
          itemScope
          itemType="https://schema.org/Organization"
        >
          <div className="dtp-container">
            <p className="dtp-section-label light">Technical Expertise</p>
            <div className="dtp-caps-layout">
              <div className="dtp-caps-left">
                <h2 id="caps-heading" className="dtp-section-title light">
                  Bridging legacy limitations<br />
                  with <span className="dtp-gold">modern innovation.</span>
                </h2>
                <p className="dtp-caps-intro">
                  Our dedicated teams specialize in bridging the gap between legacy constraints and
                  modern, scalable architecture — delivering measurable outcomes, not just code.
                </p>
                <img
                  src="https://hyscaler.com/wp-content/uploads/2023/08/Cloud-Technology_-5-Powerful-Mastery-for-Enterprise-Software.jpg"
                  alt="Cloud-native enterprise software architecture — QllmSoft dedicated team expertise"
                  loading="lazy"
                  width="520"
                  height="320"
                  className="dtp-caps-img"
                />
              </div>
 
              <div className="dtp-caps-right" aria-label="Technical capability areas">
                {[
                  {
                    icon: '☁',
                    number: '01',
                    title: 'Cloud-Native Transformation',
                    desc: 'We help enterprises migrate from rigid legacy systems to scalable, cloud-native architectures in Microsoft Azure — with zero disruption to ongoing operations.',
                  },
                  {
                    icon: '⚙',
                    number: '02',
                    title: 'DevOps & Automation',
                    desc: 'By implementing robust CI/CD pipelines, we reduce your time-to-market and ensure your deployment process is reliable, repeatable, and error-free.',
                  },
                  {
                    icon: '◈',
                    number: '03',
                    title: 'Enterprise Web Development',
                    desc: 'Building high-availability web applications with ASP.NET Core, React, and Angular that handle growth and scale gracefully under real enterprise load.',
                  },
                ].map((item, i) => (
                  <article
                    key={i}
                    className={`dtp-cap-card animate__animated ${capsInView ? 'animate__fadeInRight' : ''}`}
                    style={{ animationDelay: `${i * 0.12}s` }}
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <div className="dtp-cap-header">
                      <span className="dtp-cap-icon" aria-hidden="true">{item.icon}</span>
                      <span className="dtp-cap-num" aria-label={`Capability ${item.number}`}>{item.number}</span>
                    </div>
                    <h3 className="dtp-cap-title" itemProp="name">{item.title}</h3>
                    <p className="dtp-cap-desc" itemProp="description">{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
 
        {/* ══════════════════════════════════════════════════
            TRUST & PROTECTION — H2 + H3s
        ══════════════════════════════════════════════════ */}
        <section
          className="dtp-section bg-white"
          ref={trustRef}
          aria-labelledby="trust-heading"
        >
          <div className="dtp-container">
            <p className="dtp-section-label">Trust & Protection</p>
            <h2 id="trust-heading" className="dtp-section-title center">
              For global clients, trust is{' '}
              <span className="dtp-blue">the primary currency.</span>
            </h2>
            <p className="dtp-trust-intro">
              We understand that for clients in the US, UK, and Gulf, entrusting your codebase to a
              remote team requires more than technical competence — it requires full operational transparency.
            </p>
 
            <div className="dtp-trust-grid" aria-label="Trust and protection commitments">
              {[
                {
                  title: 'Full Visibility',
                  desc: 'Through daily standups, sprint retrospectives, and real-time collaboration tools, you have total oversight of every line of code produced — no black boxes, ever.',
                },
                {
                  title: 'Security-First Mindset',
                  desc: 'We prioritize your intellectual property, implementing strict data security protocols, NDA compliance, and role-based access control across all projects.',
                },
                {
                  title: 'Results-Oriented Engagement',
                  desc: 'Our engagement is tied directly to your success metrics — ensuring our team is as invested in your project\'s KPIs as you are.',
                },
              ].map((item, i) => (
                <article
                  key={i}
                  className={`dtp-trust-card animate__animated ${trustInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="dtp-trust-bar" aria-hidden="true" />
                  <h3 className="dtp-trust-title">{item.title}</h3>
                  <p className="dtp-trust-desc">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
 
        {/* ══════════════════════════════════════════════════
            WORKFLOW — H2 + H4s (ordered list for crawlers)
        ══════════════════════════════════════════════════ */}
        <section
          className="dtp-section bg-warmgray"
          ref={workflowRef}
          aria-labelledby="workflow-heading"
        >
          <div className="dtp-container">
            <div className="dtp-workflow-layout">
              <div className="dtp-workflow-left">
                <p className="dtp-section-label">Our Proven Workflow</p>
                <h2 id="workflow-heading" className="dtp-section-title">
                  Structured. Agile.<br />
                  <span className="dtp-blue">Always on track.</span>
                </h2>
                <p className="dtp-workflow-intro">
                  We follow a structured, business-driven agile approach that keeps your project on
                  track from the first conversation to the final delivery — and beyond.
                </p>
                <img
                  src="https://intellipaat.com/blog/wp-content/uploads/2023/11/image-196.png"
                  alt="QllmSoft agile development workflow — sprint planning and iterative delivery process"
                  loading="lazy"
                  width="480"
                  height="280"
                  className="dtp-workflow-img"
                />
              </div>
 
              <ol className="dtp-workflow-steps" aria-label="Dedicated team engagement process steps">
                {[
                  { step: '01', title: 'Discovery',   desc: 'Deep-dive into your architecture, team structure, and business goals to define the right engagement model.' },
                  { step: '02', title: 'Integration', desc: 'Aligning our developers with your existing project management tools, repositories, and communication workflows.' },
                  { step: '03', title: 'Execution',   desc: 'Iterative, high-velocity development cycles with full transparency through daily standups and sprint demos.' },
                  { step: '04', title: 'Scale & Support', desc: 'Ongoing maintenance, performance optimization, and team scaling for long-term product reliability.' },
                ].map((item, i) => (
                  <li
                    key={i}
                    className={`dtp-step animate__animated ${workflowInView ? 'animate__fadeInRight' : ''}`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="dtp-step-left">
                      <div className="dtp-step-circle" aria-label={`Step ${item.step}`}>{item.step}</div>
                      {i < 3 && <div className="dtp-step-line" aria-hidden="true" />}
                    </div>
                    <div className="dtp-step-body">
                      <h4 className="dtp-step-title">{item.title}</h4>
                      <p className="dtp-step-desc">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
 
            <div className="dtp-center-cta mt-48">
              <Link
                to="/contact"
                className="dtp-btn-primary"
                aria-label="Talk to QllmSoft experts about scaling your engineering team"
              >
                Ready to Scale? Talk to Our Experts
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>
 
        {/* ══════════════════════════════════════════════════
            FAQ — H2 + FAQPage itemScope
        ══════════════════════════════════════════════════ */}
        <section
          className="dtp-section bg-white"
          ref={faqRef}
          aria-labelledby="faq-heading"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="dtp-container">
            <div className="dtp-faq-layout">
              <div className="dtp-faq-left">
                <p className="dtp-section-label">FAQ</p>
                <h2 id="faq-heading" className="dtp-section-title">
                  Common<br />
                  <span className="dtp-blue">Questions</span>
                </h2>
                <p className="dtp-faq-note">
                  Can't find your answer here?{' '}
                  <Link
                    to="/contact"
                    aria-label="Contact QllmSoft directly with your questions about dedicated teams"
                  >
                    Reach out to us directly
                  </Link>{' '}
                  — we respond within a few hours on business days.
                </p>
              </div>
              <div className="dtp-faq-list" aria-label="Frequently asked questions about remote dedicated development teams">
                {FAQ_DATA.map((faq, i) => (
                  <FAQItem
                    key={i}
                    faq={faq}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
 
        {/* ══════════════════════════════════════════════════
            FINAL CTA — H2
        ══════════════════════════════════════════════════ */}
        <section className="dtp-final" aria-labelledby="cta-heading">
          <div className="dtp-container dtp-final-inner">
            <p className="dtp-final-eyebrow">Stop letting resource constraints define your product limits.</p>
            <h2 id="cta-heading" className="dtp-final-title">
              The engineering firepower<br />
              <span className="dtp-gold">you need to succeed.</span>
            </h2>
            <p className="dtp-final-sub">
              Whether you are scaling an existing enterprise application or architecting a new AI-driven
              solution, QllmSoft provides the dedicated engineering capacity your product needs to win.
            </p>
            <div className="dtp-final-actions">
              <Link
                to="/contact"
                className="dtp-btn-gold"
                aria-label="Get your free dedicated team consultation from QllmSoft Pakistan"
              >
                Talk to Our Experts
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a
                href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20a%20dedicated%20development%20team%20engagement!"
                target="_blank"
                rel="noopener noreferrer"
                className="dtp-btn-outline-light"
                aria-label="Chat with QllmSoft on WhatsApp about dedicated development teams"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="dtp-final-perks" aria-label="Engagement guarantees">
              <span>✓ Free project estimate</span>
              <span>✓ No commitment required</span>
              <span>✓ Response within 24 hours</span>
            </div>
          </div>
        </section>
 
      </main>
    </>
  );
};
 
export default DedicatedTeamsPage;