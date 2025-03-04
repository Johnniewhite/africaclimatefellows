"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Globe2, Users2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "@/components/Modal";
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { t } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamLayers: TeamLayer[] = [
    {
      title: t('about.team.projectTeam'),
      members: [
        {
          name: "Ngozi Edum",
          position: t('about.team.projectManager'),
          image: "/images/faculty/ngozi.jpg",
          bio: t('about.team.ngoziEdum.bio'),
        },
        {
          name: "Doreen Mennom Oho",
          position: t('about.team.projectOfficer'),
          image: "/images/faculty/doreen.jpeg",
          bio: t('about.team.doreenMennomOho.bio'),
        },
        {
          name: "Uche Arinze",
          position: t('about.team.projectCommunicationsOfficer'),
          image: "/images/faculty/uche.jpeg",
          bio: t('about.team.ucheArinze.bio'),
        },
      ],
    },
    {
      title: t('about.team.projectStrategySupport'),
      members: [
        {
          name: "Yazid Salahudeen Mikail",
          position: t('about.team.dataScientist'),
          image: "/images/faculty/Yazid.JPG",
          bio: t('about.team.yazidSalahudeenMikail.bio'),
        },
        {
          name: "Joy Ify Onyekwere",
          position: t('about.team.mediaJournalist'),
          image: "/images/faculty/joy.JPG",
          bio: t('about.team.joyIfyOnyekwere.bio'),
        },
        {
          name: "Elona Erezi",
          position: t('about.team.socialImpactCatalyst'),
          image: "/images/faculty/elona.JPG",
          bio: t('about.team.elonaErezi.bio'),
        },
      ],
    },
    {
      title: t('about.team.projectAdvisors'),
      members: [
        {
          name: "Seyifunmi Adebote",
          position: t('about.team.projectImplementationAdvisor'),
          image: "/images/faculty/seyifunmi.jpeg",
          bio: t('about.team.seyifunmiAdebote.bio'),
        },
        {
          name: "Semiye Michael",
          position: t('about.team.projectDirector'),
          image: "/images/faculty/semiye.jpeg",
          bio: t('about.team.semiyeMichael.bio'),
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
          alt={t('about.hero.alt')}
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
                  {t('about.hero.title')}
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              >
                {t('about.hero.subtitle')}
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
              {t('about.mission.title')}
            </h1>
            <p className="text-xl text-foreground/80">
              {t('about.mission.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Globe2,
                title: t('about.mission.climateAction.title'),
                description: t('about.mission.climateAction.description'),
              },
              {
                icon: Users2,
                title: t('about.mission.youthEmpowerment.title'),
                description: t('about.mission.youthEmpowerment.description'),
              },
              {
                icon: Building2,
                title: t('about.mission.communityImpact.title'),
                description: t('about.mission.communityImpact.description'),
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
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
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
              {t('about.team.title')}
            </h2>

            {teamLayers.map((layer, layerIndex) => (
              <div key={layer.title} className="mb-20">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: layerIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                >
                  {layer.title}
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                  {layer.members.map((member, index) => (
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
                                {t('about.team.viewProfile')}
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
              </div>
            ))}
          </motion.div>
        </div>

        {/* Modal */}
        <Modal
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
        >
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
              <h2 className="gradient-text mb-6">{t('about.cta.title')}</h2>
              <p className="text-xl text-foreground/80 mb-8">
                {t('about.cta.description')}
              </p>
              <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                <Link
                  href="/fellowship"
                  className="btn btn-primary group relative overflow-hidden"
                >
                  <span className="relative z-10">
                    {t('about.cta.learnMore')}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
