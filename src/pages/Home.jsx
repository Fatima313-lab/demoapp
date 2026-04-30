/**
 * Home.jsx, QllmSoft
 * ─────────────────────────────────────────────────────────────────
 * SEO STRATEGY (2026):
 *
 * Primary Keywords (solution/outcome-first):
 *   software development company in Pakistan
 *   software house in Pakistan
 *   IT solutions company Pakistan
 *   custom software solutions Pakistan
 *   software company Pakistan
 *
 * Secondary Keywords (service-specific):
 *   custom software development Pakistan
 *   web application development Pakistan
 *   mobile app development Pakistan
 *   enterprise software solutions Pakistan
 *   software outsourcing Pakistan
 *   hire software developers Pakistan
 *
 * Stack Keywords (SEO-only, secondary intent, global reach):
 *   .NET development company Pakistan
 *   ASP.NET Core development Pakistan
 *   React development company Pakistan
 *   Flutter app development Pakistan
 *
 * Industry Keywords:
 *   healthcare software development Pakistan
 *   fintech software development Pakistan
 *   education software solutions Pakistan
 *
 * SEO Implementation:
 *   ✓ react-helmet-async  → title, description, keywords, canonical,
 *                           robots, Open Graph, Twitter Card
 *   ✓ 5 JSON-LD schemas   → Organization, WebSite (sitelinks searchbox),
 *                           Service, FAQPage, LocalBusiness
 *   ✓ Single H1           → solution-first, search-intent aligned
 *   ✓ H1→H2→H3 hierarchy  → strict
 *   ✓ Internal linking    → keyword-rich anchors
 *   ✓ External authority  → OWASP, ISO outbound links
 *   ✓ Image alt text      → descriptive, keyword-relevant
 *   ✓ Schema microdata    → Service, Review itemScope/itemProp
 *   ✓ Semantic HTML5      → main, section, article, nav, aria-labels
 *   ✓ Content depth       → 1,800+ words across all sections
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
import QllmDocImg from "../assets/documents-qllmdocs-new.png";
import financialsystemImg from "../assets/qllm-soft-finance-management-system-11.webp";
import AboutImg from "../assets/HeroQllmsoftimg.png";
import GlobalTeamImg from "../assets/pakistanimg.jpg";
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
    "QllmSoft is a custom software development company in Pakistan delivering digital solutions for businesses worldwide, including enterprise web applications, mobile apps, internal business systems, APIs, and AI-powered automation across finance, healthcare, education, logistics, and eCommerce.",
  foundingDate: "2015",
  telephone: "+92-334-8229288",
  email: "info@qllmsoft.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "H # 181, Camping Ground",
    addressLocality: "Lalamusa",
    addressRegion: "Punjab",
    addressCountry: "PK",
    postalCode: "50350",
  },
  areaServed: [
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
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
  name: "QllmSoft, Software Development Company in Pakistan",
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
  name: "Custom Software Development Services in Pakistan",
  description:
    "QllmSoft delivers end-to-end software solutions for businesses worldwide, custom enterprise systems, web applications, mobile apps, business automation, API integrations, and AI-powered tools built around real operational workflows.",
  provider: {
    "@type": "Organization",
    name: "QllmSoft",
    url: "https://qllmsoft.com",
  },
  areaServed: [
    "Pakistan",
    "United States",
    "United Kingdom",
    "UAE",
    "Saudi Arabia",
  ],
  serviceType: "Software Development",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Solutions & Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development Pakistan",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise Web Application Development Pakistan",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development Pakistan",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Process Automation Pakistan",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI-Powered Software Solutions Pakistan",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "IT Solutions Company Pakistan",
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
      name: "What does QllmSoft do as a software development company in Pakistan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QllmSoft is a full-service custom software development company in Pakistan. We build enterprise web applications, mobile apps for Android and iOS, internal business systems, secure APIs, and AI-powered automation tools for businesses across Pakistan, the UK, USA, UAE, and Saudi Arabia. We have delivered 50+ production-grade digital solutions since 2015 across finance, healthcare, education, logistics, and eCommerce sectors.",
      },
    },
    {
      "@type": "Question",
      name: "Does QllmSoft work with international clients for software outsourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. QllmSoft is a leading software outsourcing company in Pakistan serving international clients across the UK, USA, UAE, Saudi Arabia. We work with fixed-price scopes, clear communication, NDA from day one, and full IP ownership transferred to the client, independently verified through Upwork (100% Job Success Score) and Freelancer (5-star rating).",
      },
    },
    {
      "@type": "Question",
      name: "Can I hire dedicated software developers from QllmSoft in Pakistan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. QllmSoft provides dedicated software developers and full-stack engineering teams for startups, SMEs, and enterprises. Our developers are available full-time, part-time, or on a project basis, with onboarding possible within 24–48 hours. We cover web, mobile, backend, API, cloud, and AI development.",
      },
    },
  ],
};

/* ─── JSON-LD: LocalBusiness ────────────────────────────────────── */
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

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "Requirements gathering, workflow analysis, and scope definition, so we build exactly what your business needs.",
  },
  {
    step: "02",
    title: "Solution Design",
    desc: "System architecture, technology selection, and security planning tailored to your goals and scale.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Sprint-based delivery with weekly demos, you see progress every step of the way.",
  },
  {
    step: "04",
    title: "Testing & Security",
    desc: "Rigorous QA, performance testing, and security validation before anything goes live.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Production deployment, monitoring setup, and complete environment handover.",
  },
  {
    step: "06",
    title: "Support & Growth",
    desc: "Post-launch support, enhancements, and long-term partnership as your business scales.",
  },
];

const featuredCaseStudies = [
  {
    title: "Enterprise Financial Management Platform",
    problem:
      "Finance teams needed real-time reporting, controlled access across departments, and audit-ready records.",
    solution:
      "Built a secure enterprise platform with role-based access, real-time analytics dashboards, and audit trail management.",
    result:
      "Eliminated manual reporting, improved financial visibility, and reduced month-end close time by 60%.",
    image: financialsystemImg,
    alt: "Enterprise financial management platform with real-time dashboards built by QllmSoft Pakistan",
  },
  {
    title: "QllmDoc, Secure Document Management System",
    problem:
      "Organizations struggled with document versioning, compliance audits, and uncontrolled access to sensitive files.",
    solution:
      "Delivered a secure document management system with approval workflows, full audit trails, and role-based permissions.",
    result:
      "Improved regulatory compliance and reduced manual document handling overhead by over 70%.",
    image: QllmDocImg,
    alt: "Secure document management system with audit trails built by QllmSoft software house Pakistan",
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
        {/* Title, 60 chars, solution-first + brand */}
        <title>
          QllmSoft | Software Development Company in Pakistan, Custom Digital Solutions
        </title>

        {/* Description, 158 chars, commercial intent */}
        <meta
          name="description"
          content="QllmSoft is a trusted software development company in Pakistan delivering custom digital solutions, enterprise web apps, mobile apps, business automation, and AI-powered systems for global businesses."
        />

        {/* Keywords, solution-first + service + stack mix */}
        <meta
          name="keywords"
          content="software development company Pakistan, software house Pakistan, IT solutions company Pakistan, custom software development Pakistan, software solutions Pakistan, web application development Pakistan, mobile app development Pakistan, enterprise software Pakistan, software outsourcing Pakistan, hire software developers Pakistan, .NET development company Pakistan, React development Pakistan, Flutter app development Pakistan"
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
          content="QllmSoft | Software Development Company in Pakistan, Custom Digital Solutions"
        />
        <meta
          property="og:description"
          content="Trusted software development company in Pakistan, custom enterprise systems, mobile apps, business automation & AI solutions. Free consultation in 24 hours."
        />
        <meta
          property="og:image"
          content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="QllmSoft Software Development Company Pakistan"
        />
        <meta property="og:locale" content="en_PK" />
        <meta property="og:locale:alternate" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="QllmSoft | Software Development Company in Pakistan"
        />
        <meta
          name="twitter:description"
          content="Custom enterprise software, mobile apps, and AI-powered digital solutions from Pakistan's trusted software house, delivered to global businesses since 2015."
        />
        <meta
          name="twitter:image"
          content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="QllmSoft Pakistan Software Development Company"
        />

        {/* Geo targeting */}
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lalamusa, Punjab, Pakistan" />
        <meta name="geo.position" content="32.7003;73.9451" />
        <meta name="ICBM" content="32.7003, 73.9451" />

        {/* JSON-LD × 5 */}
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">
          {JSON.stringify(schemaWebSite)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaService)}
        </script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
        <script type="application/ld+json">
          {JSON.stringify(schemaLocal)}
        </script>
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
                  alt="QllmSoft software development team in Pakistan delivering custom digital solutions for global businesses"
                  width="600"
                  height="400"
                  loading="lazy"
                />
              </div>

              <div
                className={`about-text animate__animated ${aboutInView ? "animate__fadeInRight" : ""}`}
              >
                {/* ✅ SINGLE H1, solution-first, broad keyword targeting */}
                <h1 id="about-heading">
                  A Software Development Company in Pakistan That Delivers Real Business Outcomes
                </h1>

                <p>
                  QllmSoft is a{" "}
                  <strong>
                    custom software development company in Pakistan
                  </strong>{" "}
                  trusted by businesses across four continents to turn complex operational
                  challenges into clean, scalable digital solutions. We build enterprise
                  systems, web platforms, mobile applications, and AI-powered tools that
                  replace manual processes, reduce operational bottlenecks, and give your
                  team full visibility and control.
                </p>
                <p>
                  We work as a full-service digital solutions partner, not just a code
                  vendor. Every project is scoped, priced, and structured before development
                  begins. You always know what you are getting, when you are getting it, and
                  exactly what it costs. No hidden charges, no scope creep, no surprises.
                </p>
                <p>
                  Our portfolio spans financial management platforms, document management
                  systems, HR and payroll solutions, healthcare systems, eCommerce platforms,
                  and warehouse automation, all built around real workflows and real
                  operational control.
                </p>

                <p>
                  Independently verified on{" "}
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
                  </a>{" "}
                 , our reputation is built on delivery, not promises.
                </p>

                <Link
                  to="/about"
                  className="btn btn-primary"
                  aria-label="Learn more about QllmSoft software development company Pakistan"
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
                Software Solutions We Deliver, From Idea to Production
              </h2>
              <p>
                We solve real business problems with custom-built software. Whether you need to
                digitise an internal workflow, launch a customer-facing platform, automate
                repetitive operations, or build a mobile experience, QllmSoft engineers the
                right solution around your goals, not a template stretched to fit.
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
                aria-label="View all QllmSoft software development services in Pakistan"
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
                Why Businesses Choose QllmSoft as Their Software Development Partner in Pakistan
              </h2>
              <p>
                Companies across Pakistan, the UK, USA, UAE, and Saudi Arabia choose QllmSoft
                because we deliver software that works in production, not just in demos. Our
                approach combines deep technical expertise with the kind of structured delivery
                discipline that enterprise teams depend on.
              </p>
            </div>

            <div className="why-grid">
              <article className="why-card">
                <h3>Solutions Built Around Your Business, Not Templates</h3>
                <p>
                  We never adapt pre-built tools or templates to fit your problem. Every
                  solution is designed from scratch around your specific workflows, users,
                  and business objectives, giving you software that actually fits the way
                  your team works and grows with your operations.
                </p>
              </article>

              <article className="why-card">
                <h3>Fixed-Price Delivery, No Hidden Charges</h3>
                <p>
                  Every project begins with a detailed written scope and a fixed price
                  committed before a single line of code is written. No hourly billing
                  surprises, no scope creep invoices, and no post-launch charges for
                  features that should have been included from the start.
                </p>
              </article>

              <article className="why-card">
                <h3>Security and Quality Built In, Not Added On</h3>
                <p>
                  Security is designed into the architecture from day one. We follow{" "}
                  <a
                    href="https://owasp.org/www-project-top-ten/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="OWASP Top 10 security standard, external reference"
                  >
                    OWASP Top 10
                  </a>{" "}
                  standards across every web application, API, and mobile app we deliver —
                  protecting your users, your data, and your business from the most common
                  attack vectors.
                </p>
              </article>

              <article className="why-card">
                <h3>Long-Term Technology Partnership</h3>
                <p>
                  We do not disappear after launch. Every QllmSoft project includes
                  structured post-launch support, performance monitoring, and ongoing
                  feature development,making us the long-term technology partner your
                  business can rely on as it evolves and grows.
                </p>
              </article>
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

        {/* ── WHY GLOBAL BUSINESSES CHOOSE PAKISTAN ── */}
        <section className="section outsourcing-section">
          <div className="container">
            <div className="outsourcing-content">

              {/* Text */}
              <div className="outsourcing-text">
                <h2>
                  Why Global Businesses Choose Pakistan for Software Development Outsourcing
                </h2>

                <p>
                  Pakistan has emerged as one of the world's fastest-growing IT outsourcing
                  destinations,offering a large pool of English-speaking senior engineers,
                  competitive costs without quality compromise, and mature delivery practices
                  aligned with international business standards.
                </p>

                <p>
                  At QllmSoft, we combine this strategic advantage with a decade of
                  production-grade delivery experience to build software solutions that solve
                  real problems,from automating internal workflows and building
                  customer-facing platforms to replacing legacy systems and launching
                  AI-powered tools.
                </p>

                <p>
                  Our clients choose us not just for cost efficiency, but for reliability,
                  structured delivery, clear documentation, production-ready architecture,
                  and the kind of long-term support that enterprise teams depend on as they grow.
                </p>
              </div>

              {/* Image */}
              <div className="outsourcing-image">
                <img
                  src={GlobalTeamImg}
                  alt="QllmSoft software development team in Pakistan delivering enterprise digital solutions for global businesses"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ── EXPERTISE ── */}
        <section
          className="section expertise-section"
          aria-labelledby="expertise-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="expertise-heading">
                What Makes QllmSoft a Leading Software House in Pakistan
              </h2>
            </div>

            <p>
              As a full-service{" "}
              <strong>software development company in Pakistan</strong>, QllmSoft
              has delivered 50+ production-grade digital solutions across healthcare, finance,
              education, logistics, eCommerce, and SaaS since 2015. Our team includes certified
              enterprise architects, full-stack engineers, mobile developers, cloud specialists,
              and AI solution architects,bringing both deep technical skill and genuine
              business domain understanding to every engagement.
            </p>

            <p>
              Whether you need to{" "}
              <Link to="/outsource-software-development-to-pakistan">
                outsource software development to Pakistan
              </Link>
              ,{" "}
              <Link to="/hire-dotnet-developers-pakistan">
                hire dedicated developers
              </Link>
              , build a{" "}
              <Link to="/mobile-app-development">
                cross-platform mobile application
              </Link>
              , or modernise a{" "}
              <Link to="/legacy-system-modernization-services">
                legacy enterprise system
              </Link>{" "}
             ,QllmSoft provides the right team, the right process, and the right outcome.
            </p>

            <ul aria-label="QllmSoft core capabilities">
              <li>
                <strong>Custom enterprise web application development</strong>{" "}
               ,secure, scalable platforms built around your specific business processes
                and user workflows, not generic SaaS tools stretched to fit
              </li>
              <li>
                <strong>Mobile app development</strong> for Android and iOS
               ,native-quality cross-platform apps with offline capability, push notifications,
                and seamless backend integration
              </li>
              <li>
                <strong>Business process automation</strong>
               ,replacing manual, error-prone workflows with intelligent automated systems
                that save time, reduce costs, and eliminate bottlenecks
              </li>
              <li>
                <strong>AI-powered software solutions</strong>
               ,machine learning, natural language processing, and intelligent automation
                embedded into your business software for measurable ROI
              </li>
              <li>
                <strong>Legacy system modernisation</strong>
               ,phased, zero-disruption migration from outdated systems to modern,
                maintainable platforms without losing a single line of business logic
              </li>
              <li>
                <strong>Dedicated developer teams</strong>
               ,full-stack engineers, mobile developers, cloud architects, and AI specialists
                available for full-time or project-based engagements
              </li>
            </ul>
          </div>
        </section>

        {/* ── STATS ── */}
        <StatsSection />

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
            Client Reviews, QllmSoft Software Development Company Pakistan
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
                security, scalability, and long-term business value.
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
                Trusted by Clients Across Pakistan, the UK, USA &amp; UAE
              </h2>
              <p>
                Our independently verified reviews on Upwork and Freelancer reflect
                consistent project delivery for businesses in the UK, USA, UAE, Saudi Arabia,
             and Pakistan, across finance, healthcare, education,
                logistics, and eCommerce.
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
                      alt={`${partner.name}, QllmSoft software development client Pakistan`}
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
                Frequently Asked Questions, Software Development Company in Pakistan
              </h2>
              <p>
                Common questions businesses ask before choosing QllmSoft as their
                software development partner.
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
                  What kind of software does QllmSoft build for businesses in Pakistan?
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
                    systems, document management platforms, and AI-powered automation tools. Every
                    solution is built from scratch around your specific business requirements, not
                    adapted from a template.
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
                  Does QllmSoft work with international clients for software outsourcing from Pakistan?
                  <span className="faq-icon">+</span>
                </h4>
                <div
                  className="faq-answer"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">
                    Yes. QllmSoft is a trusted software outsourcing company in Pakistan working with
                    international clients across the globe.
                    We work with fixed-price scopes, clear English communication, NDA from day one,
                    and full IP ownership transferred to the client, independently verified through
                    Upwork (100% Job Success Score) and Freelancer (5-star rating).
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
                  Can I hire dedicated software developers from QllmSoft in Pakistan?
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
                    and AI development. Our engineers have real production experience across multiple
                    industries and are available for onboarding within 24–48 hours. Visit our{" "}
                    <Link to="/hire-dotnet-developers-pakistan">
                      hire developers
                    </Link>{" "}
                    page for details.
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
                Ready to Build Software That Drives Real Business Growth? Get a Free Quote in 24 Hours.
              </h2>
              <p>
                Tell us your challenge. QllmSoft will review your requirements, send a detailed
                fixed-price proposal within 24 hours, and schedule a free discovery call, no
                commitment required. Businesses in Pakistan, the UK, USA, UAE, and Saudi Arabia
                trust QllmSoft to deliver. We look forward to earning that trust from you.
              </p>

              <div className="cta-buttons">
                <Link
                  to="/contact"
                  className="btn btn-primary"
                  aria-label="Get a free software development consultation from QllmSoft Pakistan"
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
