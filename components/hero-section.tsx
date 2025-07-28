"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Launch Your Tech Career with{" "}
              <span className="text-orange-400 relative">
                Industry-Focused
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-orange-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>{" "}
              Training
            </motion.h1>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              <span className="font-semibold text-orange-400">100% Placement Assistance*</span> with Hands-on Projects
              and Internships
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg bg-transparent transition-all duration-300 rounded-lg"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Join Now
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-blue-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">500+</div>
              <div className="text-blue-200">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">95%</div>
              <div className="text-blue-200">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">50+</div>
              <div className="text-blue-200">Industry Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
