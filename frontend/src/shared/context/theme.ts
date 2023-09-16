import { createContext } from 'react';

import { DEFAULT_THEME } from 'config';

import { changeTheme } from '../utils';
import { THEME } from '../types';

interface ThemeContext {
  theme: THEME;
  changeTheme: (theme: THEME) => void;
}

export const ThemeContext = createContext<ThemeContext>({
  theme: DEFAULT_THEME,
  changeTheme,
});
