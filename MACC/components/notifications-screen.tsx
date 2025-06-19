"use client"

import GlassmorphismNav from "./glassmorphism-nav"
import FloatingAIButton from "./floating-ai-button"

interface NotificationsScreenProps {
  onNavigate: (screen: string) => void
}

export default function NotificationsScreen({ onNavigate }: NotificationsScreenProps) {
  return (
    <div
      className="w-[375px] h-[812px] bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col relative overflow-hidden mx-auto rounded-[25px]"
      style={{ boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
    >
      {/* Status Bar */}
      <div
        className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 text-slate-800 text-sm font-semibold"
        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
      >
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-slate-800 rounded-sm"></div>
          <div className="w-6 h-3 border border-slate-800 rounded-sm"></div>
        </div>
      </div>

      {/* Header */}
      <div className="pt-16 px-6 pb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1
              className="text-2xl font-bold text-slate-800 mb-1"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
            >
              Notifications
            </h1>
            <p
              className="text-slate-500"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
            >
              Stay updated on your college journey
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span
              className="text-sm font-medium text-slate-600"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
            >
              Push
            </span>
            <div
              className="w-12 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1 cursor-pointer"
              style={{ boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)" }}
            >
              <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="flex-1 px-6 pb-32">
        <div className="space-y-4">
          {[
            {
              title: "Application Deadline Alert",
              message: "Stanford University application due in 3 days",
              time: "2 hours ago",
              type: "deadline",
              unread: true,
              icon: "⏰",
              color: "from-red-500 to-red-600",
              bgColor: "bg-red-50",
              borderColor: "border-red-200",
            },
            {
              title: "New Scholarship Match",
              message: "You qualify for the Merit Scholarship Program worth $15,000",
              time: "1 day ago",
              type: "scholarship",
              unread: true,
              icon: "💰",
              color: "from-green-500 to-green-600",
              bgColor: "bg-green-50",
              borderColor: "border-green-200",
            },
            {
              title: "Essay Feedback Ready",
              message: "AI has reviewed your personal statement with suggestions",
              time: "2 days ago",
              type: "feedback",
              unread: false,
              icon: "✍️",
              color: "from-blue-500 to-blue-600",
              bgColor: "bg-blue-50",
              borderColor: "border-blue-200",
            },
            {
              title: "Application Status Update",
              message: "MIT has received and is reviewing your application",
              time: "3 days ago",
              type: "status",
              unread: false,
              icon: "📋",
              color: "from-purple-500 to-purple-600",
              bgColor: "bg-purple-50",
              borderColor: "border-purple-200",
            },
            {
              title: "Profile Completion Reminder",
              message: "Complete your test scores section to improve recommendations",
              time: "1 week ago",
              type: "profile",
              unread: false,
              icon: "👤",
              color: "from-amber-500 to-orange-500",
              bgColor: "bg-amber-50",
              borderColor: "border-amber-200",
            },
          ].map((notification, index) => (
            <div
              key={index}
              className={`${notification.bgColor} rounded-2xl p-5 border ${notification.borderColor} relative`}
              style={{ boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)" }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${notification.color} rounded-xl flex items-center justify-center`}
                  style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)" }}
                >
                  <span className="text-xl">{notification.icon}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3
                      className="font-bold text-slate-800 text-lg"
                      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
                    >
                      {notification.title}
                    </h3>
                    {notification.unread && (
                      <div
                        className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        style={{ boxShadow: "0 0 8px rgba(59, 130, 246, 0.4)" }}
                      ></div>
                    )}
                  </div>
                  <p
                    className="text-slate-700 mb-3 leading-relaxed"
                    style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
                  >
                    {notification.message}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-sm text-slate-500 font-medium"
                      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
                    >
                      {notification.time}
                    </span>
                    <button
                      className={`px-4 py-2 bg-gradient-to-r ${notification.color} text-white rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105`}
                      style={{
                        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mark All Read */}
        <div className="mt-6">
          <button
            className="w-full bg-white border border-slate-200 text-slate-600 py-3 rounded-xl font-semibold transition-colors hover:bg-slate-50"
            style={{
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
            }}
          >
            Mark All as Read
          </button>
        </div>
      </div>

      {/* Glassmorphism Navigation */}
      <GlassmorphismNav activeTab="notifications" onNavigate={onNavigate} />

      {/* Floating AI Button */}
      <FloatingAIButton onNavigate={onNavigate} />
    </div>
  )
}
