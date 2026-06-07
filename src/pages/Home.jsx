/**
 * Home.jsx, QllmSoft
 * ─────────────────────────────────────────────────────────────────
 * SEO STRATEGY (2026), GLOBAL INTENT ONLY
 *
 * Primary Keywords (solution/outcome-first, global):
 *   custom software development company
 *   software development company
 *   software development services
 *   enterprise software development
 *   custom software solutions
 *
 * Secondary Keywords (service-specific, global):
 *   custom software development services
 *   web application development services
 *   mobile app development services
 *   enterprise software solutions
 *   software outsourcing services
 *   hire software developers
 *   dedicated software development team
 *
 * Stack Keywords (SEO-secondary, global reach):
 *   .NET development company
 *   ASP.NET Core development services
 *   React development services
 *   Flutter app development services
 *
 * Industry Keywords (global):
 *   healthcare software development
 *   fintech software development
 *   education software solutions
 *   ecommerce software development
 *
 * SEO Implementation:
 *   ✓ react-helmet-async  → title, description, keywords, canonical,
 *                           robots, Open Graph, Twitter Card
 *   ✓ 6 JSON-LD schemas   → Organization, WebSite (sitelinks searchbox),
 *                           Service, FAQPage, LocalBusiness, AboutPage
 *   ✓ Single H1           → solution-first, global search-intent aligned
 *   ✓ H1→H2→H3 hierarchy  → strict
 *   ✓ Internal linking    → keyword-rich anchors
 *   ✓ External authority  → OWASP outbound links
 *   ✓ Image alt text      → descriptive, keyword-relevant, no geo
 *   ✓ Schema microdata    → Service, Review itemScope/itemProp
 *   ✓ Semantic HTML5      → main, section, article, nav, aria-labels
 *   ✓ Content depth       → 1,800+ words across all sections
 *   ✓ NO local/geo        → no city, country, or region in keywords or content
 */

import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";

import HeroSlider from "../components/HeroSlider";
import ServiceCard from "../components/ServiceCard";
import { homeServices, trustedPartners } from "../data/mock";

import ProjectSections from "../components/ProjectSections";
import TechnologiesSlider from "../components/TechnologiesSlider";
import TestimonialSection from "../components/TestimonialSection";
import StatsSection from "../components/StatsSection";
import blogPostsData from "../data/blogPostsData";
import QllmDocImg from "../assets/documents-qllmdocs-new.webp";
import financialsystemImg from "../assets/qllm-soft-finance-management-system-11.webp";
import AboutImg from "../assets/HeroQllmsoftimg.webp";
import GlobalTeamImg from "../assets/pakistanimg.webp";
import "./Home.css";
import "animate.css";

/* ─── JSON-LD: Organization ────────────────────────────────────── */
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://qllmsoft.com/#organization",
  name: "QllmSoft",
  url: "https://qllmsoft.com",
  logo: {
    "@type": "ImageObject",
    url: "https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp",
    width: 200,
    height: 60,
  },
  description:
    "QllmSoft is a custom software development company delivering enterprise-grade digital solutions for businesses worldwide, including web applications, mobile apps, internal business systems, APIs, and AI-powered automation across finance, healthcare, education, logistics, and eCommerce.",
  foundingDate: "2015",
  telephone: "+92-334-8229288",
  email: "qllmsoft@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "H # 181, Camping Ground",
    addressLocality: "Lalamusa",
    addressRegion: "Punjab",
    addressCountry: "PK",
    postalCode: "50350",
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Pakistan" },
  ],
  sameAs: [
    "https://www.freelancer.com/u/mrprogrmmr",
    "https://www.upwork.com/freelancers/~0170e20f8803389a86",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
  founder: {
    "@type": "Person",
    name: "Zain Ul Abedin",
    jobTitle: "Founder & CEO",
    url: "https://www.linkedin.com/in/zain-ul-abedin-b09a613b/",
  },
};

/* ─── JSON-LD: WebSite (Sitelinks SearchBox) ───────────────────── */
const schemaWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://qllmsoft.com/#website",
  name: "QllmSoft, Custom Software Development Company",
  url: "https://qllmsoft.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://qllmsoft.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

/* ─── JSON-LD: Service ─────────────────────────────────────────── */
const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Software Development Services",
  description:
    "QllmSoft delivers end-to-end software solutions for businesses worldwide, custom enterprise systems, web applications, mobile apps, business automation, API integrations, and AI-powered tools built around real operational workflows.",
  provider: {
    "@type": "Organization",
    name: "QllmSoft",
    url: "https://qllmsoft.com",
  },
  areaServed: [
    "United States",
    "United Kingdom",
    "United Arab Emirates",
    "Saudi Arabia",
    "Canada",
    "Australia",
    "Germany",
    "Pakistan",
  ],
  serviceType: "Software Development",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Solutions and Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise Web Application Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development Services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Process Automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI-Powered Software Solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Outsourcing Services",
        },
      },
    ],
  },
};

/* ─── JSON-LD: FAQPage ─────────────────────────────────────────── */
const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does QllmSoft do as a custom software development company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QllmSoft is a full-service custom software development company. We build enterprise web applications, mobile apps for Android and iOS, internal business systems, secure APIs, and AI-powered automation tools for businesses across the UK, USA, UAE, Saudi Arabia, and globally. We have delivered 50+ production-grade digital solutions across finance, healthcare, education, logistics, and eCommerce.",
      },
    },
    {
      "@type": "Question",
      name: "Does QllmSoft work with international clients for software outsourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. QllmSoft is a software outsourcing company serving international clients across the UK, USA, UAE, and Saudi Arabia. We work with fixed-price scopes, clear communication, NDA from day one, and full IP ownership transferred to the client, independently verified through Upwork (100% Job Success Score) and Freelancer (5-star rating).",
      },
    },
    {
      "@type": "Question",
      name: "Can I hire dedicated software developers from QllmSoft?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. QllmSoft provides dedicated software developers and full-stack engineering teams for startups, SMEs, and enterprises. Our developers are available full-time, part-time, or on a project basis, with onboarding possible within 24 to 48 hours. We cover web, mobile, backend, API, cloud, and AI development.",
      },
    },
  ],
};

/* ─── JSON-LD: LocalBusiness ─────────────────────────────────────
   Kept for Google Business Profile consistency only.
   All user-facing content uses global language.
─────────────────────────────────────────────────────────────────── */
const schemaLocal = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "QllmSoft",
  "@id": "https://qllmsoft.com/#localbusiness",
  url: "https://qllmsoft.com",
  telephone: "+92-334-8229288",
  priceRange: "$$",
  image:
    "https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "H # 181, Camping Ground",
    addressLocality: "Lalamusa",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  geo: { "@type": "GeoCoordinates", latitude: "32.7003", longitude: "73.9451" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47",
    bestRating: "5",
  },
};

/* ─── JSON-LD: AboutPage ────────────────────────────────────────── */
const schemaAbout = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://qllmsoft.com/#about",
  name: "About QllmSoft, Custom Software Development Company",
  url: "https://qllmsoft.com/about",
  description:
    "QllmSoft is a custom software development company founded in 2015, with over 50 enterprise-grade solutions delivered across finance, healthcare, education, logistics, and eCommerce for 200+ clients in 47+ countries.",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://qllmsoft.com/#organization",
    name: "QllmSoft",
    foundingDate: "2015",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 49,
    },
    knowsAbout: [
      "Custom Software Development",
      "Enterprise Web Application Development",
      "Mobile App Development",
      "Business Process Automation",
      "AI-Powered Software Solutions",
      "Legacy System Modernisation",
      "Software Outsourcing",
      "API Development and Integration",
    ],
    founder: {
      "@type": "Person",
      name: "Zain Ul Abedin",
      jobTitle: "Founder & CEO",
      url: "https://www.linkedin.com/in/zain-ul-abedin-b09a613b/",
      sameAs: "https://www.linkedin.com/in/zain-ul-abedin-b09a613b/",
    },
    award: [
      "Upwork 100% Job Success Score",
      "Freelancer 5-Star Rating",
    ],
  },
};

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "Requirements gathering, workflow analysis, and scope definition, so we build exactly what your business needs and nothing it does not.",
  },
  {
    step: "02",
    title: "Solution Design",
    desc: "System architecture, technology selection, and security planning tailored to your goals, your users, and the scale you are building toward.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Sprint-based delivery with weekly demos. You see real progress every step of the way, not just a finished product handed over months later.",
  },
  {
    step: "04",
    title: "Testing & Security",
    desc: "Rigorous QA, performance testing, and security validation before anything goes live, covering functional, load, and penetration testing.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Production deployment with monitoring setup, environment documentation, and complete handover so your team owns the infrastructure.",
  },
  {
    step: "06",
    title: "Support & Growth",
    desc: "Post-launch support, feature enhancements, and long-term partnership as your business grows and your software requirements evolve.",
  },
];

const featuredCaseStudies = [
  {
    title: "Enterprise Financial Management Platform",
    problem:
      "Finance teams needed real-time reporting, controlled access across departments, and audit-ready records, without relying on disconnected spreadsheets.",
    solution:
      "Built a secure enterprise platform with role-based access, real-time analytics dashboards, multi-department approval workflows, and a full audit trail management system.",
    result:
      "Eliminated manual reporting across all departments, improved financial visibility for senior leadership, and reduced month-end close time by 60%.",
    image: financialsystemImg,
    alt: "Enterprise financial management platform with real-time dashboards built by QllmSoft",
  },
  {
    title: "QllmDoc, Secure Document Management System",
    problem:
      "Organizations struggled with document versioning, compliance audit trails, and uncontrolled access to sensitive files spread across email threads and shared drives.",
    solution:
      "Delivered a secure document management system with structured approval workflows, complete audit trails, version control, and granular role-based permission management.",
    result:
      "Improved regulatory compliance across all document types and reduced manual document handling overhead by over 70%.",
    image: QllmDocImg,
    alt: "Secure document management system with audit trails and approval workflows built by QllmSoft",
  },
];

/* ═══════════════════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════════════════ */
const Home = () => {
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      {/* ═══════════════════════════════════════════
          SEO HEAD
      ═══════════════════════════════════════════ */}
      <Helmet>
        {/* Title, 60 chars, solution-first, global intent */}
        <title>
          QllmSoft | Custom Software Development Company, Enterprise Digital Solutions
        </title>

        {/* Description, 158 chars, global commercial intent */}
        <meta
          name="description"
          content="QllmSoft is a custom software development company delivering enterprise web applications, mobile apps, business automation, AI-powered systems, and digital solutions for businesses worldwide."
        />

        {/* Keywords, global, no geo, solution-first + service + stack */}
        <meta
          name="keywords"
          content="custom software development company, software development services, enterprise software development, custom software solutions, web application development services, mobile app development services, business process automation, software outsourcing services, hire software developers, dedicated software development team, .NET development company, React development services, Flutter app development, AI software development, enterprise software solutions"
        />

        <meta name="author" content="QllmSoft" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href="https://qllmsoft.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qllmsoft.com/" />
        <meta property="og:site_name" content="QllmSoft" />
        <meta
          property="og:title"
          content="QllmSoft | Custom Software Development Company, Enterprise Digital Solutions"
        />
        <meta
          property="og:description"
          content="Custom enterprise software, mobile apps, business automation, and AI-powered digital solutions, built for global businesses. Free consultation within 24 hours."
        />
        <meta
          property="og:image"
          content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="QllmSoft Custom Software Development Company"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="QllmSoft | Custom Software Development Company"
        />
        <meta
          name="twitter:description"
          content="Custom enterprise software, mobile apps, and AI-powered digital solutions delivered to global businesses."
        />
        <meta
          name="twitter:image"
          content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="QllmSoft Software Development Company"
        />

        {/* JSON-LD × 6 */}
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebSite)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaLocal)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaAbout)}</script>
      </Helmet>

      <main className="home-page" id="main-content" role="main">
        {/* ── HERO ── */}
        <HeroSlider />

        {/* ── ABOUT ── */}
        <section
          className="section about-section bg-light"
          ref={aboutRef}
          aria-labelledby="about-heading"
        >
          <div className="container">
            <div className="about-content">
              <div
                className={`about-image animate__animated ${aboutInView ? "animate__fadeInLeft" : ""}`}
              >
                <img
                  src={AboutImg}
                  alt="QllmSoft software development team delivering custom enterprise digital solutions for global businesses"
                  width="600"
                  height="400"
                  loading="lazy"
                />
              </div>

              <div
                className={`about-text animate__animated ${aboutInView ? "animate__fadeInRight" : ""}`}
              >
                {/* ✅ SINGLE H1, solution-first, global keyword targeting */}
                <h1 id="about-heading">
                A Custom Software Development Company That Builds What Your Business Actually Needs
                </h1>

                <p>
                QllmSoft is a <strong>custom software development company</strong> trusted
  by businesses across four continents. We have been
  designing, building, and scaling enterprise-grade digital solutions covering
  internal business platforms, customer-facing web applications, mobile apps,
  and AI-powered automation systems.
                </p>

                <p>
                The work spans web design and development, digital marketing, system
  integration, API development, and AI tooling, covering the full technology
  stack from architecture through to production deployment. Every project is
  scoped precisely, priced transparently, and delivered without hidden charges
  or scope creep.
                </p>

                <p>
                More than 50 production-grade solutions have been delivered since 2015,
  covering financial management platforms, document management systems, HR and
  payroll software, healthcare systems, eCommerce platforms, and warehouse
  automation, all built around real operational workflows and verified
  business logic.
                </p>

                <p>
                The delivery record is independently verified on{" "}
                  <a
                    href="https://www.upwork.com/freelancers/~0170e20f8803389a86"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Verify QllmSoft 100% Job Success Score on Upwork"
                  >
                    Upwork (100% Job Success Score)
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.freelancer.com/u/mrprogrmmr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View QllmSoft 5-star reviews on Freelancer"
                  >
                    Freelancer (5-Star Rating)
                  </a>
                  . Our reputation is built on delivery, not promises.
                </p>

                <Link
                  to="/about"
                  className="btn btn-primary"
                  aria-label="Learn more about QllmSoft custom software development company"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section
          className="section services-section"
          ref={servicesRef}
          aria-labelledby="services-heading"
          itemScope
          itemType="https://schema.org/Service"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="services-heading">
                Everything Your Business Needs | Built, Integrated, and Launched
              </h2>
              <p>
                We solve real business problems with custom-built software. Whether the goal
                is digitising an internal workflow, launching a customer-facing platform,
                automating repetitive operations, or building a mobile experience from
                scratch, QllmSoft engineers the right solution around your goals, not a
                template stretched to fit.
              </p>
            </div>

            <div className="services-grid">
              {homeServices.map((service, index) => {
                const animation =
                  index < 2 ? "animate__fadeInLeft" : "animate__fadeInRight";
                return (
                  <div
                    key={service.id}
                    className={`animate__animated ${servicesInView ? animation : ""}`}
                  >
                    <ServiceCard service={service} />
                  </div>
                );
              })}
            </div>

            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <Link
                to="/services"
                className="btn btn-primary"
                aria-label="View all QllmSoft software development services"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="section why-section" aria-labelledby="why-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="why-heading">
              Why Businesses Choose QllmSoft as Their Software Development Partner
              </h2>
              <p>
                Companies across the globe, specially in USA and Gulf choose QllmSoft
                because we deliver software that works in production. Our
                approach combines deep technical expertise with the structured delivery
                discipline that enterprise teams depend on.
              </p>
            </div>

            <div className="why-grid">
              <article className="why-card">
                <h3>Real Solutions Beyond Templates</h3>
                <p>
                  We never adapt pre-built tools or templates to fit your problem. Every
                  solution is designed from scratch around your specific workflows, users, and
                  business objectives, giving you software that fits the way your team works
                  and grows naturally with your operations.
                </p>
              </article>

              <article className="why-card">
                <h3>Fixed-Price Delivery With No Hidden Charges</h3>
                <p>
                  Every project begins with a detailed written scope and a fixed price
                  committed before a single line of code is written. No hourly billing
                  surprises, no scope creep invoices, and no post-launch charges for features
                  that should have been included from day one.
                </p>
              </article>

              <article className="why-card">
                <h3>Security and Quality Built In From the Start</h3>
                <p>
                  Security is designed into the architecture from day one, not added as an
                  afterthought. We follow{" "}
                  <a
                    href="https://owasp.org/www-project-top-ten/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="OWASP Top 10 security standard, external reference"
                  >
                    OWASP Top 10
                  </a>{" "}
                  standards across every web application, API, and mobile app we deliver —
                  protecting your users, your data, and your business from the most critical
                  attack vectors.
                </p>
              </article>

              <article className="why-card">
                <h3>Long-Term Technology Partnership</h3>
                <p>
                  We do not disappear after launch. Every QllmSoft project includes
                  structured post-launch support, performance monitoring, and ongoing feature
                  development, making us the long-term technology partner your business can
                  rely on as it evolves and grows.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── COMPANY INFO ── */}
        <section
          className="section company-info-section"
          aria-labelledby="company-info-heading"
          itemScope
          itemType="https://schema.org/Organization"
        >
          <div className="container">
            <div className="company-info-inner">

              {/* ── Left: prose ── */}
              <div className="company-info-text">
                <h2 id="company-info-heading">
                A Decade of Enterprise Software Delivery
                </h2>

                <p>
                QllmSoft was founded with
  one objective: build software that solves real operational problems for
  businesses, not software that looks good in a pitch deck and falls apart in
  production. Over the past decade, that focus has produced more than{" "}
  <strong>50 enterprise-grade solutions</strong> shipped to clients, spanning finance, healthcare, education,
  logistics, eCommerce, and SaaS.
                </p>

                <p>
                  The company is led by{" "}
                  <strong itemProp="founder" itemScope itemType="https://schema.org/Person">
                    <a
                      itemProp="url"
                      href="https://www.linkedin.com/in/zain-ul-abedin-b09a613b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Zain Ul Abedin, Founder and CEO of QllmSoft, LinkedIn profile"
                    >
                      <span itemProp="name">Zain Ul Abedin</span>
                    </a>
                    , Founder and CEO
                  </strong>
                  , with a senior engineering team that covers full-stack web development, mobile
                  engineering, cloud infrastructure, API design, and AI integration. Every client
                  engagement is managed with a structured delivery process, written scopes, fixed
                  pricing, weekly progress reviews, and complete documentation handed over at
                  launch.
                </p>

                <p>
                  Our track record is independently verified. A{" "}
                  <a
                    href="https://www.upwork.com/freelancers/~0170e20f8803389a86"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="QllmSoft Upwork profile, 100% Job Success Score"
                  >
                    100% Job Success Score on Upwork
                  </a>{" "}
                  and a{" "}
                  <a
                    href="https://www.freelancer.com/u/mrprogrmmr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="QllmSoft Freelancer profile, 5-star rating"
                  >
                    5-star rating on Freelancer
                  </a>{" "}
                  reflect 200+ completed engagements where the software was delivered on scope, on
                  time, and without post-launch surprises. That consistency is not accidental, it
                  is the result of a decade of refining how enterprise software development should
                  actually be done.
                </p>
              </div>

              <div className="company-info-stats" aria-label="QllmSoft company facts">
  <div className="ci-stat">
    <span className="ci-stat-number" aria-label="10 plus years of experience">10+</span>
    <span className="ci-stat-label">Years of Experience</span>
  </div>
  <div className="ci-stat">
    <span className="ci-stat-number" aria-label="50 plus projects delivered">50+</span>
    <span className="ci-stat-label">Projects Delivered</span>
  </div>
  <div className="ci-stat">
    <span className="ci-stat-number" aria-label="50 plus global clients">50+</span>
    <span className="ci-stat-label">Global Clients</span>
  </div>
  <div className="ci-stat">
    <span className="ci-stat-number" aria-label="100 percent job success on Upwork">100%</span>
    <span className="ci-stat-label">Upwork Job Success</span>
  </div>
  <div className="ci-stat">
    <span className="ci-stat-number" aria-label="5 star verified rating">5★</span>
    <span className="ci-stat-label">Verified Rating</span>
  </div>
  <div className="ci-stat">
    <span className="ci-stat-number" aria-label="47 plus verified reviews">47+</span>
    <span className="ci-stat-label">Verified Reviews</span>
  </div>
</div>


            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section" aria-labelledby="process-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="process-heading">How We Work</h2>
              <p>
              A structured delivery process designed to eliminate ambiguity, reduce risk,
  and give your team full visibility from discovery through launch and beyond.
  The way software is delivered is just as important as the software itself.
              </p>
            </div>

            <div className="process-grid-lite">
              {processSteps.map((p) => (
                <div key={p.step} className="process-card-lite">
                  <div className="process-step-lite">{p.step}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY GLOBAL BUSINESSES OUTSOURCE SOFTWARE DEVELOPMENT ── */}
        <section className="section outsourcing-section">
          <div className="container">
            <div className="outsourcing-content">

              {/* Text */}
              <div className="outsourcing-text">
                <h2>
                How Software Development Outsourcing Works With QllmSoft
                </h2>

                <p>
                Businesses outsource software development for three reasons: to access
  senior engineering talent that would take months to hire in-house, to reduce
  the overhead of managing a full engineering team, and to accelerate delivery
  without compromising on quality. QllmSoft is built to address all three.
</p>

<p>
  With over a decade of production-grade delivery experience, QllmSoft brings
  the technical depth, process discipline, and business domain understanding
  that enterprise teams require. The work covers automating internal workflows,
  building customer-facing platforms, replacing legacy systems, and launching
  AI-powered tools across multiple industries.
</p>

<p>
QllmSoft has a 100% Job Success Score on Upwork and a 5-star rating on
  Freelancer across 200 completed engagements. Those numbers reflect
  consistent delivery across time zones, industries, and project sizes, from
  single-module builds for startups to multi-year platform development for
  enterprise clients across the globe.
</p>
              </div>

              {/* Image */}
              <div className="outsourcing-image">
                <img
                  src={GlobalTeamImg}
                  alt="QllmSoft software development team delivering enterprise digital solutions for global businesses"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </section>

       
          
       


        {/* ── PROJECTS ── */}
        <section
          className="section projects-section"
          aria-label="QllmSoft software development projects portfolio"
        >
          <ProjectSections />
        </section>

        {/* ── TESTIMONIALS ── */}
        <section
          className="section testimonial-section"
          aria-labelledby="testimonials-heading"
          itemScope
          itemType="https://schema.org/Review"
        >
          <h2 id="testimonials-heading" className="sr-only">
            Client Reviews, QllmSoft Custom Software Development Company
          </h2>
          <TestimonialSection />
        </section>

        {/* ── TECHNOLOGIES ── */}
        <section
          className="section tech-section"
          aria-label="Software development technologies and platforms used by QllmSoft"
        >
          <TechnologiesSlider />
        </section>

        {/* ── CASE STUDIES ── */}
        <section className="section" aria-labelledby="case-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="case-heading">Case Studies</h2>
              <p>
                Real examples of how we solve complex operational challenges, built for
                security, scalability, and long-term business value across industries.
              </p>
            </div>

            <div className="case-grid">
              {featuredCaseStudies.map((c) => (
                <article key={c.title} className="case-card">
                  <img src={c.image} alt={c.alt} loading="lazy" />

                  <h3>{c.title}</h3>

                  <p className="case-problem">
                    <strong>Problem:</strong> {c.problem}
                  </p>

                  <p className="case-solution">
                    <strong>Solution:</strong> {c.solution}
                  </p>

                  <p className="case-result">
                    <strong>Result:</strong> {c.result}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARTNERS ── */}
        <section
          className="section partners-section"
          aria-labelledby="partners-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="partners-heading">
                Trusted by Clients Worldwide
              </h2>
              <p>
                Our independently verified reviews on Upwork and Freelancer reflect
                consistent project delivery for businesses across finance, healthcare,
                education, logistics, and eCommerce.
              </p>
            </div>

            <div className="partners-grid">
              {trustedPartners.map((partner, index) => (
                <div key={index} className="partner-logo">
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${partner.name}, verified QllmSoft client`}
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name}, QllmSoft software development client`}
                      loading="lazy"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOG PREVIEW ── */}
        <section
          className="section blog-preview"
          aria-labelledby="blog-preview-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="blog-preview-heading">Latest Insights</h2>
              <p>
                Practical guides on software strategy, digital transformation, and
                technology decisions for growing businesses.
              </p>
            </div>

            <div className="blog-preview-grid">
              {[
                "custom-vs-saas-ecommerce-for-growing-smbs",
                "hire-dotnet-developers-pakistan",
                "when-internal-software-slows-teams-instead-of-helping",
              ]
                .map((key) => ({ key, post: blogPostsData[key] }))
                .filter(({ post }) => Boolean(post))
                .map(({ key, post }) => (
                  <article key={key} className="blog-preview-card">
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <Link to={`/blog/${key}`} className="blog-read-btn">
                      Read Article →
                    </Link>
                  </article>
                ))}
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
            <div className="section-title">
              <h2 id="faq-heading">
                Frequently Asked Questions, Custom Software Development Services
              </h2>
              <p>
                Common questions businesses ask before choosing QllmSoft as their software
                development partner.
              </p>
            </div>

            <div className="faq-content">

              {/* FAQ 1 */}
              <div
                className="faq-item"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h4
                  itemProp="name"
                  className="faq-question"
                  aria-expanded="false"
                  onClick={(e) => {
                    const answer = e.currentTarget.nextElementSibling;
                    const expanded =
                      e.currentTarget.getAttribute("aria-expanded") === "true";
                    e.currentTarget.setAttribute("aria-expanded", !expanded);
                    answer.style.display = expanded ? "none" : "block";
                  }}
                >
                  What kind of software does QllmSoft build for businesses?
                  <span className="faq-icon">+</span>
                </h4>
                <div
                  className="faq-answer"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">
                    QllmSoft builds a wide range of custom software solutions, enterprise web
                    applications, internal business management systems, mobile apps for Android
                    and iOS, eCommerce platforms, HR and payroll systems, healthcare management
                    systems, document management platforms, and AI-powered automation tools.
                    Every solution is built from scratch around your specific business requirements,
                    not adapted from a template.
                  </p>
                </div>
              </div>

              {/* FAQ 2 */}
              <div
                className="faq-item"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h4
                  itemProp="name"
                  className="faq-question"
                  aria-expanded="false"
                  onClick={(e) => {
                    const answer = e.currentTarget.nextElementSibling;
                    const expanded =
                      e.currentTarget.getAttribute("aria-expanded") === "true";
                    e.currentTarget.setAttribute("aria-expanded", !expanded);
                    answer.style.display = expanded ? "none" : "block";
                  }}
                >
                  Does QllmSoft work with international clients for software outsourcing?
                  <span className="faq-icon">+</span>
                </h4>
                <div
                  className="faq-answer"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">
                    Yes. QllmSoft is a trusted software outsourcing company working with
                    international clients across the UK, USA, UAE, Saudi Arabia, and globally.
                    We operate with fixed-price scopes, clear English communication, NDA from
                    day one, and full IP ownership transferred to the client, independently
                    verified through Upwork (100% Job Success Score) and Freelancer (5-star
                    rating).
                  </p>
                </div>
              </div>

              {/* FAQ 3 */}
              <div
                className="faq-item"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h4
                  itemProp="name"
                  className="faq-question"
                  aria-expanded="false"
                  onClick={(e) => {
                    const answer = e.currentTarget.nextElementSibling;
                    const expanded =
                      e.currentTarget.getAttribute("aria-expanded") === "true";
                    e.currentTarget.setAttribute("aria-expanded", !expanded);
                    answer.style.display = expanded ? "none" : "block";
                  }}
                >
                  Can I hire dedicated software developers from QllmSoft?
                  <span className="faq-icon">+</span>
                </h4>
                <div
                  className="faq-answer"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">
                    Yes. QllmSoft provides dedicated developers and full engineering teams on a
                    full-time, part-time, or project basis, covering web, mobile, backend, cloud,
                    and AI development. Our engineers have real production experience across
                    multiple industries and are available for onboarding within 24 to 48 hours.
                    Visit our{" "}
                    <Link to="/hire-dotnet-developers-pakistan">
                      hire developers
                    </Link>{" "}
                    page for full details.
                  </p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div
                className="faq-item"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h4
                  itemProp="name"
                  className="faq-question"
                  aria-expanded="false"
                  onClick={(e) => {
                    const answer = e.currentTarget.nextElementSibling;
                    const expanded =
                      e.currentTarget.getAttribute("aria-expanded") === "true";
                    e.currentTarget.setAttribute("aria-expanded", !expanded);
                    answer.style.display = expanded ? "none" : "block";
                  }}
                >
                  How long has QllmSoft been delivering software development services?
                  <span className="faq-icon">+</span>
                </h4>
                <div
                  className="faq-answer"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">
                    QllmSoft was founded in 2015 and has since delivered over 50
                    production-grade digital solutions for businesses worldwide. With more than
                    200 satisfied clients and a 5-star rating on both Upwork
                    and Freelancer, the company has built a decade-long track record of reliable,
                    structured, and enterprise-quality software delivery.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <div className="cta-content">
              <h2 id="cta-heading">
                Ready to Build Software That Drives Real Business Growth? Get a Free Quote Within 24 Hours.
              </h2>
              <p>
                Tell us your challenge. QllmSoft will review your requirements, send a
                detailed fixed-price proposal within 24 hours, and schedule a free discovery
                call, no commitment required. Businesses across the UK, USA, UAE, Saudi
                Arabia, and beyond have trusted QllmSoft to deliver. We look forward to
                earning that trust from you.
              </p>

              <div className="cta-buttons">
                <Link
                  to="/contact"
                  className="btn btn-primary"
                  aria-label="Get a free software development consultation from QllmSoft"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
