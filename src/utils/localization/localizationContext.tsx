import { createContext } from 'react';

type Locale = 'en' | 'ru';
type Messages = Record<string, string>;

interface LocalizationContextProps {
  locale: Locale;
  messages: Record<Locale, Messages>;
  changeLocale: (newLocale: Locale) => void;
}

export const LocalizationContext = createContext<LocalizationContextProps>({
  locale: 'en',
  messages: { en: {}, ru: {} },
  changeLocale: () => {},
});
