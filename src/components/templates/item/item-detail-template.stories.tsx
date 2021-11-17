/* eslint-disable react/prop-types */
import React from 'react';
import ItemDetailTemplate from './ItemDetailTemplate';
import DealProductionItemDetailTemplate from './DealItemDetailTemplate';

export default {
  title: '템플릿/상품상세',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <ItemDetailTemplate />;
Default.storyName = '일반 상품상세';

export const deal = () => <DealProductionItemDetailTemplate />;
deal.storyName = '딜 상품상세';
