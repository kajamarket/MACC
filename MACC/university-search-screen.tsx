export default function UniversitySearchScreen() {
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
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Find Universities</h1>

        {/* Search Bar */}
        <div className="bg-blue-100 rounded-lg px-4 py-3 mb-4">
          <input
            type="text"
            placeholder="Search universities..."
            className="w-full bg-transparent outline-none text-gray-800"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["All", "Engineering", "Business", "Liberal Arts", "Medicine"].map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                index === 0 ? "bg-green-200 text-gray-800" : "bg-gray-100 text-gray-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="px-6 mb-4">
        <h2 className="text-lg font-medium text-gray-800 mb-3">Top matches for you</h2>
      </div>

      {/* University List */}
      <div className="flex-1 px-6">
        <div className="space-y-4">
          {[
            { name: "Stanford University", rating: "4.8", tuition: "$56,169", location: "California", image: "🏛️" },
            { name: "MIT", rating: "4.9", tuition: "$53,790", location: "Massachusetts", image: "🎓" },
            { name: "Harvard University", rating: "4.7", tuition: "$51,925", location: "Massachusetts", image: "📚" },
            { name: "UC Berkeley", rating: "4.6", tuition: "$44,007", location: "California", image: "🌉" },
          ].map((uni, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-16 h-16 bg-blue-200 rounded-lg flex items-center justify-center text-2xl">
                  {uni.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 mb-1">{uni.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">📍 {uni.location}</p>
                  <div className="flex items-center gap-4">
                    <p className="text-sm text-gray-600">⭐ {uni.rating}</p>
                    <p className="text-sm text-gray-600">💰 {uni.tuition}</p>
                  </div>
                </div>
              </div>
              <button className="w-full bg-purple-300 text-gray-800 py-2 rounded-lg text-sm font-medium">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <div className="bg-blue-200 px-6 py-3 flex justify-around items-center">
        {["🏠", "👤", "🔍", "📋", "📧"].map((icon, index) => (
          <button key={index} className={`p-2 rounded-lg ${index === 2 ? "bg-white" : ""}`}>
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
