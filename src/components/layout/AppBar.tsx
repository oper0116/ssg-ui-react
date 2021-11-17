import React from 'react';
import { Box, Flex, Link, Text, Image } from '@chakra-ui/react';
import { IconType, SystemIcon } from '../icons';

const appBarItems = [
  {
    id: 'category',
    dispNm: '카테고리',
    iconNm: 'category',
    path: '/lnb-category',
  },
  {
    id: 'search',
    dispNm: '통합검색',
    iconNm: 'search',
    // TODO: Header의 자동완성 연결로 변경
    path: '/',
  },
  {
    id: 'home',
    dispNm: '홈',
    iconNm: 'house',
    path: '/',
  },
  {
    id: 'my',
    dispNm: 'MY',
    iconNm: 'person',
    path: '/',
  },
  {
    id: 'recent',
    dispNm: '최근본',
    iconNm: 'eye',
    path: '/',
  },
];

interface Props {
  recentViewItem?: {
    imgUrl: string;
    path: string;
  };
}

const AppBar = ({ recentViewItem }: Props) => {
  const filteredAppBarItems = recentViewItem
    ? appBarItems.filter((item) => item.id !== 'recent')
    : appBarItems;

  return (
    <Box
      zIndex="sticky"
      pos="fixed"
      left={0}
      bottom={0}
      w="full"
      bg="line-gray-100"
      boxShadow="0 -1px 4px 0 rgb(0 0 0 / 5%), inset 0 1px 0 0 #fff"
      boxSizing="border-box"
    >
      <Flex justifyContent="space-between" h="50px">
        {filteredAppBarItems.map(({ id, dispNm, iconNm, path }) => (
          <Link
            href={path}
            key={id}
            d="flex"
            flex={1}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            _hover={{ textDecoration: 'none' }}
          >
            <SystemIcon icon={iconNm as IconType} color="black" width={7} />
            <Text as="span" fontSize="3xs" color="black" opacity="0.45">
              {dispNm}
            </Text>
          </Link>
        ))}
        {recentViewItem && (
          <Link
            href={recentViewItem.path}
            d="flex"
            flex={1}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              w="37px"
              h="37px"
              borderRadius="8px"
              pos="relative"
              overflow="hidden"
              _after={{
                content: `""`,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                boxShadow: 'inset 0 0 4px rgb(0 0 0 / 10%)',
              }}
            >
              <Image src={recentViewItem.imgUrl} alt="최근 본 상품 이미지" />
            </Box>
          </Link>
        )}
      </Flex>
    </Box>
  );
};

export default AppBar;
