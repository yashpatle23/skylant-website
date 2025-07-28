"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Brain, Shield, Cloud, Globe, BarChart } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import AnimatedCard from "./animated-card"

const courses = [
  {
    title: "Python Developer",
    description: "Master Python programming with real-world projects",
    icon: Code,
    category: "Programming",
    duration: "3 months",
    popular: true,
  },
  {
    title: "Django Developer",
    description: "Build scalable web applications with Django framework",
    icon: Globe,
    category: "Web Development",
    duration: "4 months",
  },
  {
    title: "Data Science",
    description: "Analyze data and extract meaningful insights",
    icon: BarChart,
    category: "Data",
    duration: "6 months",
    popular: true,
  },
  {
    title: "Machine Learning & AI",
    description: "Build intelligent systems and AI applications",
    icon: Brain,
    category: "AI/ML",
    duration: "6 months",
  },
  {
    title: "Data Analytics",
    description: "Excel, Power BI, Tableau for business intelligence",
    icon: Database,
    category: "Analytics",
    duration: "3 months",
  },
  {
    title: "ChatGPT & OpenAI Tools",
    description: "Leverage AI tools for productivity and automation",
    icon: Brain,
    category: "AI Tools",
    duration: "2 months",
    popular: true,
  },
  {
    title: "Full-Stack Development",
    description: "Complete web development from frontend to backend",
    icon: Code,
    category: "Web Development",
    duration: "8 months",
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    description: "Protect systems and learn ethical hacking techniques",
    icon: Shield,
    category: "Security",
    duration: "5 months",
  },
  {
    title: "Cloud Computing & DevOps",
    description: "Master cloud platforms and deployment strategies",
    icon: Cloud,
    category: "Cloud",
    duration: "4 months",
  },
  {
    title: "Salesforce",
    description: "Become a certified Salesforce administrator/developer",
    icon: Database,
    category: "CRM",
    duration: "3 months",
  },
  {
    title: "C, C++, Java Programming",
    description: "Foundation programming languages for software development",
    icon: Code,
    category: "Programming",
    duration: "4 months",
  },
  {
    title: "Web Development",
    description: "HTML, CSS, JavaScript, PHP, Bootstrap fundamentals",
    icon: Globe,
    category: "Web Development",
    duration: "3 months",
  },
]

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Courses Offered
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Choose from our comprehensive range of industry-relevant courses designed to make you job-ready
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => {
            const IconComponent = course.icon
            return (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card className="hover:shadow-2xl transition-all duration-300 border-0 shadow-md bg-white relative overflow-hidden group cursor-pointer h-full">
                  {course.popular && (
                    <div className="absolute top-3 right-3 z-10">
                      <Badge className="bg-orange-500 text-white text-xs px-2 py-1">✨ Popular</Badge>
                    </div>
                  )}

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <motion.div
                        className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-gray-100 group-hover:bg-white transition-colors duration-300"
                      >
                        📅 {course.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 border-l-4 border-transparent group-hover:border-blue-600 pl-3 group-hover:pl-4 transition-all duration-300">
                      {course.title}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="w-fit text-xs group-hover:border-orange-500 group-hover:text-orange-600 transition-colors duration-300"
                    >
                      {course.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {course.description}
                    </CardDescription>
                    <div className="mt-4 flex items-center text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="font-medium">Learn More →</span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
