import { createContext, useMemo } from 'react';
import useFetch from '../hooks/useFetch';

export const AuthContext = createContext();

// {
//   Provider, => Prover os dados
// }

function OurAuthProvider({ children }) {
  const [isLoading, errors, gitData, fetchData] = useFetch();

  const values = useMemo(() => ({
    isLoading,
    errors,
    gitData,
    fetchData,
  }), [isLoading, errors, gitData, fetchData]);

  return (
    <AuthContext.Provider value={ values }>
      {children}
    </AuthContext.Provider>
  );
}

export default OurAuthProvider;

///

// <OurAuthProvider>
//   <App />
// </OurAuthProvider>
