"use client"

interface FloatingAIButtonProps {
  onNavigate: (screen: string) => void
}

export default function FloatingAIButton({ onNavigate }: FloatingAIButtonProps) {
  return (
    <button
      onClick={() => onNavigate("aiAssistant")}
      className="fixed bottom-32 right-8 w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group z-40"
      style={{
        background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
        boxShadow:
          "0 12px 40px rgba(139, 92, 246, 0.4), 0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Animated glow ring */}
      <div
        className="absolute inset-0 rounded-3xl animate-pulse"
        style={{
          background: "linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)",
          filter: "blur(8px)",
          transform: "scale(1.2)",
        }}
      />

      {/* Main icon */}
      <div className="relative z-10">
        <svg
          className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div
          className="absolute top-2 right-3 w-1 h-1 bg-white rounded-full opacity-60 animate-ping"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-3 left-2 w-1 h-1 bg-white rounded-full opacity-40 animate-ping"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-4 left-4 w-0.5 h-0.5 bg-white rounded-full opacity-50 animate-ping"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </button>
  )
}
