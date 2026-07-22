import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import "./asp-net-core-development-services.css";

export default function AspnetCoreDevelopmentServices() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Enterprise ASP.NET Core Development Services",
        "provider": {
          "@type": "Organization",
          "name": "QllmSoft",
          "url": "https://qllmsoft.com",
          "sameAs": ["https://qllmdocs.com"]
        },
        "description": "Enterprise-grade custom web applications, cloud-native microservices, and high-performance APIs engineered with ASP.NET Core, C#, and Microsoft Azure.",
        "areaServed": ["US", "GB", "EU", "AE"],
        "serviceType": "Custom Software Development"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why choose ASP.NET Core for enterprise software development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ASP.NET Core delivers industry-leading execution speed via the Kestrel web server, cross-platform deployment flexibility, enterprise-grade memory safety with C#, and seamless integration with Microsoft Azure cloud infrastructure."
            }
          },
          {
            "@type": "Question",
            "name": "How does QllmSoft handle data migration during legacy .NET modernization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We execute zero-downtime database migrations using dual-write architectural patterns, automated Entity Framework Core migrations, and rigorous ETL validation pipelines to guarantee zero data loss."
            }
          },
          {
            "@type": "Question",
            "name": "What are the timeline and cost factors for an enterprise .NET project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Timelines range from 8 to 24+ weeks depending on domain complexity, third-party ERP integrations, and compliance requirements. For transparent engagement tiers and rate structures, review our pricing and engagement models."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure high availability and security under heavy loads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We implement containerized microservices via Azure Kubernetes Service (AKS), OAuth2/OIDC role-based access control, Redis distributed caching, and automated load testing via enterprise CI/CD pipelines."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Enterprise ASP.NET Core Development Services | QllmSoft</title>
        <meta 
          name="description" 
          content="Hire QllmSoft to engineer secure, high-performance enterprise applications, cloud-native microservices, and APIs using ASP.NET Core and C#. Request an architecture review." 
        />
        <link rel="canonical" href="https://qllmsoft.com/asp-net-core-development-services" />
        <meta property="og:title" content="Enterprise ASP.NET Core Development Services | QllmSoft" />
        <meta property="og:description" content="High-performance custom web applications and backend architecture engineered with ASP.NET Core." />
        <meta property="og:url" content="https://qllmsoft.com/asp-net-core-development-services" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="aspnet-page">
        {/* HERO SECTION */}
        <header className="aspnet-hero">
          <div className="container aspnet-hero__inner">
            <div className="aspnet-badge">
              <span className="aspnet-badge-dot" aria-hidden="true" />
              Enterprise Microsoft Ecosystem Engineering
            </div>
            
            <h1 className="aspnet-title">
              Enterprise ASP.NET Core <span className="aspnet-accent">Development Services</span>
            </h1>

            <p className="aspnet-direct-answer">
              QllmSoft engineers high-performance, secure enterprise software platforms using ASP.NET Core and C#. We deliver scalable cloud-native microservices, robust transactional APIs, and modernized backend architectures for international businesses requiring uncompromised execution speed, strict data compliance, and long-term codebase maintainability.
            </p>

            <div className="aspnet-hero__cta">
              <Link to="/contact" className="btn btn-primary" aria-label="Discuss your enterprise .NET architecture with QllmSoft">
                Discuss Your .NET Architecture
              </Link>
              <Link to="/software-development-cost-calculator" className="btn btn-secondary" aria-label="View pricing and engagement structures">
                View Engagement Models
              </Link>
            </div>
          </div>
        </header>

        {/* METHODOLOGY SECTION */}
        <section className="section aspnet-process" aria-labelledby="process-heading">
          <div className="container">
            <p className="section-eyebrow">Engineering Methodology</p>
            <div className="section-title">
              <h2 id="process-heading">Our Phase-Gated .NET Development Lifecycle</h2>
              <p>A rigorous, risk-mitigated engineering framework designed to eliminate technical debt and ensure flawless production execution.</p>
            </div>

            <ol className="aspnet-process__list" aria-label="QllmSoft .NET development lifecycle">
              <li className="aspnet-process__item">
                <span className="step-num">01</span>
                <div>
                  <h4>Threat Modeling & Architectural Scoping</h4>
                  <p>Comprehensive boundary analysis, data flow mapping, and identity framework setup (OAuth2, OpenID Connect, JWT) before writing core code.</p>
                </div>
              </li>
              <li className="aspnet-process__item">
                <span className="step-num">02</span>
                <div>
                  <h4>Domain-Driven Design & Clean Architecture</h4>
                  <p>Strict separation of business logic from infrastructure using Clean Architecture principles, ensuring testability and modular maintenance.</p>
                </div>
              </li>
              <li className="aspnet-process__item">
                <span className="step-num">03</span>
                <div>
                  <h4>Iterative Sprint Engineering & CI/CD</h4>
                  <p>Incremental feature development backed by automated unit testing, integration tests, and containerized deployment pipelines via GitHub Actions or Azure DevOps.</p>
                </div>
              </li>
              <li className="aspnet-process__item">
                <span className="step-num">04</span>
                <div>
                  <h4>Zero-Downtime Deployment & Observability</h4>
                  <p>Staged production rollouts monitored through OpenTelemetry, structured logging, and robust enterprise maintenance SLAs.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* TECH STACK SECTION */}
        <section className="section aspnet-tech" aria-labelledby="tech-stack-heading">
          <div className="container">
            <p className="section-eyebrow">Technical Precision</p>
            <div className="section-title">
              <h2 id="tech-stack-heading">Core Technologies & Infrastructure Stack</h2>
              <p>Leveraging native .NET runtime capabilities to guarantee low memory allocation, thread safety, and horizontal throughput.</p>
            </div>

            <div className="aspnet-tech__grid">
              <div className="aspnet-tech-card">
                <h3>C# & .NET Runtime Optimization</h3>
                <p>Utilizing modern C# language features, span-based memory management, asynchronous pipelines, and garbage collection tuning for high-load workloads.</p>
              </div>
              <div className="aspnet-tech-card">
                <h3>Entity Framework Core & SQL Server</h3>
                <p>Optimized LINQ expression compiling, advanced database indexing strategies, temporal tables, and robust ACID transaction handling.</p>
              </div>
              <div className="aspnet-tech-card">
                <h3>Cloud-Native Azure Architecture</h3>
                <p>Deployment across Azure Kubernetes Service (AKS), App Services, Azure SQL, Redis distributed caching, and Azure Key Vault secret management.</p>
              </div>
              <div className="aspnet-tech-card">
                <h3>gRPC & Distributed Messaging</h3>
                <p>High-speed inter-service communication via gRPC protocols and resilient message queues using RabbitMQ or Azure Service Bus.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE & COST FACTORS */}
        <section className="section aspnet-timeline" aria-labelledby="timeline-heading">
          <div className="container">
            <div className="aspnet-timeline-wrapper">
              <p className="section-eyebrow">Investment & Scheduling</p>
              <h2 id="timeline-heading">Timeline & Enterprise Cost Factors</h2>
              <p className="timeline-intro">
                Custom enterprise software pricing is dictated by distinct architectural parameters rather than rigid flat rates. Key drivers include data migration complexity, third-party ERP/WMS endpoint integrations, security compliance frameworks (HIPAA, SOC2, GDPR), and high-availability SLA requirements. 
              </p>
              <p>
                Typical engagement horizons range from 8 to 24+ weeks. To review our structured cost brackets, dedicated team retainers, and fixed-scope estimation models, please consult our comprehensive <Link to="/software-development-cost-calculator">cost calculator</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* CASE STUDY PROOF & CROSS-LINKING */}
        <section className="section aspnet-proof" aria-labelledby="proof-heading">
          <div className="container">
            <div className="aspnet-proof-box">
              <h2 id="proof-heading">Verified Architectural Authority & Proven Execution</h2>
              <p>
                QllmSoft’s .NET engineering patterns power high-frequency transactional environments globally. Our implementation guidelines, security benchmarks, and code standards are publicly documented at our flagship repository, <a href="https://qllmdocs.com" target="_blank" rel="noopener noreferrer">QllmDocs.com</a>. 
              </p>
              <p className="proof-links-row">
                Explore related capabilities across our ecosystem: build tailored enterprise platforms via our <Link to="/web-application-development-services">web application development services</Link>, integrate disconnected legacy tools through our <Link to="/api-development-services">API development services</Link>, or migrate legacy monoliths with our <Link to="/legacy-system-modernization-services">legacy system modernization services</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="section aspnet-faq" aria-labelledby="faq-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="faq-heading">Frequently Asked Questions</h2>
              <p>Expert insights regarding our enterprise ASP.NET Core development engagements.</p>
            </div>

            <div className="aspnet-faq__grid">
              <div className="faq-item">
                <h3>Why choose ASP.NET Core for enterprise software development?</h3>
                <p>ASP.NET Core delivers industry-leading execution speed via the Kestrel web server, cross-platform deployment flexibility, enterprise-grade memory safety with C#, and seamless integration with Microsoft Azure cloud infrastructure.</p>
              </div>
              <div className="faq-item">
                <h3>How does QllmSoft handle data migration during legacy .NET modernization?</h3>
                <p>We execute zero-downtime database migrations using dual-write architectural patterns, automated Entity Framework Core migrations, and rigorous ETL validation pipelines to guarantee zero data loss.</p>
              </div>
              <div className="faq-item">
                <h3>What are the timeline and cost factors for an enterprise .NET project?</h3>
                <p>Timelines range from 8 to 24+ weeks depending on domain complexity, third-party ERP integrations, and compliance requirements. Review our transparent estimation model using our <Link to="/software-development-cost-calculator">cost calculator</Link>.</p>
              </div>
              <div className="faq-item">
                <h3>How do you ensure high availability and security under heavy loads?</h3>
                <p>We implement containerized microservices via Azure Kubernetes Service (AKS), OAuth2/OIDC role-based access control, Redis distributed caching, and automated load testing via enterprise CI/CD pipelines.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="section aspnet-cta-banner" aria-labelledby="cta-heading">
          <div className="container text-center">
            <h2 id="cta-heading">Ready to Scale Your Backend Architecture?</h2>
            <p>Connect directly with our senior engineering team to evaluate your .NET roadmap and technical requirements.</p>
            <Link to="/contact" className="btn btn-primary btn-large" aria-label="Schedule an architecture consultation with QllmSoft">
              Schedule Architecture Review
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}