"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Globe2, Users2, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function About() {
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
                About the Fellowship
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-foreground/80"
            >
              A transformative initiative dedicated to harnessing the adventurous spirit, resilience,
              and innovative leadership of African youth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision with Interactive Elements */}
      <section className="py-24 relative overflow-hidden bg-muted/50">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="card card-hover p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Leaf className="w-12 h-12 text-green-500 mb-6" />
                <h2 className="text-3xl font-bold text-accent mb-6">Our Mission</h2>
                <p className="text-foreground/80 text-lg relative z-10">
                  To equip young African climate activists with the tools, networks, funding and
                  mentorship needed to address the intersectional challenges of climate change across
                  the continent.
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="card card-hover p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Globe2 className="w-12 h-12 text-green-500 mb-6" />
                <h2 className="text-3xl font-bold text-accent mb-6">Our Vision</h2>
                <p className="text-foreground/80 text-lg relative z-10">
                  An Africa where empowered youth lead transformative climate action, that delivers
                  justice for individuals and communities.
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Details with Dynamic Cards */}
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
            <div className="text-center mb-16">
              <h2 className="gradient-text mb-6">Program Overview</h2>
              <p className="text-xl text-foreground/80">
                A 24-month fellowship for 20 young African leaders (ages 18-35), focusing on the Lake
                Chad region for the inaugural cohort.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card card-hover p-8 h-full">
                  <Users2 className="w-12 h-12 text-green-500 mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-accent mb-6">Core Components</h3>
                  <ul className="space-y-4 text-foreground/80">
                    <motion.li
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="h-6 w-6 text-accent shrink-0 mr-2" />
                      <span>Workshops on climate justice, storytelling, data visualization, and project management</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="h-6 w-6 text-accent shrink-0 mr-2" />
                      <span>Mentorship from seasoned African climate experts and global facilitators</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="h-6 w-6 text-accent shrink-0 mr-2" />
                      <span>Participation in international and African climate forums</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="h-6 w-6 text-accent shrink-0 mr-2" />
                      <span>Grants to implement localized climate action projects</span>
                    </motion.li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card card-hover p-8 h-full">
                  <Sparkles className="w-12 h-12 text-green-500 mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-accent mb-6">Key Focus Areas</h3>
                  <ul className="space-y-4 text-foreground/80">
                    <motion.li
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="h-6 w-6 text-accent shrink-0 mr-2" />
                      <span>Desertification and shrinking water resources</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="h-6 w-6 text-accent shrink-0 mr-2" />
                      <span>Gender-based violence exacerbated by climate change</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="h-6 w-6 text-accent shrink-0 mr-2" />
                      <span>Socio-economic impacts of displacement</span>
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="h-6 w-6 text-accent shrink-0 mr-2" />
                      <span>Building community resilience and adaptation</span>
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
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
              <h2 className="gradient-text mb-6">Join Our Movement</h2>
              <p className="text-xl text-foreground/80 mb-8">
                Be part of a transformative journey towards climate justice in Africa. Apply now to
                become a Climate Justice Fellow.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <Link
                  href="/fellowship"
                  className="btn btn-primary group relative overflow-hidden"
                >
                  <span className="relative z-10">Learn About the Fellowship</span>
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