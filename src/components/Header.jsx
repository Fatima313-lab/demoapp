import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Mail,
  Phone,
  Menu,
  X,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  ChevronDown
} from 'lucide-react';

import { companyInfo, navigationLinks } from '../data/mock';
import logo from '../assets/qllmsoft-web-desktop-mobile-app-logo.webp';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>

      {/* ===== TOP BAR ===== */}
      <div className={`header-top ${isScrolled ? 'slide-up' : ''}`}>
        <div className="container header-top-inner">

          <div className="top-contact">
            <a href={`mailto:${companyInfo.email}`} className="top-contact-link">
              <Mail size={13} />
              <span>{companyInfo.email}</span>
            </a>
            <span className="top-divider" />
            <a
              href={`https://wa.me/${companyInfo.phone.replace(/[^0-9]/g, '')}`}
              className="top-contact-link whatsapp"
            >
              <Phone size={13} />
              <span>{companyInfo.phone}</span>
            </a>
          </div>

          <div className="top-social">
            <a className="s-icon ln" href={companyInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={13} />
            </a>
            <a className="s-icon fb" href={companyInfo.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={13} />
            </a>
            <a className="s-icon yt" href={companyInfo.socialLinks.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
              <Youtube size={13} />
            </a>
            <a className="s-icon tw" href={companyInfo.socialLinks.twitter} target="_blank" rel="noreferrer" aria-label="Twitter/X">
              <Twitter size={13} />
            </a>
            <a className="s-icon ig" href={companyInfo.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={13} />
            </a>
          </div>

        </div>
      </div>

      {/* ===== NAVBAR ===== */}
      <nav className="header-nav">
        <div className="container header-nav-inner">

          {/* Logo */}
          <Link to="/" className="logo-link">
            <img src={logo} alt="QllmSoft Logo" className="logo-image" />
          </Link>

          {/* Desktop Nav */}
          <ul className="nav-menu">
            {navigationLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="nav-actions">
            <a href={`mailto:${companyInfo.email}`} className="cta-btn">
              Get in Touch
            </a>
            <button
              className="hamburger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </nav>

      {/* ===== MOBILE DRAWER ===== */}
      <div className={`mobile-overlay ${isMobileMenuOpen ? 'overlay-open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'drawer-open' : ''}`}>
        <div className="drawer-header">
          <img src={logo} alt="QllmSoft Logo" className="drawer-logo" />
          <button
            className="drawer-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="drawer-nav">
          {navigationLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`drawer-link ${location.pathname === link.path ? 'drawer-link-active' : ''}`}
              >
                {link.name}
                <ChevronDown size={16} className="drawer-chevron" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="drawer-footer">
          <div className="drawer-contact">
            <a href={`mailto:${companyInfo.email}`} className="drawer-contact-link">
              <Mail size={14} />
              <span>{companyInfo.email}</span>
            </a>
            <a
              href={`https://wa.me/${companyInfo.phone.replace(/[^0-9]/g, '')}`}
              className="drawer-contact-link"
            >
              <Phone size={14} />
              <span>{companyInfo.phone}</span>
            </a>
          </div>

          <div className="drawer-social">
            <a className="s-icon ln" href={companyInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={14} /></a>
            <a className="s-icon fb" href={companyInfo.socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={14} /></a>
            <a className="s-icon yt" href={companyInfo.socialLinks.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={14} /></a>
            <a className="s-icon tw" href={companyInfo.socialLinks.twitter} target="_blank" rel="noreferrer" aria-label="Twitter/X"><Twitter size={14} /></a>
            <a className="s-icon ig" href={companyInfo.socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={14} /></a>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
