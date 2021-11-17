import React from 'react';
import { HStack } from '@chakra-ui/react';

import CardBannerItem from './CardBannerItem';
import CardBannerSingleItem from './CardBannerSingleItem';

interface Props {
  data: {
    reactPrefix: string;
    banrList: Array<any>;
    subtitlNm1: string;
    subtitlNm2: string;
  };
}

export const CardBanner02 = ({ data }: Props) => {
  const { reactPrefix, banrList, subtitlNm1, subtitlNm2 } = data;

  return (
    <HStack overflowX="auto" spacing={2} p={4} alignItems="stretch">
      {banrList?.map((bannerData) => {
        return <CardBannerItem key={bannerData.id} data={bannerData} reactPrefix={reactPrefix} />;
      })}
      {banrList?.length <= 2 && (
        <CardBannerSingleItem subtitle1={subtitlNm1} subtitle2={subtitlNm2} />
      )}
    </HStack>
  );
};
