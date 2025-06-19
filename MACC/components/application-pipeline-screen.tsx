"use client"

import GlassmorphismNav from "./glassmorphism-nav"
import FloatingAIButton from "./floating-ai-button"

interface ApplicationPipelineScreenProps {
  onNavigate: (screen: string) => void
}

export default function ApplicationPipelineScreen({ onNavigate }: ApplicationPipelineScreenProps) {
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
        <h1
          className="text-2xl font-bold text-slate-800 mb-2"
          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
        >
          My Applications
        </h1>
        <p
          className="text-slate-500"
          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
        >
          Track your college application journey
        </p>
      </div>

      {/* Progress Overview */}
      <div className="px-6 mb-6">
        <div
          className="bg-white rounded-2xl p-5 border border-slate-100"
          style={{ boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)" }}
        >
          <div className="flex items-center justify-between mb-3">
            <h3
              className="font-bold text-slate-800"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
            >
              Overall Progress
            </h3>
            <span
              className="text-sm font-bold text-blue-600"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
            >
              3 of 4 Started
            </span>
          </div>
          <div className="bg-slate-100 rounded-full h-3 mb-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
              style={{
                width: "75%",
                boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)",
              }}
            ></div>
          </div>
          <p
            className="text-xs text-slate-500"
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
          >
            You're making great progress!
          </p>
        </div>
      </div>

      {/* Application Timeline */}
      <div className="flex-1 px-6 pb-32">
        <div className="space-y-6">
          {[
            {
              name: "Stanford University",
              status: "Draft",
              deadline: "Jan 5, 2024",
              progress: 60,
              color: "bg-amber-500",
              bgColor: "bg-amber-50",
              textColor: "text-amber-700",
              urgency: "high",
            },
            {
              name: "MIT",
              status: "Under Review",
              deadline: "Jan 1, 2024",
              progress: 100,
              color: "bg-blue-500",
              bgColor: "bg-blue-50",
              textColor: "text-blue-700",
              urgency: "none",
            },
            {
              name: "Harvard University",
              status: "Submitted",
              deadline: "Jan 1, 2024",
              progress: 100,
              color: "bg-green-500",
              bgColor: "bg-green-50",
              textColor: "text-green-700",
              urgency: "none",
            },
            {
              name: "UC Berkeley",
              status: "Not Started",
              deadline: "Nov 30, 2024",
              progress: 0,
              color: "bg-slate-400",
              bgColor: "bg-slate-50",
              textColor: "text-slate-600",
              urgency: "low",
            },
          ].map((app, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < 3 && <div className="absolute left-8 top-20 w-0.5 h-16 bg-slate-200"></div>}

              {/* Timeline Dot */}
              <div
                className={`absolute left-6 top-6 w-4 h-4 ${app.color} rounded-full border-4 border-white`}
                style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)" }}
              ></div>

              {/* Application Card */}
              <div
                className="ml-16 bg-white rounded-2xl p-5 border border-slate-100"
                style={{ boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3
                      className="font-bold text-slate-800 text-lg mb-2"
                      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
                    >
                      {app.name}
                    </h3>
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${app.bgColor} ${app.textColor}`}
                        style={{
                          fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif",
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        {app.status}
                      </span>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span
                          className={`text-sm font-medium ${app.urgency === "high" ? "text-red-600" : "text-slate-500"}`}
                          style={{
                            fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif",
                          }}
                        >
                          Due: {app.deadline}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-sm font-medium text-slate-600"
                      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
                    >
                      Progress
                    </span>
                    <span
                      className="text-sm font-bold text-slate-800"
                      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
                    >
                      {app.progress}%
                    </span>
                  </div>
                  <div className="bg-slate-100 rounded-full h-2">
                    <div
                      className={`${app.color} h-2 rounded-full transition-all duration-500`}
                      style={{
                        width: `${app.progress}%`,
                        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => {
                    if (app.status === "Draft" || app.status === "Not Started") {
                      onNavigate("essayBuilder")
                    }
                  }}
                  className={`w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                    app.status === "Draft"
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:scale-[1.02]"
                      : app.status === "Not Started"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-[1.02]"
                        : "bg-slate-100 text-slate-500 cursor-not-allowed"
                  }`}
                  style={{
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
                    boxShadow:
                      app.status === "Draft" || app.status === "Not Started"
                        ? "0 4px 12px rgba(0, 0, 0, 0.15)"
                        : "none",
                  }}
                  disabled={app.status === "Under Review" || app.status === "Submitted"}
                >
                  {app.status === "Draft"
                    ? "Continue Application"
                    : app.status === "Not Started"
                      ? "Start Application"
                      : app.status === "Under Review"
                        ? "Under Review"
                        : "Submitted"}
                </button>

                {/* AI Insights */}
                <div
                  className={`mt-4 p-4 ${app.bgColor} rounded-xl border`}
                  style={{
                    borderColor: app.color.replace("bg-", "").replace("-500", "-200"),
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 ${app.color} rounded-lg flex items-center justify-center`}
                      style={{ boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)" }}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                        className={`text-sm font-medium ${app.textColor} mb-1`}
                        style={{
                          fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
                        }}
                      >
                        AI Insight
                      </p>
                      <p
                        className={`text-sm ${app.textColor}`}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
                      >
                        {app.status === "Draft"
                          ? "Complete your personal statement to boost your chances by 15%"
                          : app.status === "Not Started"
                            ? "This university has a 95% match with your profile"
                            : app.status === "Under Review"
                              ? "Your application is being reviewed. Expect results in 2-4 weeks"
                              : "Your application has been successfully submitted"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphism Navigation */}
      <GlassmorphismNav activeTab="applications" onNavigate={onNavigate} />

      {/* Floating AI Button */}
      <FloatingAIButton onNavigate={onNavigate} />
    </div>
  )
}
