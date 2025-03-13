"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  
  const navigation = {
    main: [
      { name: mounted ? t('about') : 'About', href: '/about' },
      { name: mounted ? t('fellowship') : 'Fellowship', href: '/fellowship' },
      { name: mounted ? t('faculty') : 'Faculty', href: '/faculty' },
      { name: mounted ? t('impact') : 'Impact', href: '/impact' },
      { name: mounted ? t('get_involved') : 'Get Involved', href: '/get-involved' },
      { name: mounted ? t('contact') : 'Contact', href: '/contact' },
    ],
    social: [
      {
        name: 'Twitter',
        href: 'https://x.com/AfCliFellows',
        icon: Twitter,
      },
      {
        name: 'Facebook',
        href: 'https://web.facebook.com/AfricanClimateFellows',
        icon: Facebook,
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/afclifellows/',
        icon: Instagram,
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/africa-climate-fellows/',
        icon: Linkedin,
      },
    ],
  }

  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">
              {mounted ? t('climate_justice_youth_fellowship') : 'Climate Justice Fellowship'}
            </h3>
            <p className="text-sm text-foreground/80">
              {mounted ? t('banner_headline') : 'Empowering Africa\'s Youth for Climate Justice Action'}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent mb-4">
              {mounted ? t('quick_links') : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {navigation.main.slice(0, 3).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent mb-4">
              {mounted ? t('resources') : 'Resources'}
            </h3>
            <ul className="space-y-2">
              {navigation.main.slice(3).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent mb-4">
              {mounted ? t('connect_with_us') : 'Connect With Us'}
            </h3>
            <div className="flex space-x-4">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-6 w-6" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20">
          <p className="text-sm text-center text-foreground/60">
            {mounted ? t('copyright') : '© 2024 Africa Climate Fellows. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
} 