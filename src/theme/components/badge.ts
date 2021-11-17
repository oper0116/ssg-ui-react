import { getColor, mode, transparentize } from '@chakra-ui/theme-tools';

const baseStyle = {
  minWidth: 8,
  px: 1,
  textTransform: 'uppercase',
  fontSize: '3xs',
  borderRadius: 'sm',
  fontWeight: 'normal',
  textAlign: 'center',
};

function variantSolid(props: Record<string, any>) {
  const { colorScheme: c, theme } = props;
  const grayColor = `text-gray-500`;
  const dark = transparentize(c === 'gray' ? grayColor : c, 0.6)(theme);

  return {
    bg: mode(c, dark)(props),
    color: mode(`white`, `whiteAlpha.800`)(props),
  };
}

function variantSubtle(props: Record<string, any>) {
  const { colorScheme: c, theme } = props;
  const grayColor = `text-gray-500`;
  const bg = transparentize(c === 'gray' ? grayColor : c, 0.16)(theme);
  return {
    bg,
    color: c,
  };
}

function variantOutline(props: Record<string, any>) {
  const { colorScheme: c, theme } = props;
  const grayColor = `text-gray-500`;
  const darkColor = transparentize(c === 'gray' ? grayColor : c, 0.8)(theme);
  const lightColor = getColor(theme, c === 'gray' ? grayColor : c);
  const color = mode(lightColor, darkColor)(props);

  return {
    color,
    boxShadow: `inset 0 0 0px 1px ${color}`,
  };
}

const variants = {
  solid: variantSolid,
  subtle: variantSubtle,
  outline: variantOutline,
};

const defaultProps = {
  variant: 'solid',
  colorScheme: 'primary',
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
