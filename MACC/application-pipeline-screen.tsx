export default function ApplicationPipelineScreen() {
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

      {/* Header */}
      <div className="pt-16 px-6 pb-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">My Applications</h1>
        <p className="text-gray-600">Track your college application progress</p>
      </div>

      {/* Application Timeline */}
      <div className="flex-1 px-6">
        <div className="space-y-6">
          {[
            {
              name: "Stanford University",
              status: "Draft",
              deadline: "Jan 5, 2024",
              progress: 60,
              color: "bg-yellow-200",
              textColor: "text-yellow-800",
            },
            {
              name: "MIT",
              status: "Under Review",
              deadline: "Jan 1, 2024",
              progress: 100,
              color: "bg-blue-200",
              textColor: "text-blue-800",
            },
            {
              name: "Harvard University",
              status: "Submitted",
              deadline: "Jan 1, 2024",
              progress: 100,
              color: "bg-green-200",
              textColor: "text-green-800",
            },
            {
              name: "UC Berkeley",
              status: "Not Started",
              deadline: "Nov 30, 2024",
              progress: 0,
              color: "bg-gray-200",
              textColor: "text-gray-600",
            },
          ].map((app, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < 3 && <div className="absolute left-6 top-16 w-0.5 h-12 bg-gray-300"></div>}

              {/* Timeline Dot */}
              <div className="absolute left-4 top-4 w-4 h-4 bg-blue-300 rounded-full border-2 border-white shadow-sm"></div>

              {/* Application Card */}
              <div className="ml-12 bg-gray-50 rounded-lg p-4 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 mb-1">{app.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${app.color} ${app.textColor}`}>
                        {app.status}
                      </span>
                      <span className="text-sm text-gray-600">Due: {app.deadline}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm text-gray-600">{app.progress}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-300 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${app.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  className={`w-full py-2 rounded-lg text-sm font-medium ${
                    app.status === "Draft"
                      ? "bg-purple-300 text-gray-800"
                      : app.status === "Not Started"
                        ? "bg-green-200 text-gray-800"
                        : "bg-gray-200 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  {app.status === "Draft"
                    ? "Continue Application"
                    : app.status === "Not Started"
                      ? "Start Application"
                      : "View Status"}
                </button>

                {/* AI Insights */}
                <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    💡 AI Insight:{" "}
                    {app.status === "Draft"
                      ? "Complete your essays to improve your chances"
                      : app.status === "Not Started"
                        ? "This university matches your profile well"
                        : "Your application is being reviewed"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <div className="bg-blue-200 px-6 py-3 flex justify-around items-center">
        {["🏠", "👤", "🔍", "📋", "📧"].map((icon, index) => (
          <button key={index} className={`p-2 rounded-lg ${index === 3 ? "bg-white" : ""}`}>
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
