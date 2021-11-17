import React from 'react';
import { SystemIconProps } from '.';
import * as svgs from './svg/badge';
import SvgWrapper from './SvgWrapper';

export type BadgeIconType = keyof typeof svgs;
export const badgeIconNames: BadgeIconType[] = Object.keys(svgs) as any[];

export const BadgeIcon = ({ icon, ...rest }: SystemIconProps<BadgeIconType>) => (
  <SvgWrapper svg={svgs[icon]} {...rest} />
);

BadgeIcon.defaultProps = {
  height: 4,
};
