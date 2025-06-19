export default function AIAssistantScreen() {
  return (
    <div className="w-[375px] h-[812px] bg-gradient-to-b from-blue-200 to-blue-300 flex flex-col relative overflow-hidden mx-auto border border-gray-300 rounded-[25px]">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 text-black text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-black rounded-sm"></div>
          <div className="w-6 h-3 border border-black rounded-sm"></div>
        </div>
      </div>

      {/* Header */}
      <div className="pt-16 px-6 pb-4 flex items-center">
        <button className="mr-4 p-2">
          <span className="text-xl">←</span>
        </button>
        <h1 className="text-lg font-semibold text-gray-800">AI Assistant</h1>
      </div>

      {/* Greeting */}
      <div className="px-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center">
              <span className="text-lg">🤖</span>
            </div>
            <div className="flex-1">
              <p className="text-gray-800 leading-relaxed">
                Hey Sarah, let me know how I can help you find amazing colleges?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="px-6 mb-8">
        <div className="space-y-3">
          {["Best Colleges for Me", "Essay Writing Help", "Financial Aid Options"].map((action, index) => (
            <button
              key={index}
              className="w-full bg-green-200 text-gray-800 py-4 px-6 rounded-lg text-left font-medium shadow-sm"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 px-6 mb-4">
        <div className="space-y-4">
          <div className="flex justify-end">
            <div className="bg-white rounded-2xl px-4 py-3 max-w-[80%] shadow-sm">
              <p className="text-gray-800">What are the best engineering schools?</p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-purple-100 rounded-2xl px-4 py-3 max-w-[80%] shadow-sm">
              <p className="text-gray-800">
                Based on your profile, I'd recommend MIT, Stanford, and Caltech for engineering. Would you like me to
                show you specific programs?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="px-6 pb-8">
        <div className="bg-white rounded-full px-4 py-3 flex items-center shadow-sm">
          <input type="text" placeholder="Message AI Assistant" className="flex-1 outline-none text-gray-800" />
          <button className="ml-3 w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center">
            <span className="text-sm">🎤</span>
          </button>
        </div>
      </div>
    </div>
  )
}
