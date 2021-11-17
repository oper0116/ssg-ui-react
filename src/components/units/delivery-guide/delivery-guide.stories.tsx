import React from 'react';
import DeliberyGuide02 from './delivery-guide-02/';
import { dummyData02 } from './delivery-guide-02/deliveryDummyData';
import { TitleUnit } from '../title';

export default {
  title: '유닛/배송안내',
  parameters: {
    layout: 'fullscreen',
  },
};

const args = {
  data: dummyData02,
};

const argTypes = {
  data: {
    control: {
      type: 'object',
    },
  },
};

export const deliveryGuide02 = ({ data }) => {
  const tempData = { ...data, shppTimeList: data.shppTimeList.slice(0, 1) };
  return (
    <>
      <DeliberyGuide02 data={data} />
      <TitleUnit data={{ maiTitleNm1: '1개 일 때' }} />
      <DeliberyGuide02 data={tempData} />
    </>
  );
};

deliveryGuide02.storyName = '배송안내 (모듈유닛: DELIVERY_GUIDE_02)';
deliveryGuide02.args = args;
deliveryGuide02.argTypes = argTypes;
