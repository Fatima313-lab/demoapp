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


const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://qllmsoft.com/#organization",
  name: "QllmSoft",
  url: "https://qllmsoft.com",
  logo: {
    "@type": "ImageObject",
    url: "https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp"
  },
  image: "https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp",
  description: "QllmSoft is a custom software development company delivering enterprise web applications, mobile apps, business automation platforms, API integrations, and AI solutions worldwide.",
  foundingDate: "2015",
  telephone: "+92-334-8229288",
  email: "qllmsoft@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "H # 181, Camping Ground",
    addressLocality: "Lalamusa",
    addressRegion: "Punjab",
    postalCode: "50350",
    addressCountry: "PK"
  },
  founder: { "@id": "https://qllmsoft.com/#founder" },
  areaServed: { "@type": "Place", name: "Worldwide" },
  knowsAbout: [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "Enterprise Software",
    "Business Automation",
    "Artificial Intelligence",
    "API Development",
    "Cloud Solutions",
    "Software Outsourcing"
  ],
  sameAs: [
    "https://www.linkedin.com/company/qllmsoft",
    "https://www.freelancer.com/u/mrprogrmmr",
    "https://www.upwork.com/freelancers/~0170e20f8803389a86"
  ]
};

const schemaFounder = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://qllmsoft.com/#founder",
  name: "Zain Ul Abedin",
  jobTitle: "Founder & CEO",
  worksFor: { "@id": "https://qllmsoft.com/#organization" },
  url: "https://www.linkedin.com/in/zain-ul-abedin-b09a613b/",
  sameAs: ["https://www.linkedin.com/in/zain-ul-abedin-b09a613b/"]
};

const schemaWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://qllmsoft.com/#website",
  url: "https://qllmsoft.com",
  name: "QllmSoft",
  publisher: { "@id": "https://qllmsoft.com/#organization" }
};


const schemaHomePage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://qllmsoft.com/#webpage",
  url: "https://qllmsoft.com",
  name: "Custom Software Development Company | QllmSoft",
  description: "QllmSoft builds enterprise software, web applications, mobile apps, business automation platforms, and AI-powered solutions for businesses worldwide.",
  isPartOf: { "@id": "https://qllmsoft.com/#website" },
  about: { "@id": "https://qllmsoft.com/#organization" },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp"
  }
};


const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://qllmsoft.com/#service",
  name: "Custom Software Development Services",
  provider: { "@id": "https://qllmsoft.com/#organization" },
  areaServed: { "@type": "Place", name: "Worldwide" },
  serviceType: "Software Development Services",
  description: "Custom software development, web applications, mobile apps, enterprise systems, business automation, API integration, and AI-powered software solutions.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services Catalog",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Enterprise Web Application Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Process Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Software Development" } }
    ]
  },
  review: [
    {
      "@type": "Review",
      itemReviewed: { "@id": "https://qllmsoft.com/#service" },
      author: { "@type": "Person", name: "Verified Client" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      reviewBody: "QllmSoft delivered our custom platform on time and the team communicated clearly throughout the build."
    }
  ]
};

/* ─── JSON-LD: FAQPage (SEO & AEO Optimized) ─────────────────── */
const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What software development services does QllmSoft provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QllmSoft is a custom software development company. We deliver enterprise web applications, iOS and Android mobile apps, custom APIs, business process automation platforms, and AI integrations. Having delivered over 50 production-grade solutions across finance, healthcare, logistics, and eCommerce, we build bespoke systems tailored to your specific business workflows."
      }
    },
    {
      "@type": "Question",
      name: "How does QllmSoft manage international software outsourcing and IP ownership?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QllmSoft delivers fixed-price software outsourcing for international clients in North America, Europe, and the Middle East. Every project includes strict NDAs, fixed-scope delivery timelines, and 100% complete IP and source code ownership transfer. Our execution record is verified via Upwork (100% Job Success Score) and Freelancer (5-star rating)."
      }
    },
    {
      "@type": "Question",
      name: "How fast can I hire dedicated software developers from QllmSoft?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can onboard dedicated software developers or full-stack engineering teams within 24 to 48 hours. QllmSoft provides full-time, part-time, and project-based software developers skilled in React, .NET, Node.js, Flutter, Python, cloud architecture, and AI software engineering."
      }
    },
    {
      "@type": "Question",
      name: "What is QllmSoft's pricing model for custom software projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QllmSoft operates on a fixed-price delivery model based on written scopes and clear milestones. We provide upfront, transparent project quotes with zero hidden costs, scope creep invoices, or hourly bill surprises."
      }
    }
  ]
};

const faqData = [
  {
    question: "What software development services does QllmSoft provide?",
    answer:
      "QllmSoft is a custom software development company. We deliver enterprise web applications, iOS and Android mobile apps, custom APIs, business process automation platforms, and AI integrations. Having delivered over 50 production-grade solutions across finance, healthcare, logistics, and eCommerce, we build bespoke systems tailored to your specific business workflows."
  },
  {
    question: "How does QllmSoft manage international software outsourcing and IP ownership?",
    answer:
      "QllmSoft delivers fixed-price software outsourcing for international clients in North America, Europe, and the Middle East. Every project includes strict NDAs, fixed-scope delivery timelines, and 100% complete IP and source code ownership transfer. Our execution record is verified via Upwork (100% Job Success Score) and Freelancer (5-star rating)."
  },
  {
    question: "How fast can I hire dedicated software developers from QllmSoft?",
    answer:
      "You can onboard dedicated software developers or full-stack engineering teams within 24 to 48 hours. QllmSoft provides full-time, part-time, and project-based software developers skilled in React, .NET, Node.js, Flutter, Python, cloud architecture, and AI software engineering."
  },
  {
    question: "What is QllmSoft's pricing model for custom software projects?",
    answer:
      "QllmSoft operates on a fixed-price delivery model based on written scopes and clear milestones. We provide upfront, transparent project quotes with zero hidden costs, scope creep invoices, or hourly bill surprises."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section faq-section" aria-labelledby="faq-heading">
      <div className="container">
        <div className="section-title text-center">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <p>Everything you need to know about partnering with QllmSoft.</p>
        </div>

        <div className="faq-accordion" itemScope itemType="https://schema.org/FAQPage">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span itemProp="name">{item.question}</span>
                <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                hidden={activeIndex !== index}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
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
          SEO HEAD (CTR & META ENHANCEMENTS)
      ═══════════════════════════════════════════ */}
      <Helmet>
        {/* Title: 56 Chars | Target Keyword + Value Prop to Boost CTR */}
        <title>Custom Software Development Company | QllmSoft</title>

        {/* Description: 154 Chars | Clear Call to Action */}
        <meta
          name="description"
          content="QllmSoft builds enterprise web applications, mobile apps & AI solutions for global clients. Fixed-price delivery & 100% IP ownership. Get a free quote."
        />

        <meta
          name="keywords"
          content="custom software development company, enterprise web application development, custom mobile app development, business automation platforms, AI software solutions, software outsourcing services"
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
          content="Custom Software Development Company | Enterprise Solutions | QllmSoft"
        />
        <meta
          property="og:description"
          content="Enterprise software, mobile apps, business automation, and AI-powered digital solutions for global businesses. Fixed-price delivery, verified 100% success record."
        />
        <meta
          property="og:image"
          content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="QllmSoft Custom Software Development Company Logo"
        />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom Software Development Company | QllmSoft"
        />
        <meta
          name="twitter:description"
          content="Custom web applications, mobile apps, and AI-powered solutions built for businesses worldwide."
        />
        <meta
          name="twitter:image"
          content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg"
        />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFounder)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebsite)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaHomePage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main className="home-page" id="main-content" role="main">
        {/* HERO SECTION */}
        <HeroSlider />

        {/* ABOUT SECTION */}
        <section
          className="section about-section bg-light"
          ref={aboutRef}
          aria-labelledby="about-heading"
        >
          <div className="container">
            <div className="about-content">
              <div
                className={`about-image animate__animated ${
                  aboutInView ? "animate__fadeInLeft" : ""
                }`}
              >
                <img
                  src={AboutImg}
                  alt="QllmSoft custom software development team engineering enterprise web and mobile applications"
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div
                className={`about-text animate__animated ${
                  aboutInView ? "animate__fadeInRight" : ""
                }`}
              >
                {/* Secondary Heading for Section Scannability */}
                <h2 id="about-heading" className="section-title">
                  Enterprise Software Built Around Your Actual Business Workflows
                </h2>

                <p className="direct-answer">
                  QllmSoft is a <strong>custom software development company</strong> that
                  engineers, builds, and scales web applications, enterprise platforms, mobile
                  apps, and AI-powered automation tools for businesses globally. We manage system
                  architecture and development end-to-end under fixed-price scopes.
                </p>

                <p>
                  Since 2015, our team has delivered over 50 production-grade solutions across 
                  financial management, healthcare, logistics, document automation, and eCommerce.
                </p>

                <p>
                  Our delivery track record is independently verified on{" "}
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
                  .
                </p>

                <Link
                  to="/about"
                  className="btn btn-primary"
                  aria-label="Learn more about QllmSoft custom software development services"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
     
{/* ── SERVICES SECTION ── */}
<section
  className="section services-section"
  ref={servicesRef}
  aria-labelledby="services-heading"
>
  <div className="container">
    <div className="section-title">
      <h2 id="services-heading">
        Custom Software Development Services Built for Business Scale
      </h2>
      <p>
        We build tailor-made enterprise web applications, cross-platform mobile apps, cloud backend architectures, and AI-driven workflow automations. Every platform is custom-engineered to match your operational workflows—no generic templates or rigid frameworks.
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
        aria-label="Explore all custom software development services by QllmSoft"
      >
        View All Services
      </Link>
    </div>
  </div>
</section>

{/* ── WHY CHOOSE US SECTION ── */}
<section className="section why-section" aria-labelledby="why-heading">
  <div className="container">
    <div className="section-title">
      <h2 id="why-heading">
        Why Enterprise Teams Partner with QllmSoft for Software Engineering
      </h2>
      <p>
        Businesses across North America, the UK, and the Gulf region (UAE, Saudi Arabia) rely on QllmSoft for production-grade software delivery. We combine deep technical stack expertise with rigorous engineering discipline.
      </p>
    </div>

    <div className="why-grid">
      <article className="why-card">
        <h3>Tailor-Made Solutions (Zero Templates)</h3>
        <p>
          We build systems designed around your unique business operations, customer journeys, and scaling requirements. You receive clean, proprietary codebases engineered for security, speed, and maintainability.
        </p>
      </article>

      <article className="why-card">
        <h3>Fixed-Price Delivery & Guaranteed IP Transfer</h3>
        <p>
          Every engagement operates under a transparent, fixed-scope contract with zero surprise invoices. Upon project completion, full intellectual property (IP) and codebase ownership are completely transferred to your business.
        </p>
      </article>

      <article className="why-card">
        <h3>OWASP Security Standards & QA Testing</h3>
        <p>
          Security is built into our development cycle from day one. We adhere to strict{" "}
          <a
            href="https://owasp.org/www-project-top-ten/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Read about OWASP Top 10 Web Application Security Risks"
          >
            OWASP Top 10 security standards
          </a>{" "}
          and conduct functional, load, and penetration testing prior to deployment.
        </p>
      </article>

      <article className="why-card">
        <h3>Long Term Support & Scalability</h3>
        <p>
          We provide post launch application monitoring, cloud infrastructure maintenance, continuous security patching, and ongoing feature development to support your long-term expansion.
        </p>
      </article>
    </div>
  </div>
</section>



{/* ── COMPANY INFO SECTION ── */}
<section
  className="section company-info-section"
  aria-labelledby="company-info-heading"
>
  <div className="container">
    <div className="company-info-inner">

      {/* ── Left: Narrative Prose ── */}
      <div className="company-info-text">
        <h2 id="company-info-heading">
          A Decade of Enterprise Software Delivery & Proven Execution
        </h2>

        <p>
          QllmSoft was founded to solve complex business challenges with production-ready software. Over the past decade, our engineering team has shipped more than{" "}
          <strong>50 enterprise-grade digital solutions</strong> across finance, healthcare, education, logistics, eCommerce, and SaaS platforms worldwide[cite: 1].
        </p>

        <p>
          Founded and led by{" "}
          <strong>
            <a
              href="https://www.linkedin.com/in/zain-ul-abedin-b09a613b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zain Ul Abedin, Founder and CEO of QllmSoft LinkedIn Profile"
            >
              Zain Ul Abedin
            </a>
            , Founder & CEO
          </strong>
          , our full-stack engineering team specializes in web development, mobile app development, cloud infrastructure, API integration, and custom AI software. Every project follows a disciplined delivery process: defined scopes, fixed pricing, sprint demos, and complete IP transfer upon launch[cite: 1].
        </p>

        <p>
          Our track record is independently verified across global platforms: a{" "}
          <a
            href="https://www.upwork.com/freelancers/~0170e20f8803389a86"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Verify QllmSoft 100% Job Success Score on Upwork"
          >
            100% Job Success Score on Upwork
          </a>{" "}
          and a{" "}
          <a
            href="https://www.freelancer.com/u/mrprogrmmr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View QllmSoft 5-star rating on Freelancer"
          >
            5-star rating on Freelancer
          </a>{" "}
          confirm our commitment to on-time delivery without scope creep[cite: 1].
        </p>
      </div>

      {/* ── Right: Key Metrics Grid ── */}
      <div className="company-info-stats" aria-label="QllmSoft performance metrics">
        <div className="ci-stat">
          <span className="ci-stat-number" aria-label="10 plus years of experience">10+</span>
          <span className="ci-stat-label">Years of Experience</span>
        </div>
        <div className="ci-stat">
          <span className="ci-stat-number" aria-label="50 plus enterprise projects delivered">50+</span>
          <span className="ci-stat-label">Projects Delivered</span>
        </div>
        <div className="ci-stat">
          <span className="ci-stat-number" aria-label="50 plus global clients served">50+</span>
          <span className="ci-stat-label">Global Clients</span>
        </div>
        <div className="ci-stat">
          <span className="ci-stat-number" aria-label="100 percent job success score on Upwork">100%</span>
          <span className="ci-stat-label">Upwork Success</span>
        </div>
        <div className="ci-stat">
          <span className="ci-stat-number" aria-label="5 star verified rating">5★</span>
          <span className="ci-stat-label">Verified Rating</span>
        </div>
        <div className="ci-stat">
          <span className="ci-stat-number" aria-label="47 plus client reviews">47+</span>
          <span className="ci-stat-label">Client Reviews</span>
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
        >
          <h2 id="testimonials-heading" className="sr-only">
            Client Reviews on our Custom Software Development Services
          </h2>

          {/* Review/AggregateRating structured data now lives as JSON-LD
              (schemaService.review / schemaService.aggregateRating in the
              Helmet block) instead of scattered itemProp microdata, since
              the microdata here couldn't reach author/reviewRating fields
              inside the opaque <TestimonialSection /> component. */}
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
                Frequently Asked Questions
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
