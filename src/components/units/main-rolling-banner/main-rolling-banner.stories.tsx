/* eslint-disable react/prop-types */
import React from 'react';
import VideoRollingBanner from './VideoRollingBanner';
import { videoRollingBannerDummyData } from './dummyData';

export default {
  title: '유닛/메인롤링배너',
  parameters: {
    layout: 'fullscreen',
  },
};

const argTypes = {
  data: {
    control: {
      type: 'object',
    },
  },
};

export const defaultTitleBar = ({ data }) => <VideoRollingBanner data={data} />;

defaultTitleBar.storyName = '메인롤링배너(동영상) (모듈유닛: VIDEO_ROLLING_BANNER)';
defaultTitleBar.args = {
  data: videoRollingBannerDummyData,
};
defaultTitleBar.argTypes = argTypes;
