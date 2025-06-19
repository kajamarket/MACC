"use client"

import { useTheme } from "./theme-context"

interface SettingsScreenProps {
  onNavigate: (screen: string) => void
}

export default function SettingsScreen({ onNavigate }: SettingsScreenProps) {
  const { isDarkMode, toggleTheme } = useTheme()

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
        <div className="flex items-center mb-4">
          <button
            onClick={() => onNavigate("profile")}
            className="mr-4 p-2 rounded-xl transition-colors"
            style={{
              background: theme.cardBg,
              backdropFilter: isDarkMode ? "blur(20px)" : "none",
              border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
            }}
          >
            <svg className={`w-6 h-6 ${theme.textSecondary}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1
            className={`text-2xl font-bold ${theme.textPrimary}`}
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
          >
            Settings
          </h1>
        </div>
        <p
          className={theme.textSecondary}
          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
        >
          Customize your app experience
        </p>
      </div>

      {/* Settings List */}
      <div className="flex-1 px-6 pb-32">
        <div className="space-y-6">
          {/* Appearance */}
          <div
            className="rounded-2xl p-5"
            style={{
              background: theme.cardBg,
              backdropFilter: isDarkMode ? "blur(20px)" : "none",
              border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3
              className={`font-bold ${theme.textPrimary} mb-4 flex items-center gap-3`}
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </div>
              Appearance
            </h3>
            <div className="space-y-4">
              {/* Theme Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl">{isDarkMode ? "🌙" : "☀️"}</span>
                    <span className={`font-medium ${theme.textPrimary}`}>
                      {isDarkMode ? "Dark Mode" : "Light Mode"}
                    </span>
                  </div>
                  <p className={`text-sm ${theme.textSecondary}`}>
                    {isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
                  </p>
                </div>
                <button
                  onClick={toggleTheme}
                  className={`w-16 h-8 rounded-full p-1 cursor-pointer transition-all duration-300 ${
                    isDarkMode ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-slate-200"
                  }`}
                  style={{
                    boxShadow: isDarkMode ? "0 4px 12px rgba(59, 130, 246, 0.3)" : "0 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div
                    className={`w-6 h-6 bg-white rounded-full shadow-sm transition-all duration-300 flex items-center justify-center ${
                      isDarkMode ? "translate-x-8" : "translate-x-0"
                    }`}
                  >
                    {isDarkMode ? (
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                      </svg>
                    )}
                  </div>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className={`font-medium ${theme.textPrimary}`}>Compact View</span>
                  <p className={`text-sm ${theme.textSecondary}`}>Show more content</p>
                </div>
                <div
                  className="w-12 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1 cursor-pointer"
                  style={{ boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)" }}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm ml-auto"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div
            className="rounded-2xl p-5"
            style={{
              background: theme.cardBg,
              backdropFilter: isDarkMode ? "blur(20px)" : "none",
              border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3
              className={`font-bold ${theme.textPrimary} mb-4 flex items-center gap-3`}
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5zM4.021 15.479l7.5-7.5a2.5 2.5 0 013.536 0l7.5 7.5"
                  />
                </svg>
              </div>
              Notifications
            </h3>
            <div className="space-y-4">
              {[
                { label: "Push Notifications", description: "Get instant updates", enabled: true },
                { label: "Email Updates", description: "Weekly progress reports", enabled: true },
                { label: "Deadline Reminders", description: "Never miss a deadline", enabled: true },
                { label: "AI Suggestions", description: "Personalized recommendations", enabled: false },
              ].map((setting, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <span className={`font-medium ${theme.textPrimary}`}>{setting.label}</span>
                    <p className={`text-sm ${theme.textSecondary}`}>{setting.description}</p>
                  </div>
                  <div
                    className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-all duration-300 ${
                      setting.enabled
                        ? "bg-gradient-to-r from-blue-500 to-purple-600"
                        : isDarkMode
                          ? "bg-white/20"
                          : "bg-slate-200"
                    }`}
                    style={{
                      boxShadow: setting.enabled ? "0 2px 8px rgba(59, 130, 246, 0.3)" : "none",
                    }}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${
                        setting.enabled ? "translate-x-6" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Account */}
          <div
            className="rounded-2xl p-5"
            style={{
              background: theme.cardBg,
              backdropFilter: isDarkMode ? "blur(20px)" : "none",
              border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3
              className={`font-bold ${theme.textPrimary} mb-4 flex items-center gap-3`}
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              Account
            </h3>
            <div className="space-y-3">
              {[
                { label: "Change Password", icon: "🔒", color: "from-blue-500 to-blue-600" },
                { label: "Privacy Settings", icon: "🛡️", color: "from-purple-500 to-purple-600" },
                { label: "Data Export", icon: "📤", color: "from-green-500 to-green-600" },
                { label: "Delete Account", icon: "🗑️", color: "from-red-500 to-red-600", danger: true },
              ].map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 hover:scale-[1.02] ${
                    item.danger
                      ? "bg-red-50 hover:bg-red-100 border border-red-200"
                      : isDarkMode
                        ? "bg-white/5 hover:bg-white/10 border border-white/10"
                        : "bg-slate-50 hover:bg-slate-100"
                  }`}
                  style={{
                    backdropFilter: isDarkMode ? "blur(10px)" : "none",
                  }}
                >
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center`}
                  >
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <span className={`font-medium ${item.danger ? "text-red-700" : theme.textPrimary}`}>
                    {item.label}
                  </span>
                  <svg
                    className={`w-5 h-5 ml-auto ${theme.textSecondary}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Support */}
          <div
            className="rounded-2xl p-5"
            style={{
              background: theme.cardBg,
              backdropFilter: isDarkMode ? "blur(20px)" : "none",
              border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3
              className={`font-bold ${theme.textPrimary} mb-4 flex items-center gap-3`}
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              Support
            </h3>
            <div className="space-y-3">
              {[
                { label: "Help Center", icon: "❓", color: "from-blue-500 to-blue-600" },
                { label: "Contact Support", icon: "💬", color: "from-green-500 to-green-600" },
                { label: "Terms of Service", icon: "📄", color: "from-purple-500 to-purple-600" },
                { label: "Privacy Policy", icon: "🔐", color: "from-slate-500 to-slate-600" },
              ].map((item, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    background: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(248, 250, 252, 0.8)",
                    backdropFilter: isDarkMode ? "blur(10px)" : "none",
                    border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center`}
                  >
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <span className={`font-medium ${theme.textPrimary}`}>{item.label}</span>
                  <svg
                    className={`w-5 h-5 ml-auto ${theme.textSecondary}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Sign Out */}
          <div className="pb-6">
            <button
              onClick={() => onNavigate("welcome")}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-2xl font-bold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
                boxShadow: "0 8px 24px rgba(239, 68, 68, 0.3)",
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
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
      `}</style>
    </div>
  )
}
