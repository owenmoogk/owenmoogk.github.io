import { MantineProvider } from '@mantine/core';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { mantineCssVariableResolver } from './cssVariableResolver';
import { mantineTheme } from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider
      theme={mantineTheme}
      cssVariablesResolver={mantineCssVariableResolver}
    >
      <App />
    </MantineProvider>
  </StrictMode>
);
