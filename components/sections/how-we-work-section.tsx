"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { 
  PhoneCall,
  Paintbrush,
  Rocket,
  Heart
} from "lucide-react"
import type { ProcessStep } from "@/types"

const steps: ProcessStep[] = [
  {
    icon: PhoneCall,
    title: "Initial Consultation",
    description: "We'll discuss your needs. You can provide us the information you would like to put in for the perfect website for design."
  },
  {
    icon: Paintbrush,
    title: "Custom Design",
    description: "Our team creates a modern, user-friendly design that matches your brand and appeals to your customers."
  },
  {
    icon: Rocket,
    title: "Development & Launch",
    description: "We build your site with all the features you need and ensure everything works perfectly before launch."
  },
  {
    icon: Heart,
    title: "Ongoing Support",
    description: "We provide training and ongoing support to help you make the most of your new website."
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export function HowWeWorkSection(): JSX.Element {
  return (
    <section id="how-we-work" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our proven process ensures your project is completed on time and exceeds expectations
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-start mb-12 last:mb-0"
            >
              <div className="flex-shrink-0 mr-8">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="flex-grow pt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-8 ml-8 w-0.5 h-24 bg-blue-100" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  )
} 