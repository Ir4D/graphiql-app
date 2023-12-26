import { createContext, useContext, useState } from 'react';
import { QueryContextType, QueryContextProps } from '../../models/query';

export const QueryContext = createContext<QueryContextType>({
  query: '',
  setQuery: () => {},
  changeQuery: () => {},
  apiUrl: '',
  setApiUrl: () => {},
  changeApiUrl: () => {},
  variables: '',
  setVariables: () => {},
});

export const QueryContextProvider: React.FC<QueryContextProps> = ({
  children,
}) => {
  const [query, setQuery] = useState('');
  const [apiUrl, setApiUrl] = useState('https://rickandmortyapi.com/graphql');
  const [variables, setVariables] = useState('');

  const changeQuery = (value: string) => {
    setQuery(value);
  };

  const changeApiUrl = (value: string) => {
    setApiUrl(value);
  };

  return (
    <QueryContext.Provider
      value={{
        query,
        setQuery,
        changeQuery,
        apiUrl,
        setApiUrl,
        changeApiUrl,
        variables,
        setVariables,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};

export const useQueryContext = (): QueryContextType => {
  return useContext(QueryContext);
};
