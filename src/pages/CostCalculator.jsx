/**
 * CostCalculator.jsx, QllmSoft
 * ─────────────────────────────────────────────────────────────────
 * LEAD MAGNET #1: Software Development Cost Calculator
 *
 * Why this page exists:
 *   - Targets high-intent search terms: "software development cost
 *     calculator", "how much does custom software cost", "app
 *     development cost estimate"
 *   - Gives the visitor a free, instant range with zero email required,
 *     which keeps bounce rate low and helps the page earn shares/links
 *   - Gates the *detailed* breakdown and a fixed-price quote behind an
 *     email, which is the actual lead capture moment
 *   - Captures the visitor's own answers as part of the lead payload,
 *     so the first follow-up email/call can be specific instead of generic
 *
 * Standalone route, own meta tags, own schema. Cross-link this from
 * Home, Services, About, and Contact using <LeadMagnetBanner variant="calculator" />.
 */

import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LeadCaptureForm from "../components/LeadCaptureForm";
import "./CostCalculator.css";

/* ─── Estimation model ──────────────────────────────────────────
   These ranges are deliberately rough, the point of the tool is to
   give a sane ballpark and start a conversation, not replace a real
   scoped proposal. Tune the base numbers to match your actual past
   project data whenever you have enough of it. */
   const PROJECT_BASE = {
    web: { label: "Website / Web App", low: 2500, high: 10000, weeksLow: 4, weeksHigh: 8 },
    mobile: { label: "Mobile App", low: 5000, high: 15000, weeksLow: 6, weeksHigh: 12 },
    enterprise: { label: "Enterprise / Custom Software", low: 8000, high: 30000, weeksLow: 8, weeksHigh: 18 },
    ai: { label: "AI & Automation", low: 5000, high: 25000, weeksLow: 4, weeksHigh: 14 },
  };

const FEATURES = [
  { id: "auth", label: "User accounts & login" },
  { id: "admin", label: "Admin dashboard" },
  { id: "payments", label: "Payments / billing" },
  { id: "integrations", label: "Third-party integrations (CRM, ERP, etc.)" },
  { id: "realtime", label: "Real-time features (chat, live data)" },
  { id: "ai", label: "AI features (chatbot, predictions, automation)" },
];

function formatUSD(n) {
  return `$${Math.round(n).toLocaleString("en-US")}`;
}

const CostCalculator = () => {
  const [projectType, setProjectType] = useState("web");
  const [features, setFeatures] = useState([]);
  const [expedited, setExpedited] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const toggleFeature = (id) => {
    setFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  };

  const estimate = useMemo(() => {
    const base = PROJECT_BASE[projectType];
    const featureMultiplier = 1 + features.length * 0.15;
    const rushMultiplier = expedited ? 1.15 : 1;

    let low = base.low * featureMultiplier * rushMultiplier;
    let high = base.high * featureMultiplier * rushMultiplier;

    let weeksLow = base.weeksLow + features.length;
    let weeksHigh = base.weeksHigh + features.length * 1.5;
    if (expedited) {
      weeksLow = Math.max(3, Math.round(weeksLow * 0.75));
      weeksHigh = Math.max(4, Math.round(weeksHigh * 0.75));
    }

    return {
      low,
      high,
      weeksLow: Math.round(weeksLow),
      weeksHigh: Math.round(weeksHigh),
    };
  }, [projectType, features, expedited]);

  const handleCalculate = (e) => {
    e.preventDefault();
    setShowResult(true);
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does custom software development cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most custom software projects fall between $8,000 for a simple web app and $60,000+ for an enterprise system, depending on scope, integrations, and platform. Use the calculator above for a range based on your specific answers.",
        },
      },
      {
        "@type": "Question",
        name: "Why do software development quotes vary so much between companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Quotes vary based on team seniority, location, whether the work is fixed-price or hourly, and how thoroughly the company scopes the project before quoting. A vague quote usually means a vague scope, which is where budget overruns come from.",
        },
      },
      {
        "@type": "Question",
        name: "Is a fixed-price quote better than hourly billing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fixed-price works well once requirements are documented, since it removes billing surprises. Hourly can make sense for early-stage discovery work where the scope itself is still being defined.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build custom software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A straightforward web app typically takes 6 to 10 weeks. Mobile apps and enterprise systems usually run 10 to 24 weeks depending on the number of features and integrations involved.",
        },
      },
    ],
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://qllmsoft.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Software Development Cost Calculator",
        item: "https://qllmsoft.com/software-development-cost-calculator",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Free Software Development Cost Calculator | Instant Estimate –
          QllmSoft
        </title>
        <meta
          name="description"
          content="Estimate your software project cost and timeline in under a minute. Free instant range for web apps, mobile apps, enterprise software, and AI features, no email required to see it."
        />
        <meta
          name="keywords"
          content="software development cost calculator, app development cost estimate, how much does custom software cost, software project budget estimator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://qllmsoft.com/software-development-cost-calculator"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://qllmsoft.com/software-development-cost-calculator"
        />
        <meta property="og:site_name" content="QllmSoft" />
        <meta
          property="og:title"
          content="Free Software Development Cost Calculator – QllmSoft"
        />
        <meta
          property="og:description"
          content="Get an instant price range and timeline for your software project. Free, no email needed to see your range."
        />

        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
        <script type="application/ld+json">
          {JSON.stringify(schemaBreadcrumb)}
        </script>
      </Helmet>

      <main className="cost-calculator-page">
        <section className="cc-hero reveal" aria-labelledby="cc-hero-h1">
          <div className="container">
            <h1 id="cc-hero-h1" style={{ color: "white" }}>
              What Would Your Software Project Cost?
            </h1>
            <p style={{ color: "white" }}>
              Answer four quick questions and get an instant price range and
              typical timeline. No email needed to see it.
            </p>
          </div>
        </section>

        <section className="section cc-tool reveal" aria-labelledby="cc-tool-heading">
          <div className="container">
            <h2 id="cc-tool-heading" className="sr-only">
              Cost calculator
            </h2>

            <form className="cc-form" onSubmit={handleCalculate}>
              <div className="cc-field">
                <label htmlFor="projectType">What are you building?</label>
                <select
                  id="projectType"
                  value={projectType}
                  onChange={(e) => {
                    setProjectType(e.target.value);
                    setShowResult(false);
                  }}
                >
                  {Object.entries(PROJECT_BASE).map(([key, val]) => (
                    <option key={key} value={key}>
                      {val.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="cc-field">
                <label>Which of these does it need? (check all that apply)</label>
                <div className="cc-checkbox-grid">
                  {FEATURES.map((f) => (
                    <label key={f.id} className="cc-checkbox">
                      <input
                        type="checkbox"
                        checked={features.includes(f.id)}
                        onChange={() => {
                          toggleFeature(f.id);
                          setShowResult(false);
                        }}
                      />
                      {f.label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="cc-field">
                <label className="cc-checkbox">
                  <input
                    type="checkbox"
                    checked={expedited}
                    onChange={() => {
                      setExpedited((v) => !v);
                      setShowResult(false);
                    }}
                  />
                  I need this on an expedited timeline
                </label>
              </div>

              <button type="submit" className="btn btn-primary cc-submit">
                Calculate My Estimate
              </button>
            </form>

            {showResult && (
              <div className="cc-result reveal active">
                <p className="cc-result-label">Estimated range</p>
                <p className="cc-result-price">
                  {formatUSD(estimate.low)} – {formatUSD(estimate.high)}
                </p>
                <p className="cc-result-timeline">
                  Typical timeline: {estimate.weeksLow}–{estimate.weeksHigh}{" "}
                  weeks
                </p>

                <div className="cc-result-divider" />

                <h3>Want the exact number?</h3>
                <p className="cc-result-sub">
                  This range is a starting point, not a quote. Send us your
                  answers and we'll reply within 24 hours with a fixed-price
                  proposal scoped to what you actually need.
                </p>

                <LeadCaptureForm
                  leadMagnet="cost-calculator"
                  buttonLabel="Email Me a Detailed Breakdown"
                  successMessage="Thanks! We've sent your detailed breakdown, and someone from our team will follow up within 24 hours with a fixed-price quote."
                  extraFields={{
                    projectType: PROJECT_BASE[projectType].label,
                    features: features
                      .map((id) => FEATURES.find((f) => f.id === id)?.label)
                      .join(", "),
                    expedited,
                    estimatedRange: `${formatUSD(estimate.low)} - ${formatUSD(
                      estimate.high,
                    )}`,
                  }}
                />
              </div>
            )}
          </div>
        </section>

        <section
          className="section"
          style={{ background: "#F7FAFC", padding: "56px 0" }}
          aria-labelledby="cc-faq-heading"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="cc-faq-heading">Common Questions About Software Costs</h2>
            </div>
            <div className="cc-faq-list">
              {schemaFAQ.mainEntity.map((q, i) => (
                <div className="cc-faq-item" key={i}>
                  <h3>{q.name}</h3>
                  <p>{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-section reveal" aria-labelledby="cc-cta-heading">
          <div className="container">
            <div className="cta-content">
              <h2 id="cc-cta-heading">Already Know What You Need?</h2>
              <p>
                Skip the calculator and send us your requirements directly.
                We'll reply with a detailed, fixed-price proposal within 24
                hours.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CostCalculator;
