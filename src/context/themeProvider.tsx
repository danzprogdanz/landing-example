import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';


type ThemeColors = {
  primary: string;
  secondary: string;
  text: string;
  background: string;
  headerBackground: string;
  footerBackground: string;
  footerText: string;
  toggleBackground: string;
  toggleThumb: string;
};

type ThemeContextType = {
  toggleTheme: () => void;
  isDarkMode: boolean;
  theme: ThemeColors;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const lightTheme: ThemeColors = {
  primary: '#ffffff',
  secondary: '#f5f5f5',
  text: '#333333',
  background: '#f8f9fa',
  headerBackground: '#ffffff',
  footerBackground: '#2d2d2d',
  footerText: '#ffffff',
  toggleBackground: '#e9ecef',
  toggleThumb: '#ffffff'
};

const darkTheme: ThemeColors = {
  primary: '#1a1a1a',
  secondary: '#2d2d2d',
  text: '#ffffff',
  background: '#121212',
  headerBackground: '#1a1a1a',
  footerBackground: '#2d2d2d',
  footerText: '#ffffff',
  toggleBackground: '#495057',
  toggleThumb: '#f8f9fa'
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ 
      toggleTheme, 
      isDarkMode,
      theme: isDarkMode ? darkTheme : lightTheme
    }}>
      <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};