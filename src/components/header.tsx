"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { LanguageSelector } from '@/components/LanguageSelector'

interface NavItem {
  name: string;
  href: string;
  translationKey: string;
  dropdownItems?: { name: string; href: string; translationKey: string }[];
}

function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors duration-200"
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const { t } = useLanguage()

  const navigation: NavItem[] = [
    { 
      name: "Home", 
      href: "/",
      translationKey: "nav.home",
    },
    { 
      name: "About", 
      href: "/about",
      translationKey: "nav.about",
      dropdownItems: [
        { name: "Our Mission", href: "/about#mission", translationKey: "about.mission" },
        { name: "Our Team", href: "/about#team", translationKey: "about.team" },
        { name: "Partners", href: "/about#partners", translationKey: "about.partners" },
      ]
    },
    { 
      name: "Fellowship", 
      href: "/fellowship",
      translationKey: "nav.fellowship",
      dropdownItems: [
        { name: "Program Overview", href: "/fellowship#overview", translationKey: "fellowship.overview" },
        { name: "Background", href: "/fellowship#background", translationKey: "fellowship.background" },
        { name: "Core Components", href: "/fellowship#components", translationKey: "fellowship.components" },
        { name: "Application Process", href: "/fellowship#apply", translationKey: "fellowship.apply" },
        { name: "Key Challenges", href: "/fellowship#challenges", translationKey: "fellowship.challenges" },
      ]
    },
    { 
      name: "Faculty", 
      href: "/faculty",
      translationKey: "nav.faculty",
      dropdownItems: [
        { name: "Meet Our Faculty", href: "/faculty#meet", translationKey: "faculty.meet" },
        { name: "Research Areas", href: "/faculty#research", translationKey: "faculty.research" },
        { name: "Join Us", href: "/faculty#join", translationKey: "faculty.join" },
      ]
    },
    { 
      name: "Impact", 
      href: "/impact",
      translationKey: "nav.impact",
      dropdownItems: [
        { name: "Success Stories", href: "/impact#stories", translationKey: "impact.stories" },
        { name: "Projects", href: "/impact#projects", translationKey: "impact.projects" },
        { name: "Reports", href: "/impact#reports", translationKey: "impact.reports" },
      ]
    },
    { 
      name: "Get Involved", 
      href: "/get-involved",
      translationKey: "nav.getInvolved",
      dropdownItems: [
        { name: "Apply Now", href: "/get-involved#apply", translationKey: "getInvolved.apply" },
        { name: "Support Us", href: "/get-involved#support", translationKey: "getInvolved.support" },
        { name: "Partner With Us", href: "/get-involved#partner", translationKey: "getInvolved.partner" },
      ]
    },
    { 
      name: "Contact", 
      href: "/contact",
      translationKey: "nav.contact",
      dropdownItems: [
        { name: "General Inquiries", href: "/contact#general", translationKey: "contact.general" },
        { name: "Media Relations", href: "/contact#media", translationKey: "contact.media" },
        { name: "Support", href: "/contact#support", translationKey: "contact.support" },
      ]
    },
    { 
      name: "Blog", 
      href: "/blog",
      translationKey: "nav.blog",
    },
  ]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleDropdownClick = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const isActive = (href: string) => {
    if (href === '/') return pathname === href
    return pathname.startsWith(href)
  }

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <>
      <LanguageSelector />
      <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-40 border-b border-gray-200 dark:border-gray-800 top-7">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="flex items-center space-x-2"
            >
              <Image 
                src="/images/logo.png" 
                alt="Africa Climate Fellows" 
                width={150} 
                height={80}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1" ref={dropdownRef}>
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.dropdownItems ? (
                    <div>
                      <button
                        onClick={() => handleDropdownClick(item.name)}
                        className={`px-4 py-2 rounded-md flex items-center space-x-1 transition-colors duration-200
                          ${isActive(item.href) 
                            ? 'text-green-600 dark:text-green-400' 
                            : 'text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
                          }`}
                      >
                        <span>{t(item.translationKey)}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name || hoveredItem === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      <AnimatePresence>
                        {(activeDropdown === item.name || hoveredItem === item.name) && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={dropdownVariants}
                            className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden"
                          >
                            <div className="py-1">
                              {item.dropdownItems.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-sm transition-colors duration-200
                                    hover:bg-green-50 dark:hover:bg-green-900/30
                                    hover:text-green-600 dark:hover:text-green-400
                                    text-gray-700 dark:text-gray-200"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {t(dropdownItem.translationKey)}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-md transition-all duration-200 ${
                        item.name === 'Blog' 
                          ? 'ml-4 bg-green-600 text-white hover:bg-green-700 hover:shadow-lg' 
                          : isActive(item.href)
                            ? 'text-green-600 dark:text-green-400' 
                            : 'text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
                      }`}
                    >
                      {t(item.translationKey)}
                    </Link>
                  )}
                </div>
              ))}
              <div className="ml-4">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="ml-2 p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors duration-200"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdownItems ? (
                      <div className="space-y-1">
                        <button
                          onClick={() => handleDropdownClick(item.name)}
                          className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                            isActive(item.href)
                              ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30'
                              : 'text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400'
                          }`}
                        >
                          {t(item.translationKey)}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 space-y-1"
                            >
                              {item.dropdownItems.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400"
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setIsMenuOpen(false);
                                  }}
                                >
                                  {t(dropdownItem.translationKey)}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                          item.name === 'Blog'
                            ? 'bg-green-600 text-white hover:bg-green-700'
                            : isActive(item.href)
                              ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30'
                              : 'text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t(item.translationKey)}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
} 