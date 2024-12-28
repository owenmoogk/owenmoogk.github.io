import type { CSSVariablesResolver } from '@mantine/core';

export const mantineCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--custom-color': theme.colors.blue[6],
  },
  light: {
    // variables for light color scheme only
  },
  dark: {
    // variables for dark color scheme only
  },
});
