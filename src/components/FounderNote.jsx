
import ceoImg from '../assets/ceo-qllmsoft.webp';
import React from 'react';
import './FounderNote.css';

const FounderNote = ({ title, message }) => {
  return (
    <section className="founder-section">
      <div className="container">
        <div className="founder-glass-card">
          
          
          <div className="founder-visual-wrapper">
            <div className="image-3d-frame">
              <img 
                src={ceoImg}
                alt="Zain Ul Abedin - QllmSoft Founder" 
                className="founder-img"
              />
              <div className="experience-badge-3d">
                <span className="years">15+</span>
                <span className="text">Years Exp.</span>
              </div>
            </div>
            <div className="founder-identity">
              <h3>Zain Ul Abedin</h3>
              <p>Founder & Team Lead</p>
            </div>
          </div>

  
          <div className="founder-content">
            <div className="premium-accent-line"></div>
            <h2 className="founder-title">{title}</h2>
            <p className="founder-text-message">
              {message}
            </p>
            
            <div className="founder-action-area">
              <a href="/contact" className="btn-premium-3d">
                <span>Start Direct Consultation</span>
                <div className="btn-glow"></div>
              </a>
              <div className="verification-row">
                <span className="verify-tag">✓ Upwork Verified</span>
                <span className="verify-tag">✓ Top Rated Plus</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderNote;