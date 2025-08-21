"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, ArrowRight, Calendar } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import type { Fellow } from "@/data/fellows"
import { getShortBio } from "@/data/fellows"
import { Modal } from "@/components/Modal"

export default function FellowsPage() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [allFellows, setAllFellows] = useState<Fellow[]>([])
  const [selectedCountry, setSelectedCountry] = useState<string>("All")
  const [selectedFellow, setSelectedFellow] = useState<Fellow | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    import("@/data/fellows").then(mod => setAllFellows(mod.fellows)).catch(() => setAllFellows([]))
  }, [])

  const openFellowModal = (fellow: Fellow) => {
    console.log('Opening modal for fellow:', fellow.name)
    setSelectedFellow(fellow)
    setIsModalOpen(true)
  }

  const closeFellowModal = () => {
    console.log('Closing modal')
    setIsModalOpen(false)
    setTimeout(() => setSelectedFellow(null), 300)
  }

  const countries = useMemo(() => {
    const set = new Set(allFellows.map(f => f.country))
    return ["All", ...Array.from(set)]
  }, [allFellows])

  const filtered = selectedCountry === "All" ? allFellows : allFellows.filter(f => f.country === selectedCountry)

  useEffect(() => {
    console.log('Modal state changed:', { isModalOpen, selectedFellow: selectedFellow?.name })
  }, [isModalOpen, selectedFellow])

  useEffect(() => {
    console.log('Fellows data:', { totalFellows: allFellows.length, filteredFellows: filtered.length, selectedCountry })
  }, [allFellows, filtered, selectedCountry])

  return (
    <main className="min-h-screen">
      <section className="relative h-[40vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/TheAfricaClimateFellows.png" alt="Africa Climate Fellows" fill className="object-cover brightness-50" priority />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{mounted ? t('meet_our_fellows') : 'Meet Our Fellows'}</h1>
              <p className="text-white/90 text-lg">{mounted ? t('meet_our_fellows_subtext') : 'Discover youth leaders driving climate justice across the Lake Chad Basin'}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {countries.map(country => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-4 py-2 rounded-full transition-all ${selectedCountry === country ? 'bg-green-600 text-white' : 'bg-white dark:bg-gray-800 text-foreground/70 hover:bg-green-100 dark:hover:bg-gray-700'}`}
              >
                {country}{country !== 'All' ? ` (${allFellows.filter(f => f.country === country).length})` : ''}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((fellow, index) => (
              <motion.div
                key={`${fellow.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true }}
                onClick={() => openFellowModal(fellow)}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <Image src={fellow.image} alt={fellow.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 line-clamp-1">{fellow.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <MapPin className="w-4 h-4" />
                    <span className="line-clamp-1">{fellow.location}</span>
                  </div>
                  <p className="mt-2 text-sm text-foreground/70 line-clamp-3">{getShortBio(fellow.fullBio)}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">
                      {fellow.country}
                    </span>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                      Read more →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/fellowship" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-green-700 hover:bg-green-800 rounded-md">
              {mounted ? t('learn_more') : 'Learn More'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Fellow Modal */}
        <Modal isOpen={isModalOpen} onClose={closeFellowModal} className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {selectedFellow && (
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                    <img
                      src={selectedFellow.image}
                      alt={selectedFellow.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-foreground/70">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedFellow.location}</span>
                    </div>
                    {selectedFellow.age > 0 && (
                      <div className="flex items-center gap-2 text-foreground/70">
                        <Calendar className="w-4 h-4" />
                        <span>Age: {selectedFellow.age}</span>
                      </div>
                    )}
                    <div className="pt-2">
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm">
                        {selectedFellow.country}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{selectedFellow.name}</h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {selectedFellow.fullBio.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-foreground/80 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <button
                onClick={closeFellowModal}
                className="mt-6 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </Modal>
      </section>
    </main>
  )
}


