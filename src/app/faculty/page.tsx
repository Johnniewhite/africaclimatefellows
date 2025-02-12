"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Target, Presentation } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "@/components/Modal";

export default function Faculty() {
  const [selectedMember, setSelectedMember] = useState<
    (typeof facultyMembers)[0] | null
  >(null);

  const roles = [
    {
      title: "Facilitators",
      description:
        "Lead workshops and training sessions on climate justice, data visualization, and project management",
      icon: Presentation,
      gradient: "from-green-500 to-emerald-600",
      bgImage: "/images/ClimateConvoFold/banner.jpeg",
    },
    {
      title: "Mentors",
      description:
        "Provide one-on-one guidance and support to fellows throughout their journey",
      icon: Brain,
      gradient: "from-emerald-500 to-green-600",
      bgImage: "/images/ClimateConvoFold/ClimateConvo1.jpeg",
    },
    {
      title: "Thought Leaders",
      description:
        "Share expertise and insights on climate justice in Africa through talks and publications",
      icon: Target,
      gradient: "from-green-600 to-emerald-500",
      bgImage: "/images/ClimateConvoFold/ClimateConvo2.jpeg",
    },
  ];

  const facultyMembers = [
    {
      name: "Uche Arinze",
      image: "/images/faculty/uche.jpeg",
      background: "/images/LakeChadPhotos/lake1.png",
      bio: `Uche Arinze is a dynamic educator, development strategist, and communications expert passionately shaping narratives that drive impact. As Communications Manager at Dean Initiative, a youth-led NGO championing transformational change, she leads with creativity and purpose, crafting powerful stories that amplify the organization's mission and influence.

A graduate of Obafemi Awolowo University with a BA and a PGD in Education from the University of Lagos, Uche blends academic excellence with hands-on expertise in education, advocacy, and digital media. Her work in advancing the Sustainable Development Goals (SDGs) since their inception underscores her deep commitment to fostering meaningful progress.

Uche's influence extends beyond Dean Initiative. She has served as Lead of Communications and PR for CYPAN's Leadership Committee, an Alumni Global Ambassador for Theirworld, a member of the Youth SDGs Newsletter editorial board, a Teach for Nigeria mentor, and a Mandela Washington Fellowship application scorer. Her strategic communications skills have also driven successful campaigns for national and international brands.

Whether mentoring young changemakers, managing digital strategies, or telling stories that inspire action, Uche remains dedicated to shaping a future where education and communication fuel sustainable development and empowered communities.`,
    },
    {
      name: "Ngozi Edum",
      image: "/images/faculty/ngozi.jpeg",
      background: "/images/LakeChadPhotos/lake2.png",
      bio: `Ngozi leads the Partnership and Innovation at the Development of Educational Action Network. She has over five years of experience leading sustainable development projects, including climate action, gender equality, youth leadership, governance, and education. As a climate justice advocate, she amplifies the voices of marginalised communities and groups in climate discourse to ensure the inclusion of perspectives from those on the frontlines disproportionately affected by the climate crisis. Ngozi has a background in Forestry and Environmental Management, graduating with First Class Honours. She has received multiple scholarships and recently completed an advanced degree in Forest Science with full funding through the Erasmus Mundus Joint Masters Degree Award. Ngozi is an excellent public speaker and facilitator, as evidenced by her role as a panel speaker and facilitator at global and international events.`,
    },
    {
      name: "Doreen Mennom Oho",
      image: "/images/faculty/doreen.jpeg",
      background: "/images/LakeChadPhotos/lake3.png",
      bio: `Doreen Mennom Oho is a development practitioner currently serving as the Technical
Programs Lead at DEAN Initiative, a youth-led organization dedicated to enhancing healthy
communities for young people. In her role, she spearheads projects focused on governance,
democracy, youth leadership, climate action, and education.
She holds a Master's degree in International Affairs and Diplomacy and a Bachelor of Arts in
English Language from Ahmadu Bello University, Nigeria. She is a People Powered Climate
Democracy Accelerator Fellow, focused on using participatory budgeting to help
marginalized communities access resources for climate adaptation and mitigation. Doreen is
also a Carrington Youth Fellow of the United States Government in Nigeria and a participant
in the African Group of Negotiators Experts Support (AGNES) 2025 Climate Governance,
Diplomacy, and Negotiations Leadership Program.
She currently oversees the Lake Chad Climate Justice Fellowship, a project aimed at
equipping young leaders with the knowledge and tools to advocate for climate justice and
resilience in the region.
With extensive experience in NGO leadership, community development, and fundraising, her
skill set includes program design, grant proposal writing, and program coordination. She is
passionate about climate finance, governance, and ensuring communities in the Lake Chad
region have access to resources needed to strengthen their resilience against climate change.`,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero1s.jpg"
            alt="Lake Chad Background"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-background" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Meet Our Faculty
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Expert mentors and facilitators dedicated to nurturing the next
              generation of climate justice leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Roles Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              Faculty Roles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {roles.map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative h-[400px] overflow-hidden rounded-2xl"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={role.bgImage}
                      alt={role.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300" />
                  </div>
                  <div className="relative h-full p-8 flex flex-col justify-end">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${role.gradient} p-3 mb-4`}
                    >
                      <role.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {role.title}
                    </h3>
                    <p className="text-white/90">{role.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Faculty Members Section */}
      <section className="py-24 relative bg-gradient-to-b from-green-50/50 to-white dark:from-green-950/30 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              Our Faculty Members
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facultyMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative rounded-2xl overflow-hidden">
                    <div className="aspect-[3/4] relative">
                      <Image
                        src={member.background}
                        alt={`${member.name} background`}
                        fill
                        className="object-cover brightness-50"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <div className="mb-4">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={100}
                            height={100}
                            className="rounded-full border-4 border-white/20"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {member.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
              <h3 className="text-2xl font-bold">{selectedMember.name}</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
              {selectedMember.bio}
            </p>
          </div>
        )}
      </Modal>

      {/* Enhanced CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banner.jpeg"
            alt="Community"
            fill
            className="object-cover brightness-25 blur-sm"
          />
        </div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Faculty
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Share your expertise and help shape the next generation of climate
              justice leaders in Africa.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-full transition-colors duration-300"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
