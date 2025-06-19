"use client"

interface FinancialAidScreenProps {
  onNavigate: (screen: string) => void
}

export default function FinancialAidScreen({ onNavigate }: FinancialAidScreenProps) {
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
            onClick={() => onNavigate("dashboard")}
            className="mr-4 p-2 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-slate-800">Financial Aid</h1>
        </div>
        <p className="text-slate-500">Plan and calculate your college costs</p>
      </div>

      {/* Tabs */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-2xl p-1 flex shadow-sm border border-slate-100">
          {["Calculator", "Scholarships", "FAFSA"].map((tab, index) => (
            <button
              key={index}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                index === 0
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Cost Calculator */}
      <div className="flex-1 px-6">
        <div className="space-y-6">
          {/* Estimated Cost Card */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 text-white shadow-lg">
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2">Your Estimated Annual Cost</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$28,500</span>
                <p className="text-green-100 mt-2">after financial aid</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Cost</span>
                  <span className="font-semibold">$76,799</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm">Expected Aid</span>
                  <span className="font-semibold">-$48,299</span>
                </div>
              </div>
            </div>
          </div>

          {/* Input Form */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-4">Update Your Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Annual Family Income</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>$50,000 - $75,000</option>
                  <option>$75,000 - $100,000</option>
                  <option>$100,000 - $150,000</option>
                  <option>$150,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Siblings in College</label>
                <div className="flex gap-2">
                  {[0, 1, 2, 3].map((num) => (
                    <button
                      key={num}
                      className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-colors ${num === 0 ? "bg-green-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">State of Residence</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>California</option>
                  <option>New York</option>
                  <option>Texas</option>
                  <option>Florida</option>
                  <option>Other</option>
                </select>
              </div>

              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-200">
                Recalculate Costs
              </button>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <h4 className="font-bold text-slate-800 mb-4">Detailed Breakdown</h4>
            <div className="space-y-3">
              {[
                { item: "Tuition & Fees", amount: "$56,169", percentage: 73 },
                { item: "Room & Board", amount: "$17,255", percentage: 22 },
                { item: "Books & Supplies", amount: "$1,245", percentage: 2 },
                { item: "Personal Expenses", amount: "$2,130", percentage: 3 },
              ].map((cost, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-slate-600">{cost.item}</span>
                      <span className="font-bold text-slate-800">{cost.amount}</span>
                    </div>
                    <div className="bg-slate-100 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                        style={{ width: `${cost.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Aid Tips */}
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-5 border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">AI Financial Tips</h4>
                <p className="text-sm text-slate-600">Personalized recommendations</p>
              </div>
            </div>
            <p className="text-sm text-slate-700 mb-3">
              💡 Based on your profile, you may qualify for need-based aid. Consider applying to schools with generous
              financial aid policies.
            </p>
            <button className="w-full bg-white/70 backdrop-blur-sm text-slate-800 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
              Get More Tips
            </button>
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
