// QllmSoft Website Mock Data
import docControllerImg from '../assets/document-controller-qllm-soft.webp';
import financeImg from '../assets/qllm-soft-finance-management-system-11.webp';
import hrImg from '../assets/hr.webp';
import portfolioImg from '../assets/portfolio-profile.webp';
import inventory from '../assets/inventory-management .webp';
import digitalmarketing from '../assets/digitalmarketing.webp';
import CustomSoftwareDevelopment from "../assets/Custom-Software.webp";
import MobileAppDevelopment from "../assets/Mobile-app-development.webp";
import CustomWebImg from"../assets/Custom-web-developement.webp";
import APIsoftwareImg from "../assets/api-development.webp";
import systemModernization from "../assets/SystemModernization.webp";
import stickerSmashApp from "../assets/sticker-mobile-app.webp";
import webDesign from "../assets/web-design.webp";
export const companyInfo = {
  name: "QllmSoft",
  tagline: "Best for your business",
  description: "We specialize in providing custom solutions for web, mobile, and desktop applications to meet your business needs.",
  phone: "+92 334 8229288",
  email: "qllmsoft@gmail.com",
  address: "H # 181, Camping Ground, Lalamusa, Pakistan",
  whatsappLink: "https://wa.me/923348229288?text=Hi%20QllmSoft,%20I%27d%20like%20to%20discuss%20a%20project!",
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/qllmsoft/",
    facebook: "https://www.facebook.com/qllmsoft/",
    instagram: "https://www.instagram.com/qllmsoft/",
    youtube:  "https://www.youtube.com/@QllmSoft",
    twitter:  "https://x.com/qllmsoft"
  },
  founded: "2015",
  location: "Lalamusa, Gujrat, Pakistan"
};

export const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" }
];

export const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80",
    title: "QllmSoft",
    subtitle: "Best for your business",
    ctaText: "Learn More",
    ctaLink: "/about"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
    title: "Custom Software Solutions",
    subtitle: "Tailored for your success",
    ctaText: "Our Services",
    ctaLink: "/services"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
    title: "Web & Mobile Development",
    subtitle: "Transform your ideas into reality",
    ctaText: "View Projects",
    ctaLink: "/projects"
  }
];

export const homeServices = [
  {
    id: 1,
    name: "ASP.NET Core Development",
    description: "Enterprise-grade backend solutions and secure internal systems built for high-performance scalability.",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/asp-net-core-development-company-pakistan"
  },
  {
    id: 2,
    name: "Custom Web Development",
    description: "End-to-end modern web applications designed for performance, user experience, and long-term business growth.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/website-development-services"
  },
  {
    id: 3,
    name: "Mobile App Development",
    description: "High-performance iOS and Android applications crafted with seamless UX and robust functional architecture.",
    image: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/mobile-app-development"
  },
  {
    id: 4,
    name: "API & Enterprise Integration",
    description: "Robust RESTful API development and secure third-party integrations to connect your business ecosystem.",
    image: "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/api-development-services"
  },
  {
    id: 5,
    name: "AI Supported Solutions",
    description: "Integrating smart automation and machine learning models to optimize workflows and data-driven decision making.",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/ai-powered-software-solutions"
  },
  {
    id: 6,
    name: "Web Design & Digital Marketing",
    description: "Strategic UI/UX design combined with data-driven marketing to boost your brand visibility and conversion rates.",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/digital-marketing-agency-pakistan"
  }
];

export const servicesData = [
  {
    id: 1,
    name: "Custom Web Application Development",
    description: "We develop scalable custom web applications using modern cloud technologies. Our solutions include business dashboards, enterprise portals, SaaS platforms, and high-performance web systems built for security and scalability.",
    image: CustomWebImg,
    features: [
      "• Modern Front & Backend Frameworks",
      "• SaaS platform development",
      "• Enterprise web portals",
      "• Cloud-ready architectures",
      "• High-performance scalable systems"
    ],
    link: "/web-application-development-services"
  },
  {
    id: 2,
    name: "Web Design & UI/UX Services",
    description: "We create modern, responsive, and user-focused websites with premium UI/UX design principles. Our solutions are optimized for performance, mobile responsiveness, user engagement, and seamless digital experiences across all devices.",
    image: webDesign,
    features: [
      "• Modern UI/UX design systems",
      "• Fully responsive web layouts",
      "• Mobile-first user experience",
      "• Interactive & conversion-focused interfaces"
    ],
    link: "/responsive-web-design-services"
  },
  {
    id: 3,
    name: "Mobile App Development (iOS & Android)",
    slug: "mobile-app-development",
    description: "Our mobile app development services deliver high-performance iOS and Android applications for startups and businesses. We build cross-platform and native mobile apps using modern frameworks such as Flutter and React Native.",
    image: MobileAppDevelopment,
    features: [
      "• iOS and Android app development",
      "• Cross-platform Flutter apps",
      "• React Native mobile applications",
      "• Secure mobile backend APIs",
      "• Performance-optimized mobile UI/UX"
    ],
    link: "/mobile-app-development"
  },
  {
    id: 4,
    name: "Enterprise & Custom Software Development",
    slug: "enterprise-custom-software-development",
    description: "We build enterprise-grade software systems including ERP platforms, CRM solutions, and business automation tools. Our enterprise applications are designed for scalability, performance, and seamless integration with existing systems.",
    image: CustomSoftwareDevelopment,
    features: [
      "• ERP & CRM software development",
      "• Business process automation",
      "• Enterprise dashboards",
      "• Secure multi-user systems",
      "• Integration with third-party tools"
    ],
    
  },
  {
    id: 5,
    name: "API Development & System Integration",
    slug: "api-development-system-integration",
    description: "Our API development services enable seamless communication between web applications, mobile apps, and third-party systems. We build secure REST APIs and integrate external platforms to automate workflows and data synchronization.",
    image: APIsoftwareImg,
    features: [
      "• REST/SOAP/GraphQL API development",
      "• Third-party API integration",
      "• Secure authentication systems",
      "• Payment gateway integration",
      "• Real-time data synchronization"
    ]
  },
  {
    id: 6,
    name: "Legacy Software Modernization",
    description: "We modernize outdated legacy systems by migrating them to modern architectures such as ASP.NET Core and cloud-ready environments. This improves performance, scalability, and long-term maintainability.",
    image: systemModernization,
    features: [
      "• Legacy application migration",
      "• ASP.NET Core modernization",
      "• Cloud infrastructure migration",
      "• Codebase refactoring",
      "• Performance optimization"
    ]
  },
  {
    id: 7,
    name: "Digital Marketing & SEO",
    description: "We help businesses grow their online presence through data-driven digital marketing and SEO strategies. From improving search engine rankings to generating qualified leads, our approach focuses on measurable results and long-term growth.",
    image: CustomSoftwareDevelopment,
    features: [
      "• Search engine optimization (SEO)",
      "• On-page & technical SEO",
      "• Keyword research & strategy",
      "• Social media marketing",
      "• Performance tracking & analytics"
    ]
  }
];

export const projectsData = [

  {
    id: 1,
    slug: "finance-management-system",
    title: "Finance Management System",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",

    shortDescription:
      "Budgeting, analytics, expense tracking with accounting integrations.",

    details: {
      category: "Enterprise Finance | Real-Time Financial Control",

      paragraphs: [
        "The Finance Management System by QllmSoft helps businesses move away from fragmented spreadsheets and manual accounting. It centralizes budgeting and expense management, allowing teams to track spending, plan effectively, and maintain full visibility across departments. Automated financial categorization and reconciliation reduce errors, save time, and ensure accurate records without manual effort.",
        "With real-time analytics, finance teams and decision-makers can access instant insights and make faster, data-driven decisions. Role-based access keeps sensitive information secure while enabling collaboration, and integration with QuickBooks and Xero ensures a seamless, unified financial workflow. Businesses using this system see reduced accounting overhead, faster month-end closing, and clear financial visibility, making it a strategic tool for growth and efficiency."
      ],

      listTitle: "What this system enables:",
      list: [
        "Centralized budgeting & expense tracking",
        "Automated reconciliation workflows",
        "Real-time analytics dashboards",
        "Secure role-based access control"
      ],

      impact: [
        "40% accounting efficiency gain",
        "Faster financial closing",
        "Live decision insights"
      ]
    }
  },

  {
    id: 2,
    slug: "qllmdocs",
    title: "QllmDocs",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",

    shortDescription:
      "Lifecycle document management with version control and approvals.",

    details: {
      category: "Data Governance | Compliance Ready",

      paragraphs: [
        "The Document Controller is a cloud-based Document Management System (DMS) designed for industries where compliance, security, and accuracy are critical — such as healthcare, finance, and legal services.",
        "This solution manages the entire document lifecycle, from creation and review to approval, version control, and archival. With configurable access permissions and automated workflows, teams collaborate efficiently while maintaining full audit readiness."
      ],

      listTitle: "Key capabilities:",
      list: [
        "Version tracking & history logs",
        "Approval workflows",
        "Encrypted cloud storage",
        "External API integrations"
      ],

      impact: [
        "Audit ready compliance",
        "70% faster approvals",
        "Higher data security"
      ]
    }
  },

  {
    id: 3,
    slug: "hr-management-system",
    title: "HR Management System",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",

    shortDescription:
      "Employee lifecycle, payroll, and performance management platform.",

    details: {
      category: "People Operations | Workforce Automation",

      paragraphs: [
        "Our HR Management System automates core HR operations while keeping employee experience at the center. Built to replace manual HR processes, it centralizes employee data, attendance, leave management, payroll, and performance reviews.",
        "Designed as a modular and scalable solution, this HRMS adapts to different organizational structures and compliance requirements, making it suitable for startups, SMEs, and enterprise teams."
      ],

      listTitle: "Core features:",
      list: [
        "Employee lifecycle tracking",
        "Payroll automation",
        "Leave & attendance management",
        "Performance evaluation tools"
      ],

      impact: [
        "Reduced admin workload",
        "Improved employee visibility",
        "Centralized HR records"
      ]
    }
  },

  {
    id: 4,
    slug: "warehouse-management",
    title: "Warehouse Management Platform",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",

    shortDescription:
      "Inventory automation, tracking, and logistics coordination.",

    details: {
      category: "Logistics Intelligence | Inventory Optimization",

      paragraphs: [
        "This Warehouse & Inventory Automation System was built specifically for factories and manufacturing environments where manual stock tracking leads to losses and inefficiencies.",
        "Instead of generic software, we designed this system around the client’s existing SOPs, approval rules, and operational workflows. Every stock movement is tracked, approved, and recorded with full accountability."
      ],

      listTitle: "Capabilities include:",
      list: [
        "Inventory tracking dashboards",
        "Barcode scanning support",
        "Stock alerts & forecasting",
        "Logistics coordination tools"
      ],

      impact: [
        "Reduced stock errors",
        "Faster dispatch",
        "Improved inventory accuracy"
      ]
    }
  },

  {
    id: 5,
    slug: "portfolio-management-platform",
    title: "Portfolio Management Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",

    shortDescription:
      "Centralized investment tracking and performance analytics.",

    details: {
      category: "Investment Intelligence | Data Visualization",

      paragraphs: [
        "Our Portfolio Website projects focus on helping professionals, agencies, and businesses present their work through visually compelling and high-performing websites.",
        "Each website is custom-designed with responsive layouts, optimized image galleries, and SEO-ready structure to ensure both aesthetics and discoverability."
      ],

      listTitle: "Platform highlights:",
      list: [
        "Multi-portfolio tracking",
        "Interactive analytics dashboards",
        "Risk evaluation tools",
        "Performance forecasting"
      ],

      impact: [
        "Better investment insight",
        "Centralized portfolio view",
        "Data-driven decisions"
      ]
    }
  },
  {
    id: 6,
    slug: "sticker-smash-photo-editor-app",
    title: "Sticker Smash Photo Editor App",
    image: stickerSmashApp,
  
    shortDescription:
      "Interactive mobile app for editing pictures with fun stickers, emojis, and creative customization tools.",
  
    details: {
      category: "Mobile Application | Photo Editing & Entertainment",
  
      paragraphs: [
        "Sticker Smash is a modern mobile photo editing application that allows users to customize their pictures using interactive stickers, emojis, overlays, and creative editing tools through a simple and engaging interface.",
  
        "The application is designed with a smooth user experience, responsive mobile layout, and lightweight performance to provide fast image editing, sticker placement, and easy sharing functionality for Android and iOS users."
      ],
  
      listTitle: "Application features:",
  
      list: [
        "Photo upload & editing",
        "Interactive sticker placement",
        "Emoji & overlay customization",
        "Drag & resize functionality",
        "Image reset & preview options",
        "Mobile-friendly responsive UI",
        "Save & export edited images",
        "Smooth Android & iOS experience"
      ],
  
      impact: [
        "Enhanced user engagement",
        "Creative image customization",
        "Simple and interactive experience",
        "Fast mobile image editing",
        "Improved social sharing appeal"
      ]
    }
  }

];


export const blogPosts = [
  {
    id: 1,
    title: "Why Custom Software is the Future?",
    description: "Discover why custom software development is the future of business innovation and how it can transform your operations.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80",
    date: "January 15, 2026",
    category: "Technology Trends",
    slug: "why-custom-software-is-the-future"
  },
  {
    id: 2,
    title: "Top 5 Tools for Agile Teams",
    description: "Empower your dev process with these powerful tools that streamline collaboration and boost productivity.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    date: "January 12, 2026",
    category: "Development",
    slug: "top-5-tools-for-agile-teams"
  },
  {
    id: 3,
    title: "How We Build Secure Web Apps",
    description: "Security is a priority at QllmSoft. Here's how we approach building secure, robust web applications.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    date: "January 10, 2026",
    category: "Security",
    slug: "how-we-build-secure-web-apps"
  },
  {
    id: 4,
    title: "GitHub Actions vs Azure DevOps: Which CI/CD Tool Should You Choose?",
    description: "In today's fast-moving software development world, automating your build, test, and deployment process isn't optional.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80",
    date: "January 8, 2026",
    category: "DevOps",
    slug: "github-actions-vs-azure-devops"
  },
  {
    id: 5,
    title: "How Local Businesses in Pakistan Can Go Global",
    description: "In an increasingly connected world, Pakistani businesses no longer need to be limited to local markets.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    date: "January 5, 2026",
    category: "Business",
    slug: "local-businesses-go-global"
  },
  {
    id: 6,
    title: "What Makes a Great Mobile App in 2026?",
    description: "Learn what defines a great mobile app in 2026. Explore how UX, performance, and AI shape user engagement.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    date: "January 3, 2026",
    category: "Mobile Development",
    slug: "what-makes-a-great-mobile-app"
  }
];

export const aboutContent = {
  heroTitle: "Custom Software Development Company Specializing in ASP.NET & Enterprise Web Applications",
  heroSubtitle: "QllmSoft is a software development company delivering scalable ASP.NET web applications, secure APIs, and modern enterprise systems for startups and businesses worldwide.",
  mainContent: `QllmSoft is a trusted technology partner, delivering advanced web development, mobile app creation, and custom enterprise-level software solutions designed to boost efficiency and accelerate growth. Established in 2015, our mission has been clear, to help businesses adapt, compete, and excel in today's rapidly evolving digital world.

Based in Lalamusa, Gujrat, Pakistan, our team of skilled ASP.NET experts and full-stack developers works tirelessly to craft scalable, secure, and innovative IT solutions. We proudly serve businesses across Pakistan and around the globe, ensuring every project we deliver is tailored to meet unique objectives and drive measurable success.

Our approach centers on long-term partnerships, collaborating closely with clients to develop strategies and solutions that align perfectly with their vision, goals, and market demands.`,
  whatSetsUsApart: `At QllmSoft, we go beyond software development, we create enduring partnerships built on trust, creativity, and measurable outcomes. We start by thoroughly understanding your business's unique challenges, objectives, and future aspirations. This thorough understanding allows us to create personalized software solutions, flexible web platforms, and adaptive mobile apps that meet your present requirements and scale seamlessly as your business evolves.

By leveraging powerful development frameworks like ASP.NET and the latest in web and mobile technologies, we have helped clients in Lalamusa, Gujrat, and across the globe turn complex ideas into high-performance, results-driven digital solutions.`,
  services: [
    {
      title: "Tailored Web & App Development Solutions",
      description: "Every business is unique. We offer custom web, mobile, and software solutions designed to align with your goals, from dynamic websites to robust desktop applications — ensuring measurable growth."
    },
    {
      title: "Global Experience with Local Expertise",
      description: "Proudly based in Lalamusa, Gujrat, Pakistan, we blend international standards with local market insights, delivering solutions for clients across various industries worldwide."
    },
    {
      title: "Expert Web and Mobile Development Team",
      description: "Our ASP.NET specialists and full-stack developers use cutting-edge tools to create secure, scalable, and reliable applications that meet the highest industry standards."
    },
    {
      title: "Personalized Attention with an Agile Team",
      description: "As a small, agile team, we provide direct communication, faster turnaround, and highly personalized service without unnecessary bureaucracy."
    },
    {
      title: "Reliable and Efficient Solutions",
      description: "We are problem-solvers at heart — focused on delivering solutions that last, whether you need a high-performance website, a powerful mobile app, or a custom software product."
    },
    {
      title: "Continuous Support & Maintenance",
      description: "We provide ongoing support and maintenance services to ensure your software stays up-to-date, secure, and performs optimally as your business evolves."
    }
  ],
  vision: "Our vision is to become a trusted global software development company known for building innovative and scalable digital platforms that empower businesses worldwide.",
  mission: "Our mission is to design and deliver secure, scalable, and user-focused software solutions including web applications, enterprise systems, APIs, and cloud-ready platforms."
};

export const projects = [
  {
    id: 1,
    name: "QllmDocs",
    slug: "document-controller",
    description: "Save, Organize, Edit, Retrieve Documents",
    image: docControllerImg,
  },
  {
    id: 2,
    name: "Finance Management System",
    slug: "finance-management-system",
    description: "Finance, Income/Expenses, Automation",
    image: financeImg,
  },
  {
    id: 3,
    name: "HR Management",
    slug: "hr-management",
    description: "Finance, HR, Industrial",
    image: hrImg,
  },
  {
    id: 4,
    name: "Portfolio Website",
    slug: "portfolio-website",
    description: "Professional Profile, Personal Website",
    image: portfolioImg,
  },
  {
  id: 5,
  name: "Warehouse & Inventory Automation",
  slug: "warehouse-inventory-automation",
  description: "Manage stock, track inventory, automate orders, and optimize warehouse operations",
  image: inventory, // make sure to import the image
  },
  {
    id: 6,
    name: "Sticker Smasher App",
    slug: "sticker-smash-photo-editor-app",
    description: "Sticker Smash is a modern mobile photo editing application that allows users to customize their pictures.",
    image: stickerSmashApp, // make sure to import the image
    }
];

export const trustedPartners = [
  {
    name: "Freelancer",
    logo: "https://cdn.worldvectorlogo.com/logos/freelancer-1.svg",
    url: "https://www.freelancer.com/u/mrprogrmmr"
  },
  {
    name: "Upwork",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Upwork-logo.svg",
    url: "https://www.upwork.com/freelancers/~0170e20f8803389a86"
  }
];
