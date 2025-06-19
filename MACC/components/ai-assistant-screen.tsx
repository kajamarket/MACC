"use client"

import { useState, useEffect } from "react"
import { useTheme } from "./theme-context"

interface AIAssistantScreenProps {
  onNavigate: (screen: string) => void
  user: { name: string; isLoggedIn: boolean }
}

export default function AIAssistantScreen({ onNavigate, user }: AIAssistantScreenProps) {
  const { isDarkMode } = useTheme()
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content: `Hi ${user.name}! 👋 I'm your AI college counselor. I'm here to help you find the perfect colleges and navigate the application process.`,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isListening, setIsListening] = useState(false)

  // Simulate typing indicator
  useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(() => setIsTyping(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [isTyping])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages([...messages, newMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "ai",
        content:
          "Great question! With a 3.8 GPA, you're competitive for top engineering programs. I'd recommend MIT, Stanford, and Caltech as reach schools, plus UC Berkeley and Carnegie Mellon as strong matches. Would you like me to show you specific program details?",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 2000)
  }

  const handleVoiceToggle = () => {
    setIsListening(!isListening)
    // Simulate voice recognition
    setTimeout(() => setIsListening(false), 3000)
  }

  const quickActions = [
    {
      text: "Find Best Colleges for Me",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      action: () => onNavigate("search"),
      gradient: "from-blue-500 via-blue-600 to-cyan-400",
      glow: "rgba(59, 130, 246, 0.5)",
      emoji: "🎯",
    },
    {
      text: "Essay Writing Help",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
      action: () => onNavigate("essayBuilder"),
      gradient: "from-purple-500 via-purple-600 to-pink-400",
      glow: "rgba(139, 92, 246, 0.5)",
      emoji: "✍️",
    },
    {
      text: "Financial Aid Planning",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      action: () => onNavigate("financialAid"),
      gradient: "from-emerald-500 via-green-500 to-teal-400",
      glow: "rgba(34, 197, 94, 0.5)",
      emoji: "💰",
    },
  ]

  const suggestions = [
    { text: "Show program details", icon: "📋" },
    { text: "Compare tuition costs", icon: "💵" },
    { text: "Application deadlines", icon: "📅" },
    { text: "Scholarship opportunities", icon: "🎓" },
  ]

  return (
    <div
      className="w-[375px] h-[812px] flex flex-col relative overflow-hidden mx-auto rounded-[25px]"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)",
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 right-8 w-40 h-40 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
            animation: "float 6s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute bottom-40 left-8 w-32 h-32 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
            animation: "pulse 4s ease-in-out infinite",
          }}
        ></div>
      </div>

      {/* Status Bar */}
      <div
        className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 text-white text-sm font-semibold z-20"
        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
      >
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-white rounded-sm opacity-90"></div>
          <div className="w-6 h-3 border border-white rounded-sm opacity-90"></div>
        </div>
      </div>

      {/* Header */}
      <div className="pt-16 px-6 pb-4 flex items-center z-10">
        <button
          onClick={() => onNavigate("dashboard")}
          className="mr-4 p-3 rounded-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          <svg
            className="w-6 h-6 text-white transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1">
          <h1
            className="text-xl font-bold text-white"
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
          >
            AI Assistant
          </h1>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 bg-green-400 rounded-full animate-pulse"
            style={{ boxShadow: "0 0 12px rgba(34, 197, 94, 0.6)" }}
          ></div>
          <span
            className="text-xs text-green-400 font-semibold"
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
          >
            Online
          </span>
        </div>
      </div>

      {/* AI Avatar & Greeting */}
      <div className="px-6 mb-6">
        <div
          className="rounded-3xl p-6 border relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Animated gradient border */}
          <div
            className="absolute inset-0 rounded-3xl opacity-50"
            style={{
              background:
                "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.3), transparent, rgba(139, 92, 246, 0.3), transparent)",
              backgroundSize: "400% 400%",
              animation: "borderGlow 3s linear infinite",
            }}
          ></div>

          <div className="relative flex items-start gap-4">
            <div
              className="w-16 h-16 rounded-3xl flex items-center justify-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                boxShadow: "0 12px 24px rgba(139, 92, 246, 0.4), 0 0 20px rgba(236, 72, 153, 0.3)",
              }}
            >
              {/* Enhanced AI icon */}
              <div className="relative">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                {/* Pulsing glow effect */}
                <div
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: "rgba(255, 255, 255, 0.3)" }}
                ></div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3
                  className="font-bold text-white"
                  style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
                >
                  AI Counselor
                </h3>
                <div
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: "linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.3) 100%)",
                    color: "#10b981",
                    border: "1px solid rgba(34, 197, 94, 0.3)",
                    boxShadow: "0 0 12px rgba(34, 197, 94, 0.2)",
                  }}
                >
                  Pro
                </div>
              </div>
              <p
                className="text-white/90 leading-relaxed"
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
              >
                {messages[0]?.content}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Quick Action Buttons */}
      <div className="px-6 mb-6">
        <h3
          className="text-white/80 font-semibold mb-4 flex items-center gap-2"
          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
        >
          <span className="text-lg">⚡</span>
          What can I help you with?
        </h3>
        <div className="space-y-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="w-full p-5 rounded-3xl text-left font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${action.gradient.split(" ")[1]} 0%, ${action.gradient.split(" ")[3]} 50%, ${action.gradient.split(" ")[5]} 100%)`,
                boxShadow: `0 12px 40px ${action.glow}, 0 4px 16px rgba(0, 0, 0, 0.2)`,
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
              }}
            >
              {/* Animated background overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                  backgroundSize: "200% 200%",
                  animation: "shimmer 2s infinite",
                }}
              ></div>

              <div className="relative flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  {action.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-bold">{action.text}</span>
                  </div>
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <svg
                    className="w-5 h-5 text-white/70 transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 px-6 mb-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.slice(1).map((message, index) => (
            <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] p-4 rounded-2xl ${
                  message.type === "user"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-white/10 backdrop-blur-sm border border-white/20 text-white"
                }`}
                style={{
                  boxShadow:
                    message.type === "user" ? "0 8px 24px rgba(59, 130, 246, 0.3)" : "0 8px 24px rgba(0, 0, 0, 0.2)",
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif",
                }}
              >
                {message.content}
              </div>
            </div>
          ))}

          {/* Enhanced Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-center gap-3"
                style={{ boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)" }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
                <span className="text-white/60 text-sm">AI is thinking...</span>
              </div>
            </div>
          )}

          {/* Enhanced Suggested Responses */}
          {messages.length > 1 && !isTyping && (
            <div className="space-y-3 mt-4">
              <p
                className="text-white/60 text-sm font-medium"
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
              >
                💡 Quick suggestions:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputValue(suggestion.text)
                      handleSendMessage()
                    }}
                    className="p-3 rounded-2xl text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 group"
                    style={{
                      background: "rgba(255, 255, 255, 0.15)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      color: "white",
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base">{suggestion.icon}</span>
                      <span className="text-xs group-hover:text-white/90">{suggestion.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Input Area */}
      <div className="px-6 pb-8">
        <div
          className="rounded-3xl px-6 py-4 flex items-center gap-4"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask me anything about college..."
            className="flex-1 bg-transparent outline-none text-white placeholder-white/60 font-medium"
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
          />
          <div className="flex items-center gap-3">
            {/* Enhanced Voice Button */}
            <button
              onClick={handleVoiceToggle}
              className={`p-3 rounded-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
                isListening ? "animate-pulse" : ""
              }`}
              style={{
                background: isListening
                  ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
                  : "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: isListening ? "0 0 20px rgba(239, 68, 68, 0.5)" : "none",
              }}
            >
              {isListening ? (
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6h12v12H6z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              )}
            </button>

            {/* Enhanced Send Button */}
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="p-3 rounded-2xl transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
              style={{
                background: inputValue.trim()
                  ? "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)"
                  : "rgba(255, 255, 255, 0.1)",
                boxShadow: inputValue.trim() ? "0 8px 20px rgba(139, 92, 246, 0.4)" : "none",
              }}
            >
              <svg
                className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Voice Recognition Indicator */}
        {isListening && (
          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="flex space-x-1">
              <div className="w-1 h-4 bg-red-400 rounded-full animate-pulse"></div>
              <div className="w-1 h-6 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: "0.1s" }}></div>
              <div className="w-1 h-5 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-1 h-7 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }}></div>
              <div className="w-1 h-4 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
            </div>
            <span
              className="text-white/70 text-sm font-medium"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
            >
              Listening...
            </span>
          </div>
        )}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes borderGlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  )
}
