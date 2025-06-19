"use client"

import GlassmorphismNav from "./glassmorphism-nav"
import FloatingAIButton from "./floating-ai-button"
import GlassmorphismModal from "./glassmorphism-modal"
import { useState } from "react"
import { useTheme } from "./theme-context"

interface DashboardScreenProps {
  onNavigate: (screen: string) => void
  user: { name: string; isLoggedIn: boolean }
}

export default function DashboardScreen({ onNavigate, user }: DashboardScreenProps) {
  const [showModal, setShowModal] = useState(false)
  const { isDarkMode } = useTheme()

  const darkTheme = {
    background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #581c87 50%, #1e1b4b 75%, #0f172a 100%)",
    cardBg: "rgba(255, 255, 255, 0.06)",
    textPrimary: "text-white",
    textSecondary: "text-white/70",
    border: "border-white/10",
  }

  const lightTheme = {
    background: "linear-gradient(135deg, #f8fafc 0%, #e0f2fe 25%, #ddd6fe 50%, #e0f2fe 75%, #f8fafc 100%)",
    cardBg: "rgba(255, 255, 255, 0.8)",
    textPrimary: "text-slate-800",
    textSecondary: "text-slate-500",
    border: "border-slate-100",
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
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full opacity-10"
              style={{
                background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
                animation: "pulse 6s ease-in-out infinite",
                filter: "blur(24px)",
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
        className={`absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 text-sm font-semibold z-10 ${theme.textPrimary}`}
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
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1
              className={`text-2xl font-bold ${theme.textPrimary} mb-1`}
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
            >
              Good morning, {user.name}!
            </h1>
            <p
              className={`${theme.textSecondary}`}
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
            >
              Ready to explore your future?
            </p>
          </div>
          <div
            className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center"
            style={{
              boxShadow: "0 8px 24px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>

        {/* Enhanced Trial Banner */}
        <div
          className="rounded-3xl p-5 text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
            boxShadow: "0 12px 32px rgba(245, 158, 11, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)",
            }}
          />

          <div className="relative flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <p
                  className="font-bold text-lg"
                  style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
                >
                  Free Trial Active
                </p>
              </div>
              <p
                className="text-sm opacity-90"
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
              >
                14 days remaining • Unlock full potential
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-200 hover:scale-105"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(12px)",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              Upgrade
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Quick Stats */}
      <div className="px-6 mb-6 relative z-10">
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Applications", value: "3", color: "from-blue-500 to-cyan-400", icon: "📝" },
            { label: "Deadlines", value: "5", color: "from-purple-500 to-pink-400", icon: "⏰" },
            { label: "Essays", value: "2", color: "from-green-500 to-emerald-400", icon: "✍️" },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-3xl p-5 relative overflow-hidden group hover:scale-105 transition-all duration-300"
              style={{
                background: theme.cardBg,
                backdropFilter: "blur(20px)",
                border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(0, 0, 0, 0.05)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Hover glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${stat.color.split(" ")[1].replace("to-", "")} 0%, ${stat.color.split(" ")[2]} 100%)`,
                  opacity: 0.05,
                }}
              />

              <div className="relative">
                <div
                  className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-2xl mb-3 flex items-center justify-center`}
                  style={{
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <span className="text-lg">{stat.icon}</span>
                </div>
                <div
                  className={`text-2xl font-bold ${theme.textPrimary} mb-1`}
                  style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
                >
                  {stat.value}
                </div>
                <p
                  className={`text-sm font-medium ${theme.textSecondary}`}
                  style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced University Recommendations */}
      <div className="flex-1 px-6 pb-40 relative z-10">
        <div className="flex items-center justify-between mb-5">
          <h2
            className={`text-xl font-bold ${theme.textPrimary}`}
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
          >
            🎯 Top Matches
          </h2>
          <button
            className="text-blue-500 font-semibold text-sm px-4 py-2 rounded-xl transition-colors hover:bg-blue-50"
            style={{
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
              background: isDarkMode ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.05)",
            }}
          >
            View All
          </button>
        </div>

        <div className="space-y-4">
          {[
            {
              name: "Stanford University",
              rating: "4.8",
              deadline: "Jan 5, 2024",
              match: "95%",
              color: "from-red-500 to-red-600",
              location: "California",
            },
            {
              name: "MIT",
              rating: "4.9",
              deadline: "Jan 1, 2024",
              match: "92%",
              color: "from-gray-700 to-gray-800",
              location: "Massachusetts",
            },
            {
              name: "Harvard University",
              rating: "4.7",
              deadline: "Jan 1, 2024",
              match: "88%",
              color: "from-red-700 to-red-800",
              location: "Massachusetts",
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
              {/* Background gradient on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${uni.color.split(" ")[1]} 0%, ${uni.color.split(" ")[2]} 100%)`,
                }}
              />

              <div className="relative flex items-start gap-5">
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
                      <p
                        className={`text-sm ${theme.textSecondary} mb-2`}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
                      >
                        📍 {uni.location}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          <span
                            className={`text-sm font-semibold ${theme.textSecondary}`}
                            style={{
                              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif",
                            }}
                          >
                            {uni.rating}
                          </span>
                        </div>
                        <span
                          className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold"
                          style={{
                            fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif",
                            background:
                              "linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)",
                            border: "1px solid rgba(34, 197, 94, 0.2)",
                            boxShadow: "0 2px 8px rgba(34, 197, 94, 0.1)",
                          }}
                        >
                          {uni.match} match
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <p
                      className="text-sm text-red-500 font-medium flex items-center gap-1"
                      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
                    >
                      <span className="text-base">⏰</span>
                      Due: {uni.deadline}
                    </p>
                    <button
                      onClick={() => onNavigate("universityDetails")}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg"
                      style={{
                        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
                        boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Glassmorphism Navigation */}
      <GlassmorphismNav activeTab="dashboard" onNavigate={onNavigate} />

      {/* Enhanced Floating AI Button */}
      <FloatingAIButton onNavigate={onNavigate} />

      {/* Modal */}
      <GlassmorphismModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Upgrade to Premium"
        description="Unlock unlimited AI assistance, advanced analytics, and priority support to maximize your college application success."
        primaryAction={{
          label: "Start Free Trial",
          onClick: () => {
            setShowModal(false)
          },
        }}
        secondaryAction={{
          label: "Maybe Later",
          onClick: () => setShowModal(false),
        }}
      />

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
      `}</style>
    </div>
  )
}
