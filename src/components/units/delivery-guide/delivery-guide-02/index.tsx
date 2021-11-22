import React from 'react';
import { Box, Flex, Text, VStack, useDisclosure, Fade } from '@chakra-ui/react';
import { IconType, LogoIcon, SystemIcon, SystemIconProps } from '../../../icons';
import DeliveryGuideItem from './DeliveryGuideItem';
import { motion } from 'framer-motion';
import { SiteName } from '~/utils';

interface IShippingTimeItem {
  siteNo: string;
  shppTime: string;
  lnkdUrl: string;
  msgColrCdVal: string;
  siteName: SiteName;
}

interface Props {
  data: {
    reactPrefix: string;
    shpplocListUrl: string;
    foldBtnTxt: string;
    shpplocListBtnTxt: string;
    shppTimeList: Array<IShippingTimeItem>;
  };
}

const DeliveryGuide02 = ({ data }: Props) => {
  const { reactPrefix, shpplocListUrl, foldBtnTxt, shpplocListBtnTxt, shppTimeList } = data;
  const { isOpen, onToggle } = useDisclosure();

  // framer-motion props 사용하기 위한 컴포넌트
  const MotionIcon = motion<SystemIconProps<IconType>>(SystemIcon);
  const rotateVariants = {
    open: { rotate: 180 },
    close: { rotate: 360, transition: { from: 180 } },
  };
  const translateVariants = {
    open: { translateX: 0, transition: { from: 'calc(100% + 30px)' } },
    close: { translateX: 'calc(100% + 30px)' },
  };

  const { shppTime, lnkdUrl, msgColrCdVal, siteName }: IShippingTimeItem = shppTimeList[0];
  const isSingleItem = shppTimeList.length === 1;

  return (
    <>
      <Flex pos="relative" h="42px" px="15px" bgColor="#222" textColor="white" align="center">
        <Box
          as={isSingleItem ? 'div' : 'button'}
          onClick={isSingleItem ? undefined : onToggle}
          fontSize="xs"
          fontWeight="bold"
          whiteSpace="nowrap"
          flex="none"
        >
          {foldBtnTxt}
          {!isSingleItem && (
            <MotionIcon
              icon="caret_down_s"
              display="inline-block"
              width="10px"
              h="10px"
              animate={isOpen ? 'open' : 'close'}
              variants={rotateVariants}
            />
          )}
        </Box>
        <Fade in={!isOpen} unmountOnExit={true}>
          <Flex as="a" px="8px" mr="28px" href={lnkdUrl} align="center">
            <LogoIcon icon={`circle_${siteName}`} />
            <Text pl="8px" fontSize="xs" color={msgColrCdVal}>
              {shppTime}
            </Text>
          </Flex>
        </Fade>
        <Flex
          as="a"
          pos="absolute"
          right="15px"
          href={shpplocListUrl}
          className="clickable"
          data-react-tarea={`${reactPrefix}배송지변경_클릭`}
        >
          <Box as="span" pos="absolute" w="100%" h="100%" top="-2px" left="-30px">
            <MotionIcon
              icon="truck_gear"
              display="inline-block"
              animate={isOpen ? 'open' : 'close'}
              variants={translateVariants}
            />
          </Box>
          <Fade in={isOpen} unmountOnExit={false}>
            <Text as="span" fontSize="xs" verticalAlign="middle">
              {shpplocListBtnTxt}
            </Text>
          </Fade>
        </Flex>
      </Flex>
      {isOpen && (
        <VStack p="0 10px 14px" bgColor="#222" textColor="white" spacing="8px">
          {shppTimeList?.map((shppTimeData) => {
            return <DeliveryGuideItem key={shppTimeData.siteNo} data={shppTimeData} />;
          })}
        </VStack>
      )}
    </>
  );
};

export default DeliveryGuide02;
