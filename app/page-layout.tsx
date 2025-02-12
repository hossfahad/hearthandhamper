"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { ValueSection } from "@/components/sections/value-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { HowWeWorkSection } from "@/components/sections/how-we-work-section"
import { ContactSection } from "@/components/sections/contact-section"

export function PageLayout(): JSX.Element {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ValueSection />
      <FeaturesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection />
      <HowWeWorkSection />
      <ContactSection />
    </main>
  )
} 