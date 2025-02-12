"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  {
    title: "Beautiful Website Templates",
    description: "Choose from our collection of professionally designed templates made specifically for laundromats. Each template is fully customizable to match your brand.",
    image: "/features/Example 1.jpg",
    imageAlt: "Modern laundromat website design with washing machines and clean interface"
  },
  {
    title: "Email & Social Media Integration",
    description: "Connect with your customers through integrated email forms and social media links. Make it easy for customers to reach you and stay updated with your business.",
    image: "/features/Example 2.jpg",
    imageAlt: "Email and social media integration interface"
  }
]

export function FeaturesSection(): JSX.Element {
  return (
    <section id="features" className="py-20 bg-white">
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
                <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    priority={index === 0}
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 