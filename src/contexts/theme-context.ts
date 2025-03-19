import { createContext } from 'react';

export type Theme = 'dark' | 'light' | 'system';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const initialThemeState: ThemeContextType = {
  theme: 'system',
  setTheme: () => null,
};

export const ThemeContext = createContext<ThemeContextType>(initialThemeState);
