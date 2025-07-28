"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Globe, Mail } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedCard from "./animated-card"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Ready to start your tech journey? Contact us today!</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <AnimatedCard delay={0.2}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      <motion.div whileHover={{ scale: 1.1, rotate: 10 }} transition={{ duration: 0.3 }}>
                        <Phone className="h-6 w-6 text-blue-600 mr-3" />
                      </motion.div>
                      📞 Phone Numbers
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { label: "Primary", number: "7558531369" },
                      { label: "Secondary", number: "8855981919" },
                      { label: "Support", number: "7249761369" },
                    ].map((phone, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center group/phone"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="font-medium text-gray-900">✔️ {phone.label}:</span>
                        <a
                          href={`tel:${phone.number}`}
                          className="ml-2 text-blue-600 hover:text-blue-800 hover:underline transition-all duration-300 font-medium"
                        >
                          {phone.number}
                        </a>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </AnimatedCard>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-900">
                    <Globe className="h-6 w-6 text-blue-600 mr-3" />
                    Website
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="http://www.skylantech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-lg"
                  >
                    www.skylantech.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-900">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    401, Royal Rudra, Income Tax Colony,
                    <br />
                    Near Vasudev Nagar Metro Station,
                    <br />
                    Nagpur - 440016
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <AnimatedCard delay={0.4}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl text-gray-900">
                      <motion.div whileHover={{ scale: 1.1, rotate: -10 }} transition={{ duration: 0.3 }}>
                        <Mail className="h-6 w-6 text-blue-600 mr-3" />
                      </motion.div>
                      📧 Send us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Enhanced form inputs with better styling */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Course Interest</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-400">
                        <option value="">Select a course</option>
                        <option value="python">Python Developer</option>
                        <option value="django">Django Developer</option>
                        <option value="data-science">Data Science</option>
                        <option value="ml-ai">Machine Learning & AI</option>
                        <option value="full-stack">Full-Stack Development</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                        placeholder="Tell us about your goals and questions"
                      ></textarea>
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl">
                        Send Message 📤
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
