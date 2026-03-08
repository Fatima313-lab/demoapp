import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/mock';
import './Projects.css';

const Projects = () => {
   useEffect(() => {
      const reveals = document.querySelectorAll('.reveal');
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        { threshold: 0.15 }
      );
  
      reveals.forEach((el) => observer.observe(el));
  
      return () => {
        reveals.forEach((el) => observer.unobserve(el));
      };
    }, []);
  return (
    <main className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero reveal">
        <div className="container">
          <h1>Software Development Portfolio & Case Studies</h1>
          <p>
          Explore QllmSoft’s portfolio of custom software development projects, including web applications, mobile apps, enterprise systems, and digital platforms delivered for startups and global businesses.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section projects-grid-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Software Development Projects</h2>
            <p>Real-world case studies showcasing our expertise in building scalable, secure, and high-performance digital solutions.</p>
          </div>
          <div className="projects-grid">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section industries-section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Industries We Serve with Custom Software Solutions</h2>
            <p>Industry-specific software development tailored to compliance, scalability, and operational efficiency.</p>
            <p>QllmSoft delivers custom software solutions across industries, helping businesses modernize operations, improve customer experiences, and scale efficiently. Our portfolio includes enterprise platforms, SaaS applications, mobile solutions, automation systems, and cloud-based software products built with modern technologies.</p>
          </div>
          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3>Finance & Banking</h3>
              <p>Secure fintech software, digital banking platforms, payment gateway integrations, and financial management systems designed with advanced encryption and regulatory compliance.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h3>Healthcare</h3>
              <p>HIPAA-compliant healthcare software, telemedicine platforms, patient management systems, and medical data solutions focused on privacy and reliability.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <h3>Education</h3>
              <p>E-learning platforms, LMS systems, student portals, virtual classrooms, and education management software that enhance digital learning experiences.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              </div>
              <h3>E-Commerce</h3>
              <p>Custom e-commerce development, marketplace platforms, inventory systems, secure payment integrations, and scalable online store solutions.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <h3>Logistics</h3>
              <p>Supply chain management systems, fleet tracking software, warehouse automation platforms, and logistics analytics dashboards.</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h3>Real Estate</h3>
              <p>Property management software, listing portals, real estate CRM systems, and digital transaction management platforms.</p>
            </div>
          </div>
        </div>
      </section>
     {/* Portfolio Download Section */}
    <section className="section portfolio-download-section">
      <div className="container">
        <div className="portfolio-box reveal">

          <h2>Download Our Software Development Portfolio</h2>

          <p>
          Get a complete overview of our software development capabilities, technical expertise, and successful project implementations. Our company portfolio highlights enterprise solutions, modern architectures, and industry-specific digital transformations.
          </p>

          <a
            href="/pdfs/QllmSoft-Company-Portfolio.pdf"
            className="btn btn-primary portfolio-download-btn"
            download
          >
            Download Software Portfolio (PDF) ↓
          </a>

        </div>
      </div>
    </section>
      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Start Your Custom Software Project</h2>
            <p>Partner with QllmSoft to design and develop scalable web applications, enterprise systems, and mobile solutions tailored to your business goals.</p>
            <Link to="/contact" className="btn btn-primary">Request Free Consultation</Link>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
    <section className="section faq-section">
  <div className="container">

    <div className="faq-header reveal">
      {/* <span className="faq-badge">Knowledge Base</span> */}
      <h2>Frequently Asked <span>Questions</span></h2>
      <p>
        Everything you need to know about our custom software development process.
      </p>
    </div>

    <div className="faq-container">

      <details className="faq-item reveal">
        <summary>What types of software projects has QllmSoft delivered?</summary>
        <p>
          QllmSoft has delivered custom web applications, enterprise software systems, mobile applications, SaaS platforms, automation tools, and digital transformation solutions for businesses worldwide.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>Do you provide custom software development case studies?</summary>
        <p>
        Yes. Our portfolio includes detailed case studies highlighting business challenges, solution architecture, technologies used, and measurable results.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>Which technologies are used in your software projects?</summary>
        <p>
        We use modern technologies including ASP.NET Core, React, cloud infrastructure, mobile frameworks, secure APIs, and scalable database architectures.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>Which technologies are used in your software projects?</summary>
        <p>
        We use modern technologies including ASP.NET Core, React, cloud infrastructure, mobile frameworks, secure APIs, and scalable database architectures.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>Do you work with international clients?</summary>
        <p>
        Yes. QllmSoft partners with startups, SMEs, and enterprises across global markets, delivering remote software development services.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>Can startups hire QllmSoft for MVP development?</summary>
        <p>
        Absolutely. We help startups validate ideas through MVP development, scalable product architecture, and rapid prototyping.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>Do you sign NDAs for confidential projects?</summary>
        <p>
        Yes. We ensure full confidentiality through Non-Disclosure Agreements and secure development practices.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>Is my data secure when working with QllmSoft?</summary>
        <p>
          Yes. We follow industry best practices in encryption, access control,
          and secure architecture to protect your business data and IP.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>Do you provide support after delivery?</summary>
        <p>
          We offer maintenance, optimization, monitoring, and enhancements to
          ensure long-term success and partnership.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>Why choose QllmSoft over other companies?</summary>
        <p>
          We focus on business outcomes, not just code — understanding your
          processes and building software that improves efficiency and growth.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>How can I start a project with QllmSoft?</summary>
        <p>
          Contact us for a free consultation. We’ll discuss your idea, recommend
          the best technical approach, and guide you through next steps.
        </p>
      </details>
            <p>QllmSoft is a custom software development company specializing in enterprise software solutions, web application development, mobile app development, and system modernization. Our project portfolio demonstrates our ability to deliver secure, scalable, and business-focused digital solutions across industries.</p>
    </div>
  </div>
</section>
    </main>
  );
};

export default Projects;
