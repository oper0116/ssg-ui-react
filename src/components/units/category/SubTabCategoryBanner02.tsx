import React from 'react';
import { Box, List, ListItem, Text, Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';

interface Props {
  data: {
    id: number;
    imgUrl: string;
    linkUrl: string;
    title: string;
    pathName: string;
  }[];
  tabColor: string;
  currentPathName: string;
}

const SubTabCategoryBanner02 = ({ data, tabColor, currentPathName }: Props) => {
  return (
    <Box py={4}>
      <List
        d="flex"
        alignItems="center"
        justifyContent="flex-start"
        flexWrap="nowrap"
        overflowX="auto"
        role="tablist"
        aria-label="카테고리 탭"
        px={4}
        style={{ gap: '3.2%' }}
      >
        {data.map((item) => (
          <ListItem key={item.id} role="presentation" maxW="60px">
            <Link href={item.linkUrl} passHref>
              <Flex
                as="a"
                align="center"
                alignContent="flex-start"
                flexWrap="wrap"
                h="114px"
                borderRadius="full"
                role="tab"
                aria-selected="false"
                {...(item.pathName === currentPathName && {
                  'aria-selected': 'true',
                  backgroundColor: tabColor,
                  color: 'black',
                })}
              >
                <Box
                  w="60px"
                  h="60px"
                  pos="relative"
                  borderRadius="full"
                  bgColor={item.pathName === currentPathName ? tabColor : '#f2f3f3'}
                  textAlign="center"
                  mb={2}
                >
                  <Image
                    src={item.imgUrl}
                    alt=""
                    loading="lazy"
                    m="auto"
                    w="40px"
                    h="40px"
                    pos="absolute"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                  />
                </Box>
                <Text
                  w="full"
                  maxW="53px"
                  m="auto"
                  fontSize="sm"
                  color="text-gray-400"
                  {...(item.pathName === currentPathName && {
                    color: 'black',
                    fontWeight: 'bold',
                  })}
                  letterSpacing="-0.3px"
                  textAlign="center"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  wordBreak="keep-all"
                  lineHeight="short"
                  d="-webkit-box"
                  style={{
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {item.title}
                </Text>
              </Flex>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SubTabCategoryBanner02;
