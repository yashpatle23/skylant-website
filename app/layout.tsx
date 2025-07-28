import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Skylant Tech Solutions - Launch Your Tech Career",
  description:
    "100% Placement Assistance with Industry-Focused Training, Internships, and Project-Based Learning in Python, Data Science, AI/ML, and more.",
  keywords:
    "tech training, programming courses, data science, machine learning, python, placement assistance, internships, nagpur",
  authors: [{ name: "Skylant Tech Solutions" }],
  openGraph: {
    title: "Skylant Tech Solutions - Launch Your Tech Career",
    description: "100% Placement Assistance with Industry-Focused Training",
    url: "https://www.skylantech.com",
    siteName: "Skylant Tech Solutions",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
