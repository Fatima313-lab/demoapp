import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogArticle from './pages/BlogArticle';
import ProjectDetails from "./pages/ProjectDetails";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsofServices from './components/TermsofServices';
import CustomSoftwareDevelopment from './pages/CustomSoftwareDevelopment';
import WebsiteDevelopmentServices from './pages/WebsiteDevelopmentServices';
import ApiDevelopmentServices from './pages/ApiDevelopmentServices';  // ✅ KEEP only this one
import HireDotnetDevelopers from './pages/HireDotnetDevelopers';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import OutsourceSoftwareDevelopment from './pages/OutsourceSoftwareDevelopment';
import AiPoweredSoftware from './pages/AiPoweredSoftware';
import HireReactDevelopers    from './pages/HireReactDevelopers';
import HireAngularDevelopers  from './pages/HireAngularDevelopers';
import HireDotnetDevelopersPak from './pages/HireDotnetDevelopersPak';
import HealthcareSoftware from './pages/HealthcareSoftware';
import EducationSoftware from './pages/EducationSoftware';
import LegacyModernization from './pages/LegacyModernization';
import OutsourceApiDevelopment from './pages/OutsourceApiDevelopment';

import './styles/global.css';
import './App.css';
import 'animate.css';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <ScrollToTop />
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
            <Route path="/hire-react-developers-pakistan"   element={<HireReactDevelopers />} />
            <Route path="/hire-angular-developers-pakistan" element={<HireAngularDevelopers />} />
            <Route path="/hire-dotnet-developers-pakistan"  element={<HireDotnetDevelopersPak />} />
            <Route path="/healthcare-software-development-pakistan"  element={<HealthcareSoftware />} />
            <Route path="/education-software-development-pakistan"  element={<EducationSoftware />} />
            <Route path="/legacy-system-modernization-services"  element={<LegacyModernization />} />
            <Route path="/outsource-api-development-to-pakistan"  element={<OutsourceApiDevelopment/>} />
          </Routes>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;