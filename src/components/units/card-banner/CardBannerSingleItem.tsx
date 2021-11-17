import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { SystemIcon } from '../../icons';

interface Props {
  subtitle1: string;
  subtitle2: string;
}
const CardBannerSingleItem = ({ subtitle1, subtitle2 }: Props) => {
  return (
    <Box
      flex="1 1 92px"
      minW="92px"
      maxW="215px"
      borderRadius="lg"
      bgColor="line-gray-150"
      p="14px 10px 10px"
      boxSizing="border-box"
    >
      <Flex justify="space-between">
        <SystemIcon icon="card_chip" w="35px" h="31px" />
        <SystemIcon icon="card_promotion" w="23px" h="68px" />
      </Flex>
      <Text
        color="text-gray-700"
        fontSize="md"
        fontWeight="500"
        whiteSpace="nowrap"
        overflow="hidden"
        letterSpacing="-0.3px"
      >
        {subtitle1 || 'SSG만의'}
      </Text>
      <Text
        color="text-gray-700"
        fontSize="md"
        fontWeight="500"
        whiteSpace="nowrap"
        overflow="hidden"
        letterSpacing="-0.3px"
      >
        {subtitle2 || '특별한 혜택'}
      </Text>
    </Box>
  );
};

export default CardBannerSingleItem;
