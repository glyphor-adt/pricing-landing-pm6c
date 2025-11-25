import React from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

const featuresData = [
  {
    icon: Zap,
    title: 'Automate Repetitive Tasks',
    description: 'Eliminate manual data entry, automate email campaigns, and streamline your workflows.',
  },
  {
    icon: Shield,
    title: 'Advanced Security & Compliance',
    description: 'Benefit from enterprise-grade security features and compliance certifications.',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven Insights',
    description: 'Unlock actionable insights with real-time analytics and customizable dashboards.',
  },
]

function Features() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <feature.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
