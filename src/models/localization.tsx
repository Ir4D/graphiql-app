import { ReactNode } from 'react';

export type Locale = 'en' | 'ru';
export type Messages = Record<string, string>;

export interface LocalizationContextProps {
  locale: Locale;
  messages: Record<Locale, Messages>;
  changeLocale: (newLocale: Locale) => void;
}

export interface LocalizationProviderProps {
  children: ReactNode;
}
