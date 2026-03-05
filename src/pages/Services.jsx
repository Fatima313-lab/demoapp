import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { servicesData } from '../data/mock';
import { useInView } from 'react-intersection-observer';
import './Services.css';
import 'animate.css';

/* ---------------- Service Card ---------------- */
const ServiceCardDetailed = ({ service, isOdd, id }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
          inView
            ? isOdd
              ? 'animate__fadeInLeft'
              : 'animate__fadeInRight'
            : ''
        }`}
        style={{
          flex: 1,
          opacity: inView ? 1 : 0,
          animationDuration: '0.6s',
        }}
      >
       <div className="service-image-box">
        <img
          src={service.image}
          alt={service.name}
        />
      </div>
      </div>

      {/* Text */}
      <div
        className={`service-text animate__animated ${
          inView
            ? isOdd
              ? 'animate__fadeInRight'
              : 'animate__fadeInLeft'
            : ''
        }`}
        style={{
          flex: 1,
          opacity: inView ? 1 : 0,
          animationDuration: '0.6s',
          animationDelay: '0.1s',
        }}
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

/* ---------------- Main Page ---------------- */
const Services = () => {
const location = useLocation(); // <-- ADDED for hash scrolling

  useEffect(() => {
    // Scroll to service if hash is present
   if (location.hash) {

  const scrollToHash = () => {
    const element = document.querySelector(location.hash);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // 🔥 Run twice to ensure DOM ready
  scrollToHash();
  setTimeout(scrollToHash, 150);
}


    // Reveal animations
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, [location.hash]); // <-- CHANGED dependency

  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero reveal">
        <div className="container">
          <h1>Software Development Services for Web, Mobile & Enterprise Applications</h1>
          <p>
          QllmSoft provides custom software development services including ASP.NET web applications, mobile apps, enterprise software systems, and secure API development for businesses worldwide.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section services-list">
        <div className="container">
          <div className="section-title">
            <h2>Our Software Development Services</h2>
            <p>End-to-end development services for startups, businesses, and enterprise organizations.</p>
          </div>
          <div className="services-detailed-grid">
           {servicesData.map((service, index) => {
            // Generate a short id for each service (used for scrolling)
            const serviceId =
            service.slug ||
            service.name
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9\-]/g, '');


            return (
              <ServiceCardDetailed
                key={service.id}
                service={service}
                isOdd={index % 2 === 0}
                id={serviceId} // <-- use the generated id
              />
            );
          })}
            {/* {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} variant="detailed" />
            ))} */}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      {/* <section className="section technologies-section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Technologies We Use</h2>
            <p>We leverage the latest technologies to build robust solutions</p>
          </div>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>Frontend</h3>
              <ul>
                <li>React.js</li>
                <li>Angular</li>
                <li>Blazor</li>
                <li>HTML5 / CSS3</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <ul>
                <li>ASP.NET Core</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>PHP / Laravel</li>
                <li>Java</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Mobile</h3>
              <ul>
                <li>Flutter</li>
                <li>React Native</li>
                <li>Swift (iOS)</li>
                <li>.Net MOI</li>
                <li>Xamarin</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Database & Cloud</h3>
              <ul>
                <li>SQL Server</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>AWS / Azure</li>
                <li>Google Cloud</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Development Process</h2>
            <p>A proven methodology that ensures project success</p>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">01</div>
              <h3>Discovery</h3>
              <p>We analyze your requirements, goals, and challenges to define the project scope.</p>
            </div>
            <div className="process-step">
              <div className="process-number">02</div>
              <h3>Planning</h3>
              <p>Creating detailed project roadmap, architecture design, and timeline.</p>
            </div>
            <div className="process-step">
              <div className="process-number">03</div>
              <h3>Development</h3>
              <p>Agile development with regular iterations and client feedback integration.</p>
            </div>
            <div className="process-step">
              <div className="process-number">04</div>
              <h3>Testing</h3>
              <p>Comprehensive testing to ensure quality, security, and performance.</p>
            </div>
            <div className="process-step">
              <div className="process-number">05</div>
              <h3>Deployment</h3>
              <p>Smooth deployment and launch with zero downtime strategy.</p>
            </div>
            <div className="process-step">
              <div className="process-number">06</div>
              <h3>Support</h3>
              <p>Ongoing maintenance, updates, and 24/7 technical support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can help transform your business ideas into reality</p>
            <Link to="/contact" className="btn btn-primary">Get Free Consultation</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
