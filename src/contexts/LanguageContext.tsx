'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'fr';

// Define translations interface
interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

// Define translations for both languages
const translations: Translations = {
  en: {
    // Site-wide
    'site.title': 'Africa Climate Fellows',
    'site.description': 'Empowering African youth through climate action',
    
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.fellowship': 'Fellowship',
    'nav.faculty': 'Faculty',
    'nav.impact': 'Impact',
    'nav.getInvolved': 'Get Involved',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    
    // About dropdown
    'about.mission': 'Our Mission',
    'about.team': 'Our Team',
    'about.partners': 'Partners',
    
    // Fellowship dropdown
    'fellowship.overview': 'Program Overview',
    'fellowship.background': 'Background',
    'fellowship.components': 'Core Components',
    'fellowship.apply': 'Application Process',
    'fellowship.challenges': 'Key Challenges',
    
    // Faculty dropdown
    'faculty.meet': 'Meet Our Faculty',
    'faculty.research': 'Research Areas',
    'faculty.join': 'Join Us',
    
    // Impact dropdown
    'impact.stories': 'Success Stories',
    'impact.projects': 'Projects',
    'impact.reports': 'Reports',
    
    // Get Involved dropdown
    'getInvolved.apply': 'Apply Now',
    'getInvolved.support': 'Support Us',
    'getInvolved.partner': 'Partner With Us',
    
    // Contact dropdown
    'contact.general': 'General Inquiries',
    'contact.media': 'Media Relations',
    'contact.support': 'Support',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Contact Us',
    'footer.follow': 'Follow Us',
    'footer.quickLinks': 'Quick Links',
    'footer.resources': 'Resources',
    
    // Home page
    'home.hero.title': 'Climate Justice <span class="text-green-400">Youth Fellowship</span>',
    'home.hero.subtitle': 'Empowering Africa\'s Youth for Climate Justice Action',
    'home.section1.title': 'The Climate Justice Youth Fellowship',
    'home.section1.paragraph1': 'A transformative initiative dedicated to harnessing the adventurous spirit, resilience, and innovative leadership of African youth. We connect young climate advocates with critical resources, sharpened skills, professional networks, and international exposure.',
    'home.section1.paragraph2': 'At the heart of this program lies a commitment to addressing climate justice and alleviating the burden of care that disproportionately affects African communities. We recognize the immense potential of Africa\'s youth as changemakers and aim to empower them to rise above systemic challenges and amplify their voices on the global stage.',
    'home.section1.paragraph3': 'Through tailored capacity-building sessions, mentorship by seasoned experts, research engagements, funding and opportunities to engage in global forums, the Climate Justice Youth Fellowship is more than a program—it is a movement for creating leaders who will shape a resilient and equitable future for Africa.',
    'home.section1.learnMore': 'Learn More',
    'home.watchVideo': 'Watch Video',
    
    // Features
    'features.climateAction.title': 'Climate Action',
    'features.climateAction.description': 'Drive meaningful change through innovative climate solutions',
    'features.panAfrican.title': 'Pan-African Network',
    'features.panAfrican.description': 'Connect with climate leaders across the continent',
    'features.mentorship.title': 'Expert Mentorship',
    'features.mentorship.description': 'Learn from seasoned climate justice advocates',
    'features.funding.title': 'Project Funding',
    'features.funding.description': 'Access resources to implement your climate initiatives',
    
    // Gallery page
    'gallery.title': 'Photo Gallery',
    'gallery.description': 'Browse through our collection of photos',
    
    // Album grid
    'albums.title': 'Albums',
    'albums.lastUpdated': 'Last updated',
    'albums.backToAlbums': 'Back to Albums',
    'albums.photo': 'photo',
    'albums.photos': 'photos',
    'albums.error': 'Failed to load albums',
    'albums.tryAgain': 'Try Again',
    'albums.noAlbums': 'No albums found',
    'albums.noAlbumsDesc': 'There are no albums available in the gallery yet.',
    
    // Photo grid
    'photos.noPhotos': 'No photos found',
    'photos.noPhotosDesc': 'This album doesn\'t contain any photos yet.',
    'photos.error': 'Failed to load photos',
    'photos.tryAgain': 'Try Again',
    
    // Photo modal
    'modal.download': 'Download',
    'modal.downloading': 'Downloading...',
    'photoModal.untitled': 'Untitled Photo',
    'photoModal.date': 'Date',
    'photoModal.dimensions': 'Dimensions',
    'photoModal.download': 'Download',
    
    // Loading
    'loading': 'Loading gallery...',
    
    // Language selector
    'language.select': 'Select language',
    'language.en': 'English',
    'language.fr': 'French',
    'language.currentLanguage': 'Current language',
    'language.switchToEnglish': 'Switch to English',
    'language.switchToFrench': 'Switch to French',
    
    // Album page
    'album.error': 'Failed to load album',
    'album.tryAgain': 'Try Again',
    'album.backToGallery': 'Back to Gallery',
  },
  fr: {
    // Site-wide
    'site.title': 'Africa Climate Fellows',
    'site.description': 'Autonomiser les jeunes africains par l\'action climatique',
    
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.fellowship': 'Programme',
    'nav.faculty': 'Faculté',
    'nav.impact': 'Impact',
    'nav.getInvolved': 'S\'Impliquer',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    
    // About dropdown
    'about.mission': 'Notre Mission',
    'about.team': 'Notre Équipe',
    'about.partners': 'Partenaires',
    
    // Fellowship dropdown
    'fellowship.overview': 'Aperçu du Programme',
    'fellowship.background': 'Contexte',
    'fellowship.components': 'Composantes Principales',
    'fellowship.apply': 'Processus de Candidature',
    'fellowship.challenges': 'Défis Clés',
    
    // Faculty dropdown
    'faculty.meet': 'Rencontrez Notre Faculté',
    'faculty.research': 'Domaines de Recherche',
    'faculty.join': 'Rejoignez-Nous',
    
    // Impact dropdown
    'impact.stories': 'Histoires de Réussite',
    'impact.projects': 'Projets',
    'impact.reports': 'Rapports',
    
    // Get Involved dropdown
    'getInvolved.apply': 'Postulez Maintenant',
    'getInvolved.support': 'Soutenez-Nous',
    'getInvolved.partner': 'Devenez Partenaire',
    
    // Contact dropdown
    'contact.general': 'Renseignements Généraux',
    'contact.media': 'Relations Médias',
    'contact.support': 'Support',
    
    // Footer
    'footer.rights': 'Tous droits réservés',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
    'footer.contact': 'Contactez-Nous',
    'footer.follow': 'Suivez-Nous',
    'footer.quickLinks': 'Liens Rapides',
    'footer.resources': 'Ressources',
    
    // Home page
    'home.hero.title': 'Programme de <span class="text-green-400">Justice Climatique</span> pour les Jeunes',
    'home.hero.subtitle': 'Autonomiser les Jeunes Africains pour l\'Action en Faveur de la Justice Climatique',
    'home.section1.title': 'Le Programme de Justice Climatique pour les Jeunes',
    'home.section1.paragraph1': 'Une initiative transformatrice dédiée à exploiter l\'esprit d\'aventure, la résilience et le leadership innovant des jeunes africains. Nous connectons les jeunes défenseurs du climat avec des ressources essentielles, des compétences affinées, des réseaux professionnels et une exposition internationale.',
    'home.section1.paragraph2': 'Au cœur de ce programme se trouve un engagement à aborder la justice climatique et à alléger le fardeau des soins qui affecte de manière disproportionnée les communautés africaines. Nous reconnaissons l\'immense potentiel des jeunes africains en tant qu\'agents de changement et visons à les autonomiser pour qu\'ils surmontent les défis systémiques et amplifient leurs voix sur la scène mondiale.',
    'home.section1.paragraph3': 'Grâce à des sessions de renforcement des capacités sur mesure, au mentorat par des experts chevronnés, à des engagements de recherche, à des financements et à des opportunités de participer à des forums mondiaux, le Programme de Justice Climatique pour les Jeunes est plus qu\'un programme—c\'est un mouvement pour créer des leaders qui façonneront un avenir résilient et équitable pour l\'Afrique.',
    'home.section1.learnMore': 'En Savoir Plus',
    'home.watchVideo': 'Regarder la Vidéo',
    
    // Features
    'features.climateAction.title': 'Action Climatique',
    'features.climateAction.description': 'Conduire un changement significatif grâce à des solutions climatiques innovantes',
    'features.panAfrican.title': 'Réseau Panafricain',
    'features.panAfrican.description': 'Connectez-vous avec des leaders climatiques à travers le continent',
    'features.mentorship.title': 'Mentorat Expert',
    'features.mentorship.description': 'Apprenez des défenseurs chevronnés de la justice climatique',
    'features.funding.title': 'Financement de Projets',
    'features.funding.description': 'Accédez aux ressources pour mettre en œuvre vos initiatives climatiques',
    
    // Gallery page
    'gallery.title': 'Galerie de Photos',
    'gallery.description': 'Parcourez notre collection de photos',
    
    // Album grid
    'albums.title': 'Albums',
    'albums.lastUpdated': 'Dernière mise à jour',
    'albums.backToAlbums': 'Retour aux Albums',
    'albums.photo': 'photo',
    'albums.photos': 'photos',
    'albums.error': 'Échec du chargement des albums',
    'albums.tryAgain': 'Réessayer',
    'albums.noAlbums': 'Aucun album trouvé',
    'albums.noAlbumsDesc': 'Il n\'y a pas encore d\'albums disponibles dans la galerie.',
    
    // Photo grid
    'photos.noPhotos': 'Aucune photo trouvée',
    'photos.noPhotosDesc': 'Cet album ne contient pas encore de photos.',
    'photos.error': 'Échec du chargement des photos',
    'photos.tryAgain': 'Réessayer',
    
    // Photo modal
    'modal.download': 'Télécharger',
    'modal.downloading': 'Téléchargement...',
    'photoModal.untitled': 'Photo sans titre',
    'photoModal.date': 'Date',
    'photoModal.dimensions': 'Dimensions',
    'photoModal.download': 'Télécharger',
    
    // Loading
    'loading': 'Chargement de la galerie...',
    
    // Language selector
    'language.select': 'Sélectionner la langue',
    'language.en': 'Anglais',
    'language.fr': 'Français',
    'language.currentLanguage': 'Langue actuelle',
    'language.switchToEnglish': 'Passer à l\'anglais',
    'language.switchToFrench': 'Passer au français',
    
    // Album page
    'album.error': 'Échec du chargement de l\'album',
    'album.tryAgain': 'Réessayer',
    'album.backToGallery': 'Retour à la Galerie',
  }
};

// Create context interface
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with browser language or default to English
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  // Load saved language preference on mount
  useEffect(() => {
    // Check if there's a saved language preference in localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguage(savedLanguage);
    } else {
      // Try to detect browser language
      const browserLanguage = navigator.language.split('-')[0];
      if (browserLanguage === 'fr') {
        setLanguage('fr');
      }
    }
    setMounted(true);
  }, []);

  // Save language preference when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
      // Update HTML lang attribute
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook for using the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 