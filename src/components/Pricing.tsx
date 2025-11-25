import React from 'react'

const pricingTiers = [
  {
    name: 'Starter',
    price: 'Free',
    features: [
      'Basic Automation',
      'Limited Integrations',
      'Community Support',
    ],
  },
  {
    name: 'Pro',
    price: '$49/month',
    mostPopular: true,
    features: [
      'Advanced Automation',
      'Priority Integrations',
      'Dedicated Support',
      'Custom Reporting',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: [
      'Unlimited Automation',
      'Custom Integrations',
      '24/7 Support',
      'Dedicated Account Manager',
    ],
  },
]

function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-xl p-6 ${tier.mostPopular ? 'border-2 border-primary' : ''}`}>
              <h3 className="text-2xl font-semibold mb-4">{tier.name}</h3>
              <div className="text-4xl font-bold mb-4">{tier.price}</div>
              <ul className="space-y-2">
                {tier.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-xl mt-6 transition-all duration-300">
                {tier.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
