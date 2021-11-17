import React from 'react';
import { Box, Flex, Square, Text } from '@chakra-ui/react';
interface Props {
  data: {
    id: string;
    lnkdUrl: string;
    maiTitleNm1: string;
    maiTitleNm2: string;
    subtitlNm1: string;
    subtitlNm2: string;
    imgFileNm: string;
    banrRplcTextNm: string;
    bakgrndColrCdVal: string;
    cardRateNum: string;
    cardRateTxt: string;
  };
  reactPrefix: string;
}

const CardBannerItem = ({ data, reactPrefix }: Props) => {
  const {
    id,
    lnkdUrl,
    maiTitleNm1,
    maiTitleNm2,
    subtitlNm1,
    subtitlNm2,
    imgFileNm,
    banrRplcTextNm,
    bakgrndColrCdVal,
    cardRateNum,
    cardRateTxt,
  } = data;

  return (
    <Box
      flex="0 1 92px"
      minW="92px"
      h="140px"
      borderRadius="lg"
      bg={bakgrndColrCdVal}
      color="white"
      fontSize="md"
      letterSpacing="-0.5"
    >
      <Flex
        as="a"
        href={lnkdUrl}
        className="clickable"
        data-react-tarea={`${reactPrefix}배너_클릭|${banrRplcTextNm}_banrId=${id}`}
        p={2}
        h="100%"
        justify="space-between"
        flexDir="column"
        boxSizing="border-box"
      >
        <Flex align="center" justify="space-between" wrap="nowrap">
          <Box
            maxH="28px"
            overflow="hidden"
            _before={{
              display: 'inline-block',
              height: `28px`,
              verticalAlign: 'middle',
              content: `""`,
            }}
          >
            <Text as="strong" fontSize="5xl" wordBreak="break-all" lineHeight="1.2">
              {cardRateNum}
            </Text>
            {cardRateTxt && <Text as="span">{cardRateTxt}</Text>}
          </Box>
          <Square size={5} ml="3px">
            <img src={imgFileNm} alt={banrRplcTextNm} />
          </Square>
        </Flex>
        <Box>
          {maiTitleNm1 && (
            <Text overflow="hidden" wordBreak="break-all" whiteSpace="nowrap">
              {maiTitleNm1}
            </Text>
          )}
          {maiTitleNm2 && (
            <Text overflow="hidden" wordBreak="break-all" whiteSpace="nowrap">
              {maiTitleNm2}
            </Text>
          )}
          {subtitlNm1 && (
            <Text
              overflow="hidden"
              wordBreak="break-all"
              whiteSpace="nowrap"
              color="gray.300"
              fontSize="xs"
            >
              {subtitlNm1}
            </Text>
          )}
          {subtitlNm2 && (
            <Text
              overflow="hidden"
              wordBreak="break-all"
              whiteSpace="nowrap"
              color="gray.300"
              fontSize="xs"
            >
              {subtitlNm2}
            </Text>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default CardBannerItem;
