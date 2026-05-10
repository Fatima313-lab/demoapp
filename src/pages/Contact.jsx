import React, { useState , useEffect } from 'react';
import emailjs from 'emailjs-com';
import SEO from "../components/SEO";
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { companyInfo } from '../data/mock';
import './Contact.css';

emailjs.init('fFEjcHdxdndYaVwBf');

const Contact = () => {
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = async (e) => {
  debugger;
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_jtdcbef',       // Your service ID
        'template_k0moa34',      // Your template ID
        {
          from_name: formData.name,
          user_email: formData.email,
          user_phone_no: formData.phone || 'N/A',
          user_company: formData.company || 'N/A',
          subject: formData.subject,
          message: formData.message
        }
      );

      console.log(result); // Should show { status: 200, text: 'OK' }

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error('EmailJS error', result.text);
      }
    } catch (err) {
      console.error('EmailJS error', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <>
    <SEO
  title="Contact QllmSoft | Custom Software Development & API Solutions"
  description="Get in touch with QllmSoft, a leading custom software development company delivering scalable ASP.NET Core, web application, and secure API solutions for startups and businesses worldwide. Let’s discuss your project and build reliable digital solutions together."
  url="https://qllmsoft.com/contact"
  image="https://qllmsoft.com/og-contact.jpg"
  schema={{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "QllmSoft",
    "url": "https://qllmsoft.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "qllmsoft@gmail.com",
      "telephone": "+923348229288"
    }
  }}
/>
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero reveal">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Have a project in mind? Let's discuss how we can help transform 
            your ideas into reality. Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="contact-info-title">Contact QllmSoft</h2>
              <p className="contact-info-subtitle">
                We build growth-driven digital products and services.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <MapPin size={22} />
                  </div>
                  <div className="contact-item-content">
                    <h4>Our Location</h4>
                    <p>{companyInfo.address}</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Phone size={22} />
                  </div>
                  <div className="contact-item-content">
                    <h4>Phone Number</h4>
                    <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Mail size={22} />
                  </div>
                  <div className="contact-item-content">
                    <h4>Email Address</h4>
                    <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Clock size={22} />
                  </div>
                  <div className="contact-item-content">
                    <h4>Working Hours</h4>
                    <p>Mon – Sun (Fri off) : 9:00 AM – 6:00 PM (PST)</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.7797506848396!2d73.95391807621754!3d32.68940817369274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f9aa6cb3e73f7%3A0x7eb6c67a38fde1f7!2sCamping%20Ground%20lalamusa!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="QllmSoft Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2 className="form-title">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="form-success">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-error">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                  />
                </div> */}

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default Contact;
