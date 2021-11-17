import { SsgThemeProvider } from '../src/providers';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withProvider = (StoryFn) => (
  <SsgThemeProvider resetCSS>
    <StoryFn />
  </SsgThemeProvider>
);

export const decorators = [withProvider];
