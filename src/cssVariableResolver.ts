import type { CSSVariablesResolver } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const mantineCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {
    '--primaryColor': '#0087e4',
    '--grey': 'rgb(72, 72, 72)',
  },
  dark: {
    '--primaryColor': '#9ad7ff',
    '--grey': 'lightgrey',
  },
});
