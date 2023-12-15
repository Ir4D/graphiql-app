import React, { ReactNode, createContext, useState } from 'react';
import en from './en.json';
import ru from './ru.json';

type Locale = 'en' | 'ru';
type Messages = Record<string, string>;

interface LocalizationContextProps {
  locale: Locale;
  messages: Record<Locale, Messages>;
  changeLocale: (newLocale: Locale) => void;
}

interface LocalizationProviderProps {
  children: ReactNode;
}

const LocalizationContext = createContext<LocalizationContextProps>({
  locale: 'en',
  messages: { en: {}, ru: {} },
  changeLocale: () => {},
});

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
  children,
}) => {
  const [locale, setLocale] = useState<Locale>('en');
  const messages: Record<Locale, Messages> = { en, ru };

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  return (
    <LocalizationContext.Provider value={{ locale, messages, changeLocale }}>
      {children}
    </LocalizationContext.Provider>
  );
};
