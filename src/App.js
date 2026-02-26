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
import ApiDevelopmentServices from './pages/seo-pages/ApiDevelopmentServices';
import './styles/global.css';
import './App.css';
import 'animate.css';
function App() {
  return (
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
          {/* Blog Article Routes */}
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/api-development-services" element={<ApiDevelopmentServices />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
