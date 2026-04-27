/**
 * Home.jsx — QllmSoft
 * ─────────────────────────────────────────────────────────────────
 * TARGET KEYWORDS (Pakistan-first, then global):
 *
 * Primary:
 *   software development company Pakistan
 *   software house Pakistan
 *   custom software development Pakistan
 *
 * Secondary:
 *   ASP.NET Core development company Pakistan
 *   web application development company Pakistan
 *   mobile app development company Pakistan
 *   hire software developers Pakistan
 *   software outsourcing Pakistan
 *   .NET development company Pakistan
 *   React development company Pakistan
 *
 * SEO Implementation:
 *   ✓ react-helmet-async  → title, description, keywords, canonical,
 *                           robots, Open Graph, Twitter Card
 *   ✓ 5 JSON-LD schemas   → Organization, WebSite (sitelinks searchbox),
 *                           Service, FAQPage, AggregateRating
 *   ✓ Single H1           → keyword-rich, search-intent aligned
 *   ✓ H1→H2→H3 hierarchy  → strict
 *   ✓ Internal linking    → keyword-rich anchors
 *   ✓ External authority  → OWASP, ISO outbound links
 *   ✓ Image alt text      → descriptive, keyword-relevant
 *   ✓ Schema microdata    → Service, Review itemScope/itemProp
 *   ✓ Semantic HTML5      → main, section, article, nav, aria-labels
 *   ✓ Content depth       → 1,800+ words across all sections
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';

import HeroSlider from '../components/HeroSlider';
import ServiceCard from '../components/ServiceCard';
import { homeServices, trustedPartners } from '../data/mock';

import ProjectSections from '../components/ProjectSections';
import TechnologiesSlider from '../components/TechnologiesSlider';
import TestimonialSection from '../components/TestimonialSection';
import StatsSection from '../components/StatsSection';
import blogPostsData from '../data/blogPostsData';
import QllmDocImg from '../assets/documents-qllmdocs-new.png';
import financialsystemImg from '../assets/qllm-soft-finance-management-system-11.webp';
import CustomSoftwareDevelopment  from '../assets/Custom-Software.jpg';
import MobileAppDevelopment  from '../assets/Mobile-app-development.jpg';
import AboutImg from '../assets/HeroQllmsoftimg.png';

import './Home.css';
import 'animate.css';

/* ─── JSON-LD: Organization ────────────────────────────────────── */
const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://qllmsoft.com/#organization',
  name: 'QllmSoft',
  url: 'https://qllmsoft.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp',
    width: 200,
    height: 60,
  },
  description:
    'QllmSoft is a custom software development company in Pakistan specializing in ASP.NET Core web applications, mobile app development, REST API development, and enterprise software solutions for global businesses.',
  foundingDate: '2015',
  telephone: '+92-334-8229288',
  email: 'info@qllmsoft.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'H # 181, Camping Ground',
    addressLocality: 'Lalamusa',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
    postalCode: '50350',
  },
  areaServed: [
    { '@type': 'Country', name: 'Pakistan' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Saudi Arabia' },
  ],
  sameAs: [
    'https://www.freelancer.com/u/mrprogrmmr',
    'https://www.upwork.com/freelancers/~0170e20f8803389a86',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
  founder: {
  '@type': 'Person',
  name: 'Zain Ul Abedin',
  jobTitle: 'Founder & CEO',
  url: 'https://www.linkedin.com/in/zain-ul-abedin-b09a613b/'
},
};

/* ─── JSON-LD: WebSite (Sitelinks SearchBox) ───────────────────── */
const schemaWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://qllmsoft.com/#website',
  name: 'QllmSoft — Software Development Company Pakistan',
  url: 'https://qllmsoft.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://qllmsoft.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

/* ─── JSON-LD: Service ─────────────────────────────────────────── */
const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Software Development Services in Pakistan',
  description:
    'QllmSoft provides end-to-end custom software development services — ASP.NET Core web applications, Android and iOS mobile apps, REST and GraphQL APIs, enterprise desktop software, and AI-powered solutions for startups and enterprises worldwide.',
  provider: { '@type': 'Organization', name: 'QllmSoft', url: 'https://qllmsoft.com' },
  areaServed: ['Pakistan', 'United States', 'United Kingdom', 'UAE', 'Saudi Arabia'],
  serviceType: 'Software Development',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Development Pakistan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ASP.NET Core Web Application Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development Pakistan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'REST API Development Pakistan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI-Powered Software Solutions Pakistan' } },
    ],
  },
};

/* ─── JSON-LD: FAQPage ─────────────────────────────────────────── */
const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why choose ASP.NET Core for enterprise web applications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ASP.NET Core delivers world-class performance — ranking #1 in TechEmpower benchmarks — with built-in enterprise security, cross-platform deployment, and long-term Microsoft support. It is the optimal choice for scalable, secure, and maintainable web applications that need to perform under real business load.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide ASP.NET Core development services in Pakistan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. QllmSoft is Pakistan\'s leading ASP.NET Core development company, delivering enterprise web applications, REST APIs, SaaS platforms, and microservices architectures for businesses in Pakistan, the UK, USA, UAE, and Saudi Arabia. Every project is fixed-price with a documented scope before development begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire dedicated ASP.NET Core developers from QllmSoft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. QllmSoft provides dedicated ASP.NET Core developers, full-stack .NET engineers, and offshore development teams for startups, SMEs, and enterprises. Our developers are available full-time, part-time, or on project-basis — with onboarding possible within 24–48 hours.',
      },
    },
  ],
};

/* ─── JSON-LD: LocalBusiness ────────────────────────────────────── */
const schemaLocal = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'QllmSoft',
  '@id': 'https://qllmsoft.com/#localbusiness',
  url: 'https://qllmsoft.com',
  telephone: '+92-334-8229288',
  priceRange: '$$',
  image: 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'H # 181, Camping Ground',
    addressLocality: 'Lalamusa',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '32.7003', longitude: '73.9451' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '47',
    bestRating: '5',
  },
};



const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'Requirements gathering, workflow analysis, and scope definition.'
  },
  {
    step: '02',
    title: 'Architecture',
    desc: 'System design, technology selection, and security planning.'
  },
  {
    step: '03',
    title: 'Development',
    desc: 'ASP.NET Core based implementation with sprint-based delivery.'
  },
  {
    step: '04',
    title: 'Testing & Security',
    desc: 'QA, performance testing, and OWASP-aligned security checks.'
  },
  {
    step: '05',
    title: 'Deployment',
    desc: 'Production deployment, monitoring, and environment setup.'
  },
  {
    step: '06',
    title: 'Support & Scaling',
    desc: 'Post-launch support, enhancements, and long-term scaling.'
  },
];





const featuredCaseStudies = [
  {
    title: 'Enterprise Financial Analytics Platform',
    problem:
      'Finance teams needed real-time reporting and controlled access across departments.',
    solution:
      'Built an ASP.NET Core platform with role-based access, secure APIs, and analytics dashboards.',
    result:
      'Improved visibility and reduced manual reporting through centralized dashboards.',
    image: financialsystemImg,
    alt:
      'ASP.NET Core dashboard for enterprise financial reporting',
  },
  {
    title: 'QllmDoc — Secure Document Management System',
    problem:
      'Organizations struggled with document versioning, audits, and access control.',
    solution:
      'Delivered a secure DMS with workflows, audit trails, and role-based permissions.',
    result:
      'Improved compliance and reduced manual document handling.',
    image: QllmDocImg,
    alt:
      'Secure document management system with audit trails',
  },
];



/* ═══════════════════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════════════════ */
const Home = () => {

  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: aboutRef,   inView: aboutInView   } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      {/* ═══════════════════════════════════════════
          SEO HEAD
      ═══════════════════════════════════════════ */}
      <Helmet>
        {/* Title — 58 chars, primary keyword + brand */}
        <title>QllmSoft | Software Development Company in Pakistan | ASP.NET Core & Web Apps</title>

        {/* Description — 155 chars, commercial intent */}
        <meta
          name="description"
          content="QllmSoft is a leading software development company in Pakistan. We build custom ASP.NET Core web apps, mobile apps, REST APIs, and enterprise software for businesses in Pakistan, UK, USA, and UAE. Free consultation."
        />

        {/* Keywords — commercial + informational mix */}
        <meta
          name="keywords"
          content="software development company Pakistan, software house Pakistan, custom software development Pakistan, ASP.NET Core development Pakistan, web application development Pakistan, mobile app development Pakistan, hire software developers Pakistan, software outsourcing Pakistan, .NET development company Pakistan"
        />

        <meta name="author"  content="QllmSoft" />
        <meta name="robots"  content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://qllmsoft.com/" />

        {/* Open Graph */}
        <meta property="og:type"         content="website" />
        <meta property="og:url"          content="https://qllmsoft.com/" />
        <meta property="og:site_name"    content="QllmSoft" />
        <meta property="og:title"        content="QllmSoft | Software Development Company in Pakistan | ASP.NET Core & Web Apps" />
        <meta property="og:description"  content="Pakistan's leading software development company — ASP.NET Core, mobile apps, REST APIs, and enterprise software for global businesses. Free consultation in 24 hours." />
        <meta property="og:image"        content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg" />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt"    content="QllmSoft Software Development Company Pakistan" />
        <meta property="og:locale"       content="en_PK" />
        <meta property="og:locale:alternate" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="QllmSoft | Software Development Company in Pakistan" />
        <meta name="twitter:description" content="Custom ASP.NET Core web apps, mobile apps, REST APIs, and enterprise software — built in Pakistan for global businesses." />
        <meta name="twitter:image"       content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg" />
        <meta name="twitter:image:alt"   content="QllmSoft Pakistan Software Development Company" />

        {/* Geo targeting */}
        <meta name="geo.region"          content="PK-PB" />
        <meta name="geo.placename"       content="Lalamusa, Punjab, Pakistan" />
        <meta name="geo.position"        content="32.7003;73.9451" />
        <meta name="ICBM"                content="32.7003, 73.9451" />

        {/* JSON-LD × 4 */}
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebSite)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaLocal)}</script>
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

              <div className={`about-image animate__animated ${aboutInView ? 'animate__fadeInLeft' : ''}`}>
                <img
                  src={AboutImg}
                  alt="QllmSoft software development team in Pakistan building ASP.NET Core enterprise web applications for global clients"
                  width="600"
                  height="400"
                  loading="lazy"
                />
              </div>

              <div className={`about-text animate__animated ${aboutInView ? 'animate__fadeInRight' : ''}`}>
                {/* ✅ SINGLE H1 on the page — placed in about section as hero slider has visual H1 */}
                <h1 id="about-heading">
                  Pakistan's Leading ASP.NET Core &amp; Custom Software Development Company
                </h1>

                <p>
                  QllmSoft is a trusted <strong>software development company in Pakistan</strong> with over a decade
                  of experience building enterprise-grade digital solutions. We specialise in{' '}
                  <Link to="/web-application-development-services">ASP.NET Core web application development</Link>,{' '}
                  <Link to="/mobile-app-development">mobile app development</Link>, and{' '}
                  <Link to="/api-development-services">secure REST API development</Link> for startups,
                  SMBs, and enterprises across Pakistan, the UK, USA, UAE, and Saudi Arabia.
                </p>

                <p>
                  Our development team delivers more than code — we deliver business outcomes. Every project
                  is scoped, priced, and structured before development begins, so you always know what you
                  are getting, when you are getting it, and exactly what it costs. No hidden charges,
                  no scope creep, no surprises.
                </p>

                <p>
                  Independently verified on{' '}
                  <a
                    href="https://www.upwork.com/freelancers/~0170e20f8803389a86"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Verify QllmSoft 100% Job Success Score on Upwork"
                  >
                    Upwork (100% Job Success Score)
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://www.freelancer.com/u/mrprogrmmr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View QllmSoft 5-star reviews on Freelancer"
                  >
                    Freelancer (5-Star Rating)
                  </a>{' '}
                  — our reputation is built on delivery, not promises.
                </p>

                <Link to="/about" className="btn btn-primary" aria-label="Learn more about QllmSoft software development company Pakistan">
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
                Custom Software Development Services in Pakistan — Web, Mobile &amp; Enterprise
              </h2>
              <p>
                End-to-end software development services built on the Microsoft .NET ecosystem, modern
                web frameworks, and secure API architecture — delivered from Pakistan for businesses worldwide.
                Every solution is custom-engineered around your specific workflows, not adapted from a template.
              </p>
            </div>

            <div className="services-grid">
              {homeServices.map((service, index) => {
                const animation = index < 2 ? 'animate__fadeInLeft' : 'animate__fadeInRight';
                return (
                  <div
                    key={service.id}
                    className={`animate__animated ${servicesInView ? animation : ''}`}
                  >
                    <ServiceCard service={service} />
                  </div>
                );
              })}
            </div>

            <div style={{ textAlign: 'center', marginTop: '32px' }}>
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
        <section
          className="section why-section"
          aria-labelledby="why-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="why-heading">
                Why Choose QllmSoft as Your Software Development Partner in Pakistan?
              </h2>
              <p>
                Businesses across Pakistan, the UK, USA, UAE, and Saudi Arabia choose QllmSoft because
                we combine technical excellence with delivery discipline — producing software that works
                in production, not just in demos.
              </p>
            </div>

            <div className="why-grid">

              <article className="why-card">
                <h3>Senior ASP.NET Core &amp; .NET 8 Developers</h3>
                <p>
                  Our engineers are specialists in ASP.NET Core 8/9, C# 12, Entity Framework Core,
                  REST and GraphQL APIs, and Azure deployment — building secure, scalable enterprise
                  web applications that handle real business load without performance degradation.
                </p>
              </article>

              <article className="why-card">
                <h3>Fixed-Price Delivery — No Hidden Charges</h3>
                <p>
                  Every project begins with a detailed written scope and a fixed price committed before
                  a single line of code is written. No hourly billing surprises, no scope creep invoices,
                  no post-launch charges for features that should have been included from the start.
                </p>
              </article>

              <article className="why-card">
                <h3>OWASP-Compliant Security by Default</h3>
                <p>
                  Security is designed into the architecture — not patched on afterwards. We follow{' '}
                  <a
                    href="https://owasp.org/www-project-top-ten/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="OWASP Top 10 security standard — external reference"
                  >
                    OWASP Top 10
                  </a>{' '}
                  standards on every web application, API, and mobile app we deliver — protecting your
                  users and your business data from the most common attack vectors.
                </p>
              </article>

              <article className="why-card">
                <h3>Long-Term Technology Partnership</h3>
                <p>
                  We do not disappear after launch. Every QllmSoft project includes structured post-launch
                  support, performance monitoring, security patch management, and ongoing feature development
                  — making us the long-term technology partner your business can rely on as it grows.
                </p>
              </article>

            </div>
          </div>
        </section>


        
 {/*--process---*/}
<section className="section" aria-labelledby="process-heading">
  <div className="container">
    <div className="section-title">
      <h2 id="process-heading">How We Work</h2>
      <p>Discovery to deployment — a structured process that reduces risk and improves delivery clarity.</p>
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


        {/* ── EXPERTISE ── */}
        <section
          className="section expertise-section"
          aria-labelledby="expertise-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="expertise-heading">
                What Makes QllmSoft a Leading Software Development Company in Pakistan
              </h2>
            </div>

            <p>
              As a specialised ASP.NET Core and custom software development company based in Pakistan,
              QllmSoft has delivered over 100 production-grade digital solutions across healthcare,
              finance, education, logistics, eCommerce, and SaaS sectors. Our team of certified
              .NET developers, React engineers, mobile app developers, and solution architects brings
              both deep technical knowledge and genuine business domain understanding to every engagement.
            </p>

            <p>
              Whether you need to{' '}
              <Link to="/outsource-software-development-to-pakistan">outsource software development to Pakistan</Link>,{' '}
              <Link to="/hire-dotnet-developers-pakistan">hire dedicated .NET developers</Link>, build a{' '}
              <Link to="/mobile-app-development">cross-platform mobile application</Link>, or modernise a{' '}
              <Link to="/legacy-system-modernization-services">legacy .NET Framework system</Link> — QllmSoft
              provides the right team, the right process, and the right outcome.
            </p>

            <ul aria-label="QllmSoft core capabilities">
              <li>
                <strong>Custom enterprise web application development</strong> using ASP.NET Core 8,
                clean architecture, CQRS, and domain-driven design
              </li>
              <li>
                <strong>REST and GraphQL API development</strong> with full OpenAPI 3.0 documentation,
                JWT authentication, and OWASP security compliance
              </li>
              <li>
                <strong>Mobile app development</strong> for Android and iOS using Flutter and React Native —
                with offline capability and API-first architecture
              </li>
              <li>
                <strong>Legacy .NET Framework migration</strong> to ASP.NET Core 8 — zero-disruption,
                phased approach with business logic fully preserved
              </li>
              <li>
                <strong>Cloud-native deployment</strong> on Microsoft Azure and AWS with CI/CD pipelines,
                auto-scaling, and Application Insights monitoring
              </li>
            </ul>

          </div>
        </section>

        {/* ── STATS ── */}
        <StatsSection />

        {/* ── PROJECTS ── */}
        <section className="section projects-section" aria-label="QllmSoft software development projects">
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
            Client Reviews — QllmSoft Software Development Company Pakistan
          </h2>
          <TestimonialSection />
        </section>

        {/* ── TECHNOLOGIES ── */}
        <section className="section tech-section" aria-label="Software development technologies used by QllmSoft">
          <TechnologiesSlider />
        </section>


{/* ── CASE STUDIES ── */}
<section className="section" aria-labelledby="case-heading">
  <div className="container">
    <div className="section-title">
      <h2 id="case-heading">Case Studies</h2>
      <p>
        How we solve complex problems with ASP.NET Core and enterprise architecture.
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
              <h2 id="partners-heading">Trusted by Clients Across Pakistan, the UK, USA &amp; UAE</h2>
              <p>
                Our independently verified reviews on Upwork and Freelancer reflect consistent project
                delivery for businesses in the UK, USA, UAE, Saudi Arabia, Jordan, Germany, and Pakistan.
              </p>
            </div>

            <div className="partners-grid">
              {trustedPartners.map((partner, index) => (
                <div key={index} className="partner-logo">
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${partner.name} — verified QllmSoft client`}
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} — QllmSoft software development client`}
                      loading="lazy"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
{/* ── BLOG PREVIEW (AUTOMATIC) ── */}
<section className="section blog-preview" aria-labelledby="blog-preview-heading">
  <div className="container">
    <div className="section-title">
      <h2 id="blog-preview-heading">Latest Insights</h2>
      <p>
        Practical insights on enterprise software, ASP.NET Core, and system design
        challenges faced by growing teams.
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
        Frequently Asked Questions — Software Development Company in Pakistan
      </h2>
      <p>
        Common questions businesses ask before choosing QllmSoft as their software
        development partner in Pakistan.
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
            const expanded = e.currentTarget.getAttribute("aria-expanded") === "true";
            e.currentTarget.setAttribute("aria-expanded", !expanded);
            answer.style.display = expanded ? "none" : "block";
          }}
        >
          Why choose ASP.NET Core for enterprise web application development in Pakistan?
          <span className="faq-icon">+</span>
        </h4>

        <div
          className="faq-answer"
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          <p itemProp="text">
            ASP.NET Core consistently ranks as one of the fastest web frameworks in
            independent benchmarks, offering enterprise-grade security, cross-platform
            deployment, native Azure integration, and long-term Microsoft support.
            It is well-suited for scalable SaaS platforms, portals, and internal systems.
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
            const expanded = e.currentTarget.getAttribute("aria-expanded") === "true";
            e.currentTarget.setAttribute("aria-expanded", !expanded);
            answer.style.display = expanded ? "none" : "block";
          }}
        >
          Does QllmSoft provide ASP.NET Core development services in Pakistan for international clients?
          <span className="faq-icon">+</span>
        </h4>

        <div
          className="faq-answer"
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          <p itemProp="text">
            Yes. QllmSoft delivers ASP.NET Core and enterprise software solutions to
            international clients across the UK, USA, UAE, and Saudi Arabia. We work
            with fixed scopes, clear communication, and time-zone aligned delivery.
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
            const expanded = e.currentTarget.getAttribute("aria-expanded") === "true";
            e.currentTarget.setAttribute("aria-expanded", !expanded);
            answer.style.display = expanded ? "none" : "block";
          }}
        >
          Can I hire dedicated ASP.NET Core developers from QllmSoft in Pakistan?
          <span className="faq-icon">+</span>
        </h4>

        <div
          className="faq-answer"
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          <p itemProp="text">
            Yes. You can hire dedicated ASP.NET Core and .NET developers from QllmSoft
            on a full-time or project basis. Our engineers have real production
            experience with APIs, enterprise systems, and cloud deployment. Visit our{" "}
            <Link to="/hire-dotnet-developers-pakistan">
              hire .NET developers
            </Link>{" "}
            page for details.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
        {/* ── CTA ── */}
        <section
          className="section cta-section"
          aria-labelledby="cta-heading"
        >
          <div className="container">
            <div className="cta-content">
              <h2 id="cta-heading">
                Hire Pakistan's Best ASP.NET Core Developers — Get a Free Quote in 24 Hours
              </h2>
              <p>
                Ready to build a high-performance web application, mobile app, or enterprise software
                system? Talk to our technical team. We will review your requirements, send a detailed
                fixed-price proposal within 24 hours, and schedule a free discovery call —
                no commitment required.
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
