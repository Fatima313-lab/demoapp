import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy loaded pages - each page loads only when visited
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const BlogArticle = lazy(() => import('./pages/BlogArticle'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsofServices = lazy(() => import('./components/TermsofServices'));
const CustomSoftwareDevelopment = lazy(() => import('./pages/CustomSoftwareDevelopment'));
const WebsiteDevelopmentServices = lazy(() => import('./pages/WebsiteDevelopmentServices'));
const ApiDevelopmentServices = lazy(() => import('./pages/ApiDevelopmentServices'));
const HireDotnetDevelopers = lazy(() => import('./pages/HireDotnetDevelopers'));
const MobileAppDevelopment = lazy(() => import('./pages/MobileAppDevelopment'));
const OutsourceSoftwareDevelopment = lazy(() => import('./pages/OutsourceSoftwareDevelopment'));
const AiPoweredSoftware = lazy(() => import('./pages/AiPoweredSoftware'));
const HireReactDevelopers = lazy(() => import('./pages/HireReactDevelopers'));
const HireAngularDevelopers = lazy(() => import('./pages/HireAngularDevelopers'));
const HireDotnetDevelopersPak = lazy(() => import('./pages/HireDotnetDevelopersPak'));
const HealthcareSoftware = lazy(() => import('./pages/HealthcareSoftware'));
const EducationSoftware = lazy(() => import('./pages/EducationSoftware'));
const LegacyModernization = lazy(() => import('./pages/LegacyModernization'));
const OutsourceApiDevelopment = lazy(() => import('./pages/OutsourceApiDevelopment'));
const WebAppDevelopment = lazy(() => import('./pages/WebAppDevelopment'));
const WebsiteDevelopmentCost = lazy(() => import('./pages/WebsiteDevelopmentCost'));
const BestSoftwareHouse = lazy(() => import('./pages/BestSoftwareHouse'));
const RealEstateSoftware = lazy(() => import('./pages/RealEstateSoftware'));
const FinanceManagementSystem = lazy(() => import('./pages/FinanceManagementSystem'));

import './styles/global.css';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <ScrollToTop />
          <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetails />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-services" element={<TermsofServices />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog/:slug" element={<BlogArticle />} />
              <Route path="/custom-software-development-services" element={<CustomSoftwareDevelopment />} />
              <Route path="/website-development-services" element={<WebsiteDevelopmentServices />} />
              <Route path="/api-development-services" element={<ApiDevelopmentServices />} />
              <Route path="/hire-dotnet-developers-pakistan" element={<HireDotnetDevelopers />} />
              <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
              <Route path="/outsource-software-development-to-pakistan" element={<OutsourceSoftwareDevelopment />} />
              <Route path="/ai-powered-software-solutions" element={<AiPoweredSoftware />} />
              <Route path="/hire-react-developers-pakistan" element={<HireReactDevelopers />} />
              <Route path="/hire-angular-developers-pakistan" element={<HireAngularDevelopers />} />
              <Route path="/hire-dotnet-developers-pakistan" element={<HireDotnetDevelopersPak />} />
              <Route path="/healthcare-software-development-pakistan" element={<HealthcareSoftware />} />
              <Route path="/education-software-development-pakistan" element={<EducationSoftware />} />
              <Route path="/legacy-system-modernization-services" element={<LegacyModernization />} />
              <Route path="/web-application-development-services" element={<WebAppDevelopment />} />
              <Route path="/website-development-cost-in-pakistan" element={<WebsiteDevelopmentCost />} />
              <Route path="/outsource-api-development-to-pakistan" element={<OutsourceApiDevelopment />} />
              <Route path="/best-software-house-in-pakistan" element={<BestSoftwareHouse />} />
              <Route path="/real-estate-software-development" element={<RealEstateSoftware />} />
              <Route path="/finance-management-system" element={<FinanceManagementSystem />} />
            </Routes>
          </Suspense>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;