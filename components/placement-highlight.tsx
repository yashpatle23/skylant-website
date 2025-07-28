"use client"

import { Award, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"

export default function PlacementHighlight() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-400/20 to-orange-700/20"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 0 rgba(255, 255, 255, 0.4)",
                  "0 0 0 20px rgba(255, 255, 255, 0)",
                  "0 0 0 0 rgba(255, 255, 255, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Award className="h-10 w-10 text-orange-500" />
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              💯 100% Placement Assistance
            </motion.h2>

            <motion.p
              className="text-orange-100 text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We're committed to your career success with dedicated placement support
            </motion.p>

            <motion.div
              className="flex items-center justify-center gap-2 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <TrendingUp className="h-5 w-5 text-orange-200" />
              <span className="text-orange-200 text-sm">*Conditions Apply</span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Resume Building</div>
                <p className="text-orange-100">Professional resume crafting</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Interview Prep</div>
                <p className="text-orange-100">Mock interviews & guidance</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Job Referrals</div>
                <p className="text-orange-100">Direct company connections</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
