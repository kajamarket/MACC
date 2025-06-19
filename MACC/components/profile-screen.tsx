"use client"
import { useTheme } from "./theme-context"

interface ProfileScreenProps {
  onNavigate: (screen: string) => void
  user: { name: string; isLoggedIn: boolean }
}

export default function ProfileScreen({ onNavigate, user }: ProfileScreenProps) {
  const { isDarkMode } = useTheme()

  const darkTheme = {
    background: "linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)",
    cardBg: "rgba(255, 255, 255, 0.08)",
    textPrimary: "text-white",
    textSecondary: "text-white/70",
    border: "border-white/20",
  }

  const lightTheme = {
    background: "linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)",
    cardBg: "rgba(255, 255, 255, 0.9)",
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
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Animated Background Elements for Dark Mode */}
      {isDarkMode && (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 right-8 w-32 h-32 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
              animation: "float 6s ease-in-out infinite",
            }}
          ></div>
          <div
            className="absolute bottom-40 left-8 w-24 h-24 rounded-full opacity-15"
            style={{
              background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
              animation: "float 8s ease-in-out infinite reverse",
            }}
          ></div>
        </div>
      )}

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
      <div className="pt-16 px-6 pb-6">
        <div className="flex items-center justify-between mb-6">
          <h1
            className={`text-2xl font-bold ${theme.textPrimary}`}
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
          >
            My Profile
          </h1>
          <button
            onClick={() => onNavigate("settings")}
            className="p-2 rounded-xl transition-colors"
            style={{
              background: theme.cardBg,
              backdropFilter: isDarkMode ? "blur(20px)" : "none",
              border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
            }}
          >
            <svg className={`w-6 h-6 ${theme.textSecondary}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>

        {/* Profile Card */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: theme.cardBg,
            backdropFilter: isDarkMode ? "blur(20px)" : "none",
            border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center"
              style={{ boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)" }}
            >
              <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
              >
                {user.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <h2
                className={`text-2xl font-bold ${theme.textPrimary} mb-1`}
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
              >
                {user.name} Johnson
              </h2>
              <p
                className={theme.textSecondary}
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
              >
                Class of 2025 • High School Senior
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span
                className={`text-sm font-medium ${theme.textSecondary}`}
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
              >
                Profile Completion
              </span>
              <span
                className={`text-sm font-bold ${theme.textPrimary}`}
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
              >
                85%
              </span>
            </div>
            <div className="bg-slate-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                style={{ width: "85%", boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Sections */}
      <div className="flex-1 px-6 pb-32">
        <div className="space-y-4">
          {[
            { title: "Personal Information", completed: true, icon: "👤", color: "from-blue-500 to-blue-600" },
            { title: "Academic Profile", completed: true, icon: "📚", color: "from-green-500 to-green-600" },
            { title: "Test Scores", completed: false, icon: "📝", color: "from-amber-500 to-orange-500" },
            { title: "Activities & Awards", completed: false, icon: "🏆", color: "from-purple-500 to-purple-600" },
            { title: "Essays & Writing", completed: true, icon: "✍️", color: "from-pink-500 to-rose-500" },
          ].map((section, index) => (
            <div
              key={index}
              className="rounded-2xl p-5"
              style={{
                background: theme.cardBg,
                backdropFilter: isDarkMode ? "blur(20px)" : "none",
                border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center`}
                    style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)" }}
                  >
                    <span className="text-xl">{section.icon}</span>
                  </div>
                  <div>
                    <h3
                      className={`font-bold ${theme.textPrimary}`}
                      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
                    >
                      {section.title}
                    </h3>
                    <p
                      className={`text-sm ${theme.textSecondary}`}
                      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
                    >
                      {section.completed ? "Completed" : "Needs attention"}
                    </p>
                  </div>
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    section.completed ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"
                  }`}
                  style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
                >
                  <span className="text-sm font-bold">{section.completed ? "✓" : "!"}</span>
                </div>
              </div>
              <button
                className={`w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-[1.02] ${
                  section.completed
                    ? "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                }`}
                style={{
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
                  boxShadow: section.completed ? "none" : "0 4px 12px rgba(59, 130, 246, 0.3)",
                }}
              >
                {section.completed ? "Edit" : "Complete"}
              </button>
            </div>
          ))}
        </div>
      </div>

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
