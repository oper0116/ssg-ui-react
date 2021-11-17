import React from 'react';
import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import theme from '../theme';

export const SsgThemeProvider = ({ children, ...props }: ChakraProviderProps) => {
  return (
    <ChakraProvider theme={theme} {...props}>
      {children}
    </ChakraProvider>
  );
};
