"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Target, Presentation } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Modal } from "@/components/Modal";
import { useLanguage } from "@/context/LanguageContext";

export default function Faculty() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [selectedMember, setSelectedMember] = useState<
    (typeof facultyMembers)[0] | null
  >(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const roles = [
    {
      titleKey: "facilitators",
      descriptionKey: "facilitators_description",
      icon: Presentation,
      gradient: "from-green-500 to-emerald-600",
      bgImage: "/images/ClimateConvoFold/banner.jpeg",
    },
    {
      titleKey: "mentors",
      descriptionKey: "mentors_description",
      icon: Brain,
      gradient: "from-emerald-500 to-green-600",
      bgImage: "/images/ClimateConvoFold/ClimateConvo1.jpeg",
    },
    {
      titleKey: "thought_leaders",
      descriptionKey: "thought_leaders_description",
      icon: Target,
      gradient: "from-green-600 to-emerald-500",
      bgImage: "/images/ClimateConvoFold/ClimateConvo2.jpeg",
    },
  ];

  const facultyMembers = [
    {
      name: "Taiye Ojo",
      position: "Project Manager",
      image: "/images/Taiye.jpg",
      background: "/images/LakeChadPhotos/lake2.png",
      bio: `Taiye Ojo is a dynamic Programme Manager with over three years of experience in the development sector, leading impactful initiatives at the intersection of education, governance, youth leadership, and climate action. Known for designing and managing high-impact programs across Nigeria, Taiye has successfully coordinated multi-stakeholder projects, including the Students-Open Gov Fellowship, Global Children Designathon (2023 & 2025), Youth Health Access, Election Observation Mission, and the Young Climate Activist Summer Camp, alongside several community mobilization campaigns focused on civic education and environmental sustainability.

He brings a robust skill set in project design and implementation, community engagement, stakeholder coordination, facilitation and strategic planning. Taiye’s ability to translate complex ideas into actionable community programs has earned him recognition and partnerships with notable organizations such as Center LSD, the World’s Largest Lesson, and the Open Government Partnership (OGP).

As Programme Manager at DEAN Initiative, Taiye leads innovative youth-centered programs that strengthen democratic participation and drive grassroots impact, managing diverse teams and ensuring timely delivery of program goals. He is a passionate advocate for inclusive development, he is committed to empowering local actors, nurturing youth leadership, and building sustainable, community-led solutions that create lasting change.

`,
    },
    {
      name: "Blessing Agu",
      position: "Project Officer",
      image: "/images/faculty/Blessing.png",
      background: "/images/LakeChadPhotos/lake3.png",
      bio: `Blessing C. Agu aka Newest is a development practitioner and policy advocate passionate about climate justice, democratic governance, inclusion, and policy reforms. She currently serves as the Strategy and Research Lead at DEAN Initiative, where she drives data-driven research, evidence-based advocacy, strategic alignment, and grassroots engagement. She also doubles as the Community Manager where she coordinates team, pool of volunteers, and external and development partners. With a strong background in civic innovation, monitoring and evaluation, she is committed to amplifying marginalised voices, promoting climate resilience, and shaping inclusive public policy.`,
    },
    {
      name: "Dorcas Mokikan",
      position: "Project Communications Officer",
      image: "/images/Dorcas.jpg",
      background: "/images/LakeChadPhotos/lake1.png",
      bio: `Dorcas Mokikan is a dynamic educator, development strategist, and communications expert with a passion for climate action and social transformation. As Communications and Visual/Data Creative Officer at the Dean Initiative, a youth-led NGO championing sustainable development, she blends storytelling, design, and data to craft impactful narratives that drive change. Dorcas uses her creative vision to spotlight climate issues, engage young people, and amplify underrepresented voices, making complex ideas accessible and actionable.`,
    },
  ];

  const facilitatorMembers = [
    {
      name: "Dr Azeezat Yishawu",
      position: "Senior Special Assistant on Policy to the Honourable Minister of Youth Development",
      image: "Azeezat_Yishawu.png",
      background: "/images/LakeChadPhotos/lake1.png",
      bio: `Dr Azeezat Yishawu is a Medical doctor and policy advocate with a deep-rooted commitment to climate justice and systems reform. Currently serving as the Senior Special Assistant on Policy to the Honourable Minister of Youth Development, also leading the development of youth-focused policy frameworks that emphasize sustainability, equity, and meaningful inclusion.
Dr Azeezat's transition into policy making and shaping was driven by a deep concern for reactive governance and the urgent need for long-term, people-centered solutions—especially for young Nigerians. Policy is viewed not merely as a government function, but as a lever for justice. Through rigorous research, civic engagement, and strategic collaboration, the goal remains clear: to develop policies that respond to the realities of citizens, particularly across health, gender, and the environment.
Dr Azeezat has over 9 years experience in climate advocacy and effect of climate on peace and security and additional experience in community and stakeholder engagement for policy reform. Dr Azeezat is a fellow of International visitor leadership Programme, Legislative mentorship initiative and the convener of Rethink Inclusion.`,
    },
    {
      name: "Bem Asen",
      position: "PhD in Post-Harvest Technology (Fisheries) & Global Ageing and Policy Expert",
      image: "ben.JPG",
      background: "/images/LakeChadPhotos/lake1.png",
      bio: `Bem Asen holds a Bachelors and Masters in Zoology at the University of Ilorin, and a PhD in Post-Harvest Technology (Fisheries) at Benue State University. He also holds a Masters in Global Ageing and Policy from the University of Southampton (Commonwealth Scholarship).
He is an expert in environmental science, climate change, climate governance, natural resources management, sustainable fisheries, gender and inclusivity mainstreaming in projects, project management, building innovative social enterprises, qualitative and quantitative research, community development, migration, waste management, cash assistance programming and ageing.
He has worked in data, environmental science, climate change and biodiversity management at the Community and Social Development Agency (World Bank Assisted), International Organization for Migration, and Climate Governance Initiative Nigeria Chapter.
Asen founded Ageing Forward Foundation to support ageing people in humanitarian settings, and Prime Briquettes to train rural communities on producing charcoal briquettes from agricultural waste. His social innovation has earned him awards including Microsoft Insider for Good Fellowship, LEAP Africa Social Innovators Fellowship, Commonwealth Fellowship, and Innocent Chukwuma Social Impact Fellowship.`,
    },
    {
      name: "Chefor Ngwenyi Meungwe",
      position: "Development Economics Specialist & Gender Activist",
      image: "Chefor_Daisy.jpg",
      background: "/images/LakeChadPhotos/lake1.png",
      bio: `Chefor Ngwenyi Meungwe is a development economics specialist and gender activist with over 8 years of experience in monitoring, evaluation, research, and policy development across Africa. Currently pursuing a PhD in Development and Institutional Economics, she brings expertise in climate change adaptation, gender-sensitive programming, and conflict resolution.
As GBV Coordinator at The Light Africa since 2022, she has implemented programs in conflict-affected areas of Cameroon and previously managed evaluations for UNDP and Helen Keller International, especially in the Lake Chad Basin. Her research on conflicts and climate adaptation addresses food insecurity and displacement challenges.
Fluent in English and French, Chefor excels in data analysis, technical reporting, and stakeholder engagement to bridge research and implementation for sustainable, gender-responsive climate justice solutions.`,
    },
    {
      name: "Funmilayo",
      position: "Program Officer at Dataphyte",
      image: "Funmilayo.jpg",
      background: "/images/LakeChadPhotos/lake1.png",
      bio: `Funmilayo is a development professional with expertise in policy advocacy, research analysis, and project management. As a Program Officer at Dataphyte, she designs niche-specific project ideas, transforming concepts into actionable initiatives and facilitating impactful outcomes.
With over two years of experience at the intersection of research, development, and policy advocacy, Funmilayo has contributed to data-driven conversations in climate change, environmental sustainability, international development, elections, and gender equality.`,
    },
    {
      name: "Kehinde Ogunyale",
      position: "Data Journalist & Media Trainer at Dataphyte",
      image: "Kehinde_Ogunyale.jpg",
      background: "/images/LakeChadPhotos/lake1.png",
      bio: `Kehinde Ogunyale is a data journalist, analyst, and media trainer at Dataphyte who uses storytelling and visualizations to hold governments accountable. He has trained over 700 journalists across Africa and collaborates with newsrooms to establish data desks.
A passionate climate journalist, Kehinde has covered the crisis in southern Nigeria and is a media fellow with Climate Tracker, AIJC, and others. His work spans conflict, business, solution journalism, and fact-checking, with multiple fellowship recognitions.`,
    },
    {
      name: "Lawrence Akpoterai",
      position: "Climate Leadership Fellowship",
      image: "Larence_Akpoterai.png",
      background: "/images/LakeChadPhotos/lake1.png",
      bio: `Lawrence is a first-class graduate of Geography from the University of Ibadan
and holds a master's degree in Climate Change Adaptation from the University
of Nairobi. He is a Climate Leadership Fellowship alumnus, a 2022 Walter
Carrington Youth Fellow, and a recipient of the prestigious German Academic
Exchange Service (DAAD) scholarship through the African Climate and
Environment Centre - Future African Savannas, with a research focus on
climate adaptation and nature-based solutions. With years of experience in
development and social impact, Lawrence has worked at the intersection of
research, advocacy, and program management, including having interned with
the Local Communities and Indigenous Peoples Platform workstream of the
Adaptation division at the United Nations Framework Convention on Climate
Change (UNFCCC). He leads and supports various youth-led climate
organisations, has also implemented projects promoting climate resilience and
environmental sustainability, driving impactful change within local
communities, and has featured on both national and international TV. His work
focuses on enhancing adaptation and resilience-building, bridging the
science-policy-practice gap, and mainstreaming capacity building for
sustainable development.`,
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
              {mounted ? t("meet_our_faculty") : "Meet Our Facilitators"}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              {mounted
                ? t("faculty_description")
                : "Expert mentors and facilitators dedicated to nurturing the next generation of climate justice leaders."}
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
              {mounted ? t("faculty_roles") : "Faculty Roles"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {roles.map((role, index) => (
                <motion.div
                  key={role.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative h-[400px] overflow-hidden rounded-2xl"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={role.bgImage}
                      alt={mounted ? t(role.titleKey) : role.titleKey}
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
                      {mounted ? t(role.titleKey) : role.titleKey}
                    </h3>
                    <p className="text-white/80">
                      {mounted ? t(role.descriptionKey) : role.descriptionKey}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilitators Section */}
      <section className="py-24 relative bg-gradient-to-b from-green-50/50 to-white dark:from-green-950/30 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              {mounted ? t("facilitators") : "Facilitators"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {facilitatorMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer mx-auto w-full max-w-sm"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Hover Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <div className="text-white">
                          <p className="text-sm font-medium text-green-400 mb-2">View Profile</p>
                          <p className="text-sm opacity-90 line-clamp-3">
                            {member.bio.split(".")[0]}.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Info Section */}
                    <div className="p-6">
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {member.position}
                        </p>
                      </div>
                      {/* Decorative Line */}
                      <div className="mt-4 flex justify-center">
                        <div className="h-1 w-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      </div>
                    </div>
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
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              {mounted ? t("core_team") : "Core Team"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {facultyMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer mx-auto w-full max-w-sm"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Hover Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <div className="text-white">
                          <p className="text-sm font-medium text-green-400 mb-2">
                            View Profile
                          </p>
                          <p className="text-sm opacity-90 line-clamp-3">
                            {member.bio.split(".")[0]}.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="p-6">
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {member.position}
                        </p>
                      </div>

                      {/* Decorative Line */}
                      <div className="mt-4 flex justify-center">
                        <div className="h-1 w-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
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
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-center mb-1">
                {selectedMember.name}
              </h3>
              <p className="text-lg text-foreground/60 mb-4">
                {selectedMember.position}
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
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
              {mounted ? t("join_us") : "Join Us"}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {mounted
                ? t("join_faculty_description")
                : "Share your expertise and help shape the next generation of climate justice leaders."}
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
