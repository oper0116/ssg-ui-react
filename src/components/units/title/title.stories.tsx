/* eslint-disable react/prop-types */
import React from 'react';
import TitleUnit from './TitleUnit';
import CenteredTitleUnit from './CenteredTitleUnit';
import SectionTitleUnit from './SectionTitleUnit';

export default {
  title: '유닛/타이틀',
  parameters: {
    layout: 'fullscreen',
  },
};

const args = {
  data: {
    maiTitleNm1: '많은 사람들이',
    maiTitleNm2: '주문하고 있어요!',
    subtitlNm1: '4월 24일 15시 30분 기준',
    subtitlNm2: '4월 24일 15시 30분 기준',
  },
};

const argTypes = {
  data: {
    control: {
      type: 'object',
    },
  },
};

export const titleUnit = ({ data: { maiTitleNm1, maiTitleNm2, subtitlNm1, subtitlNm2 } }) => (
  <TitleUnit
    data={{
      maiTitleNm1,
      maiTitleNm2,
      subtitlNm1,
      subtitlNm2,
    }}
  />
);

titleUnit.storyName = '타이틀 (모듈유닛: TITLE_UNIT)';
titleUnit.args = args;
titleUnit.argTypes = argTypes;

export const centeredTitleUnit = ({
  data: { maiTitleNm1, maiTitleNm2, subtitlNm1, subtitlNm2 },
}) => (
  <CenteredTitleUnit
    data={{
      maiTitleNm1,
      maiTitleNm2,
      subtitlNm1,
      subtitlNm2,
    }}
  />
);
centeredTitleUnit.storyName = '센터 타이틀';
centeredTitleUnit.args = args;
centeredTitleUnit.argTypes = argTypes;

export const sectionTitleUnit = ({ data: { maiTitleNm1, maiTitleNm2, lnkdUrl } }) => (
  <SectionTitleUnit
    data={{
      maiTitleNm1,
      maiTitleNm2,
      lnkdUrl,
    }}
  />
);
sectionTitleUnit.storyName = '섹션 타이틀';
sectionTitleUnit.args = {
  data: {
    maiTitleNm1: '타이틀',
    maiTitleNm2: '더보기',
    lnkdUrl: 'http://www.ssg.com',
  },
};
sectionTitleUnit.argTypes = argTypes;
