import React, { useMemo } from 'react';

import { DEFAULT_THEME } from 'config';
import { ThemeContext } from 'shared/context';
import { Hoc } from 'shared/types';
import { changeTheme } from 'shared/utils';

export const withTheme: Hoc = (Component) => (props) => {
  const themeProviderValue = useMemo(
    () => ({
      theme: DEFAULT_THEME,
      changeTheme,
    }),
    [],
  );

  return (
    <ThemeContext.Provider value={themeProviderValue}>
      <Component {...props} />
    </ThemeContext.Provider>
  );
};
