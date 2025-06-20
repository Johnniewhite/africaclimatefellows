"use client"

import BlogSection from "../components/BlogSection";
import { motion } from "framer-motion"
import { ArrowRight, Leaf, Globe2, Users2, Sparkles, PlayCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Modal } from "../components/Modal"
import { useLanguage } from "@/context/LanguageContext"

const features = [
  {
    titleKey: "feature_climate_action_title",
    descriptionKey: "feature_climate_action_desc",
    icon: Leaf,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    titleKey: "feature_pan_african_title",
    descriptionKey: "feature_pan_african_desc",
    icon: Globe2,
    gradient: "from-emerald-500 to-green-600",
  },
  {
    titleKey: "feature_mentorship_title",
    descriptionKey: "feature_mentorship_desc",
    icon: Users2,
    gradient: "from-green-600 to-emerald-500",
  },
  {
    titleKey: "feature_funding_title",
    descriptionKey: "feature_funding_desc",
    icon: Sparkles,
    gradient: "from-emerald-600 to-green-500",
  },
]


export default function Home() {
  const { t, language, isLoaded } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const heroImages = [
    '/images/ClimateConvofold/Climate Convo12.jpeg',
    '/images/ClimateConvofold/D56E2701.jpg',
    '/images/ClimateConvofold/Climate Convo13.jpeg',
    '/images/ClimateConvofold/D56E2640.jpg',
    '/images/ClimateConvofold/Climate Convo14.jpeg'
  ]

  const [lakeImageIndex, setLakeImageIndex] = useState(0)
  const lakeImages = [
    '/images/LakeChadPhotos/lake1.png',
    '/images/LakeChadPhotos/lake3.png',
    '/images/LakeChadPhotos/lake4.png',
  ]

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true)
    
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [heroImages.length])

  useEffect(() => {
    const lakeTimer = setInterval(() => {
      setLakeImageIndex((prev) => (prev + 1) % lakeImages.length)
    }, 5000)

    return () => clearInterval(lakeTimer)
  }, [lakeImages.length])

  useEffect(() => {
    // Short delay to ensure smooth page load
    const timer = setTimeout(() => {
      setIsVideoModalOpen(true);
    }, 1000); // Shows modal 1 second after page load

    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    if (mounted) {
      console.log("Home component mounted, language:", language);
      console.log("Translations loaded:", isLoaded);
      console.log("Sample translation - climate_justice_youth_fellowship:", t('climate_justice_youth_fellowship'));
    }
  }, [mounted, language, isLoaded, t]);

  // Get the translated or fallback text
  const bannerHeadline = mounted ? t('banner_headline') : "Empowering Africa's Youth for Climate Justice Action";
  const bannerSubtext = mounted ? t('banner_subtext') : "A transformative fellowship and action equipping young African leaders to champion climate justice, tackle systemic challenges, and drive grassroots resilience.";

  return (
    <main className="min-h-screen">
      {/* Hero Banner - Mobile Friendly */}
      <div className="relative py-12 md:py-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banner.jpeg"
            alt="Hero background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 md:mb-8 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] animate-fade-in-up">
            {mounted && t('climate_justice_youth_fellowship')}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-white font-medium leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] animate-fade-in-up-delay px-4">
            {mounted && t('banner_headline')}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-400/40 via-white/60 to-green-400/40"></div>
      </div>

      {/* Hero Section with Split Layout - Mobile Friendly */}
      <section className="relative min-h-[500px] flex flex-col lg:flex-row justify-between">
        {/* Image Carousel - Full width on mobile, 60% on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[60%] relative h-[400px] lg:h-auto"
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
                alt={`Climate Justice Fellowship image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
          {/* Image Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImage === index 
                    ? 'bg-white w-4' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Text Content - Full width on mobile, 40% on desktop */}
        <div className="w-full lg:w-[50%] bg-green-50 dark:bg-green-950/30 p-6 md:p-8 lg:p-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-950 dark:text-green-50">
              {mounted && t('climate_justice_youth_fellowship')}
            </h2>
            <p className="text-base sm:text-lg text-green-800/80 dark:text-green-100/80 leading-relaxed">
              {mounted && t('fellowship_description_1')}
            </p>
            <div className="space-y-6">
            <p className="text-base sm:text-lg text-green-800/80 dark:text-green-100/80 leading-relaxed">
              {mounted && t('fellowship_description_2')}
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-green-800/80 dark:text-green-100/80 leading-relaxed">
              {mounted && t('fellowship_description_3')}
              </p>
            </div>
            <Link 
              href="/fellowship"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-green-700 hover:bg-green-800 transition-colors rounded-md"
            >
              {mounted && t('learn_more')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 mt-8">
        <button
          onClick={() => setIsVideoModalOpen(true)}
          className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 border border-white/20"
        >
          <PlayCircle className="w-5 h-5 mr-2" />
          {mounted && t('watch_video')}
        </button>
      </div>

      {/* Features Grid - Mobile Friendly */}
      <section className="py-12 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="p-6 relative overflow-hidden">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-2.5 mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {mounted && t(feature.titleKey)}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {mounted && t(feature.descriptionKey)}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lake Chad Fellowship Section */}
      <section className="relative min-h-[600px] flex flex-col lg:flex-row justify-between bg-gradient-to-br from-green-50/50 to-transparent dark:from-green-950/30 dark:to-transparent">
        {/* Image Carousel - Full width on mobile, 60% on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[60%] relative h-[400px] lg:h-[600px]"
        >
          {lakeImages.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0 }}
              animate={{ opacity: lakeImageIndex === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={src}
                alt={`Lake Chad Region image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </motion.div>
          ))}
          {/* Image Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {lakeImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setLakeImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  lakeImageIndex === index 
                    ? 'bg-white w-4' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Text Content - Full width on mobile, 40% on desktop */}
        <div className="w-full lg:w-[40%] bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 md:p-8 lg:p-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block mb-4 md:mb-6 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
              <span className="text-sm font-medium text-green-800 dark:text-green-200">
                {mounted && t('first_fellowship_call')}
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-950 dark:text-green-50">
              {mounted && t('lake_chad_title')}
            </h2>
            
            <p className="text-base sm:text-lg text-green-800/80 dark:text-green-100/80 leading-relaxed">
              {mounted && t('lake_chad_description')}
            </p>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-green-700 dark:text-green-300">
                  {mounted && t('key_challenges_section')}
                </h3>
                <ul className="space-y-2 text-green-800/80 dark:text-green-100/80">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {mounted && t('challenge_desertification')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {mounted && t('challenge_displacement')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {mounted && t('challenge_gender')}
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm sm:text-base text-green-800/80 dark:text-green-100/80">
                <div>
                  <span className="font-medium block">{mounted && t('target_region')}</span>
                  <span>{mounted && t('lake_chad_basin')}</span>
                </div>
                <div>
                  <span className="font-medium block">{mounted && t('countries')}</span>
                  <span>{mounted && t('four_nations')}</span>
                </div>
                <div>
                  <span className="font-medium block">{mounted && t('duration')}</span>
                  <span>{mounted && t('months_24')}</span>
                </div>
                <div>
                  <span className="font-medium block">{mounted && t('fellows')}</span>
                  <span>{mounted && t('youth_leaders_20')}</span>
                </div>
              </div>
            </div>
            
            <Link 
              href="/fellowship"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-medium text-white bg-green-700 hover:bg-green-800 transition-colors rounded-md shadow-lg hover:shadow-xl"
            >
              {mounted && t('learn_more')}
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Section - Mobile Friendly */}
      <section className="py-12 md:py-24">
      <BlogSection 
        postsToShow={3}
        title={mounted ? t('latest_insights') : "Latest Insights"}
        subtitle={mounted ? t('explore_articles') : "Explore our latest articles on climate action and environmental justice"}
      />
        
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              {mounted && t('our_partners')}
            </h2>
            <p className="text-xl text-foreground/80">
              {mounted && t('partners_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "CJRF", image: "/images/partners/cjrf.JPG", labelKey: "project_funded_by" },
              { name: "DEAN", image: "/images/partners/dean.png", labelKey: "project_initiative_of" },
              { name: "CDBLT", image: "/images/partners/cdblt.JPG", labelKey: "partners" }
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <p className="text-foreground/80 font-medium mb-4 text-center">
                  {mounted && t(partner.labelKey)}
                </p>
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section - Mobile Friendly */}
      <section className="relative py-12 md:py-24 overflow-hidden bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h2 className="gradient-text mb-6">
                {mounted && t('ready_to_make_impact')}
              </h2>
              <p className="text-xl text-foreground/80 mb-12">
                {mounted && t('join_community')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/get-involved"
                  className="btn btn-primary group relative overflow-hidden"
                >
                  <span className="relative z-10">{mounted && t('get_involved_cta')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-secondary group relative overflow-hidden"
                >
                  <span className="relative z-10">{mounted && t('contact_us')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Modal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)}>
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/aJbkSjZuLfw"
            title="Lake Chad Climate Justice Fellowship Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      </Modal>
    </main>
  )
}
