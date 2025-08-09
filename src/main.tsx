import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/code-highlight/styles.css';

import {
  CodeHighlightAdapterProvider,
  createShikiAdapter,
} from '@mantine/code-highlight';
import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { mantineCssVariableResolver } from './cssVariableResolver';
import './main.css';
import { mantineTheme } from './theme';

async function loadShiki() {
  const { createHighlighter } = await import('shiki');
  const shiki = await createHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json', 'xml', 'jsx'],
    themes: [],
  });

  return shiki;
}

const shikiAdapter = createShikiAdapter(loadShiki);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Router>
      <MantineProvider
        defaultColorScheme="dark"
        theme={mantineTheme}
        cssVariablesResolver={mantineCssVariableResolver}
      >
        <CodeHighlightAdapterProvider adapter={shikiAdapter}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </CodeHighlightAdapterProvider>
      </MantineProvider>
    </Router>
  </StrictMode>
);
