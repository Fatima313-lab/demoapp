/**
 * Chatbot Service - Integration with .NET Backend
 */

// Backend URL - will be set based on environment
const getBackendUrl = () => {
	if (
		window.location.hostname === "localhost" ||
		window.location.hostname === "127.0.0.1"
	) {
		return "http://localhost:5185"; // Local development
	}
	return "https://zain33-001-site2.qtempurl.com"; // Production
};

/**
 * Send message to .NET Backend which calls GitHub/OpenAI API
 * Returns both the response and follow-up suggestions
 *
 * ITEM 1: Now accepts conversation history for multi-turn context
 *
 * @param {string} userMessage - User message
 * @param {Array} history - Previous conversation turns [{role, content}, ...]
 * @returns {Promise<{response: string, suggestions: Array}>} - Response and suggestions
 */
export const sendMessageToGPT = async (userMessage, history = []) => {
	try {
		const backendUrl = getBackendUrl();

		// Keep last 10 turns only to avoid token overflow
		// Slice from the end so we always keep the most recent context
		const trimmedHistory = history.slice(-10);

		const response = await fetch(`${backendUrl}/api/chat/send`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				message: userMessage,
				history: trimmedHistory, // ← ITEM 1: Send history with every request
			}),
		});

		if (!response.ok) {
			const errorData = await response.json();
			console.error("Backend Error:", errorData);
			throw new Error(errorData.data || "Failed to get response from backend");
		}

		const data = await response.json();
		console.log("Backend Response:", data);

		if (data.success && data.data) {
			// Backend returns response and suggestions
			return {
				response: data.data,
				suggestions: data.suggestions || [],
				format: data.format || "markdown",
			};
		}

		throw new Error("Invalid response format from backend");
	} catch (error) {
		console.error("Chatbot Service Error:", error);
		throw error;
	}
};

/**
 * Pre-defined questions for the chatbot
 * These appear in the welcome section
 */
export const predefinedQuestions = [
	{
		id: "services",
		title: "Services",
		question: "What services do you offer?",
		icon: "💼",
	},
	{
		id: "technologies",
		title: "Tech Stack",
		question: "What technologies do you use?",
		icon: "⚙️",
	},
	{
		id: "pricing",
		title: "Pricing",
		question: "How much does a project cost?",
		icon: "💰",
	},
	{
		id: "experience",
		title: "Portfolio",
		question: "Can I see your work?",
		icon: "🏆",
	},
	{
		id: "contact",
		title: "Contact",
		question: "How can I contact you?",
		icon: "📞",
	},
];

/**
 * Get system responses for predefined questions (fallback)
 * Returns markdown-formatted text for rich rendering
 */
export const getSystemResponse = (questionId) => {
	const responses = {
		services: `## 🎯 Our Services

**QllmSoft specializes in:**

- **Custom Web Application Development** - Scalable business dashboards, enterprise portals, and SaaS platforms
- **Mobile App Development** - iOS & Android apps using Flutter, React Native, and native technologies
- **Enterprise & Custom Software** - ERP platforms, CRM solutions, and business automation tools
- **API Development & Integration** - REST, SOAP, GraphQL APIs with secure authentication and payment gateway integration
- **Legacy System Modernization** - Transform outdated systems to modern ASP.NET Core cloud-ready architectures
- **Cloud Development** - SaaS products and multi-tenant cloud-native applications
- **AI-Powered Solutions** - Machine learning integration, predictive analytics, and intelligent automation
- **Industry-Specific Solutions** - Fintech, Healthcare (HIPAA-compliant), Education, Real Estate, E-commerce

**Let's discuss your specific needs!**`,

		technologies: `## ⚙️ Our Tech Stack

**Frontend & UI**
- React.js, Next.js, Angular, Blazor
- Tailwind CSS, Material UI, responsive design

**Backend & APIs**
- C#, ASP.NET Core, .NET 6/8/9+
- REST/gRPC APIs, Entity Framework, microservices

**Mobile Development**
- Flutter, React Native, native Swift & Kotlin

**Databases & Storage**
- SQL Server, PostgreSQL, MongoDB
- Redis, Azure Cloud storage

**Cloud & DevOps**
- Azure, AWS, Docker, Kubernetes
- CI/CD, GitHub Actions, infrastructure automation

**Our Expertise:** Full-stack development with enterprise-grade security and performance optimization.`,

		pricing: `## 💰 Project Pricing

**Our pricing depends on:**

- **Project Scope** - Complexity, scale, and requirements
- **Team Size** - Number and expertise level of developers
- **Timeline** - Project duration and deadline requirements
- **Technology Stack** - Specific frameworks and tools
- **Post-Launch Support** - Maintenance and ongoing updates

**Pricing Examples (PKR):**
- Small Business Sites: PKR 40,000–75,000
- Custom Web Applications: PKR 80,000–280,000+
- Enterprise Solutions: PKR 300,000+
- Full-Stack Custom Development: PKR 180,000–500,000+

**Our Approach:**
✓ Fixed transparent pricing  
✓ No hidden costs  
✓ Free consultation first  
✓ Flexible engagement models  

**Schedule a free consultation for an accurate quote!**`,

		experience: `## 🏆 Our Track Record

**QllmSoft - Delivering Excellence Since 2015**

**Proven Track Record:**
- 100+ successful projects delivered
- 99% customer satisfaction rate
- Top-Rated Plus on Upwork (100% job success)
- 5-star verified on Freelancer

**Industries We Serve:**
- Financial Services & Banking
- Healthcare & Medical Solutions
- Education & E-Learning
- Real Estate & Property Management
- E-Commerce Platforms
- Enterprise Solutions

**Global Clients From:**
UK, USA, UAE, Europe, Gulf region, and Pakistan

**Notable Projects:**
- QllmDocs - AI-powered document management system
- Finance Management Platform - SME financial automation
- Warehouse Automation - AI-enhanced inventory system
- Healthcare Portals - HIPAA-compliant solutions

**See our full portfolio and case studies on our website!**`,

		contact: `## 📞 Get In Touch

**We typically respond within 5 minutes!**

**Direct Contact:**
- **📧 Email:** info@qllmsoft.com | qllmsoft@gmail.com
- **📱 WhatsApp:** +92 334 8229288
- **📍 Office:** H # 181, Camping Ground, Lalamusa, Gujrat, Pakistan
- **🌐 Website:** https://qllmsoft.com

**Social & Professional:**
- LinkedIn: linkedin.com/company/qllmsoft/
- Facebook: facebook.com/qllmsoft/
- Instagram: instagram.com/qllmsoft/
- Twitter/X: x.com/qllmsoft

**Business Hours:**
- Monday - Friday: 9:00 AM - 6:00 PM (PKT)
- Weekend support available for urgent matters

**Quick Links:**
- Free Consultation: https://qllmsoft.com/contact
- Book Direct: https://wa.me/923348229288

**Looking forward to working with you!**`,
	};

	return responses[questionId] || "How can I help you today?";
};

/**
 * Default follow-up suggestions for predefined questions
 * These are used as fallbacks if backend doesn't return suggestions
 *
 * ITEM 11: Now includes 'query' field so suggestions send natural language
 * instead of just the label text
 */
export const getDefaultSuggestions = (questionId) => {
	const suggestions = {
		services: [
			{
				id: "web-apps",
				label: "Custom Web Applications",
				description: "Learn how we build scalable business platforms",
				query:
					"Tell me more about your custom web application development services",
			},
			{
				id: "mobile-apps",
				label: "Mobile App Development",
				description: "iOS & Android apps tailored to your needs",
				query: "What mobile app development services do you offer?",
			},
			{
				id: "consultation",
				label: "Book Free Consultation",
				description: "Discuss your specific project requirements",
				query: "How can I book a free consultation with your team?",
			},
		],
		technologies: [
			{
				id: "services",
				label: "View All Services",
				description: "See how we use these technologies",
				query: "What services do you offer with these technologies?",
			},
			{
				id: "hiring",
				label: "Hire Dedicated Developers",
				description: "Work with our expert .NET and React engineers",
				query: "Can I hire dedicated developers from your team?",
			},
			{
				id: "portfolio",
				label: "See Our Projects",
				description: "Real examples of our technical expertise",
				query: "Can you show me examples of your recent projects?",
			},
		],
		pricing: [
			{
				id: "services",
				label: "Explore Our Services",
				description: "Different projects have different costs",
				query: "What services do you offer?",
			},
			{
				id: "consultation",
				label: "Get a Custom Quote",
				description: "Schedule a free consultation for your project",
				query: "How can I get a custom quote for my project?",
			},
			{
				id: "contact",
				label: "Contact Our Team",
				description: "Discuss pricing options and payment plans",
				query: "What's the best way to contact your team about pricing?",
			},
		],
		experience: [
			{
				id: "services",
				label: "View Our Services",
				description: "See what we've built for similar clients",
				query: "What services do you offer?",
			},
			{
				id: "case-study",
				label: "Case Studies & Details",
				description: "How we solved real business problems",
				query: "Do you have case studies of your successful projects?",
			},
			{
				id: "hiring",
				label: "Hire Our Team",
				description: "Work with experienced developers directly",
				query: "Can I hire developers from your team?",
			},
		],
		contact: [
			{
				id: "consultation",
				label: "Schedule Consultation",
				description: "Free session to discuss your project",
				query: "How can I schedule a free consultation?",
			},
			{
				id: "services",
				label: "Our Services",
				description: "What we can help you with",
				query: "What services do you offer?",
			},
			{
				id: "portfolio",
				label: "View Our Work",
				description: "Examples of successful projects",
				query: "Can I see your portfolio and recent projects?",
			},
		],
	};

	return suggestions[questionId] || [];
};
