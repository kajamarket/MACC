"use client"

import { useState } from "react"
import { ThemeProvider } from "../components/theme-context"
import WelcomeScreen from "../components/welcome-screen"
import SignUpScreen from "../components/sign-up-screen"
import SignInScreen from "../components/sign-in-screen"
import DashboardScreen from "../components/dashboard-screen"
import ProfileScreen from "../components/profile-screen"
import UniversitySearchScreen from "../components/university-search-screen"
import UniversityDetailsScreen from "../components/university-details-screen"
import ApplicationPipelineScreen from "../components/application-pipeline-screen"
import AIAssistantScreen from "../components/ai-assistant-screen"
import EssayBuilderScreen from "../components/essay-builder-screen"
import FinancialAidScreen from "../components/financial-aid-screen"
import NotificationsScreen from "../components/notifications-screen"
import SettingsScreen from "../components/settings-screen"

export default function AppDemo() {
  const [currentScreen, setCurrentScreen] = useState("welcome")
  const [user, setUser] = useState({ name: "Sarah", isLoggedIn: false })

  const screens = {
    welcome: <WelcomeScreen onNavigate={setCurrentScreen} />,
    signup: (
      <SignUpScreen
        onNavigate={setCurrentScreen}
        onSignUp={() => {
          setUser({ name: "Sarah", isLoggedIn: true })
          setCurrentScreen("dashboard")
        }}
      />
    ),
    signin: (
      <SignInScreen
        onNavigate={setCurrentScreen}
        onSignIn={() => {
          setUser({ name: "Sarah", isLoggedIn: true })
          setCurrentScreen("dashboard")
        }}
      />
    ),
    dashboard: <DashboardScreen onNavigate={setCurrentScreen} user={user} />,
    profile: <ProfileScreen onNavigate={setCurrentScreen} user={user} />,
    search: <UniversitySearchScreen onNavigate={setCurrentScreen} />,
    universityDetails: <UniversityDetailsScreen onNavigate={setCurrentScreen} />,
    applications: <ApplicationPipelineScreen onNavigate={setCurrentScreen} />,
    aiAssistant: <AIAssistantScreen onNavigate={setCurrentScreen} user={user} />,
    essayBuilder: <EssayBuilderScreen onNavigate={setCurrentScreen} />,
    financialAid: <FinancialAidScreen onNavigate={setCurrentScreen} />,
    notifications: <NotificationsScreen onNavigate={setCurrentScreen} />,
    settings: <SettingsScreen onNavigate={setCurrentScreen} />,
  }

  return (
    <ThemeProvider>
      <div
        className="font-bold text-white text-3xl"
        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Demo Header */}
          <div className="text-center mb-8">
            <h1
              className="text-4xl font-bold text-slate-800 mb-3"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
            >
              My AI College Counselor
            </h1>
            <p
              className="text-slate-600 mb-6 text-lg"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
            >
              Interactive Mobile App Demo - Navigate through all screens
            </p>

            {/* Screen Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {Object.keys(screens).map((screenName) => (
                <button
                  key={screenName}
                  onClick={() => setCurrentScreen(screenName)}
                  className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                    currentScreen === screenName
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                  }`}
                  style={{
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif",
                    boxShadow:
                      currentScreen === screenName
                        ? "0 4px 16px rgba(59, 130, 246, 0.3)"
                        : "0 2px 8px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  {screenName.charAt(0).toUpperCase() + screenName.slice(1).replace(/([A-Z])/g, " $1")}
                </button>
              ))}
            </div>

            {/* Current Screen Indicator */}
            <div
              className="bg-white rounded-2xl p-6 mb-8 border border-slate-200"
              style={{ boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)" }}
            >
              <h2
                className="text-xl font-bold text-slate-800 mb-2"
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
              >
                Current Screen:{" "}
                {currentScreen.charAt(0).toUpperCase() + currentScreen.slice(1).replace(/([A-Z])/g, " $1")}
              </h2>
              <p
                className="text-slate-600 mb-4"
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
              >
                {user.isLoggedIn ? `Logged in as ${user.name}` : "Not logged in"}
              </p>
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                    style={{ boxShadow: "0 0 8px rgba(34, 197, 94, 0.4)" }}
                  ></div>
                  <span
                    className="text-sm text-green-600 font-medium"
                    style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
                  >
                    Glassmorphism Navigation
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                    style={{ boxShadow: "0 0 8px rgba(139, 92, 246, 0.4)" }}
                  ></div>
                  <span
                    className="text-sm text-purple-600 font-medium"
                    style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
                  >
                    Dark/Light Theme Toggle
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Screen Display */}
          <div className="flex justify-center">{screens[currentScreen]}</div>

          {/* Feature Highlights */}
          <div
            className="mt-12 bg-white rounded-3xl p-8 border border-slate-200"
            style={{ boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)" }}
          >
            <h3
              className="text-2xl font-bold text-slate-800 mb-6 text-center"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
            >
              ✨ Enhanced AI Assistant Features
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)" }}
                >
                  <span className="text-2xl">🤖</span>
                </div>
                <h4
                  className="font-bold text-slate-800 mb-2"
                  style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
                >
                  Interactive AI Chat
                </h4>
                <p
                  className="text-sm text-slate-600"
                  style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
                >
                  Real-time conversations with typing indicators
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ boxShadow: "0 8px 20px rgba(139, 92, 246, 0.3)" }}
                >
                  <span className="text-2xl">🎨</span>
                </div>
                <h4
                  className="font-bold text-slate-800 mb-2"
                  style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
                >
                  Animated UI
                </h4>
                <p
                  className="text-sm text-slate-600"
                  style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
                >
                  Floating elements and gradient animations
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ boxShadow: "0 8px 20px rgba(34, 197, 94, 0.3)" }}
                >
                  <span className="text-2xl">🌙</span>
                </div>
                <h4
                  className="font-bold text-slate-800 mb-2"
                  style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
                >
                  Theme Toggle
                </h4>
                <p
                  className="text-sm text-slate-600"
                  style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
                >
                  Switch between light and dark modes
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ boxShadow: "0 8px 20px rgba(245, 158, 11, 0.3)" }}
                >
                  <span className="text-2xl">⚡</span>
                </div>
                <h4
                  className="font-bold text-slate-800 mb-2"
                  style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}
                >
                  Quick Actions
                </h4>
                <p
                  className="text-sm text-slate-600"
                  style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" }}
                >
                  Instant access to key features
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
