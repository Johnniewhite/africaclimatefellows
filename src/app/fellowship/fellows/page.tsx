"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import type { Fellow } from "@/data/fellows"

export default function FellowsPage() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [allFellows, setAllFellows] = useState<Fellow[]>([])
  const [selectedCountry, setSelectedCountry] = useState<string>("All")

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    import("@/data/fellows").then(mod => setAllFellows(mod.fellows)).catch(() => setAllFellows([]))
  }, [])

  const countries = useMemo(() => {
    const set = new Set(allFellows.map(f => f.country))
    return ["All", ...Array.from(set)]
  }, [allFellows])

  const filtered = selectedCountry === "All" ? allFellows : allFellows.filter(f => f.country === selectedCountry)

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
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
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
                  <p className="mt-2 text-sm text-foreground/70 line-clamp-3">{fellow.shortBio}</p>
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
      </section>
    </main>
  )
}


