"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Building2, Globe2, Users2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Modal } from '@/components/Modal'

export default function About() {
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null);

  const teamMembers = [
    {
      name: "Uche Arinze",
      image: "/images/faculty/uche.jpeg",
      bio: `Uche Arinze is a dynamic educator, development strategist, and communications expert passionately shaping narratives that drive impact. As Communications Manager at Dean Initiative, a youth-led NGO championing transformational change, she leads with creativity and purpose, crafting powerful stories that amplify the organization's mission and influence.

A graduate of Obafemi Awolowo University with a BA and a PGD in Education from the University of Lagos, Uche blends academic excellence with hands-on expertise in education, advocacy, and digital media. Her work in advancing the Sustainable Development Goals (SDGs) since their inception underscores her deep commitment to fostering meaningful progress.

Uche's influence extends beyond Dean Initiative. She has served as Lead of Communications and PR for CYPAN's Leadership Committee, an Alumni Global Ambassador for Theirworld, a member of the Youth SDGs Newsletter editorial board, a Teach for Nigeria mentor, and a Mandela Washington Fellowship application scorer. Her strategic communications skills have also driven successful campaigns for national and international brands.

Whether mentoring young changemakers, managing digital strategies, or telling stories that inspire action, Uche remains dedicated to shaping a future where education and communication fuel sustainable development and empowered communities.`,
    },
    {
      name: "Ngozi Edum",
      image: "/images/faculty/ngozi.jpeg",
      bio: `Ngozi leads the Partnership and Innovation at the Development of Educational Action Network. She has over five years of experience leading sustainable development projects, including climate action, gender equality, youth leadership, governance, and education. As a climate justice advocate, she amplifies the voices of marginalised communities and groups in climate discourse to ensure the inclusion of perspectives from those on the frontlines disproportionately affected by the climate crisis. Ngozi has a background in Forestry and Environmental Management, graduating with First Class Honours. She has received multiple scholarships and recently completed an advanced degree in Forest Science with full funding through the Erasmus Mundus Joint Masters Degree Award. Ngozi is an excellent public speaker and facilitator, as evidenced by her role as a panel speaker and facilitator at global and international events.`,
    },
    {
      name: "Doreen Mennom Oho",
      image: "/images/faculty/doreen.jpeg",
      bio: `Doreen Mennom Oho is a development practitioner currently serving as the Technical Programs Lead at DEAN Initiative, a youth-led organization dedicated to enhancing healthy communities for young people. In her role, she spearheads projects focused on governance, democracy, youth leadership, climate action, and education.
She holds a Master's in International Affairs and Diplomacy and a Bachelor of Arts in English Language from Ahmadu Bello University, Nigeria. She is a People Powered Climate Democracy Accelerator Fellow, focused on using participatory budgeting to help marginalized communities access resources for climate adaptation and mitigation. Doreen is also a Carrington Youth Fellow of the United States Government in Nigeria and a participant in the African Group of Negotiators Experts Support (AGNES) 2025 Climate Governance, Diplomacy, and Negotiations Leadership Program.
She currently oversees the Lake Chad Climate Justice Fellowship, a project aimed at equipping young leaders with the knowledge and tools to advocate for climate justice and resilience in the region.
With extensive experience in NGO leadership, community development, and fundraising, her skill set includes program design, grant proposal writing, and program coordination. She is passionate about climate finance, governance, and ensuring communities in the Lake Chad region have access to resources needed to strengthen their resilience against climate change.`,
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Full Image and Improved Text Visibility */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <Image 
          src="/images/banner.jpeg" 
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
                  About the Fellowship
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              >
                A transformative initiative dedicated to harnessing the adventurous spirit, resilience,
                and innovative leadership of African youth.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400/40 via-white/60 to-green-400/40" />
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Our Mission
            </h1>
            <p className="text-xl text-foreground/80">
              To equip young African climate activists with the tools, networks, funding and mentorship
              needed to address the intersectional challenges of climate change across the continent.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Globe2,
                title: "Climate Action",
                description: "Leading initiatives for sustainable environmental change across Africa"
              },
              {
                icon: Users2,
                title: "Youth Empowerment",
                description: "Building the next generation of climate justice leaders"
              },
              {
                icon: Building2,
                title: "Community Impact",
                description: "Creating lasting positive change in local communities"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Our Team
            </h2>
            <p className="text-xl text-foreground/80">
              Meet our dedicated team of experts driving climate action and empowering the next generation of leaders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold text-center text-white mb-2">
                        {member.name}
                      </h3>
                      <div className="h-1 w-12 bg-green-500 mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <Modal isOpen={!!selectedMember} onClose={() => setSelectedMember(null)}>
          {selectedMember && (
            <div className="max-h-[80vh] overflow-y-auto">
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold">{selectedMember.name}</h3>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                {selectedMember.bio}
              </p>
            </div>
          )}
        </Modal>
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
              Our Partners
            </h2>
            <p className="text-xl text-foreground/80">
              Collaborating with leading organizations to create lasting impact in climate action.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 flex items-center justify-center shadow-lg aspect-square"
              >
                <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg" />
              </motion.div>
            ))}
          </div>
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
    </main>
  )
} 