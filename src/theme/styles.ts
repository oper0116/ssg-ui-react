import { mode, Styles } from '@chakra-ui/theme-tools';

const styles: Styles = {
  global: (props) => ({
    html: {
      height: '100%',
    },
    body: {
      fontFamily: 'body',
      color: mode(`text-gray-900`, `whiteAlpha.900`)(props),
      bg: mode(`white`, `text-gray-900`)(props),
      transitionProperty: 'background-color',
      transitionDuration: 'normal',
      lineHeight: 'base',
    },
    '*::placeholder': {
      color: mode(`text-gray-400`, `whiteAlpha.400`)(props),
    },
    '*, *::before, &::after': {
      borderColor: mode(`line-gray-150`, `whiteAlpha.300`)(props),
      wordWrap: 'break-word',
    },
    'a:focus': {
      boxShadow: 'none !important',
    },
    'ul, ol': {
      listStyle: 'none',
    },
  }),
};

export default styles;
