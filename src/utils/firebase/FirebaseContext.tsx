import { createContext, useContext } from 'react';

export const FirebaseContext = createContext(null);
export const useFirebaseContext = () => {
  const context = useContext(FirebaseContext);
  if (!context) throw new Error('Context is not provided!');
  return context;
};
