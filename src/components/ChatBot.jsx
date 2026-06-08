import React, { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle, Loader } from "lucide-react";
import chatbot from "../assets/qllmsoft-chatbot-logo.png";
import {
	sendMessageToGPT,
	predefinedQuestions,
	getSystemResponse,
} from "./chatbotService";
import "./ChatBot.css";

const ChatBot = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeTab, setActiveTab] = useState(null);
	const [messages, setMessages] = useState([
		{
			id: 1,
			type: "bot",
			content:
				"Hello! 👋 I'm here to help. Ask me about our services, technologies, or anything else!",
			timestamp: new Date(),
		},
	]);
	const [inputValue, setInputValue] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const handleSendMessage = async (messageContent) => {
		console.log("Sending message to backend");
		if (!messageContent.trim()) return;

		// Add user message to chat
		const userMessage = {
			id: messages.length + 1,
			type: "user",
			content: messageContent,
			timestamp: new Date(),
		};

		setMessages((prev) => [...prev, userMessage]);
		setInputValue("");
		setIsLoading(true);
		setError(null);

		try {
			// Try to get response from backend
			let response;

			try {
				response = await sendMessageToGPT(messageContent);
			} catch (backendError) {
				console.error("Backend error, using fallback:", backendError);

				// Fallback to system responses for predefined questions if backend fails
				const predefinedQ = predefinedQuestions.find(
					(q) => q.question === messageContent,
				);

				if (predefinedQ) {
					response = getSystemResponse(predefinedQ.id);
				} else {
					throw backendError; // Re-throw if not a predefined question
				}
			}

			// Add bot response to chat
			const botMessage = {
				id: messages.length + 2,
				type: "bot",
				content: response,
				timestamp: new Date(),
			};

			setMessages((prev) => [...prev, botMessage]);
		} catch (err) {
			console.error("Error sending message:", err);
			setError("Failed to get response. Please try again.");

			// Add error message to chat
			const errorMessage = {
				id: messages.length + 2,
				type: "bot",
				content: `Sorry, I encountered an error: ${err.message}. Please try again or contact us directly at qllmsoft@gmail.com or WhatsApp: +92 334 8229288`,
				timestamp: new Date(),
			};
			setMessages((prev) => [...prev, errorMessage]);
		} finally {
			setIsLoading(false);
		}
	};

	const handlePredefinedQuestion = (question) => {
		setActiveTab(question.id);
		handleSendMessage(question.question);
	};

	return (
		<>
			{/* Chat Button - Hidden when panel is open */}
			{!isOpen && (
				<button
					onClick={() => setIsOpen(true)}
					className="chatbot-button"
					title="Chat with us"
					aria-label="Open chatbot"
				>
					<MessageCircle size={24} />
				</button>
			)}

			{/* Chat Panel */}
			{isOpen && (
				<div className="chatbot-panel">
					{/* Header */}
					<div className="chatbot-header">
						<div className="chatbot-header-title">
							<h3>QllmSoft Assistant</h3>
							{/* <span className="status-indicator">Online</span> */}
						</div>
						<button
							onClick={() => setIsOpen(false)}
							className="close-button"
							title="Close chat"
							aria-label="Close chatbot"
						>
							<X size={20} />
						</button>
					</div>

					{/* Messages Container */}
					<div className="chatbot-messages">
						{messages.length === 1 ? (
							<div className="chatbot-welcome-section">
								<div className="welcome-header">
									<div className="welcome-avatar">
										<img src={chatbot} alt="QllmSoft ChatBot Avatar" />
									</div>
									<div className="welcome-text">
										<h4>QllmSoft Assistant</h4>
										<p>
											Feel free to ask me anything about our services,
											technologies, or past projects.
										</p>
									</div>
								</div>
							</div>
						) : null}

						{messages.map((message) => (
							<div
								key={message.id}
								className={`message message-${message.type}`}
							>
								<div className="message-content">{message.content}</div>
								<span className="message-time">
									{message.timestamp.toLocaleTimeString([], {
										hour: "2-digit",
										minute: "2-digit",
									})}
								</span>
							</div>
						))}
						{isLoading && (
							<div className="message message-bot loading">
								<div className="typing-indicator">
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
						)}
						<div ref={messagesEndRef} />
					</div>

					{/* Error Message */}
					{error && <div className="error-message">{error}</div>}

					{/* Suggested Questions Pills */}
					{messages.length === 1 && !isLoading && (
						<div className="suggested-questions">
							{predefinedQuestions.slice(0, 3).map((question) => (
								<button
									key={question.id}
									onClick={() => handlePredefinedQuestion(question)}
									className="question-pill"
									title={question.question}
								>
									{question.question}
								</button>
							))}
						</div>
					)}

					{/* Input Area */}
					<div className="chatbot-input-area">
						<div className="input-wrapper">
							<input
								type="text"
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
								onKeyPress={(e) => {
									if (e.key === "Enter" && !isLoading) {
										handleSendMessage(inputValue);
									}
								}}
								placeholder="Ask a question..."
								disabled={isLoading}
								className="chat-input"
							/>
							<button
								onClick={() => handleSendMessage(inputValue)}
								disabled={isLoading || !inputValue.trim()}
								className="send-button"
								aria-label="Send message"
							>
								{isLoading ? (
									<Loader size={18} className="spinner" />
								) : (
									<Send size={18} />
								)}
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ChatBot;
