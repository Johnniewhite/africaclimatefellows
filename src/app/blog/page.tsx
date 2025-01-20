"use client"

import { motion } from "framer-motion"
import { ArrowRight, Search, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

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
  },
  {
    title: "Renewable Energy Solutions in Africa",
    excerpt: "Innovative approaches to implementing renewable energy solutions across African nations.",
    date: "Feb 8, 2024",
    category: "Solutions",
    image: "/images/hero2.png"
  },
  {
    title: "Water Conservation Initiatives",
    excerpt: "Community-led water conservation projects making a difference in drought-prone regions.",
    date: "Feb 5, 2024",
    category: "Research",
    image: "/images/hero1.jpg"
  },
  {
    title: "Climate Policy Advocacy",
    excerpt: "How young leaders are influencing climate policy decisions at national and international levels.",
    date: "Feb 1, 2024",
    category: "Stories",
    image: "/images/hero2.png"
  }
]

const categories = ["All", "Research", "Stories", "Solutions"]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent"
          >
            Climate Action Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/80 max-w-2xl mx-auto"
          >
            Stay informed about climate initiatives, success stories, and research insights from across Africa
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-green-600 text-white"
                    : "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                      {post.category}
                    </span>
                    <span className="mx-2 text-foreground/30">•</span>
                    <span className="text-sm text-foreground/60">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link 
                    href="#" 
                    className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg text-foreground/60">No articles found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </main>
  )
} 