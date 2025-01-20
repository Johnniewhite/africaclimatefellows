"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
  dropdownItems?: { name: string; href: string }[];
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { 
      name: "Home", 
      href: "/",
    },
    { 
      name: "About", 
      href: "/about",
      dropdownItems: [
        { name: "Our Mission", href: "/about#mission" },
        { name: "Our Team", href: "/about#team" },
        { name: "Partners", href: "/about#partners" },
      ]
    },
    { 
      name: "Fellowship", 
      href: "/fellowship",
      dropdownItems: [
        { name: "Program Overview", href: "/fellowship#overview" },
        { name: "Application Process", href: "/fellowship#apply" },
        { name: "Current Fellows", href: "/fellowship#current-fellows" },
      ]
    },
    { 
      name: "Faculty", 
      href: "/faculty",
      dropdownItems: [
        { name: "Meet Our Faculty", href: "/faculty#meet" },
        { name: "Research Areas", href: "/faculty#research" },
        { name: "Join Us", href: "/faculty#join" },
      ]
    },
    { 
      name: "Impact", 
      href: "/impact",
      dropdownItems: [
        { name: "Success Stories", href: "/impact#stories" },
        { name: "Projects", href: "/impact#projects" },
        { name: "Reports", href: "/impact#reports" },
      ]
    },
    { 
      name: "Get Involved", 
      href: "/get-involved",
      dropdownItems: [
        { name: "Volunteer", href: "/get-involved#volunteer" },
        { name: "Partner With Us", href: "/get-involved#partner" },
        { name: "Donate", href: "/get-involved#donate" },
      ]
    },
    { 
      name: "Contact", 
      href: "/contact",
      dropdownItems: [
        { name: "General Inquiries", href: "/contact#general" },
        { name: "Media Relations", href: "/contact#media" },
        { name: "Support", href: "/contact#support" },
      ]
    },
    { 
      name: "Blog", 
      href: "/blog" 
    },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownClick = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

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
  };

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
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-2"
          >
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-200 text-transparent bg-clip-text">
              Africa Climate Fellows
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1" ref={dropdownRef}>
            {navItems.map((item) => (
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
                      <span>{item.name}</span>
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
                                {dropdownItem.name}
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
                          : 'text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdownItems ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => handleDropdownClick(item.name)}
                        className={`w-full flex items-center justify-between px-4 py-2 rounded-md transition-colors duration-200
                          ${isActive(item.href)
                            ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30'
                            : 'text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30'
                          }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-1"
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 rounded-md text-sm transition-colors duration-200
                                  text-gray-600 dark:text-gray-300 
                                  hover:text-green-600 dark:hover:text-green-400
                                  hover:bg-green-50 dark:hover:bg-green-900/30"
                                onClick={() => {
                                  setIsOpen(false);
                                  setActiveDropdown(null);
                                }}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 rounded-md transition-colors duration-200 ${
                        item.name === 'Blog'
                          ? 'bg-green-600 text-white hover:bg-green-700 my-2'
                          : isActive(item.href)
                            ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30'
                            : 'text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 