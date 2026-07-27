/**
 * AspnetCoreDevelopmentServices.jsx
 * ─────────────────────────────────
 * OUTER SECTION — technology-specific page
 * Central Search Intent: "Hire a team that specializes in ASP.NET Core to build
 *                          or modernize a backend/web system."
 * URL:                   /asp-net-core-development-services
 * Links UP to:            /web-application-development-services (Core pillar)
 *
 * This is deliberately NOT a duplicate of the Web Application Development pillar.
 * That pillar answers "build me a web application" broadly, across frameworks.
 * This page answers a narrower, technology-qualified question — someone who has
 * already decided (or inherited) ASP.NET Core and wants a team that knows it deeply.
 * Keeping that distinction explicit is what keeps the two pages from cannibalizing
 * each other in search.
 */

import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./asp-net-core-development-services.css";

export default function AspnetCoreDevelopmentServices() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "ASP.NET Core Development Services",
        provider: {
          "@type": "Organization",
          name: "QllmSoft",
          url: "https://qllmsoft.com",
          sameAs: ["https://qllmdocs.com"],
        },
        description:
          "QllmSoft builds and modernizes backend systems and web applications on ASP.NET Core — for teams that have already standardized on the Microsoft stack or are migrating a legacy .NET system.",
        areaServed: ["US", "GB", "EU", "AE"],
        serviceType: "ASP.NET Core Development",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Why would a team choose ASP.NET Core over Node.js or Django for a new backend?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It usually comes down to what's already in the building. If your team is already writing C#, or your infrastructure already runs on Windows Server or Azure, ASP.NET Core removes a lot of friction that a different stack would introduce. On raw performance it's genuinely competitive — Kestrel handles concurrent load well — but the honest reason most of our clients pick it is organizational fit, not a benchmark chart.",
            },
          },
          {
            "@type": "Question",
            name: "We have an old ASP.NET (not Core) system. Is migrating actually worth it?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Usually yes, but not always urgently. Classic ASP.NET on .NET Framework still runs, but it's stuck on Windows-only hosting, it's missing a decade of performance work, and Microsoft's own long-term investment is clearly in Core. If you're actively adding features, migrating sooner saves you from building new work twice. If the system is stable and rarely touched, it can usually wait — we'll tell you which situation you're in rather than push a migration you don't need yet.",
            },
          },
          {
            "@type": "Question",
            name: "How long does an ASP.NET Core project typically take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A focused API or a small internal system can land in 6-8 weeks. A full application with a proper domain model, integrations, and a real test suite is more commonly 12-20 weeks. Migration projects vary the most, since the biggest unknown is usually the state of the existing database and how much undocumented business logic is buried in it — we scope that explicitly before committing to a timeline.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle deployment and hosting, or just write the code?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Both, if you want it. Most of our ASP.NET Core work ends up on Azure — App Service for straightforward deployments, or Azure Kubernetes Service when the system needs to scale horizontally under load. We set up the CI/CD pipeline as part of the build, not as an afterthought, so deployments aren't a manual process someone has to remember to run correctly.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>ASP.NET Core Development Services | QllmSoft</title>
        <meta
          name="description"
          content="QllmSoft builds and modernizes backend systems and web applications on ASP.NET Core and C#, for teams standardized on the Microsoft stack or migrating from legacy .NET."
        />
        <link rel="canonical" href="https://qllmsoft.com/asp-net-core-development-services" />
        <meta property="og:title" content="ASP.NET Core Development Services | QllmSoft" />
        <meta property="og:description" content="Backend systems and web applications built on ASP.NET Core, by a team that works in it daily." />
        <meta property="og:url" content="https://qllmsoft.com/asp-net-core-development-services" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="aspnet-page">
        {/* HERO — single H1 + direct answer */}
        <header className="aspnet-hero">
          <div className="container aspnet-hero__inner">
            <div className="aspnet-hero__content">
              <div className="aspnet-badge">
                <span className="aspnet-badge-dot" aria-hidden="true" />
                Microsoft Stack Specialists
              </div>

              <h1 className="aspnet-title">ASP.NET Core Development Services</h1>

              <p className="aspnet-direct-answer">
                We build and modernize backend systems and web applications using ASP.NET Core
                and C#, for teams that are already on the Microsoft stack or are migrating off
                an aging .NET Framework system. If you need a broader web application built from
                scratch and haven't committed to a framework yet, our{" "}
                <Link to="/web-application-development-services">web application development page</Link>{" "}
                is the better starting point — this one is for teams who already know ASP.NET
                Core is the tool they want.
              </p>

              <div className="aspnet-hero__cta">
                <Link to="/contact" className="btn btn-primary" aria-label="Discuss your ASP.NET Core project with QllmSoft">
                  Discuss Your Project
                </Link>
                <Link to="/pricing-and-engagement-models" className="btn btn-secondary" aria-label="View pricing and engagement structures">
                  View Engagement Models
                </Link>
              </div>
            </div>

            <div className="aspnet-hero__image-wrap">
              <img
                src="https://qllmsoft.com/images/asp-net-core-development-architecture.webp"
                alt="ASP.NET Core backend architecture diagram used by QllmSoft on client projects"
                loading="lazy"
                width="560"
                height="420"
                className="aspnet-hero__image"
              />
            </div>
          </div>
        </header>

        {/* WHY ASP.NET CORE — H2 */}
        <section className="section aspnet-why" aria-labelledby="why-heading">
          <div className="container">
            <p className="section-eyebrow">Fit, Not Fashion</p>
            <div className="section-title">
              <h2 id="why-heading">When ASP.NET Core is actually the right choice</h2>
              <p>
                We'll say upfront: framework choice matters less than most agencies pretend it
                does. ASP.NET Core is a strong pick in a few specific situations, and we'd
                rather you know which one you're in before signing a contract.
              </p>
            </div>
            <div className="aspnet-tech__grid">
              <div className="aspnet-tech-card">
                <h3>Your team is already writing C#</h3>
                <p>Reusing existing skills beats retraining a team on a new language for the sake of it. If your developers know .NET, staying in that ecosystem removes months of ramp-up time.</p>
              </div>
              <div className="aspnet-tech-card">
                <h3>You're migrating a legacy .NET Framework system</h3>
                <p>Moving from classic ASP.NET to Core is a smaller leap than jumping to an entirely different stack, and it unlocks cross-platform hosting and years of performance improvements.</p>
              </div>
              <div className="aspnet-tech-card">
                <h3>You're already invested in Azure</h3>
                <p>ASP.NET Core and Azure are built by the same vendor and integrate with noticeably less friction than a mismatched stack — fewer workarounds, better tooling, faster deployments.</p>
              </div>
              <div className="aspnet-tech-card">
                <h3>You need strong typing at scale</h3>
                <p>C#'s type system catches a category of bugs at compile time that dynamically typed stacks only catch in production. On large, long-lived codebases, that adds up.</p>
              </div>
            </div>
          </div>
        </section>

        {/* METHODOLOGY — H2 */}
        <section className="section aspnet-process" aria-labelledby="process-heading">
          <div className="container">
            <p className="section-eyebrow">How We Work</p>
            <div className="section-title">
              <h2 id="process-heading">Our approach to an ASP.NET Core build</h2>
              <p>
                Nothing exotic here — just a sequence we've found actually prevents the
                expensive mistakes, in the order that catches them earliest.
              </p>
            </div>

            <ol className="aspnet-process__list" aria-label="QllmSoft ASP.NET Core development approach">
              <li className="aspnet-process__item">
                <span className="step-num">01</span>
                <div>
                  <h4>Architecture & Security Scoping</h4>
                  <p>We map the data flow and decide on the identity approach — OAuth2, OpenID Connect, or JWT — before a controller is written, so security isn't retrofitted later.</p>
                </div>
              </li>
              <li className="aspnet-process__item">
                <span className="step-num">02</span>
                <div>
                  <h4>Clean Architecture Setup</h4>
                  <p>Business logic lives separately from infrastructure code from day one. It's more setup upfront and considerably less pain when something needs to change six months in.</p>
                </div>
              </li>
              <li className="aspnet-process__item">
                <span className="step-num">03</span>
                <div>
                  <h4>Sprint-Based Build</h4>
                  <p>Two-week cycles, automated tests written alongside the code (not after), and deployment pipelines set up through GitHub Actions or Azure DevOps from the first sprint.</p>
                </div>
              </li>
              <li className="aspnet-process__item">
                <span className="step-num">04</span>
                <div>
                  <h4>Staged Rollout & Monitoring</h4>
                  <p>Production releases go out in stages, watched through structured logging and telemetry, with a defined maintenance window agreed before launch — not negotiated after something breaks.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* TECH STACK — H2 */}
        <section className="section aspnet-tech" aria-labelledby="tech-stack-heading">
          <div className="container">
            <p className="section-eyebrow">Under the Hood</p>
            <div className="section-title">
              <h2 id="tech-stack-heading">What we build with</h2>
              <p>The specific tools, named directly, rather than vague "modern technologies" language.</p>
            </div>

            <div className="aspnet-tech__grid">
              <div className="aspnet-tech-card">
                <h3>C# & the .NET Runtime</h3>
                <p>Modern C# language features, async/await pipelines throughout, and attention to memory allocation on workloads where it actually matters.</p>
              </div>
              <div className="aspnet-tech-card">
                <h3>Entity Framework Core & SQL Server</h3>
                <p>LINQ queries checked for the N+1 problem before they ship, proper indexing strategy, and transaction handling that doesn't leave data in a half-written state.</p>
              </div>
              <div className="aspnet-tech-card">
                <h3>Azure Deployment</h3>
                <p>App Service for most projects, Azure Kubernetes Service when the load pattern genuinely needs it, Redis for caching, and Key Vault for secrets — not hardcoded config.</p>
              </div>
              <div className="aspnet-tech-card">
                <h3>gRPC & Messaging</h3>
                <p>For systems with multiple services talking to each other, we use gRPC for speed and RabbitMQ or Azure Service Bus for anything that needs to survive a temporary outage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE & COST */}
        <section className="section aspnet-timeline" aria-labelledby="timeline-heading">
          <div className="container">
            <div className="aspnet-timeline-wrapper">
              <p className="section-eyebrow">Investment & Scheduling</p>
              <h2 id="timeline-heading">Timeline and what actually drives cost</h2>
              <p className="timeline-intro">
                We won't pretend there's a flat rate — an ASP.NET Core project's cost is set by
                data migration complexity, how many third-party systems it needs to talk to
                (ERP, WMS, payment processors), which compliance frameworks apply (HIPAA, SOC2,
                GDPR), and how strict your uptime requirements are.
              </p>
              <p>
                A focused API or internal tool usually lands in the 6-8 week range. A full
                application rebuild or migration is more commonly 12-20+ weeks. For how we
                structure engagement types and pricing, see our{" "}
                <Link to="/pricing-and-engagement-models">pricing and engagement guide</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* CROSS-LINKING */}
        <section className="section aspnet-proof" aria-labelledby="proof-heading">
          <div className="container aspnet-proof__layout">
            <div className="aspnet-proof-box">
              <h2 id="proof-heading">Where our .NET work shows up in production</h2>
              <p>
                A good example is <a href="https://qllmdocs.com" target="_blank" rel="noopener noreferrer">QllmDocs</a>,
                a document management platform we built end-to-end on ASP.NET Core and Azure —
                it's a working reference for how we structure a real production system, not just
                a portfolio piece.
              </p>
              <p className="proof-links-row">
                Related work: our broader <Link to="/web-application-development-services">web application development services</Link>,
                {" "}<Link to="/api-development-services">API development and integration services</Link>, and{" "}
                <Link to="/legacy-system-modernization-services">legacy system modernization services</Link> for
                teams migrating off older .NET Framework systems.
              </p>
            </div>
            <div className="aspnet-proof__image-wrap">
              <img
                src="https://qllmsoft.com/images/qllmdocs-aspnet-core-dashboard.webp"
                alt="QllmDocs dashboard, a document management platform QllmSoft built on ASP.NET Core and Azure"
                loading="lazy"
                width="560"
                height="380"
                className="aspnet-proof__image"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section aspnet-faq" aria-labelledby="faq-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="faq-heading">Frequently Asked Questions</h2>
              <p>Straight answers to what teams usually ask before starting an ASP.NET Core project with us.</p>
            </div>

            <div className="aspnet-faq__grid">
              <div className="faq-item">
                <h3>Why would a team choose ASP.NET Core over Node.js or Django for a new backend?</h3>
                <p>It usually comes down to what's already in the building. If your team is already writing C#, or your infrastructure already runs on Windows Server or Azure, ASP.NET Core removes friction a different stack would introduce. On performance it's genuinely competitive, but the honest reason most clients pick it is organizational fit.</p>
              </div>
              <div className="faq-item">
                <h3>We have an old ASP.NET (not Core) system. Is migrating actually worth it?</h3>
                <p>Usually yes, but not always urgently. Classic ASP.NET still runs, but it's stuck on Windows-only hosting and missing a decade of performance work. If you're actively adding features, migrating sooner saves rework. If the system is stable and rarely touched, it can wait.</p>
              </div>
              <div className="faq-item">
                <h3>How long does an ASP.NET Core project typically take?</h3>
                <p>A focused API or small internal system: 6-8 weeks. A full application with proper domain modeling and a real test suite: 12-20 weeks. Migrations vary most, depending on the state of the existing database.</p>
              </div>
              <div className="faq-item">
                <h3>Do you handle deployment and hosting, or just write the code?</h3>
                <p>Both, if you want it. Most of our work ends up on Azure App Service or AKS, with the CI/CD pipeline set up as part of the build — not as an afterthought.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section aspnet-cta-banner" aria-labelledby="cta-heading">
          <div className="container text-center">
            <h2 id="cta-heading">Have an ASP.NET Core project or migration in mind?</h2>
            <p>Tell us where the system stands today and where it needs to go — we'll give you a real scope, not a sales pitch.</p>
            <Link to="/contact" className="btn btn-primary btn-large" aria-label="Schedule an architecture consultation with QllmSoft">
              Schedule Architecture Review
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
