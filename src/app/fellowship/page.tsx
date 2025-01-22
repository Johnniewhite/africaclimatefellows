"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users2, Globe2, BookOpen, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const coreComponents = [
  {
    icon: BookOpen,
    title: "Capacity Building",
    description: "Workshops on climate justice, storytelling, data visualization, and project management."
  },
  {
    icon: Users2,
    title: "Mentorship and Faculty",
    description: "Paired with seasoned African climate experts and global facilitators for guidance."
  },
  {
    icon: Globe2,
    title: "Global Representation",
    description: "Participation in international and African climate forums."
  },
  {
    icon: Target,
    title: "Community Project Development",
    description: "Grants to implement localized climate action projects."
  }
]

export default function Fellowship() {
  return (
    <main className="min-h-screen pt-16 md:pt-24">
      {/* Hero Section with Parallax */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/LakeChadPhotos/lake1.png"
            alt="Lake Chad Region"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-white">
                Lake Chad Climate Justice Youth Fellowship
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                A transformative 24-month fellowship empowering young African leaders to address climate justice 
                and environmental challenges in the Lake Chad region.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {[
                  { label: "Duration", value: "24 Months" },
                  { label: "Fellows", value: "20 Leaders" },
                  { label: "Focus", value: "Lake Chad Basin" },
                  { label: "Countries", value: "4 Nations" }
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
                    <div className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
                    <div className="text-xs md:text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Background Section with Image Grid */}
      <section className="py-12 md:py-24 relative bg-gradient-to-b from-green-50/50 to-white dark:from-green-950/30 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-400">Background</h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                The Lake Chad region faces severe challenges stemming from climate change, including a 90% reduction 
                in the lake&apos;s size, leading to desertification, resource scarcity, and the collapse of traditional 
                livelihoods such as agriculture and fishing. These environmental impacts have heightened social tensions, 
                fueled insecurity, and displaced communities, leaving women and girls particularly vulnerable.
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Youth in the region, though disproportionately affected, are underrepresented in climate action due 
                to barriers like limited resources, inadequate skills, and lack of access to advocacy platforms.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              {[
                '/images/LakeChadPhotos/lake2.png',
                '/images/ClimateConvoFold/ClimateConvo1.jpeg',
                '/images/LakeChadPhotos/lake3.png',
                '/images/ClimateConvoFold/ClimateConvo8.jpeg'
              ].map((src, index) => (
                <div 
                  key={src} 
                  className={`relative h-32 md:h-48 ${
                    index === 1 ? 'mt-6 md:mt-12' : ''
                  } ${
                    index === 2 ? '-mt-6 md:-mt-12' : ''
                  }`}
                >
                  <Image
                    src={src}
                    alt="Lake Chad Region"
                    fill
                    className="object-cover rounded-lg shadow-xl"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Components with Visual Enhancement */}
      <section id="components" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ClimateConvoFold/ClimateConvo1.jpeg"
            alt="Background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Core Components
            </h2>
            <p className="text-xl text-foreground/80">
              Our comprehensive program is designed to equip fellows with the skills, networks, and resources needed for impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreComponents.map((component, index) => (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <component.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{component.title}</h3>
                <p className="text-foreground/70">{component.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process with Timeline Visual */}
      <section id="apply" className="py-24 bg-gradient-to-br from-green-50 to-white dark:from-green-950/30 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Application Process
            </h2>
            <p className="text-xl text-foreground/80">
              Join our inaugural cohort of climate leaders through our comprehensive selection process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Eligibility Criteria */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-12"
            >
              <h3 className="text-2xl font-bold mb-6 text-green-600 dark:text-green-400">Eligibility Criteria</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <strong className="block mb-1">Age:</strong>
                    <p className="text-foreground/70">Must be between 18 and 35 years old at the time of application.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <strong className="block mb-1">Location:</strong>
                    <p className="text-foreground/70">Open to candidates from the Lake Chad region (Chad, Nigeria, Cameroon, Niger).</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <strong className="block mb-1">Commitment to Climate Action:</strong>
                    <p className="text-foreground/70">Demonstrated passion or experience in climate justice, advocacy, or environmental sustainability.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <strong className="block mb-1">Availability:</strong>
                    <p className="text-foreground/70">Must commit to the full 24-month fellowship duration and all program activities.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Selection Process Steps */}
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Application Submission",
                  description: "Complete the online application including personal information, statement of purpose (300-500 words), and CV highlighting relevant experience."
                },
                {
                  step: "2",
                  title: "Initial Screening",
                  description: "Applications are evaluated based on eligibility criteria, relevance of experience, and innovation of proposed solutions."
                },
                {
                  step: "3",
                  title: "Interview Round",
                  description: "Selected candidates participate in virtual interviews to assess communication skills and commitment to climate justice."
                },
                {
                  step: "4",
                  title: "Final Selection",
                  description: "20 fellows are chosen ensuring diversity in gender, experience, and geographic representation."
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-green-600 dark:text-green-400">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href="/get-involved#apply"
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Challenges with Image Overlay */}
      <section id="challenges" className="py-24 relative">
        <div className="absolute inset-0">
          <Image
            src="/images/LakeChadPhotos/lake4.png"
            alt="Lake Chad Challenges"
            fill
            className="object-cover brightness-50 blur-sm"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Key Challenges Addressed
            </h2>
            <p className="text-xl text-white">
              Our fellowship focuses on addressing critical environmental and social challenges in the Lake Chad region.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Environmental Degradation",
                description: "Addressing desertification and the 90% reduction in Lake Chad's size through innovative conservation approaches."
              },
              {
                title: "Resource Scarcity",
                description: "Developing sustainable solutions for water access and agricultural resilience in affected communities."
              },
              {
                title: "Social Impact",
                description: "Tackling displacement, gender-based vulnerabilities, and community resilience through climate justice initiatives."
              }
            ].map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">{challenge.title}</h3>
                <p className="text-foreground/70">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-24 bg-green-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ClimateConvoFold/ClimateConvo6.jpeg"
            alt="Call to Action Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Join the Movement</h2>
            <p className="text-base md:text-xl text-white/80 mb-6 md:mb-8">
              Be part of the solution. Apply now to become a Climate Justice Youth Fellow.
            </p>
            <Link 
              href="/get-involved#apply"
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium text-green-900 bg-white hover:bg-green-50 rounded-lg transition-colors shadow-lg"
            >
              Apply Now
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 