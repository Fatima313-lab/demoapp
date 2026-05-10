/**
 * About.jsx, QllmSoft
 * ─────────────────────────────────────────────────────────────────
 * SEO STRATEGY (2026):
 *
 * Primary Keywords:
 *   software development company Pakistan
 *   software house Pakistan
 *   IT company Pakistan
 *   software company in Pakistan
 *
 * Secondary Keywords:
 *   custom software development company Pakistan
 *   enterprise software company Pakistan
 *   software agency Pakistan
 *   about QllmSoft
 *   QllmSoft Pakistan
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
 *   ✓ Single H1 → keyword-rich, identity-affirming
 *   ✓ H1→H2→H3 hierarchy → strict
 *   ✓ Internal links → all key service pages
 *   ✓ External links → Upwork, Freelancer, LinkedIn
 *   ✓ Semantic HTML5 → main, section, article, aria-labels
 *   ✓ DESIGN UNCHANGED → all existing CSS classes preserved
 */

import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ceoImg from "../assets/ceo-qllmsoft.jpg";
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
    "QllmSoft is a custom software development company in Pakistan with 10+ years of experience delivering enterprise digital solutions for businesses across Pakistan, UK, USA, UAE, and Saudi Arabia. We specialise in enterprise web applications, mobile apps, business automation, AI-powered solutions, and dedicated developer teams.",
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
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
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
  name: "About QllmSoft, Custom Software Development Company in Pakistan Since 2015",
  description:
    "Learn about QllmSoft, a trusted software development company in Pakistan delivering enterprise digital solutions since 2015. 50+ projects, 50+ global clients, 100% Upwork Job Success Score.",
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
        {/* Title, 60 chars, identity + brand */}
        <title>
          About QllmSoft | Software Development Company in Pakistan Since 2015
        </title>

        {/* Description, 158 chars, E-E-A-T + commercial intent */}
        <meta
          name="description"
          content="QllmSoft is a trusted software development company in Pakistan with 10+ years delivering custom digital solutions. 50+ projects, global clients, 100% Upwork Job Success Score."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="software development company Pakistan, software house Pakistan, IT company Pakistan, custom software company Pakistan, enterprise software company Pakistan, software agency Pakistan, QllmSoft Pakistan, about QllmSoft, software development agency Pakistan"
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
          content="About QllmSoft | Software Development Company in Pakistan Since 2015"
        />
        <meta
          property="og:description"
          content="Trusted software development company in Pakistan, 10+ years, 50+ projects, 100% Upwork Job Success Score. Custom enterprise software, mobile apps, and AI solutions for global businesses."
        />
        <meta
          property="og:image"
          content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="QllmSoft Software Development Company Pakistan, About Us"
        />
        <meta property="og:locale" content="en_PK" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About QllmSoft | Software Development Company in Pakistan"
        />
        <meta
          name="twitter:description"
          content="Custom software development company in Pakistan, 10+ years, 50+ projects delivered globally. Enterprise systems, mobile apps, and AI solutions."
        />
        <meta
          name="twitter:image"
          content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg"
        />

        {/* Geo */}
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
            {/* ✅ SINGLE H1, identity keyword, solution-first */}
            <h1 id="about-hero-h1" style={{ color: "white" }}>
              Pakistan's Trusted Software Development Company, Delivering Real
              Digital Solutions Since 2015
            </h1>
            <p style={{ color: "white" }}>
              10+ years. 50+ production-grade digital solutions. Clients across
              Pakistan, the UK, USA, UAE, Saudi Arabia, and beyond.
            </p>
            <a href="#company" className="btn btn-primary">
              Discover More
            </a>
          </div>
        </section>

        {/* ── COMPANY STORY ── */}
        <section
          id="company"
          className="section company-story reveal"
          aria-labelledby="company-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="company-heading">
                About QllmSoft, Pakistan's Custom Software Development Agency
                Since 2015
              </h2>
            </div>

            <div className="story-card">
              <p>
                QllmSoft is a full-service{" "}
                <strong>software development company in Pakistan</strong> with
                over a decade of experience delivering production-grade digital
                solutions for businesses across four continents. Founded in
                2015, we have grown from a specialist enterprise development
                consultancy into a comprehensive software agency trusted by 50+
                businesses across Pakistan, the USA, Europe & Gulf.
              </p>

              <p>
                <Link
                  to="/"
                  style={{ fontWeight: "bold", textDecoration: "none" }}
                >
                  QllmSoft
                </Link>{" "}
                works as a genuine technology partner, not a code vendor. We
                invest time in understanding your business operations, user
                workflows, and growth objectives before proposing a single
                technical solution. Our team combines certified enterprise
                architects, full-stack engineers, mobile developers, cloud
                specialists, and AI solution architects, bringing both deep
                technical expertise and real business domain understanding to
                every engagement.
              </p>

              <p>
                Every engagement begins with a formal requirements discovery
                process, followed by a fixed-price proposal and documented
                project scope, approved by the client before a single line of
                code is written. This approach eliminates scope creep, budget
                surprises, and delivery uncertainty, and is why 50+ businesses
                across four continents have chosen QllmSoft as their long-term
                technology partner.
              </p>

              <h4>What We Build</h4>

              <ul className="story-list">
                <li>
                  <strong>Enterprise Web Applications:</strong> Scalable, secure
                  web platforms, internal portals, customer-facing systems, SaaS
                  products, and business management tools built to handle real
                  operational workloads without performance degradation.
                </li>
                <li>
                  <strong>Mobile Applications:</strong> Cross-platform Android
                  and iOS apps with offline-first architecture, push
                  notifications, intuitive UX, and backend integration, from MVP
                  to full enterprise rollout.
                </li>
                <li>
                  <strong>Business Automation Systems:</strong> Replacing
                  manual, error-prone workflows with automated systems, from HR
                  and payroll automation to inventory management, document
                  approvals, and multi-department reporting.
                </li>
                <li>
                  <strong>AI-Powered Software Solutions:</strong> Machine
                  learning integrations, natural language processing, computer
                  vision features, and intelligent automation embedded directly
                  into your existing business software, measurable ROI, not
                  proof-of-concept demos.
                </li>
                <li>
                  <strong>Legacy System Modernisation:</strong> Phased,
                  zero-disruption migration from outdated systems to modern,
                  maintainable platforms, full business logic preserved,
                  technical debt eliminated, and your team operational
                  throughout the transition.
                </li>
              </ul>

              <p>
                Our portfolio spans financial management platforms, healthcare
                management systems, document management solutions, eCommerce
                platforms, HR and payroll systems, and warehouse automation
                tools, all built around real business workflows and operational
                control requirements including our{" "}
                <Link to="/finance-management-system">
                  finance management system
                </Link>{" "}
                designed for budgeting, approvals, and real time reporting.
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
                , our reputation is built on consistent delivery, not promises.
              </p>
            </div>
          </div>
        </section>

        {/* ── STATS BAND ── */}
        <section
          className="section"
          style={{ background: "#1A202C", padding: "48px 0" }}
          aria-label="QllmSoft agency statistics"
        >
          <div className="container">
            <div className="why-grid" style={{ textAlign: "center" }}>
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
                  50+
                </div>
                <div
                  style={{
                    color: "#CBD5E0",
                    marginTop: "8px",
                    fontWeight: "600",
                  }}
                >
                  Happy Clients
                </div>
                <div style={{ color: "#718096", fontSize: "0.85rem" }}>
                  UK, USA, UAE, Pakistan &amp; more
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
                description="50+ enterprise digital solutions delivered since 2015 for businesses across Pakistan, UK, USA, and UAE, with a 100% on-time delivery record."
              />
              <FeatureCard
                icon={Shield}
                title="Security and Quality Built In, Not Added On"
                description="Security is designed into the architecture from day one, following OWASP Top 10 standards across every web application, API, and mobile app we deliver."
              />
              <FeatureCard
                icon={Zap}
                title="Full-Stack Engineering Capability"
                description="Web, mobile, backend, cloud, AI, one team, one point of accountability. No outsourced components, no handoff gaps, no quality compromise."
              />
              <FeatureCard
                icon={Check}
                title="Fixed-Price, 100% On-Time Delivery"
                description="Formal scope agreed before development begins, no hourly billing surprises, no scope creep invoices, no post-launch charges."
              />
              <FeatureCard
                icon={Headphones}
                title="30-Day Post-Launch Support Included"
                description="Every project includes hyper-care support, performance monitoring, and long-term maintenance options, we stay partners after launch."
              />
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ── */}
        <section
          className="section"
          style={{ background: "#F7FAFC", padding: "60px 0" }}
          aria-labelledby="industries-heading"
        >
          <div className="container">
            <div className="section-title reveal">
              <h2 id="industries-heading">Industries We Serve</h2>
              <p>
                Over a decade of project delivery across key business sectors
                means we bring domain knowledge, not just technical skills, to
                every engagement.
              </p>
            </div>
            <nav aria-label="Industries served by QllmSoft" className="reveal">
              <div className="why-grid">
                {[
                  {
                    to: "/healthcare-software-development-pakistan",
                    title: "Healthcare",
                    desc: "Hospital management systems, telemedicine platforms, clinic management, EMR/EHR, and patient portal development.",
                  },
                  {
                    title: "Finance &amp; FinTech",
                    desc: "Financial management platforms, accounting automation, real-time reporting dashboards, and secure payment integrations.",
                  },
                  {
                    to: "/education-software-development-pakistan",
                    title: "Education",
                    desc: "School management systems, LMS platforms, eLearning apps, and student information systems with local payment integration.",
                  },
                  {
                    title: "Logistics &amp; Warehouse",
                    desc: "Inventory management systems, warehouse automation, delivery tracking, and supply chain visibility platforms.",
                  },
                  {
                    title: "eCommerce &amp; Retail",
                    desc: "Custom eCommerce platforms, inventory control, order management systems, and multi-vendor marketplace development.",
                  },
                  {
                    title: "HR &amp; Enterprise Operations",
                    desc: "Payroll systems, employee portals, attendance management, leave tracking, and performance evaluation software.",
                  },
                ].map((item, i) => (
                  <article key={i} className="why-card">
                    <h3>
                      {item.to ? (
                        <Link to={item.to}>{item.title}</Link>
                      ) : (
                        <span
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        />
                      )}
                    </h3>
                    <p>{item.desc}</p>
                  </article>
                ))}
              </div>
            </nav>
          </div>
        </section>

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
                    alt="QllmSoft vision, trusted software partner for businesses in Pakistan and globally"
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
                    alt="QllmSoft mission, delivering measurable business outcomes through custom software development"
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
                  alt="Zain Ul Abedin, Founder and CEO of QllmSoft, software development company in Pakistan"
                  loading="lazy"
                  itemProp="image"
                />
              </div>

              <div className="ceo-content">
                <h2 id="ceo-heading">Message from the CEO</h2>

                <p>
                  Since founding QllmSoft in 2015, we have grown from a
                  specialist consultancy into a full-service software
                  development agency trusted by 50+ businesses across Pakistan,
                  the UK, USA, Gulf & Europe. Every project we take on carries a
                  personal commitment from our leadership to deliver on time,
                  within budget, and to a standard we are proud to put our name
                  on, backed by a 100% on-time delivery record and a verified
                  100% Upwork Job Success Score.
                </p>

                <p>
                  Our philosophy has remained the same from day one: understand
                  the business problem first, then engineer the right solution.
                  We do not sell you a technology stack, we solve your
                  operational challenge with the best tools available for your
                  specific context, scale, and budget. That commitment to
                  outcomes over outputs is what has made our clients our
                  longest-standing advocates.
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
          <div className="container">
            <div className="cta-content">
              <h2 id="cta-heading">
                Ready to Work with Pakistan's Trusted Software Development
                Company?
              </h2>
              <p>
                Tell us your challenge. We will review your requirements, send a
                detailed fixed-price proposal within 24 hours, and schedule a
                free discovery call — no commitment required.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
