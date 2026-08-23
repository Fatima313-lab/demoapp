/**
 * About.jsx, QllmSoft
 * ─────────────────────────────────────────────────────────────────
 * SEO STRATEGY (2026):
 *
 * Positioning: Global software development partner.
 * Pakistan is referenced as the company's origin and delivery base
 * (for E-E-A-T, trust, and legitimate long-tail search demand), but
 * the page's primary identity, headings, and CTAs are written for a
 * worldwide audience — not a "local agency" framing.
 *
 * Primary Keywords:
 *   software development company
 *   custom software development company
 *   enterprise software development partner
 *   software development partner for startups
 *
 * Secondary / Long-tail Keywords:
 *   software development company Pakistan
 *   outsource software development to Pakistan
 *   about QllmSoft
 *   QllmSoft reviews
 *
 * E-E-A-T Signals:
 *   ✓ Founder profile with LinkedIn
 *   ✓ Founded date and history
 *   ✓ Verified review platforms (Upwork, Freelancer)
 *   ✓ Specific project counts and client countries
 *   ✓ Industry sectors served
 *   ✓ Team capabilities listed concretely
 *
 * SEO:
 *   ✓ react-helmet-async → full meta tags, OG, Twitter
 *   ✓ JSON-LD → Organization + AboutPage + BreadcrumbList
 *   ✓ Single H1 → keyword-rich, identity-affirming, globally framed
 *   ✓ H1→H2→H3 hierarchy → strict
 *   ✓ Internal links → all key service pages
 *   ✓ External links → Upwork, Freelancer, LinkedIn
 *   ✓ Semantic HTML5 → main, section, article, aria-labels
 *   ✓ DESIGN UNCHANGED → all existing CSS classes preserved
 */

import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ceoImg from "../assets/ceo-qllmsoft.webp";
import LeadMagnetBanner from "../components/LeadMagnetBanner";
import {
  Eye,
  Target,
  Users,
  Zap,
  Shield,
  Check,
  Headphones,
  Linkedin,
} from "lucide-react";

import { aboutContent } from "../data/mock";
import "./About.css";

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
    "QllmSoft is a software development company that has been designing and building digital products for businesses worldwide since 2015. Our team works with startups and enterprises across North America, Europe, and the Middle East on web applications, mobile apps, business automation, and AI-powered software.",
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
    { "@type": "Place", name: "Worldwide" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Pakistan" },
  ],
  sameAs: [
    "https://www.freelancer.com/u/mrprogrmmr",
    "https://www.upwork.com/freelancers/~0170e20f8803389a86",
    "https://www.linkedin.com/company/qllmsoft",
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
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
};

/* ─── JSON-LD: AboutPage ────────────────────────────────────────── */
const schemaAboutPage = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://qllmsoft.com/about#webpage",
  url: "https://qllmsoft.com/about",
  name: "About QllmSoft, a Software Development Company Serving Clients Worldwide",
  description:
    "Learn about QllmSoft, a software development company that has delivered 50+ projects for clients across North America, Europe, and the Middle East since 2015. 100% Upwork Job Success Score, 100% on-time delivery.",
  isPartOf: { "@id": "https://qllmsoft.com/#website" },
  about: { "@id": "https://qllmsoft.com/#organization" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://qllmsoft.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://qllmsoft.com/about",
      },
    ],
  },
};

/* ─── Feature Card (unchanged design) ──────────────────────────── */
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card reveal">
    <div className="feature-icon">
      <Icon size={24} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

/* ═══════════════════════════════════════════════════════════
   ABOUT PAGE
═══════════════════════════════════════════════════════════ */
const About = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 },
    );

    reveals.forEach((el) => observer.observe(el));

    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      <Helmet>
        {/* Title, identity + brand, globally framed */}
        <title>
          About QllmSoft | Software Development Company Serving Clients Worldwide
        </title>

        {/* Description, E-E-A-T + commercial intent, global framing */}
        <meta
          name="description"
          content="QllmSoft has been building custom software for businesses worldwide since 2015. 50+ projects, clients across North America, Europe, and the Middle East, 100% Upwork Job Success Score."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="software development company, custom software development company, enterprise software development partner, software development agency, outsource software development, about QllmSoft, software development company Pakistan"
        />

        <meta name="author" content="QllmSoft" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href="https://qllmsoft.com/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qllmsoft.com/about" />
        <meta property="og:site_name" content="QllmSoft" />
        <meta
          property="og:title"
          content="About QllmSoft | Software Development Company Serving Clients Worldwide"
        />
        <meta
          property="og:description"
          content="10+ years building software for businesses worldwide. 50+ projects delivered, 100% Upwork Job Success Score. Custom web apps, mobile apps, and AI-powered solutions."
        />
        <meta
          property="og:image"
          content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="QllmSoft Software Development Company, About Us"
        />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About QllmSoft | Software Development Company"
        />
        <meta
          name="twitter:description"
          content="Custom software development for businesses worldwide since 2015. 50+ projects delivered for clients across North America, Europe, and the Middle East."
        />
        <meta
          name="twitter:image"
          content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg"
        />

        {/* Geo (legitimate business address, kept for trust signals) */}
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lalamusa, Punjab, Pakistan" />
        <meta name="geo.position" content="32.7003;73.9451" />
        <meta name="ICBM" content="32.7003, 73.9451" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">
          {JSON.stringify(schemaAboutPage)}
        </script>
      </Helmet>

      <main className="about-page">
        {/* ── HERO ── */}
        <section className="about-hero reveal" aria-labelledby="about-hero-h1">
          <div className="container">
            {/* ✅ SINGLE H1, identity keyword, globally framed */}
            <h1 id="about-hero-h1" style={{ color: "white" }}>
              A Software Development Company Building Real Products for
              Businesses Worldwide Since 2015
            </h1>
            <p style={{ color: "white" }}>
              10+ years. 50+ projects shipped for clients across North
              America, Europe, and the Middle East.
            </p>
            <a href="#company" className="btn btn-primary">
              Discover More
            </a>
          </div>
        </section>
<section
  id="company"
  className="section company-story reveal"
  aria-labelledby="company-heading"
>
  <div className="container" >
    <div className="section-title" >
      <h2 id="company-heading"  >
        About QllmSoft, a Software Development Partner for Growing Businesses
      </h2>
    </div>

    <div className="story-card">
      <p>
        QllmSoft started in 2015 as a small team of engineers who were tired of
        watching good ideas get buried under bad software. Over the past decade
        that team has grown into a full-service{" "}
        <strong>software development company</strong> that has shipped more than
        50 production systems for clients spread across four continents, from
        early-stage startups building their first product to established
        companies replacing software that no longer keeps up with their
        business.
      </p>

      <p>
        We don't think of ourselves as a vendor that takes orders and writes
        code.{" "}
        <Link to="/" className="story-link">
          QllmSoft
        </Link>{" "}
        works the way a good in-house engineering team would: we ask why a
        feature matters before we estimate how long it will take to build, and
        we push back when a request would create more problems than it solves.
        Our team is made up of enterprise architects, full-stack engineers,
        mobile developers, cloud specialists, and AI engineers who have built
        software for healthcare providers, logistics companies, financial
        teams, and retailers, so the conversation rarely starts from zero.
      </p>

      <p>
        Every engagement starts with a proper discovery phase. We map out the
        workflow, write up a fixed-price proposal and a documented scope, and
        get sign-off before any code gets written. It's a slower start than
        jumping straight into development, but it's the reason clients on
        three different continents have stayed with us for years instead of
        one project.
      </p>

      <h4>What We Build</h4>

      <ul className="story-list">
        <li>
          <strong>Enterprise Web Applications:</strong> Internal portals,
          customer-facing platforms, SaaS products, and business management
          tools built to hold up under real daily use, not just demo traffic.
        </li>

        <li>
          <strong>Mobile Applications:</strong> Cross-platform Android and iOS
          apps with offline support, push notifications, and clean UX, taken
          from a first prototype through to a full enterprise rollout.
        </li>

        <li>
          <strong>Business Automation Systems:</strong> Software that replaces
          manual, error-prone processes, covering things like payroll,
          inventory, document approvals, and cross-department reporting.
        </li>

        <li>
          <strong>AI-Powered Software Solutions:</strong> Practical machine
          learning, natural language processing, and computer vision features
          built into existing business software, aimed at measurable results
          rather than one-off demos.
        </li>

        <li>
          <strong>Legacy System Modernisation:</strong> Phased migrations from
          outdated platforms to modern, maintainable systems that preserve
          existing business logic and keep teams working while the transition
          happens.
        </li>
      </ul>

      <p>
        Our project history spans financial management platforms, healthcare
        systems, document management tools, eCommerce platforms, HR and
        payroll software, and warehouse automation, including our{" "}
        <Link to="/finance-management-system" className="story-link">
          finance management system
        </Link>{" "}
        built around budgeting, approvals, and real-time reporting for finance
        teams.
      </p>

      <p>
        Our work is reviewed publicly, not just promised in a sales deck. You
        can check our record on{" "}
        <a
          href="https://www.upwork.com/freelancers/~0170e20f8803389a86"
          target="_blank"
          rel="noopener noreferrer"
          className="story-link"
          aria-label="Verify QllmSoft 100% Job Success Score on Upwork"
        >
          Upwork (100% Job Success Score)
        </a>{" "}
        and{" "}
        <a
          href="https://www.freelancer.com/u/mrprogrmmr"
          target="_blank"
          rel="noopener noreferrer"
          className="story-link"
          aria-label="View QllmSoft 5-star reviews on Freelancer"
        >
          Freelancer (5-Star Rating)
        </a>
        , where clients have left feedback after the project shipped, not
        before.
      </p>
    </div>
  </div>
</section>

        {/* ── STATS BAND ── */}
        <section
          className="section"
          style={{ background: "#1A202C", padding: "48px 0", marginTop: "28px" }}
          aria-label="QllmSoft company statistics"
        >
          <div className="container">
          <div
              className="why-grid"
              style={{
                textAlign: "center",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
              }} >
              <div>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "800",
                    color: "#63B3ED",
                  }}
                >
                  10+
                </div>
                <div
                  style={{
                    color: "#CBD5E0",
                    marginTop: "8px",
                    fontWeight: "600",
                  }}
                >
                  Years in Operation
                </div>
                <div style={{ color: "#718096", fontSize: "0.85rem" }}>
                  Founded 2015
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "800",
                    color: "#63B3ED",
                  }}
                >
                  50+
                </div>
                <div
                  style={{
                    color: "#CBD5E0",
                    marginTop: "8px",
                    fontWeight: "600",
                  }}
                >
                  Projects Delivered
                </div>
                <div style={{ color: "#718096", fontSize: "0.85rem" }}>
                  Across 6 Industries
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "800",
                    color: "#63B3ED",
                  }}
                >
                  4
                </div>
                <div
                  style={{
                    color: "#CBD5E0",
                    marginTop: "8px",
                    fontWeight: "600",
                  }}
                >
                  Continents Served
                </div>
                <div style={{ color: "#718096", fontSize: "0.85rem" }}>
                  Clients Worldwide
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "800",
                    color: "#63B3ED",
                  }}
                >
                  100%
                </div>
                <div
                  style={{
                    color: "#CBD5E0",
                    marginTop: "8px",
                    fontWeight: "600",
                  }}
                >
                  On-Time Delivery
                </div>
                <div style={{ color: "#718096", fontSize: "0.85rem" }}>
                  Every Project, Every Time
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section
          className="section services-features reveal"
          aria-labelledby="capabilities-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="capabilities-heading">
                Why Businesses Choose QllmSoft as Their Software Development
                Partner
              </h2>
            </div>

            <div className="features-grid">
              <FeatureCard
                icon={Users}
                title="10+ Years of Proven Delivery"
                description="50+ projects delivered since 2015 for clients across four continents, with a 100% on-time delivery record."
              />
              <FeatureCard
                icon={Shield}
                title="Security Built In From the Start"
                description="Security gets designed into the architecture from day one, following OWASP Top 10 practices across every web app, API, and mobile app we ship."
              />
              <FeatureCard
                icon={Zap}
                title="One Team, Full-Stack Capability"
                description="Web, mobile, backend, cloud, and AI under one roof, so there's a single point of accountability instead of handoffs between outsourced pieces."
              />
              <FeatureCard
                icon={Check}
                title="Fixed-Price, On-Time Delivery"
                description="Scope gets agreed before development starts, so there are no hourly billing surprises and no scope-creep invoices later."
              />
              <FeatureCard
                icon={Headphones}
                title="30-Day Post-Launch Support Included"
                description="Every project ships with hyper-care support, monitoring, and the option for longer-term maintenance, we stick around after launch."
              />
            </div>
          </div>
        </section>
{/* Industries Section */}

<section class="industries-section" aria-labelledby="industries-heading">
  <div class="industries-container">
    <div class="industries-header">
      <span class="industries-eyebrow"style={{ fontSize: "1.1rem" }}>What We Cover</span>
      <h2 id="industries-heading">Industries We Serve</h2>
      <p class="industries-subtext">
        A decade of project work across these sectors means we bring some
        domain context to a project, not just engineers who can write code against a spec.
      </p>
    </div>
    <nav aria-label="Industries served by QllmSoft">
      <div class="industries-grid">

        <article class="industry-card">
          <div class="card-inner">
            <div class="card-top">
              <span class="card-number" style={{ fontSize: "2.2rem" }}>01</span>
              <span class="card-icon">🏥</span>
            </div>
            <div class="card-accent-line"></div>
            <h3 class="card-title">
              <a href="/healthcare-software-development-pakistan">Healthcare</a>
            </h3>
            <p class="card-desc">Hospital management systems, telemedicine platforms, clinic software, EMR/EHR tools, and patient portals.</p>
            <div class="card-arrow"><span>→</span></div>
          </div>
        </article>

        <article class="industry-card">
          <div class="card-inner">
            <div class="card-top">
              <span class="card-number" style={{ fontSize: "2.2rem" }}>02</span>
              <span class="card-icon">💳</span>
            </div>
            <div class="card-accent-line"></div>
            <h3 class="card-title">Finance & FinTech</h3>
            <p class="card-desc">Financial management platforms, accounting automation, real-time reporting dashboards, and secure payment integrations.</p>
            <div class="card-arrow"><span>→</span></div>
          </div>
        </article>

        <article class="industry-card">
          <div class="card-inner">
            <div class="card-top">
              <span class="card-number" style={{ fontSize: "2.2rem" }}>03</span>
              <span class="card-icon">🎓</span>
            </div>
            <div class="card-accent-line"></div>
            <h3 class="card-title">
              <a href="/education-software-development-pakistan">Education</a>
            </h3>
            <p class="card-desc">School management systems, LMS platforms, eLearning apps, and student information systems.</p>
            <div class="card-arrow"><span>→</span></div>
          </div>
        </article>

        <article class="industry-card">
          <div class="card-inner">
            <div class="card-top">
              <span class="card-number" style={{ fontSize: "2.2rem" }}>04</span>
              <span class="card-icon">🚚</span>
            </div>
            <div class="card-accent-line"></div>
            <h3 class="card-title">Logistics & Warehouse</h3>
            <p class="card-desc">Inventory management systems, warehouse automation, delivery tracking, and supply chain visibility tools.</p>
            <div class="card-arrow"><span>→</span></div>
          </div>
        </article>

        <article class="industry-card">
          <div class="card-inner">
            <div class="card-top">
              <span class="card-number" style={{ fontSize: "2.2rem" }}>05</span>
              <span class="card-icon">🛒</span>
            </div>
            <div class="card-accent-line"></div>
            <h3 class="card-title">eCommerce & Retail</h3>
            <p class="card-desc">Custom eCommerce platforms, inventory control, order management, and multi-vendor marketplace builds.</p>
            <div class="card-arrow"><span>→</span></div>
          </div>
        </article>

        <article class="industry-card">
          <div class="card-inner">
            <div class="card-top">
              <span class="card-number" style={{ fontSize: "2.2rem" }}>06</span>
              <span class="card-icon">🏢</span>
            </div>
            <div class="card-accent-line"></div>
            <h3 class="card-title">HR & Enterprise Operations</h3>
            <p class="card-desc">Payroll systems, employee portals, attendance tracking, leave management, and performance review tools.</p>
            <div class="card-arrow"><span>→</span></div>
          </div>
        </article>

      </div>
    </nav>
  </div>
</section>

{/* End of Industries Section */}

        {/* ── VISION / MISSION ── */}
        <section
          className="section vision-mission reveal"
          aria-labelledby="vm-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="vm-heading">Our Vision &amp; Mission</h2>
            </div>

            <div className="vm-stack">
              <div className="vm-row">
                <div className="vm-image">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                    alt="QllmSoft vision, a software development partner for businesses worldwide"
                    loading="lazy"
                  />
                </div>

                <div className="vm-content">
                  <div className="vm-icon">
                    <Eye size={26} />
                  </div>
                  <h3>Our Vision</h3>
                  <p>{aboutContent.vision}</p>
                </div>
              </div>

              <div className="vm-row reverse">
                <div className="vm-content">
                  <div className="vm-icon">
                    <Target size={26} />
                  </div>
                  <h3>Our Mission</h3>
                  <p>{aboutContent.mission}</p>
                </div>

                <div className="vm-image">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                    alt="QllmSoft mission, measurable business outcomes through custom software"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CEO SECTION ── */}
        <section
          className="section ceo-section reveal"
          aria-labelledby="ceo-heading"
          itemScope
          itemType="https://schema.org/Person"
        >
          <div className="container">
            <div className="ceo-card">
              <div className="ceo-image">
                <img
                  src={ceoImg}
                  alt="Zain Ul Abedin, Founder and CEO of QllmSoft"
                  loading="lazy"
                  itemProp="image"
                />
              </div>

              <div className="ceo-content">
                <h2 id="ceo-heading">Message from the CEO</h2>

                <p>
                  I started QllmSoft in 2015 with a handful of people and a
                  simple goal: build software that actually does what it's
                  supposed to do, on a timeline clients can plan around. A
                  decade later, that goal hasn't changed, even though the
                  team and the size of the projects have grown a lot. We
                  hold a 100% on-time delivery record and a verified 100%
                  Upwork Job Success Score, and those numbers matter to me
                  more than any award would.
                </p>

                <p>
                  The thing I tell new hires on day one is that our job
                  isn't to sell a tech stack, it's to solve the problem in
                  front of us with whatever tools fit the client's
                  situation, budget, and timeline. That's a harder sell than
                  "we use the latest framework," but it's the reason
                  clients we worked with in our first few years are still
                  sending us new projects today.
                </p>

                <div className="ceo-identity">
                  <h4 itemProp="name">Zain Ul Abedin</h4>
                  <span itemProp="jobTitle">Founder &amp; CEO, QllmSoft</span>
                </div>

                <a
                  href="https://www.linkedin.com/in/zain-ul-abedin-b09a613b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-btn"
                  aria-label="Connect with Zain Ul Abedin on LinkedIn"
                  itemProp="sameAs"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── INTERNAL LINKS ── */}
        <section
          className="section"
          style={{ background: "#F7FAFC", padding: "48px 0" }}
          aria-labelledby="explore-heading"
        >
          <div className="container">
            <div className="section-title reveal">
              <h2 id="explore-heading">
                Explore What QllmSoft Can Build for Your Business
              </h2>
            </div>
            <nav aria-label="QllmSoft services navigation" className="reveal">
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  justifyContent: "center",
                }}
              >
                {[
                  { to: "/services", label: "All Services" },
                  {
                    to: "/custom-software-development-services",
                    label: "Custom Software",
                  },
                  {
                    to: "/web-application-development-services",
                    label: "Web Applications",
                  },
                  { to: "/mobile-app-development", label: "Mobile Apps" },
                  {
                    to: "/ai-powered-software-solutions",
                    label: "AI Solutions",
                  },
                  {
                    to: "/outsource-software-development-to-pakistan",
                    label: "Outsourcing",
                  },
                  {
                    to: "/legacy-system-modernization-services",
                    label: "Legacy Modernization",
                  },
                  {
                    to: "/hire-dotnet-developers-pakistan",
                    label: "Hire Developers",
                  },
                  {
                    to: "/healthcare-software-development-pakistan",
                    label: "Healthcare Software",
                  },
                  {
                    to: "/education-software-development-pakistan",
                    label: "Education Software",
                  },
                  
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      background: "#fff",
                      border: "1px solid #E2E8F0",
                      borderRadius: "6px",
                      color: "#1E5AA8",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="section cta-section reveal"
          aria-labelledby="cta-heading"
        >
          <div className="container" style={{ textAlign: "center" }}>
            <div className="cta-content">
              <h2 id="cta-heading">
                Ready to Work with a Software Development Partner You Can
                Rely On?
              </h2>
              <p  style={{ color: "white", marginTop: "10px" }}>
                Tell us your challenge. We'll review your requirements, send
                a detailed fixed-price proposal within 24 hours, and set up
                a free discovery call, no commitment required.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Get a Free Consultation
              </Link>
              <LeadMagnetBanner variant="calculator" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
