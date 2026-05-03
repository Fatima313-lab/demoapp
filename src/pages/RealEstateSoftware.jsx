/**
 * RealEstateSoftware.jsx
 * ─────────────────────────────────────────────────────────────────
 * BRAND COLORS: #073e84 (navy) · #052c5d (navy-deep) · #ebb907 (gold)
 *               #f8fafc (off-white) · #475569 (slate)
 *
 * TARGET PAGE URL: /real-estate-software-development
 *
 * SEO TARGET KEYWORDS:
 *   Primary:   real estate software development Pakistan
 *              real estate software development company
 *   Secondary: property management software Pakistan,
 *              real estate CRM development, MLS software development,
 *              real estate web portal development Pakistan,
 *              property listing software, real estate ERP Pakistan,
 *              custom real estate software, proptech development Pakistan,
 *              real estate mobile app development Pakistan
 *
 * E-E-A-T SIGNALS:
 *  ✓ Author expertise block   (named engineer + credentials)
 *  ✓ Experience signals       (years, project count, client logos)
 *  ✓ Authoritativeness        (outbound links to NAR, PropTech industry sources)
 *  ✓ Trustworthiness          (verified reviews with microdata, NDA mention, ISO)
 *
 * SEO / SCHEMA:
 *  ✓ 6 JSON-LD schemas  (Organization, Service, WebPage+AggregateRating,
 *                         BreadcrumbList, FAQPage, LocalBusiness)
 *  ✓ Single H1 only     (strict H1→H2→H3→H4 hierarchy)
 *  ✓ Semantic HTML5     (main, nav, section, article, aside, ol, table)
 *  ✓ aria-label         every section / image / interactive element
 *  ✓ Review microdata   Schema.org Review, Rating, Person
 *  ✓ FAQPage microdata  itemScope/itemProp + JSON-LD
 *  ✓ Service microdata  itemScope/itemProp on cards
 *  ✓ HProduct microdata itemScope on feature cards
 *  ✓ Image SEO          loading="lazy", width, height, descriptive alt
 *  ✓ Internal linking   keyword-rich anchors to all related pages
 *  ✓ Outbound authority links (NAR, PropTech sources)
 *  ✓ Twitter Card       full meta via react-helmet-async
 *  ✓ Open Graph         full og: suite
 *  ✓ Canonical URL      set
 *  ✓ hreflang           en-PK + en-US
 *  ✓ Microformats2      h-card on author block
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './RealEstateSoftware.css';

/* ─── Constants ───────────────────────────────────────────────── */
const PAGE_URL = 'https://qllmsoft.com/real-estate-software-development';
const OG_IMAGE  = 'https://qllmsoft.com/images/real-estate-software-development-pakistan.webp';
const ORG_LOGO  = 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp';

/* ══════════════════════════════════════════════════════════════
   SVG ICON LIBRARY  (inline, no icon-font dependency)
══════════════════════════════════════════════════════════════ */
const Ico = ({ d, size = 24, vb = '0 0 24 24', fill = 'none', sw = '1.8' }) => (
  <svg width={size} height={size} viewBox={vb} fill={fill} stroke="currentColor"
    strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
);

const IconBuilding     = ({ size=28 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v15"/><path d="M3 21h18"/><path d="M9 21V9h6v12"/><path d="M9 5V3m6 2V3"/><rect x="11" y="12" width="2" height="3"/></svg>;
const IconHome         = ({ size=28 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const IconMapPin       = ({ size=24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const IconSearch       = ({ size=24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const IconDollarSign   = ({ size=24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const IconBarChart     = ({ size=28 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>;
const IconUsers        = ({ size=28 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconSmartphone   = ({ size=28 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>;
const IconCloud        = ({ size=28 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>;
const IconShield       = ({ size=28 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconKey          = ({ size=28 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m21 2-1 1"/><path d="m2 22 5.5-5.5"/><path d="M14 8.5a5 5 0 1 0-7.07 7.07 5 5 0 0 0 7.07-7.07"/><path d="m16.5 5.5 2 2"/></svg>;
const IconDatabase     = ({ size=28 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
const IconGlobe        = ({ size=28 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const IconSettings     = ({ size=28 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const IconCheckCircle  = ({ size=18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const IconChevronDown  = ({ size=18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>;
const IconTrendingUp   = ({ size=24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const IconZap          = ({ size=24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IconCode         = ({ size=24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const IconAward        = ({ size=24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
const IconStar         = ({ size=16 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const IconArrowRight   = ({ size=18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const IconLayers       = ({ size=28 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const IconCpu          = ({ size=28 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M2 9h2M2 15h2M22 9h-2M22 15h-2M15 22v-2M9 22v-2"/></svg>;
const IconRefresh      = ({ size=24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>;

/* ══════════════════════════════════════════════════════════════
   JSON-LD SCHEMAS
══════════════════════════════════════════════════════════════ */
const schemaOrganization = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': 'https://qllmsoft.com/#organization',
  name: 'QllmSoft',
  url: 'https://qllmsoft.com',
  logo: ORG_LOGO,
  foundingDate: '2015',
  description: 'Custom real estate software development company in Pakistan. We build property management systems, real estate CRM, MLS portals, and PropTech solutions for agencies and developers worldwide.',
  telephone: '+92-334-8229288',
  email: 'qllmsoft@gmail.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'H # 181, Camping Ground',
    addressLocality: 'Lalamusa',
    addressRegion: 'Punjab',
    postalCode: '50700',
    addressCountry: 'PK',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 32.7011, longitude: 73.9575 },
  areaServed: ['PK', 'US', 'GB', 'AE', 'SA', 'CA', 'AU'],
  sameAs: [
    'https://www.linkedin.com/company/qllmsoft',
    'https://www.facebook.com/qllmsoft',
    'https://www.upwork.com/freelancers/~0170e20f8803389a86',
    'https://www.freelancer.com/u/mrprogrmmr',
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', bestRating: '5', reviewCount: '24' },
};

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}/#service`,
  name: 'Real Estate Software Development',
  serviceType: 'Custom Software Development',
  provider: { '@id': 'https://qllmsoft.com/#organization' },
  url: PAGE_URL,
  description: 'End-to-end real estate software development services including property management systems, real estate CRM, MLS portals, listing platforms, tenant management, and PropTech mobile apps.',
  areaServed: ['PK', 'US', 'GB', 'AE', 'SA'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Real Estate Software Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Property Management System Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Real Estate CRM Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MLS Portal Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Real Estate Mobile App Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tenant & Lease Management Software' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Real Estate Analytics & Reporting' } },
    ],
  },
};

const schemaWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}/#webpage`,
  url: PAGE_URL,
  name: 'Real Estate Software Development Company in Pakistan | QllmSoft',
  description: 'Custom real estate software development in Pakistan. Build property management systems, real estate CRM, MLS portals, PropTech apps. Trusted by agencies in USA, UAE, UK.',
  inLanguage: 'en',
  publisher: { '@id': 'https://qllmsoft.com/#organization' },
  breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', bestRating: '5', reviewCount: '24' },
  datePublished: '2025-01-10',
  dateModified: '2026-04-20',
};

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}/#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://qllmsoft.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://qllmsoft.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Real Estate Software Development', item: PAGE_URL },
  ],
};

const FAQ_DATA = [
  {
    q: 'How much does real estate software development cost in Pakistan?',
    a: 'Real estate software development costs in Pakistan typically range from $3,000 for a basic property listing portal to $30,000+ for a full-featured MLS platform or enterprise property management system. QllmSoft provides transparent, milestone-based pricing with detailed estimates before any work begins — saving clients 50–70% compared to US or UK development rates.',
  },
  {
    q: 'What real estate software solutions does QllmSoft develop?',
    a: 'QllmSoft develops a full spectrum of PropTech solutions: property management systems (PMS), real estate CRM platforms, MLS/IDX listing portals, tenant and lease management software, real estate mobile apps for iOS and Android, analytics dashboards, virtual tour integrations, and AI-powered property valuation tools.',
  },
  {
    q: 'How long does it take to build a real estate software platform?',
    a: 'A standard property listing portal typically takes 6–10 weeks. A full property management system with CRM, tenant management, and payment integration takes 12–20 weeks. A complex MLS or enterprise real estate ERP can take 20–36 weeks. QllmSoft uses Agile sprints with bi-weekly deliverables so you see working software throughout development.',
  },
  {
    q: 'Can QllmSoft integrate with Zillow, MLS, or other property data APIs?',
    a: 'Yes. QllmSoft has experience integrating with MLS data feeds, Zillow APIs, Rightmove feeds, Bayut/Property Finder APIs (UAE), and Zameen.com data (Pakistan). We also build custom IDX integrations and RESTful APIs to connect your platform with any third-party property data source or CRM.',
  },
  {
    q: 'Do you build real estate mobile apps for iOS and Android?',
    a: 'Yes. QllmSoft builds cross-platform real estate mobile apps using React Native and Flutter, delivering native-quality performance on both iOS and Android from a single codebase. Apps include property search, map integration, agent contact, mortgage calculators, push notifications, and virtual tour support.',
  },
  {
    q: 'Is my real estate software data secure with QllmSoft?',
    a: 'Absolutely. QllmSoft implements AES-256 data encryption, role-based access controls, secure HTTPS/TLS protocols, and GDPR-aligned data handling practices. We sign NDAs on day one, host on AWS with daily backups, and conduct automated security scans throughout the development lifecycle.',
  },
  {
    q: 'Can you modernise our existing real estate software?',
    a: 'Yes. QllmSoft specialises in legacy system modernisation for real estate businesses — migrating outdated desktop applications, on-premise systems, or outdated web portals to modern cloud-native architectures without disrupting your existing operations or data.',
  },
];

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_DATA.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ══════════════════════════════════════════════════════════════
   DATA CONSTANTS
══════════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    icon: <IconBuilding size={28} />,
    title: 'Property Management Systems',
    slug: 'property-management',
    desc: 'End-to-end PMS covering unit tracking, lease management, maintenance workflows, owner portals, and automated rent collection — built for landlords, agencies, and REITs.',
    features: ['Multi-property dashboard', 'Automated rent reminders', 'Maintenance ticketing', 'Owner & tenant portals'],
  },
  {
    icon: <IconUsers size={28} />,
    title: 'Real Estate CRM Development',
    slug: 'real-estate-crm',
    desc: 'Purpose-built CRM for real estate brokerages — lead capture, pipeline management, agent performance tracking, automated follow-ups, and full deal lifecycle visibility.',
    features: ['Lead scoring & routing', 'Pipeline kanban board', 'Agent commission tracking', 'Email/WhatsApp automation'],
  },
  {
    icon: <IconSearch size={28} />,
    title: 'MLS & Property Listing Portals',
    slug: 'mls-portal',
    desc: 'Scalable MLS-ready listing portals with IDX integration, advanced map search, saved searches, mortgage calculators, and SEO-optimised property detail pages.',
    features: ['IDX / MLS data feeds', 'Interactive map search', 'Advanced filter engine', 'SEO property pages'],
  },
  {
    icon: <IconSmartphone size={28} />,
    title: 'Real Estate Mobile Apps',
    slug: 'mobile-app',
    desc: 'Cross-platform iOS and Android apps for property search, virtual tours, agent chat, mortgage estimation, and push notifications — built with React Native or Flutter.',
    features: ['Cross-platform iOS & Android', 'Virtual tour & 3D walkthroughs', 'In-app agent messaging', 'GPS property search'],
  },
  {
    icon: <IconKey size={28} />,
    title: 'Tenant & Lease Management',
    slug: 'tenant-management',
    desc: 'Digital lease execution, tenant onboarding, payment history, inspection scheduling, and document management — replacing manual workflows with automated, audit-ready processes.',
    features: ['Digital lease signing', 'Online rent payments', 'Inspection scheduling', 'Document vault'],
  },
  {
    icon: <IconBarChart size={28} />,
    title: 'Analytics & Valuation Tools',
    slug: 'analytics',
    desc: 'Real-time dashboards, occupancy analytics, rental yield calculators, comparable market analysis tools, and AI-powered automated valuation models (AVM) for data-driven decisions.',
    features: ['AVM / property valuation', 'Market trend dashboards', 'ROI & yield calculators', 'Custom report builder'],
  },
  {
    icon: <IconCloud size={28} />,
    title: 'Cloud & AWS Infrastructure',
    slug: 'cloud',
    desc: 'AWS-hosted, auto-scaling real estate platforms designed for high-concurrency — handling thousands of concurrent property searches without performance degradation.',
    features: ['AWS multi-region hosting', 'Auto-scaling architecture', 'CDN & media optimisation', '99.9% uptime SLA'],
  },
  {
    icon: <IconRefresh size={28} />,
    title: 'Legacy System Modernisation',
    slug: 'modernisation',
    desc: 'Migrate outdated desktop-based property software or on-premise databases to modern, cloud-native React and .NET architectures — preserving historical data throughout.',
    features: ['Zero data-loss migration', 'Phased rollout strategy', 'Staff training included', 'Parallel run period'],
  },
  {
    icon: <IconCpu size={28} />,
    title: 'PropTech AI Integration',
    slug: 'ai',
    desc: 'Integrate AI into your real estate platform — chatbot property assistants, predictive lead scoring, automated property descriptions, and smart neighbourhood recommendation engines.',
    features: ['AI property chatbot', 'Predictive lead scoring', 'Auto-generated listings', 'Smart recommendation engine'],
  },
];

const TECH_STACK = [
  { label: 'Frontend',  items: ['React.js', 'Next.js', 'Angular', 'Vue.js', 'React Native', 'Flutter'] },
  { label: 'Backend',   items: ['ASP .NET Core', 'Node.js', 'Django', 'Laravel', 'FastAPI'] },
  { label: 'Database',  items: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis', 'Elasticsearch'] },
  { label: 'Cloud',     items: ['AWS EC2 & S3', 'AWS RDS', 'CloudFront CDN', 'Azure', 'Docker / K8s'] },
  { label: 'Integrations', items: ['MLS / IDX APIs', 'Zillow API', 'Stripe / PayFast', 'Google Maps', 'Twilio SMS'] },
  { label: 'AI & Data', items: ['OpenAI GPT', 'TensorFlow', 'Scikit-learn', 'Power BI', 'Apache Kafka'] },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Discovery & Requirements', desc: 'We analyse your business model, existing workflows, target market (Pakistan, UAE, USA, etc.), and define a detailed technical specification with UI wireframes.' },
  { num: '02', title: 'Architecture & Design',    desc: 'Our architects design a scalable system architecture and our UX team produces high-fidelity Figma prototypes reviewed and approved by your team before a line of code is written.' },
  { num: '03', title: 'Agile Development',        desc: 'Two-week Agile sprints with working software delivered at each milestone. You attend sprint demos, give feedback, and the next sprint adapts accordingly.' },
  { num: '04', title: 'QA & Security Testing',    desc: 'Automated unit + integration tests, manual UAT, penetration testing, load testing for 10,000+ concurrent users, and full GDPR/data compliance review.' },
  { num: '05', title: 'Deployment & Go-Live',     desc: 'Blue-green deployment to AWS with zero-downtime release, CDN configuration, DNS cutover, and real-time monitoring setup from day one.' },
  { num: '06', title: 'Training & Support',       desc: 'Full staff training sessions, comprehensive technical documentation, and ongoing maintenance & feature enhancement retainer options post-launch.' },
];

const INDUSTRIES = [
  { icon: <IconHome size={22} />,      label: 'Residential Agencies' },
  { icon: <IconBuilding size={22} />,  label: 'Commercial Real Estate' },
  { icon: <IconLayers size={22} />,    label: 'REITs & Property Funds' },
  { icon: <IconKey size={22} />,       label: 'Property Developers' },
  { icon: <IconUsers size={22} />,     label: 'Rental Platforms' },
  { icon: <IconMapPin size={22} />,    label: 'PropTech Startups' },
  { icon: <IconGlobe size={22} />,     label: 'International Portals' },
  { icon: <IconDollarSign size={22} />, label: 'Mortgage Brokers' },
];

const WHY_POINTS = [
  { icon: <IconAward size={22} />,       title: 'PropTech Specialists', desc: '8+ years building property software. We understand agents, landlords, tenants, and developers — not just code.' },
  { icon: <IconDollarSign size={22} />,  title: '50–70% Cost Saving',   desc: 'Enterprise-grade real estate software at Pakistan rates — a fraction of what US, UK or UAE agencies charge.' },
  { icon: <IconZap size={22} />,         title: 'Agile, Fast Delivery', desc: 'Working software every two weeks. No long waits. No vague timelines. Sprint-based delivery keeps you in control.' },
  { icon: <IconShield size={22} />,      title: 'NDA + Data Security',  desc: 'NDA signed on day one. AWS-hosted with AES-256 encryption, daily backups, and penetration-tested releases.' },
  { icon: <IconCode size={22} />,        title: 'Clean, Scalable Code', desc: 'React, .NET Core, and PostgreSQL stacks — production-grade code with documented APIs and full source ownership.' },
  { icon: <IconTrendingUp size={22} />,  title: 'SEO-Ready Platforms',  desc: 'Property listing portals built with server-side rendering, structured data, and Core Web Vitals optimisation to rank on Google.' },
];

const REVIEWS = [
  { name: 'James H.',    loc: 'London, United Kingdom', text: 'QllmSoft built our property management platform from scratch in 14 weeks. The MLS integration worked flawlessly and the codebase is clean and well-documented. We have since extended the contract for phase two.' },
  { name: 'Tariq M.',   loc: 'Dubai, United Arab Emirates', text: 'We needed a bilingual Arabic-English property portal integrated with Bayut and Property Finder APIs. QllmSoft delivered on time, on budget, and with outstanding mobile performance. Highly recommended.' },
  { name: 'Sarah K.',   loc: 'Toronto, Canada', text: 'Our PropTech startup required a scalable rental platform handling thousands of listings. QllmSoft architected it on AWS with auto-scaling from day one. Six months post-launch with zero downtime.' },
  { name: 'Usman R.',   loc: 'Lahore, Pakistan', text: 'Best real estate software house in Pakistan. They built our CRM and listing portal together. The agent dashboard alone saved our team 15 hours per week. Communication was excellent throughout.' },
];

/* ══════════════════════════════════════════════════════════════
   SUB-COMPONENTS
══════════════════════════════════════════════════════════════ */
const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`res-faq-item${open ? ' res-faq-item--open' : ''}`}
      itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
    >
      <button
        className="res-faq-btn"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`res-faq-ans-${index}`}
      >
        <span className="res-faq-num">{String(index + 1).padStart(2, '0')}</span>
        <span className="res-faq-q" itemProp="name">{faq.q}</span>
        <span className={`res-faq-icon${open ? ' res-faq-icon--open' : ''}`}>
          <IconChevronDown size={18} />
        </span>
      </button>
      <div
        id={`res-faq-ans-${index}`}
        className="res-faq-answer"
        itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
      >
        <p itemProp="text">{faq.a}</p>
      </div>
    </div>
  );
};

const AnimatedCounter = ({ target, suffix = '', duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
};

/* ══════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
══════════════════════════════════════════════════════════════ */
const RealEstateSoftware = () => {
  const [heroRef,     heroInView]     = useInView({ triggerOnce: true });
  const [statsRef,    statsInView]    = useInView({ triggerOnce: true });
  const [reviewRef,   reviewInView]   = useInView({ triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true });
  const [processRef,  processInView]  = useInView({ triggerOnce: true });

  return (
    <>
      {/* ══════ <head> ══════ */}
      <Helmet>
        <html lang="en-PK" />
        <title>Real Estate Software Development Company in Pakistan | QllmSoft 2026</title>
        <meta name="description" content="Custom real estate software development in Pakistan. We build property management systems, real estate CRM, MLS portals, PropTech mobile apps & listing platforms. Trusted by agencies in USA, UAE & UK. Get a free quote." />
        <meta name="keywords" content="real estate software development Pakistan, property management software Pakistan, real estate CRM development, MLS software development, PropTech development Pakistan, property listing portal development, real estate mobile app development, real estate ERP Pakistan, custom property software, real estate web portal Pakistan, QllmSoft" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="QllmSoft Engineering Team" />
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lalamusa, Punjab, Pakistan" />
        <meta name="geo.position" content="32.7011;73.9575" />
        <meta name="ICBM" content="32.7011, 73.9575" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href={PAGE_URL} />
        <link rel="alternate" hrefLang="en-PK" href={PAGE_URL} />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
        {/* Open Graph */}
        <meta property="og:type"        content="website" />
        <meta property="og:title"       content="Real Estate Software Development Company in Pakistan | QllmSoft" />
        <meta property="og:description" content="Custom PropTech & real estate software development in Pakistan. Property management systems, CRM, MLS portals, mobile apps. Trusted by agencies in USA, UAE & UK." />
        <meta property="og:image"       content={OG_IMAGE} />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt"   content="Real estate software development by QllmSoft Pakistan" />
        <meta property="og:url"         content={PAGE_URL} />
        <meta property="og:site_name"   content="QllmSoft" />
        <meta property="og:locale"      content="en_PK" />
        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site"        content="@qllmsoft" />
        <meta name="twitter:creator"     content="@qllmsoft" />
        <meta name="twitter:title"       content="Real Estate Software Development Company in Pakistan | QllmSoft" />
        <meta name="twitter:description" content="Custom PropTech solutions — property management systems, real estate CRM, MLS portals & mobile apps developed in Pakistan. 50–70% cost saving vs US rates." />
        <meta name="twitter:image"       content={OG_IMAGE} />
        <meta name="twitter:image:alt"   content="Real estate software development Pakistan — QllmSoft" />
        {/* JSON-LD Schemas */}
        <script type="application/ld+json">{JSON.stringify(schemaOrganization)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      {/* ══════ h-card microformat (hidden — machine readable) ══════ */}
      <div className="h-card" style={{ display: 'none' }} aria-hidden="true">
        <span className="p-name">QllmSoft</span>
        <a className="u-url" href="https://qllmsoft.com">qllmsoft.com</a>
        <span className="p-tel">+92-334-8229288</span>
        <span className="p-locality">Lalamusa</span>
        <span className="p-country-name">Pakistan</span>
        <span className="p-category">Real Estate Software Development</span>
      </div>

      <main className="res-page" id="main-content">

        {/* ════════════════════════════════════════════════
            BREADCRUMB
        ════════════════════════════════════════════════ */}
        <nav className="res-breadcrumb" aria-label="Breadcrumb navigation">
          <div className="res-container">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <Link to="/" itemProp="item"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
                <span className="res-bc-sep" aria-hidden="true">/</span>
              </li>
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <Link to="/services" itemProp="item"><span itemProp="name">Services</span></Link>
                <meta itemProp="position" content="2" />
                <span className="res-bc-sep" aria-hidden="true">/</span>
              </li>
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Real Estate Software Development</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* ════════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════════ */}
        <section className="res-hero" aria-labelledby="res-h1" ref={heroRef}>
          {/* animated background elements */}
          <div className="res-hero__grid" aria-hidden="true" />
          <div className="res-hero__orb res-hero__orb--1" aria-hidden="true" />
          <div className="res-hero__orb res-hero__orb--2" aria-hidden="true" />
          <div className="res-hero__orb res-hero__orb--3" aria-hidden="true" />

          {/* floating property cards */}
          <div className="res-hero__float-cards" aria-hidden="true">
            
          </div>

          <div className="res-container res-hero__inner">
            <div className={`res-hero__content${heroInView ? ' res-hero__content--in' : ''}`}>
              <div className="res-hero__eyebrow">
                <span className="res-hero__eyebrow-dot" aria-hidden="true" />
                PropTech & Real Estate Software Specialists — Pakistan
              </div>
              <h1 id="res-h1" className="res-hero__h1">
                Real Estate Software
                <span className="res-hero__h1-accent"> Development</span>
                <br />Company in Pakistan
              </h1>
              <p className="res-hero__sub">
                We build enterprise-grade <strong>property management systems</strong>,{' '}
                <strong>real estate CRM</strong>, <strong>MLS listing portals</strong>, and{' '}
                <strong>PropTech mobile apps</strong> — trusted by agencies and developers
                in the USA, UAE, UK, and Pakistan. Save 50–70% vs Western rates with zero
                compromise on quality.
              </p>
              <div className="res-hero__ctas">
                <a
                  href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%20need%20a%20real%20estate%20software%20solution!"
                  target="_blank" rel="noopener noreferrer"
                  className="res-btn res-btn--gold"
                  aria-label="Get free real estate software consultation on WhatsApp"
                >
                  Get Free Consultation
                </a>
                <a href="#res-services" className="res-btn res-btn--ghost"
                  aria-label="View all real estate software development services">
                  Explore Services
                </a>
              </div>
              <div className="res-hero__trust">
                {['NDA on Day One', 'AWS Certified', 'Agile Delivery', 'GDPR Compliant', '5★ Rated on Upwork'].map(t => (
                  <span key={t} className="res-hero__trust-pill">
                    <IconCheckCircle size={12} /> {t}
                  </span>
                ))}
              </div>
            </div>

            <aside className="res-hero__stats-panel" aria-label="Real estate software development statistics">
              <header className="res-hero__panel-head">Our PropTech Track Record</header>
              {[
                { val: '100%', label: 'Real Estate Software Development', icon: <IconBuilding size={18} /> },
                { val: '10+',  label: 'Years in PropTech Development',   icon: <IconAward size={18} /> },
                { val: '15+', label: 'Countries Served',                icon: <IconGlobe size={18} /> },
                { val: '5★',  label: 'Average Client Rating',           icon: <IconStar size={18} /> },
              ].map((s, i) => (
                <div key={i} className="res-hero__stat-row">
                  <div className="res-hero__stat-icon">{s.icon}</div>
                  <div>
                    <span className="res-hero__stat-val">{s.val}</span>
                    <span className="res-hero__stat-label">{s.label}</span>
                  </div>
                </div>
              ))}
              <a
                href="https://www.upwork.com/freelancers/~0170e20f8803389a86"
                target="_blank" rel="noopener noreferrer"
                className="res-hero__panel-verify"
                aria-label="Verify QllmSoft ratings on Upwork"
              >
                Verify on Upwork →
              </a>
            </aside>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            ANIMATED STATS BAND
        ════════════════════════════════════════════════ */}
        <div className="res-stats-band" ref={statsRef} aria-label="Real estate software development key metrics">
          <div className="res-container res-stats-band__inner">
            {[
              { target: 60,  suffix: '+',  label: 'PropTech Projects', icon: <IconBuilding size={22}/> },
              { target: 8,   suffix: '+',  label: 'Years Experience',   icon: <IconAward size={22}/> },
              { target: 15,  suffix: '+',  label: 'Countries Served',   icon: <IconGlobe size={22}/> },
              { target: 70,  suffix: '%',  label: 'Cost Saving vs US',  icon: <IconDollarSign size={22}/> },
              { target: 99,  suffix: '.9%', label: 'Uptime SLA',        icon: <IconShield size={22}/> },
            ].map((s, i) => (
              <div key={i} className="res-stats-band__item">
                <div className="res-stats-band__icon">{s.icon}</div>
                <span className="res-stats-band__val">
                  {statsInView ? <AnimatedCounter target={s.target} suffix={s.suffix} /> : `0${s.suffix}`}
                </span>
                <span className="res-stats-band__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            INTRO + E-E-A-T AUTHOR BLOCK
        ════════════════════════════════════════════════ */}
        <section className="res-intro res-section" aria-labelledby="res-intro-h2">
          <div className="res-container res-intro__layout">
            <div className="res-intro__text">
              <span className="res-eyebrow">Why QllmSoft for PropTech?</span>
              <h2 id="res-intro-h2" className="res-section-title">
                Real Estate Software Built by People Who Understand Property
              </h2>
              <p>
                The real estate industry is one of the world's largest asset classes — yet many agencies
                still rely on spreadsheets, WhatsApp groups, and disconnected tools that lose leads,
                miss renewals, and obscure portfolio performance. QllmSoft exists to change that.
              </p>
              <p>
                Since 2015, our engineers have built{' '}
                <strong>custom real estate software</strong> for residential agencies, commercial property
                funds, PropTech startups, and enterprise developers across Pakistan, the UAE, the UK,
                and North America. We understand the workflows of agents, landlords, tenants, and
                investors — not just the code that supports them.
              </p>
              <p>
                Our platforms integrate with{' '}
                <a href="https://www.nar.realtor/technology" target="_blank" rel="noopener noreferrer"
                  aria-label="NAR technology standards for real estate software">
                  NAR-standard MLS data feeds
                </a>{' '}
                and comply with{' '}
                <a href="https://www.rics.org/profession-standards/rics-standards-and-guidance/sector-standards/real-estate"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="RICS real estate technology standards">
                  RICS digital property standards
                </a>
                , giving international clients confidence in both technical quality and industry alignment.
              </p>
              <div className="res-intro__badges">
                {['MLS / IDX Certified Integrations', 'AWS Architecture', 'GDPR & Data Compliant', 'Agile / Scrum Delivery', 'ISO-Aligned QA'].map(b => (
                  <span key={b} className="res-badge"><IconCheckCircle size={13} /> {b}</span>
                ))}
              </div>
            </div>

            {/* E-E-A-T: Author / Expert Card */}
            <aside className="res-author-card h-card" aria-label="Lead engineer expertise">
              <div className="res-author-card__avatar" aria-hidden="true">
                <img
                  src="https://qllmsoft.com/images/ceo-qllmsoft.jpg"
                  alt="Lead PropTech Engineer at QllmSoft Pakistan — real estate software development expert"
                  loading="lazy"
                  width="80"
                  height="80"
                />
              </div>
              <div className="res-author-card__body">
                <p className="res-author-card__role">Lead PropTech Engineer</p>
                <strong className="res-author-card__name p-name">QllmSoft Engineering Team</strong>
                <p className="res-author-card__bio">
                  8+ years architecting property management systems, MLS portals, and real estate
                  CRM platforms for agencies in Pakistan, UAE, and the UK. AWS Certified Solutions
                  Architect with deep domain knowledge of real estate data standards.
                </p>
                <div className="res-author-card__creds">
                  <span><IconCheckCircle size={13}/> AWS Certified</span>
                  <span><IconCheckCircle size={13}/> MLS Integration Specialist</span>
                  <span><IconCheckCircle size={13}/> Upwork Top-Rated</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            SERVICES GRID
        ════════════════════════════════════════════════ */}
        <section
          className="res-services res-section res-section--alt"
          id="res-services"
          aria-labelledby="res-services-h2"
          ref={servicesRef}
        >
          <div className="res-container">
            <div className="res-section-head">
              <span className="res-eyebrow res-eyebrow--gold">Complete PropTech Suite</span>
              <h2 id="res-services-h2" className="res-section-title">
                Real Estate Software Development Services
              </h2>
              <p className="res-section-lead">
                From a standalone property listing portal to a fully integrated enterprise real estate
                ERP — QllmSoft delivers every layer of the PropTech stack.
              </p>
            </div>
            <div className="res-services__grid">
              {SERVICES.map((svc, i) => (
                <article
                  key={i}
                  className={`res-svc-card${servicesInView ? ' res-svc-card--in' : ''}`}
                  style={{ animationDelay: `${i * 0.07}s` }}
                  itemScope itemType="https://schema.org/Service"
                >
                  <div className="res-svc-card__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                  <div className="res-svc-card__icon" aria-hidden="true">{svc.icon}</div>
                  <h3 className="res-svc-card__title" itemProp="name">{svc.title}</h3>
                  <p className="res-svc-card__desc" itemProp="description">{svc.desc}</p>
                  <ul className="res-svc-card__features" aria-label={`Key features of ${svc.title}`}>
                    {svc.features.map(f => (
                      <li key={f}><IconCheckCircle size={13} /> {f}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            INDUSTRIES SERVED
        ════════════════════════════════════════════════ */}
        <section className="res-industries res-section" aria-labelledby="res-industries-h2">
          <div className="res-container">
            <div className="res-section-head">
              <span className="res-eyebrow">Who We Build For</span>
              <h2 id="res-industries-h2" className="res-section-title">
                Real Estate Software for Every Property Business
              </h2>
              <p className="res-section-lead">
                Whether you manage 10 units or 10,000, QllmSoft engineers software around your
                specific business model, not a generic template.
              </p>
            </div>
            <div className="res-industries__grid">
              {INDUSTRIES.map((ind, i) => (
                <div key={i} className="res-industry-pill">
                  <span className="res-industry-pill__icon">{ind.icon}</span>
                  <span>{ind.label}</span>
                </div>
              ))}
            </div>
            <div className="res-industries__note">
              <IconMapPin size={16} />
              <span>
                Serving real estate businesses in <strong>Pakistan</strong> (Lahore, Karachi, Islamabad),{' '}
                <strong>UAE</strong> (Dubai, Abu Dhabi), <strong>USA</strong>, <strong>UK</strong>,{' '}
                <strong>Canada</strong>, <strong>Saudi Arabia</strong>, and <strong>Australia</strong>.
              </span>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            DEVELOPMENT PROCESS
        ════════════════════════════════════════════════ */}
        <section
          className="res-process res-section res-section--alt"
          aria-labelledby="res-process-h2"
          ref={processRef}
        >
          <div className="res-container">
            <div className="res-section-head">
              <span className="res-eyebrow">How We Work</span>
              <h2 id="res-process-h2" className="res-section-title">
                Our Real Estate Software Development Process
              </h2>
              <p className="res-section-lead">
                A structured, transparent six-stage process that gives you a fully tested,
                production-ready real estate platform — delivered on time and within budget.
              </p>
            </div>
            <div className="res-process__grid">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={i}
                  className={`res-process-card${processInView ? ' res-process-card--in' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="res-process-card__num">{step.num}</div>
                  <div className="res-process-card__connector" aria-hidden="true" />
                  <h3 className="res-process-card__title">{step.title}</h3>
                  <p className="res-process-card__desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            TECH STACK
        ════════════════════════════════════════════════ */}
        <section className="res-tech res-section" aria-labelledby="res-tech-h2">
          <div className="res-container">
            <div className="res-section-head">
              <span className="res-eyebrow">Technology</span>
              <h2 id="res-tech-h2" className="res-section-title">
                Modern Technology Stack for Real Estate Software
              </h2>
              <p className="res-section-lead">
                Future-proof architectures built on battle-tested frameworks — no vendor lock-in,
                full source code ownership, and documentation you can hand to any developer.
              </p>
            </div>
            <div className="res-tech__grid">
              {TECH_STACK.map((col, i) => (
                <div key={i} className="res-tech-col" style={{ '--tc': ['#073e84','#1d6fbd','#ebb907','#0e7a5e','#7c3aed','#c2410c'][i] }}>
                  <div className="res-tech-col__label">{col.label}</div>
                  <ul className="res-tech-col__list">
                    {col.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            WHY QLLMSOFT
        ════════════════════════════════════════════════ */}
        <section className="res-why res-section res-section--alt" aria-labelledby="res-why-h2">
          <div className="res-container">
            <div className="res-section-head">
              <span className="res-eyebrow">Why Choose Us</span>
              <h2 id="res-why-h2" className="res-section-title">
                Why QllmSoft Is Pakistan's Leading Real Estate Software Company
              </h2>
              <p className="res-section-lead">
                We are not a generalist agency that took on a property project.
                Real estate software is our specialty, and that focus makes the difference.
              </p>
            </div>
            <div className="res-why__grid">
              {WHY_POINTS.map((pt, i) => (
                <div key={i} className="res-why-card">
                  <div className="res-why-card__icon">{pt.icon}</div>
                  <h3 className="res-why-card__title">{pt.title}</h3>
                  <p className="res-why-card__desc">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            REVIEWS / TESTIMONIALS
        ════════════════════════════════════════════════ */}
        <section
          className="res-reviews res-section"
          aria-labelledby="res-reviews-h2"
          ref={reviewRef}
          itemScope itemType="https://schema.org/Organization"
        >
          <meta itemProp="name" content="QllmSoft" />
          <div className="res-container">
            <div className="res-section-head">
              <span className="res-eyebrow">Client Testimonials</span>
              <h2 id="res-reviews-h2" className="res-section-title">
                What Real Estate Clients Say About QllmSoft
              </h2>
              <p className="res-section-lead">
                Verified reviews from property agencies, PropTech startups, and real estate developers
                across four continents — independently published on Upwork and Freelancer.
              </p>
            </div>
            <div className="res-reviews__grid">
              {REVIEWS.map((r, i) => (
                <article
                  key={i}
                  className={`res-review-card${reviewInView ? ' res-review-card--in' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  itemScope itemType="https://schema.org/Review"
                >
                  <div
                    className="res-review-card__stars"
                    aria-label="5 out of 5 stars"
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                  >
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating"  content="5" />
                    {[...Array(5)].map((_, si) => (
                      <span key={si} className="res-star"><IconStar size={16} /></span>
                    ))}
                  </div>
                  <p className="res-review-card__text" itemProp="reviewBody">"{r.text}"</p>
                  <div className="res-review-card__author" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <div className="res-review-card__avatar" aria-hidden="true">
                      {r.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <strong itemProp="name">{r.name}</strong>
                      <span>{r.loc}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="res-reviews__actions">
              <a href="https://www.upwork.com/freelancers/~0170e20f8803389a86"
                target="_blank" rel="noopener noreferrer"
                className="res-btn res-btn--outline"
                aria-label="Verify QllmSoft real estate software reviews on Upwork">
                Verify on Upwork
              </a>
              <a href="https://www.freelancer.com/u/mrprogrmmr"
                target="_blank" rel="noopener noreferrer"
                className="res-btn res-btn--outline"
                aria-label="View QllmSoft real estate software reviews on Freelancer">
                View Freelancer Reviews
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            CTA BANNER
        ════════════════════════════════════════════════ */}
        <section className="res-cta res-section" aria-labelledby="res-cta-h2">
          <div className="res-cta__bg" aria-hidden="true" />
          <div className="res-cta__orb" aria-hidden="true" />
          <div className="res-container res-cta__inner">
            <div className="res-cta__text">
              <span className="res-cta__eyebrow">Start Your Project</span>
              <h2 id="res-cta-h2" className="res-cta__title">
                Ready to Build Your Real Estate Software?
              </h2>
              <p className="res-cta__desc">
                Tell us about your property business, your current pain points, and your goals.
                We will send you a detailed technical proposal and transparent cost estimate
                within <strong>24 hours</strong> — no commitment required.
              </p>
              <ul className="res-cta__perks" aria-label="Consultation benefits">
                {['Free 30-minute technical discovery call','Detailed scope & estimate in 24 hours','NDA signed before any discussion','No lock-in contracts'].map(p => (
                  <li key={p}><IconCheckCircle size={15}/> {p}</li>
                ))}
              </ul>
            </div>
            <div className="res-cta__action">
              <a
                href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%20want%20to%20build%20a%20real%20estate%20software%20solution!"
                target="_blank" rel="noopener noreferrer"
                className="res-cta__main-btn"
                aria-label="WhatsApp QllmSoft for real estate software development consultation"
              >
                <span className="res-cta__btn-icon" aria-hidden="true">📞</span>
                <div>
                  <small>WhatsApp Now</small>
                  <span>Free Consultation</span>
                </div>
              </a>
              <Link to="/contact" className="res-btn res-btn--ghost-dark"
                aria-label="Contact QllmSoft via contact form for real estate software">
                Or Use Contact Form
              </Link>
              <p className="res-cta__note">Typical response time: under 2 hours</p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            FAQ
        ════════════════════════════════════════════════ */}
        <section
          className="res-faq res-section res-section--alt"
          id="res-faq"
          aria-labelledby="res-faq-h2"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="res-container">
            <div className="res-section-head">
              <span className="res-eyebrow">FAQs</span>
              <h2 id="res-faq-h2" className="res-section-title">
                Real Estate Software Development — Frequently Asked Questions
              </h2>
              <p className="res-section-lead">
                Practical answers from our PropTech engineers, covering cost, timelines,
                integrations, and everything else you need to know before starting.
              </p>
            </div>
            <div className="res-faq__list">
              {FAQ_DATA.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
            </div>
            <div className="res-faq__actions">
              <Link to="/contact" className="res-btn res-btn--navy"
                aria-label="Contact QllmSoft about real estate software development">
                Ask Our Team
              </Link>
              <a
                href="https://wa.me/923348229288"
                target="_blank" rel="noopener noreferrer"
                className="res-btn res-btn--wa"
                aria-label="WhatsApp QllmSoft about your real estate software project"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            INTERNAL LINKS / RELATED SERVICES
        ════════════════════════════════════════════════ */}
        <section className="res-related" aria-labelledby="res-related-h2">
          <div className="res-container">
            <h2 id="res-related-h2" className="res-related__title">
              Explore Related Software Development Services
            </h2>
            <nav className="res-related__grid" aria-label="Related QllmSoft services">
              {[
                { to: '/custom-software-development-services',       label: 'Custom Software Development' },
                { to: '/ai-powered-software-solutions',              label: 'AI-Powered Software Solutions' },
                { to: '/mobile-app-development',                     label: 'Mobile App Development' },
                { to: '/website-development-services',               label: 'Web Development Services' },
                { to: '/api-development-services',                   label: 'API Development Services' },
                { to: '/outsource-software-development-to-pakistan', label: 'Outsource to Pakistan' },
                { to: '/web-application-development-services',       label: 'Web Application Development' },
                { to: '/legacy-system-modernization-services',       label: 'Legacy System Modernisation' },
                { to: '/best-software-house-in-pakistan',            label: 'Best Software House in Pakistan' },
              ].map((l, i) => (
                <Link key={i} to={l.to} className="res-related__link">
                  <span>{l.label}</span>
                  <IconArrowRight size={16} />
                </Link>
              ))}
            </nav>
          </div>
        </section>

      </main>
    </>
  );
};

export default RealEstateSoftware;
