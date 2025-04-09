import {
  Anchor,
  Card,
  Container,
  createTheme,
  Paper,
  rem,
  Select,
  Text,
  Title,
} from '@mantine/core';

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem('200px'),
  xs: rem('300px'),
  sm: rem('400px'),
  md: rem('500px'),
  lg: rem('600px'),
  xl: rem('1400px'),
  xxl: rem('1600px'),
};
export const mantineTheme = createTheme({
  /** Put your mantine theme override here */

  colors: {
    dark: [
      '#FFFFFF',
      '#b8b8b8',
      '#828282',
      '#696969',
      '#424242',
      '#3b3b3b',
      '#2e2e2e',
      '#242424',
      '#1f1f1f',
      '#141414',
    ],
  },
  fontSizes: {
    xs: rem('12px'),
    sm: rem('15px'),
    md: rem('17px'),
    lg: rem('18px'),
    xl: rem('20px'),
    xxl: rem('50px'),
  },
  spacing: {
    '3xs': rem('4px'),
    '2xs': rem('8px'),
    xs: rem('10px'),
    sm: rem('12px'),
    md: rem('16px'),
    lg: rem('20px'),
    xl: rem('24px'),
    '2xl': rem('28px'),
    '3xl': rem('32px'),
  },
  primaryColor: 'blue',

  components: {
    Anchor: Anchor.extend({
      defaultProps: {
        underline: 'never',
        fz: 'inherit',
        c: 'var(--primaryColor)',
      },
    }),
    /** Put your mantine component override here */
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: 'md',
        shadow: 'xl',
        radius: 'md',
        withBorder: true,
      },
    }),

    Card: Card.extend({
      defaultProps: {
        p: 'xl',
        shadow: 'xl',
        radius: 'var(--mantine-radius-default)',
        withBorder: true,
      },
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: 'right',
      },
    }),
    Title: Title.extend({
      defaultProps: {
        mt: 20,
        mb: 10,
        ta: 'center',
      },
      styles: (theme, props) => ({
        root: {
          ...(props.order === 1 && {
            fontSize: rem('50px'),
          }),
        },
      }),
    }),
    Text: Text.extend({
      styles: (theme, props) => ({
        root: {
          ...(props.variant === 'subtitle' && {
            margin: '5px 0',
            fontStyle: 'italic',
            textAlign: 'center',
          }),
        },
      }),
    }),
  },
  other: {
    style: 'mantine',
  },
});
