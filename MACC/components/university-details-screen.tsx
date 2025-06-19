"use client"

interface UniversityDetailsScreenProps {
  onNavigate: (screen: string) => void
}

export default function UniversityDetailsScreen({ onNavigate }: UniversityDetailsScreenProps) {
  return (
    <div className="w-[375px] h-[812px] bg-slate-50 flex flex-col relative overflow-hidden mx-auto rounded-[25px] shadow-2xl">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 text-white text-sm font-medium z-10">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-6 h-3 border border-white rounded-sm"></div>
        </div>
      </div>

      {/* Header with Hero Image */}
      <div className="relative h-64 bg-gradient-to-br from-red-500 via-red-600 to-red-700 overflow-hidden">
        {/* Navigation */}
        <div className="absolute top-16 left-6 right-6 flex items-center justify-between z-10">
          <button onClick={() => onNavigate("search")} className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {/* University Logo/Icon */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full blur-xl"></div>
        </div>
      </div>

      {/* University Info */}
      <div className="px-6 pt-6 pb-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Stanford University</h1>
          <p className="text-slate-500 mb-4">Stanford, California • Founded 1885</p>

          {/* Quick Stats */}
          <div className="flex justify-center gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="font-bold text-lg text-slate-800">4.8</span>
              </div>
              <p className="text-sm text-slate-500">Rating</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg text-slate-800 mb-1">$56,169</p>
              <p className="text-sm text-slate-500">Tuition</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg text-slate-800 mb-1">4.3%</p>
              <p className="text-sm text-slate-500">Acceptance</p>
            </div>
          </div>

          {/* Match Score */}
          <div className="mt-4">
            <span className="bg-green-100 text-green-700 px-6 py-2 rounded-full text-sm font-bold">
              95% Match for You
            </span>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="flex-1 px-6">
        <div className="space-y-6">
          {/* About Section */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-3">About Stanford</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Stanford University is a leading research university known for its entrepreneurial character and proximity
              to Silicon Valley. With world-class faculty and cutting-edge research facilities, Stanford offers
              exceptional opportunities across all disciplines.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-4">Key Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Total Students", value: "17,249", icon: "👥" },
                { label: "Faculty Ratio", value: "5:1", icon: "👨‍🏫" },
                { label: "Research Funding", value: "$1.8B", icon: "🔬" },
                { label: "Alumni Network", value: "240K+", icon: "🌐" },
              ].map((stat, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{stat.icon}</span>
                    <span className="text-xs font-medium text-slate-500">{stat.label}</span>
                  </div>
                  <p className="font-bold text-slate-800">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Programs */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-3">Popular Programs</h3>
            <div className="flex flex-wrap gap-2">
              {["Computer Science", "Engineering", "Business", "Medicine", "Law"].map((program, index) => (
                <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {program}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pb-6">
            <button
              onClick={() => onNavigate("applications")}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
            >
              Start Application
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-white border border-slate-200 text-slate-700 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
                Save for Later
              </button>
              <button className="bg-white border border-slate-200 text-slate-700 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating AI Button */}
      <button
        onClick={() => onNavigate("aiAssistant")}
        className="absolute bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200"
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </button>
    </div>
  )
}
