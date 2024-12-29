import type { CSSVariablesResolver } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const mantineCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {
    '--overlayColor': 'rgba(255, 255, 255, 0.6)',
    '--primaryColor': '#0087e4',
    '--grey': 'rgb(72, 72, 72)',
    '--navBackground': 'rgba(255, 255, 255, 0.4)',
  },
  dark: {
    '--overlayColor': 'rgba(0, 0, 0, 0.6)',
    '--primaryColor': '#9ad7ff',
    '--grey': 'lightgrey',
    '--navBackground': 'rgba(50, 50, 50, 0.4)',
  },
});
