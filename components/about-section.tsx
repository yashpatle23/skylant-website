"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Lightbulb, Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import AnimatedCard from "./animated-card"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                About Skylant Tech Solutions
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We bridge the gap between academic learning and industry requirements by providing practical, hands-on
                training that prepares students for real-world challenges in the tech industry.
              </motion.p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "Hands-on Learning",
                description: "Interactive sessions with practical implementation of concepts",
                color: "blue",
                emoji: "🎯",
              },
              {
                icon: Briefcase,
                title: "Internship + Projects",
                description: "Real industry projects and internship opportunities",
                color: "orange",
                emoji: "💼",
              },
              {
                icon: Target,
                title: "Real-world Skills",
                description: "Industry-relevant skills that employers are looking for",
                color: "green",
                emoji: "✅",
              },
            ].map((item, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <Card className="text-center border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="pt-8 pb-8">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-${item.color}-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-2xl">{item.emoji}</span>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <Lightbulb className="h-12 w-12 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              To empower the next generation of tech professionals with cutting-edge skills, practical experience, and
              industry connections that enable them to thrive in today's competitive technology landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
