"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import { LanguageSwitch } from './LanguageSwitch'

interface NavItem {
  name: string;
  translationKey: string;
  href: string;
  dropdownItems?: { name: string; translationKey: string; href: string }[];
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
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation: NavItem[] = [
    { 
      name: "Home", 
      translationKey: "home",
      href: "/",
    },
    { 
      name: "About", 
      translationKey: "about",
      href: "/about",
      dropdownItems: [
        { name: "Our Mission", translationKey: "our_mission", href: "/about#mission" },
        { name: "Our Team", translationKey: "our_team", href: "/about#team" },
        { name: "Partners", translationKey: "partners", href: "/about#partners" },
      ]
    },
    { 
      name: "Fellowship", 
      translationKey: "fellowship",
      href: "/fellowship",
      dropdownItems: [
        { name: "Program Overview", translationKey: "program_overview", href: "/fellowship#overview" },
        { name: "Background", translationKey: "background", href: "/fellowship#background" },
        { name: "Core Components", translationKey: "core_components", href: "/fellowship#components" },
        { name: "Application Process", translationKey: "application_process", href: "/fellowship#apply" },
        { name: "Key Challenges", translationKey: "key_challenges", href: "/fellowship#challenges" },
      ]
    },
    { 
      name: "Faculty", 
      translationKey: "faculty",
      href: "/faculty",
      dropdownItems: [
        { name: "Meet Our Faculty", translationKey: "meet_our_faculty", href: "/faculty#meet" },
        { name: "Research Areas", translationKey: "research_areas", href: "/faculty#research" },
        { name: "Join Us", translationKey: "join_us", href: "/faculty#join" },
      ]
    },
    { 
      name: "Impact", 
      translationKey: "impact",
      href: "/impact",
      dropdownItems: [
        { name: "Success Stories", translationKey: "success_stories", href: "/impact#stories" },
        { name: "Projects", translationKey: "projects", href: "/impact#projects" },
        { name: "Reports", translationKey: "reports", href: "/impact#reports" },
      ]
    },
    { 
      name: "Get Involved", 
      translationKey: "get_involved",
      href: "/get-involved",
      dropdownItems: [
        { name: "Apply Now", translationKey: "apply_now", href: "/get-involved#apply" },
        { name: "Support Us", translationKey: "support_us", href: "/get-involved#support" },
        { name: "Partner With Us", translationKey: "partner_with_us", href: "/get-involved#partner" },
      ]
    },
    { 
      name: "Gallery", 
      translationKey: "gallery",
      href: "/gallery" 
    },
    { 
      name: "Contact", 
      translationKey: "contact",
      href: "/contact",
      dropdownItems: [
        { name: "General Inquiries", translationKey: "general_inquiries", href: "/contact#general" },
        { name: "Media Relations", translationKey: "media_relations", href: "/contact#media" },
        { name: "Support", translationKey: "support", href: "/contact#support" },
      ]
    },
    { 
      name: "Blog", 
      translationKey: "blog",
      href: "/blog" 
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

  // Handle server-side rendering and hydration
  if (!mounted) {
    return (
      <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="bg-gray-100 dark:bg-gray-800 py-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
            {/* Placeholder for language switch */}
            <div className="h-8 w-24"></div>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 h-10 w-32"></div>
            <div className="hidden md:flex items-center space-x-1">
              {/* Placeholder for navigation */}
              <div className="h-8 w-64"></div>
            </div>
            <div className="flex md:hidden items-center space-x-2">
              {/* Placeholder for mobile menu button */}
              <div className="h-8 w-8"></div>
            </div>
          </div>
        </nav>
      </header>
    )
  }

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50 border-b border-gray-200 dark:border-gray-800">
      {/* Language switcher bar */}
      <div className="bg-gray-100 dark:bg-gray-800 py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <LanguageSwitch />
        </div>
      </div>
      
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
                    className={`px-4 py-2 rounded-md transition-colors duration-200
                      ${isActive(item.href) 
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

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
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
            className="md:hidden bg-white dark:bg-gray-900 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <div key={item.name} className="py-1">
                  {item.dropdownItems ? (
                    <div>
                      <button
                        onClick={() => handleDropdownClick(item.name)}
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center justify-between transition-colors duration-200
                          ${isActive(item.href) 
                            ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
                            : 'text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/30'
                          }`}
                      >
                        <span>{t(item.translationKey)}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-1 space-y-1"
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-3 py-2 rounded-md text-sm transition-colors duration-200
                                  hover:bg-green-50 dark:hover:bg-green-900/30
                                  text-gray-600 dark:text-gray-300"
                                onClick={() => {
                                  setActiveDropdown(null)
                                  setIsMenuOpen(false)
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
                      className={`block px-3 py-2 rounded-md transition-colors duration-200
                        ${isActive(item.href) 
                          ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
                          : 'text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/30'
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
  )
} 