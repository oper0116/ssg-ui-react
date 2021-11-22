import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { SiteName } from '~/utils';
import { LogoIcon, SystemIcon } from '../../../icons/';

interface Props {
  data: {
    siteNo: string;
    shppTime: string;
    lnkdUrl: string;
    msgColrCdVal: string;
    siteName: SiteName;
  };
}

const DeliveryGuideItem = ({ data }: Props) => {
  const { shppTime, lnkdUrl, msgColrCdVal, siteName } = data;

  return (
    <Flex
      as="a"
      href={lnkdUrl}
      w="100%"
      p="6px 9px 6px 6px"
      align="center"
      borderRadius="0.6em"
      backgroundImage="linear-gradient(to right, #2d2f39, #2a2929)"
    >
      <LogoIcon icon={`circle_${siteName}`} />
      <Text pl="8px" flex="1" fontSize="sm" color={msgColrCdVal}>
        {shppTime}
      </Text>
      <SystemIcon icon="chevron_right_s" color={msgColrCdVal} />
    </Flex>
  );
};

export default DeliveryGuideItem;
