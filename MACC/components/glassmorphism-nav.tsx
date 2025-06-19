"use client"

interface GlassmorphismNavProps {
  activeTab: string
  onNavigate: (screen: string) => void
}

export default function GlassmorphismNav({ activeTab, onNavigate }: GlassmorphismNavProps) {
  const navItems = [
    {
      id: "search",
      label: "Explore",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      id: "applications",
      label: "Apps",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      id: "notifications",
      label: "Inbox",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      ),
    },
    {
      id: "profile",
      label: "Profile",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className="px-8 py-4 rounded-3xl shadow-2xl border"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow:
            "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative flex flex-col items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 group ${
                activeTab === item.id ? "text-white" : "text-white/60 hover:text-white/80"
              }`}
              style={{
                background:
                  activeTab === item.id
                    ? "linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)"
                    : "transparent",
                backdropFilter: activeTab === item.id ? "blur(12px)" : "none",
                border: activeTab === item.id ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid transparent",
                boxShadow:
                  activeTab === item.id
                    ? "0 8px 24px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                    : "none",
              }}
            >
              {/* Active indicator */}
              {activeTab === item.id && (
                <div
                  className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
                    boxShadow: "0 0 12px rgba(59, 130, 246, 0.6)",
                  }}
                />
              )}

              <div
                className={`transition-all duration-300 ${
                  activeTab === item.id ? "scale-110" : "group-hover:scale-105"
                }`}
              >
                {item.icon}
              </div>

              <span
                className={`text-xs font-semibold transition-all duration-300 ${
                  activeTab === item.id ? "opacity-100" : "opacity-70 group-hover:opacity-90"
                }`}
                style={{
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
                }}
              >
                {item.label}
              </span>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  activeTab !== item.id ? "block" : "hidden"
                }`}
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                  backdropFilter: "blur(8px)",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
