"use client";

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
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

  return (
    <div className="w-full bg-green-50 dark:bg-green-900/30 py-1 border-b border-green-100 dark:border-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 py-1"
            aria-label={t('language.select')}
          >
            <Globe className="h-4 w-4" />
            <span className="mx-1">{language === 'en' ? t('language.en') : t('language.fr')}</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
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
                      ${language === 'en' ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400'}`}
                  >
                    {t('language.en')}
                    {language === 'en' && (
                      <span className="ml-auto text-green-600 dark:text-green-400">✓</span>
                    )}
                  </button>
                  <button
                    onClick={() => changeLanguage('fr')}
                    className={`flex items-center w-full text-left px-4 py-2 text-sm transition-colors duration-200
                      ${language === 'fr' ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400'}`}
                  >
                    {t('language.fr')}
                    {language === 'fr' && (
                      <span className="ml-auto text-green-600 dark:text-green-400">✓</span>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 