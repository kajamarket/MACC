export default function WelcomeScreen() {
  return (
    <div className="w-[375px] h-[812px] bg-gradient-to-b from-blue-200 to-blue-300 flex flex-col items-center justify-center relative overflow-hidden mx-auto border border-gray-300 rounded-[25px]">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 text-black text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-black rounded-sm"></div>
          <div className="w-6 h-3 border border-black rounded-sm"></div>
        </div>
      </div>

      {/* Logo */}
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-lg">
        <div className="text-3xl font-bold text-blue-600">AI</div>
      </div>

      {/* Tagline */}
      <h1 className="text-2xl font-semibold text-gray-800 text-center mb-12 px-8">Your AI-powered college guide</h1>

      {/* Buttons */}
      <div className="w-full px-8 space-y-4">
        <button className="w-full bg-green-200 text-gray-800 py-4 rounded-lg text-lg font-medium shadow-md hover:bg-green-300 transition-colors">
          Sign Up
        </button>
        <button className="w-full bg-white text-gray-800 py-4 rounded-lg text-lg font-medium shadow-md hover:bg-gray-50 transition-colors">
          Sign In
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-8 w-16 h-16 bg-purple-200 rounded-full opacity-50"></div>
      <div className="absolute bottom-32 left-8 w-12 h-12 bg-green-200 rounded-full opacity-50"></div>
    </div>
  )
}
