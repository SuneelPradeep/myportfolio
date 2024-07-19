// context/ThemeProvider.js
'use client';
import { createContext, useEffect, useState } from 'react';

export type ThemeState = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const initialState: ThemeState = {
  isDarkMode: true ,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeState>(initialState);

const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialState.isDarkMode);
  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
