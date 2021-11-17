import React from 'react';
import { A11y, Lazy } from 'swiper';
import { Swiper } from 'swiper/react';

import 'swiper/css';

const BaseSwiper: React.PureComponent<Swiper> = (props: Swiper) => {
  const { modules = [], ...rest } = props;

  return <Swiper modules={[...modules, A11y, Lazy]} {...rest} />;
};

export default BaseSwiper;
