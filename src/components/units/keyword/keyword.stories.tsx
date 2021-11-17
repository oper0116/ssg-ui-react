import React from 'react';
import { keyWordDummyData } from './keywordDummyData';
import Keyword from './Keyword';

export default {
  title: '유닛/급상승 키워드',
  parameters: {
    layout: 'fullscreen',
  },
};

const keywordArgTypes = {
  data: {
    control: {
      type: 'object',
    },
  },
};

export const keyword = ({ data }) => <Keyword data={data} />;

keyword.storyName = '급상승 키워드 (모듈유닛: KEYWORD)';
keyword.args = {
  data: keyWordDummyData.areaList,
};
keyword.argTypes = keywordArgTypes;
