import { useMemo } from 'react';
import AppContext from './AppContext';
import useLocalStorage from '../hooks/useLocalStorage';

function AppProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('theme', true);

  const values = useMemo(() => ({
    isDarkTheme,
    setIsDarkTheme,
  }), [isDarkTheme, setIsDarkTheme]);

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
