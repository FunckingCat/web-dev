import compose from 'compose-function';

import { withStrictMode } from './with-strict-mode';
import { withRouter } from './with-router';
import { withTheme } from './with-theme';

export const withProviders = compose(withStrictMode, withRouter, withTheme);
