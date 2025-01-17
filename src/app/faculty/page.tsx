"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Brain, Target, Presentation } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Faculty() {
  const roles = [
    {
      title: 'Facilitators',
      description: 'Lead workshops and training sessions on climate justice, data visualization, and project management',
      icon: Presentation,
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Mentors',
      description: 'Provide one-on-one guidance and support to fellows throughout their journey',
      icon: Brain,
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Thought Leaders',
      description: 'Share expertise and insights on climate justice in Africa through talks and publications',
      icon: Target,
      gradient: 'from-green-600 to-emerald-500',
    },
  ]

  const facultyMembers = [
    {
      name: 'Dr. Amina Diop',
      role: 'Lead Facilitator',
      expertise: 'Climate Policy & Advocacy',
      image: '/images/illustrations/faculty-1.svg',
    },
    {
      name: 'Prof. Samuel Osei',
      role: 'Senior Mentor',
      expertise: 'Environmental Science',
      image: '/images/illustrations/faculty-2.svg',
    },
    {
      name: 'Dr. Fatima Hassan',
      role: 'Research Director',
      expertise: 'Climate Justice & Gender',
      image: '/images/illustrations/faculty-3.svg',
    },
    {
      name: 'Prof. John Mensah',
      role: 'Program Advisor',
      expertise: 'Community Resilience',
      image: '/images/illustrations/faculty-4.svg',
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
                Meet Our Faculty
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-foreground/80"
            >
              Expert mentors and facilitators dedicated to nurturing the next generation of climate justice leaders.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Roles Section with Interactive Cards */}
      <section className="py-24 relative overflow-hidden bg-muted/50">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="gradient-text text-center mb-12">Faculty Roles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {roles.map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div className="card card-hover p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${role.gradient} p-2.5 mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      <role.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      {role.description}
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Faculty Members Section with Dynamic Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="gradient-text text-center mb-12">Our Faculty Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facultyMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="card card-hover p-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative mb-6 mx-auto w-32 h-32">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-full transform group-hover:scale-110 transition-transform duration-300" />
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover rounded-full relative z-10"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-accent mb-1">{member.role}</p>
                    <p className="text-foreground/80 text-sm">{member.expertise}</p>
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
              <h2 className="gradient-text mb-6">Join Our Faculty</h2>
              <p className="text-xl text-foreground/80 mb-8">
                Share your expertise and help shape the next generation of climate justice leaders in Africa.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <Link
                  href="/contact"
                  className="btn btn-primary group relative overflow-hidden"
                >
                  <span className="relative z-10">Get in Touch</span>
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