"use client"

import { motion } from "framer-motion"
import { Award, Globe, Users, Sprout, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
import { useState, useEffect } from "react"

const metrics = [
  {
    titleKey: "fellows_selected",
    descriptionKey: "fellows_selected_description",
    icon: Users,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    titleKey: "projects_initiated",
    descriptionKey: "projects_initiated_description",
    icon: Sprout,
    gradient: "from-green-500 to-green-600",
  },
  {
    titleKey: "countries_count",
    descriptionKey: "countries_description",
    icon: Globe,
    gradient: "from-purple-500 to-purple-600",
  },
  {
    titleKey: "lives_impacted",
    descriptionKey: "lives_impacted_description",
    icon: Award,
    gradient: "from-orange-500 to-orange-600",
  },
]

const successStories = [
  {
    titleKey: "water_conservation",
    locationKey: "water_conservation_location",
    impactKey: "water_conservation_impact",
    image: "/images/illustrations/water-conservation.svg",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    titleKey: "renewable_energy",
    locationKey: "renewable_energy_location",
    impactKey: "renewable_energy_impact",
    image: "/images/illustrations/renewable-energy.svg",
    gradient: "from-green-500 to-green-600",
  },
  {
    titleKey: "women_leadership",
    locationKey: "women_leadership_location",
    impactKey: "women_leadership_impact",
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
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
              {mounted ? t('our_impact') : 'Our Impact'}
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-white/90">
              {mounted ? t('impact_description') : 'Together, we\'re building a sustainable future. See how our fellows are making a difference across Africa.'}
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
                key={metric.titleKey}
                variants={item}
                className="card card-hover p-6"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.gradient} p-2 mb-4`}>
                  <metric.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{mounted ? t(metric.titleKey) : metric.titleKey}</h3>
                <p className="text-muted-foreground">{mounted ? t(metric.descriptionKey) : metric.descriptionKey}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center gradient-text mb-12">{mounted ? t('success_stories_title') : 'Success Stories'}</h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {successStories.map((story) => (
              <motion.div
                key={story.titleKey}
                variants={item}
                className="card card-hover overflow-hidden"
              >
                <div className="relative h-48">
                  <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-10`} />
                  <Image
                    src={story.image}
                    alt={mounted ? t(story.titleKey) : story.titleKey}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{mounted ? t(story.titleKey) : story.titleKey}</h3>
                  <p className="text-muted-foreground mb-2">📍 {mounted ? t(story.locationKey) : story.locationKey}</p>
                  <p className="text-primary font-medium">{mounted ? t(story.impactKey) : story.impactKey}</p>
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
              {mounted ? t('join_movement') : 'Join Our Movement'}
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              {mounted ? t('join_movement_description') : 'Be part of the change. Together, we can create a sustainable future for Africa.'}
            </p>
            <Link
              href="/get-involved"
              className="btn btn-primary inline-flex items-center group"
            >
              {mounted ? t('get_involved_cta') : 'Get Involved'}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 