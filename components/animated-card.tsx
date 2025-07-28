"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function AnimatedCard({ children, className = "", delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0, 93, 170, 0.3)",
        transition: { duration: 0.3 },
      }}
      className={`transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}
