import React, {
  useContext,
  useState,
  createContext,
  useCallback,
  useEffect,
} from 'react';

import { DefaultTheme } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    const themePersisted = localStorage.getItem('@GoFinances:theme');

    if (themePersisted) {
      return JSON.parse(themePersisted);
    }

    return light;
  });

  useEffect(() => {
    localStorage.setItem('@GoFinances:theme', JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(oldTheme => (oldTheme.title === 'light' ? dark : light));
    localStorage.setItem('@GoFinances:theme', JSON.stringify(theme));
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };
