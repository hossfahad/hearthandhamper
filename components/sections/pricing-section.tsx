"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Website",
    price: "$249",
    description: "Perfect for new laundromats getting started online",
    features: [
      "Custom Website Design",
      "Mobile Responsive",
      "Business Hours & Location",
      "Equipment List",
      "Contact Form",
      "Basic SEO Setup so you can be found online",
      "Website Hosting for the first year"
    ]
  },
  {
    name: "Website + Maintainence",
    price: "$249 + $30/mo",
    description: "Set and Forget plan so you can focus on running your business.",
    features: [
      "Everything in Starter",
      "Monthly Blog Posts and Social Media Updates",
      "Customer Reviews Integration",
      "Social Media Integration",
      "Google Analytics Setup",
      "Monthly Reporting so you can see the progress"
    ],
    popular: true
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function PricingSection(): JSX.Element {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple and Honest Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We understand the cost of a local business. We offer a simple and honest pricing structure that is easy to understand and easy to afford.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                plan.popular ? "ring-2 ring-blue-600" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.name === "Website" && (
                    <span className="text-gray-600 ml-1">/one-time</span>
                  )}
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-xl font-semibold transition-colors ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            Need a custom solution?{" "}
            <a href="#contact" className="text-blue-600 font-semibold hover:text-blue-700">
              Contact us
            </a>{" "}
            for personalized pricing
          </p>
        </motion.div>
      </div>
    </section>
  )
} 