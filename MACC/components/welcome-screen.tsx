"use client"

interface WelcomeScreenProps {
  onNavigate: (screen: string) => void
}

export default function WelcomeScreen({ onNavigate }: WelcomeScreenProps) {
  return (
    <div className="w-[375px] h-[812px] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center relative overflow-hidden mx-auto rounded-[25px] shadow-2xl">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 text-white text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-white rounded-sm opacity-90"></div>
          <div className="w-6 h-3 border border-white rounded-sm opacity-90"></div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 left-8 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>

      {/* Logo */}
      <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl">
        <div className="font-bold text-white text-lg">MACC</div>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-white text-center mb-3 px-8">
        My AI College
        <br />
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Counselor</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-300 text-center mb-12 px-8 leading-relaxed">
        Your intelligent guide to finding and applying to your dream college
      </p>

      {/* Buttons */}
      <div className="w-full px-8 space-y-4">
        <button
          onClick={() => onNavigate("signup")}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200"
        >
          Get Started
        </button>
        <button
          onClick={() => onNavigate("signin")}
          className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white py-4 rounded-2xl text-lg font-medium hover:bg-white/20 transition-all duration-200"
        >
          Sign In
        </button>
      </div>

      {/* Features Preview */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/40"}`}></div>
          ))}
        </div>
      </div>
    </div>
  )
}
