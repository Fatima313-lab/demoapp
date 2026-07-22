/**
 * HireDotnetDevelopers.jsx
 * ─────────────────────────────────────────────────────────────
 * /hire-dotnet-developers-pakistan
 *
 * SEMANTIC SEO UPDATE — Koray Tugberk Gubur Framework
 * ─────────────────────────────────────────────────────────────
 * WHAT CHANGED FROM THE PREVIOUS VERSION AND WHY:
 *
 *  1. ONE CENTRAL SEARCH INTENT
 *     Title, H1, and the new direct-answer paragraph all target a single
 *     intent: "hire a .NET developer in Pakistan." Sub-intents (remote,
 *     dedicated, offshore, ASP.NET Core) are handled as H2/H3 sections
 *     of THIS page, not as separate competing keyword targets.
 *
 *  2. DIRECT-ANSWER BLOCK ADDED
 *     A concise ~50-word answer now sits immediately under the H1,
 *     written to be liftable as-is for a featured snippet / AI Overview.
 *     This did not exist before — the old hero went straight into
 *     marketing copy with no direct answer to the query.
 *
 *  3. META KEYWORDS TAG REMOVED
 *     The keywords meta tag has carried zero ranking weight for over a
 *     decade and only signals outdated SEO practice. Removed entirely.
 *
 *  4. META DESCRIPTION SHORTENED
 *     Previous description ran ~220 characters and was truncated by
 *     Google. Rewritten to ~150 characters so the full value prop shows
 *     in search results.
 *
 *  5. WEBPAGE SCHEMA + DATEMODIFIED ADDED
 *     No freshness signal existed anywhere on this page. Added a
 *     WebPage JSON-LD block with datePublished/dateModified — update
 *     dateModified every time this page's content is materially edited.
 *
 *  6. AGGREGATERATING ADDED (WITH REQUIRED ACTION)
 *     Individual Review microdata existed but there was no
 *     AggregateRating, which is what actually earns star-rating rich
 *     snippets in search results. Added below — but the ratingValue /
 *     reviewCount fields are PLACEHOLDERS. Replace them with your real,
 *     verifiable totals from Upwork/Freelancer before shipping. Fabricated
 *     review/rating markup violates Google's structured-data guidelines
 *     and risks a manual action — never publish invented numbers.
 *
 *  7. TOPICAL-MAP-ALIGNED INTERNAL LINKING
 *     - "Legacy System Migration" now links to
 *       /legacy-system-modernization-services (existing pillar).
 *     - "eCommerce & Payment Portals" now links to
 *       /ecommerce-development-services (NEW pillar — see the master
 *       Semantic SEO guide; do not ship this link until that page exists).
 *     - A new "Hiring for a different stack?" block cross-links to the
 *       sibling /hire-react-developers-pakistan and
 *       /hire-angular-developers-pakistan pages, and to the outsourcing
 *       pillar /outsource-software-development-to-pakistan — this is
 *       the Outer Section reinforcing its Core Section siblings.
 *     - The ASP.NET Core mention in the ASP.NET section now links to
 *       /asp-net-core-development-services (NEW promoted pillar — see
 *       the master guide; do not ship until that page is live).
 *
 *  8. THIS URL IS THE SINGLE CANONICAL TARGET
 *     /blog/hire-dotnet-developers-pakistan duplicates this page's exact
 *     intent. Per the sitemap audit, that blog post must 301-redirect
 *     here — this file should remain the only live URL for this intent.
 *
 *  9. COPY TIGHTENED
 *     Generic superlatives ("world-class," "cutting-edge") replaced with
 *     concrete, specific claims already backed by data on the page
 *     (technology names, percentages, years) — entity-grounded copy reads
 *     as more credible than adjective-only marketing language.
 *
 * All original SEO groundwork (Helmet, Organization/Service/Breadcrumb/
 * FAQPage JSON-LD, semantic HTML5, ARIA labelling, image alt text,
 * single H1 → H2 → H3 → H4 hierarchy) was already correctly implemented
 * and is preserved below.
 * ───────────────────────────────────────────────────────────── */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './HireDotnetDevelopers.css';
import 'animate.css';

/* ─── Constants ──────────────────────────────────────────── */
const PAGE_URL = 'https://qllmsoft.com/hire-dotnet-developers-pakistan';
const OG_IMAGE  = 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg';
const PAGE_TITLE = 'Hire .NET Developers in Pakistan | Dedicated & Remote | QllmSoft';
const PAGE_DESCRIPTION =
  'Hire dedicated, remote, or offshore .NET developers in Pakistan. ASP.NET Core & .NET 8 experts at 60–70% lower cost than US/UK. Start in days.';

/* TODO: set this to the date this page was first published, and update
   DATE_MODIFIED every time the content changes materially. */
const DATE_PUBLISHED = '2025-09-09';
const DATE_MODIFIED  = '2026-07-19';

/* ─── JSON-LD: WebPage (freshness signal) ────────────────── */
const schemaWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': PAGE_URL,
  url: PAGE_URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'QllmSoft', url: 'https://qllmsoft.com' },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
};

/* ─── JSON-LD: Organization ──────────────────────────────── */
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

/* ─── JSON-LD: Service ───────────────────────────────────── */
/* AGGREGATE RATING: REPLACE PLACEHOLDER VALUES BEFORE SHIPPING.
   Use only your real, verifiable rating and review count (e.g. pulled
   directly from your Upwork/Freelancer profile totals). Never publish
   invented numbers — false review markup breaks Google's structured
   data policy and risks a manual action. */
const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: '.NET Development',
  name: 'Hire .NET Developers in Pakistan',
  description:
    'QllmSoft provides dedicated, remote, and offshore .NET developers in Pakistan. Our ASP.NET Core and .NET 8 developers build web applications, APIs, desktop software, and enterprise solutions for global businesses.',
  provider: { '@type': 'Organization', name: 'QllmSoft', url: 'https://qllmsoft.com' },
  areaServed: ['Pakistan', 'United States', 'United Kingdom', 'UAE', 'Saudi Arabia'],
  url: PAGE_URL,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',   // TODO: replace with your real average rating
    reviewCount: '50',    // TODO: replace with your real total review count
    bestRating: '5',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '.NET Developer Hiring Models',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dedicated .NET Developers' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Remote .NET Developers Pakistan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Offshore .NET Development Team' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ASP.NET Core Development Services', url: 'https://qllmsoft.com/asp-net-core-development-services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '.NET Core Developers for Hire' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dotnet Freelancer Pakistan' } },
    ],
  },
};

/* ─── JSON-LD: BreadcrumbList ────────────────────────────── */
const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://qllmsoft.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://qllmsoft.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Hire .NET Developers in Pakistan', item: PAGE_URL },
  ],
};

/* ─── FAQ data ───────────────────────────────────────────── */
const FAQ_DATA = [
  {
    q: 'How do I hire .NET developers from Pakistan?',
    a: 'Contact QllmSoft through our website or WhatsApp with your project scope. We offer dedicated full-time, part-time, or project-based engagement models and can onboard a matched developer within days of your first call.',
  },
  {
    q: 'What is the cost of hiring a .NET developer in Pakistan?',
    a: 'Rates run roughly 60–70% lower than equivalent US, UK, or European hires, varying by experience level and engagement model. Contact us for a fixed-price quote based on your specific requirements.',
  },
  {
    q: 'What .NET technologies does QllmSoft specialise in?',
    a: 'ASP.NET Core, .NET 8, ASP.NET MVC, Web API, Entity Framework Core, Blazor, SignalR, Azure deployment, SQL Server, and microservices architecture.',
  },
  {
    q: 'Can I hire a remote .NET developer from Pakistan?',
    a: 'Yes. Our developers work in your time zone, communicate in fluent English, and use standard collaboration tools including Jira, GitHub, Slack, and Azure DevOps.',
  },
  {
    q: 'What is the difference between a dedicated and an offshore .NET developer?',
    a: 'A dedicated developer works exclusively on your project full-time, like an in-house hire. An offshore developer works from Pakistan on a project or retainer basis, which typically costs less and scales more flexibly.',
  },
  {
    q: 'Do you provide support after a .NET developer finishes the project?',
    a: 'Yes — every engagement includes a post-delivery support period, plus optional ongoing maintenance contracts covering performance monitoring, security updates, and feature enhancements.',
  },
];

/* ─── JSON-LD: FAQPage ───────────────────────────────────── */
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_DATA.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

/* ─── Comparison table data ──────────────────────────────── */
const COMPARISON_ROWS = [
  { aspect: 'Cost',          inhouse: 'High salaries + infrastructure',     offshore: 'Lower rates — no extra overheads' },
  { aspect: 'Talent Pool',   inhouse: 'Limited to local candidates',        offshore: 'Access to a broader, experienced pool' },
  { aspect: 'Flexibility',   inhouse: 'Fixed working hours',                offshore: 'Part-time, full-time, or project-based' },
  { aspect: 'Scalability',   inhouse: 'Difficult to scale quickly',         offshore: 'Scale up or down in days' },
  { aspect: 'Time to Hire',  inhouse: 'Weeks to months',                    offshore: 'Onboard within days' },
  { aspect: 'Communication', inhouse: 'Direct but geographically bound',    offshore: 'Fluent English, async & sync options' },
];

/* ─── FAQ Accordion ──────────────────────────────────────── */
const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  const id = `dotnet-faq-${index}`;
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
const HireDotnetDevelopers = () => {

  const { ref: introRef,      inView: introInView      } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: whyRemoteRef,  inView: whyRemoteInView  } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: dedicatedRef,  inView: dedicatedInView  } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: webServRef,    inView: webServInView    } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: coreRef,       inView: coreInView       } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: aspRef,        inView: aspInView        } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: compRef,       inView: compInView       } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: whyPakRef,     inView: whyPakInView     } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: stackRef,      inView: stackInView      } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: reviewRef,     inView: reviewInView     } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: hiringRef,     inView: hiringInView     } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* ══════════════════════════════════════════════
          SEO HEAD
      ══════════════════════════════════════════════ */}
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        {/* meta keywords intentionally removed — no ranking value, signals outdated SEO */}
        <meta name="author"  content="QllmSoft" />
        <meta name="robots"  content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type"         content="website" />
        <meta property="og:url"          content={PAGE_URL} />
        <meta property="og:site_name"    content="QllmSoft" />
        <meta property="og:title"        content={PAGE_TITLE} />
        <meta property="og:description"  content={PAGE_DESCRIPTION} />
        <meta property="og:image"        content={OG_IMAGE} />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt"    content="QllmSoft — Hire .NET Developers in Pakistan" />
        <meta property="og:locale"       content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image"       content={OG_IMAGE} />
        <meta name="twitter:image:alt"   content="Hire .NET Developers Pakistan — QllmSoft" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="dotnet-page" role="main">

        {/* ══════════════════════════════════════════════
            HERO — single H1 + direct-answer block
        ══════════════════════════════════════════════ */}
        <header className="dotnet-hero">
          <div className="dotnet-hero__glow dotnet-hero__glow--left"  aria-hidden="true" />
          <div className="dotnet-hero__glow dotnet-hero__glow--right" aria-hidden="true" />
          <div className="dotnet-hero__grid-pattern"                  aria-hidden="true" />

          <div className="container dotnet-hero__inner">

            {/* Left content */}
            <div className="dotnet-hero__content">
              <div className="dotnet-hero__badge">
                <span className="dotnet-hero__badge-dot" aria-hidden="true" />
                .NET Development Company in Pakistan
              </div>

              {/* SINGLE H1 — matches the page's one Central Search Intent */}
              <h1 className="dotnet-hero__title">
                Hire <span className="dotnet-accent">.NET Developers</span><br />
                in Pakistan
              </h1>

              {/* DIRECT-ANSWER BLOCK — ~50 words, written to be liftable
                  as-is for a featured snippet or AI Overview. */}
              <p className="dotnet-hero__direct-answer">
                QllmSoft connects you with dedicated, remote, or offshore .NET developers
                based in Pakistan, specializing in ASP.NET Core and .NET 8. Engagements
                start with a free scoping call, matched developers are available for
                interview within days, and typical rates run 60–70% below US or UK agency
                pricing for the same seniority.
              </p>

              <p className="dotnet-hero__sub">
                Remote, dedicated, and offshore .NET development for global businesses —
                built on ASP.NET Core and .NET 8, without the overhead of an in-house team.
              </p>

              <div className="dotnet-hero__buttons">
                <Link
                  to="/contact"
                  className="btn btn-primary dotnet-btn-primary"
                  aria-label="Hire .NET developers from QllmSoft Pakistan — get started today"
                >
                  Hire .NET Developers Now
                </Link>
                <a
                  href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20hire%20a%20.NET%20developer!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn dotnet-btn-whatsapp"
                  aria-label="WhatsApp QllmSoft to hire a .NET developer"
                >
                  <span aria-hidden="true">💬</span> WhatsApp Us
                </a>
              </div>

              {/* Stats row — keep only figures you can stand behind */}
              <div className="dotnet-hero__stats" aria-label="QllmSoft .NET development key figures">
                {[
                  { num: '10+',  label: 'Years .NET Experience' },
                  { num: '100%', label: 'Upwork Job Success'    },
                  { num: '50+',  label: 'Projects Delivered'    },
                  { num: '5★',   label: 'Client Rating'         },
                ].map(s => (
                  <div key={s.label} className="dotnet-hero__stat">
                    <span className="dotnet-hero__stat-num">{s.num}</span>
                    <span className="dotnet-hero__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — hiring model cards */}
            <aside className="dotnet-hero__models" aria-label=".NET developer hiring models">
              <p className="dotnet-hero__models-label">Flexible Hiring Models</p>
              {[
                {
                  icon: '👤',
                  title: 'Dedicated Developer',
                  desc: 'Full-time developer exclusively on your project',
                  tag: 'Most Popular',
                  tagClass: 'dotnet-tag--gold',
                },
                {
                  icon: '🌐',
                  title: 'Remote Developer',
                  desc: 'Work in your time zone with daily standups',
                  tag: 'Flexible',
                  tagClass: 'dotnet-tag--blue',
                },
                {
                  icon: '🚢',
                  title: 'Offshore Team',
                  desc: 'Scale a full .NET team without overheads',
                  tag: 'Best Value',
                  tagClass: 'dotnet-tag--green',
                },
                {
                  icon: '⚡',
                  title: 'Freelance / Short-Term',
                  desc: 'Bug fixes, modules, or quick enhancements',
                  tag: 'Quick Start',
                  tagClass: 'dotnet-tag--purple',
                },
              ].map(m => (
                <div key={m.title} className="dotnet-model-card">
                  <div className="dotnet-model-card__left">
                    <span className="dotnet-model-card__icon" aria-hidden="true">{m.icon}</span>
                    <div>
                      <strong>{m.title}</strong>
                      <p>{m.desc}</p>
                    </div>
                  </div>
                  <span className={`dotnet-model-tag ${m.tagClass}`}>{m.tag}</span>
                </div>
              ))}

              {/* Tech pills */}
              <div className="dotnet-hero__tech-pills" aria-label="Technologies our .NET developers use">
                {['ASP.NET Core', '.NET 8', 'Web API', 'EF Core', 'Blazor', 'Azure', 'SQL Server', 'SignalR'].map(t => (
                  <span key={t} className="dotnet-tech-pill">{t}</span>
                ))}
              </div>
            </aside>

          </div>
        </header>

        {/* ══════════════════════════════════════════════
            INTRO — H2
        ══════════════════════════════════════════════ */}
        <section
          className="section dotnet-intro"
          ref={introRef}
          aria-labelledby="intro-heading"
        >
          <div className="container">
            <div className="dotnet-intro__layout">
              <div className={`dotnet-intro__text animate__animated ${introInView ? 'animate__fadeInLeft' : ''}`}>
                <p className="section-eyebrow" style={{ textAlign: 'left' }}>About Our Services</p>
                <h2 id="intro-heading">
                  Hire .NET Developers in Pakistan — The Smart Choice for Global Businesses
                </h2>
                <p>
                  Demand for .NET solutions has grown as businesses look for scalable, secure
                  web and desktop applications without the cost of an in-house engineering
                  team. Pakistan has become a common source for this hiring specifically
                  because it combines deep .NET expertise with lower rates and strong English
                  communication — not a trade-off between the two.
                </p>
                <p>
                  Whether you need a short-term project or a long-term engineering partner,
                  QllmSoft's <strong>ASP.NET Core and .NET 8 developers</strong> deliver
                  production-grade applications at 60–70% of what the same seniority would
                  cost in the US or UK, with no change in code quality, security practice,
                  or delivery discipline.
                </p>
                <p>
                  Our developers also work across{' '}
                  <Link to="/custom-software-development-services">custom software development</Link>,{' '}
                  <Link to="/api-development-services">REST API development</Link>, and{' '}
                  <Link to="/website-development-services">enterprise web applications</Link> —
                  a complete .NET engineering capability from a single partner rather than
                  several disconnected freelancers.
                </p>
              </div>

              <aside className={`dotnet-intro__highlights animate__animated ${introInView ? 'animate__fadeInRight' : ''}`}
                aria-label="Key advantages of hiring .NET developers from QllmSoft Pakistan"
              >
                {[
                  { icon: '💰', title: '60–70% Cost Savings',       desc: 'vs US, UK, or European agencies'          },
                  { icon: '⚡', title: 'Onboard in Days',            desc: 'Not weeks or months like in-house hiring' },
                  { icon: '🕐', title: 'Any Time Zone',              desc: 'Flexible working hours to match yours'    },
                  { icon: '🔒', title: 'GDPR & HIPAA Aware',         desc: 'Security-first development practices'     },
                  { icon: '📋', title: 'Full Code Ownership',        desc: '100% IP rights — always yours'            },
                  { icon: '🤝', title: 'Dedicated Account Manager',  desc: 'Single point of contact throughout'       },
                ].map((h, i) => (
                  <div key={i} className="dotnet-highlight-card">
                    <span className="dotnet-highlight-card__icon" aria-hidden="true">{h.icon}</span>
                    <div>
                      <strong>{h.title}</strong>
                      <p>{h.desc}</p>
                    </div>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            WHY REMOTE — H2 + H3
        ══════════════════════════════════════════════ */}
        <section
          className="section dotnet-why-remote"
          ref={whyRemoteRef}
          aria-labelledby="why-remote-heading"
        >
          <div className="container">
            <p className="section-eyebrow">Remote .NET Expertise</p>
            <div className="section-title">
              <h2 id="why-remote-heading">
                Why Hire a Remote .NET Developer from Pakistan?
              </h2>
              <p>
                Remote hiring is now the default in software delivery. Hiring a remote .NET
                developer from Pakistan gives you access to an experienced talent pool
                without the overhead of in-house infrastructure.
              </p>
            </div>
            <div className="dotnet-remote__grid">
              {[
                {
                  icon: '🌍',
                  title: 'Global Client Experience',
                  desc: 'Our developers have delivered .NET projects for clients across the US, UK, UAE, and Europe, so international delivery norms are already familiar, not something we adapt to on your project.',
                },
                {
                  icon: '🛠️',
                  title: 'Familiar with Standard Tools',
                  desc: 'Jira, GitHub, Azure DevOps, Slack, Trello, and Figma are already part of daily workflow — no onboarding delay while a developer learns your stack.',
                },
                {
                  icon: '🕐',
                  title: 'Workable Time Zones',
                  desc: 'Pakistan Standard Time overlaps well with European and Gulf business hours, and schedules readily shift to cover more of a US working day when needed.',
                },
                {
                  icon: '💬',
                  title: 'Fluent English Communication',
                  desc: 'Written updates, video calls, and technical documentation are handled in clear, professional English throughout the engagement.',
                },
                {
                  icon: '📊',
                  title: 'Transparent Reporting',
                  desc: 'Daily standups, weekly sprint reviews, and shared progress dashboards keep you current on exactly where the project stands.',
                },
                {
                  icon: '⚡',
                  title: 'No Infrastructure Overhead',
                  desc: 'No office space, hardware, or HR cost to carry — you pay for an equipped, experienced .NET developer and the work delivered.',
                },
              ].map((r, i) => (
                <article
                  key={i}
                  className={`dotnet-remote-card animate__animated ${whyRemoteInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <span className="dotnet-remote-card__icon" aria-hidden="true">{r.icon}</span>
                  <h3 className="dotnet-remote-card__title">{r.title}</h3>
                  <p className="dotnet-remote-card__desc">{r.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            DEDICATED DEVELOPERS — H2 + H3s
        ══════════════════════════════════════════════ */}
        <section
          className="section dotnet-dedicated"
          ref={dedicatedRef}
          aria-labelledby="dedicated-heading"
        >
          <div className="container">
            <div className="dotnet-dedicated__layout">

              <div className={`dotnet-dedicated__text animate__animated ${dedicatedInView ? 'animate__fadeInLeft' : ''}`}>
                <p className="section-eyebrow" style={{ textAlign: 'left' }}>Dedicated Hiring Model</p>
                <h2 id="dedicated-heading">
                  Dedicated .NET Developers for Hire
                </h2>
                <p>
                  A dedicated .NET developer from QllmSoft works exclusively on your project —
                  no split attention across other clients. You get a developer who is fully
                  integrated with your team and accountable to your sprint plan, not ours.
                </p>
                <Link
                  to="/contact"
                  className="btn btn-primary"
                  aria-label="Hire a dedicated .NET developer from QllmSoft Pakistan"
                  style={{ marginTop: '16px', display: 'inline-block' }}
                >
                  Hire a Dedicated Developer
                </Link>
              </div>

              <div className={`dotnet-dedicated__cards animate__animated ${dedicatedInView ? 'animate__fadeInRight' : ''}`}>
                {[
                  {
                    icon: '🎯',
                    title: 'Full-Time Commitment',
                    desc: 'Your developer works exclusively on your project — no context switching, no split attention.',
                  },
                  {
                    icon: '💬',
                    title: 'Transparent Communication',
                    desc: 'Daily standups, written progress reports, and sprint demos, so you always know what shipped, what is in progress, and what is next.',
                  },
                  {
                    icon: '🔄',
                    title: 'Agile Delivery',
                    desc: 'Two-week sprints with regular feedback loops, so you can review and adjust without waiting on a single big-bang delivery.',
                  },
                  {
                    icon: '💰',
                    title: 'Cost Efficiency',
                    desc: 'A dedicated developer from Pakistan costs a fraction of an equivalent US or UK hire, at the same seniority and output quality.',
                  },
                ].map((c, i) => (
                  <article key={i} className="dotnet-dedicated-card">
                    <span className="dotnet-dedicated-card__icon" aria-hidden="true">{c.icon}</span>
                    <div>
                      <h3 className="dotnet-dedicated-card__title">{c.title}</h3>
                      <p className="dotnet-dedicated-card__desc">{c.desc}</p>
                    </div>
                  </article>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            WEB DEVELOPMENT SERVICES — H2 + H3s
        ══════════════════════════════════════════════ */}
        <section
          className="section dotnet-web-services"
          ref={webServRef}
          aria-labelledby="webserv-heading"
        >
          <div className="container">
            <p className="section-eyebrow">What Our Developers Build</p>
            <div className="section-title">
              <h2 id="webserv-heading">
                .NET Web Development Services in Pakistan
              </h2>
              <p>
                Every solution below is custom-engineered to the project's own requirements —
                no templated starting point, no inherited technical debt.
              </p>
            </div>
            <div className="dotnet-webserv__grid">
              {[
                {
                  num: '01', icon: '🏗️',
                  title: 'Custom ASP.NET Core Applications',
                  desc: 'Web applications built with ASP.NET Core MVC and .NET 8, architected around your business logic rather than a generic template.',
                  tags: ['ASP.NET Core', '.NET 8', 'MVC', 'Clean Architecture'],
                },
                {
                  num: '02', icon: '🔒',
                  title: 'Secure Enterprise Architecture',
                  desc: 'OWASP-aligned builds with role-based access control, SSL, and audit logging designed in from the start, not added afterward.',
                  tags: ['OWASP', 'RBAC', 'SSL', 'Audit Logging'],
                },
                {
                  num: '03', icon: '🔗',
                  title: 'REST & GraphQL API Development',
                  desc: 'API development and integration for cross-platform systems, documented with Swagger/OpenAPI so your team can consume it without guesswork.',
                  tags: ['REST API', 'GraphQL', 'Swagger', 'OAuth 2.0'],
                },
                {
                  num: '04', icon: '🔄',
                  title: 'Legacy System Migration',
                  desc: (
                    <>
                      Upgrade outdated .NET Framework, WebForms, or SOAP systems to modern .NET 8
                      while preserving business logic. See our full{' '}
                      <Link to="/legacy-system-modernization-services">legacy system modernization services</Link>{' '}
                      for the phased migration process.
                    </>
                  ),
                  tags: ['.NET Migration', 'WebForms', 'Modernization'],
                },
                {
                  num: '05', icon: '🛒',
                  title: 'eCommerce & Payment Portals',
                  desc: (
                    <>
                      High-transaction eCommerce platforms with Stripe, JazzCash, and Easypaisa
                      integrations. For custom builds beyond a templated storefront, see{' '}
                      <Link to="/ecommerce-development-services">e-commerce development services</Link>.
                    </>
                  ),
                  tags: ['eCommerce', 'Stripe', 'JazzCash', 'Easypaisa'],
                },
                {
                  num: '06', icon: '🔧',
                  title: 'Ongoing Maintenance & Optimization',
                  desc: 'Performance tuning, security patches, dependency updates, and feature work to keep a .NET application healthy well after launch.',
                  tags: ['Maintenance', 'Performance', 'Security Patches'],
                },
              ].map((s, i) => (
                <article
                  key={i}
                  className={`dotnet-webserv-card animate__animated ${webServInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.09}s` }}
                  itemScope itemType="https://schema.org/Service"
                >
                  <div className="dotnet-webserv-card__top">
                    <span className="dotnet-webserv-card__num" aria-hidden="true">{s.num}</span>
                    <span className="dotnet-webserv-card__icon" aria-hidden="true">{s.icon}</span>
                  </div>
                  <h3 className="dotnet-webserv-card__title" itemProp="name">{s.title}</h3>
                  <p className="dotnet-webserv-card__desc" itemProp="description">{s.desc}</p>
                  <div className="dotnet-webserv-card__tags">
                    {s.tags.map(t => <span key={t} className="dotnet-service-tag">{t}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            .NET CORE SECTION — H2 + H3s
        ══════════════════════════════════════════════ */}
        <section
          className="section dotnet-core-section"
          ref={coreRef}
          aria-labelledby="core-heading"
        >
          <div className="container">
            <p className="section-eyebrow">.NET Core Expertise</p>
            <div className="section-title">
              <h2 id="core-heading">
                .NET Core Developers for Hire — Cross-Platform Development
              </h2>
              <p>
                .NET Core (now .NET 8) is the standard choice for modern, cloud-ready
                applications. Our developers build for its full capability rather than
                treating it as a drop-in replacement for older .NET Framework code.
              </p>
            </div>
            <div className="dotnet-core__grid">
              {[
                {
                  icon: '💻',
                  title: 'Cross-Platform Applications',
                  desc: 'Applications built with .NET Core run on Windows, Linux, and macOS, which reduces infrastructure lock-in and deployment cost.',
                  stat: 'Windows · Linux · macOS',
                },
                {
                  icon: '⚡',
                  title: 'High-Performance Architecture',
                  desc: '.NET 8 consistently ranks among the fastest web frameworks in independent benchmarks such as TechEmpower.',
                  stat: 'Top TechEmpower Rankings',
                },
                {
                  icon: '☁️',
                  title: 'Cloud-Native by Design',
                  desc: 'Architected for Azure, AWS, and Docker, with containerization, auto-scaling, and microservices patterns built in from the start.',
                  stat: 'Azure · AWS · Docker',
                },
                {
                  icon: '🛡️',
                  title: 'Long-Term Microsoft Support',
                  desc: "Every LTS release of .NET Core receives Microsoft security patches for years, protecting the application's lifespan.",
                  stat: 'LTS Security Updates',
                },
              ].map((c, i) => (
                <article
                  key={i}
                  className={`dotnet-core-card animate__animated ${coreInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="dotnet-core-card__icon" aria-hidden="true">{c.icon}</span>
                  <h3 className="dotnet-core-card__title">{c.title}</h3>
                  <p className="dotnet-core-card__desc">{c.desc}</p>
                  <span className="dotnet-core-card__stat">{c.stat}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            ASP.NET SECTION — H2 + H3s
        ══════════════════════════════════════════════ */}
        <section
          className="section dotnet-asp-section"
          ref={aspRef}
          aria-labelledby="asp-heading"
        >
          <div className="container">
            <div className="dotnet-asp__layout">

              <div className={`dotnet-asp__text animate__animated ${aspInView ? 'animate__fadeInLeft' : ''}`}>
                <p className="section-eyebrow" style={{ textAlign: 'left' }}>ASP.NET Specialization</p>
                <h2 id="asp-heading">
                  Hire an ASP.NET Developer in Pakistan
                </h2>
                <p>
                  Our ASP.NET developers build dynamic, database-driven applications — from
                  B2B portals and eCommerce stores to enterprise CMS and ERP systems — with
                  code that is tested for performance, security, and scale before handoff.
                </p>
                <p>
                  For a full breakdown of our{' '}
                  <Link to="/asp-net-core-development-services">ASP.NET Core development services</Link>,
                  or a{' '}
                  <Link to="/website-development-services">complete custom web platform</Link>,
                  see the dedicated pages for each.
                </p>
              </div>

              <div className={`dotnet-asp__cards animate__animated ${aspInView ? 'animate__fadeInRight' : ''}`}>
                {[
                  { icon: '🌐', title: 'Dynamic Websites',     desc: 'Database-driven websites and portals built with ASP.NET Core Razor Pages and MVC.' },
                  { icon: '🛒', title: 'eCommerce Platforms',  desc: 'Scalable online stores with integrated payment gateways and inventory systems.' },
                  { icon: '💳', title: 'Payment Gateways',     desc: 'Stripe, PayPal, JazzCash, and Easypaisa integrations built directly into your app.' },
                  { icon: '📝', title: 'CMS Solutions',        desc: 'Content management systems tailored to your editorial and publishing workflow.' },
                  { icon: '🏭', title: 'ERP & CRM Systems',    desc: 'Resource planning and CRM platforms built around how your business actually operates.' },
                  { icon: '📊', title: 'Real-Time Dashboards', desc: 'Live analytics dashboards built with SignalR and Blazor for immediate visibility.' },
                ].map((a, i) => (
                  <article key={i} className="dotnet-asp-card">
                    <span className="dotnet-asp-card__icon" aria-hidden="true">{a.icon}</span>
                    <div>
                      <h3 className="dotnet-asp-card__title">{a.title}</h3>
                      <p className="dotnet-asp-card__desc">{a.desc}</p>
                    </div>
                  </article>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            TECH STACK — H2
        ══════════════════════════════════════════════ */}
        <section
          className="section dotnet-stack"
          ref={stackRef}
          aria-labelledby="stack-heading"
        >
          <div className="container">
            <p className="section-eyebrow">Technology Stack</p>
            <div className="section-title">
              <h2 id="stack-heading">
                Technologies Our .NET Developers Are Expert In
              </h2>
              <p>
                Current, hands-on experience across the Microsoft .NET ecosystem — not a
                list of technologies we merely support.
              </p>
            </div>
            <div className="dotnet-stack__grid">
              {[
                {
                  category: 'Frameworks & Runtime',
                  color: '#2B6CB0',
                  items: ['ASP.NET Core 8', 'ASP.NET MVC', '.NET 8 / 7 / 6', 'Blazor', 'SignalR', 'Minimal APIs'],
                },
                {
                  category: 'API & Integration',
                  color: '#edb702',
                  items: ['REST API / Web API', 'GraphQL (.NET)', 'gRPC', 'SOAP / XML', 'OAuth 2.0 / JWT', 'Swagger / OpenAPI'],
                },
                {
                  category: 'Data & ORM',
                  color: '#276749',
                  items: ['SQL Server', 'Entity Framework Core', 'Dapper', 'PostgreSQL', 'Redis (caching)', 'Azure Cosmos DB'],
                },
                {
                  category: 'Cloud & DevOps',
                  color: '#744210',
                  items: ['Microsoft Azure', 'AWS (EC2, Lambda)', 'Docker / Kubernetes', 'CI/CD Pipelines', 'GitHub Actions', 'Azure DevOps'],
                },
                {
                  category: 'Frontend (Full-Stack)',
                  color: '#553C9A',
                  items: ['React.js', 'Angular', 'Razor Pages', 'Blazor WebAssembly', 'Bootstrap / Tailwind', 'JavaScript / TypeScript'],
                },
                {
                  category: 'Testing & Security',
                  color: '#9B2C2C',
                  items: ['xUnit / NUnit', 'Moq / Integration Tests', 'OWASP Best Practices', 'SonarQube', 'Penetration Testing', 'GDPR Compliance'],
                },
              ].map((col, i) => (
                <article
                  key={i}
                  className={`dotnet-stack-col animate__animated ${stackInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.09}s`, '--stack-color': col.color }}
                >
                  <h3 className="dotnet-stack-col__title">{col.category}</h3>
                  <ul className="dotnet-stack-col__list" aria-label={`${col.category} technologies`}>
                    {col.items.map(item => (
                      <li key={item} className="dotnet-stack-col__item">{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            COMPARISON — H2
        ══════════════════════════════════════════════ */}
        <section
          className="section dotnet-comparison"
          ref={compRef}
          aria-labelledby="comparison-heading"
        >
          <div className="container">

            {/* Freelancer vs Offshore narrative */}
            <p className="section-eyebrow">Dotnet Freelancer vs Offshore Developers</p>
            <div className="section-title">
              <h2 id="comparison-heading">
                Choosing the Right Engagement Model for Your .NET Project
              </h2>
              <p>
                Different project sizes and timelines call for different hiring approaches.
                Here is how each model compares, and when each one fits.
              </p>
            </div>

            <div className="dotnet-vs__cards">
              <article className="dotnet-vs-card dotnet-vs-card--freelance">
                <h3 className="dotnet-vs-card__title">
                  <span aria-hidden="true">👤</span> Dotnet Freelancer Pakistan
                </h3>
                <p className="dotnet-vs-card__desc">
                  Best for short-term work — bug fixes, module development, or small
                  enhancements. Freelancers are budget-friendly and flexible, which suits
                  startups and SMEs with a well-defined, smaller-scope requirement.
                </p>
                <ul className="dotnet-vs-card__list">
                  <li>✔ Budget-friendly for small tasks</li>
                  <li>✔ Fast to engage and start</li>
                  <li>✔ Flexible availability</li>
                  <li>✘ Less accountability on large projects</li>
                  <li>✘ Risk of availability gaps</li>
                </ul>
              </article>

              <div className="dotnet-vs__divider" aria-hidden="true">VS</div>

              <article className="dotnet-vs-card dotnet-vs-card--offshore">
                <h3 className="dotnet-vs-card__title">
                  <span aria-hidden="true">🚢</span> Offshore .NET Developers (QllmSoft)
                </h3>
                <p className="dotnet-vs-card__desc">
                  Best for ongoing projects, enterprise builds, or when you need a team
                  that behaves like an extension of your own — full accountability,
                  structured delivery, and support that continues after launch. See our{' '}
                  <Link to="/outsource-software-development-to-pakistan">software outsourcing services</Link>{' '}
                  for the full engagement process.
                </p>
                <ul className="dotnet-vs-card__list">
                  <li>✔ Affordable vs US/UK/EU rates</li>
                  <li>✔ Experienced in global enterprise projects</li>
                  <li>✔ Time zone flexibility for productivity</li>
                  <li>✔ Fluent English communication</li>
                  <li>✔ Structured, accountable delivery</li>
                </ul>
              </article>
            </div>

            {/* Comparison table */}
            <div className="dotnet-table-wrap">
              <table
                className={`dotnet-table animate__animated ${compInView ? 'animate__fadeInUp' : ''}`}
                aria-label="Comparison of In-House hiring vs Offshore .NET developers from Pakistan"
              >
                <caption className="dotnet-table__caption">
                  In-House vs. Offshore .NET Developers — Key Differences
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Aspect</th>
                    <th scope="col">In-House Hiring</th>
                    <th scope="col" className="dotnet-col--highlight">Offshore Hiring — Pakistan</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={i}>
                      <td className="dotnet-col--factor">{row.aspect}</td>
                      <td>{row.inhouse}</td>
                      <td className="dotnet-col--highlight dotnet-col--good">{row.offshore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            WHY PAKISTAN — H2 + H3s
        ══════════════════════════════════════════════ */}
        <section
          className="section dotnet-why-pak"
          ref={whyPakRef}
          aria-labelledby="why-pak-heading"
        >
          <div className="container">
            <p className="section-eyebrow">The Pakistan Advantage</p>
            <div className="section-title">
              <h2 id="why-pak-heading">
                Why Choose .NET Developers from Pakistan?
              </h2>
              <p>
                Pakistan's technology sector has become a recognized source of engineering
                talent, combining strong technical skill with cost efficiency rather than
                trading one for the other.
              </p>
            </div>
            <div className="dotnet-why-pak__grid">
              {[
                { icon: '💰', title: 'Affordable Pricing',      desc: 'Senior .NET developers at 60–70% lower cost than US, UK, or Australian agencies, without a corresponding drop in quality.' },
                { icon: '🎓', title: 'Skilled Professionals',   desc: 'Pakistan produces roughly 500,000 engineering graduates a year; our developers bring real-world experience across the .NET ecosystem.' },
                { icon: '🌍', title: 'Global Experience',       desc: 'QllmSoft developers have built for clients in the UK, US, UAE, Saudi Arabia, and Jordan, so international delivery standards are already the norm.' },
                { icon: '💬', title: 'Strong Communication',    desc: 'Fluent English across written and verbal formats, at every stage of the engagement.' },
                { icon: '🔄', title: 'Flexible Engagement',     desc: 'Remote, dedicated, freelance, or fully offshore team — pick the model that fits your project size, timeline, and budget.' },
                { icon: '🛡️', title: 'Accountable Delivery',   desc: 'Structured sprints, milestone-based delivery, and a 30-day post-launch support period on every project.' },
              ].map((w, i) => (
                <article
                  key={i}
                  className={`dotnet-why-pak-card animate__animated ${whyPakInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.09}s` }}
                >
                  <span className="dotnet-why-pak-card__icon" aria-hidden="true">{w.icon}</span>
                  <h3 className="dotnet-why-pak-card__title">{w.title}</h3>
                  <p className="dotnet-why-pak-card__desc">{w.desc}</p>
                </article>
              ))}
            </div>

            {/* Sibling stack cross-links — reinforces the /hire-developers
                Outer Section cluster instead of leaving these pages isolated. */}
            <div className="dotnet-related-stacks" aria-label="Hiring for a different technology stack">
              <p className="dotnet-related-stacks__label">Hiring for a different stack?</p>
              <nav aria-label="Related developer hiring pages">
                <Link to="/hire-react-developers-pakistan">Hire React Developers</Link>
                <Link to="/hire-angular-developers-pakistan">Hire Angular Developers</Link>
              </nav>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            HOW WE HIRE — H2 + H4s
        ══════════════════════════════════════════════ */}
        <section
          className="section dotnet-hiring-process"
          ref={hiringRef}
          aria-labelledby="hiring-heading"
        >
          <div className="container">
            <p className="section-eyebrow">Simple Onboarding</p>
            <div className="section-title">
              <h2 id="hiring-heading">How to Hire a .NET Developer from QllmSoft</h2>
              <p>
                From first contact to your developer's first commit, the process is built to
                move fast without skipping the steps that protect the project.
              </p>
            </div>
            <ol className="dotnet-hiring__steps" aria-label="Steps to hire a .NET developer from QllmSoft Pakistan">
              {[
                { n: '01', icon: '📋', title: 'Share Your Requirements',     desc: 'Tell us about your project — tech stack, scope, timeline, and team size. We schedule a free call within 24 hours to go deeper.' },
                { n: '02', icon: '👥', title: 'Meet Your Matched Developer', desc: 'We shortlist the best-matched .NET developer(s) from our team and arrange an interview so you can assess skills, communication, and fit directly.' },
                { n: '03', icon: '✍️', title: 'Agree Terms & Onboard',       desc: 'Choose your engagement model, agree on pricing and timeline, sign the NDA and contract, then onboard within days, not weeks.' },
                { n: '04', icon: '🚀', title: 'Start Building',              desc: 'Your developer integrates with your tools, joins standups, and starts delivering from sprint one.' },
                { n: '05', icon: '🔄', title: 'Review & Scale',              desc: 'At any milestone, scale the team up or down, adjust scope, or add developers as your needs change.' },
              ].map((step, i) => (
                <li
                  key={i}
                  className={`dotnet-hiring__step animate__animated ${hiringInView ? 'animate__fadeInLeft' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="dotnet-hiring__step-left">
                    <span className="dotnet-hiring__step-num" aria-label={`Step ${step.n}`}>{step.n}</span>
                    <span className="dotnet-hiring__step-icon" aria-hidden="true">{step.icon}</span>
                  </div>
                  <div className="dotnet-hiring__step-body">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            TESTIMONIALS — H2 + Review microdata
        ══════════════════════════════════════════════ */}
        <section
          className="section dotnet-testimonials"
          ref={reviewRef}
          aria-labelledby="reviews-heading"
        >
          <div className="container">
            <p className="section-eyebrow">Client Reviews</p>
            <div className="section-title">
              <h2 id="reviews-heading">
                What Clients Say About Our .NET Developers
              </h2>
              <p>
                Verified reviews from independent platforms — Freelancer and Upwork — from
                clients across the UK, USA, UAE, Saudi Arabia, and Jordan.
              </p>
            </div>
            <div className="dotnet-reviews__grid">
              {[
                { name: 'Khalid A.',   loc: 'Riyadh, Saudi Arabia',   img: 'https://qllmsoft.com/images/khalid A.webp',   text: '"Great work with a great programmer team. Delivered everything exactly as discussed and on time."' },
                { name: 'Mohammad I.', loc: 'Amman, Jordan',          img: 'https://qllmsoft.com/images/Muhammad I.webp', text: '"As always, great work. QllmSoft is my reliable choice for store builds and web application logic. The quality of code and communication is consistently excellent. Highly recommended."' },
                { name: 'Neil P.',     loc: 'Cardiff, United Kingdom',img: 'https://qllmsoft.com/images/Neil P.webp',     text: '"Fantastic work. Excellent communication throughout, and the final result was exactly what we needed. I will continue to use QllmSoft for future projects without hesitation."' },
                { name: 'Fernando M.', loc: 'Miramar, United States', img: 'https://qllmsoft.com/images/fernandoM.webp',  text: '"Very pleasant developer to collaborate with. QllmSoft consistently delivers a high standard of code, clean architecture, and professional results on every engagement."' },
              ].map((r, i) => (
                <article
                  key={i}
                  className={`dotnet-review-card animate__animated ${reviewInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  itemScope itemType="https://schema.org/Review"
                >
                  <div
                    className="dotnet-review-card__stars"
                    aria-label="5 out of 5 stars"
                    itemProp="reviewRating" itemScope itemType="https://schema.org/Rating"
                  >
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating"  content="5" />
                    ★★★★★
                  </div>
                  <p className="dotnet-review-card__text" itemProp="reviewBody">{r.text}</p>
                  <div className="dotnet-review-card__author" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <img
                      src={r.img}
                      alt={`${r.name} — verified QllmSoft .NET developer client review from ${r.loc}`}
                      loading="lazy"
                      width="48"
                      height="48"
                    />
                    <div>
                      <strong itemProp="name">{r.name}</strong>
                      <span>{r.loc} — Freelancer</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <a
                href="https://www.freelancer.com/u/mrprogrmmr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
                aria-label="View all QllmSoft .NET developer reviews on Freelancer"
              >
                View All Reviews on Freelancer
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FAQ — H2 + FAQPage schema
        ══════════════════════════════════════════════ */}
        <section
          className="section csd-faq dotnet-faq"
          aria-labelledby="faq-heading"
          itemScope itemType="https://schema.org/FAQPage"
        >
          <div className="container">
            <p className="section-eyebrow">Common Questions</p>
            <div className="section-title">
              <h2 id="faq-heading">
                Frequently Asked Questions — Hiring .NET Developers in Pakistan
              </h2>
              <p>
                Everything you need to know before making your hiring decision.
              </p>
            </div>
            <div className="csd-faq__list">
              {FAQ_DATA.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
            </div>
            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <Link
                to="/contact"
                className="btn btn-outline-dark"
                aria-label="Contact QllmSoft with a question about hiring .NET developers in Pakistan"
              >
                Ask Us Directly
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FINAL CTA — H2
        ══════════════════════════════════════════════ */}
        <section className="section dotnet-cta" aria-labelledby="cta-heading">
          <div className="dotnet-cta__bg" aria-hidden="true" />
          <div className="container dotnet-cta__inner">
            <p className="section-eyebrow" style={{ color: '#edb702' }}>Get Started Today</p>
            <h2 id="cta-heading">
              Ready to Hire .NET Developers in Pakistan?
            </h2>
            <p>
              Whether you need a dedicated developer, a remote .NET engineer, or a full
              offshore team, QllmSoft delivers scalable, secure applications tailored to
              your business — cost-effective and built to last.
            </p>
            <div className="dotnet-cta__buttons">
              <Link
                to="/contact"
                className="btn btn-primary dotnet-btn-primary"
                aria-label="Hire a .NET developer from QllmSoft Pakistan — contact us today"
              >
                Hire .NET Developers Now
              </Link>
              <a
                href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20hire%20a%20.NET%20developer!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn dotnet-btn-whatsapp"
                aria-label="WhatsApp QllmSoft to hire a .NET developer from Pakistan"
              >
                <span aria-hidden="true">💬</span> WhatsApp Us
              </a>
            </div>
            <div className="dotnet-cta__perks" aria-label="Hiring benefits">
              <span>✓ Free consultation</span>
              <span>✓ NDA on day one</span>
              <span>✓ Onboard in days</span>
              <span>✓ 30-day support included</span>
            </div>
            <nav className="dotnet-cta__related" aria-label="Related development services">
              <span>Related:</span>
              <Link to="/custom-software-development-services">Custom Software</Link>
              <Link to="/website-development-services">Web Development</Link>
              <Link to="/api-development-services">API Development</Link>
              <Link to="/mobile-app-development">Mobile Apps</Link>
            </nav>
          </div>
        </section>

      </main>
    </>
  );
};

export default HireDotnetDevelopers;
