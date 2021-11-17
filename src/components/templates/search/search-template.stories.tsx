/* eslint-disable react/prop-types */
import React from 'react';
import SearchTemplate from './SearchTemplate';

export default {
  title: '템플릿/검색',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <SearchTemplate />;
Default.storyName = '검색결과 있음';
