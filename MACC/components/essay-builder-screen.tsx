"use client"

interface EssayBuilderScreenProps {
  onNavigate: (screen: string) => void
}

export default function EssayBuilderScreen({ onNavigate }: EssayBuilderScreenProps) {
  return (
    <div className="w-[375px] h-[812px] bg-slate-50 flex flex-col relative overflow-hidden mx-auto rounded-[25px] shadow-2xl">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 text-slate-800 text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-slate-800 rounded-sm"></div>
          <div className="w-6 h-3 border border-slate-800 rounded-sm"></div>
        </div>
      </div>

      {/* Header */}
      <div className="pt-16 px-6 pb-6">
        <div className="flex items-center mb-4">
          <button
            onClick={() => onNavigate("applications")}
            className="mr-4 p-2 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-slate-800">Essay Builder</h1>
        </div>
        <p className="text-slate-500">Craft compelling essays with AI assistance</p>
      </div>

      {/* Tabs */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-2xl p-1 flex shadow-sm border border-slate-100">
          {["My Essays", "Common App", "University"].map((tab, index) => (
            <button
              key={index}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                index === 0
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6">
        <div className="space-y-6">
          {/* My Essays Section */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-800">Your Essays</h3>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">2 Active</span>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Personal Statement",
                  status: "Draft",
                  progress: 75,
                  lastEdited: "2 hours ago",
                  wordCount: "425/650",
                  color: "amber",
                },
                {
                  title: "Why Stanford?",
                  status: "Complete",
                  progress: 100,
                  lastEdited: "1 day ago",
                  wordCount: "650/650",
                  color: "green",
                },
              ].map((essay, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 text-lg">{essay.title}</h4>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm text-slate-500">Last edited: {essay.lastEdited}</span>
                        <span className="text-sm font-medium text-slate-600">{essay.wordCount} words</span>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        essay.status === "Complete" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {essay.status}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600">Progress</span>
                      <span className="text-sm font-bold text-slate-800">{essay.progress}%</span>
                    </div>
                    <div className="bg-slate-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${essay.color === "green" ? "bg-green-500" : "bg-amber-500"}`}
                        style={{ width: `${essay.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                    Continue Writing
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* AI Writing Assistant */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-5 border border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-purple-900">AI Writing Assistant</h4>
                <p className="text-sm text-purple-700">Get personalized help with your essays</p>
              </div>
            </div>
            <button className="w-full bg-white/50 backdrop-blur-sm text-purple-800 py-3 rounded-xl font-semibold hover:bg-white/70 transition-colors">
              Start AI Session
            </button>
          </div>

          {/* Common Prompts */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-4">Popular Essay Prompts</h3>
            <div className="space-y-3">
              {[
                "Tell us about a personal challenge you've overcome...",
                "Describe a time when you questioned or challenged a belief...",
                "Reflect on something that someone has done for you...",
              ].map((prompt, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="text-sm text-slate-700 mb-3 leading-relaxed">{prompt}</p>
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all duration-200">
                    Start Writing
                  </button>
                </div>
              ))}
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
