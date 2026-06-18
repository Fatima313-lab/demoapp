/**
 * RequirementsChecklist.jsx, QllmSoft
 * ─────────────────────────────────────────────────────────────────
 * LEAD MAGNET #2: Software Project Requirements Checklist
 *
 * Why this page exists:
 *   - Targets earlier-funnel research terms: "software requirements
 *     checklist", "questions to ask before hiring a software developer",
 *     "how to scope a software project"
 *   - Unlike a typical gated PDF, the full checklist is written out
 *     directly on the page. That's deliberate: a page with no visible
 *     content has nothing for Google to rank, and gives a visitor no
 *     reason to trust the gated download is any good. The email gate
 *     here is for the printable PDF + bonus template, not the content.
 *
 * Standalone route, own meta tags, own schema. Cross-link this from
 * Home, Services, About, and Contact using <LeadMagnetBanner variant="checklist" />.
 *
 * Drop the actual PDF asset at /public/assets/qllmsoft-requirements-checklist.pdf
 * (or update PDF_URL below to wherever you host it).
 */

import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LeadCaptureForm from "../components/LeadCaptureForm";
import "./RequirementsChecklist.css";

// Append ?url to force Vite to output a clean string path
import checklistPdf from "../assets/qllmsoft-requirements-checklist.pdf?url"; 

const PDF_URL = checklistPdf;

const CHECKLIST = [
  {
    title: "Define the business problem, not just the feature list",
    body: "Before anyone writes a single user story, write down what's actually broken or missing today. A feature list without a problem statement is how projects end up technically correct and practically useless.",
  },
  {
    title: "Identify who will actually use it day to day",
    body: "The person approving the budget is rarely the person typing into the software every morning. Talk to the actual users before requirements get finalized, their workarounds usually reveal what the spec missed.",
  },
  {
    title: "List every system it needs to talk to",
    body: "CRM, accounting software, payment gateway, existing internal tools, whatever it is, list it now. Integrations discovered halfway through development are the single most common cause of timeline slippage.",
  },
  {
    title: "Decide what \"done\" looks like for version one",
    body: "Separate what the business needs on day one from what would be nice to have eventually. A version one that tries to do everything usually ships late and does nothing particularly well.",
  },
  {
    title: "Map out any compliance or security requirements",
    body: "HIPAA, GDPR, PCI-DSS, SOC 2, or industry-specific rules all affect architecture decisions made in week one. Bringing these up after development starts means rework, not a small adjustment.",
  },
  {
    title: "Set a realistic budget range before requesting quotes",
    body: "You don't need an exact number, but having no range at all makes every quote you receive impossible to evaluate against your actual constraints.",
  },
  {
    title: "Decide who owns final sign-off on requirements",
    body: "If three stakeholders can each request changes without checking with each other, scope will drift no matter how good the development team is. Pick one person who can say yes or no.",
  },
  {
    title: "Account for data migration from existing systems",
    body: "If there's existing data, spreadsheets, a legacy database, years of records in another tool, plan for how it moves into the new system. Migration is its own project, not an afterthought.",
  },
  {
    title: "Clarify the scale you actually need to support",
    body: "Ten concurrent users and ten thousand require different architecture decisions from day one. Give a realistic number, not an aspirational one, the aspirational number can come later as a phase two requirement.",
  },
  {
    title: "Decide on platforms up front",
    body: "Web, iOS, Android, desktop, or some combination, each added platform is a meaningfully different scope of work, not a checkbox. Decide this before pricing gets discussed, not after.",
  },
  {
    title: "Plan for what happens after launch",
    body: "Who hosts it, who patches it, who answers the 2am outage call. A development quote that doesn't mention post-launch support is a quote for half a project.",
  },
  {
    title: "Get clarity on IP ownership and source code rights",
    body: "Confirm in writing that you own the source code and IP once the project is paid for. This should be an explicit clause, not an assumption based on a friendly conversation.",
  },
  {
    title: "Ask how the vendor handles change requests",
    body: "Requirements will shift somewhat no matter how thorough the discovery phase was. Ask upfront how changes get priced and approved, so it's a known process instead of a point of friction later.",
  },
  {
    title: "Ask for verifiable reviews, not just testimonials",
    body: "A quote on a company's own website can say anything. A public review history on a platform like Upwork or Clutch, where clients leave feedback after the work is delivered, is much harder to fake.",
  },
  {
    title: "Get the scope and price in writing before development starts",
    body: "A documented scope and a fixed price, agreed before a single line of code is written, is what actually prevents the budget surprises everyone says they want to avoid.",
  },
];

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should be in a software requirements checklist?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "A useful checklist covers the business problem being solved, who the actual users are, required integrations, scale and compliance needs, budget range, and who has final sign-off on changes, not just a list of features.",
      },
    },
    {
      "@type": "Question",
      name: "Who should write the software requirements before hiring a developer?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "A rough internal draft is enough to start conversations with development teams. A good agency will run a formal discovery process to turn that draft into a documented, signed-off scope before any code is written.",
      },
    },
    {
      "@type": "Question",
      name: "What's the biggest mistake businesses make when scoping a software project?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Treating version one as if it needs every feature at once. Projects that try to ship everything on day one tend to run over budget and over schedule, and often launch with no single feature fully polished.",
      },
    },
  ],
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://qllmsoft.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Software Project Requirements Checklist",
      item: "https://qllmsoft.com/software-project-requirements-checklist",
    },
  ],
};

const RequirementsChecklist = () => {
  // Trigger entry threshold styling animations on load
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Software Project Requirements Checklist (Free PDF) – QllmSoft
        </title>
        <meta
          name="description"
          content="15 questions worth answering before you brief any development team. Read the full checklist on this page, or get the printable PDF and bonus template by email."
        />
        <meta
          name="keywords"
          content="software requirements checklist, questions to ask before hiring a software developer, how to scope a software project, software project planning checklist"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://qllmsoft.com/software-project-requirements-checklist"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://qllmsoft.com/software-project-requirements-checklist"
        />
        <meta property="og:site_name" content="QllmSoft" />
        <meta
          property="og:title"
          content="Software Project Requirements Checklist (Free PDF) – QllmSoft"
        />
        <meta
          property="og:description"
          content="15 questions worth answering before you brief any development team."
        />

        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
        <script type="application/ld+json">
          {JSON.stringify(schemaBreadcrumb)}
        </script>
      </Helmet>

      <main className="checklist-page">
        <section className="rc-hero reveal" aria-labelledby="rc-hero-h1">
          <div className="container">
            <h1 id="rc-hero-h1" style={{ color: "white" }}>
              The Software Requirements Checklist We Use Internally
            </h1>
            <p style={{ color: "white" }}>
              15 questions worth answering before you brief any development
              team, so you don't pay for scope creep later.
            </p>
            <a href="#download" className="btn btn-primary">
              Get the Printable PDF
            </a>
          </div>
        </section>

        <section className="section rc-list reveal" aria-labelledby="rc-list-heading">
          <div className="container">
            <h2 id="rc-list-heading" className="sr-only">
              The full checklist
            </h2>
            <ol className="rc-checklist">
              {CHECKLIST.map((item, i) => (
                <li key={i} className="rc-checklist-item">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="download"
          className="section rc-download reveal"
          aria-labelledby="rc-download-heading"
        >
          <div className="container">
            <div className="rc-download-card">
              <h2 id="rc-download-heading">
                Want This as a Printable PDF?
              </h2>
              <p>
                We'll also send a one-page requirements template you can fill
                in and forward straight to whichever development team you end
                up working with.
              </p>
              <LeadCaptureForm
                leadMagnet="requirements-checklist"
                buttonLabel="Send Me the PDF + Template"
                successMessage="Thanks! We've emailed you a copy. You can also download it right now below."
                downloadUrl={PDF_URL}
                downloadLabel="Download the Checklist (PDF)"
              />
            </div>
          </div>
        </section>

        <section
          className="section"
          style={{ background: "#F7FAFC", padding: "56px 0" }}
          aria-labelledby="rc-faq-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="rc-faq-heading">Common Questions</h2>
            </div>
            <div className="rc-faq-list">
              {schemaFAQ.mainEntity.map((q, i) => (
                <div className="rc-faq-item" key={i}>
                  <h3>{q.name}</h3>
                  <p>{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-section reveal" aria-labelledby="rc-cta-heading">
          <div className="container">
            <div className="cta-content">
              <h2 id="rc-cta-heading">
                Already Have Your Requirements Documented?
              </h2>
              <p>
                Send them our way. We'll reply within 24 hours with a
                detailed, fixed-price proposal.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RequirementsChecklist;