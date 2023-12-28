import { ReactNode } from 'react';

export type QueryContextType = {
  query: string;
  setQuery: (value: string) => void;
  changeQuery: (value: string) => void;
  apiUrl: string;
  setApiUrl: (value: string) => void;
  changeApiUrl: (value: string) => void;
  variables: string;
  setVariables: (value: string) => void;
  headers: string;
  setHeaders: (value: string) => void;
};

export type QueryContextProps = {
  children: ReactNode;
};
