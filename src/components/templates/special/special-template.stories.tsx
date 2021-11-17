/* eslint-disable react/prop-types */
import React from 'react';
import SpecialShopListTemplate from './SpecialShopListTemplate';
import SpecialShopMainTemplate from './SpecialShopMainTemplate';

export default {
  title: '템플릿/공식스토어',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <SpecialShopListTemplate />;
Default.storyName = '공식스토어 리스트';

export const main = () => <SpecialShopMainTemplate />;
main.storyName = '공식스토어 메인';
