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
      name: "Ngozi Edum",
      position: "Project Manager",
      image: "/images/faculty/ngozi.jpg",
      background: "/images/LakeChadPhotos/lake2.png",
      bio: `Ngozi leads the Partnership and Innovation at the Development of Educational Action Network. She has over five years of experience leading sustainable development projects, including climate action, gender equality, youth leadership, governance, and education. As a climate justice advocate, she amplifies the voices of marginalised communities and groups in climate discourse to ensure the inclusion of perspectives from those on the frontlines disproportionately affected by the climate crisis. Ngozi has a background in Forestry and Environmental Management, graduating with First Class Honours. She has received multiple scholarships and recently completed an advanced degree in Forest Science with full funding through the Erasmus Mundus Joint Masters Degree Award. Ngozi is an excellent public speaker and facilitator, as evidenced by her role as a panel speaker and facilitator at global and international events.`,
    },
    {
      name: "Doreen Mennom Oho",
      position: "Project Officer",
      image: "/images/faculty/doreen.jpeg",
      background: "/images/LakeChadPhotos/lake3.png",
      bio: `Doreen Mennom Oho is a development practitioner currently serving as the Technical Programs Lead at DEAN Initiative, a youth-led organization dedicated to enhancing healthy communities for young people. In her role, she spearheads projects focused on governance, democracy, youth leadership, climate action, and education.

She holds a Master's degree in International Affairs and Diplomacy and a Bachelor of Arts in English Language from Ahmadu Bello University, Nigeria. She is a People Powered Climate Democracy Accelerator Fellow, focused on using participatory budgeting to help marginalized communities access resources for climate adaptation and mitigation. Doreen is also a Carrington Youth Fellow of the United States Government in Nigeria and a participant in the African Group of Negotiators Experts Support (AGNES) 2025 Climate Governance, Diplomacy, and Negotiations Leadership Program.

She currently oversees the Lake Chad Climate Justice Fellowship, a project aimed at equipping young leaders with the knowledge and tools to advocate for climate justice and resilience in the region.

With extensive experience in NGO leadership, community development, and fundraising, her skill set includes program design, grant proposal writing, and program coordination. She is passionate about climate finance, governance, and ensuring communities in the Lake Chad region have access to resources needed to strengthen their resilience against climate change.`,
    },
    {
      name: "Uche Arinze",
      position: "Project Communications Officer",
      image: "/images/faculty/uche.jpeg",
      background: "/images/LakeChadPhotos/lake1.png",
      bio: `Uche Arinze is a dynamic educator, development strategist, and communications expert passionately shaping narratives that drive impact. As Communications Manager at Dean Initiative, a youth-led NGO championing transformational change, she leads with creativity and purpose, crafting powerful stories that amplify the organization's mission and influence.

A graduate of Obafemi Awolowo University with a BA and a PGD in Education from the University of Lagos, Uche blends academic excellence with hands-on expertise in education, advocacy, and digital media. Her work in advancing the Sustainable Development Goals (SDGs) since their inception underscores her deep commitment to fostering meaningful progress.

Uche's influence extends beyond Dean Initiative. She has served as Lead of Communications and PR for CYPAN's Leadership Committee, an Alumni Global Ambassador for Theirworld, a member of the Youth SDGs Newsletter editorial board, a Teach for Nigeria mentor, and a Mandela Washington Fellowship application scorer. Her strategic communications skills have also driven successful campaigns for national and international brands.

Whether mentoring young changemakers, managing digital strategies, or telling stories that inspire action, Uche remains dedicated to shaping a future where education and communication fuel sustainable development and empowered communities.`,
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
              {mounted ? t("meet_our_faculty") : "Meet Our Faculty"}
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
