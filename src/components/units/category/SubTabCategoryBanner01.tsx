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
  radius: string;
  currentPathName: string;
}

const SubTabCategoryBanner01 = ({ data, tabColor, radius, currentPathName }: Props) => {
  return (
    <Box py={4}>
      <List
        d="flex"
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="nowrap"
        overflowX="auto"
        role="tablist"
        aria-label="랭킹탭"
        px={4}
        style={{ gap: '2.9%' }}
      >
        {data.map((item) => (
          <ListItem key={item.id} role="presentation" minW="60px">
            <Link href={item.linkUrl} passHref>
              <Flex
                as="a"
                align="center"
                alignContent="center"
                flexWrap="wrap"
                h="87px"
                backgroundColor="#f2f3f3"
                borderRadius={radius}
                role="tab"
                aria-selected="false"
                {...(item.pathName === currentPathName && {
                  'aria-selected': 'true',
                  color: tabColor,
                  boxShadow: '0px 0px 0px 3px inset',
                  backgroundColor: 'white',
                })}
              >
                <Box w="full" textAlign="center" mb={2}>
                  <Image src={item.imgUrl} alt="" loading="lazy" m="auto" />
                </Box>
                <Text
                  w="full"
                  maxW="70px"
                  m="auto"
                  fontSize="md"
                  color="black"
                  letterSpacing="-0.3px"
                  textAlign="center"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  wordBreak="keep-all"
                  lineHeight="base"
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

export default SubTabCategoryBanner01;
