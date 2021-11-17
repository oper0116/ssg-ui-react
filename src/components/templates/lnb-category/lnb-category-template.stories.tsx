/* eslint-disable react/prop-types */
import React from 'react';
import LnbCategoryTemplate from './LnbCategoryTemplate';
import data, { emartData } from './data';

export default {
  title: '템플릿/LNB 카테고리',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = ({ data }) => <LnbCategoryTemplate data={data} />;
Default.storyName = 'LNB 카테고리(기본)';
Default.args = {
  data,
};
Default.argTypes = {
  data: {
    control: {
      type: 'object',
    },
  },
};

export const emart = ({ data }) => <LnbCategoryTemplate data={data} />;
emart.storyName = 'LNB 카테고리(그룹)';
emart.args = {
  data: emartData,
};
emart.argTypes = {
  data: {
    control: {
      type: 'object',
    },
  },
};
