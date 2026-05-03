import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './TermsofServices.css';
import heroImage from "../assets/termsofservices.jpg"; // Replace with your own hero image

const TermsOfServices = () => {
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
    <main className="tos-page">

      {/* Hero Section */}
      <section
        className="tos-hero reveal"
        style={{
          background: `linear-gradient(135deg, rgba(26,54,93,0.85), rgba(43,108,176,0.15)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "90px 0",
          textAlign: "center",
          color: "#fff",
          marginTop: "-30px",
        }}
      >
        <div className="container">
          <h1>Terms of Service</h1>
          <p className="tos-hero-description">
            Welcome to QllmSoft! By using our website and services, you agree to the rules and guidelines outlined here. Please review carefully before engaging with our platform.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="tos-content">
        <div className="container">

          <article>
            <h2>Eligibility</h2>
            <p>
             <Link to="/" style={{ fontWeight: "bold", textDecoration: "none" }}>QllmSoft</Link>{" "} is committed to offering its services to users who provide accurate information and follow our platform guidelines. Responsible use of our services ensures a seamless experience.
            </p>
          </article>

          <article>
            <h2>Our Services</h2>
            <p>We provide a range of professional solutions to help your business grow, tailored to your unique requirements:</p>
            <ul>
                <li>Custom Web Application Development</li>
                <li>Mobile App Development (iOS & Android)</li>
                <li>Enterprise & Custom Software Development</li>
                <li>API Development & System Integration</li>
                <li>Legacy Software Modernization</li>
                <li>Digital Marketing & SEO</li>
            </ul>
            </article>

          <article>
            <h2>Usage Guidelines</h2>
            <p>
              Users must utilize <Link to="/" style={{ fontWeight: "bold", textDecoration: "none" }}>QllmSoft</Link>{" "} services responsibly and ethically. Prohibited activities include unlawful use, system disruption, or unauthorized access. Violations may result in suspension or termination of access.
            </p>
          </article>

          <article>
            <h2>Intellectual Property</h2>
            <p>
              All creative works produced by <Link to="/" style={{ fontWeight: "bold", textDecoration: "none" }}>QllmSoft</Link>{" "} remain our intellectual property unless otherwise agreed. Clients are granted usage rights for intended purposes only. Unauthorized copying, sharing, or modification is not permitted.
            </p>
          </article>

          <article>
            <h2>Confidentiality</h2>
            <p>
              We respect the confidentiality of sensitive information shared during our collaboration. Both parties are expected to protect such information, even after the engagement ends.
            </p>
          </article>

          <article>
            <h2>Limitations of Liability</h2>
            <p>
              While we strive to deliver high-quality services, <Link to="/" style={{ fontWeight: "bold", textDecoration: "none" }}>QllmSoft</Link>{" "} is not liable for unforeseen errors, interruptions, or damages. We commit to resolving issues efficiently and responsibly.
            </p>
          </article>

          <article>
            <h2>Termination</h2>
            <p>
              Either party may end the engagement with written notice. <Link to="/" style={{ fontWeight: "bold", textDecoration: "none" }}>QllmSoft</Link>{" "} may immediately terminate services in case of misuse, breach of terms, or legal obligations. Outstanding work and payments will be handled fairly.
            </p>
          </article>

          <article>
            <h2>Customer Support & Complaints</h2>
            <p>
              Our support team is here to address your concerns. Contact us at <a href="mailto:qllmsoft@gmail.com">support@qllmsoft.com</a>, and we will respond promptly with:
            </p>
            <ul>
              <li>Acknowledgment within <b>2 business days</b></li>
              <li>Investigation and resolution process</li>
              <li>Clear updates or outcomes within <b>7 business days</b></li>
            </ul>
          </article>

          <article>
            <h2>Refund Policy</h2>
            <p>
              Refunds, when eligible, will be processed within <b>7-10 business days</b> after approval. Policies may vary depending on the purchased service.
            </p>
          </article>

          <article>
            <h2>Contact Information</h2>
            <p>
              For inquiries or assistance, reach out to:
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:qllmsoft@gmail.com">qllmsoft@gmail.com</a></li>
            </ul>
            <p>
              We value your feedback and aim to provide a safe, transparent, and reliable experience.
            </p>
          </article>

        </div>
      </section>

    </main>
  );
};

export default TermsOfServices;
