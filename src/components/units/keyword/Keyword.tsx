import React, { useRef, useEffect, useState } from 'react';
import { Box, ListItem, OrderedList, Flex, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { Swiper, SwiperSlide, SwiperClass } from '../../swiper';
import { SystemIcon } from '../../icons/SystemIcon';

interface Props {
  data: {
    unitType: 'keyword';
    pageCmptId: string;
    pageId: string;
    pageSetId: string;
    reactPrefix: string;
    dataType: string;
    selectedType: string;
    selectedValue: string;
    tareaCd: string;
    cateList: {
      dt: string;
      title: string;
      type: string;
      value: string;
      rltimeSrchwdBestList: IrltimeSrchwdBestList[];
    }[];
  };
}

interface IrltimeSrchwdBestList {
  accumDgr: string;
  accumDt: string;
  bestRankg: string;
  dispCtgZoneId: string;
  siteNo: string;
  srchwd: string;
  srchwdBestTypeCd: string;
  vrbRankg: string;
}

const Keyword = ({ data }: Props) => {
  const keywordData = data.cateList[0].rltimeSrchwdBestList;
  const swiperRef = useRef(null) as unknown as React.MutableRefObject<SwiperClass>;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    swiperRef && setActiveIndex(0);
  }, [swiperRef]);

  const onSlideChange = () => {
    const swiperRefCurrent = swiperRef.current;
    setActiveIndex(swiperRefCurrent?.realIndex);
  };

  const sortKeyword = keywordData
    .map((item) => item)
    .sort((a, b) => Number(a.bestRankg) - Number(b.bestRankg));

  const chunk = (array, size) => {
    const result: Array<{ id: number; keyword: [] }> = [];
    for (let i = 0; i < array.length; i += size) {
      result.push({ id: i, keyword: array.slice(i, i + size) });
    }
    return result;
  };

  const keywordPack = chunk(sortKeyword, 5);

  return (
    <Box p="35px 7px 15px 8px">
      <Box
        p="0 10px"
        bg="line-gray-150"
        borderWidth="1px"
        borderColor="line-gray-150"
        borderRadius="lg"
      >
        <Box pt={4}>
          <Link href="/" passHref>
            <Flex as="a" fontSize="xl">
              급상승 키워드
              <SystemIcon icon="chevron_right" width={4} />
            </Flex>
          </Link>
        </Box>
        <Box py={4}>
          <Swiper
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={onSlideChange}
          >
            {keywordPack.map((keyItems) => (
              <SwiperSlide key={keyItems.id}>
                <OrderedList variant="unstyled" listStyleType="none" m={0}>
                  {keyItems.keyword.map((item: IrltimeSrchwdBestList) => {
                    const compareUpDown = item.vrbRankg.indexOf('-') > -1;

                    return (
                      <ListItem
                        key={item.bestRankg}
                        h="44px"
                        mx={3}
                        borderTop="1px solid rgba(216,216,216,0.4)"
                        _first={{ border: '0' }}
                      >
                        <Link href="/" passHref>
                          <Flex as="a" align="center" justifyContent="space-between" h="full">
                            <Box
                              as="span"
                              fontWeight="bold"
                              fontFamily="Roboto-Medium, sans-serif"
                              color="text-gray-900"
                              fontSize="md"
                            >
                              {item.bestRankg}
                            </Box>
                            <Box
                              as="span"
                              ml="13px"
                              mr="9px"
                              color="text-gray-900"
                              fontSize="md"
                              overflow="hidden"
                              textOverflow="ellipsis"
                              flex="1 1 auto"
                              d="-webkit-box"
                              style={{
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                              }}
                            >
                              {item.srchwd}
                            </Box>
                            <Flex
                              as="span"
                              pos="relative"
                              pl={2}
                              fontSize="xs"
                              color={compareUpDown ? '#22009c' : '#ff3e3e'}
                              {...(Number(item.vrbRankg) !== 0 && {
                                _before: {
                                  content: `""`,
                                  position: 'absolute',
                                  top: '5px',
                                  left: '0',
                                  borderStyle: 'solid',
                                  borderColor: 'transparent',
                                  borderWidth: `${
                                    compareUpDown ? '5px 3px 0 3px' : '0 3px 5px 3px'
                                  }`,
                                  [`${compareUpDown ? 'borderTopColor' : 'borderBottomColor'}`]: `${
                                    compareUpDown ? '#22009c' : '#ff3e3e'
                                  }`,
                                },
                              })}
                              {...(Number(item.vrbRankg) === 0 && {
                                _before: {
                                  content: `""`,
                                  display: 'block',
                                  width: '10px',
                                  height: '2px',
                                  backgroundColor: 'text-gray-600',
                                },
                              })}
                            >
                              {Number(item.vrbRankg) === 0 ? '' : Math.abs(Number(item.vrbRankg))}
                            </Flex>
                          </Flex>
                        </Link>
                      </ListItem>
                    );
                  })}
                </OrderedList>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Box pb={5}>
          <Button
            variant="unstyled"
            borderRadius="2xl"
            bg="white"
            h="35px"
            color="text-gray-900"
            fontSize="md"
            d="flex"
            alignItems="center"
            p="0 15px"
            fontWeight="normal"
            onClick={() => swiperRef.current.slideNext()}
          >
            <SystemIcon icon="arrow_clockwise" width={4} mr={1} />
            새로보기
            <Box as="span">
              <Box as="span">{activeIndex + 1}</Box>/<Box as="span">{keywordPack.length}</Box>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Keyword;
