import React from 'react';
import { SystemIconProps } from '.';
import * as svgs from './svg/adult19';
import SvgWrapper from './SvgWrapper';

type Adult19IconType = keyof typeof svgs;
export const adult19IconNames: Adult19IconType[] = Object.keys(svgs) as any[];

export const Adult19Icon = ({ icon, ...rest }: SystemIconProps<Adult19IconType>) => (
  <SvgWrapper svg={svgs[icon]} {...rest} />
);

Adult19Icon.defaultProps = {
  width: '200px',
};
