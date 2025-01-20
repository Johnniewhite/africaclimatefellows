"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users2, Globe2, BookOpen, Target } from "lucide-react"
import Link from "next/link"

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
    <main className="min-h-screen pt-24">
      {/* Program Overview Section */}
      <section id="overview" className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Lake Chad Climate Justice Youth Fellowship
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              A transformative 24-month fellowship empowering young African leaders to address climate justice 
              and environmental challenges in the Lake Chad region.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Duration", value: "24 Months" },
                { label: "Fellows", value: "20 Leaders" },
                { label: "Focus", value: "Lake Chad Basin" },
                { label: "Countries", value: "4 Nations" }
              ].map((stat) => (
                <div key={stat.label} className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Background Section */}
      <section id="background" className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">Background</h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              The Lake Chad region faces severe challenges stemming from climate change, including a 90% reduction 
              in the lake&apos;s size, leading to desertification, resource scarcity, and the collapse of traditional 
              livelihoods such as agriculture and fishing. These environmental impacts have heightened social tensions, 
              fueled insecurity, and displaced communities, leaving women and girls particularly vulnerable.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Youth in the region, though disproportionately affected, are underrepresented in climate action due 
              to barriers like limited resources, inadequate skills, and lack of access to advocacy platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Core Components Section */}
      <section id="components" className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Application Process Section */}
      <section id="apply" className="py-24">
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

      {/* Key Challenges Section */}
      <section id="challenges" className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-xl text-foreground/80">
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
    </main>
  )
} 