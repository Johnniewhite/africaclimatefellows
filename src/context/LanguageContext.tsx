"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  isLoaded: boolean;
}

// Create a default context value to prevent the "must be used within a provider" error
const defaultContextValue: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
  isLoaded: false,
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({
    en: {},
    fr: {}
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load translations
    const loadTranslations = async () => {
      try {
        console.log("Loading translations...");
        
        // Force dynamic imports to ensure fresh data
        const enModule = await import('@/translations/en?t=' + new Date().getTime());
        const frModule = await import('@/translations/fr?t=' + new Date().getTime());
        
        const enTranslations = enModule.default;
        const frTranslations = frModule.default;
        
        console.log("EN translations loaded:", Object.keys(enTranslations).length);
        console.log("FR translations loaded:", Object.keys(frTranslations).length);
        
        // Log a sample of translations to verify they're loaded correctly
        console.log("Sample EN translations:", {
          'about_the_fellowship': enTranslations['about_the_fellowship'],
          'youth_empowerment_title': enTranslations['youth_empowerment_title'],
          'community_impact_title': enTranslations['community_impact_title'],
          'our_team_title': enTranslations['our_team_title'],
          'project_team': enTranslations['project_team']
        });
        
        // Validate translations - ensure all keys in English exist in French
        const missingKeys = Object.keys(enTranslations).filter(key => !frTranslations[key]);
        if (missingKeys.length > 0) {
          console.warn("Missing translation keys in French:", missingKeys);
        }
        
        setTranslations({
          en: enTranslations,
          fr: frTranslations,
        });
        
        // Check if there's a saved language preference
        if (typeof window !== 'undefined') {
          try {
            const savedLanguage = localStorage.getItem('language') as Language;
            if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
              console.log("Setting language from localStorage:", savedLanguage);
              setLanguage(savedLanguage);
            }
          } catch (error) {
            console.error("Error accessing localStorage:", error);
          }
        }
        
        setIsLoaded(true);
        console.log("Translations loaded successfully");
      } catch (error) {
        console.error("Failed to load translations:", error);
        // Try to load translations directly as a fallback
        try {
          // Import directly from the files
          const enTranslations = require('@/translations/en').default;
          const frTranslations = require('@/translations/fr').default;
          
          console.log("Fallback: EN translations loaded:", Object.keys(enTranslations).length);
          console.log("Fallback: FR translations loaded:", Object.keys(frTranslations).length);
          
          setTranslations({
            en: enTranslations,
            fr: frTranslations,
          });
        } catch (fallbackError) {
          console.error("Fallback translation loading also failed:", fallbackError);
        }
        
        setIsLoaded(true); // Still set loaded to true to prevent infinite loading
      }
    };
    
    loadTranslations();
  }, []);

  useEffect(() => {
    // Save language preference to localStorage
    if (isLoaded && typeof window !== 'undefined') {
      try {
        localStorage.setItem('language', language);
        // Update html lang attribute
        document.documentElement.lang = language;
        console.log("Language preference saved:", language);
      } catch (error) {
        console.error("Failed to save language preference:", error);
      }
    }
  }, [language, isLoaded]);

  // Translation function
  const t = (key: string): string => {
    if (!key) {
      console.error("Translation key is undefined or empty");
      return "MISSING_KEY";
    }
    
    if (!isLoaded) {
      // Return the key when translations aren't loaded yet
      return key;
    }
    
    if (!translations[language]) {
      console.error("Invalid language:", language);
      return key;
    }
    
    // First try to get the translation in the current language
    const translation = translations[language][key];
    if (translation) {
      return translation;
    }
    
    // If not found and language is not English, try English as fallback
    if (language !== 'en' && translations['en'] && translations['en'][key]) {
      console.warn(`Missing translation for key "${key}" in language "${language}", falling back to English`);
      return translations['en'][key];
    }
    
    // If still not found, return the key itself but log the error
    console.error(`Missing translation for key "${key}" in all languages`);
    
    // In development, make missing translations more visible
    if (process.env.NODE_ENV === 'development') {
      return `[${key}]`;
    }
    
    return key;
  };

  const value = {
    language,
    setLanguage,
    t,
    isLoaded,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
} 