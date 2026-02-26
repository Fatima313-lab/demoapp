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
            <h2>About QLLMSoft</h2>
          </div>

          <div className="story-card">

  <p>
    Since <strong>2014</strong>,  <Link to="/" style={{ fontWeight: "bold", textDecoration: "none" }}>QllmSoft</Link>{" "} has been a dedicated partner in
    delivering high-performance, scalable, and secure technology solutions
    to clients worldwide. As a specialized software development company,
    we leverage the power of <strong>ASP.NET</strong> and cutting-edge
    technologies to create custom web, desktop, and mobile applications
    that empower businesses to thrive.
  </p>

  <p>
    At  <Link to="/" style={{ fontWeight: "bold", textDecoration: "none" }}>QllmSoft</Link>{" "}, our small yet skilled team of ASP.NET experts brings deep
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
      Tailored ASP.NET solutions for businesses of all sizes,
      from dynamic websites to complex enterprise-level applications.
    </li>

    <li>
      <strong>API Integration and Development:</strong>
      Secure and optimized API solutions to connect and enhance
      functionality across your systems.
    </li>

    <li>
      <strong>Legacy Application Migration and Modernization:</strong>
      Transforming outdated software into modern, efficient applications
      using the latest ASP.NET frameworks.
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
            <FeatureCard icon={Users} title="Tailored Development" description="Solutions aligned with strategy" />
            <FeatureCard icon={Shield} title="Secure Architecture" description="Built for performance & safety" />
            <FeatureCard icon={Zap} title="Modern Technologies" description="ASP.NET, React, Cloud" />
            <FeatureCard icon={Check} title="Reliable Delivery" description="Transparent timelines" />
            <FeatureCard icon={Headphones} title="Long-Term Support" description="Continuous maintenance" />
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
                At QLLMSoft, we believe technology should empower growth.
                Our focus is on delivering reliable, scalable, and
                forward-thinking software solutions that help clients
                succeed in a rapidly evolving digital world.
              </p>

              <p>
                We value transparency, long-term partnerships,
                and innovation in everything we build.
              </p>
              
              <div className="ceo-identity">
              <h4>Zain Ul Abedin</h4>
              <span>Founder & CEO — QLLMSoft</span>
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
            <p>Partner with QLLMSoft today.</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
