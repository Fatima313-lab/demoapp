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
 */
export const getSystemResponse = (questionId) => {
	const responses = {
		services: `QllmSoft specializes in:
• Custom Software Development
• Web Application Development
• Mobile App Development (iOS & Android)
• API Development & Integration
• System Modernization
• AI-Powered Solutions
• Software Outsourcing

Contact us to discuss your specific project needs!`,
		technologies: `We work with modern tech stacks:
• Frontend: React, Angular, Vue.js
• Backend: .NET, Node.js, Python
• Mobile: React Native, Flutter
• Databases: SQL Server, PostgreSQL, MongoDB
• Cloud: Azure, AWS, Google Cloud
• Tools: Docker, Kubernetes, Git

Let's discuss what's best for your project!`,
		pricing: `Project costs depend on:
• Project scope and complexity
• Team size and expertise needed
• Timeline and deadlines
• Technology stack
• Maintenance & support requirements

We offer flexible engagement models and transparent pricing. Contact us for a consultation!`,
		experience: `QllmSoft has been delivering quality solutions since 2015:
• 100+ successful projects
• Clients across multiple industries
• Expert team of developers
• Portfolio includes finance, healthcare, education, real estate, and e-commerce solutions

Visit our portfolio or contact us to learn more!`,
		contact: `Get in touch with us:
📧 Email: qllmsoft@gmail.com
📱 WhatsApp: +92 334 8229288
📍 Address: H # 181, Camping Ground, Lalamusa, Pakistan
🌐 LinkedIn: linkedin.com/company/qllmsoft/

We typically reply within 5 minutes!`,
	};

	return responses[questionId] || "How can I help you today?";
};
