"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function LanguageSwitch() {
  const { language, setLanguage, t, isLoaded } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (newLanguage: 'en' | 'fr') => {
    console.log("Changing language to:", newLanguage);
    setLanguage(newLanguage);
    setIsOpen(false);
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

  // Handle server-side rendering and hydration
  if (!mounted || !isLoaded) {
    return <div className="h-8 w-24"></div>;
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-green-50 dark:hover:bg-green-900/30"
        aria-label={t('language')}
      >
        <Globe className="h-4 w-4 mr-1" />
        <span>{language === 'en' ? t('english') : t('french')}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            className="absolute right-0 mt-1 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
          >
            <div className="py-1">
              <button
                onClick={() => changeLanguage('en')}
                className={`flex items-center w-full text-left px-4 py-2 text-sm transition-colors duration-200
                  ${language === 'en' ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'hover:bg-green-50 dark:hover:bg-green-900/30 text-gray-700 dark:text-gray-200'}`}
              >
                {t('english')}
                {language === 'en' && <span className="ml-auto">✓</span>}
              </button>
              <button
                onClick={() => changeLanguage('fr')}
                className={`flex items-center w-full text-left px-4 py-2 text-sm transition-colors duration-200
                  ${language === 'fr' ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'hover:bg-green-50 dark:hover:bg-green-900/30 text-gray-700 dark:text-gray-200'}`}
              >
                {t('french')}
                {language === 'fr' && <span className="ml-auto">✓</span>}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 