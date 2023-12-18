import { createContext, useContext, useState } from 'react';
import { QueryContextType, QueryContextProps } from '../../models/query';

export const QueryContext = createContext<QueryContextType>({
  query: '',
  setQuery: () => {},
  changeQuery: () => {},
});

export const QueryContextProvider: React.FC<QueryContextProps> = ({
  children,
}) => {
  const [query, setQuery] = useState('');

  const changeQuery = (value: string) => {
    setQuery(value);
  };

  return (
    <QueryContext.Provider value={{ query, setQuery, changeQuery }}>
      {children}
    </QueryContext.Provider>
  );
};

export const useQueryContext = (): QueryContextType => {
  return useContext(QueryContext);
};
