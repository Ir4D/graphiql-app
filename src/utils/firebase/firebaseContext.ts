import { createContext, useContext } from 'react';

export const firebaseContext = createContext(null);
export const useFirebaseContext = () => {
  const context = useContext(firebaseContext);
  if (!context) throw new Error('Context is not provided!');
  return context;
};
