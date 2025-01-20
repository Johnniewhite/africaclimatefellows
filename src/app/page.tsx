"use client"

import { motion } from "framer-motion"
import { ArrowRight, Leaf, Globe2, Users2, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

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

const blogPosts = [
  {
    title: "Climate Change Impact on African Communities",
    excerpt: "Exploring how climate change affects local communities and the innovative solutions being developed.",
    date: "Feb 15, 2024",
    category: "Research",
    image: "/images/hero1.jpg"
  },
  {
    title: "Youth Leaders Driving Environmental Change",
    excerpt: "Meet the young activists who are spearheading climate initiatives across the continent.",
    date: "Feb 12, 2024",
    category: "Stories",
    image: "/images/hero2.png"
  },
  {
    title: "Sustainable Agriculture Practices",
    excerpt: "How African farmers are adapting to climate change with sustainable farming methods.",
    date: "Feb 10, 2024",
    category: "Solutions",
    image: "/images/hero1.jpg"
  }
]

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const heroImages = ['/images/hero1.jpg', '/images/hero2.png']

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [heroImages.length])

  return (
    <main className="min-h-screen">
      {/* Hero Section with Split Layout */}
      <section className="relative min-h-[600px] flex flex-col md:flex-row justify-between">
        {/* Image Carousel - Full width on mobile, 60% on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[60%] relative h-[400px] md:h-auto"
        >
          {heroImages.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentImage === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={src}
                alt={`Hero image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Text Content - Full width on mobile, 40% on desktop */}
        <div className="w-full md:w-[40%] bg-green-50 dark:bg-green-950/30 flex items-center py-12 md:py-0">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="px-6 md:px-8 lg:px-12 w-full"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-green-950 dark:text-green-50">
              Empowering Africa&apos;s Youth for Climate Justice Action
            </h1>
            <p className="text-base sm:text-lg text-green-800/80 dark:text-green-100/80 mb-6 md:mb-8 leading-relaxed">
              A transformative fellowship equipping young African leaders to champion climate justice,
              tackle systemic challenges, and drive grassroots resilience.
            </p>
            <Link 
              href="/about"
              className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-medium text-white bg-green-700 hover:bg-green-800 transition-colors rounded-md"
            >
              Learn More
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Interactive Cards */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/50">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="card card-hover group cursor-pointer"
              >
                <div className="p-4 sm:p-6 relative overflow-hidden">
                  <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-2 sm:p-2.5 mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    {feature.description}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent"
            >
              Latest Insights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-foreground/80 px-4"
            >
              Explore our latest articles on climate action and environmental justice
            </motion.p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                        {post.category}
                      </span>
                      <span className="mx-2 text-foreground/30">•</span>
                      <span className="text-sm text-foreground/60">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/70 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link 
                      href="#" 
                      className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300 transition-colors text-sm sm:text-base"
                    >
                      Read More
                      <ArrowRight className="ml-1.5 sm:ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-12"
          >
            <Link
              href="/blog"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-green-600 hover:bg-green-700 transition-colors rounded-lg sm:rounded-xl shadow-md hover:shadow-lg"
            >
              View All Articles
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
            </Link>
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
                  <span className="relative z-10">Apply Now</span>
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
