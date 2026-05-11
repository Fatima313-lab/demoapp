import React from 'react';
import { Link } from 'react-router-dom';
import "./RelatedSolutions.css";

const RelatedServicesGrid = () => {
  const slides = [
    {
      title: "Best Software House",
      desc: "Top tier engineering standards and proven project delivery in Pakistan.",
      link: "/best-software-house-in-pakistan",
      icon: "🏆"
    },
    {
      title: "Education & LMS",
      desc: "Scalable eLearning platforms built for the future of digital education.",
      link: "/education-software-development-pakistan",
      icon: "🎓"
    },
    {
      title: "FinTech Solutions",
      desc: "Secure banking and finance systems with automated reporting layers.",
      link: "/finance-management-system",
      icon: "📊"
    },
    {
      title: "HealthTech Systems",
      desc: "HIPAA compliant healthcare portals for patient management.",
      link: "/healthcare-software-development-pakistan",
      icon: "🏥"
    },
    {
      title: "Outsource Strategy",
      desc: "Expert offshore development models for global business scaling.",
      link: "/outsource-software-development-to-pakistan",
      icon: "🌐"
    }
  ];

  return (
    <section className="csd-custom-grid-section">
      <div className="container">
        <div className="section-title text-center">
          <p className="section-eyebrow">Industry Specifics</p>
          <h2 className="text-white">Explore Our <span>Dedicated Expertise</span></h2>
        </div>

        <div className="csd-carousel-wrapper">
  <div className="csd-horizontal-scroll csd-auto-scroll">
    {slides.map((slide, i) => (
      <Link to={slide.link} key={i} className="csd-custom-card-wrapper">
        <div className="csd-custom-card">
          <div className="card-glass-effect"></div>
          <span className="card-icon-3d">{slide.icon}</span>
          <h3>{slide.title}</h3>
          <p>{slide.desc}</p>
          <div className="card-footer-link">
            Learn More <span>→</span>
          </div>
        </div>
      </Link>
    ))}
    </div>
  </div>
</div>
    </section>
  );
};

export default RelatedServicesGrid;