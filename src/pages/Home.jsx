import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import HeroSlider from '../components/HeroSlider';
import ServiceCard from '../components/ServiceCard';
import { homeServices, trustedPartners } from '../data/mock';

import ProjectSections from '../components/ProjectSections';
import TechnologiesSlider from '../components/TechnologiesSlider';
import TestimonialSection from '../components/TestimonialSection';
import StatsSection from '../components/StatsSection';

import {
  ShieldCheck,
  MessageCircle,
  Rocket,
  Layers
} from 'lucide-react';

import './Home.css';
import 'animate.css';

const Home = () => {

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <main className="home-page">

      {/* Hero */}
      <HeroSlider />

      {/* About */}
      <section className="section about-section bg-light" ref={aboutRef}>
        <div className="container">
          <div className="about-content">

            <div className={`about-image animate__animated ${aboutInView ? 'animate__fadeInLeft' : ''}`}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="ASP.NET Core development team in Pakistan working on enterprise web applications"
                loading="lazy"
              />
            </div>

            <div className={`about-text animate__animated ${aboutInView ? 'animate__fadeInRight' : ''}`}>
            <h2 className="about-title">
  Leading ASP.NET Core Development Company in Pakistan
</h2>

<p>
  QllmSoft is a Pakistan-based software development company specializing in 
  ASP.NET Core development, custom web application development, and secure API development services. 
  We build scalable, enterprise-grade solutions for startups and growing businesses worldwide.
</p>

              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services-section" ref={servicesRef}>
        <div className="container">

          <div className="section-title">
          <h2>
  ASP.NET Core, Web Application & API Development Services in Pakistan
</h2>

<p>
  Custom-built enterprise solutions using Microsoft technologies, modern web frameworks, and secure API architecture.
</p>
          </div>

          <div className="services-grid">
            {homeServices.map((service, index) => {

              const animation =
                index < 2
                  ? 'animate__fadeInLeft'
                  : 'animate__fadeInRight';

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

        </div>
      </section>

   
      {/* Why Choose Us ⭐ NEW */}
      <section className="section why-section">
        <div className="container">

          <div className="section-title">
          <h2>
  Why Choose QllmSoft for ASP.NET Core Development in Pakistan?
</h2>
          </div>

          <div className="why-grid">

            <div className="why-card">
            <h4>Expert ASP.NET Core Developers</h4>
            <p>Experienced in building secure, scalable enterprise-grade web and API solutions.</p>
            </div>

            <div className="why-card">
            <h4>Scalable Microsoft Architecture</h4>
            <p>We design high-performance ASP.NET Core applications optimized for growth.</p>
            </div>

            <div className="why-card">
            <h4>Secure API Development</h4>
            <p>RESTful API architecture with authentication, performance optimization, and integration capabilities.</p>
            </div>

            <div className="why-card">
            <h4>Long-Term Technical Partnership</h4>
            <p>Ongoing maintenance and scaling support for your ASP.NET Core applications.</p>
            </div>

          </div>

        </div>
      </section>

      <section className="section expertise-section">
  <div className="container">

    <div className="section-title">
      <h2>Our ASP.NET Core Development Expertise</h2>
    </div>

    <p>
      As a specialized ASP.NET Core development company in Pakistan, we deliver:
    </p>

    <ul>
      <li>Custom enterprise web application development</li>
      <li>RESTful API development and third-party integrations</li>
      <li>Migration to ASP.NET Core from legacy systems</li>
      <li>Cloud-ready and scalable architecture design</li>
      <li>Performance optimization and security implementation</li>
    </ul>

  </div>
</section>

      {/* Optional Stats — Enable if ready */}
      <StatsSection />

      {/* Projects */}
      <section className="section projects-section">
        <ProjectSections />
      </section>

      {/* Testimonials */}
      <section className="section testimonial-section">
        <TestimonialSection />
      </section>

      {/* Technologies */}
      <section className="section tech-section">
        <TechnologiesSlider />
      </section>

     {/* Trusted Partners */}
      <section className="section partners-section">
        <div className="container">

          <div className="section-title">
            <h2>Trusted By Our Clients</h2>
          </div>

          <div className="partners-grid">
            {trustedPartners.map((partner, index) => (
              <div key={index} className="partner-logo">
                <a 
                  href={partner.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src={partner.logo} alt={partner.name} />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA ⭐ Improved */}
      <section className="section cta-section">
        <div className="container">

          <div className="cta-content">

          <h2>
  Hire ASP.NET Core Developers in Pakistan
</h2>

<p>
  Discuss your web application or API development project with our expert ASP.NET Core team today.
</p>

            <div className="cta-buttons">

            <Link to="/asp-net-core-development-pakistan" className="btn btn-primary">
  Get ASP.NET Core Consultation
</Link>
           
            </div>

          </div>

        </div>
      </section>

      <section className="section faq-section">
  <div className="container">

    <div className="section-title">
      <h2>Frequently Asked Questions</h2>
    </div>

    <div className="faq-content">

      <h4>Why choose ASP.NET Core for enterprise applications?</h4>
      <p>
        ASP.NET Core offers high performance, security, scalability, and cross-platform capabilities,
        making it ideal for enterprise web and API development.
      </p>

      <h4>Do you provide ASP.NET Core development services in Pakistan?</h4>
      <p>
        Yes, QllmSoft is a Pakistan-based ASP.NET Core development company serving clients locally and internationally.
      </p>

      <h4>Can I hire dedicated ASP.NET Core developers?</h4>
      <p>
        We provide dedicated ASP.NET Core developers for startups, SMEs, and enterprise projects.
      </p>

    </div>

  </div>
</section>

    </main>
  );
};

export default Home;
