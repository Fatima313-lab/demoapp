import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram, ArrowRight,Youtube, Twitter } from 'lucide-react';
import { companyInfo, navigationLinks } from '../data/mock';
import logo from '../assets/qllmsoft-web-desktop-mobile-app-logo.webp';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <Link to="/" className="logo">
                <img
                  src={logo}
                  alt="QllmSoft Logo"
                  className="logo-image"
                />
              </Link>
              <p className="footer-description">
                QllmSoft expert software development services empowering startups, businesses,
                and eCommerce brands to transform their digital ideas into powerful, results-driven websites.
              </p>
              <div className="footer-social">
                <a className="ln" href={companyInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a className="fb" href={companyInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a className="yt" href={companyInfo.socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={16} />
                </a>
                <a className="x"  href={companyInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="X">
                  <Twitter size={16} />
                </a>
                <a className="ig" href={companyInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                {navigationLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>
                      <ArrowRight size={14} />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
           <div className="footer-section">
              <h4 className="footer-title">Our Services</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/services#website-development-services">
                    <ArrowRight size={14} /> {/* <-- ADDED ArrowRight */}
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/services#mobile-app-development">
                    <ArrowRight size={14} />
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link to="/services#enterprise-custom-software-development">
                    <ArrowRight size={14} />
                    Desktop Applications
                  </Link>
                </li>
                <li>
                  <Link to="/services#api-development-services">
                    <ArrowRight size={14} />
                    API Development
                  </Link>
                </li>
                <li>
                  <Link to="/services#custom-software-development-services">
                    <ArrowRight size={14} />
                    Custom Software
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="footer-title">Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <MapPin size={18} />
                  <span style={{ color: 'black' }}>{companyInfo.address}</span>
                </li>
                <li>
                  <Phone size={18} />
                  <a style={{ color: 'black' }} href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
                </li>
                <li>
                  <Mail size={18} />
                  <a style={{ color: 'black' }} href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                </li>
              </ul>
              <Link to="/contact" className="footer-cta">
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} QllmSoft. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-services">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
