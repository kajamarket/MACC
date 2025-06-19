export default function DashboardScreen() {
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
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Hello, Sarah!</h1>
        <div className="bg-blue-100 px-4 py-2 rounded-lg">
          <p className="text-sm text-blue-800">Free Trial: 14 days remaining</p>
        </div>
      </div>

      {/* University Cards */}
      <div className="flex-1 px-6">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Recommended for You</h2>
        <div className="space-y-4">
          {[
            { name: "Stanford University", rating: "4.8", deadline: "Jan 5, 2024", image: "🏛️" },
            { name: "MIT", rating: "4.9", deadline: "Jan 1, 2024", image: "🎓" },
            { name: "Harvard University", rating: "4.7", deadline: "Jan 1, 2024", image: "📚" },
          ].map((uni, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center text-2xl">
                    {uni.image}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{uni.name}</h3>
                    <p className="text-sm text-gray-600">⭐ {uni.rating}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-red-600">Deadline: {uni.deadline}</p>
                <button className="bg-green-200 px-4 py-2 rounded-lg text-sm font-medium">Apply with AI</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <div className="bg-blue-200 px-6 py-3 flex justify-around items-center">
        {["🏠", "👤", "🔍", "📋", "📧"].map((icon, index) => (
          <button key={index} className={`p-2 rounded-lg ${index === 0 ? "bg-white" : ""}`}>
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
