import { FunctionComponent, memo } from 'react';

import { Box, BoxProps, forwardRef } from '@chakra-ui/react';

const svgStyles: React.CSSProperties = {
  height: '100%',
  fill: 'currentColor',
  verticalAlign: 'top',
};

interface SvgWrapperProps extends BoxProps {
  svg: FunctionComponent;
  isFull?: boolean;
}

const SvgWrapper = forwardRef(({ svg, isFull, ...rest }: SvgWrapperProps, ref) => {
  const Svg = svg as unknown as FunctionComponent<any>;

  return (
    <Box ref={ref} as="span" d="block" {...rest}>
      <Svg style={isFull ? { ...svgStyles, width: '100%' } : svgStyles} />
    </Box>
  );
});

SvgWrapper.defaultProps = {
  color: 'current',
};

export default memo(SvgWrapper);
