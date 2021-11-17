import React from 'react';
import { CardBanner02 } from './index';
import { bannerDummyData } from './bannerDummyData';
import TitleUnit from '../title/TitleUnit';
export default {
  title: '유닛/카드배너',
  parameters: {
    layout: 'fullscreen',
  },
};

const args = {
  data: {
    reactPrefix: '리액팅코드',
    banrList: bannerDummyData,
    subtitlNm1: 'SSG만의',
    subtitlNm2: '특별한 혜택',
  },
};

const argTypes = {
  data: {
    control: {
      type: 'object',
    },
  },
};

export const cardBanner02 = ({ data }) => {
  const tempData1 = { ...data, banrList: data?.banrList.slice(0, 2) };
  const tempData2 = { ...data, banrList: data?.banrList.slice(0, 1) };

  return (
    <>
      <CardBanner02 data={data} />
      <TitleUnit data={{ maiTitleNm1: '2개 일 때' }} />
      <CardBanner02 data={tempData1} />
      <TitleUnit data={{ maiTitleNm1: '1개 일 때' }} />
      <CardBanner02 data={tempData2} />
    </>
  );
};
cardBanner02.storyName = '카드배너 가로형 (모듈유닛: CARD_BANNER_02)';
cardBanner02.args = args;
cardBanner02.argTypes = argTypes;
