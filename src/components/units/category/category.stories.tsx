import React from 'react';
import categoryData from '../../templates/lnb-category/data';
import CategoryThumnailGrid4Columns from './CategoryThumnailGrid4Columns';
import SubTabCategoryBanner01 from './SubTabCategoryBanner01';
import SubTabCategoryBanner02 from './SubTabCategoryBanner02';
import SubTabCategoryBanner03 from './SubTabCategoryBanner03';
import CategoryTab from './CategoryTab';
import { categoryDummyData } from './categoryDummyData';

export default {
  title: '유닛/카테고리',
  parameters: {
    layout: 'fullscreen',
  },
};

const commonArgTypes = {
  data: {
    control: {
      type: 'object',
    },
  },
};

export const categoryThumbnailGrid4Columns = ({ data }) => (
  <CategoryThumnailGrid4Columns data={data} />
);
categoryThumbnailGrid4Columns.storyName = '카테고리 썸네일 그리드 4컬럼';
categoryThumbnailGrid4Columns.args = {
  data: categoryData.ctgList,
};
categoryThumbnailGrid4Columns.argTypes = commonArgTypes;

const subTabCategoryBn01Data = [
  {
    id: 1,
    imgUrl: 'http://placehold.it/26x24',
    linkUrl: '',
    title: '카테고리 랭킹1카테고리카테고리',
    pathName: 'category1',
  },
  {
    id: 2,
    imgUrl: 'http://placehold.it/26x24',
    linkUrl: '',
    title: '카테고리 랭킹2',
    pathName: 'category2',
  },
  {
    id: 3,
    imgUrl: 'http://placehold.it/26x24',
    linkUrl: '',
    title: '카테고리 랭킹3',
    pathName: 'category3',
  },
  {
    id: 4,
    imgUrl: 'http://placehold.it/26x24',
    linkUrl: '',
    title: '카테고리 랭킹4',
    pathName: 'category4',
  },
  {
    id: 5,
    imgUrl: 'http://placehold.it/26x24',
    linkUrl: '',
    title: '카테고리 랭킹5',
    pathName: 'category5',
  },
];

export const subTabCategoryBn01 = ({ data, tabColor, radius, currentPathName }) => (
  <SubTabCategoryBanner01
    data={data}
    tabColor={tabColor}
    radius={radius}
    currentPathName={currentPathName}
  />
);
subTabCategoryBn01.storyName = '서브 탭 + 카테고리탭_배너형 유닛1 (모듈유닛: SUB_TAB_01)';
subTabCategoryBn01.args = {
  data: subTabCategoryBn01Data,
  tabColor: 'info-benefit',
  radius: '2xl',
  currentPathName: 'category1',
};
subTabCategoryBn01.argTypes = {
  tabColor: {
    options: ['info-benefit', '#ffae08'],
    control: { type: 'select' },
  },
  radius: {
    options: ['0', '2xl'],
    control: { type: 'select' },
  },
};

export const subTabCategoryBn02 = ({ data, tabColor, currentPathName }) => (
  <SubTabCategoryBanner02 data={data} tabColor={tabColor} currentPathName={currentPathName} />
);
subTabCategoryBn02.storyName = '서브 탭 + 카테고리탭_배너형 유닛2 (모듈유닛: SUB_TAB_02)';
subTabCategoryBn02.args = {
  data: subTabCategoryBn01Data,
  tabColor: '#ffae08',
  currentPathName: 'category1',
};
subTabCategoryBn02.argTypes = {
  tabColor: {
    options: ['info-benefit', '#ffae08'],
    control: { type: 'select' },
  },
};

export const subTabCategoryBn03 = ({ data, tabColor, currentPathName }) => (
  <SubTabCategoryBanner03 data={data} tabColor={tabColor} currentPathName={currentPathName} />
);
subTabCategoryBn03.storyName = '서브 탭 + 카테고리탭_배너형 유닛3';
subTabCategoryBn03.args = {
  data: subTabCategoryBn01Data,
  tabColor: '#f21100',
  currentPathName: 'category1',
};
subTabCategoryBn03.argTypes = {
  tabColor: {
    options: ['#f21100', '#ffae08'],
    control: { type: 'select' },
  },
};

export const categoryTab = ({ data, radius }) => {
  return <CategoryTab data={data} radius={radius} />;
};
categoryTab.storyName = '카테고리 탭 (모듈유닛: CATEGORY_TAB)';
categoryTab.args = {
  data: categoryDummyData[0],
  radius: '2xl',
};
categoryTab.argTypes = {
  radius: {
    options: ['0', '2xl'],
    control: { type: 'radio' },
  },
};
