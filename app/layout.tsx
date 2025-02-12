import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Wholesome Design Factory - Modern Web Solutions for Community Businesses",
  description: "We create stunning digital experiences for small businesses that help you get an online presence and more customers.",
  keywords: "laundromat web design, laundry website design, wholesome design factory, digital solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 