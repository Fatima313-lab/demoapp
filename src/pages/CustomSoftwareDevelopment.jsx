/**
 * CustomSoftwareDevelopment.jsx
 * ─────────────────────────────
 * CORE SECTION SERVICE PILLAR
 * Central Entity:        QllmSoft
 * Central Search Intent: "Hire a company to build bespoke, non-off-the-shelf software."
 * URL:                   /custom-software-development-services
 *
 * Structured per the Semantic SEO / Topical Authority framework:
 *  1. One Central Search Intent only — this page does not try to also rank
 *     for "web app," "mobile app," or "AI software." Those live on their own pillars
 *     and are linked out to, not folded in here.
 *  2. Direct-answer paragraph sits under the H1, snippet-quotable, no fluff.
 *  3. Fixed section order: answer → process → tech stack → timeline & cost
 *     (linked to the pricing page, no invented numbers) → case study → FAQ → CTA.
 *  4. Sibling pillar + Outer Section links are explicit and limited (~8-10 total).
 *  5. Schema: Organization, Service, BreadcrumbList, FAQPage.
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import "./CustomSoftwareDevelopment.css";
import FounderNote from "../components/FounderNote";
import TestimonialSection from "../components/TestimonialSection";
import RelatedSolutions from "../components/RelatedSolutions";
import QllmDocs from "../assets/QllmDocs.webp";

/* ─── Page constants ──────────────────────────────────────── */
const PAGE_URL = "https://qllmsoft.com/custom-software-development-services";
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
    "https://qllmdocs.com",
    "https://www.freelancer.com/u/mrprogrmmr",
  ],
};

/* ─── JSON-LD: Service ────────────────────────────────────── */
const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom Software Development",
  name: "Custom Software Development Services | QllmSoft",
  description:
    "QllmSoft designs and builds bespoke software — internal tools, ERP systems, desktop applications, and workflow platforms — for businesses that have outgrown off-the-shelf products.",
  provider: {
    "@type": "Organization",
    name: "QllmSoft",
    url: "https://qllmsoft.com",
  },
  areaServed: ["Pakistan", "United States", "United Kingdom", "UAE", "Saudi Arabia"],
  url: PAGE_URL,
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "1000",
    description: "Custom software projects, scoped individually and starting around $1,000.",
  },
};

/* ─── JSON-LD: BreadcrumbList ─────────────────────────────── */
const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://qllmsoft.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://qllmsoft.com/services" },
    { "@type": "ListItem", position: 3, name: "Custom Software Development Services", item: PAGE_URL },
  ],
};

/* ─── FAQ data ─────────────────────────────────────────────── */
const FAQ_DATA = [
  {
    q: "What counts as 'custom software' versus just buying something off the shelf?",
    a: "If a product like Salesforce, an ERP suite, or a generic SaaS tool can already do 80% of what you need without fighting its own workflow, custom software probably isn't the answer — buy the tool. Custom software makes sense once you're bending an off-the-shelf product into shapes it was never designed for, paying for modules you don't use, or hitting a wall the vendor has no plan to fix. We tell prospective clients this directly during the first call, even when it means recommending against hiring us.",
  },
  {
    q: "Do you build the software from a blank page, or do you use existing frameworks?",
    a: "Neither extreme. We don't hand-roll infrastructure that's already been solved — authentication, payments, file storage, and similar plumbing come from proven libraries and services. What's custom is the business logic: the rules, workflows, and data model that are specific to how your company actually operates. That split keeps the build faster and the long-term maintenance bill lower than a fully bespoke stack.",
  },
  {
    q: "How much does a custom software project actually cost?",
    a: "It depends entirely on scope, which is why we don't quote a number on this page. A single internal tool replacing a spreadsheet workflow is a very different project from a multi-module ERP system. We walk through cost drivers, engagement models, and how we structure milestone-based pricing on our pricing and engagement guide, and we give you a real estimate after a scoping call — not before.",
  },
  {
    q: "What happens after the software is delivered — do you just disappear?",
    a: "No. Every build ships with a defined post-launch window covering bug fixes and monitoring at no extra cost, and most clients move into either a fixed-term support retainer or a pay-as-needed maintenance arrangement afterward. Software that nobody touches for a year tends to break quietly; we'd rather catch that early than have you find out during a busy month.",
  },
  {
    q: "Can you take over a custom system another developer or agency built?",
    a: "Yes, and it's a fairly common starting point for us. We run a short code and architecture review first — partly to understand what we're inheriting, partly to be honest with you about whether it's worth extending or worth rebuilding a specific module. Sometimes the existing code is fine and just needs a team that answers emails; sometimes it isn't, and we'll say so.",
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

/* ─── FAQ Accordion ───────────────────────────────────────── */
const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  const answerId = `faq-answer-${index}`;
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
        <span className="faq-icon" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div id={answerId} className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
          <p itemProp="text">{faq.a}</p>
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════════════════════ */
const CustomSoftwareDevelopment = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: processRef, inView: processInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: techRef, inView: techInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Helmet>
        <title>Custom Software Development Services | QllmSoft</title>
        <meta
          name="description"
          content="QllmSoft builds custom software — internal tools, ERP systems, desktop applications, and workflow platforms — when off-the-shelf products stop fitting how your business runs."
        />
        <meta name="author" content="QllmSoft" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content="Custom Software Development Services | QllmSoft" />
        <meta property="og:description" content="Bespoke software for the workflows off-the-shelf tools can't handle — built, deployed, and supported by QllmSoft." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="QllmSoft custom software development" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Software Development Services | QllmSoft" />
        <meta name="twitter:description" content="Bespoke software for the workflows off-the-shelf tools can't handle." />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="csd-page" role="main">
        {/* ══════════════ HERO — single H1 + direct answer ══════════════ */}
        <header className="csd-hero">
          <div className="container">
            <p className="csd-hero__eyebrow">Custom Software Development</p>

            <h1 className="csd-hero__title">
              Custom Software Development Services
            </h1>

            <p className="csd-hero__sub">
              We design and build bespoke software for companies whose workflows have
              outgrown off-the-shelf tools, internal systems, desktop applications, ERP
              modules, and business platforms built around how your team actually works,
              not how a generic product assumes you work. Projects typically start around
              $1,000 and are scoped individually.
            </p>

            <div className="csd-hero__buttons">
              <Link to="/contact" className="btn btn-primary" aria-label="Get a free custom software development consultation from QllmSoft">
                Start your Project
              </Link>
              <Link to="/projects" className="btn btn-outline-light" aria-label="View QllmSoft custom software development projects portfolio">
                See Past Projects
              </Link>
            </div>

            <div className="csd-hero__tags" aria-label="Technologies used">
              {["ASP.NET Core", "React", "Angular", "Azure", "SQL Server"].map((t) => (
                <span key={t} className="csd-tag">{t}</span>
              ))}
            </div>
          </div>
        </header>

        {/* ══════════════ WHEN CUSTOM MAKES SENSE — H2 ══════════════ */}
        <section className="section csd-about bg-light" ref={aboutRef} aria-labelledby="about-heading">
          <div className="container">
            <div className="about-content">
              <article className={`about-text animate__animated ${aboutInView ? "animate__fadeInLeft" : ""}`}>
                <h2 id="about-heading">When custom software is actually the right call</h2>
                <p>
                  Most businesses shouldn't build custom software, and we say that to clients
                  more often than you'd expect. If a spreadsheet, a CRM, or a $30-a-month SaaS
                  tool does the job, buying it will always beat building it. Custom development
                  earns its cost once you're past that point, when you are paying for features
                  you never use, working around a workflow the vendor never designed for, or
                  waiting on a support ticket for a fix that will never come because your use
                  case isn't common enough to matter to them.
                </p>
                <p>
                  We have built systems for finance teams tracking compliance data no generic tool
                  handles correctly, for logistics operations coordinating dozens of moving parts
                  across time zones, and for internal teams who were, quite literally, running
                  their business out of a shared Excel file that had started crashing under its
                  own weight. In each case the software was not built to look impressive. It was
                  built to remove a specific, ongoing cost.
                </p>
                <p>
                  If your team is close to hiring us to <Link to="/web-application-development-services">build a web application</Link>{" "}
                  or a customer-facing platform instead, that's a related but different project —
                  see our web application development page for that. This page is specifically
                  about internal and business-specific software: the tools that run your
                  operations rather than face your customers.
                </p>
              </article>

              <aside className={`csd-about__stats animate__animated ${aboutInView ? "animate__fadeInRight" : ""}`} aria-label="Company track record">
                {[
                  { num: "50+", label: "Custom software projects delivered" },
                  { num: "10+", label: "Years building for enterprise clients" },
                  { num: "30+", label: "Businesses served across 5 countries" },
                  { num: "98%", label: "Of clients rate delivery satisfaction 4+/5" },
                ].map((s) => (
                  <div key={s.num} className="csd-about__stat-card">
                    <span className="csd-about__stat-num">{s.num}</span>
                    <span className="csd-about__stat-label">{s.label}</span>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </section>

        {/* ══════════════ WHAT WE BUILD — H2 + H3s ══════════════ */}
        <section className="section csd-services" ref={servicesRef} aria-labelledby="services-heading">
          <div className="container">
            <p className="section-eyebrow">What We Build</p>
            <div className="section-title">
              <h2 id="services-heading">The kinds of custom software we actually deliver</h2>
              <p>
                Each of these is a different flavor of the same core intent — replacing a
                manual or badly-fitting process with software built specifically for it.
              </p>
            </div>

            <div className="csd-services__grid">
              {[
                {
                  title: "Internal Business Tools",
                  desc: "Dashboards, approval workflows, inventory trackers, and admin panels that replace the spreadsheet-and-email process your team has been quietly tolerating.",
                },
                {
                  title: "ERP & Operations Systems",
                  desc: "Modules for finance, HR, procurement, or supply chain that connect to your existing tools instead of forcing a full platform migration.",
                },
                {
                  title: "Desktop Applications",
                  desc: "Windows applications for point-of-sale, document handling, and data entry work that needs to run reliably on local hardware, offline-capable when required.",
                },
                {
                  title: "Legacy System Extensions",
                  desc: "New functionality layered onto software you already depend on, when a full rebuild isn't worth the risk or the budget yet.",
                },
                {
                  title: "Workflow Automation",
                  desc: "Software that removes the repetitive manual steps between two systems that don't talk to each other on their own.",
                },
                {
                  title: "Industry-Specific Platforms",
                  desc: "Purpose-built systems for regulated or specialized industries — see our healthcare and finance industry pages for examples close to your sector.",
                },
              ].map((s, i) => (
                <article
                  key={i}
                  className={`csd-service-card animate__animated ${servicesInView ? "animate__fadeInUp" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <h3 className="csd-service-card__title" itemProp="name">{s.title}</h3>
                  <p className="csd-service-card__desc" itemProp="description">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ CASE STUDY — H2 ══════════════ */}
        <section className="section csd-featured-projects" aria-labelledby="projects-heading">
          <div className="container">
            <div className="section-header">
              <p className="section-eyebrow">Proof, Not Promises</p>
              <h2 id="projects-heading" className="section-main-title">A closer look at one build: QllmDocs</h2>
            </div>

            <article className="project-row">
              <div className="project-details-content">
                <span className="case-study-tag">Case Study</span>
                <h3 className="project-title">QllmDocs — Document Management for Compliance-Heavy Teams</h3>
                <p className="project-narrative">
                  A recurring problem we kept hearing from clients in finance and legal-adjacent
                  work was version control chaos — the "final_v3_ACTUALLY_final.docx" problem,
                  except with contracts and compliance filings where a mistake actually costs
                  money. We built QllmDocs as an internal answer to that, then made it available
                  as its own product once it proved out.
                </p>
                <p className="project-narrative">
                  It handles role-based access so only the right people can see or edit sensitive
                  files, keeps a full audit trail of every change, and runs on Azure with
                  encrypted storage. None of that is exotic technology. What matters is that it
                  was built around how document approval chains actually happen in practice,
                  rather than a generic file-sharing model bolted onto a permissions system as an
                  afterthought.
                </p>
                <div className="project-features-grid">
                  <div className="feature-item">
                    <h5>Role-Based Access</h5>
                    <p>Permissions tied to actual job function, not a flat admin/user split.</p>
                  </div>
                  <div className="feature-item">
                    <h5>Full Audit Trail</h5>
                    <p>Every edit, view, and share is logged and reviewable.</p>
                  </div>
                  <div className="feature-item">
                    <h5>Azure Cloud Storage</h5>
                    <p>Encrypted at rest, backed up, and built to scale with document volume.</p>
                  </div>
                  <div className="feature-item">
                    <h5>AI-Assisted Search</h5>
                    <p>Finds documents by content, not just filename, cutting search time significantly.</p>
                  </div>
                </div>
              </div>
              <div className="project-visual-wrapper">
                <div className="image-container-card">
                  <img src={QllmDocs} alt="QllmDocs document management dashboard" className="project-screenshot" loading="lazy" width="640" height="420" />
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ══════════════ PROCESS — H2 + H4s (ordered — real sequence) ══════════════ */}
        <section className="section csd-process" ref={processRef} aria-labelledby="process-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="process-heading">How a custom software project actually runs, start to finish</h2>
              <p>These steps happen in this order for a reason — skipping the early ones is where most failed software projects go wrong.</p>
            </div>

            <div className="csd-process__layout">
              <ol className="csd-process__steps" aria-label="Software development process steps">
                {[
                  { n: "1", title: "Discovery Call", desc: "We ask what's broken today, not what features you think you want. Often these are different things, and finding that out early saves months later." },
                  { n: "2", title: "Scoping & Estimate", desc: "You get a written scope, a realistic timeline, and a cost range before any contract is signed — no vague 'it depends' answers." },
                  { n: "3", title: "Requirements Documentation", desc: "We document exactly what the software needs to do, in plain language you can sanity-check before a single screen is designed." },
                  { n: "4", title: "Design & Prototyping", desc: "Wireframes and, where it matters, a clickable prototype so you're reacting to something real instead of imagining the final product." },
                  { n: "5", title: "Development in Sprints", desc: "Two-week build cycles with something demoable at the end of each one — you're never waiting three months to see if it's on track." },
                  { n: "6", title: "Testing & QA", desc: "Manual and automated testing before anything reaches production, including the edge cases that only show up once real users touch it." },
                  { n: "7", title: "Launch & Support Window", desc: "Deployment plus a defined period of monitoring and bug fixes included at no extra cost, before we discuss ongoing maintenance." },
                ].map((step, i) => (
                  <li key={i} className={`csd-process__step animate__animated ${processInView ? "animate__fadeInLeft" : ""}`} style={{ animationDelay: `${i * 0.08}s` }}>
                    <div className="csd-process__step-num" aria-label={`Step ${step.n}`}>{step.n}</div>
                    <div className="csd-process__step-body">
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <aside className="csd-process__cta" aria-label="Start your software project">
                <div className="csd-process__cta-box">
                  <h3>Not sure yet whether custom is right for you?</h3>
                  <p>
                    Tell us what you're currently doing manually, and we'll tell you honestly
                    whether it's worth building — no sales pitch, no obligation.
                  </p>
                  <Link to="/contact" className="btn btn-primary" aria-label="Contact QllmSoft to start your custom software development project">
                    Start the Conversation
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ══════════════ TECH STACK — H2 ══════════════ */}
        <section className="section csd-tech" ref={techRef} aria-labelledby="tech-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="tech-heading">The technology we build with, and why</h2>
              <p>
                We standardize on a smaller set of tools we know deeply rather than chasing
                every new framework — it's what makes long-term maintenance predictable instead
                of a guessing game for whoever inherits the code next.
              </p>
            </div>
            <ul className="csd-tech__grid" aria-label="Programming languages and frameworks used by QllmSoft">
              {["ASP.NET Core", "React.js", "Angular", "SQL Server", "Microsoft Azure", "Entity Framework", "Docker", "Git & DevOps"].map((t) => (
                <li key={t} className="csd-tech__pill">{t}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ══════════════ TIMELINE & COST — H2 ══════════════ */}
        <section className="section csd-timeline" aria-labelledby="timeline-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="timeline-heading">Timeline and cost — what actually drives the number</h2>
              <p>
                We're not going to put a fake price calculator on this page, because the honest
                answer is "it depends on scope," and pretending otherwise doesn't help you plan.
                What we can tell you is what moves the number: how many user roles the system
                needs, whether it integrates with existing software you already run, how strict
                your compliance requirements are, and whether you need a working version fast or
                a fully-featured one. A single internal tool can be a matter of weeks; a
                multi-module operations platform is a matter of months. For a breakdown of how we
                structure pricing and engagement models, see our{" "}
                <Link to="/pricing-and-engagement-models">pricing and engagement guide</Link>, or
                just tell us your project and we'll give you a real number.
              </p>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="section testimonial-section" aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="sr-only">Client Reviews, QllmSoft Software Development Company</h2>
          <TestimonialSection />
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <a href="https://www.freelancer.com/u/mrprogrmmr" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark" aria-label="View all QllmSoft verified client reviews on Freelancer">
              View All Verified Reviews on Freelancer
            </a>
          </div>
        </section>

        <FounderNote
          title="Why I still review every architecture decision myself"
          message="Most of the damage in custom software happens quietly, in decisions nobody questions until the bill comes due — a data model that can't scale, a shortcut that becomes permanent, a dependency nobody planned to maintain. I review the architecture on every project we take on personally, not because our engineers need supervision, but because catching a bad decision in week two costs an afternoon, and catching it in month eight costs a rebuild. That review is the one step I haven't delegated, and I don't plan to."
        />

        {/* ══════════════ FAQ — H2 + FAQPage itemScope ══════════════ */}
        <section className="section csd-faq" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <p className="section-eyebrow">Common Questions</p>
            <div className="section-title">
              <h2 id="faq-heading">Frequently Asked Questions About Custom Software Development</h2>
              <p>Can't find your answer here? Reach out directly — we respond within a few hours on business days.</p>
            </div>
            <div className="csd-faq__list">
              {FAQ_DATA.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <Link to="/contact" className="btn btn-outline-dark" aria-label="Ask QllmSoft a question about custom software development">
                Ask Us Directly
              </Link>
            </div>
          </div>
        </section>

        <RelatedSolutions category="custom-software" />

        {/* ══════════════ FINAL CTA — H2 ══════════════ */}
        <section className="section csd-final-cta" aria-labelledby="cta-heading">
          <div className="container">
            <div className="csd-final-cta__content">
              <h2 id="cta-heading">Have a workflow that's outgrown its current tools?</h2>
              <p>
                Whether you have a fully scoped project or just a process that's causing daily
                pain, let's talk. You'll get a clear scope, a realistic timeline, and a budget
                range before any commitment.
              </p>
              <div className="csd-final-cta__buttons">
                <Link to="/contact" className="btn btn-primary" aria-label="Get your free custom software development consultation from QllmSoft">
                  Get Your Free Consultation
                </Link>
                <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20a%20custom%20software%20project!" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light" aria-label="Chat with QllmSoft on WhatsApp about your software development project">
                  Chat on WhatsApp
                </a>
              </div>
              <div className="csd-final-cta__perks">
                <span>✓ Free project estimate</span>
                <span>✓ No commitment required</span>
                <span>✓ Response within 24 hours</span>
              </div>
              <nav className="csd-final-cta__related" aria-label="Related software development services">
                <span>Also see:</span>
                <Link to="/web-application-development-services">Web Application Development</Link>
                <Link to="/legacy-system-modernization-services">Legacy System Modernization</Link>
                <Link to="/ai-powered-software-solutions">AI-Powered Software</Link>
                <Link to="/finance-management-system">Finance Management System</Link>
              </nav>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CustomSoftwareDevelopment;
