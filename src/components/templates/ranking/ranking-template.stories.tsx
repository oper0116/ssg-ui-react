/* eslint-disable react/prop-types */
import React from 'react';
import RankingTemplate from './RankingTemplate';

export default {
  title: '템플릿/랭킹',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <RankingTemplate />;
Default.storyName = '랭킹(기본)';
