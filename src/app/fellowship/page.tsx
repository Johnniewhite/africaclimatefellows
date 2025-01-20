"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Calendar, Users2, Award } from "lucide-react"
import Link from "next/link"

export default function Fellowship() {
  return (
    <main className="min-h-screen pt-24">
      {/* Program Overview Section */}
      <section id="overview" className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Fellowship Program
            </h1>
            <p className="text-xl text-foreground/80">
              A transformative 24-month journey empowering young African leaders to drive climate action and environmental justice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Calendar,
                title: "24-Month Duration",
                description: "Intensive training and hands-on experience in climate action"
              },
              {
                icon: Users2,
                title: "20 Fellows Per Cohort",
                description: "Selected from across the African continent"
              },
              {
                icon: Award,
                title: "Full Funding",
                description: "Including stipend, project grants, and travel support"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section id="apply" className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Application Process
            </h2>
            <p className="text-xl text-foreground/80">
              Join our next cohort of climate leaders through our comprehensive selection process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Submit Application",
                  description: "Complete the online application form with your background, experience, and project proposal."
                },
                {
                  step: "2",
                  title: "Initial Review",
                  description: "Applications are evaluated by our selection committee based on merit and potential impact."
                },
                {
                  step: "3",
                  title: "Interview",
                  description: "Selected candidates participate in virtual interviews with program leaders."
                },
                {
                  step: "4",
                  title: "Final Selection",
                  description: "20 fellows are chosen based on their vision, commitment, and leadership potential."
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-green-600 dark:text-green-400">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href="/get-involved#apply"
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Fellows Section */}
      <section id="current-fellows" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Current Fellows
            </h2>
            <p className="text-xl text-foreground/80">
              Meet our current cohort of climate leaders making a difference across Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Kwame Addo",
                project: "Sustainable Agriculture",
                country: "Ghana",
                image: "/images/hero1.jpg"
              },
              {
                name: "Fatima Omar",
                project: "Renewable Energy",
                country: "Kenya",
                image: "/images/hero2.png"
              },
              {
                name: "Jean-Paul Kamara",
                project: "Water Conservation",
                country: "Sierra Leone",
                image: "/images/hero1.jpg"
              }
            ].map((fellow, index) => (
              <motion.div
                key={fellow.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={fellow.image}
                    alt={fellow.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{fellow.name}</h3>
                  <p className="text-green-600 dark:text-green-400 font-medium mb-1">{fellow.project}</p>
                  <p className="text-foreground/70">{fellow.country}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 