/* eslint-disable react/prop-types */
import React from 'react';
import QuickLinkGrid3Columns from './QuickLinkGrid3Columns';
import QuickLinkGrid4Columns from './QuickLinkGrid4Columns';
import QuickLinkGrid5Columns from './QuickLinkGrid5Columns';
import QuickLinkGrid1RowsSwipe from './QuickLinkGrid1RowsSwipe';
import QuickLinkGrid2RowsSwipe from './QuickLinkGrid2RowsSwipe';
import categoryData from '../../templates/lnb-category/data';
import SectionTitleUnit from '../title/SectionTitleUnit';

export default {
  title: '유닛/퀵링크',
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

export const quickLinkGrid3Columns = ({ data }) => (
  <QuickLinkGrid3Columns data={data.banrList} reactPrefix={data.reactPrefix} />
);
quickLinkGrid3Columns.storyName = '퀵링크 그리드 3컬럼';
quickLinkGrid3Columns.args = {
  data: categoryData.themeShopGrid,
};
quickLinkGrid3Columns.argTypes = commonArgTypes;

export const quickLinkGrid3ColumnsWithTitle = ({
  data: { maiTitleNm1, maiTitleNm2, reactPrefix, banrList },
}) => (
  <div>
    <SectionTitleUnit
      data={{
        maiTitleNm1,
        maiTitleNm2,
        reactPrefix,
        lnkdUrl: '/special',
      }}
    />
    <QuickLinkGrid3Columns data={banrList} reactPrefix={reactPrefix} />
  </div>
);
quickLinkGrid3ColumnsWithTitle.storyName =
  '퀵링크 그리드 3컬럼 + 기본 섹션 타이틀바 (모듈유닛: QUICK_GRID_BANNER)';
quickLinkGrid3ColumnsWithTitle.args = {
  data: categoryData.themeShopGrid,
};
quickLinkGrid3ColumnsWithTitle.argTypes = commonArgTypes;

export const quickLinkGrid4Columns = ({ data }) => <QuickLinkGrid4Columns data={data} />;
quickLinkGrid4Columns.storyName = '퀵링크 그리드 4컬럼 (모듈유닛: QUICK_4COLUMN_BANR)';
quickLinkGrid4Columns.args = {
  data: categoryData.shopBannerList,
};
quickLinkGrid4Columns.argTypes = commonArgTypes;

export const quickLinkGrid5Columns = ({ data }) => <QuickLinkGrid5Columns data={data} />;
quickLinkGrid5Columns.storyName = '퀵링크 그리드 5컬럼 (모듈유닛: QUICK_LINK_OPEN)';
quickLinkGrid5Columns.args = {
  data: categoryData.shopBannerList,
};
quickLinkGrid5Columns.argTypes = commonArgTypes;

export const quickLinkGrid5ColumnsMore = ({ data }) => (
  <QuickLinkGrid5Columns data={data} limitRows={3} />
);
quickLinkGrid5ColumnsMore.storyName = '퀵링크 그리드 5컬럼 + 더보기 (모듈유닛: QUICK_HORI_BANNER)';
quickLinkGrid5ColumnsMore.args = {
  data: categoryData.shopBannerList,
};
quickLinkGrid5ColumnsMore.argTypes = commonArgTypes;

export const quickLinkGrid1RowsSwipe = ({ data }) => <QuickLinkGrid1RowsSwipe data={data} />;
quickLinkGrid1RowsSwipe.storyName = '퀵링크 그리드 1로우 스와이프';
quickLinkGrid1RowsSwipe.args = {
  data: {},
};
quickLinkGrid1RowsSwipe.argTypes = commonArgTypes;

export const quickLinkGrid2RowsSwipe = ({ data }) => <QuickLinkGrid2RowsSwipe data={data} />;
quickLinkGrid2RowsSwipe.storyName = '퀵링크 그리드 2로우 스와이프 (모듈유닛: QUICK_2ROW_SWIPE)';
quickLinkGrid2RowsSwipe.args = {
  data: {},
};
quickLinkGrid2RowsSwipe.argTypes = commonArgTypes;
