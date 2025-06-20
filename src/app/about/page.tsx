"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Globe2, Users2, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Modal } from "@/components/Modal";
import { useLanguage } from "@/context/LanguageContext";

type TeamMember = {
  name: string;
  position: string;
  image: string;
  bio: string;
};

type TeamLayer = {
  title: string;
  members: TeamMember[];
};

export default function About() {
  const { t, isLoaded } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Log translation keys to help debug
    if (mounted && isLoaded) {
      console.log("Translation check:", {
        youth_empowerment_title: t('youth_empowerment_title'),
        youth_empowerment_description: t('youth_empowerment_description'),
        community_impact_title: t('community_impact_title'),
        community_impact_description: t('community_impact_description'),
        our_team_title: t('our_team_title'),
        project_team: t('project_team'),
        project_strategy_support_team: t('project_strategy_support_team'),
        project_advisors: t('project_advisors')
      });
    }
  }, [mounted, isLoaded, t]);

  const teamLayers: TeamLayer[] = [
    {
      title: "Project Team",
      members: [
        {
          name: "Ngozi Edum",
          position: "Project Manager",
          image: "/images/faculty/ngozi.jpg",
          bio: `Ngozi leads the Partnership and Innovation at the Development of Educational Action Network. She has over five years of experience leading sustainable development projects, including climate action, gender equality, youth leadership, governance, and education. As a climate justice advocate, she amplifies the voices of marginalised communities and groups in climate discourse to ensure the inclusion of perspectives from those on the frontlines disproportionately affected by the climate crisis. Ngozi has a background in Forestry and Environmental Management, graduating with First Class Honours. She has received multiple scholarships and recently completed an advanced degree in Forest Science with full funding through the Erasmus Mundus Joint Masters Degree Award. Ngozi is an excellent public speaker and facilitator, as evidenced by her role as a panel speaker and facilitator at global and international events.`,
        },
        {
          name: "Doreen Mennom Oho",
          position: "Project Officer",
          image: "/images/faculty/doreen.jpeg",
          bio: `Doreen Mennom Oho is a development practitioner currently serving as the Technical Programs Lead at DEAN Initiative, a youth-led organization dedicated to enhancing healthy communities for young people. In her role, she spearheads projects focused on governance, democracy, youth leadership, climate action, and education.

She holds a Master's degree in International Affairs and Diplomacy and a Bachelor of Arts in English Language from Ahmadu Bello University, Nigeria. She is a People Powered Climate Democracy Accelerator Fellow, focused on using participatory budgeting to help marginalized communities access resources for climate adaptation and mitigation. Doreen is also a Carrington Youth Fellow of the United States Government in Nigeria and a participant in the African Group of Negotiators Experts Support (AGNES) 2025 Climate Governance, Diplomacy, and Negotiations Leadership Program.

She currently oversees the Lake Chad Climate Justice Fellowship, a project aimed at equipping young leaders with the knowledge and tools to advocate for climate justice and resilience in the region.

With extensive experience in NGO leadership, community development, and fundraising, her skill set includes program design, grant proposal writing, and program coordination. She is passionate about climate finance, governance, and ensuring communities in the Lake Chad region have access to resources needed to strengthen their resilience against climate change.`,
        },
        {
          name: "Uche Arinze",
          position: "Project Communications Officer",
          image: "/images/faculty/uche.jpeg",
          bio: `Uche Arinze is a dynamic educator, development strategist, and communications expert passionately shaping narratives that drive impact. As Communications Manager at Dean Initiative, a youth-led NGO championing transformational change, she leads with creativity and purpose, crafting powerful stories that amplify the organization's mission and influence.`,
        },
      ],
    },
    {
      title: "Project Strategy Support Team",
      members: [
        {
          name: "Yazid Salahudeen Mikail",
          position: "Data Scientist & Policy Advocate",
          image: "/images/faculty/Yazid.JPG",
          bio: `Yazid Salahudeen Mikail is a data scientist, policy advocate, and climate change and sustainable development advocate.

He is the founder of Nest Africa AI Innovation Lab and also a core team member of Climate Change AI. Yazid had previously worked as a data values advocate with the UN Global Partnership for Sustainable Development Data, Youth Advisor for The Iris Project and as the Healthy and Environment-friendly Youth (HEY) Campaign Coordinator for the Ashley Lashley Foundation leading the campaign efforts across Africa, Europe, Latin America, North America, and the Caribbean. 

He has a professional certification in environmental education and community engagement from Cornell University and project management from the University of Virginia Darden School of Business. Data Science from Click-on Kaduna Data Science Fellowship, IBM and Google. 

He has attended many fellowships as a changemaker and also received training on policy advocacy from the Population Reference Bureau and People Powered in Partnership with the World Resources Institute.`,
        },
        {
          name: "Joy Ify Onyekwere",
          position: "Media Professional & Climate Journalist",
          image: "/images/faculty/joy.JPG",
          bio: `Joy Ify Onyekwere is a media professional, climate journalist, and strategic communicator with over seven years of experience in television, radio, and digital media. Passionate about using the power of storytelling to drive social impact, she has built a career at the intersection of media, sustainability, and policy advocacy.

Ify is the team lead of The Development Report (www.thedevelopmentreport.org), an online publication focused on Sustainable Development. As the host and producer of Climate Fact File and The Development Report on radio, she amplifies critical discussions on climate change, sustainability, and global development initiatives. She has conducted high-profile interviews with policymakers, industry leaders, and grassroots advocates, ensuring that climate issues remain at the forefront of public discourse.

Her strategic expertise extends to media consulting, where she has developed and executed communication strategies for sustainability-focused projects, including the Department of Environmental Sciences of the Federal Ministry of Innovation, Science and Technology's Waste to Wealth initiative. She has led nationwide media campaigns, stakeholder engagements, and digital outreach programs that promote climate action and policy reforms.

With a strong academic foundation, Ify holds an MBA in Business & Sustainability from Nexford University, a Postgraduate Diploma in Journalism from the Nigerian Institute of Journalism, and a B.Sc. in Political Science. She has also earned certifications in climate adaptation, sustainability strategies, and digital journalism, further strengthening her ability to craft impactful narratives.`,
        },
        {
          name: "Elona Erezi",
          position: "Social Impact Catalyst",
          image: "/images/faculty/elona.JPG",
          bio: `Elona Erezi is a social impact catalyst systematically leading change and driving action for people and the planet. Elona is a management and strategy consultant, international development expert and policy analyst focusing on clean energy, climate change, sustainability and planetary health with over 10 years of combined tri-sector experience. She is passionate about strengthening social systems and using technology for social good and youth development. She has led and executed several climate action initiatives, health interventions and other social impact programs. She has actively participated in efforts to design, implement and scale climate-resilient solutions at global, regional, national and local levels.`,
        },
      ],
    },
    {
      title: "Project Advisors",
      members: [
        {
          name: "Seyifunmi Adebote",
          position: "Project Implementation Advisor",
          image: "/images/faculty/seyifunmi.jpeg",
          bio: `Seyifunmi Adebote is a leading environmental and communication practitioner with over 8 years of active experience across national, regional and international scopes. His works span environmental policy and communication, multimedia strategy, international diplomacy and youth mobilization.

Before proceeding for a Master in Environmental Communication and Management at the Swedish University of Agriculture, Uppsala, Seyifunmi worked as a diplomat-in-training where he was responsible for the Promotion and Communication activities at the Embassy of Sweden in Abuja, Nigeria interfacing with 100 CSOs, NGOs and other diplomatic institution. His work centered on promoting Climate and Environment, Drive for Democracy and Feminist Foreign Policy in Nigeria, and creating globally-appreciated content across social media platforms.

He has over eight active years of experience working across broadcast, print and digital industries leading branding and data-related projects. As a media consultant, Seyifunmi has designed several frameworks that have continued to reshape narratives, build public image and significantly raise revenues. He hosts the Climate Talk Podcast, in over 20 episodes, Seyifunmi simplifies and communicates Climate Change and Climate Action to over 5,000 subscribers monthly. He works with other environmentalists, activists and development experts around the world to strengthen youth inclusiveness in global climate negotiations, as well as support the growing climate-smart start-up industries across the African continent.

As the youngest Nigerian delegate to the United Nations in 2019, Seyifunmi represented Nigeria at the General Assembly along with President Mohammadu Buhari, the Minister of Environment, Mohammad Mahmood Abubakar and the Minister of Foreign Affairs, Geoffrey Onyeama. His work in Nigeria and across Africa has significantly contributed to youth inclusiveness in projects by the United Nations, European Union, World Bank and other diplomatic entities.`,
        },
        {
          name: "Semiye Michael",
          position: "Project Director",
          image: "/images/faculty/semiye.jpeg",
          bio: `Semiye Michael wears the badge of the United Nations Global Goals Goalkeeper proudly, a recognition bestowed upon him by the esteemed Bill and Melinda Gates Foundation. His name reverberates within the corridors of advocacy and social change as a leader with an on-the-ground grasp spanning influence of over a decade. 

With a fervent dedication, Semiye has become a leading voice in championing critical reforms around education, election integrity, local governance, and climate action. 

In 2018, Semiye and his Team led the single-largest SDGs Education Activation that reached over 3 million people directly. Semiye leads a national Youth Volunteers Network of over 5000 Volunteers that leads groundbreaking campaigns and community initiatives. 

As a Climate Change Education strategist and advocate, Semiye has supported Nigeria's Climate Education Action and led Climate Education Activation in more than 300 schools across 10 states in Nigeria. 

Semiye travels widely speaking at conferences and inspiring young people to lead the change they want to see.`,
        },
      ],
    },
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
                  {mounted ? t('about_the_fellowship') : 'About the Fellowship'}
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              >
                {mounted ? t('about_fellowship_description') : 'A transformative initiative dedicated to harnessing the adventurous spirit, resilience, and innovative leadership of African youth.'}
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
              {mounted ? t('our_mission_title') : 'Our Mission'}
            </h1>
            <p className="text-xl text-foreground/80">
              {mounted ? t('our_mission_description') : 'To equip young African climate activists with the tools, networks, funding and mentorship needed to address the intersectional challenges of climate change across the continent.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Globe2,
                title: 'climate_action_title',
                description: 'climate_action_description',
              },
              {
                icon: Users2,
                title: 'youth_empowerment_title',
                description: 'youth_empowerment_description',
              },
              {
                icon: Building2,
                title: 'community_impact_title',
                description: 'community_impact_description',
              },
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
                <h3 className="text-xl font-semibold mb-2">
                  {mounted ? t(item.title) : item.title}
                </h3>
                <p className="text-foreground/70">
                  {mounted ? t(item.description) : item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-24 bg-gradient-to-b from-green-50/50 to-white dark:from-green-950/30 dark:to-background"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              {mounted ? t('our_team_title') : 'Our Team'}
            </h2>

            {teamLayers.map((layer) => (
              <div key={layer.title} className="mb-20">
                <h3 className="text-2xl font-semibold text-center mb-10">
                  {mounted ? 
                    (layer.title === "Project Team" ? t('project_team') : 
                     layer.title === "Project Strategy Support Team" ? t('project_strategy_support_team') : 
                     t('project_advisors')) 
                    : layer.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {layer.members.map((member, memberIndex) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: memberIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      onClick={() => setSelectedMember(member)}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-contain object-top transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-accent mb-4">{member.position}</p>
                        <p className="text-foreground/70 line-clamp-3">
                          {member.bio.substring(0, 150)}...
                        </p>
                        <button className="mt-4 text-accent hover:text-accent/80 transition-colors duration-200 inline-flex items-center group-hover:translate-x-1 transition-transform">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <Modal
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
          className="max-w-4xl w-full mx-auto"
        >
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 shadow-lg"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Content Layout */}
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-2/5 relative">
                <div className="relative h-[300px] md:h-[450px]">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover items-start"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                {/* Position Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {selectedMember.name}
                    </h3>
                    <p className="text-green-600 dark:text-green-400 font-medium text-sm md:text-base">
                      {selectedMember.position}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio Section */}
              <div className="md:w-3/5 p-5 md:p-6 overflow-y-auto max-h-[300px] md:max-h-[450px]">
                <div className="prose dark:prose-invert prose-sm md:prose-base max-w-none">
                  {selectedMember.bio.split("\n\n").map((paragraph, i) => (
                    <p 
                      key={i} 
                      className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
}
