import { ReactNode } from 'react';

export type QueryContextType = {
  query: string;
  setQuery: (value: string) => void;
  changeQuery: (value: string) => void;
};

export type QueryContextProps = {
  children: ReactNode;
};
