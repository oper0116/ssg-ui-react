import { Box } from '@chakra-ui/react';
import React from 'react';

import { SiteName } from '../../utils';
import { Header, AppBar, NavBar, Floating } from './';
import { mallList, userInfo, navBarData, liveCommerceFloatInfo, chatInfo } from './dummyData';

export default {
  title: '레이아웃',
  parameters: {
    layout: 'fullscreen',
  },
};

export const header = ({ siteName, mallList, userInfo, cartCount }) => (
  <Header siteName={siteName} mallList={mallList} userInfo={userInfo} cartCount={cartCount} />
);
header.storyName = 'Header';
header.args = {
  siteName: SiteName.ssg,
  cartCount: 10,
  mallList,
  userInfo,
};
header.argTypes = {
  siteName: {
    control: {
      type: 'radio',
    },
    options: Object.values(SiteName),
  },
  mallList: {
    control: {
      type: 'object',
    },
  },
  userInfo: {
    control: {
      type: 'object',
    },
  },
  cartCount: {
    control: {
      type: 'number',
    },
  },
};

export const navbar = ({ siteName, data, currentPath }) => (
  <NavBar siteName={siteName} data={data} currentPath={currentPath} />
);
navbar.storyName = 'NavBar';
navbar.args = {
  siteName: SiteName.ssg,
  data: navBarData,
  currentPath: 'home',
};
navbar.argTypes = {
  siteName: {
    control: {
      type: 'radio',
    },
    options: Object.values(SiteName),
  },
  data: {
    control: {
      type: 'object',
    },
  },
  currentPath: {
    control: {
      type: 'text',
    },
  },
};

export const appbar = ({ recentViewItem }) => <AppBar recentViewItem={recentViewItem} />;
appbar.storyName = 'AppBar';
appbar.args = {
  recentViewItem: {
    imgUrl: 'http://item.ssgcdn.com/02/52/58/item/1000048585202_i1_120.jpg',
    path: 'http://www.ssg.com',
  },
};
appbar.argTypes = {
  recentViewItem: {
    control: {
      type: 'object',
    },
  },
};

export const floating = ({ liveCommerceInfo, chatInfo }) => (
  <Box h="110vh">
    <Floating liveCommerceInfo={liveCommerceInfo} chatInfo={chatInfo} />
  </Box>
);
floating.storyName = 'Floating';
floating.args = {
  liveCommerceInfo: liveCommerceFloatInfo,
  chatInfo: chatInfo,
};
