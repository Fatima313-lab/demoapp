import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { X, Send, Loader } from "lucide-react";
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
	const [messages, setMessages] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const messagesEndRef = useRef(null);

	// Load chat history from sessionStorage
	useEffect(() => {
		const savedMessages = sessionStorage.getItem("chatbotMessages");
		if (savedMessages) {
			try {
				const parsedMessages = JSON.parse(savedMessages);
				const messagesWithDates = parsedMessages.map((msg) => ({
					...msg,
					timestamp: new Date(msg.timestamp),
				}));
				setMessages(messagesWithDates);
			} catch (error) {
				console.error("Error loading chat history:", error);
				setMessages([
					{
						id: 1,
						type: "bot",
						content:
							"Hello! I'm here to help. Ask me about our services, technologies, or anything else!",
						timestamp: new Date(),
						isHTML: false,
					},
				]);
			}
		} else {
			setMessages([
				{
					id: 1,
					type: "bot",
					content:
						"Hello! I'm here to help. Ask me about our services, technologies, or anything else!",
					timestamp: new Date(),
					isHTML: false,
				},
			]);
		}
	}, []);

	// Save chat history to sessionStorage
	useEffect(() => {
		if (messages.length > 0) {
			try {
				sessionStorage.setItem("chatbotMessages", JSON.stringify(messages));
			} catch (error) {
				console.error("Error saving chat history:", error);
			}
		}
	}, [messages]);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const handleClearChat = () => {
		if (window.confirm("Are you sure you want to clear the chat history?")) {
			const welcomeMessage = {
				id: 1,
				type: "bot",
				content:
					"Hello! I'm here to help. Ask me about our services, technologies, or anything else!",
				timestamp: new Date(),
				isHTML: false,
			};
			setMessages([welcomeMessage]);
			sessionStorage.removeItem("chatbotMessages");
			setInputValue("");
			setError(null);
			setActiveTab(null);
		}
	};

	const validateMessage = (message) => {
		if (!message.trim()) {
			return { valid: false, error: "Message cannot be empty" };
		}
		if (message.length > 500) {
			return {
				valid: false,
				error: "Message is too long. Please keep it under 500 characters.",
			};
		}
		return { valid: true };
	};

	const handleSendMessage = async (messageContent) => {
		const validation = validateMessage(messageContent);
		if (!validation.valid) {
			setError(validation.error);
			return;
		}

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
					throw backendError;
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

			const errorMessage =
				err.message || "Failed to get response. Please try again.";
			setError(errorMessage);

			const errorChatMessage = {
				id: messages.length + 2,
				type: "bot",
				content: `Sorry, I encountered an error: ${errorMessage}. Please try again or contact us directly at qllmsoft@gmail.com or WhatsApp: +92 334 8229288`,
				timestamp: new Date(),
				isHTML: false,
			};
			setMessages((prev) => [...prev, errorChatMessage]);
		} finally {
			setIsLoading(false);
		}
	};

	const handlePredefinedQuestion = (question) => {
		setActiveTab(question.id);
		handleSendMessage(question.question);
	};

	const isEmptyChat = messages.length === 1 && messages[0].type === "bot";

	// ========================================
	// OPTIMIZED MARKDOWN COMPONENTS
	// ========================================
	const markdownComponents = {
		// Heading levels - downgrade for compact display in chat
		h1: ({ children }) => <h2 className="markdown-h1">{children}</h2>,
		h2: ({ children }) => <h3 className="markdown-h2">{children}</h3>,
		h3: ({ children }) => <h4 className="markdown-h3">{children}</h4>,
		h4: ({ children }) => <h4 className="markdown-h4">{children}</h4>,
		h5: ({ children }) => <h5 className="markdown-h5">{children}</h5>,
		h6: ({ children }) => <h6 className="markdown-h6">{children}</h6>,

		// Paragraphs
		p: ({ children }) => <p>{children}</p>,

		// Lists
		ul: ({ children }) => <ul>{children}</ul>,
		ol: ({ children }) => <ol>{children}</ol>,
		li: ({ children }) => <li>{children}</li>,

		// Code
		code: ({ children, className }) => {
			// Check if it's an inline code or a code block
			const isCodeBlock = className && className.includes("language-");
			if (isCodeBlock) {
				return <code>{children}</code>;
			}
			return <code className="inline-code">{children}</code>;
		},
		pre: ({ children }) => <pre className="code-block">{children}</pre>,

		// Blockquote
		blockquote: ({ children }) => <blockquote>{children}</blockquote>,

		// Links
		a: ({ href, children }) => (
			<a href={href} target="_blank" rel="noopener noreferrer">
				{children}
			</a>
		),

		// Strong/Bold
		strong: ({ children }) => <strong>{children}</strong>,

		// Emphasis
		em: ({ children }) => <em>{children}</em>,

		// Horizontal rule
		hr: () => <hr />,

		// Tables
		table: ({ children }) => <table>{children}</table>,
		thead: ({ children }) => <thead>{children}</thead>,
		tbody: ({ children }) => <tbody>{children}</tbody>,
		tr: ({ children }) => <tr>{children}</tr>,
		th: ({ children }) => <th>{children}</th>,
		td: ({ children }) => <td>{children}</td>,
	};

	return (
		<>
			{!isOpen && (
				<button
					onClick={() => setIsOpen(true)}
					className="chatbot-button"
					title="Chat with us"
					aria-label="Open chatbot"
				>
					<img
						src={chatbot}
						alt="QllmSoft ChatBot Avatar"
						style={{ padding: "12px" }}
					/>
				</button>
			)}

			{isOpen && (
				<div className="chatbot-panel">
					<div className="chatbot-header">
						<div className="chatbot-header-title">
							<h3>QllmSoft AI</h3>
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

					<div className="chatbot-messages">
						{isEmptyChat ? (
							<div className="chatbot-welcome-section">
								<div className="welcome-header">
									<div className="welcome-avatar">
										<img src={chatbot} alt="QllmSoft ChatBot Avatar" />
									</div>
									<div className="welcome-text">
										<h4>Welcome to QllmSoft AI 👋</h4>
									</div>
								</div>
							</div>
						) : null}

						{messages.map((message) => (
							<div
								key={message.id}
								className={`message message-${message.type}`}
							>
								<div className="message-content">
									{message.type === "bot" ? (
										<ReactMarkdown
											remarkPlugins={[remarkGfm]}
											components={markdownComponents}
										>
											{message.content}
										</ReactMarkdown>
									) : (
										message.content
									)}
								</div>
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

					{error && <div className="error-message">{error}</div>}

					{isEmptyChat && !isLoading && (
						<div className="suggested-questions">
							{predefinedQuestions.slice(0, 5).map((question) => (
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

					<div className="chatbot-input-area">
						<div className="input-wrapper">
							<input
								type="text"
								maxLength={500}
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
								title="Send message"
							>
								{isLoading ? (
									<Loader size={18} className="spinner" />
								) : (
									<Send size={18} />
								)}
							</button>
						</div>
						<div className="character-count">{inputValue.length}/500</div>
						<div className="chat-clear-wrapper">
							<p
								style={{
									fontSize: "11px",
									marginBottom: "0px",
								}}
							>
								Clear your chat history to start fresh.
							</p>
							<button
								onClick={handleClearChat}
								className="clear-chat-button"
								title="Clear chat history"
								aria-label="Clear chat history"
							>
								<span>Clear</span>
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ChatBot;
