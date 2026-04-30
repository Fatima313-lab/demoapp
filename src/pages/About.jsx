import React, { useEffect } from 'react';
import SEO from "../components/SEO";
import { Link } from 'react-router-dom';
import ceoImg from '../assets/ceo-qllmsoft.jpg';
import OurMissionImg from '../assets/ourMission.jpg';
import ourvisionImg from'../assets/OurVision.jpg';
import {
  Eye,
  Target,
  Users,
  Zap,
  Shield,
  Check,
  Headphones,
  Linkedin
} from 'lucide-react';

import { aboutContent } from '../data/mock';
import './About.css';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card reveal">
    <div className="feature-icon">
      <Icon size={24} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const About = () => {

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <SEO
  title="About QllmSoft | Leading Software House in Pakistan"
  description="Learn about QllmSoft, a custom software development company providing scalable web applications, ASP.NET Core solutions, secure API development, and enterprise software services for businesses worldwide."
  url="https://qllmsoft.com/about"
  image="https://qllmsoft.com/og-about.jpg"
  schema={{
    "@context": "https://schema.org",
    "@type": "SoftwareBusiness",
    "name": "QllmSoft",
    "url": "https://qllmsoft.com",
    "foundingDate": "2015",
    "founder": {
      "@type": "Person",
      "name": "Zain Ul Abedin",
      "jobTitle": "CEO"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Pakistan",
      "addressLocality": "Lalamusa"
    },
    "knowsAbout": ["ASP.NET Core", "SaaS Development", "Enterprise Software", "Cloud Architecture"],
    "sameAs": [
      "https://www.linkedin.com/in/zain-ul-abedin-b09a613b/",
      "https://www.upwork.com/freelancers/~0170e20f8803389a86"
    ]
  }}
/>
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero reveal">
        <div className="container">
          <h1 style={{color: 'white'}}>{aboutContent.heroTitle}</h1>
          <p style={{color: 'white'}}>{aboutContent.heroSubtitle}</p>
          <a href="#company" className="btn btn-primary">Discover More</a>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section id="company" className="section company-story reveal">
        <div className="container">

          <div className="section-title">
            <h2>About QllmSoft | Pakistan's Leading ASP.NET & Custom Enterprise Software Development Agency Since 2015</h2>
          </div>

          <div className="story-card">
            {/*QllmSoft started in 2015 with a clear purpose: to build software that businesses can trust for years ,not months.what began as small , focused engineering team in pakistan has grown into  a global  ASP.NET and enterprise software development partner serving clients across The Pakistan , UK , USA , UAE and Saudia Arabia.
            Our growth has never been accidental. It came from consistent hard work, smart decision making,
  and a commitment to engineering excellence. Over the past decade, we have delivered  50+ production ready projects  for 50+ satisfied clients , maintained a
  100% on time delivery record, and earned a verified 100% Upwork Job Success Score , all through honesty, discipline, and
  serious technical capability. QllmSoft is built by engineers who take their craft seriously. We don’t chase every technology
  we specialize. Our core strength lies in ASP.NET Core, C#, enterprise systems, secure APIs,
  cloud ready architectures, and long term business automation solutions. Every system we build
  is designed for scalability, security, and maintainability.

  Our vision is simple: to become the most trusted ASP.NET and enterprise software development
  company in the region , a team known for clarity, reliability, and engineering discipline.
  We believe great software is not just written it is planned, structured, reviewed, and delivered
  with responsibility. That is the standard we follow in every project. */}


  <p>
    Founded in <strong>2015</strong>, QllmSoft is a professional software development
    agency based in Pakistan, specialising in enterprise-grade digital solutions for
    businesses across Pakistan, the UK, USA, UAE, and Saudi Arabia. Over 10+ years of
    operation, our agency has delivered <strong>50+ production-ready projects</strong> for{' '}
    <strong>50+ satisfied clients</strong> — maintaining a <strong>100% on-time delivery
    record</strong> and a verified 100% Upwork Job Success Score throughout.
  </p>

  <p>
    <Link to="/" style={{ fontWeight: 'bold', textDecoration: 'none' }}>QllmSoft</Link>{' '}
    is a full-service technology agency bringing deep expertise across enterprise web
    application development, mobile engineering, REST and GraphQL API development, cloud
    infrastructure, and AI-powered software solutions. Our team of certified ASP.NET Core
    architects, React engineers, mobile developers, and solution architects combines
    technical depth with real business domain knowledge — delivering software that drives
    operational efficiency and measurable business growth.
  </p>

  <p>
    Every engagement begins with a formal requirements discovery process, followed by a
    fixed-price proposal and documented project scope — approved by the client before a
    single line of code is written. This approach eliminates scope creep, budget surprises,
    and delivery uncertainty — and is why 50+ businesses across four continents have chosen
    QllmSoft as their long-term technology partner.
  </p>

  <h4>Our Core Services</h4>

  <ul className="story-list">
    <li>
     <strong><Link to="/services/web-development">Custom Web Application Development</Link></strong>{' '}
      High-performance enterprise web applications built on ASP.NET Core 8, React, and
      Microsoft Azure — engineered for scalability, security, and long-term maintainability.
      From startup MVPs to complex enterprise platforms.
    </li>
    <li>
      <strong><Link to="/services/mobile-development">Mobile App Development</Link></strong>{' '}
      Cross-platform Android and iOS applications built using Flutter and React Native —
      with offline-first architecture, API integration, and App Store/Play Store deployment
      included as standard.
    </li>
    <li>
      <strong>REST &amp; GraphQL API Development:</strong>{' '}
      Secure, documented, and tested API solutions with OpenAPI 3.0 specification, JWT
      authentication, and OWASP Top 10 compliance — enabling seamless integration across
      web apps, mobile platforms, and enterprise systems.
    </li>
    <li>
      <strong>Legacy System Modernisation:</strong>{' '}
      Phased, zero-disruption migration from .NET Framework to ASP.NET Core 8 — with full
      business logic preservation, database migration, and post-launch support included.
    </li>
    <li>
      <strong>AI-Powered Software Solutions:</strong>{' '}
      Machine learning integrations, NLP pipelines, computer vision features, and LLM-powered
      automation tools embedded directly into your existing business software — measurable ROI,
      not proof-of-concept demos.
    </li>
  </ul>

  <p>
    With expertise spanning SQL Server, clean architecture patterns, CQRS, domain-driven
    design, Docker, Kubernetes, Azure, and AWS — QllmSoft is the technology agency built
    to help your business compete and grow in the digital economy.
  </p>

</div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
<section className="section" style={{ background: '#1A202C', padding: '48px 0' }} aria-label="QllmSoft agency statistics">
  <div className="container">
    <div className="why-grid" style={{ textAlign: 'center' }}>
      <div>
        <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#63B3ED' }}>10+</div>
        <div style={{ color: '#CBD5E0', marginTop: '8px', fontWeight: '600' }}>Years in Operation</div>
        <div style={{ color: '#718096', fontSize: '0.85rem' }}>Founded 2015</div>
      </div>
      <div>
        <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#63B3ED' }}>50+</div>
        <div style={{ color: '#CBD5E0', marginTop: '8px', fontWeight: '600' }}>Projects Delivered</div>
        <div style={{ color: '#718096', fontSize: '0.85rem' }}>Across 6 Industries</div>
      </div>
      <div>
        <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#63B3ED' }}>50+</div>
        <div style={{ color: '#CBD5E0', marginTop: '8px', fontWeight: '600' }}>Happy Clients</div>
        <div style={{ color: '#718096', fontSize: '0.85rem' }}>UK, USA, UAE, Pakistan & more</div>
      </div>
      <div>
        <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#63B3ED' }}>100%</div>
        <div style={{ color: '#CBD5E0', marginTop: '8px', fontWeight: '600' }}>On-Time Delivery</div>
        <div style={{ color: '#718096', fontSize: '0.85rem' }}>Every Project, Every Time</div>
      </div>
    </div>
  </div>
</section>


{/*<div className="trust-badges-container" style={{ background: '#f8fafc', padding: '40px 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
  <div className="container">
    <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#718096', marginBottom: '25px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
      Verified Excellence & Technical Standards
    </p>
    
    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
      
     
      <div style={{ textAlign: 'center', minWidth: '120px' }}>
        <svg width="100" height="28" viewBox="0 0 101.4 30" xmlns="https://upload.wikimedia.org/wikipedia/commons/f/f4/Upwork_Logo.svg" style={{marginBottom: '5px'}}>
        
        </svg>
        <div style={{ fontSize: '10px', fontWeight: '800', color: '#14a800' }}>100% SUCCESS</div>
      </div>

   \
      <div style={{ textAlign: 'center', minWidth: '120px', opacity: '0.8' }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" alt="ASP.NET Core 8 Architect" style={{ height: '35px' }} />
        <div style={{ fontSize: '10px', fontWeight: 'bold', marginTop: '5px', color: '#4A5568' }}>ENTERPRISE ARCH</div>
      </div>

   
      <div style={{ textAlign: 'center', minWidth: '120px', opacity: '0.8' }}>
        <img src="https://owasp.org/assets/images/logo.png" alt="OWASP Security Standard" style={{ height: '35px' }} />
        <div style={{ fontSize: '10px', fontWeight: 'bold', marginTop: '5px', color: '#4A5568' }}>SECURE CODE</div>
      </div>

      <div style={{ textAlign: 'center', minWidth: '120px', opacity: '0.8' }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" alt="Azure Infrastructure" style={{ height: '30px' }} />
        <div style={{ fontSize: '10px', fontWeight: 'bold', marginTop: '5px', color: '#4A5568' }}>CLOUD NATIVE</div>
      </div>

     
      <div style={{ textAlign: 'center', minWidth: '120px', opacity: '0.8' }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Frontend" style={{ height: '30px' }} />
        <div style={{ fontSize: '10px', fontWeight: 'bold', marginTop: '5px', color: '#4A5568' }}>MODERN UI</div>
      </div>

    </div>
  </div>
</div>
*/}

      {/* SERVICES */}
      <section className="section services-features reveal">
        <div className="container">
          <div className="section-title">
            <h2>Our Capabilities</h2>
          </div>

          <div className="features-grid">
          <FeatureCard icon={Users} title="10+ Years of Proven Delivery" description="50+ enterprise solutions delivered since 2015 for clients across Pakistan, UK, USA & UAE" />
<FeatureCard icon={Shield} title="OWASP-Compliant Security by Default" description="Security built into architecture — not patched on after launch" />
<FeatureCard icon={Zap} title="ASP.NET Core, React, Flutter & Azure" description="Full Microsoft .NET ecosystem plus modern frontend and cloud infrastructure" />
<FeatureCard icon={Check} title="Fixed-Price, 100% On-Time Delivery" description="Formal scope agreed before development begins — no surprises, no scope creep" />
<FeatureCard icon={Headphones} title="30-Day Post-Launch Support Included" description="Every project includes hyper-care, monitoring, and long-term maintenance options" />
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="section vision-mission reveal">
        <div className="container">
          <div className="section-title">
            <h2>Our Vision & Mission</h2>
          </div>

          <div className="vm-stack">

            <div className="vm-row">
              <div className="vm-image">
                <img src={ourvisionImg} alt="Our Vision" />
              </div>

              <div className="vm-content">
                <div className="vm-icon"><Eye size={26} /></div>
                <h3>Our Vision</h3>
                <p>{aboutContent.vision}</p>
              </div>
            </div>

            <div className="vm-row reverse">
              <div className="vm-content">
                <div className="vm-icon"><Target size={26} /></div>
                <h3>Our Mission</h3>
                <p>{aboutContent.mission}</p>
              </div>

              <div className="vm-image">
                <img src={OurMissionImg} alt="Our Mission" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CEO SECTION */}
      <section className="section ceo-section reveal">
        <div className="container">

          <div className="ceo-card">

           <div className="ceo-image">
            <img src={ceoImg} alt="Zain Ul Abedin - Founder and CEO of QllmSoft Pakistan" />
          </div>

            <div className="ceo-content">
              <h3>Message from the CEO</h3>

              <p>
              Since founding QllmSoft in 2015, our agency has grown from a specialist .NET consultancy
into a full-service software development agency trusted by 50+ businesses across Pakistan,
the UK, USA, UAE, Saudi Arabia, and Jordan. Every project we take on carries a personal
commitment from our leadership to deliver on time, within budget, and to a standard we are
proud to put our name on — backed by a 100% on-time delivery record and a verified 100%
Upwork Job Success Score.
              </p>

          
              
              <div className="ceo-identity">
              <h4>Zain Ul Abedin</h4>
              <span>Founder & CEO — QllmSoft</span>
            </div>

              <a
                href="https://www.linkedin.com/in/zain-ul-abedin-b09a613b/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-btn"
              >
                <Linkedin size={18} />
               
              </a>
              

            </div>
            
          </div>
        </div>
      </section>

{/*}
  <section className='faq'>
    <h2>Frequently Asked Questions</h2>
    <h3>What does QllmSoft specialize in?</h3>
    <p></p>
    <h3>How long has QllmSoft been operating?</h3>
    <p></p>
    <h3>what makes Qllmsoft different fro other software agencies</h3>
    <p></p>
    <h3>Does Qllmsoft work with international clients?</h3>
    <p></p>
    <h3>what types of projects does QllmSoft handle?</h3>
    <p></p>
    <h3>how does QllmSoft start a new project?</h3>
    <p></p>
    <h3>What is the typical timeline for a QllmSoft project?</h3>
    <p></p>
  
  </section>
  */}

      {/* CTA */}
      <section className="section cta-section reveal">
        <div className="container">
          <div className="cta-content">
            <h2>Let’s Build Something Exceptional</h2>
            <p>Partner with QllmSoft today.</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
    </>
  );
};

export default About;
