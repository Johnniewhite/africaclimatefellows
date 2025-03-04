# Language System Documentation

This document explains how to use the language system in the Africa Climate Fellows website.

## Overview

The website supports multiple languages using a context-based translation system. Currently, the supported languages are:

- English (en)
- French (fr)

## How to Use Translations in Components

### Direct Usage with useLanguage Hook

For client components, you can use the `useLanguage` hook directly:

```tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function MyComponent() {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('some.translation.key')}</h1>
      <p>{t('some.other.key')}</p>
      
      {/* You can also access the current language */}
      <p>Current language: {language}</p>
      
      {/* And change the language */}
      <button onClick={() => setLanguage('fr')}>Switch to French</button>
    </div>
  );
}
```

### Using the LanguageWrapper Component

For pages or larger components, you can use the `LanguageWrapper` component:

```tsx
'use client';

import { LanguageWrapper } from '@/components/LanguageWrapper';

export default function MyPage() {
  return (
    <LanguageWrapper>
      {(t) => (
        <div>
          <h1>{t('page.title')}</h1>
          <p>{t('page.description')}</p>
        </div>
      )}
    </LanguageWrapper>
  );
}
```

## HTML in Translations

If you need to include HTML in your translations, you can use the `dangerouslySetInnerHTML` attribute:

```tsx
<h1 dangerouslySetInnerHTML={{ __html: t('home.hero.title') }}></h1>
```

Make sure the translation includes the HTML tags:

```tsx
'home.hero.title': 'Climate Justice <span class="text-green-400">Youth Fellowship</span>',
```

## Adding New Translations

1. Open `src/contexts/LanguageContext.tsx`
2. Add your new translation keys and values to both the `en` and `fr` objects in the `translations` constant

Alternatively, you can use the `updateTranslations.js` script:

1. Add your English texts to the `englishTexts` object in `src/scripts/updateTranslations.js`
2. Run the script with Node.js: `node src/scripts/updateTranslations.js`
3. Copy the output and add it to the translations object in `LanguageContext.tsx`

## Best Practices

1. **Use Descriptive Keys**: Use descriptive, hierarchical keys like `page.section.element` to organize translations
2. **Keep Translations Simple**: Avoid complex logic in translations
3. **Test All Languages**: Always test your changes in all supported languages
4. **Use the Language Wrapper**: For pages, use the `LanguageWrapper` component to ensure consistent translation access
5. **Update Both Languages**: Always add translations for all supported languages when adding new content 