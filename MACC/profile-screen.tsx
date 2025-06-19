export default function ProfileScreen() {
  return (
    <div className="w-[375px] h-[812px] bg-white flex flex-col relative overflow-hidden mx-auto border border-gray-300 rounded-[25px]">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 text-black text-sm font-medium bg-white">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-black rounded-sm"></div>
          <div className="w-6 h-3 border border-black rounded-sm"></div>
        </div>
      </div>

      {/* Profile Header */}
      <div className="pt-16 px-6 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-gray-800">Sarah Johnson</h1>
            <p className="text-gray-600">Class of 2025</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-200 rounded-full h-3 mb-2">
          <div className="bg-blue-300 h-3 rounded-full" style={{ width: "80%" }}></div>
        </div>
        <p className="text-sm text-gray-600">Profile 80% Complete</p>
      </div>

      {/* Profile Sections */}
      <div className="flex-1 px-6">
        <div className="space-y-4">
          {[
            { title: "Personal Information", completed: true, icon: "👤" },
            { title: "Academic Profile", completed: true, icon: "📚" },
            { title: "Test Scores", completed: false, icon: "📝" },
            { title: "Activities & Awards", completed: false, icon: "🏆" },
          ].map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center">
                    <span className="text-lg">{section.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{section.title}</h3>
                    <p className="text-sm text-gray-600">{section.completed ? "Completed" : "Incomplete"}</p>
                  </div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    section.completed ? "bg-green-200" : "bg-gray-200"
                  }`}
                >
                  <span className="text-sm">{section.completed ? "✓" : "○"}</span>
                </div>
              </div>
              <button className="w-full bg-green-200 text-gray-800 py-2 rounded-lg text-sm font-medium">
                {section.completed ? "Edit" : "Complete"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <div className="bg-blue-200 px-6 py-3 flex justify-around items-center">
        {["🏠", "👤", "🔍", "📋", "📧"].map((icon, index) => (
          <button key={index} className={`p-2 rounded-lg ${index === 1 ? "bg-white" : ""}`}>
            <span className="text-xl">{icon}</span>
          </button>
        ))}
      </div>

      {/* Floating AI Button */}
      <button className="absolute bottom-20 right-6 w-14 h-14 bg-purple-300 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-xl">🤖</span>
      </button>
    </div>
  )
}
