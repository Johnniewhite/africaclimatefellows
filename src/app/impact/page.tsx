"use client"

import { motion } from "framer-motion"
import { Award, Globe, Users, Sprout, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const metrics = [
  {
    title: "20 Fellows Selected",
    description: "Bright minds chosen from across Africa",
    icon: Users,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "15+ Projects Initiated",
    description: "Impactful climate initiatives launched",
    icon: Sprout,
    gradient: "from-green-500 to-green-600",
  },
  {
    title: "4 Countries",
    description: "Pan-African representation and collaboration",
    icon: Globe,
    gradient: "from-purple-500 to-purple-600",
  },
  {
    title: "1000+ Lives Impacted",
    description: "Communities transformed through climate action",
    icon: Award,
    gradient: "from-orange-500 to-orange-600",
  },
]

const successStories = [
  {
    title: "Water Conservation Initiative",
    location: "Kenya",
    impact: "50,000 liters of water saved monthly",
    image: "/images/illustrations/water-conservation.svg",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "Renewable Energy Project",
    location: "Nigeria",
    impact: "30% reduction in carbon emissions",
    image: "/images/illustrations/renewable-energy.svg",
    gradient: "from-green-500 to-green-600",
  },
  {
    title: "Women&apos;s Climate Leadership",
    location: "Ghana",
    impact: "200 women empowered in climate action",
    image: "/images/illustrations/women-leadership.svg",
    gradient: "from-purple-500 to-purple-600",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Impact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/ClimateConvofold/impact.jpeg"
            alt="Impact Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/30 via-transparent to-accent-light/30 dark:from-primary-dark/30 dark:to-accent-dark/30" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="gradient-text font-bold mb-6 text-white">
              Our Impact
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-white/90">
              Together, we&apos;re building a sustainable future. See how our fellows are making a difference across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {metrics.map((metric) => (
              <motion.div
                key={metric.title}
                variants={item}
                className="card card-hover p-6"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.gradient} p-2 mb-4`}>
                  <metric.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{metric.title}</h3>
                <p className="text-muted-foreground">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center gradient-text mb-12">Success Stories</h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {successStories.map((story) => (
              <motion.div
                key={story.title}
                variants={item}
                className="card card-hover overflow-hidden"
              >
                <div className="relative h-48">
                  <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-10`} />
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-muted-foreground mb-2">📍 {story.location}</p>
                  <p className="text-primary font-medium">{story.impact}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/30 via-transparent to-primary-light/30 dark:from-accent-dark/30 dark:to-primary-dark/30" />
        <div className="absolute inset-0">
          <Image
            src="/images/ClimateConvofold/join.jpeg"
            alt="Impact Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
              Join Our Movement
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Be part of the change. Together, we can create a sustainable future for Africa.
            </p>
            <Link
              href="/get-involved"
              className="btn btn-primary inline-flex items-center group"
            >
              Get Involved
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 