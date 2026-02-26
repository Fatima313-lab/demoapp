import React from 'react';
import { Link } from 'react-router-dom';
import './ApiDevelopmentServices.css'; // import the CSS

const ApiDevelopmentServices = () => {
  return (
    <main className="seo-page">
      {/* HERO SECTION */}
      <section className="seo-hero">
        <div className="container">
          <h1>API Development Services</h1>
          <p>We build secure, scalable, and high-performance APIs tailored to your business needs.</p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>

      {/* ABOUT / FEATURES SECTION */}
      <section className="seo-features">
        <div className="container">
          <h2>Our API Development Services Include</h2>
          <ul>
            <li>Custom RESTful API Development</li>
            <li>GraphQL API Solutions</li>
            <li>API Integration with third-party platforms</li>
            <li>API Security & Performance Optimization</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default ApiDevelopmentServices;
