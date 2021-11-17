import { mode, transparentize } from '@chakra-ui/theme-tools';

const parts = ['control', 'label', 'description', 'icon'];

function baseStyleControl(props: Record<string, any>) {
  const { colorScheme: c, theme } = props;
  const dark = transparentize(c, 0.8)(theme);

  return {
    w: '100%',
    transition: 'box-shadow 250ms',
    border: '1px solid',
    borderRadius: 'none',
    borderColor: mode('line-gray-300', 'gray.700')(props),
    color: 'white',

    _checked: {
      bg: mode(c, dark)(props),
      borderColor: mode(c, dark)(props),
      color: 'white',

      // _hover: {
      //   bg: mode(`${c}.600`, `${c}.300`)(props),
      //   borderColor: mode(`${c}.600`, `${c}.300`)(props),
      // },

      _disabled: {
        borderColor: mode('line-gray-300', 'transparent')(props),
        bg: mode('line-gray-300', 'whiteAlpha.300')(props),
        color: mode('line-gray-300', 'whiteAlpha.500')(props),
      },
    },

    // _indeterminate: {
    //   bg: mode(`${c}.500`, `${c}.200`)(props),
    //   borderColor: mode(`${c}.500`, `${c}.200`)(props),
    //   color: mode('white', 'gray.900')(props),
    // },

    _disabled: {
      bg: mode('line-gray-300', 'whiteAlpha.100')(props),
      borderColor: mode('line-gray-300', 'transparent')(props),
    },

    _focus: {
      boxShadow: 'none',
    },

    _invalid: {
      borderColor: mode('line-gray-300', 'line-gray-300')(props),
    },
  };
}

const baseStyleLabel = {
  userSelect: 'none',
  _disabled: { opacity: 0.4 },
};

const baseStyleIcon = {
  fontSize: '0.625rem',
};

const baseStyle = (props: Record<string, any>) => ({
  control: baseStyleControl(props),
  label: baseStyleLabel,
  icon: baseStyleIcon,
});

const sizes = {
  sm: {
    control: { h: 3, w: 3 },
    label: { fontSize: 'sm' },
    icon: { fontSize: '0.5rem' },
  },
  md: {
    control: { w: 4, h: 4 },
    label: { fontSize: 'md' },
    icon: { fontSize: '0.625rem' },
  },
  lg: {
    control: { w: 5, h: 5 },
    label: { fontSize: 'lg' },
    icon: { fontSize: '0.9rem' },
  },
};

const defaultProps = {
  size: 'md',
  colorScheme: 'primary',
};

export default {
  parts,
  baseStyle,
  sizes,
  defaultProps,
};
