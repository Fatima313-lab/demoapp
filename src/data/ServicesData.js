import SoftwareHouseImg from "../assets/BestSoftware.webp";
import EducationSoftware from "../assets/educationsoftware.webp";
import FinTechImg from "../assets/FinancialSoftware.webp";
import HealthcareSoftware from "../assets/Healthcare.webp";
import OutSourceImg from "../assets/OutSource.webp";
import website from '../assets/website-services.webp';
import MobileappImg from '../assets/mobile-app-services-img.webp';
import AIImg from '../assets/AI-SOFTWARE.webp';
import realstateimg from '../assets/real-estate-software.webp';
import LegacyModernization  from "../assets/api-software.webp";
import apiimg from '../assets/api-development.webp';
import webapp from '../assets/web-app.webp';
import cost from '../assets/web-cost.webp';
import dotnet from '../assets/hiredotnet.webp';
import react from '../assets/react.webp';
import angular from '../assets/angular.webp';


export const SERVICES = [
  //CUSTOM SOFTWARE 
  {
    id: "best-software-house",
    title: "Best Software House",
    desc: "Top tier engineering standards and proven project delivery in Pakistan.",
    link: "/best-software-house-in-pakistan",
    image: SoftwareHouseImg,
    categories: ["custom-software", "website"]
  },
  {
    id: "fintech",
    title: "FinTech Solutions",
    desc: "Secure banking and finance systems with automated reporting layers.",
    link: "/finance-management-system",
    image: FinTechImg,
    categories: ["custom-software", "mobile"]
  },
  {
    id: "healthcare",
    title: "Healthcare Software",
    desc: "HIPAA compliant healthcare portals for patient management.",
    link: "/healthcare-software-development-pakistan",
    image: HealthcareSoftware,
    categories: ["custom-software", "mobile", "website"]
  },
  {
    id: "education",
    title: "Education Software",
    desc: "Scalable eLearning platforms built for digital education.",
    link: "/education-software-development-pakistan",
    image: EducationSoftware,
    categories: ["custom-software", "mobile", "website"]
  },
  {
    id: "outsource",
    title: "Outsource Strategy",
    desc: "Offshore development models for global scaling.",
    link: "/outsource-software-development-to-pakistan",
    image: OutSourceImg,
    categories: ["custom-software", "api"]
  },

  //WEBSITE 
  {
    id: "website-development",
    title: "Website Development",
    desc: "High‑performance business websites built to convert.",
    link: "/website-development-services",
    image: website,
    categories: ["website"]
  },

  // MOBILE ONLY 
  {
    id: "mobile-app",
    title: "Mobile App Development",
    desc: "Android & iOS apps with smooth UX and scalable backend.",
    link: "/mobile-app-development",
    image: MobileappImg,
    categories: ["mobile"]
  },
  {
    id: "ai-solutions",
    title: "AI Powered Software",
    desc: "Custom AI integrations and machine learning models for business automation.",
    link: "/ai-powered-software-solutions",
    image: AIImg,
    categories: ["custom-software", "website", "mobile"]
  },{
    id: "real-estate",
    title: "Real Estate Software",
    desc: "Property management and CRM solutions for the modern real estate market.",
    link: "/real-estate-software-development",
    image: realstateimg,
    categories: ["custom-software", "website", "mobile"]
  },
  {
    id: "legacy-modernization",
    title: "Legacy Modernization",
    desc: "Transforming outdated systems into high performance cloud native apps.",
    link: "/legacy-system-modernization-services",
    image: LegacyModernization,
    categories: ["custom-software", "website", "api"]
  },
  {
    id: "outsource-api",
    title: "Outsource API Dev",
    desc: "Specialized API engineering and third party system integrations.",
    link: "/outsource-api-development-to-pakistan",
    image: apiimg,
    categories: ["api"]
  },
  {
    id: "web-app-services",
    title: "Web App Development",
    desc: "Custom enterprise grade web applications with scalable architecture.",
    link: "/web-application-development-services",
    image: webapp,
    categories: ["website"]
  },
  {
    id: "website-cost",
    title: "Website Dev Cost",
    desc: "Transparent pricing models for high converting business websites.",
    link: "/website-development-cost-in-pakistan",
    image: cost,
    categories: ["website"]
  },
  {
    id: "hire-dotnet",
    title: "Hire .NET Developers",
    desc: "Access senior ASP.NET Core experts for enterprise level security.",
    link: "/hire-dotnet-developers-pakistan",
    image: dotnet,
    categories: ["custom-software", "website"]
  },
  {
    id: "hire-react",
    title: "Hire React Developers",
    desc: "Dedicated frontend experts for building fast, reactive interfaces.",
    link: "/hire-react-developers-pakistan",
    image: react,
    categories: ["website", "custom-software"]
  },
  {
    id: "hire-angular",
    title: "Hire Angular Developers",
    desc: "Senior Angular engineers for complex single page applications.",
    link: "/hire-angular-developers-pakistan",
    image: angular,
    categories: ["website", "custom-software"]
  }
];