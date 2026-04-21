import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ceoImg from '../assets/ceo-qllmsoft.jpg';
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
  }, []);

  return (
    <>
    <SEO
  title="About QllmSoft | Custom Software Development Company"
  description="Learn about QllmSoft, a custom software development company providing scalable web applications, ASP.NET Core solutions, secure API development, and enterprise software services for businesses worldwide."
  url="https://qllmsoft.com/about"
  image="https://qllmsoft.com/og-about.jpg"
  schema={{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "QllmSoft",
    "url": "https://qllmsoft.com",
    "foundingDate": "2015",
    "founder": {
      "@type": "Person",
      "name": "Zain Ul Abedin"
    }
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
            <h2>About QllmSoft | Custom Software Development Company</h2>
          </div>

          <div className="story-card">

  <p>
    

Since <strong>2015</strong>, we have helped startups, small businesses, and enterprises build scalable digital platforms using modern technologies such as <strong>ASP.NET</strong>, React, cloud infrastructure, and REST APIs.

Our development approach focuses on performance, security, and long-term scalability. From business management systems and enterprise dashboards to complex API integrations and software modernization, we deliver solutions that streamline operations and accelerate digital transformation.

With experience in international markets and diverse industries, QllmSoft provides reliable software engineering services tailored to each client’s technical and business needs.
  </p>

  <p>
    <Link to="/" style={{ fontWeight: "bold", textDecoration: "none" }}>QllmSoft</Link>{" "} is small yet skilled team of ASP.NET experts brings deep
    expertise across multiple domains, including HR and financial
    applications, CRM systems, and custom integrations. We pride ourselves
    on our commitment to quality and innovation, combining technical
    proficiency with creative problem-solving to deliver applications that
    drive productivity, streamline processes, and enhance customer
    engagement.
  </p>

  <h4>Our Top Services Include</h4>

  <ul className="story-list">
    <li>
      <strong>Custom Web Application Development:</strong>
      We develop high-performance custom web applications using ASP.NET Core, React, and modern cloud technologies. Our solutions range from startup platforms to enterprise-grade business systems.
    </li>

    <li>
      <strong>API Integration and Development:</strong>
      Secure and optimized API solutions to connect and enhance
      functionality across your systems.
    </li>

    <li>
      <strong>Legacy Application Migration and Modernization:</strong>
      We build secure REST APIs and integrate third-party systems to enable seamless communication between web applications, mobile apps, and enterprise platforms.
    </li>
  </ul>

  <p>
    Our focus on high performance, seamless integration, and security
    ensures that every solution we create meets the evolving needs of our
    clients. With expertise in MS SQL Server, full-stack development, and
    cloud-ready applications, QLLMSoft is here to help you achieve your
    business vision with reliable, innovative solutions.
  </p>

</div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-features reveal">
        <div className="container">
          <div className="section-title">
            <h2>Our Capabilities</h2>
          </div>

          <div className="features-grid">
            <FeatureCard icon={Users} title="Custom Software Development Solutions" description="Solutions aligned with strategy" />
            <FeatureCard icon={Shield} title="Secure Enterprise Software Architecture" description="Built for performance & safety" />
            <FeatureCard icon={Zap} title="ASP.NET, React & Cloud Technologies" description="ASP.NET, React, Cloud" />
            <FeatureCard icon={Check} title="Agile Software Development Process" description="Transparent timelines" />
            <FeatureCard icon={Headphones} title="Software Maintenance & Technical Support" description="Continuous maintenance" />
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
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" />
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
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" />
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
            <img src={ceoImg} alt="CEO" />
          </div>

            <div className="ceo-content">
              <h3>Message from the CEO</h3>

              <p>
              With years of experience in software engineering and international projects, our team focuses on building reliable digital solutions that help businesses grow in a competitive digital landscape.
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
