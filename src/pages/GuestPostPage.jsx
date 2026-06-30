import React, { useState } from "react";
import { Helmet } from "react-helmet-async"; 
import "./GuestPostPage.css";

const PAGE_URL = "https://qllmsoft.com/write-for-us";
const OG_IMAGE = "https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "QllmSoft",
  url: "https://qllmsoft.com",
  logo: OG_IMAGE,
  sameAs: [
    "https://www.linkedin.com/company/qllmsoft",
    "https://twitter.com/qllmsoft",
    "https://www.facebook.com/qllmsoft",
  ],
};

const schemaWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Write for Us | Tech Contributors & Experts | QllmSoft",
  url: PAGE_URL,
  description: "Join QllmSoft as an Expert Contributor. Publish your articles, technical case studies, and engineering briefs on AI, LLMs, and enterprise architecture.",
  isPartOf: {
    "@type": "WebSite",
    name: "QllmSoft",
    url: "https://qllmsoft.com",
  },
  primaryImageOfPage: OG_IMAGE,
  inLanguage: "en-US",
};

const CONTENT_TYPES = [
  { 
    title: "Expert Tech Articles", 
    desc: "Share practical insights, real world learnings, and industry perspectives around software development, AI systems, automation workflows, and modern technology trends (1,200 - 2,500 words)." 
  },
  { 
    title: "Engineering Case Studies", 
    desc: "Explain how your team solved real business or technical challenges such as scaling platforms, improving system performance, or building automation driven solutions." 
  },
  { 
    title: "AI & Automation Insights", 
    desc: "Highlight your experience with AI-driven products, automation systems, or enterprise technology adoption. Focus on clear learnings and real implementation outcomes." 
  }
];

const CORE_VERTICALS = [
  { 
    title: "AI & Automation", 
    items: [
      "AI Tools & Workflows",
      "Automation Systems & Productivity",
      "AI Use Cases in Business",
      "AI Adoption Strategies"
    ] 
  },
  { 
    title: "Software & Systems", 
    items: [
      "Custom Software Development",
      "System Optimization & Performance",
      "Scalable Architectures",
      "Enterprise Software Solutions"
    ] 
  },
  { 
    title: "Technology & Innovation", 
    items: [
      "Emerging Tech Trends",
      "Digital Transformation",
      "Product Development",
      "Startup & SaaS Growth Strategies"
    ] 
  }
];
const EVALUATION_METRICS = [
  { 
    title: "Clarity & Practical Value", 
    desc: "We look for content that explains ideas clearly and provides value that readers can actually apply in real world situations." 
  },
  { 
    title: "Real Experience", 
    desc: "Content should be based on your own experience, projects, or learnings. We prioritize genuine insights over generic information." 
  },
  { 
    title: "Original Thinking", 
    desc: "We publish unique perspectives that bring fresh ideas to the tech and AI space, not recycled or overly generic content." 
  }
];

const GUIDELINES = [
  { 
    title: "Original Content Only", 
    body: "Your article should be original, unpublished, and written specifically for QllmSoft." 
  },
  { 
    title: "Focus on Real Value", 
    body: "We publish content that shares practical insights, real outcomes, and meaningful lessons from your experience." 
  },
  { 
    title: "Keep It Natural & Clear", 
    body: "Write in a simple, clear, and easy-to-understand way so readers can learn without confusion." 
  },
  { 
    title: "Genuine Perspective", 
    body: "We value authentic stories, lessons learned, and real-world experiences more than generic or AI-generated content." 
  }
];
const QLLM_BLOGS = [
  {
    title: "Custom vs SaaS eCommerce 2026 | When Growing SMBs Need to Move On",
    category: "eCommerce & Architecture",
    readTime: "7 min read",
    image: "https://qllmsoft.com/static/media/SaaS-Ecommerce.478ab9078f3ff874ff9a.webp", 
    link: "https://qllmsoft.com/blog/custom-vs-saas-ecommerce-for-growing-smbs"
  },
  {
    title: "Role-Based Access Control Problems | Why Teams Create Dangerous Workarounds",
    category: "Security & IAM",
    readTime: "9 min read",
    image: "https://qllmsoft.com/static/media/Role-based-access-problem.b5432ba4234f1967a4af.webp",
    link: "https://qllmsoft.com/blog/role-based-access-problems-why-teams-break-systems"
  },
  {
    title: "Legacy System Modernization Without Downtime or Data Loss | Safe Migration Guide",
    category: "Cloud & Migration",
    readTime: "12 min read",
    image: "https://qllmsoft.com/static/media/Legacy-system-risk.9324b7a483279e5907ed.webp",
    link: "https://qllmsoft.com/blog/legacy-system-modernization-without-downtime-or-data-loss"
  },
  {
    title: "When Internal Software Slows Teams Down | Fixing Operational Bottlenecks",
    category: "Internal Tools",
    readTime: "6 min read",
    image: "https://qllmsoft.com/static/media/internal-System-Efficiency.b5f97d90fb8ab9c1fd88.webp",
    link: "https://qllmsoft.com/blog/when-internal-software-slows-teams-instead-of-helping"
  }
];

const SUBMISSION_STEPS = [
  {
    step: "01",
    title: "Choose Your Topic",
    desc: "Pick a topic related to software, AI, automation, or modern technology that reflects your real experience or knowledge."
  },
  {
    step: "02",
    title: "Write Your Idea",
    desc: "Prepare a short summary explaining what your article will cover and what readers will learn from it."
  },
  {
    step: "03",
    title: "Send Your Pitch",
    desc: "Share your topic idea along with your professional profile or portfolio so we can review and connect with you."
  }
];
``

const FAQS = [
  { 
    q: "Is publication guaranteed if I send an idea?", 
    a: "No. Every submission is reviewed carefully. We publish only content that fits our quality and relevance standards." 
  },
  { 
    q: "Do you pay for guest posts?", 
    a: "We do not offer direct payment. Contributors receive author credit, visibility, and a backlink to their profile or website." 
  },
  { 
    q: "Can I post the same article elsewhere later?", 
    a: "Yes, after 90 days you can republish it on your own platforms with proper reference to the original article." 
  },
  { 
    q: "What kind of content do you reject?", 
    a: "We avoid generic content, copied material, overly promotional posts, or articles that do not provide real value to readers." 
  }
];
const Icon = {
  Check: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="12" cy="12" r="9" /><path d="m8.5 12.5 2.3 2.3L15.5 9" /></svg>,
  Plus: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M12 5v14M5 12h14" /></svg>,
  Send: (p) => <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="m3 11 18-8-8 18-2-8-8-2Z" /></svg>,
  Network: (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  Target: (p) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
};

export default function GuestPostPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <Helmet>
        <title>Write for Us | Join Our Expert Contributor Network | QllmSoft</title>
        <meta name="description" content="Join QllmSoft as an Expert Contributor. Submit a guest post on LLMs, AI infrastructure, prompt engineering, MLOps, or developer tools." />
        <link rel="canonical" href={PAGE_URL} />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
      </Helmet>

      <div className="qllm-gp modern-media-layout extended-hub">
      
        <header className="gp-hero">
            <div className="gp-hero-shapes">
    <div className="hero-shape shape-cyber-mesh"></div>
    <div className="hero-shape shape-blueprint-circle"></div>
    <div className="hero-shape shape-constellation-left"></div>
    <div className="shape-tech-dot-nodes node-1"></div>
    <div className="shape-tech-dot-nodes node-2"></div>
    <div className="shape-tech-dot-nodes node-3"></div>
  </div>
          <div className="gp-container">
            <span className="gp-eyebrow"><span className="dot" /> QllmSoft Global Intelligence Network</span>
            <h1>Where technology leaders share <span className="accent">proven blueprints.</span></h1>
            <p className="lede">
  Join a trusted platform for enterprise architects, software engineers, and technology leaders. 
  At QllmSoft, we publish high-quality blogs on software development, artificial intelligence, 
  automation, and modern technology trends. Our content helps businesses scale efficiently, 
  improve data infrastructure, and adopt practical AI-driven solutions.
</p>
            <div className="gp-hero-actions">
              <a href="#submit-network" className="gp-btn gp-btn-primary">Apply to Publish</a>
              <a href="#publishing-tracks" className="gp-btn gp-btn-ghost">View Content Framework</a>
            </div>
          </div>
        </header>

        <main className="gp-body">
          <section className="gp-section" id="publishing-tracks">
            <div className="gp-container">
              <div className="gp-section-head">
                
                <h2>Contribution Models & Formats</h2>
                <p>We accept distinct content models tailored for professional developers, corporate executives, and senior research teams.</p>
              </div>
              <div className="content-streams-grid">
                {CONTENT_TYPES.map((type, idx) => (
                  <div className="stream-card" key={idx}>
                    <div className="stream-icon"><Icon.Network /></div>
                    <h3>{type.title}</h3>
                    <p>{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        
          <section className="gp-section core-verticals-sec">
            <div className="gp-container">
              <div className="gp-section-head">
               
                <h2>Core Tech Verticals We Track</h2>
                <p>Map your architectural insights against our prioritized operational streams.</p>
              </div>
              <div className="verticals-grid">
                {CORE_VERTICALS.map((v, idx) => (
                  <div className="vertical-box" key={idx}>
                    <h3>{v.title}</h3>
                    <ul>
                      {v.items.map((item, i) => (
                        <li key={i}><Icon.Target /> {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

         
          <section className="gp-section evaluation-framework-sec">
            <div className="gp-container">
              <div className="gp-section-head">
               
                <h2>How Our Editorial Board Evaluates Content</h2>
                <p>To preserve the elite standard of our knowledge network, every abstract submission passes a strict three-tier assessment loop.</p>
              </div>
              <div className="evaluation-grid">
                {EVALUATION_METRICS.map((metric, i) => (
                  <div className="evaluation-card" key={i}>
                    <span className="evaluation-index">⚡ Metric 0{i+1}</span>
                    <h3>{metric.title}</h3>
                    <p>{metric.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="gp-section dark-accent-bg">
            <div className="gp-container">
              <div className="gp-section-head">
                
                <h2>Our Editorial Ecosystem Standards</h2>
              </div>
              <div className="gp-guidelines">
                {GUIDELINES.map((g) => (
                  <div className="gp-guideline" key={g.title}>
                    <Icon.Check />
                    <div>
                      <h4>{g.title}</h4>
                      <p>{g.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        
          <section className="gp-section gp-blog-carousel-sec">
            <div className="gp-container">
              <div className="gp-section-head">
              
                <h2>Recently blogs</h2>
                <p>Analyze how peer experts structure their data frameworks and architectural insights on our live platform.</p>
              </div>
              
              <div className="gp-carousel-wrapper">
                <div className="gp-carousel-track">
                  {QLLM_BLOGS.map((blog, idx) => (
                    <a href={blog.link} className="gp-carousel-card" key={idx} target="_blank" rel="noreferrer">
                      <div className="gp-card-img-wrap">
                        <img src={blog.image} alt={blog.title} onError={(e) => { e.target.src = ""; }} />
                        <span className="blog-cat">{blog.category}</span>
                      </div>
                      <div className="gp-card-content">
                        <span className="read-time">{blog.readTime}</span>
                        <h3>{blog.title}</h3>
                        <span className="read-link">Review Structure →</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="gp-section network-submission-sec" id="submit-network">
            <div className="gp-container">
              <div className="gp-section-head">
               
                <h2>Become an Approved Contributor</h2>
                <p>We evaluate abstract pitches directly to maintain high technical standards. Connect with our engineering desk instantly.</p>
              </div>

              <div className="network-steps-container">
                {SUBMISSION_STEPS.map((s, i) => (
                  <div className="network-step-card" key={i}>
                    <div className="step-num-big">{s.step}</div>
                    <div className="step-content-wrap">
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            
              <div className="media-pitch-box">
                <div className="pitch-box-content">
                  <h3>Ready to feature your engineering insights?</h3>
                  <p>Send your core abstract, target tech stream, and professional background to our global editorial channel.</p>
                </div>
                <div className="pitch-box-action">
                  <a href="mailto:qllmsoft@gmail.com" className="email-direct-button">
                    <Icon.Send /> Pitch Desk: qllmsoft@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </section>

      
          <section className="gp-section programmatic-faq-sec">
            <div className="gp-container">
              <div className="gp-section-head">
                <p className="gp-kicker">Frequently Asked Questions</p>
                <h2>Contributor Network Intelligence</h2>
              </div>
              <div className="gp-faq">
                {FAQS.map((f, i) => (
                  <div className={`gp-faq-item${openFaq === i ? " open" : ""}`} key={f.q}>
                    <button className="gp-faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                      {f.q} <Icon.Plus />
                    </button>
                    <div className="gp-faq-a"><p>{f.a}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}