"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Users, HandHeart, GraduationCap, Building2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function GetInvolved() {
  const involvementOptions = [
    {
      title: 'Apply as a Fellow',
      icon: Users,
      description:
        'Join our 24-month fellowship program and become part of a network of young climate justice leaders.',
      action: 'Apply Now',
      link: '/fellowship',
    },
    {
      title: 'Support the Program',
      icon: HandHeart,
      description:
        'Make a difference by supporting our fellows and their community-based climate initiatives.',
      action: 'Donate',
      link: '#donate',
    },
    {
      title: 'Join as Faculty',
      icon: GraduationCap,
      description:
        'Share your expertise and mentor the next generation of climate justice leaders.',
      action: 'Learn More',
      link: '/faculty',
    },
    {
      title: 'Partner with Us',
      icon: Building2,
      description:
        'Collaborate with us to create meaningful impact in climate justice across Africa.',
      action: 'Partner',
      link: '#partner',
    },
  ]

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <Image 
          src="/images/ClimateConvofold/climatekeeds.jpeg" 
          alt="About"
          fill
          priority
          className="absolute inset-0 object-cover brightness-50"
        />
        
        {/* Gradient Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Get Involved
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              >
                Join our mission to empower Africa&apos;s youth and create lasting change through climate justice initiatives.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400/40 via-white/60 to-green-400/40" />
      </section>

      {/* Involvement Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {involvementOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-lg p-8 shadow-lg"
                >
                  <Icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{option.title}</h3>
                  <p className="text-foreground/80 mb-6">{option.description}</p>
                  <Link
                    href={option.link}
                    className="inline-flex items-center text-accent hover:text-accent/80 transition-colors duration-200"
                  >
                    {option.action}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Support Our Mission</h2>
            <p className="text-xl text-foreground/80 mb-12">
              Your contribution helps us empower more young leaders and create greater impact in
              climate justice across Africa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="text-2xl font-bold text-accent mb-2">$50</div>
                <div className="text-foreground/80">Monthly Support</div>
              </button>
              <button className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="text-2xl font-bold text-accent mb-2">$100</div>
                <div className="text-foreground/80">Quarterly Support</div>
              </button>
              <button className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="text-2xl font-bold text-accent mb-2">Custom</div>
                <div className="text-foreground/80">Choose Amount</div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partner" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
              <p className="text-xl text-foreground/80">
                Join forces with us to create meaningful impact in climate justice across Africa.
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-muted bg-background text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-muted bg-background text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    How would you like to partner with us?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-muted bg-background text-foreground"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 