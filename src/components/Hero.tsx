import React from 'react'

function Hero() {
  return (
    <header className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Unleash Peak Productivity with AI-Powered Automation
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-12">
            Stop wasting time on repetitive tasks. Automate workflows, generate content, and analyze data, all in one platform.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#pricing" className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300">
              Explore Pricing
            </a>
            <a href="#features" className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 rounded-xl text-lg transition-all duration-300">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
