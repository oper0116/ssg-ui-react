import React from 'react';
import { SystemIconProps } from '.';
import * as svgs from './svg/logo';
import SvgWrapper from './SvgWrapper';

export type LogoIconType = keyof typeof svgs;
export const logoIconNames: LogoIconType[] = Object.keys(svgs) as any[];

export const LogoIcon = ({ icon, ...rest }: SystemIconProps<LogoIconType>) => (
  <SvgWrapper svg={svgs[icon]} {...rest} />
);

LogoIcon.defaultProps = {
  height: 5,
};
