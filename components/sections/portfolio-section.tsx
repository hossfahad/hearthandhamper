"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const portfolioItems = [
  {
    title: "Example 1",
    description: "Modern website design for local laundromat",
    image: "/features/Example 1.jpg",
    category: "Website Design"
  },
  {
    title: "Example 2",
    description: "Clean and professional web presence",
    image: "/features/Example 2.jpg",
    category: "Website Design"
  },
  {
    title: "Example 3",
    description: "User-friendly laundromat website",
    image: "/features/Example 4.jpg",
    category: "Website Design"
  }
]

export function PortfolioSection(): JSX.Element {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent projects and success stories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-medium mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 