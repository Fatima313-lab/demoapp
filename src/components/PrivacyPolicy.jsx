import React ,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './PrivacyPolicy.css';
import privacyImage from "../assets/privacy-policy.jpg"; 

const PrivacyPolicy = () => {
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
    <main className="privacy-policy-page">

      {/* Hero Section */}
      <section className="privacy-hero reveal"
      style={{
                background: `linear-gradient(135deg, rgba(26,54,93,0.85), rgba(43,108,176,0.15)), url(${privacyImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "90px 0",
                textAlign: "center",
                color: "#fff",
                marginTop: "-30px",
            }}
            > 
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="privacy-hero-description">
            Your trust is our top priority. At<Link to="/" style={{ fontWeight: "bold", textDecoration: "none" }}>QllmSoft</Link>{" "}, we are committed to safeguarding your personal data and ensuring your privacy throughout your experience with us.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-content">
        <div className="container">

          <article>
            <h2>Information We Collect</h2>
            <p>
              When you engage with <Link to="/" style={{ fontWeight: "bold", textDecoration: "none" }}>QllmSoft</Link>{" "}, we may collect personal information such as your name, email address, phone number, or payment details. Additionally, we gather technical information via automated tools, including cookies and analytics, such as your IP address, device type, and interactions with our website. This helps us enhance your experience and deliver relevant services.
            </p>
          </article>

          <article>
            <h2>How We Use Your Information</h2>
            <p>
              We use your information to provide seamless services, process transactions, communicate updates, and personalize your experience. Your data also helps us analyze trends, improve our services, and maintain a secure and efficient platform. Transparency and responsible use are core to our practices.
            </p>
          </article>

          <article>
            <h2>Data Security</h2>
            <p>
              <Link to="/" style={{ fontWeight: "bold", textDecoration: "none" }}>QllmSoft</Link>{" "} employs robust security measures including encryption, secure servers, and regular audits to protect your information. While no system is entirely foolproof, we continuously monitor and enhance our security to mitigate potential risks. We encourage users to also safeguard their account credentials.
            </p>
          </article>

          <article>
            <h2>Sharing Your Information</h2>
            <p>
              We will never sell or misuse your personal data. In some cases, we may share information with trusted partners, such as payment processors or service providers, strictly under confidentiality agreements to ensure your privacy.
            </p>
          </article>

          <article>
            <h2>Policy Updates</h2>
            <p>
              <Link to="/" style={{ fontWeight: "bold", textDecoration: "none" }}>QllmSoft</Link>{" "} may update this Privacy Policy as we grow and improve our services. Significant changes will be reflected on this page immediately. We recommend revisiting periodically to stay informed.
            </p>
          </article>

          <article>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or need assistance regarding your privacy, feel free to contact us at:
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:qllmsoft@gmail.com">qllmsoft@gmail.com</a></li>
            </ul>
            <p>We are committed to addressing your concerns and ensuring a safe and reliable experience.</p>
          </article>

        </div>
      </section>

    </main>
  );
};

export default PrivacyPolicy;
