import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "LaundryDesign Agency - Modern Web Solutions for Laundromats",
  description: "We create stunning digital experiences for laundromats that convert visitors into customers.",
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
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Calibri:wght@400;500;600;700&display=swap"
        />
      </head>
      <body style={{ fontFamily: "Calibri, sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 