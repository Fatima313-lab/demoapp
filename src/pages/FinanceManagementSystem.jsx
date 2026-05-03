/**
 * Financ Managemebt System Page
 * ─────────────────────────────────────────────────────
 * TARGET KEYWORDS:
 *  Primary:   Finance management system
 *         
 *  Secondary: Cloud based finance management system, automated financial reporting system for businesses,
 * financial management system for multi branch companies, ai powered finance management system for enterprises,
 * best finance management system for small business
 .....  http://localhost:3000/finance-management-system ..... URL 
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './IndustryPage.css';
import 'animate.css';

const PAGE_URL  = 'https://qllmsoft.com/finance-management-system';
const OG_IMAGE  = 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg';

/* ── SVG Icons ─────────────────────────────────────────── */
const IconWallet = ({ s=24 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 7h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3z"/>
    <path d="M17 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"/>
    <circle cx="17" cy="13" r="1"/>
  </svg>
);

const IconPie = ({ s=24 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
);

const IconFileText = ({ s=24 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
    <path d="M10 9H8" />
  </svg>
);

const IconFlow = ({ s=24 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 3v6a2 2 0 0 0 2 2h8a2 2 0 0 1 2 2v6" />
    <path d="M6 21v-6a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V3" />
    <circle cx="6" cy="3" r="1.5" />
    <circle cx="18" cy="3" r="1.5" />
    <circle cx="6" cy="21" r="1.5" />
    <circle cx="18" cy="21" r="1.5" />
  </svg>
);

const IconCloud = ({ s=24 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 17.5a4.5 4.5 0 0 0-1.2-8.8A6 6 0 0 0 6 9.5a4 4 0 0 0 .5 8H19a3 3 0 0 0 1-0.1" />
  </svg>
);

const IconShield = ({ s=24 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconBrain = ({ s=24 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8.5 6.5A3.5 3.5 0 0 1 12 3a3.5 3.5 0 0 1 3.5 3.5" />
    <path d="M8 21a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3" />
    <path d="M16 21a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3" />
    <path d="M9 10a3 3 0 0 0-3 3v1" />
    <path d="M15 10a3 3 0 0 1 3 3v1" />
    <path d="M12 7v14" />
  </svg>
);

const IconBuilding = ({ s=24 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 22V7l9-4 9 4v15" />
    <path d="M9 22v-8h6v8" />
    <path d="M7 10h.01M7 13h.01M17 10h.01M17 13h.01" />
  </svg>
);

const IconCheck = ({ s=16 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ── JSON-LD ───────────────────────────────────────────── */
const schemaOrg = {
  '@context':'https://schema.org',
  '@type':'Organization',
  name:'QllmSoft',
  url:'https://qllmsoft.com',
  foundingDate:'2015',
  logo:'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp',
  contactPoint:{
    '@type':'ContactPoint',
    telephone:'+92-334-8229288',
    contactType:'customer service',
    areaServed:['PK','US','GB','AE','SA'],
    availableLanguage:'English'
  },
  address:{
    '@type':'PostalAddress',
    streetAddress:'H # 181, Camping Ground',
    addressLocality:'Lalamusa',
    addressRegion:'Punjab',
    addressCountry:'PK'
  },
  sameAs:[
    'https://www.freelancer.com/u/mrprogrmmr',
    'https://www.upwork.com/freelancers/~0170e20f8803389a86'
  ]
};

const schemaService = {
  '@context':'https://schema.org',
  '@type':'Service',
  serviceType:'Finance Management System Development',
  name:'Finance Management System | Cloud-Based & Automated Reporting',
  description:'QllmSoft builds cloud based finance management systems to automate financial reporting, budgeting, approvals, and multi branch finance operations. Custom built for your workflows.',
  provider:{ '@type':'Organization', name:'QllmSoft', url:'https://qllmsoft.com' },
  areaServed:['Pakistan','United States','United Kingdom','UAE','Saudi Arabia'],
  url:PAGE_URL
};

const schemaBreadcrumb = {
  '@context':'https://schema.org',
  '@type':'BreadcrumbList',
  itemListElement:[
    { '@type':'ListItem', position:1, name:'Home', item:'https://qllmsoft.com/' },
    { '@type':'ListItem', position:2, name:'Services', item:'https://qllmsoft.com/services' },
    { '@type':'ListItem', position:3, name:'Finance Management System', item:PAGE_URL }
  ]
};

const FAQ_DATA = [
  {
    q:'What is a finance management system?',
    a:'A finance management system is an internal platform that helps you manage budgets, expenses, approvals, reporting, and audit ready records in one place instead of spreadsheets and email chains.'
  },
  {
    q:'Can you build a cloud based finance management system?',
    a:'Yes. QllmSoft builds cloud based finance management systems with secure role based access, real time dashboards, and controlled approvals so teams can work safely from anywhere.'
  },
  {
    q:'Do you provide automated financial reporting for businesses?',
    a:'Yes. We build automated financial reporting systems for businesses so monthly, quarterly, and department wise reports can be generated instantly with consistent formats.'
  },
  {
    q:'Is this suitable for multi-branch companies?',
    a:'Yes. We build financial management systems for multi branch companies with branch level budgets, central approvals, and consolidated reports for leadership.'
  },
  {
    q:'Do you offer AI features for enterprises?',
    a:'Yes. For larger organizations we can add AI powered insights like anomaly detection, spending trend alerts, and forecasting support based on your data.'
  },
  {
    q:'Can small businesses use this system too?',
    a:'Yes. We build the best finance management system for small businesses by keeping it simple, clean, and scalable so you can start lean and grow over time.'
  }
];

const schemaFAQ = {
  '@context':'https://schema.org',
  '@type':'FAQPage',
  mainEntity:FAQ_DATA.map(({q,a}) => ({
    '@type':'Question',
    name:q,
    acceptedAnswer:{ '@type':'Answer', text:a }
  }))
};

/* ── FAQ Item ──────────────────────────────────────────── */
const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  const id = `fin-faq-${index}`;

  return (
    <div
      className={`faq-item ${open ? 'faq-item--open' : ''}`}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        className="faq-question"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={id}
        itemProp="name"
      >
        <span>{faq.q}</span>
        <span className="faq-icon" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div
          id={id}
          className="faq-answer"
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          <p itemProp="text">{faq.a}</p>
        </div>
      )}
    </div>
  );
};

/* ── Page Component ─────────────────────────────────────── */
const FinanceManagementSystem = () => {
  const { ref:svRef,     inView:svInView }     = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:whyRef,    inView:whyInView }    = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:procRef,   inView:procInView }   = useInView({ triggerOnce:true, threshold:0.08 });
  const { ref:clientRef, inView:clientInView } = useInView({ triggerOnce:true, threshold:0.08 });

  return (
    <>
      <Helmet>
        <title>Finance Management System | Cloud Based & Automated Reporting | QllmSoft</title>
        <meta
          name="description"
          content="QllmSoft builds cloud based finance management systems to automate financial reporting, budgeting, approvals, and multi-branch finance operations. Simple, secure, and custom-built."
        />
        <meta
          name="keywords"
          content="finance management system, cloud based finance management system, automated financial reporting system for businesses, financial management system for multi branch companies, ai powered finance management system for enterprises, best finance management system for small business"
        />
        <meta name="author" content="QllmSoft" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content="Finance Management System | Cloud-Based & Automated Reporting | QllmSoft" />
        <meta property="og:description" content="Custom finance management system built by QllmSoft — budgets, approvals, reporting, and multi-branch control in one secure platform." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Finance Management System — QllmSoft" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Finance Management System | QllmSoft" />
        <meta name="twitter:description" content="Cloud based finance system with automated reporting, approvals, and dashboards built by QllmSoft." />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main
        id="main-content"
        className="ip-page"
        style={{
          '--ip-hero-from':'#0a2355',
          '--ip-hero-mid':'#143A7B',
          '--ip-hero-to':'#0a47a2',
          '--ip-accent':'#EDB702',
          '--ip-icon-bg':'#EEF5FF',
          '--ip-icon-color':'#0b408e'
        }}
        role="main"
      >
       
        {/* HERO */}
        <header className="ip-hero" role="banner">
          <div className="container ip-hero__inner">
            <div className="ip-hero__content">
              <div className="ip-hero__eyebrow">
                <span className="ip-hero__dot" aria-hidden="true" />
                Finance Operations — Cloud & Automation
              </div>

              <h1 className="ip-hero__title">
                Finance Management<br />
                <em>System</em><br />
                Built for Control
              </h1>

              <p className="ip-hero__sub">
                We build clean, secure finance systems that replace spreadsheets and email approvals ,
                budgeting, expenses, reporting, and multi-branch control in one place.
              </p>

              <div className="ip-hero__buttons">
                <Link to="/contact" className="ip-btn-primary" aria-label="Get a free finance system consultation from QllmSoft">
                  Get a Free Consultation
                </Link>
                <a
                  href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20a%20Finance%20Management%20System!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ip-btn-whatsapp"
                  aria-label="WhatsApp QllmSoft about finance management system"
                >
                  💬 WhatsApp Us
                </a>
              </div>

              <div className="ip-hero__trust" aria-label="Trust indicators">
                <span>✓ Cloud-Based</span><span className="ip-hero__trust-sep" />
                <span>✓ Audit Trails</span><span className="ip-hero__trust-sep" />
                <span>✓ Role-Based Access</span><span className="ip-hero__trust-sep" />
                <span>✓ Custom-Built</span>
              </div>
            </div>

            <aside className="ip-hero__features" aria-label="Finance system capabilities">
              {[
                { Icon:IconWallet,   title:'Budget & Expenses',      desc:'Track budgets, spend, invoices, and reimbursements' },
                { Icon:IconFlow,     title:'Approval Workflows',     desc:'Multi-level approvals with full audit trail' },
                { Icon:IconFileText, title:'Automated Reporting',    desc:'Monthly reports generated instantly' },
                { Icon:IconBuilding, title:'Multi-Branch Control',   desc:'Branch-wise budgets and central reporting' },
                { Icon:IconBrain,    title:'AI Insights (Optional)', desc:'Anomaly alerts and spending trends' },
                { Icon:IconShield,   title:'Security & Access',      desc:'Role-based permissions and secure logs' },
              ].map((f,i) => (
                <div key={i} className="ip-hero__feature">
                  <div className="ip-hero__feature-icon"><f.Icon s={20} /></div>
                  <strong>{f.title}</strong>
                  <span>{f.desc}</span>
                </div>
              ))}

              <div className="ip-hero__stats" aria-label="Key highlights">
                {[
                  { num:'Cloud', label:'Secure Access' },
                  { num:'Auto',  label:'Reporting' },
                  { num:'Multi', label:'Branch Ready' },
                  { num:'RBAC',  label:'Permissions' }
                ].map(s => (
                  <div key={s.label} className="ip-hero__stat">
                    <span className="ip-hero__stat-num">{s.num}</span>
                    <span className="ip-hero__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </header>

        {/* SOCIAL PROOF */}
<section className="section ip-social-proof">
  <div className="container">
    <p className="ip-social-proof__title">
      Trusted by teams building modern digital operations
    </p>

    <div className="ip-social-proof__logos">
      <span>Insurance</span>
      <span>Healthcare</span>
      <span>Finance</span>
      <span>Real Estate</span>
      <span>SaaS</span>
    </div>
  </div>
</section>



        {/* INTRO */}
        <section className="section ip-intro" aria-labelledby="intro-heading">
          <div className="container">
            <p className="section-eyebrow">Why This System Matters</p>

            <div className="ip-intro__layout">
              <div className="ip-intro__text">
                <h2 id="intro-heading">Stop Managing Finance in Spreadsheets</h2>

                <p>
                  When finance runs on spreadsheets and email threads, you lose time and control.
                  Approvals get delayed. Reports take days. And it becomes hard to see what is really happening.
                </p>

                <p>
                  QllmSoft builds a <strong>Finance Management System</strong> that puts budgets, expenses,
                  approvals, and reporting into one secure platform , built around your workflow.
                </p>

                <p>
                  If you need a <strong>cloud based finance management system</strong>, or an
                  <strong> automated financial reporting system for businesses</strong>, we can build it cleanly 
                  with simple UI, clear dashboards, and audit ready logs.
                </p>

                <div className="ip-intro__badges">
                  {[
                    'Cloud-Based Access',
                    'Automated Reports',
                    'Approval Workflows',
                    'Audit Logs & Controls'
                  ].map(b => (
                    <span key={b} className="ip-badge"><IconCheck s={13} />{b}</span>
                  ))}
                </div>
              </div>

              <aside className="ip-intro__aside" aria-label="Finance outcomes">
                {[
                  { Icon:IconPie,      num:'Clear', label:'Budget vs actual view' },
                  { Icon:IconCloud,    num:'Fast',  label:'Reports in minutes' },
                  { Icon:IconShield,   num:'Safe',  label:'Audit-friendly tracking' },
                  { Icon:IconBuilding, num:'Ready', label:'Multi-branch control' },
                ].map((s,i) => (
                  <div key={i} className="ip-stat-card">
                    <div className="ip-stat-card__icon"><s.Icon s={20} /></div>
                    <div>
                      <span className="ip-stat-card__num">{s.num}</span>
                      <span className="ip-stat-card__label">{s.label}</span>
                    </div>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section ip-services" ref={svRef} aria-labelledby="services-heading">
          <div className="container">
            <p className="section-eyebrow">What We Build</p>

            <div className="section-title">
              <h2 id="services-heading">Finance System Modules</h2>
              <p>Pick what you need now  and expand later as you grow.</p>
            </div>

            <div className="ip-services__grid">
              {[
                {
                  Icon:IconWallet,
                  title:'Budgeting & Expense Management',
                  desc:'Create budgets, track spending, manage invoices, and keep everything in one place. No messy sheets.',
                  tags:['Budgets','Expenses','Invoices','Reimbursements']
                },
                {
                  Icon:IconFlow,
                  title:'Approval Workflows',
                  desc:'Multi level approvals with clear ownership, status tracking, and full history for every decision.',
                  tags:['Approvals','Audit Trail','Role Rules','Notifications']
                },
                {
                  Icon:IconFileText,
                  title:'Automated Financial Reporting',
                  desc:'Build an automated financial reporting system for businesses so reports are generated instantly.',
                  tags:['Monthly Reports','Exports','Dashboards','Consistency']
                },
                {
                  Icon:IconBuilding,
                  title:'Multi Branch Finance Control',
                  desc:'A financial management system for multi branch companies with branch budgets and central visibility.',
                  tags:['Branch Budgets','Consolidated View','Controls','KPIs']
                },
                {
                  Icon:IconCloud,
                  title:'Cloud Based Access',
                  desc:'A cloud based finance management system with secure access and real time updates.',
                  tags:['Cloud','RBAC','Secure Access','Real-Time']
                },
                {
                  Icon:IconBrain,
                  title:'AI Insights (Optional)',
                  desc:'An AI powered finance management system for enterprises: anomaly alerts, patterns, and forecasting support.',
                  tags:['AI Alerts','Trends','Forecast Support','Risk Signals']
                }
              ].map((s,i) => (
                <article
                  key={i}
                  className={`ip-service-card animate__animated ${svInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay:`${i*0.08}s` }}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <div className="ip-service-card__icon"><s.Icon s={22} /></div>
                  <h3 className="ip-service-card__title" itemProp="name">{s.title}</h3>
                  <p className="ip-service-card__desc" itemProp="description">{s.desc}</p>
                  <div className="ip-service-card__tags">
                    {s.tags.map(t => <span key={t} className="ip-stag">{t}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section ip-dark-band" ref={procRef} aria-labelledby="process-heading">
          <div className="container">
            <p className="section-eyebrow">How We Build</p>

            <div className="section-title">
              <h2 id="process-heading">Our Build Process</h2>
              <p>Simple steps. Clean delivery. No confusion.</p>
            </div>

            <ol className="ip-process__steps" aria-label="Finance system development process">
              {[
                { n:'01', icon:'🔍', title:'Discovery & Workflow Mapping', desc:'We understand how your finance team works today and where delays happen.' },
                { n:'02', icon:'🧩', title:'System Design & Access Rules',    desc:'We design dashboards, approval roles, and data structure with clarity.' },
                { n:'03', icon:'⚙️', title:'Development in Sprints',          desc:'We build in short sprints so you see progress early and often.' },
                { n:'04', icon:'✅', title:'Testing & Data Safety Checks',    desc:'We test flows, reporting accuracy, and permissions carefully.' },
                { n:'05', icon:'🚀', title:'Launch & Support',               desc:'We deploy, train your team, and support improvements after launch.' },
              ].map((step,i) => (
                <li
                  key={i}
                  className={`ip-process__step animate__animated ${procInView ? 'animate__fadeInLeft' : ''}`}
                  style={{ animationDelay:`${i*0.09}s` }}
                >
                  <div className="ip-process__step-num" aria-label={`Step ${step.n}`}>{step.n}</div>
                  <span className="ip-process__step-icon" aria-hidden="true">{step.icon}</span>
                  <div className="ip-process__step-body">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WHO WE HELP */}
        <section
          className="section ip-dark-band"
          ref={clientRef}
          aria-labelledby="clients-heading"
          style={{ background:'linear-gradient(145deg,#0B1B3A,#1F66D1)' }}
        >
          <div className="container">
            <p className="section-eyebrow">Who This Is For</p>

            <div className="section-title">
              <h2 id="clients-heading">Businesses We Build For</h2>
              <p>We build finance systems for teams that need control and clear reporting.</p>
            </div>

            <div className="ip-clients__grid">
              {[
                { Icon:IconBuilding, title:'Multi-Branch Companies', desc:'Central finance with branch-level tracking and consolidated reporting.' },
                { Icon:IconWallet,   title:'SMEs & Growing Teams',    desc:'Simple finance system that replaces spreadsheets and scales with growth.' },
                { Icon:IconShield,   title:'Compliance-Heavy Firms',  desc:'Approval trails, controlled access, and audit-ready reporting.' },
                { Icon:IconCloud,    title:'Remote Teams',           desc:'Cloud access with role-based controls and real-time visibility.' },
              ].map((c,i) => (
                <article
                  key={i}
                  className={`ip-client-card animate__animated ${clientInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay:`${i*0.1}s` }}
                >
                  <div className="ip-client-card__icon"><c.Icon s={20} /></div>
                  <h3 className="ip-client-card__title">{c.title}</h3>
                  <p className="ip-client-card__desc">{c.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY QLLMSOFT */}
        <section className="section ip-why" ref={whyRef} aria-labelledby="why-heading">
          <div className="container">
            <p className="section-eyebrow">Why QllmSoft</p>

            <div className="section-title">
              <h2 id="why-heading">Why Teams Choose QllmSoft</h2>
              <p>We keep it simple, build around your workflow, and deliver a system your team actually uses.</p>
            </div>

            <div className="ip-why__grid">
              {[
                { Icon:IconFlow,   title:'Built Around Your Workflow',  desc:'No forced templates. We build to match your approvals and reporting needs.' },
                { Icon:IconCloud,  title:'Cloud + Control',            desc:'Work from anywhere with role based access and strong data control.' },
                { Icon:IconFileText,title:'Reports That Stay Consistent',desc:'Automated reporting with consistent formats and fewer manual errors.' },
                { Icon:IconShield, title:'Audit Friendly Tracking',    desc:'Every approval and change is tracked with a clear activity history.' },
                { Icon:IconBuilding,title:'Multi Branch Ready',        desc:'Branch budgets, central dashboards, and leadership visibility.' },
                { Icon:IconBrain,  title:'AI When You Need It',        desc:'Optional AI insights for enterprise teams to spot risks early.' },
              ].map((w,i) => (
                <article
                  key={i}
                  className={`ip-why-card animate__animated ${whyInView ? 'animate__fadeInUp' : ''}`}
                  style={{ animationDelay:`${i*0.08}s` }}
                >
                  <div className="ip-why-card__icon"><w.Icon s={20} /></div>
                  <h3 className="ip-why-card__title">{w.title}</h3>
                  <p className="ip-why-card__desc">{w.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>


        

        {/* FAQ */}
        <section className="section csd-faq ip-faq" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <p className="section-eyebrow">Common Questions</p>

            <div className="section-title">
              <h2 id="faq-heading">Finance Management System FAQ</h2>
              <p>Short, clear answers to common questions before you build.</p>
            </div>

            <div className="csd-faq__list">
              {FAQ_DATA.map((faq,i) => <FAQItem key={i} faq={faq} index={i} />)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section ip-cta" aria-labelledby="cta-heading">
          <div className="ip-cta__bg" aria-hidden="true" />
          <div className="container ip-cta__inner">
            <div className="ip-cta__left">
              <p className="section-eyebrow" style={{ color:'#edb702', textAlign:'left', margin:'0 0 12px' }}>
                Start Your Finance System
              </p>

              <h2 id="cta-heading">Want Clean Finance Control in One System?</h2>
              <p className="ip-cta__desc">
                Tell us your current workflow. We will recommend a clear system plan and build the finance platform your team needs.
              </p>

              <div className="ip-cta__buttons">
                <Link to="/contact" className="ip-btn-primary" aria-label="Get a free finance system consultation from QllmSoft">
                  Get Free Consultation
                </Link>
                <a
                  href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20a%20Finance%20Management%20System!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ip-btn-whatsapp"
                  aria-label="WhatsApp QllmSoft about finance management system"
                >
                  💬 WhatsApp Us
                </a>
              </div>

              <div className="ip-cta__perks">
                {['✓ Free consultation','✓ Clean UI','✓ Audit-ready reports','✓ Post-launch support'].map(p => <span key={p}>{p}</span>)}
              </div>
            </div>

            <aside className="ip-cta__right">
              <div className="ip-cta__contact">
                <h3>Quick Contact</h3>
                <a href="mailto:qllmsoft@gmail.com" className="ip-cta__contact-row">📧 qllmsoft@gmail.com</a>
                <a href="https://wa.me/923348229288" target="_blank" rel="noopener noreferrer" className="ip-cta__contact-row">💬 WhatsApp — quick reply</a>
                <a href="tel:+923348229288" className="ip-cta__contact-row">📞 +92 334 8229288</a>
              </div>

              <nav className="ip-cta__related" aria-label="Related services">
                <p className="ip-cta__related-title">Related Services</p>
                <Link to="/custom-software-development-services">Custom Software</Link>
                <Link to="/api-development-services">API Development</Link>
                <Link to="/mobile-app-development">Mobile App Development</Link>
                <Link to="/ai-powered-software-solutions">AI Solutions</Link>
                <Link to="/services">All Services</Link>
              </nav>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};

export default FinanceManagementSystem;