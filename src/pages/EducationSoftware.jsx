/**
 * EducationSoftware.jsx
 * TARGET KEYWORDS:
 *  Primary:   education software development Pakistan
 *             school management software Pakistan
 *  Secondary: LMS development Pakistan, eLearning platform development Pakistan,
 *             student management system Pakistan, custom education app development Pakistan,
 *             online classes software Pakistan, education app development company Pakistan
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './IndustryPage.css';
import 'animate.css';

const PAGE_URL = 'https://qllmsoft.com/education-software-development-pakistan';
const OG_IMAGE  = 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg';

const IconBook      = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
const IconVideo     = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>;
const IconBarChart  = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>;
const IconUsers     = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconDollarSign= ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const IconShield    = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconCpu       = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M2 9h2M2 15h2M22 9h-2M22 15h-2M15 22v-2M9 22v-2"/></svg>;
const IconSmartphone= ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>;
const IconCheck     = ({s=16}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>;
const IconTrending  = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const IconZap       = ({s=24}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;

const schemaOrg = { '@context':'https://schema.org','@type':'Organization',name:'QllmSoft',url:'https://qllmsoft.com',foundingDate:'2015',logo:'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp',contactPoint:{'@type':'ContactPoint',telephone:'+92-334-8229288',contactType:'customer service',areaServed:['PK','US','GB','AE','SA'],availableLanguage:'English'},address:{'@type':'PostalAddress',streetAddress:'H # 181, Camping Ground',addressLocality:'Lalamusa',addressRegion:'Punjab',addressCountry:'PK'},sameAs:['https://www.freelancer.com/u/mrprogrmmr','https://www.upwork.com/freelancers/~0170e20f8803389a86'] };
const schemaService = { '@context':'https://schema.org','@type':'Service',serviceType:'Education Software Development',name:'Education Software Development Services in Pakistan',description:'QllmSoft provides custom education software development in Pakistan — school management systems, LMS platforms, eLearning apps, student management systems, and online class software for schools, colleges, universities, and EdTech startups.',provider:{'@type':'Organization',name:'QllmSoft',url:'https://qllmsoft.com'},areaServed:['Pakistan','United States','United Kingdom','UAE','Saudi Arabia'],url:PAGE_URL };
const schemaBreadcrumb = { '@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://qllmsoft.com/'},{'@type':'ListItem',position:2,name:'Services',item:'https://qllmsoft.com/services'},{'@type':'ListItem',position:3,name:'Education Software Development Pakistan',item:PAGE_URL}] };
const FAQ_DATA = [
  {q:'What education software development services does QllmSoft offer?',a:'QllmSoft provides end-to-end education software development including school management systems (SMS), Learning Management Systems (LMS), eLearning platforms, student information systems, online examination and assessment tools, mobile education apps for Android and iOS, parent-teacher portals, and fee management systems — for schools, colleges, universities, and EdTech startups in Pakistan and globally.'},
  {q:'What makes your school management software different from off-the-shelf solutions?',a:'Off-the-shelf school management software forces institutions to adapt their workflows to the software. Our custom school management systems are built around your institution\'s specific processes — admission criteria, grading systems, fee structures, timetabling rules, and reporting formats — with your branding, your data ownership, and no recurring licence fees. You pay once and own the system.'},
  {q:'Can you build a custom LMS for our university or corporate training department?',a:'Yes. We specialise in custom LMS development — course content management, student enrollment workflows, assessment and quiz engines, progress tracking dashboards, certificate generation, gamification elements, and integration with Zoom or Google Meet for live class delivery. Our LMS platforms can serve academic institutions and corporate L&D teams equally.'},
  {q:'Do you develop mobile apps for education in Pakistan?',a:'Yes. We build native Android and iOS education apps — live class streaming with interactive whiteboards, offline content access, push notification alerts for assignments and exams, parent-teacher messaging, and progress report delivery. Our mobile education apps are optimised for Pakistan\'s 4G network conditions to ensure smooth performance on budget smartphones.'},
  {q:'How long does it take to develop school management software?',a:'A core school management system covering admissions, attendance, exams, and fee management typically takes 10–16 weeks. A full LMS with course delivery, assessments, and mobile app integration takes 14–20 weeks. An EdTech SaaS platform with multi-institution support and subscription billing takes 20–28 weeks. Timelines depend on feature scope and integration requirements.'},
  {q:'Can your education software integrate with existing systems like Zoom, Google Classroom, or local ERP?',a:'Yes. We integrate education software with Zoom, Google Meet, Microsoft Teams for live classes; Google Classroom and existing SIS for data exchange; national testing board APIs for result verification; and local payment gateways including JazzCash and Easypaisa for fee collection. All integrations use secure REST APIs with proper authentication and error handling.'},
];
const schemaFAQ = { '@context':'https://schema.org','@type':'FAQPage',mainEntity:FAQ_DATA.map(({q,a})=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}})) };
const schemaWebPage = { '@context':'https://schema.org','@type':'WebPage',name:'Education Software Development Services in Pakistan | QllmSoft',url:PAGE_URL,description:'Custom education software development in Pakistan — school management systems, LMS, eLearning platforms, student management, and online class software by QllmSoft.',publisher:{'@type':'Organization',name:'QllmSoft'},aggregateRating:{'@type':'AggregateRating',ratingValue:'5',reviewCount:'47',bestRating:'5',worstRating:'1'} };

const FAQItem = ({faq,index}) => {
  const [open,setOpen]=useState(false); const id=`ed-faq-${index}`;
  return (
    <div className={`faq-item ${open?'faq-item--open':''}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button className="faq-question" onClick={()=>setOpen(o=>!o)} aria-expanded={open} aria-controls={id} itemProp="name"><span>{faq.q}</span><span className="faq-icon" aria-hidden="true">{open?'−':'+'}</span></button>
      {open&&<div id={id} className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">{faq.a}</p></div>}
    </div>
  );
};

const EducationSoftware = () => {
  const {ref:svRef,inView:svInView}=useInView({triggerOnce:true,threshold:0.08});
  const {ref:whyRef,inView:whyInView}=useInView({triggerOnce:true,threshold:0.08});
  const {ref:procRef,inView:procInView}=useInView({triggerOnce:true,threshold:0.08});
  const {ref:clientRef,inView:clientInView}=useInView({triggerOnce:true,threshold:0.08});
  const {ref:revRef,inView:revInView}=useInView({triggerOnce:true,threshold:0.08});

  return (
    <>
      <Helmet>
        <title>Education Software Development in Pakistan | School Management & LMS | QllmSoft</title>
        <meta name="description" content="QllmSoft provides custom education software development in Pakistan — school management systems, LMS platforms, eLearning apps, student management, and online class software for schools, colleges, universities, and EdTech startups. Free consultation." />
        <meta name="keywords" content="education software development Pakistan, school management software Pakistan, LMS development Pakistan, eLearning platform development Pakistan, student management system Pakistan, custom education app development Pakistan, online classes software Pakistan, education app development company Pakistan, EdTech software development Pakistan" />
        <meta name="author" content="QllmSoft" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" /><meta property="og:url" content={PAGE_URL} /><meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content="Education Software Development in Pakistan | School Management & LMS | QllmSoft" />
        <meta property="og:description" content="Custom education software — school management systems, LMS, eLearning platforms, and mobile apps for Pakistani and global educational institutions." />
        <meta property="og:image" content={OG_IMAGE} /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" /><meta property="og:image:alt" content="Education Software Development Pakistan — QllmSoft" /><meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="Education Software Development Pakistan | QllmSoft" /><meta name="twitter:description" content="Custom school management, LMS, and eLearning platforms from Pakistan's leading education software development company." /><meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="ip-page" style={{'--ip-hero-from':'#1a2a5e','--ip-hero-mid':'#1A365D','--ip-hero-to':'#2B6CB0','--ip-accent':'#edb702','--ip-icon-bg':'#EBF8FF','--ip-icon-color':'#1A365D'}} role="main">

        {/* BREADCRUMB */}
        <nav className="csd-breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <ol className="csd-breadcrumb__list" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem"><Link to="/" itemProp="item"><span itemProp="name">Home</span></Link><meta itemProp="position" content="1"/></li>
              <span aria-hidden="true" className="csd-breadcrumb__sep">›</span>
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem"><Link to="/services" itemProp="item"><span itemProp="name">Services</span></Link><meta itemProp="position" content="2"/></li>
              <span aria-hidden="true" className="csd-breadcrumb__sep">›</span>
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem"><span itemProp="name" aria-current="page">Education Software Development Pakistan</span><meta itemProp="position" content="3"/></li>
            </ol>
          </div>
        </nav>

        {/* HERO */}
        <header className="ip-hero" role="banner">
          <div className="container ip-hero__inner">
            <div className="ip-hero__content">
              <div className="ip-hero__eyebrow"><span className="ip-hero__dot" aria-hidden="true"/>Education Technology — Pakistan &amp; Global</div>
              <h1 className="ip-hero__title">Education Software<br/>Development Services<br/><em>in Pakistan</em></h1>
              <p className="ip-hero__sub">We build cutting-edge school management systems, LMS platforms, eLearning apps, and student management solutions that empower schools, colleges, universities, and <strong>EdTech startups</strong> to deliver better education outcomes.</p>
              <div className="ip-hero__buttons">
                <Link to="/contact" className="ip-btn-primary" aria-label="Get a free education software consultation from QllmSoft">Get a Free Demo</Link>
                <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20education%20software!" target="_blank" rel="noopener noreferrer" className="ip-btn-whatsapp" aria-label="WhatsApp QllmSoft about education software">💬 WhatsApp Us</a>
              </div>
              <div className="ip-hero__trust" aria-label="Trust indicators">
                <span>✓ Custom LMS Development</span><span className="ip-hero__trust-sep"/><span>✓ School Management Systems</span><span className="ip-hero__trust-sep"/><span>✓ Mobile eLearning Apps</span>
              </div>
            </div>
            <aside className="ip-hero__features" aria-label="Education software capabilities">
              {[
                {Icon:IconBook,     title:'School Management',   desc:'Admissions, attendance, exams & fee tracking'},
                {Icon:IconVideo,    title:'Online Classes',      desc:'Live streaming, whiteboards & recordings'},
                {Icon:IconCpu,      title:'LMS Development',     desc:'Course delivery, assessments & certifications'},
                {Icon:IconBarChart, title:'Analytics Dashboard', desc:'Student progress & institutional reporting'},
                {Icon:IconSmartphone,title:'Education Mobile Apps',desc:'Android & iOS apps for learners & parents'},
                {Icon:IconUsers,    title:'Parent & Teacher Portals',desc:'Real-time communication & progress updates'},
              ].map((f,i)=>(
                <div key={i} className="ip-hero__feature">
                  <div className="ip-hero__feature-icon"><f.Icon s={20}/></div>
                  <strong>{f.title}</strong><span>{f.desc}</span>
                </div>
              ))}
              <div className="ip-hero__stats">
                {[{num:'50+',label:'EdTech Projects'},{num:'10+',label:'Years Experience'},{num:'5★',label:'Client Rating'},{num:'60%',label:'Cost vs US Agencies'}].map(s=>(
                  <div key={s.label} className="ip-hero__stat"><span className="ip-hero__stat-num">{s.num}</span><span className="ip-hero__stat-label">{s.label}</span></div>
                ))}
              </div>
            </aside>
          </div>
        </header>

        {/* INTRO */}
        <section className="section ip-intro" aria-labelledby="intro-heading">
          <div className="container">
            <p className="section-eyebrow">Transforming Education Through Technology</p>
            <div className="ip-intro__layout">
              <div className="ip-intro__text">
                <h2 id="intro-heading">Custom Education Software Development That Empowers Institutions and Learners Across Pakistan and Beyond</h2>
                <p>Pakistan's education sector is at an inflection point. With over 60 million students enrolled across schools, colleges, and universities — and a rapidly growing EdTech market — the institutions that invest in the right digital infrastructure now will define educational outcomes for the next decade. At QllmSoft, we build that infrastructure.</p>
                <p>Our education software engineering team specialises in custom school management systems, Learning Management Systems (LMS), eLearning platforms, and mobile education applications — built around the specific curriculum structures, examination systems, and administrative workflows of Pakistani institutions and international schools alike. We have delivered platforms for institutions in <strong>Pakistan, the UAE, Saudi Arabia, and the UK</strong> — from single-campus primary schools to multi-branch university networks and corporate training departments.</p>
                <p>Global initiatives like those championed by <a href="https://www.unesco.org/education" target="_blank" rel="noopener noreferrer nofollow" aria-label="UNESCO education initiatives — external authority">UNESCO</a> increasingly emphasise digital access and personalised learning — goals our platforms are built to support at scale. Whether you are an HEC-affiliated university, a chain of private schools, or an EdTech startup building the next generation of online learning tools, QllmSoft provides the technical depth and delivery structure your project requires. Explore our <Link to="/mobile-app-development">mobile app development services</Link> or our <Link to="/custom-software-development-services">custom software capabilities</Link> for a broader view of what we deliver.</p>
                <div className="ip-intro__badges">
                  {['JazzCash & Easypaisa Fee Integration','Zoom & Google Meet Integration','HEC-Aligned Systems','GDPR-Compliant Data Handling'].map(b=><span key={b} className="ip-badge"><IconCheck s={13}/>{b}</span>)}
                </div>
              </div>
              <aside className="ip-intro__aside" aria-label="Education software impact metrics">
                {[
                  {Icon:IconTrending,  num:'3×',   label:'Student engagement with interactive LMS platforms'},
                  {Icon:IconZap,       num:'40%',  label:'Admin time saved with automated school management'},
                  {Icon:IconDollarSign,num:'60%',  label:'Lower cost than US or UK education software agencies'},
                  {Icon:IconUsers,     num:'50+',  label:'Education software projects successfully delivered'},
                ].map((s,i)=>(
                  <div key={i} className="ip-stat-card">
                    <div className="ip-stat-card__icon"><s.Icon s={20}/></div>
                    <div><span className="ip-stat-card__num">{s.num}</span><span className="ip-stat-card__label">{s.label}</span></div>
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
              <h2 id="services-heading">Education Software Development Services We Provide</h2>
              <p>Six core education technology solutions — each built to meet the unique administrative, pedagogical, and technical requirements of educational institutions in Pakistan and globally.</p>
            </div>
            <div className="ip-services__grid">
              {[
                {Icon:IconBook,     title:'School Management System (SMS)',
                  desc:'A fully integrated school management system that centralises admissions, student records, class scheduling, attendance tracking, examinations, report cards, and fee management — with dedicated portals for teachers, students, and parents. Designed for Pakistani educational frameworks and customisable for international curricula.',
                  tags:['Admissions','Attendance Tracking','Exam Management','Fee Collection','JazzCash/Easypaisa']},
                {Icon:IconCpu,      title:'Learning Management System (LMS) Development',
                  desc:'Custom LMS platforms with course content management, multimedia lesson delivery, assignment workflows, quiz and assessment engines, certificate generation, gamification elements, and real-time progress tracking dashboards — built for academic institutions and corporate training departments.',
                  tags:['Course Delivery','Assessments','Certificates','Gamification','SCORM/xAPI']},
                {Icon:IconVideo,    title:'Online Classes & Virtual Classroom Software',
                  desc:'Live online class platforms with integrated HD video, interactive whiteboards, hand-raise and polling tools, session recording, breakout rooms, and attendance auto-logging — connecting students and teachers reliably across Pakistan\'s diverse network conditions.',
                  tags:['Live Streaming','Whiteboard','Recordings','Attendance Auto-log','Zoom Integration']},
                {Icon:IconSmartphone,title:'Custom Education App Development',
                  desc:'Native Android and iOS education apps optimised for Pakistani 4G networks — offline lesson access, push notifications for assignments and results, parent-teacher messaging, and progress report delivery that keeps every stakeholder informed and engaged.',
                  tags:['React Native','Offline Mode','Push Notifications','Parent Portals','Android & iOS']},
                {Icon:IconBarChart, title:'Student Information & Analytics System',
                  desc:'Comprehensive student information systems with behavioural analytics, academic performance tracking, at-risk student identification, institutional KPI dashboards, and automated board-ready reporting — giving administrators actionable insight from their own data.',
                  tags:['Performance Analytics','At-Risk Alerts','KPI Dashboards','Board Reports','Data Export']},
                {Icon:IconDollarSign,title:'Fee Management & Accounting Integration',
                  desc:'Automated fee collection systems with JazzCash, Easypaisa, and bank transfer integration — late fee calculation, scholarship management, instalment plans, and real-time financial reporting for school accounts departments and parent-facing fee portals.',
                  tags:['JazzCash','Easypaisa','Scholarship Mgmt','Instalments','Financial Reports']},
              ].map((s,i)=>(
                <article key={i} className={`ip-service-card animate__animated ${svInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.08}s`}} itemScope itemType="https://schema.org/Service">
                  <div className="ip-service-card__icon"><s.Icon s={22}/></div>
                  <h3 className="ip-service-card__title" itemProp="name">{s.title}</h3>
                  <p className="ip-service-card__desc" itemProp="description">{s.desc}</p>
                  <div className="ip-service-card__tags">{s.tags.map(t=><span key={t} className="ip-stag">{t}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section ip-dark-band" ref={procRef} aria-labelledby="process-heading">
          <div className="container">
            <p className="section-eyebrow">How We Build Education Software</p>
            <div className="section-title">
              <h2 id="process-heading">Our Education Software Development Process</h2>
              <p>A collaborative, institution-centred process that ensures the software we build matches your real workflows — not generic education software assumptions.</p>
            </div>
            <ol className="ip-process__steps" aria-label="Education software development process steps">
              {[
                {n:'01',icon:'🔍',title:'Research & Institutional Analysis',desc:'We analyse your institution\'s unique structure — curriculum frameworks, assessment methods, fee systems, and reporting requirements. We also map technical constraints like existing systems and network infrastructure before designing anything.'},
                {n:'02',icon:'🎨',title:'UI/UX Design for Educators & Students',desc:'We design intuitive interfaces tested against real teacher, student, and parent mental models. Dashboards are clear, navigation is simple, and the system works for staff with varying levels of technical confidence.'},
                {n:'03',icon:'⚙️',title:'Agile Development & Institution Testing',desc:'We build in two-week sprints with institution staff involved in testing every major feature cycle. Real administrative scenarios and classroom situations are used to validate system behaviour before it reaches production.'},
                {n:'04',icon:'🔗',title:'Integration with Existing Systems & Platforms',desc:'We integrate with Zoom, Google Meet, Google Classroom, national board APIs, JazzCash, Easypaisa, and any existing ERP or library management systems the institution uses — with thorough data migration from legacy databases.'},
                {n:'05',icon:'🚀',title:'Deployment, Staff Training & Ongoing Support',desc:'We manage phased deployment to minimise disruption to active academic terms, provide staff training sessions and documentation, and deliver 30 days of free post-launch support for every engagement.'},
              ].map((step,i)=>(
                <li key={i} className={`ip-process__step animate__animated ${procInView?'animate__fadeInLeft':''}`} style={{animationDelay:`${i*0.09}s`}}>
                  <div className="ip-process__step-num">{step.n}</div>
                  <span className="ip-process__step-icon" aria-hidden="true">{step.icon}</span>
                  <div className="ip-process__step-body"><h4>{step.title}</h4><p>{step.desc}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section className="section ip-dark-band" ref={clientRef} aria-labelledby="clients-heading" style={{background:'linear-gradient(145deg,#1A365D,#2B6CB0)'}}>
          <div className="container">
            <p className="section-eyebrow">Who We Build For</p>
            <div className="section-title">
              <h2 id="clients-heading">Education Institutions We Serve</h2>
              <p>From single-campus primary schools to multi-branch university networks — our education software scales to match your institution's size and ambition.</p>
            </div>
            <div className="ip-clients__grid">
              {[
                {Icon:IconBook,      title:'Schools',              desc:'Primary and secondary schools requiring comprehensive school management software — admissions, attendance, timetabling, exams, fee collection, and parent communication under one platform.'},
                {Icon:IconBarChart,  title:'Colleges & Universities',desc:'Multi-faculty institutions needing student information systems, custom LMS platforms, examination management, result publication, and HEC-aligned academic reporting tools.'},
                {Icon:IconVideo,     title:'eLearning & EdTech Startups',desc:'EdTech companies building SaaS LMS products, tutoring marketplaces, online course platforms, or mobile-first education apps that need a technical partner from MVP to scale.'},
                {Icon:IconUsers,     title:'Corporate Training Departments',desc:'L&D teams at enterprises building custom internal training LMS platforms, compliance training systems, onboarding workflows, and skill assessment tools for employee development.'},
              ].map((c,i)=>(
                <article key={i} className={`ip-client-card animate__animated ${clientInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.1}s`}}>
                  <div className="ip-client-card__icon"><c.Icon s={20}/></div>
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
              <h2 id="why-heading">Why Educational Institutions Choose QllmSoft for Software Development in Pakistan</h2>
              <p>We combine education domain knowledge with software engineering expertise — and Pakistan-based development means your institution accesses all of that at significantly lower cost than Western providers.</p>
            </div>
            <div className="ip-why__grid">
              {[
                {Icon:IconBook,      title:'Education-Domain Expertise',                 desc:'Our team understands Pakistani academic structures, HEC requirements, Cambridge/Matric examination frameworks, and the operational realities of running schools and universities — not just the technical requirements.'},
                {Icon:IconShield,    title:'Data Security & Student Privacy',            desc:'All student data is handled with role-based access control, encrypted storage, and audit trails. Our platforms comply with student data protection standards across Pakistan, GDPR for UK/EU institutions, and FERPA for US-based institutions.'},
                {Icon:IconDollarSign,title:'60–70% Lower Cost Than Western EdTech Firms',desc:'Senior education software engineers in Pakistan deliver the same quality, features, and institutional alignment as US or UK EdTech agencies — at a fraction of the cost. Full IP ownership, no recurring licence fees.'},
                {Icon:IconCpu,       title:'Custom — Not Off-the-Shelf Adapted',         desc:'We build education software from the ground up around your institution\'s specific workflows. No compromising your processes to fit pre-built modules — the system adapts to you, not the reverse.'},
                {Icon:IconZap,       title:'Pakistan-Specific Payment Integrations',     desc:'JazzCash, Easypaisa, and bank transfer integrations built natively — so parents pay fees digitally and finance teams collect and reconcile without manual data entry or chasing cash payments.'},
                {Icon:IconTrending,  title:'Scalable Architecture for Institutional Growth',desc:'Whether you have 500 students or 50,000, our platforms are architected to scale — multi-campus support, multi-role access, and cloud-native deployment that grows with enrolment without performance degradation.'},
              ].map((w,i)=>(
                <article key={i} className={`ip-why-card animate__animated ${whyInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.08}s`}}>
                  <div className="ip-why-card__icon"><w.Icon s={20}/></div>
                  <h3 className="ip-why-card__title">{w.title}</h3>
                  <p className="ip-why-card__desc">{w.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="section ip-stack" aria-labelledby="stack-heading">
          <div className="container">
            <p className="section-eyebrow">Technology Stack</p>
            <div className="section-title">
              <h2 id="stack-heading">Technologies Behind Our Education Software</h2>
              <p>Modern, proven technologies selected for reliability, performance, and long-term maintainability — not trends.</p>
            </div>
            <div className="ip-stack__grid">
              {[
                {color:'#1A365D',label:'Backend',         items:['ASP.NET Core 8','Node.js','Python / Django','REST & GraphQL APIs','SignalR (real-time)']},
                {color:'#2B6CB0',label:'Frontend',        items:['React.js','Angular','Blazor','Tailwind CSS','Bootstrap 5']},
                {color:'#edb702',label:'Mobile',          items:['React Native','Flutter','Android (Kotlin)','iOS (Swift)','Offline-First PWA']},
                {color:'#276749',label:'Cloud & DevOps',  items:['Microsoft Azure','AWS','Docker','CI/CD Pipelines','Azure DevOps']},
              ].map((col,i)=>(
                <article key={i} className="ip-stack-col" style={{'--col-color':col.color}} aria-label={`${col.label} technologies`}>
                  <h3 className="ip-stack-col__label">{col.label}</h3>
                  <ul className="ip-stack-col__list">{col.items.map(item=><li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section ip-testimonials" ref={revRef} aria-labelledby="reviews-heading">
          <div className="container">
            <p className="section-eyebrow">Verified Client Reviews</p>
            <div className="section-title">
              <h2 id="reviews-heading">What Clients Say About QllmSoft Education Software</h2>
              <p>Independent reviews from clients across Freelancer and Upwork — UK, USA, UAE, Saudi Arabia, and Jordan.</p>
            </div>
            <div className="ip-reviews__grid">
              {[
                {name:'Khalid A.',    loc:'Riyadh, Saudi Arabia', img:'https://qllmsoft.com/images/khalid A.webp',   text:'"QllmSoft built our school management system exactly to our requirements — Arabic interface support, custom grading, and fee collection via local gateways. The team understood our operational context from day one."'},
                {name:'Neil P.',     loc:'Cardiff, United Kingdom',img:'https://qllmsoft.com/images/Neil P.webp',    text:'"The LMS QllmSoft built for our training department is intuitive, feature-rich, and has been adopted by our team far faster than previous off-the-shelf systems. Excellent technical work and clear communication throughout."'},
                {name:'Mohammad I.', loc:'Amman, Jordan',          img:'https://qllmsoft.com/images/Muhammad I.webp',text:'"Outstanding education software development — our university portal handles thousands of concurrent students without performance issues. The QllmSoft team is technically excellent and a genuine pleasure to work with."'},
                {name:'Fernando M.', loc:'Miramar, United States', img:'https://qllmsoft.com/images/fernandoM.webp', text:'"We chose QllmSoft for our EdTech startup\'s LMS platform and have not regretted it once. Clean architecture, responsive team, and a product that our users genuinely love. The best technical partner we have worked with."'},
              ].map((r,i)=>(
                <article key={i} className={`ip-review-card animate__animated ${revInView?'animate__fadeInUp':''}`} style={{animationDelay:`${i*0.1}s`}} itemScope itemType="https://schema.org/Review">
                  <div className="ip-review-card__stars" aria-label="5 out of 5 stars" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating"><meta itemProp="ratingValue" content="5"/><meta itemProp="bestRating" content="5"/>★★★★★</div>
                  <p className="ip-review-card__text" itemProp="reviewBody">{r.text}</p>
                  <div className="ip-review-card__author" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <img src={r.img} alt={`${r.name} — verified QllmSoft education software client from ${r.loc}`} loading="lazy" width="44" height="44"/>
                    <div><strong itemProp="name">{r.name}</strong><span>{r.loc} — Freelancer</span></div>
                  </div>
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
              <h2 id="faq-heading">Education Software Development FAQ — Pakistan &amp; Global</h2>
              <p>Answers to the most common questions educational institutions ask before commissioning custom software development.</p>
            </div>
            <div className="csd-faq__list">{FAQ_DATA.map((faq,i)=><FAQItem key={i} faq={faq} index={i}/>)}</div>
          </div>
        </section>

        {/* CTA */}
        <section className="section ip-cta" aria-labelledby="cta-heading">
          <div className="ip-cta__bg" aria-hidden="true"/>
          <div className="container ip-cta__inner">
            <div className="ip-cta__left">
              <p className="section-eyebrow" style={{color:'#edb702',textAlign:'left',margin:'0 0 12px'}}>Transform Your Institution</p>
              <h2 id="cta-heading">Ready to Build Custom Education Software in Pakistan?</h2>
              <p className="ip-cta__desc">Whether you need a school management system, a custom LMS, a mobile eLearning app, or a full EdTech platform — QllmSoft delivers the technical depth and institutional understanding your project requires.</p>
              <div className="ip-cta__buttons">
                <Link to="/contact" className="ip-btn-primary" aria-label="Get a free education software consultation from QllmSoft Pakistan">Get a Free Demo</Link>
                <a href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20education%20software!" target="_blank" rel="noopener noreferrer" className="ip-btn-whatsapp" aria-label="WhatsApp QllmSoft about education software development">💬 WhatsApp Us</a>
              </div>
              <div className="ip-cta__perks">{['✓ Free consultation','✓ Custom — not template-based','✓ JazzCash & Easypaisa integration','✓ 30-day post-launch support'].map(p=><span key={p}>{p}</span>)}</div>
            </div>
            <aside className="ip-cta__right">
              <div className="ip-cta__contact">
                <h3>Quick Contact</h3>
                <a href="mailto:info@qllmsoft.com" className="ip-cta__contact-row">📧 info@qllmsoft.com</a>
                <a href="https://wa.me/923348229288" target="_blank" rel="noopener noreferrer" className="ip-cta__contact-row">💬 WhatsApp — replies in 5 mins</a>
                <a href="tel:+923348229288" className="ip-cta__contact-row">📞 +92 334 8229288</a>
              </div>
              <nav className="ip-cta__related" aria-label="Related services">
                <p className="ip-cta__related-title">Related Services</p>
                <Link to="/healthcare-software-development-pakistan">Healthcare Software</Link>
                <Link to="/custom-software-development-services">Custom Software</Link>
                <Link to="/mobile-app-development">Mobile App Development</Link>
                <Link to="/ai-powered-software-solutions">AI Solutions</Link>
                <Link to="/outsource-software-development-to-pakistan">Outsource to Pakistan</Link>
              </nav>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};
export default EducationSoftware;
