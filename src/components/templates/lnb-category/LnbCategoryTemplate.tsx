import React from 'react';

import { StackDivider, VStack } from '@chakra-ui/react';
import SectionTitleUnit from '../../units/title/SectionTitleUnit';
import QuickLinkGrid3Columns from '../../units/quick-links/QuickLinkGrid3Columns';
import QuickLinkGrid5Columns from '../../units/quick-links/QuickLinkGrid5Columns';
import CategoryThumnailGrid4Columns from '../../units/category/CategoryThumnailGrid4Columns';
import BannerGridRow from '../../units/banner/BannerGridRow';
import { Banner, CategoryBannerList, CornerBannerUnit } from '~/../@types/mapi';

interface Props {
  data: {
    siteNo?: string;
    ctgList?: Array<CategoryBannerList>;
    shopBannerList?: Array<CornerBannerUnit>;
    killerBannerList?: Array<Banner>;
    themeShopGrid?: {
      reactPrefix: string;
      maiTitleNm1: string;
      maiTitleNm2: string;
      lnkdUrl: string;
      banrList: Array<CornerBannerUnit>;
    };
  };
}

const LnbCategory = ({ data }: Props) => {
  const { ctgList, killerBannerList, shopBannerList, themeShopGrid } = data;

  return (
    <VStack spacing={0} divider={<StackDivider borderWidth="15px" />} align="stretch">
      {/* 카테고리 */}
      {ctgList && (
        <>
          {ctgList.every((group) => group.ctgList !== null) ? (
            ctgList.map((group, index) => (
              <div key={index}>
                <SectionTitleUnit
                  data={{
                    maiTitleNm1: group.dispCtgNm,
                  }}
                  mb="-10px"
                />
                <CategoryThumnailGrid4Columns
                  data={group.ctgList.map((item) => ({
                    ...item,
                    dataReactTarea: `카테고리_LNB|전시_카테고리|${item.dispCtgNm}`,
                  }))}
                />
              </div>
            ))
          ) : (
            <CategoryThumnailGrid4Columns
              data={ctgList.map((item) => ({
                ...item,
                dataReactTarea: `카테고리_LNB|전시_카테고리|${item.dispCtgNm}`,
              }))}
            />
          )}
        </>
      )}

      {/* 전략 카테고리 */}
      {killerBannerList && (
        <BannerGridRow
          data={killerBannerList.map((item) => ({
            ...item,
            dataReactTarea: `카테고리_LNB|킬러코너|배너_선택|${item.title}`,
          }))}
        />
      )}

      {/* 공식스토어 */}
      {themeShopGrid && (
        <div>
          <SectionTitleUnit
            data={{
              maiTitleNm1: themeShopGrid.maiTitleNm1,
              maiTitleNm2: themeShopGrid.maiTitleNm2,
              reactPrefix: themeShopGrid.reactPrefix,
              lnkdUrl: '/special',
            }}
          />
          <QuickLinkGrid3Columns data={themeShopGrid.banrList} />
        </div>
      )}

      {/* 서비스 추천 */}
      {shopBannerList && (
        <div>
          <SectionTitleUnit
            data={{
              maiTitleNm1: '서비스 추천',
            }}
          />
          <QuickLinkGrid5Columns
            data={shopBannerList.map((item) => ({
              ...item,
              linkReactTarea: `카테고리_LNB|추천서비스|배너_선택|${item.title}`,
            }))}
          />
        </div>
      )}
    </VStack>
  );
};

export default LnbCategory;
