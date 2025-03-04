'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from '@/components/LanguageSelector';

interface LanguageSelectorWrapperProps {
  textKey?: string;
}

// This component serves two purposes:
// 1. When used with a textKey, it displays translated text
// 2. When used without a textKey, it displays the language selector
export default function LanguageSelectorWrapper({ textKey }: LanguageSelectorWrapperProps) {
  const { t } = useLanguage();
  
  if (textKey) {
    return <>{t(textKey)}</>;
  }
  
  return <LanguageSelector />;
}

// This component is used in server components to display translated text
export function TranslatedText({ textKey }: { textKey: string }) {
  return <LanguageSelectorWrapper textKey={textKey} />;
} 