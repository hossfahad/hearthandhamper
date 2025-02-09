"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import type { Testimonial } from "@/types"

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Owner, Bubble & Suds",
    image: "/testimonials/sarah.webp",
    quote: "Working with the Laundry Design Agency transformed our business. Our online bookings increased by 200% in just three months!"
  },
  {
    name: "Michael Chen",
    role: "Manager, SpinCycle Express",
    image: "/testimonials/michael.webp",
    quote: "The team understood exactly what we needed. Our new website has helped us attract a younger demographic and increased our revenue significantly."
  },
  {
    name: "Emma Rodriguez",
    role: "Owner, Clean & Fresh",
    image: "/testimonials/emma.webp",
    quote: "The online booking system they implemented has revolutionized how we operate. Our customers love the convenience!"
  }
]

export function TestimonialsSection(): JSX.Element {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from laundromat owners who have transformed their businesses with our help
          </p>
        </motion.div>

        <div className="relative h-[400px] max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full h-full"
            >
              <div className="bg-blue-50 rounded-2xl p-8 md:p-12 h-full flex flex-col items-center justify-center text-center">
                <div className="relative w-20 h-20 mb-6 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-900 mb-6">
                  "{testimonials[current].quote}"
                </blockquote>
                <div>
                  <cite className="not-italic font-semibold text-blue-600">
                    {testimonials[current].name}
                  </cite>
                  <p className="text-gray-600">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1)
                  setCurrent(index)
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current ? "bg-blue-600" : "bg-blue-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 