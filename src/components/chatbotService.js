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
 * @param {string} message - User message
 * @returns {Promise<string>} - Response from the model
 */
export const sendMessageToGPT = async (message) => {
	try {
		const backendUrl = getBackendUrl();

		const response = await fetch(`${backendUrl}/api/chat/send`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				message: message,
			}),
		});

		if (!response.ok) {
			const errorData = await response.json();
			console.error("Backend Error:", errorData);
			throw new Error(errorData.error || "Failed to get response from backend");
		}

		const data = await response.json();
		console.log("Backend Response:", data);

		// ✅ FIXED: Backend returns plain text in data.data
		// No need to parse it as JSON or look for choices array
		if (data.success && data.data) {
			// data.data is already a plain string response from the AI
			return data.data;
		}

		throw new Error("Invalid response format from backend");
	} catch (error) {
		console.error("Chatbot Service Error:", error);
		throw error;
	}
};

/**
 * Pre-defined questions for the chatbot
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

- **Custom Software Development** - Tailored solutions built to your specifications
- **Web Application Development** - Modern, scalable web platforms
- **Mobile App Development** - iOS & Android native and cross-platform solutions
- **API Development & Integration** - Robust and secure backend systems
- **System Modernization** - Transforming legacy systems into modern architectures
- **AI-Powered Solutions** - Intelligent automation and machine learning integration
- **Software Outsourcing** - Dedicated teams for your projects

**Contact us to discuss your specific project needs!**`,

		technologies: `## ⚙️ Our Tech Stack

**Frontend Development**
- React, Angular, Vue.js

**Backend Development**
- .NET, Node.js, Python

**Mobile Development**
- React Native, Flutter

**Data Management**
- SQL Server, PostgreSQL, MongoDB

**Cloud & DevOps**
- Azure, AWS, Google Cloud
- Docker, Kubernetes

**Tools & Version Control**
- Git, GitHub, GitLab

**Let's discuss what's best for your project!**`,

		pricing: `## 💰 Project Pricing

**Costs depend on multiple factors:**

- **Project Scope** - Complexity and requirements
- **Team Composition** - Size and expertise level needed
- **Timeline** - Project duration and deadlines
- **Technology Stack** - Specific tools and frameworks
- **Support** - Maintenance and ongoing support requirements

**Our Approach:**
- ✓ Flexible engagement models
- ✓ Transparent pricing structure
- ✓ No hidden costs
- ✓ Custom solutions for your budget

**Contact us for a detailed consultation and custom quote!**`,

		experience: `## 🏆 Our Track Record

**QllmSoft - Delivering Excellence Since 2015**

**Our Achievements:**
- **100+** successful projects delivered
- **Multiple Industries** - Finance, Healthcare, Education, Real Estate, E-Commerce
- **Expert Team** - Experienced developers and architects
- **Quality First** - Proven track record of client satisfaction

**Industry Experience:**
- Financial Services & Banking
- Healthcare & Medical Solutions
- Educational Platforms
- Real Estate Technology
- E-Commerce Systems
- Enterprise Solutions

**Visit our portfolio or contact us to see how we can help your business!**`,

		contact: `## 📞 Get In Touch

**We're here to help and typically reply within 5 minutes!**

**Contact Information:**
- **📧 Email:** qllmsoft@gmail.com
- **📱 WhatsApp:** +92 334 8229288
- **📍 Office Address:** H # 181, Camping Ground, Lalamusa, Pakistan
- **🌐 LinkedIn:** linkedin.com/company/qllmsoft/

**Business Hours:**
- Monday - Friday: 9:00 AM - 6:00 PM (PKT)
- Weekend support available for urgent matters

**Quick Response:**
- Email: Reply within 1 hour
- WhatsApp: Instant response
- Call: Available during business hours

**Looking forward to working with you!**`,
	};

	return responses[questionId] || "How can I help you today?";
};
