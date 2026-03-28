import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { servicesData } from '../data/mock';
import { useInView } from 'react-intersection-observer';
import './Services.css';
import 'animate.css';

/* ─────────────────────────────────────────────
   useSEO — no package needed.
   Sets <title>, all <meta> tags, canonical,
   and injects JSON-LD schema directly into
   document.head. Cleans up on unmount.
───────────────────────────────────────────── */
const useSEO = ({ title, description, keywords, canonical, ogImage, schema }) => {
  useEffect(() => {
    // ── Title ──
    const prevTitle = document.title;
    document.title = title;

    // ── Helper: set or create a <meta> tag ──
    const setMeta = (selector, attr, value) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrVal] = attr.split('=');
        el.setAttribute(attrName, attrVal.replace(/"/g, ''));
        el.setAttribute('data-dynamic', 'true');
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // ── Helper: set or create a <link> tag ──
    const setLink = (rel, href) => {
      let el = document.head.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        el.setAttribute('data-dynamic', 'true');
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Standard meta
    setMeta('meta[name="description"]',  'name="description"',  description);
    setMeta('meta[name="keywords"]',     'name="keywords"',     keywords);
    setMeta('meta[name="robots"]',       'name="robots"',       'index, follow');

    // Canonical
    setLink('canonical', canonical);

    // Open Graph
    setMeta('meta[property="og:title"]',       'property="og:title"',       title);
    setMeta('meta[property="og:description"]', 'property="og:description"]', description);
    setMeta('meta[property="og:url"]',         'property="og:url"',         canonical);
    setMeta('meta[property="og:type"]',        'property="og:type"',        'website');
    setMeta('meta[property="og:image"]',       'property="og:image"',       ogImage);
    setMeta('meta[property="og:locale"]',      'property="og:locale"',      'en_PK');

    // Twitter Card
    setMeta('meta[name="twitter:card"]',        'name="twitter:card"',        'summary_large_image');
    setMeta('meta[name="twitter:title"]',       'name="twitter:title"',       title);
    setMeta('meta[name="twitter:description"]', 'name="twitter:description"', description);
    setMeta('meta[name="twitter:image"]',       'name="twitter:image"',       ogImage);

    // JSON-LD Schema — inject as <script> tag
    let schemaScript = document.head.querySelector('script[data-schema="services"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('data-schema', 'services');
      schemaScript.setAttribute('data-dynamic', 'true');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema);

    // Cleanup on unmount — restore previous title, remove dynamic tags
    return () => {
      document.title = prevTitle;
      document.head
        .querySelectorAll('[data-dynamic="true"]')
        .forEach((el) => el.remove());
    };
  }, [title, description, keywords, canonical, ogImage, schema]);
};

/* ─────────────────────────────────────────────
   SCHEMA MARKUP — injected once, server-readable
───────────────────────────────────────────── */
const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://qllmsoft.com/services#webpage',
      url: 'https://qllmsoft.com/services',
      name: 'Software Development Services in Pakistan | Web, Mobile & .NET | QllmSoft',
      description:
        'QllmSoft offers custom software development services in Pakistan including ASP.NET Core web apps, mobile app development, REST API development, and enterprise desktop software for businesses globally.',
      isPartOf: { '@id': 'https://qllmsoft.com/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://qllmsoft.com/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://qllmsoft.com/services' },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://qllmsoft.com/services#service',
      name: 'Custom Software Development Services in Pakistan',
      serviceType: 'Software Development',
      description:
        'QllmSoft provides custom web application development, mobile app development, ASP.NET Core enterprise systems, REST API development, and desktop software solutions for startups and enterprises in Pakistan and globally.',
      provider: {
        '@type': 'Organization',
        name: 'QllmSoft',
        url: 'https://qllmsoft.com/',
        telephone: '+92-334-8229288',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lalamusa',
          addressRegion: 'Punjab',
          addressCountry: 'PK',
        },
      },
      areaServed: ['PK', 'US', 'UK', 'AE', 'Worldwide'],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '12',
        bestRating: '5',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Software Development Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Web Application Development Pakistan' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development Pakistan' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ASP.NET Core Development Pakistan' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'REST API Development Pakistan' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desktop Software Development Pakistan' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What custom software development services does QllmSoft offer in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'QllmSoft offers custom web application development, Android and iOS mobile app development, ASP.NET Core enterprise systems, REST API and GraphQL development, Windows desktop applications, and dedicated developer hiring for businesses across Pakistan and globally.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does software development cost in Pakistan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Software development costs in Pakistan at QllmSoft range from PKR 50,000 for a simple web app or API to PKR 500,000+ for enterprise ASP.NET Core systems. Every project receives a fixed-price quote within 24 hours of a free consultation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does QllmSoft build mobile apps for Android and iOS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. QllmSoft develops cross-platform mobile apps for both Android and iOS using modern frameworks. Our apps are built for performance, offline capability, and seamless API integration with your backend systems.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is QllmSoft\'s software development process?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'QllmSoft follows a structured 6-phase process: Discovery & requirements analysis, Architecture & planning, Agile development in 2-week sprints, QA & security testing, Deployment with CI/CD pipelines, and ongoing support with 30-day hyper-care.',
          },
        },
      ],
    },
  ],
};

/* ─────────────────────────────────────────────
   SERVICE CARD (unchanged design)
───────────────────────────────────────────── */
const ServiceCardDetailed = ({ service, isOdd, id }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      id={id}
      ref={ref}
      className="service-card-wrapper"
      style={{
        display: 'flex',
        flexDirection: isOdd ? 'row' : 'row-reverse',
        alignItems: 'center',
        gap: '30px',
        marginBottom: '50px',
      }}
    >
      {/* Image */}
      <div
        className={`service-image animate__animated ${
          inView ? (isOdd ? 'animate__fadeInLeft' : 'animate__fadeInRight') : ''
        }`}
        style={{ flex: 1, opacity: inView ? 1 : 0, animationDuration: '0.6s' }}
      >
        <div className="service-image-box">
          <img src={service.image} alt={service.alt || service.name} loading="lazy" />
        </div>
      </div>

      {/* Text */}
      <div
        className={`service-text animate__animated ${
          inView ? (isOdd ? 'animate__fadeInRight' : 'animate__fadeInLeft') : ''
        }`}
        style={{ flex: 1, opacity: inView ? 1 : 0, animationDuration: '0.6s', animationDelay: '0.1s' }}
      >
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <ul>
          {service.features.map((feat, i) => (
            <li key={i}>{feat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   FAQ ACCORDION — new section for SEO
───────────────────────────────────────────── */
const faqItems = [
  {
    q: 'What custom software development services does QllmSoft offer in Pakistan?',
    a: 'QllmSoft offers end-to-end custom software development services including ASP.NET Core web applications, Android and iOS mobile app development, REST API and GraphQL development, Windows desktop applications, and dedicated developer hiring. We serve businesses across Lahore, Karachi, Islamabad, Faisalabad, Sialkot, Gujranwala, and internationally in the UK, USA, UAE, and Saudi Arabia.',
  },
  {
    q: 'How much does software development cost in Pakistan?',
    a: 'Software development costs at QllmSoft range from PKR 50,000 for a simple web app or API to PKR 500,000+ for complex enterprise systems. Every project receives a detailed, fixed-price scope document and a formal quote within 24 hours of a free consultation — with no hidden charges or surprise invoices at any stage.',
  },
  {
    q: 'Does QllmSoft build mobile apps for Android and iOS?',
    a: 'Yes. QllmSoft develops cross-platform mobile apps targeting both Android and iOS using modern frameworks. Our mobile apps are designed for performance, offline capability, intuitive UX, and seamless REST API integration with your backend systems. We handle the entire mobile SDLC from wireframing to App Store submission.',
  },
  {
    q: 'What technologies does QllmSoft specialize in?',
    a: 'QllmSoft specializes in ASP.NET Core 8/9, C# 12, Entity Framework Core, SQL Server, React JS, Angular, REST APIs, GraphQL, Azure, AWS, Docker, Kubernetes, JWT/OAuth2, and CI/CD pipelines. All code follows SOLID principles, OWASP security standards, and clean architecture patterns for long-term maintainability.',
  },
  {
    q: 'Does QllmSoft work with international clients?',
    a: 'Yes. QllmSoft has delivered verified software projects for clients in the UK, USA, UAE, Saudi Arabia, Jordan, and Germany. Our Upwork 100% Job Success Score and independently verified Freelancer reviews reflect consistent international delivery across time zones.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section faq-seo-section" style={{ background: '#F7FAFC' }}>
      <div className="container">
        <div className="section-title reveal">
          <h2>Frequently Asked Questions — Software Development in Pakistan</h2>
          <p>Answers to the questions businesses ask before starting a project with QllmSoft.</p>
        </div>
        <div className="faq-seo-list reveal" style={{ maxWidth: '880px', margin: '0 auto' }}>
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="faq-seo-item"
              style={{
                border: '1px solid #EDF2F7',
                borderRadius: '10px',
                marginBottom: '14px',
                overflow: 'hidden',
                background: '#fff',
              }}
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '20px 24px',
                  background: openIndex === i ? '#1E5AA8' : '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                  fontFamily: 'inherit',
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: openIndex === i ? '#fff' : '#1A365D',
                  transition: 'all .25s',
                }}
              >
                {item.q}
                <span
                  style={{
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: openIndex === i ? 'rgba(255,255,255,.15)' : 'rgba(30,90,168,.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    color: openIndex === i ? '#edb702' : '#1E5AA8',
                    transform: openIndex === i ? 'rotate(45deg)' : 'none',
                    transition: 'transform .3s, color .3s',
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{
                  maxHeight: openIndex === i ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height .4s ease',
                }}
              >
                <p
                  style={{
                    padding: '0 24px 20px',
                    margin: 0,
                    fontSize: '.97rem',
                    color: '#4A5568',
                    lineHeight: '1.75',
                    textAlign: 'left',
                  }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   TECH STACK — uncommented & SEO-optimized
───────────────────────────────────────────── */
const TechnologiesSection = () => (
  <section className="section technologies-section bg-light" aria-labelledby="tech-h2">
    <div className="container">
      <div className="section-title reveal">
        <h2 id="tech-h2">Technologies We Use to Build Your Software</h2>
        <p>
          Enterprise-grade technology stack — selected for your project's specific needs, not for familiarity.
          Every tool we use is production-proven, actively maintained, and built for the scale your business demands.
        </p>
      </div>
      <div className="tech-grid reveal">
        <div className="tech-category">
          <h3>Frontend &amp; Web</h3>
          <ul>
            <li>React JS</li>
            <li>Angular</li>
            <li>Blazor / Razor Pages</li>
            <li>HTML5 / CSS3 / TypeScript</li>
            <li>ASP.NET MVC</li>
          </ul>
        </div>
        <div className="tech-category">
          <h3>Backend &amp; APIs</h3>
          <ul>
            <li>ASP.NET Core 8 / 9</li>
            <li>C# 12 / Entity Framework Core</li>
            <li>REST API / GraphQL</li>
            <li>JWT / OAuth2 / RBAC</li>
            <li>Node.js / Python</li>
          </ul>
        </div>
        <div className="tech-category">
          <h3>Mobile Development</h3>
          <ul>
            <li>Cross-Platform (Android &amp; iOS)</li>
            <li>React Native</li>
            <li>Flutter</li>
            <li>.NET MAUI</li>
            <li>API-First Mobile Architecture</li>
          </ul>
        </div>
        <div className="tech-category">
          <h3>Database &amp; Cloud</h3>
          <ul>
            <li>SQL Server / PostgreSQL</li>
            <li>MongoDB / Redis</li>
            <li>Azure / AWS</li>
            <li>Docker / Kubernetes</li>
            <li>CI/CD Pipelines</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   TRUST BAND — new section for EEAT signals
───────────────────────────────────────────── */
const TrustBand = () => (
  <section
    aria-label="QllmSoft trust signals"
    style={{
      background: '#1A365D',
      padding: '28px 0',
    }}
  >
    <div
      className="container"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '0',
      }}
    >
      {[
        { num: '10+', lbl: 'Years Experience' },
        { num: '100+', lbl: 'Projects Delivered' },
        { num: '50+', lbl: 'Happy Clients' },
        { num: '100%', lbl: 'Upwork Job Success' },
        { num: '5 ★', lbl: 'Average Rating' },
      ].map((s, i) => (
        <div
          key={i}
          style={{
            flex: '1',
            minWidth: '140px',
            textAlign: 'center',
            padding: '12px 16px',
            borderRight: i < 4 ? '1px solid rgba(255,255,255,.12)' : 'none',
          }}
        >
          <span
            style={{
              display: 'block',
              fontSize: '2rem',
              fontWeight: '900',
              color: '#edb702',
              lineHeight: '1',
            }}
          >
            {s.num}
          </span>
          <span
            style={{
              fontSize: '.75rem',
              color: 'rgba(255,255,255,.65)',
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              marginTop: '4px',
              display: 'block',
            }}
          >
            {s.lbl}
          </span>
        </div>
      ))}
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const Services = () => {
  const location = useLocation();

  // SEO: title, meta, canonical & schema — zero packages needed
  useSEO({
    title: 'Software Development Services in Pakistan | Web, Mobile & .NET | QllmSoft',
    description:
      'QllmSoft provides custom software development services in Pakistan — ASP.NET Core web apps, mobile app development, REST API development & enterprise desktop software. Free quote in 24 hours.',
    keywords:
      'software development services Pakistan, custom software development Pakistan, web application development Pakistan, mobile app development Pakistan, ASP.NET Core Pakistan, REST API development Pakistan, software house Pakistan',
    canonical: 'https://qllmsoft.com/services',
    ogImage: 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp',
    schema: schemaMarkup,
  });

  useEffect(() => {
    if (location.hash) {
      const scrollToHash = () => {
        const element = document.querySelector(location.hash);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      scrollToHash();
      setTimeout(scrollToHash, 150);
    }

    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, [location.hash]);

  return (
    <main className="services-page">

        {/* ── HERO ── */}
        <section className="services-hero reveal" aria-labelledby="svc-hero-h1">
          <div className="container">
            <h1 id="svc-hero-h1">
              Custom Software Development Services in Pakistan
            </h1>
            <p>
              QllmSoft engineers production-ready web applications, mobile apps, ASP.NET Core enterprise systems,
              and REST APIs for startups and businesses across Pakistan — and globally in the UK, USA, UAE, and Saudi Arabia.
              Every project is delivered on a fixed price, with a documented scope, on an agreed timeline.
            </p>
          </div>
        </section>

        {/* ── TRUST BAND ── */}
        <TrustBand />

        {/* ── SERVICES LIST ── */}
        <section className="section services-list" aria-labelledby="svc-list-h2">
          <div className="container">
            <div className="section-title reveal">
              <h2 id="svc-list-h2">Our Software Development Services in Pakistan</h2>
              <p>
                End-to-end development services built around your business goals — not generic templates.
                We take full technical ownership from architecture and design through to deployment and post-launch support,
                serving businesses in Lahore, Karachi, Islamabad, Faisalabad, Sialkot, Gujranwala, and internationally.
              </p>
            </div>
            <div className="services-detailed-grid">
              {servicesData.map((service, index) => {
                const serviceId =
                  service.slug ||
                  service.name
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^a-z0-9-]/g, '');
                return (
                  <ServiceCardDetailed
                    key={service.id}
                    service={service}
                    isOdd={index % 2 === 0}
                    id={serviceId}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* ── TECHNOLOGIES ── */}
        <TechnologiesSection />

        {/* ── PROCESS ── */}
        <section className="section process-section" aria-labelledby="process-h2">
          <div className="container">
            <div className="section-title reveal">
              <h2 id="process-h2">Our 6-Phase Software Development Process</h2>
              <p>
                A structured, transparent delivery framework used across every QllmSoft project —
                ensuring on-time completion, zero scope creep, and production-ready software from the first release.
              </p>
            </div>
            <div className="process-grid">

              <div className="process-step reveal reveal-delay-1">
                <div className="process-number">01</div>
                <h3>Discovery &amp; Requirements</h3>
                <p>
                  We conduct a structured technical requirements workshop — mapping your business goals, user journeys,
                  and constraints to produce a formal scope document and fixed-price breakdown before any development begins.
                </p>
              </div>

              <div className="process-step reveal reveal-delay-2">
                <div className="process-number">02</div>
                <h3>Architecture &amp; Planning</h3>
                <p>
                  Our architects design a clean, scalable system architecture with a detailed project roadmap,
                  technology selection rationale, sprint plan, and delivery timeline — all formally approved by you before coding starts.
                </p>
              </div>

              <div className="process-step reveal reveal-delay-3">
                <div className="process-number">03</div>
                <h3>Agile Development</h3>
                <p>
                  Clean, SOLID-principled code delivered in structured 2-week sprints with weekly progress demos,
                  Jira board access, and formal sprint sign-offs. You control the backlog priority throughout.
                </p>
              </div>

              <div className="process-step reveal reveal-delay-1">
                <div className="process-number">04</div>
                <h3>QA &amp; Security Testing</h3>
                <p>
                  Automated regression tests, OWASP Top 10 security checklists, load testing, and performance audits
                  run before every release. Nothing ships until it passes our full production quality standard.
                </p>
              </div>

              <div className="process-step reveal reveal-delay-2">
                <div className="process-number">05</div>
                <h3>Deployment &amp; CI/CD</h3>
                <p>
                  Smooth, zero-downtime deployment to your chosen environment — Azure, AWS, or on-premise —
                  with full CI/CD pipeline setup, infrastructure documentation, and environment handover materials.
                </p>
              </div>

              <div className="process-step reveal reveal-delay-3">
                <div className="process-number">06</div>
                <h3>Support &amp; Hyper-Care</h3>
                <p>
                  Every QllmSoft project includes a formal 30-day hyper-care window covering bug fixes, performance
                  monitoring, security patches, and complete knowledge transfer to your internal team.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── FAQ — NEW SEO SECTION ── */}
        <FaqSection />

        {/* ── CTA ── */}
        <section className="section cta-section" aria-labelledby="cta-h2">
          <div className="container">
            <div className="cta-content reveal">
              <h2 id="cta-h2">Ready to Build Software That Grows Your Business?</h2>
              <p>
                Tell us what you need. We will review your requirements, send a detailed fixed-price proposal
                within 24 hours, and schedule a free discovery call — no commitment required.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </section>

    </main>
  );
};

export default Services;
