"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Clock, Users, Globe, CheckCircle2, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Fellowship() {
  const eligibilityCriteria = [
    'Must be between 18 and 35 years old',
    'Open to individuals from African countries (current focus: Lake Chad region)',
    'Demonstrated passion for climate justice and advocacy',
    'Proven track record of community engagement',
    'Full commitment to fellowship duration and activities',
  ]

  const applicationSteps = [
    {
      title: 'Submit Application',
      description: 'Complete the online application form with personal information and statement of purpose',
      icon: CheckCircle2,
    },
    {
      title: 'Application Review',
      description: 'Applications evaluated based on eligibility and quality of purpose statement',
      icon: Sparkles,
    },
    {
      title: 'Interview',
      description: 'Shortlisted candidates undergo virtual or in-person interviews',
      icon: Users,
    },
    {
      title: 'Final Selection',
      description: '20 Fellows selected ensuring diversity in gender and geographic representation',
      icon: Globe,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Organic Shapes */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-green-500/20 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-green-500/20 to-transparent rounded-full transform -translate-x-1/3 translate-y-1/3"
          />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative inline-block mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-300 blur-2xl opacity-20" />
              <h1 className="relative gradient-text">
                Join the Fellowship
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-foreground/80"
            >
              Shape the future of climate justice in Africa through our transformative fellowship program.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Program Highlights with Interactive Cards */}
      <section className="py-24 relative overflow-hidden bg-muted/50">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Clock, title: "24 Months", description: "Immersive program duration" },
              { icon: Users, title: "20 Fellows", description: "Selected per cohort" },
              { icon: Globe, title: "Lake Chad Region", description: "Current geographic focus" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="card card-hover p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <item.icon className="w-12 h-12 text-green-500 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80">{item.description}</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section with Dynamic List */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="gradient-text text-center mb-12">Eligibility Criteria</h2>
            <div className="card card-hover p-8">
              <ul className="space-y-6">
                {eligibilityCriteria.map((criterion, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                    </div>
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      {criterion}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process with Interactive Timeline */}
      <section className="py-24 relative overflow-hidden bg-muted/50">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="gradient-text text-center mb-12">Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applicationSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="card card-hover p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300">
                        <step.icon className="w-6 h-6 text-green-500" />
                      </div>
                      <div className="ml-4">
                        <div className="text-xl font-semibold group-hover:text-accent transition-colors">
                          {step.title}
                        </div>
                      </div>
                    </div>
                    <p className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      {step.description}
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Innovative Design */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-white dark:bg-gray-800 rounded-3xl p-12 overflow-hidden eco-shadow"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="gradient-text mb-6">Ready to Apply?</h2>
              <p className="text-xl text-foreground/80 mb-8">
                Take the first step towards becoming a Climate Justice Fellow and making a lasting impact
                in your community.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <Link
                  href="/get-involved"
                  className="btn btn-primary group relative overflow-hidden"
                >
                  <span className="relative z-10">Start Your Application</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 