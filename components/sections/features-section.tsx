"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  {
    title: "Beautiful Website Templates",
    description: "Choose from our collection of professionally designed templates made specifically for laundromats. Each template is fully customizable to match your brand.",
    image: "/features/templates.webp",
    imageAlt: "Laundromat website templates showcase"
  },
  {
    title: "Online Booking System",
    description: "Let customers reserve machines, schedule drop-off service, and manage their laundry needs online. Reduce wait times and improve customer satisfaction.",
    image: "/features/booking.webp",
    imageAlt: "Online booking system interface"
  },
  {
    title: "Real-Time Updates",
    description: "Keep your customers informed with real-time machine availability, wait times, and service updates. Build trust through transparency.",
    image: "/features/updates.webp",
    imageAlt: "Real-time updates dashboard"
  }
]

export function FeaturesSection(): JSX.Element {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to take your laundromat business to the next level
          </p>
        </motion.div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12`}
            >
              <div className="flex-1">
                <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <motion.h3
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl font-bold text-gray-900"
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl text-gray-600"
                >
                  {feature.description}
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 