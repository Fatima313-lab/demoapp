import SoftwareHouseImg from "../assets/BestSoftware.webp";
import EducationSoftware from "../assets/educationsoftware.webp";
import FinTechImg from "../assets/FinancialSoftware.webp";
import HealthcareSoftware from "../assets/Healthcare.webp";
import OutSourceImg from "../assets/OutSource.webp";


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
    categories: ["website"]
  },

  // MOBILE ONLY 
  {
    id: "mobile-app",
    title: "Mobile App Development",
    desc: "Android & iOS apps with smooth UX and scalable backend.",
    link: "/mobile-app-development",
    categories: ["mobile"]
  }
];