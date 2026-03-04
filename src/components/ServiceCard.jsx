import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ServiceCard.css';

const ServiceCardDefault = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-card-image">
      <img 
  src={service.image} 
  alt={`${service.name} provided by QllmSoft in Pakistan`} 
  loading="lazy" 
/>
        <div className="service-card-overlay">
          <Link to={service.link || '/services'} className="overlay-btn">
            Learn More
          </Link>
        </div>
      </div>
      <div className="service-card-content">
        <h3 className="service-card-title">{service.name}</h3>
        <p className="service-card-description">{service.description}</p>
      </div>
    </div>
  );
};

const FeatureItem = ({ text }) => (
  <li>
    <ArrowRight size={14} />
    {text}
  </li>
);

const ServiceCardDetailed = ({ service }) => {
  const features = service.features || [];
  
  return (
    <div className="service-card-detailed">
      <div className="service-card-image">
      <img 
  src={service.image} 
  alt={`${service.name} provided by QllmSoft in Pakistan`} 
  loading="lazy" 
/>
      </div>
      <div className="service-card-content">
        <h3 className="service-card-title">{service.name}</h3>
        <p className="service-card-description">{service.description}</p>
        {features.length > 0 && (
          <ul className="service-card-features">
            {features[0] && <FeatureItem text={features[0]} />}
            {features[1] && <FeatureItem text={features[1]} />}
            {features[2] && <FeatureItem text={features[2]} />}
          </ul>
        )}
        <Link to="/contact" className="service-card-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, variant = 'default' }) => {
  if (variant === 'detailed') {
    return <ServiceCardDetailed service={service} />;
  }
  return <ServiceCardDefault service={service} />;
};

export default ServiceCard;
