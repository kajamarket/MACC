export default function SignUpScreen() {
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
      <div className="pt-16 px-6 pb-8 bg-blue-200">
        <h1 className="text-2xl font-semibold text-gray-800 text-center">Create Account</h1>
      </div>

      {/* Form */}
      <div className="flex-1 px-6 py-8">
        <div className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Create a password"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Confirm your password"
            />
          </div>

          {/* Sign Up Button */}
          <button className="w-full bg-purple-300 text-gray-800 py-4 rounded-lg text-lg font-medium shadow-md">
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-green-200 text-gray-800 py-3 rounded-lg font-medium flex items-center justify-center gap-2">
              <span>G</span> Google
            </button>
            <button className="flex-1 bg-green-200 text-gray-800 py-3 rounded-lg font-medium flex items-center justify-center gap-2">
              <span>🍎</span> Apple
            </button>
          </div>

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?
            <button className="text-blue-600 font-medium ml-1">Sign In</button>
          </p>
        </div>
      </div>
    </div>
  )
}
