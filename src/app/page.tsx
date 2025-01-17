"use client"

import { motion } from "framer-motion"
import { ArrowRight, Leaf, Globe2, Users2, Sparkles } from "lucide-react"
import Link from "next/link"

const features = [
  {
    title: "Climate Action",
    description: "Drive meaningful change through innovative climate solutions",
    icon: Leaf,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Pan-African Network",
    description: "Connect with climate leaders across the continent",
    icon: Globe2,
    gradient: "from-emerald-500 to-green-600",
  },
  {
    title: "Expert Mentorship",
    description: "Learn from seasoned climate justice advocates",
    icon: Users2,
    gradient: "from-green-600 to-emerald-500",
  },
  {
    title: "Project Funding",
    description: "Access resources to implement your climate initiatives",
    icon: Sparkles,
    gradient: "from-emerald-600 to-green-500",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Organic Shapes */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-gradient-to-br from-green-500/20 to-transparent"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-gradient-to-tr from-green-500/20 to-transparent"
          />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-32 sm:px-6 lg:px-8">
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
              <h1 className="relative gradient-text mb-6">
                Empowering Africa&apos;s Youth for Climate Justice Action
              </h1>
            </motion.div>
            <motion.p 
              className="text-xl text-foreground/80 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              A transformative fellowship equipping young African leaders to champion climate justice,
              tackle systemic challenges, and drive grassroots resilience.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link 
                href="/fellowship"
                className="btn btn-primary group relative overflow-hidden"
              >
                <span className="relative z-10">Apply Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about"
                className="btn btn-secondary group relative overflow-hidden"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Interactive Cards */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/50">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="card card-hover group cursor-pointer"
              >
                <div className="p-6 relative overflow-hidden">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-2.5 mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {feature.description}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section with Dynamic Elements */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="gradient-text mb-8">Our Mission</h2>
            <p className="text-xl text-foreground/80 mb-12">
              To equip young African climate activists with the tools, networks, funding and mentorship
              needed to address the intersectional challenges of climate change across the continent.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <Link
                href="/about"
                className="btn btn-primary group relative overflow-hidden"
              >
                <span className="relative z-10">Join Our Mission</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Innovative Design */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-muted/50">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-50" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-white dark:bg-gray-800 rounded-3xl p-12 overflow-hidden eco-shadow"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h2 className="gradient-text mb-6">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl text-foreground/80 mb-12">
                Join a community of passionate climate leaders and be part of Africa&apos;s sustainable future.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/get-involved"
                  className="btn btn-primary group relative overflow-hidden"
                >
                  <span className="relative z-10">Get Involved</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-secondary group relative overflow-hidden"
                >
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
