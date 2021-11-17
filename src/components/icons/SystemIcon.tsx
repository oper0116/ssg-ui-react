import React from 'react';
import { BoxProps, forwardRef } from '@chakra-ui/react';

import * as svgs from './svg/icon';
import SvgWrapper from './SvgWrapper';

export type IconType = keyof typeof svgs;
export const iconNames: IconType[] = Object.keys(svgs) as any[];

export interface SystemIconProps<T> extends BoxProps {
  icon: T;
}

export const SystemIcon = forwardRef(({ icon, ...rest }: SystemIconProps<IconType>, ref) => (
  <SvgWrapper ref={ref} svg={svgs[icon]} isFull {...rest} />
));

SystemIcon.defaultProps = {
  width: 7,
};
