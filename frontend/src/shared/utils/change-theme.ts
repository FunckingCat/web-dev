import { THEME } from '../types';

export const changeTheme = (theme: THEME) => {
  const root = document.getElementById('root');

  if (!root) {
    return console.warn('Element with id root does not exist');
  }

  root.setAttribute('data-theme', theme);
};
