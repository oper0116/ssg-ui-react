import { mode } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>;

const baseStyle = {
  lineHeight: '1.2',
  fontWeight: 'bold',
  borderRadius: 0,
  _focus: {
    boxShadow: 'none',
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
};

function variantOutline(props: Dict) {
  const { colorScheme: c } = props;

  if (c === 'gray')
    return {
      color: `inherit`,
      border: '1px solid',
      borderColor: mode(`line-gray-300`, `whiteAlpha.300`)(props),
      _hover: { bg: `transparent` },
      _active: { bg: `transparent` },
    };

  if (c === 'black') {
    return {
      color: `inherit`,
      borderColor: mode(`text-gray-900`, `whiteAlpha.500`)(props),
    };
  }

  return {
    border: '1px solid',
    borderColor: 'currentColor',
    color: c,
  };
}

function variantSolid(props: Dict) {
  const { colorScheme: c } = props;
  const color = 'white';
  const bg = c;

  if (c === 'gray') {
    const bg = mode(`line-gray-200`, `whiteAlpha.200`)(props);

    return {
      bg,
      _hover: { bg },
      _active: { bg },
      _disabled: { bg },
      color: mode(`inherit`, color)(props),
    };
  }

  if (c === 'black') {
    return {
      color,
      bg: mode(`text-gray-900`, `whiteAlpha.400`)(props),
    };
  }

  return {
    color,
    bg,
  };
}

function variantLink(props: Dict) {
  const { colorScheme: c } = props;

  return {
    padding: 0,
    height: 'auto',
    lineHeight: 'normal',
    color: c === 'black' ? `inherit` : c,
    textDecoration: 'underline',
  };
}

const variantUnstyled = {
  bg: 'none',
  color: 'inherit',
  display: 'inline',
  lineHeight: 'inherit',
  m: 0,
  p: 0,
};

const variants = {
  outline: variantOutline,
  solid: variantSolid,
  link: variantLink,
  unstyled: variantUnstyled,
};

const sizes = {
  lg: {
    h: '50px',
    minW: 12,
    fontSize: 'lg',
    px: 6,
  },
  md: {
    h: '40px',
    minW: 10,
    fontSize: 'md',
    px: 4,
  },
  sm: {
    h: '35px',
    minW: 8,
    fontSize: 'sm',
    px: 3,
  },
  xs: {
    h: '30px',
    minW: 6,
    fontSize: 'xs',
    px: 2,
  },
};

const defaultProps = {
  variant: 'solid',
  size: 'md',
  colorScheme: 'primary',
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
