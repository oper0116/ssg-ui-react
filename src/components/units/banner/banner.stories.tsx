import React from 'react';
import categoryData from '../../templates/lnb-category/data';
import BannerGridRow from './BannerGridRow';

export default {
  title: '유닛/배너',
  parameters: {
    layout: 'fullscreen',
  },
};

export const bannerGridRow = ({ data }) => <BannerGridRow data={data} />;
bannerGridRow.storyName = '배너 그리드 로우';
bannerGridRow.args = {
  data: categoryData.killerBannerList,
};
bannerGridRow.argTypes = {
  data: {
    control: {
      type: 'object',
    },
  },
};
