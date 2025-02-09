import { LucideIcon } from "lucide-react"

export interface Feature {
  tier: string
  price: string
  icon: LucideIcon
  features: string[]
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface PortfolioItem {
  title: string
  description: string
  image: string
  category: string
  features: string[]
}

export interface Testimonial {
  name: string
  role: string
  image: string
  quote: string
}

export interface Plan {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  isPopular: boolean
  cta: string
}

export interface ProcessStep {
  icon: LucideIcon
  title: string
  description: string
}

export interface ContactMethod {
  icon: LucideIcon
  title: string
  description: string
  value: string
} 