import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme } from '../types';

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeName: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const themes: Record<string, Theme> = {
  default: {
    name: 'default',
    primaryColor: '#2563eb',
    secondaryColor: '#1e40af',
    backgroundColor: '#f8fafc',
    textColor: '#1e293b',
    icon: '🏫',
    greeting: 'Welcome to A.C.K HOLY TRINITY Academy'
  },
  christmas: {
    name: 'christmas',
    primaryColor: '#dc2626',
    secondaryColor: '#991b1b',
    backgroundColor: '#fef2f2',
    textColor: '#1e293b',
    icon: '🎄',
    greeting: 'Merry Christmas from A.C.K HOLY TRINITY Academy'
  },
  newyear: {
    name: 'newyear',
    primaryColor: '#059669',
    secondaryColor: '#047857',
    backgroundColor: '#f0fdf4',
    textColor: '#1e293b',
    icon: '🎆',
    greeting: 'Happy New Year from A.C.K HOLY TRINITY Academy'
  },
  easter: {
    name: 'easter',
    primaryColor: '#ec4899',
    secondaryColor: '#be185d',
    backgroundColor: '#fdf2f8',
    textColor: '#1e293b',
    icon: '🐰',
    greeting: 'Happy Easter from A.C.K HOLY TRINITY Academy'
  }
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes.default);

  useEffect(() => {
    const checkSeasonalTheme = () => {
      const now = new Date();
      const month = now.getMonth() + 1;
      const day = now.getDate();

      // Christmas: December 1-31
      if (month === 12) {
        setCurrentTheme(themes.christmas);
      }
      // New Year: January 1-7
      else if (month === 1 && day <= 7) {
        setCurrentTheme(themes.newyear);
      }
      // Easter: March 22 - April 25 (approximate)
      else if ((month === 3 && day >= 22) || (month === 4 && day <= 25)) {
        setCurrentTheme(themes.easter);
      }
      else {
        setCurrentTheme(themes.default);
      }
    };

    checkSeasonalTheme();
  }, []);

  const setTheme = (themeName: string) => {
    if (themes[themeName]) {
      setCurrentTheme(themes[themeName]);
    }
  };

  const value = {
    currentTheme,
    setTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 