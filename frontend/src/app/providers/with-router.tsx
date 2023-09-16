import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Hoc } from 'shared/types';

export const withRouter: Hoc = (Component) => (props) =>
  (
    <BrowserRouter>
      <Suspense fallback="Тяги грузятся...">
        <Component {...props} />
      </Suspense>
    </BrowserRouter>
  );
