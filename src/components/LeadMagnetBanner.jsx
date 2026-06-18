import React from "react";
import { Link } from "react-router-dom";
import "./LeadMagnetBanner.css";

/**
 * Drop this into existing pages (Home, Services, About, blog posts) to
 * cross-promote a lead magnet without duplicating its full content.
 *
 * Usage:
 *   <LeadMagnetBanner variant="calculator" />
 *   <LeadMagnetBanner variant="checklist" />
 */
const MAGNETS = {
  calculator: {
    eyebrow: "Free Tool",
    title: "What Would Your Software Project Cost?",
    desc: "Answer a few questions and get an instant price range and typical timeline. No call required to see your range.",
    to: "/software-development-cost-calculator",
    cta: "Calculate My Project Cost",
  },
  checklist: {
    eyebrow: "Free Download",
    title: "The Requirements Checklist We Use Internally",
    desc: "15 questions worth answering before you brief any development team, so you don't pay for scope creep later.",
    to: "/software-project-requirements-checklist",
    cta: "Get the Checklist",
  },
};

const LeadMagnetBanner = ({ variant = "calculator" }) => {
  const magnet = MAGNETS[variant];
  if (!magnet) return null;

  return (
    <section className="lead-magnet-banner reveal" aria-label={magnet.title}>
      <div className="container">
        <div className="lmb-card">
          <span className="lmb-eyebrow">{magnet.eyebrow}</span>
          <h3>{magnet.title}</h3>
          <p>{magnet.desc}</p>
          <Link to={magnet.to} className="btn btn-primary">
            {magnet.cta}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetBanner;
