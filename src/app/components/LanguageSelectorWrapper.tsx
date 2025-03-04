'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from '@/components/LanguageSelector';

interface LanguageSelectorWrapperProps {
  textKey?: string;
  dangerousHTML?: boolean;
}

// Component to display translated text based on a key
export function TranslatedText({ textKey, dangerousHTML = false }: { textKey: string; dangerousHTML?: boolean }) {
  const { t } = useLanguage();
  
  if (dangerousHTML) {
    return <span dangerouslySetInnerHTML={{ __html: t(textKey) }} />;
  }
  
  return <>{t(textKey)}</>;
}

// Component that either shows translated text or the language selector
export default function LanguageSelectorWrapper({ textKey, dangerousHTML = false }: LanguageSelectorWrapperProps) {
  if (textKey) {
    return <TranslatedText textKey={textKey} dangerousHTML={dangerousHTML} />;
  }
  
  return <LanguageSelector />;
} 