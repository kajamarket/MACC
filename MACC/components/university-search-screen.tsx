"use client"

import GlassmorphismNav from "./glassmorphism-nav"
import FloatingAIButton from "./floating-ai-button"
import { useTheme } from "./theme-context"

interface UniversitySearchScreenProps {
  onNavigate: (screen: string) => void
}

export default function UniversitySearchScreen({ onNavigate }: UniversitySearchScreenProps) {
  const { isDarkMode } = useTheme()

  const darkTheme = {
    background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #581c87 50%, #1e1b4b 75%, #0f172a 100%)",
    cardBg: "rgba(255, 255, 255, 0.06)",
    textPrimary: "text-white",
    textSecondary: "text-white/70",
  }

  const lightTheme = {
    background: "linear-gradient(135deg, #f8fafc 0%, #e0f2fe 25%, #ddd6fe 50%, #e0f2fe 75%, #f8fafc 100%)",
    cardBg: "rgba(255, 255, 255, 0.8)",
    textPrimary: "text-slate-800",
    textSecondary: "text-slate-500",
  }

  const theme = isDarkMode ? darkTheme : lightTheme

  return (
    <div
      className="w-[375px] h-[812px] flex flex-col relative overflow-hidden mx-auto rounded-[25px]"
      style={{
        background: theme.background,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isDarkMode ? (
          <>
            <div
              className="absolute top-20 right-8 w-40 h-40 rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
                animation: "float 8s ease-in-out infinite",
                filter: "blur(20px)",
              }}
            />
            <div
              className="absolute bottom-40 left-8 w-32 h-32 rounded-full opacity-15"
              style={{
                background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
                animation: "float 10s ease-in-out infinite reverse",
                filter: "blur(16px)",
              }}
            />
          </>
        ) : (
          <>
            <div
              className="absolute top-20 right-8 w-32 h-32 rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
                animation: "float 8s ease-in-out infinite",
                filter: "blur(16px)",
              }}
            />
            <div
              className="absolute bottom-40 left-8 w-24 h-24 rounded-full opacity-25"
              style={{
                background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
                animation: "float 10s ease-in-out infinite reverse",
                filter: "blur(12px)",
              }}
            />
          </>
        )}
      </div>

      {/* Status Bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 text-sm font-semibold ${theme.textPrimary}`}
        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
      >
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className={`w-4 h-2 rounded-sm ${isDarkMode ? "bg-white" : "bg-slate-800"}`}></div>
          <div className={`w-6 h-3 border rounded-sm ${isDarkMode ? "border-white" : "border-slate-800"}`}></div>
        </div>
      </div>

      {/* Header */}
      <div className="pt-16 px-6 pb-6 relative z-10">
        <h1
          className={`text-2xl font-bold ${theme.textPrimary} mb-6`}
          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
        >
          🔍 Discover Universities
        </h1>

        {/* Enhanced Search Bar */}
        <div className="relative mb-6">
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: theme.cardBg,
              backdropFilter: "blur(20px)",
              border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(0, 0, 0, 0.05)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
          />
          <div className="relative flex items-center">
            <div className="absolute left-5 flex items-center pointer-events-none">
              <svg className={`h-5 w-5 ${theme.textSecondary}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              className={`w-full pl-14 pr-5 py-4 bg-transparent outline-none ${theme.textPrimary} placeholder-opacity-60`}
              placeholder="Search universities..."
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif",
              }}
            />
          </div>
        </div>

        {/* Enhanced Filter Chips */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {["All", "Engineering", "Business", "Liberal Arts", "Medicine", "Computer Science"].map((filter, index) => (
            <button
              key={index}
              className={`px-5 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-200 hover:scale-105 ${
                index === 0
                  ? "text-white"
                  : isDarkMode
                    ? "text-white/70 hover:text-white/90"
                    : "text-slate-600 hover:text-slate-800"
              }`}
              style={{
                background: index === 0 ? "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)" : theme.cardBg,
                backdropFilter: "blur(20px)",
                border:
                  index === 0
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : isDarkMode
                      ? "1px solid rgba(255, 255, 255, 0.08)"
                      : "1px solid rgba(0, 0, 0, 0.05)",
                boxShadow:
                  index === 0
                    ? "0 8px 20px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                    : "0 4px 12px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced AI Suggestions Banner */}
      <div className="px-6 mb-4 relative z-10">
        <div
          className="rounded-3xl p-5 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(139, 92, 246, 0.2)",
            boxShadow: "0 8px 24px rgba(139, 92, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center"
              style={{
                boxShadow: "0 8px 20px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <div>
              <h3
                className={`font-bold ${theme.textPrimary} mb-1`}
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
              >
                🎯 AI-Powered Matches
              </h3>
              <p
                className={`text-sm ${theme.textSecondary}`}
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
              >
                Based on your profile and interests
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced University List */}
      <div className="flex-1 px-6 pb-40 relative z-10">
        <div className="space-y-4">
          {[
            {
              name: "Stanford University",
              rating: "4.8",
              tuition: "$56,169",
              location: "California",
              match: "95%",
              color: "from-red-500 to-red-600",
              acceptance: "4.3%",
            },
            {
              name: "MIT",
              rating: "4.9",
              tuition: "$53,790",
              location: "Massachusetts",
              match: "92%",
              color: "from-gray-700 to-gray-800",
              acceptance: "6.7%",
            },
            {
              name: "Harvard University",
              rating: "4.7",
              tuition: "$51,925",
              location: "Massachusetts",
              match: "88%",
              color: "from-red-700 to-red-800",
              acceptance: "5.2%",
            },
            {
              name: "UC Berkeley",
              rating: "4.6",
              tuition: "$44,007",
              location: "California",
              match: "85%",
              color: "from-blue-600 to-blue-700",
              acceptance: "17.5%",
            },
          ].map((uni, index) => (
            <div
              key={index}
              className="rounded-3xl p-6 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300"
              style={{
                background: theme.cardBg,
                backdropFilter: "blur(20px)",
                border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(0, 0, 0, 0.05)",
                boxShadow: "0 12px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className={`w-18 h-18 bg-gradient-to-br ${uni.color} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  style={{
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3
                        className={`font-bold text-lg ${theme.textPrimary} mb-1`}
                        style={{
                          fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
                        }}
                      >
                        {uni.name}
                      </h3>
                      <div className="flex items-center gap-1 mb-2">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span
                          className={`text-sm ${theme.textSecondary}`}
                          style={{
                            fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif",
                          }}
                        >
                          {uni.location}
                        </span>
                      </div>
                    </div>
                    <span
                      className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold"
                      style={{
                        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif",
                        background: "linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)",
                        border: "1px solid rgba(34, 197, 94, 0.2)",
                        boxShadow: "0 2px 8px rgba(34, 197, 94, 0.1)",
                      }}
                    >
                      {uni.match} match
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span
                        className={`text-sm font-semibold ${theme.textSecondary}`}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
                      >
                        {uni.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                      <span
                        className={`text-sm font-semibold ${theme.textSecondary}`}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
                      >
                        {uni.tuition}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm">📊</span>
                      <span
                        className={`text-sm font-semibold ${theme.textSecondary}`}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
                      >
                        {uni.acceptance}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate("universityDetails")}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-2xl font-bold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                    style={{
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
                      boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Glassmorphism Navigation */}
      <GlassmorphismNav activeTab="search" onNavigate={onNavigate} />

      {/* Enhanced Floating AI Button */}
      <FloatingAIButton onNavigate={onNavigate} />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
