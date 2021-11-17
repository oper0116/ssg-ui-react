import { mode } from '@chakra-ui/theme-tools';

const parts = ['content', 'header', 'body', 'footer', 'arrow'];

function baseStyleContent(props: Record<string, any>) {
  return {
    bg: mode('white', 'gray.800')(props),
    border: '1px solid',
    borderColor: mode('gray.300', 'gray.700')(props),
    borderRadius: 'lg',
    boxShadow: 'lg',
    w: '100%',
    maxW: 'xs',
    zIndex: '1',
    _focus: {
      outline: 0,
      boxShadow: 'none',
    },
  };
}

function baseStyleArrow(props: Record<string, any>) {
  return {
    boxShadow: mode(
      '#e5e5e5 -1px -1px 1px 0px !important',
      '#777777 -1px -1px 1px 0px !important',
    )(props),
  };
}

const baseStyleHeader = {
  px: 4,
  pt: 4,
  pb: 2,
  borderBottomWidth: 0,
  fontWeight: 'bold',
};

const baseStyleBody = {
  px: 4,
  py: 2,
};

const baseStyleFooter = {
  px: 4,
  pt: 2,
  pb: 4,
  borderTopWidth: 0,
};

const baseStyle = function (props: Record<string, any>) {
  return {
    content: baseStyleContent(props),
    arrow: baseStyleArrow(props),
    header: baseStyleHeader,
    body: baseStyleBody,
    footer: baseStyleFooter,
  };
};

export default {
  parts,
  baseStyle,
};
