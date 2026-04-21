/**
 * Projects.jsx — QllmSoft
 * ─────────────────────────────────────────────────────────────────
 * TARGET KEYWORDS:
 *
 * Primary:
 *   software development portfolio Pakistan
 *   custom software projects Pakistan
 *
 * Secondary:
 *   web application portfolio Pakistan, ASP.NET Core projects Pakistan,
 *   software case studies Pakistan, mobile app portfolio Pakistan,
 *   software development company portfolio, QllmSoft projects
 *
 * SEO:
 *   ✓ react-helmet-async  → title, meta, canonical, OG, Twitter
 *   ✓ 3 JSON-LD schemas   → WebPage, ItemList (projects), FAQPage
 *   ✓ Single H1           → portfolio + keyword rich
 *   ✓ Strict H hierarchy  → H1→H2→H3
 *   ✓ Microdata           → ItemList itemScope
 *   ✓ Internal links      → keyword-rich anchors to service pages
 *   ✓ External authority  → authoritative outbound links
 *   ✓ Image alt text      → descriptive
 *   ✓ Duplicate FAQ fixed → removed duplicate "Which technologies" question
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/mock';
import './Projects.css';

/* ─── JSON-LD: WebPage ──────────────────────────────────────────── */
const schemaWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Software Development Portfolio & Case Studies | QllmSoft Pakistan',
  url: 'https://qllmsoft.com/projects',
  description:
    'Explore QllmSoft\'s verified software development portfolio — enterprise web applications, mobile apps, REST APIs, SaaS platforms, and custom software solutions delivered for clients in Pakistan, UK, USA, UAE, and Saudi Arabia.',
  publisher: { '@type': 'Organization', name: 'QllmSoft', url: 'https://qllmsoft.com' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://qllmsoft.com/' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://qllmsoft.com/projects' },
    ],
  },
};

/* ─── JSON-LD: ItemList (project categories) ───────────────────── */
const schemaItemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'QllmSoft Software Development Projects',
  description: 'Portfolio of custom software development projects including ASP.NET Core web applications, mobile apps, REST APIs, and enterprise systems delivered for global businesses.',
  url: 'https://qllmsoft.com/projects',
  numberOfItems: 7,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Alfa Financial Solution — .NET Enterprise System',       url: 'https://qllmsoft.com/projects/alfa-financial-solution' },
    { '@type': 'ListItem', position: 2, name: 'Busel Business Platform — ASP.NET Core Web Application', url: 'https://qllmsoft.com/projects/busel-business-platform' },
    { '@type': 'ListItem', position: 3, name: 'Finance Management System — REST API + React',           url: 'https://qllmsoft.com/projects/finance-management' },
    { '@type': 'ListItem', position: 4, name: 'Fleet Transportation Management — Enterprise Software',  url: 'https://qllmsoft.com/projects/fleet-transportation' },
    { '@type': 'ListItem', position: 5, name: 'Online Examination Platform — Custom LMS',              url: 'https://qllmsoft.com/projects/online-examination' },
    { '@type': 'ListItem', position: 6, name: 'Quranic Arabic Learning Platform — eLearning App',      url: 'https://qllmsoft.com/projects/quranic-arabic' },
    { '@type': 'ListItem', position: 7, name: 'Property Management System — Real Estate Software',     url: 'https://qllmsoft.com/projects/property-management' },
  ],
};

/* ─── JSON-LD: FAQPage ─────────────────────────────────────────── */
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of software projects has QllmSoft delivered in Pakistan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'QllmSoft has delivered custom ASP.NET Core enterprise web applications, SaaS platforms, Android and iOS mobile apps, REST and GraphQL APIs, financial management systems, LMS platforms, fleet management systems, property management tools, and AI-powered business automation software for clients in Pakistan, the UK, USA, UAE, Saudi Arabia, and Jordan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does QllmSoft provide detailed software development case studies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. QllmSoft\'s portfolio includes detailed case studies for each project — covering the business challenge, solution architecture, technologies used, measurable outcomes, and client feedback. Every case study is independently verifiable through our Upwork and Freelancer profiles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which technologies does QllmSoft use in software development projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'QllmSoft projects use ASP.NET Core 8/9, C# 12, Entity Framework Core, SQL Server, React JS, Angular, Flutter, React Native, REST APIs, GraphQL, JWT authentication, Azure, AWS, Docker, and CI/CD pipelines. All projects follow SOLID principles, Clean Architecture, and OWASP security standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can startups hire QllmSoft for MVP software development in Pakistan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. QllmSoft specialises in MVP development for early-stage startups — helping validate ideas with a working, shippable product delivered in weeks rather than months. We combine lean product thinking with production-grade architecture, so your MVP can scale without a rebuild when you find product-market fit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does QllmSoft sign NDAs for confidential software projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. QllmSoft signs NDAs on day one of every engagement. All client data, source code, and business logic remain fully confidential, and complete intellectual property is transferred to the client at project delivery. We follow industry-standard security practices including encrypted repositories, role-based access control, and secure code review processes.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════
   PROJECTS PAGE
═══════════════════════════════════════════════════════════ */
const Projects = () => {

  useEffect(() => {
    const reveals  = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('active'); }),
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════
          SEO HEAD
      ═══════════════════════════════════════════ */}
      <Helmet>
        <title>Software Development Portfolio Pakistan | Case Studies & Projects | QllmSoft</title>
        <meta
          name="description"
          content="Explore QllmSoft's software development portfolio — enterprise web apps, mobile apps, REST APIs, SaaS platforms, and custom software delivered for clients in Pakistan, UK, USA, and UAE. Download our company portfolio PDF."
        />
        <meta
          name="keywords"
          content="software development portfolio Pakistan, custom software projects Pakistan, web application portfolio Pakistan, ASP.NET Core projects Pakistan, mobile app portfolio Pakistan, software case studies Pakistan, software development company portfolio, QllmSoft projects"
        />
        <meta name="author"  content="QllmSoft" />
        <meta name="robots"  content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://qllmsoft.com/projects" />

        <meta property="og:type"         content="website" />
        <meta property="og:url"          content="https://qllmsoft.com/projects" />
        <meta property="og:site_name"    content="QllmSoft" />
        <meta property="og:title"        content="Software Development Portfolio Pakistan | QllmSoft Projects & Case Studies" />
        <meta property="og:description"  content="Enterprise web apps, mobile apps, REST APIs, and SaaS platforms — QllmSoft's verified software development portfolio for global businesses." />
        <meta property="og:image"        content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg" />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt"    content="QllmSoft Software Development Portfolio Pakistan" />
        <meta property="og:locale"       content="en_PK" />

        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Software Development Portfolio Pakistan | QllmSoft" />
        <meta name="twitter:description" content="Enterprise web apps, mobile apps, REST APIs, and custom software — QllmSoft's verified portfolio from Pakistan." />
        <meta name="twitter:image"       content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg" />
        <meta name="twitter:image:alt"   content="QllmSoft Portfolio Pakistan" />

        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaItemList)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main className="projects-page" id="main-content" role="main">

        {/* ── HERO ── */}
        <section
          className="projects-hero reveal"
          aria-labelledby="projects-hero-heading"
        >
          <div className="container">
            {/* ✅ SINGLE H1 */}
            <h1 id="projects-hero-heading">
              Software Development Portfolio &amp; Case Studies — Pakistan &amp; Global
            </h1>
            <p>
              Explore QllmSoft's verified portfolio of custom software development projects — enterprise
              web applications built with ASP.NET Core, cross-platform mobile apps, REST and GraphQL APIs,
              SaaS platforms, and AI-powered business automation tools delivered for clients across
              Pakistan, the UK, USA, UAE, Saudi Arabia, and Jordan. Every project is independently
              verifiable on our{' '}
              <a
                href="https://www.upwork.com/freelancers/~0170e20f8803389a86"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Verify QllmSoft portfolio on Upwork"
              >
                Upwork
              </a>{' '}
              and{' '}
              <a
                href="https://www.freelancer.com/u/mrprogrmmr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View QllmSoft project reviews on Freelancer"
              >
                Freelancer
              </a>{' '}
              profiles.
            </p>
          </div>
        </section>

        {/* ── PROJECTS GRID ── */}
        <section
          className="section projects-grid-section"
          aria-labelledby="grid-heading"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="grid-heading">
                Our Custom Software Development Projects in Pakistan
              </h2>
              <p>
                Real-world case studies showcasing QllmSoft's expertise in building scalable, secure,
                and high-performance digital solutions using ASP.NET Core, React, mobile frameworks,
                and cloud infrastructure. Each project is a documented success story — with measurable
                outcomes, not just screenshots.
              </p>
            </div>

            <div className="projects-grid">
              {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ── */}
        <section
          className="section industries-section bg-light"
          aria-labelledby="industries-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="industries-heading">
                Industries We Serve with Custom Software Development in Pakistan
              </h2>
              <p>
                Industry-specific software development tailored to compliance requirements, operational
                workflows, and scalability demands — not off-the-shelf adaptations. QllmSoft has
                delivered production-grade software across six key sectors, each requiring a different
                combination of security standards, integration complexity, and domain knowledge.
              </p>
              <p>
                From{' '}
                <Link to="/healthcare-software-development-pakistan">HIPAA-compliant healthcare software</Link>{' '}
                and{' '}
                <Link to="/education-software-development-pakistan">LMS platforms for educational institutions</Link>{' '}
                to fintech payment systems and logistics tracking platforms — our portfolio demonstrates
                the breadth and depth of real-world delivery across industries.
              </p>
            </div>

            <div className="industries-grid">

              <article className="industry-card" itemScope itemType="https://schema.org/Service">
                <div className="industry-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h3 itemProp="name">Finance &amp; Banking Software</h3>
                <p itemProp="description">
                  Secure fintech platforms, digital banking portals, payment gateway integrations
                  (JazzCash, Easypaisa, Stripe), and financial management systems designed with
                  advanced encryption, role-based access control, and audit trail capabilities for
                  regulatory compliance.
                </p>
              </article>

              <article className="industry-card" itemScope itemType="https://schema.org/Service">
                <div className="industry-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <h3 itemProp="name">Healthcare Software Development</h3>
                <p itemProp="description">
                  HIPAA-aware hospital management systems, telemedicine platforms, patient management
                  portals, EMR/EHR systems, and medical data solutions built with the privacy standards
                  and reliability that clinical environments demand.{' '}
                  <Link to="/healthcare-software-development-pakistan">Learn more</Link>.
                </p>
              </article>

              <article className="industry-card" itemScope itemType="https://schema.org/Service">
                <div className="industry-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                </div>
                <h3 itemProp="name">Education &amp; eLearning Software</h3>
                <p itemProp="description">
                  School management systems, Learning Management Systems (LMS), student information
                  portals, virtual classrooms, and online examination platforms — built for Pakistani
                  educational institutions and international schools.{' '}
                  <Link to="/education-software-development-pakistan">Learn more</Link>.
                </p>
              </article>

              <article className="industry-card" itemScope itemType="https://schema.org/Service">
                <div className="industry-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                </div>
                <h3 itemProp="name">eCommerce &amp; Retail Platforms</h3>
                <p itemProp="description">
                  Custom eCommerce development with JazzCash, Easypaisa, and Stripe payment integration,
                  product catalog management, inventory automation, order management, and conversion-optimised
                  checkout flows built for Pakistani and international online retailers.
                </p>
              </article>

              <article className="industry-card" itemScope itemType="https://schema.org/Service">
                <div className="industry-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                </div>
                <h3 itemProp="name">Logistics &amp; Supply Chain Software</h3>
                <p itemProp="description">
                  Fleet management systems, real-time shipment tracking, warehouse automation platforms,
                  route optimisation tools, and supply chain visibility dashboards for logistics and
                  delivery companies operating across Pakistan and the Gulf region.
                </p>
              </article>

              <article className="industry-card" itemScope itemType="https://schema.org/Service">
                <div className="industry-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <h3 itemProp="name">Real Estate &amp; Property Management</h3>
                <p itemProp="description">
                  Property management portals, real estate listing platforms, CRM systems for agents
                  and agencies, digital transaction management tools, and tenant management systems
                  built for Pakistani and UAE property markets.
                </p>
              </article>

            </div>
          </div>
        </section>

        {/* ── PORTFOLIO DOWNLOAD ── */}
        <section className="section portfolio-download-section">
          <div className="container">
            <div className="portfolio-box reveal">
              <h2>Download QllmSoft's Software Development Portfolio PDF</h2>
              <p>
                Get a comprehensive overview of our technical capabilities, development methodology,
                client success stories, and industry-specific software expertise. Our portfolio PDF
                includes architecture diagrams, technology stacks, and quantifiable project outcomes —
                everything you need to evaluate QllmSoft as your software development partner in Pakistan.
              </p>
              <a
                href="/pdfs/QllmSoft-Company-Portfolio.pdf"
                className="btn btn-primary portfolio-download-btn"
                download
                aria-label="Download QllmSoft software development portfolio PDF"
              >
                Download Software Portfolio (PDF) ↓
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <div className="cta-content">
              <h2 id="cta-heading">
                Start Your Custom Software Development Project in Pakistan
              </h2>
              <p>
                Whether you need an enterprise web application, a mobile app, a REST API, or a
                complete digital transformation — QllmSoft brings the technical depth, delivery
                discipline, and domain experience to build software that drives real business outcomes.
                Get a detailed fixed-price proposal within 24 hours of your free consultation.
              </p>
              <Link
                to="/contact"
                className="btn btn-primary"
                aria-label="Start your software development project with QllmSoft Pakistan"
              >
                Request Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          className="section faq-section"
          aria-labelledby="faq-heading"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="container">
            <div className="faq-header reveal">
              <h2 id="faq-heading">
                Frequently Asked Questions — Software Development Portfolio &amp; Projects
              </h2>
              <p>
                Everything you need to know about QllmSoft's custom software development projects,
                case studies, and delivery process.
              </p>
            </div>

            <div className="faq-container">

              <details className="faq-item reveal" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary itemProp="name">What types of software projects has QllmSoft delivered in Pakistan?</summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">
                    QllmSoft has delivered custom ASP.NET Core enterprise web applications, SaaS platforms,
                    Android and iOS mobile apps, REST and GraphQL APIs, financial management systems, LMS
                    platforms, fleet management systems, property management tools, and AI-powered business
                    automation software. Our clients span Pakistan, the UK, USA, UAE, Saudi Arabia, and Jordan
                    — all independently verifiable on Upwork and Freelancer.
                  </p>
                </div>
              </details>

              <details className="faq-item reveal" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary itemProp="name">Does QllmSoft provide detailed software development case studies?</summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">
                    Yes. Every QllmSoft portfolio entry includes a detailed case study covering the business
                    challenge, technical architecture, technologies used, measurable outcomes, and client
                    testimonial. Download our Portfolio PDF above for the complete set of case studies —
                    including architecture diagrams and technology breakdown.
                  </p>
                </div>
              </details>

              <details className="faq-item reveal" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary itemProp="name">Which technologies does QllmSoft use in software development projects?</summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">
                    QllmSoft projects use ASP.NET Core 8/9, C# 12, Entity Framework Core, SQL Server,
                    React JS, Angular, Flutter, React Native, REST APIs, GraphQL, JWT/OAuth2, Microsoft Azure,
                    AWS, Docker, Kubernetes, and CI/CD pipelines. Every project follows SOLID principles,
                    Clean Architecture patterns, and OWASP security standards — ensuring maintainable,
                    secure, and scalable software.
                  </p>
                </div>
              </details>

              <details className="faq-item reveal" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary itemProp="name">Does QllmSoft work with international clients outside Pakistan?</summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">
                    Yes. QllmSoft has delivered verified software projects for clients in the UK, USA, UAE,
                    Saudi Arabia, Jordan, and Germany. Our development team works in client time zones,
                    communicates in fluent English, and uses international collaboration tools — Jira, GitHub,
                    Azure DevOps, Slack, and Microsoft Teams — to ensure seamless remote engagement. See our{' '}
                    <Link to="/outsource-software-development-to-pakistan">software outsourcing services</Link>{' '}
                    for more information.
                  </p>
                </div>
              </details>

              <details className="faq-item reveal" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary itemProp="name">Can startups hire QllmSoft for MVP software development in Pakistan?</summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">
                    Yes. QllmSoft specialises in MVP development for early-stage startups — lean product
                    thinking combined with production-grade architecture, so your MVP can scale without a
                    rebuild when you find product-market fit. We help validate your idea with a working,
                    shippable product in weeks, not months — at a fraction of the cost of building an
                    in-house team.
                  </p>
                </div>
              </details>

              <details className="faq-item reveal" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary itemProp="name">Does QllmSoft sign NDAs for confidential software projects?</summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">
                    Yes. QllmSoft signs NDAs on day one of every engagement. All client data, source code,
                    business logic, and intellectual property remain fully confidential — with complete IP
                    ownership transferred to the client at project delivery. We use encrypted repositories,
                    role-based access control, and secure code review processes on every project.
                  </p>
                </div>
              </details>

              <details className="faq-item reveal" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary itemProp="name">Is my business data and source code secure when working with QllmSoft?</summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">
                    Yes. QllmSoft implements industry-standard data security practices across all engagements —
                    AES-256 encryption, HTTPS-only communication, role-based access control, audit logging,
                    and OWASP-compliant secure coding standards. Your business data, IP, and source code are
                    protected through contractual, technical, and operational security measures from day one.
                  </p>
                </div>
              </details>

              <details className="faq-item reveal" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary itemProp="name">Does QllmSoft provide post-delivery support for software projects?</summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">
                    Yes. Every QllmSoft project includes a formal 30-day post-launch support period covering
                    bug resolution, performance monitoring, security patches, and knowledge transfer.
                    Long-term maintenance contracts are available for businesses that need an ongoing
                    technical partner for feature development, security updates, and system optimisation.
                  </p>
                </div>
              </details>

              <details className="faq-item reveal" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary itemProp="name">Why choose QllmSoft over other software houses in Pakistan?</summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">
                    QllmSoft differentiates through three things most software houses cannot independently
                    verify: a 100% Job Success Score on Upwork, 5-star reviews on Freelancer from clients
                    across four continents, and a portfolio of production systems still running for global
                    clients. We focus on business outcomes — understanding your processes and building
                    software that genuinely improves operational efficiency and revenue potential.
                  </p>
                </div>
              </details>

              <details className="faq-item reveal" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary itemProp="name">How do I start a custom software development project with QllmSoft?</summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">
                    Contact QllmSoft through the Contact page for a free consultation. We will review your
                    requirements, recommend the best technical approach, and deliver a detailed fixed-price
                    proposal within 24 hours — with a formal scope document, milestone plan, and technology
                    recommendation before any development commitment is required.
                  </p>
                </div>
              </details>

            </div>

            <p style={{ marginTop: '24px', fontSize: '0.88rem', color: '#718096' }}>
              QllmSoft is a custom software development company in Pakistan specialising in enterprise
              ASP.NET Core solutions, web application development, mobile app development, and system
              modernisation. Our project portfolio demonstrates verified delivery of secure, scalable,
              and business-focused digital solutions across industries and geographies.
            </p>

          </div>
        </section>

      </main>
    </>
  );
};

export default Projects;
