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

const SubTabCategoryBanner03 = ({ data, tabColor, currentPathName }: Props) => {
  return (
    <Box py={4}>
      <List
        d="flex"
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="nowrap"
        overflowX="auto"
        role="tablist"
        aria-label="카테고리 탭"
        px={4}
        style={{ gap: '4px' }}
      >
        {data.map((item) => (
          <ListItem key={item.id} role="presentation" maxW="67px">
            <Link href={item.linkUrl} passHref>
              <Flex
                as="a"
                align="center"
                flexWrap="wrap"
                borderRadius="full"
                w="67px"
                role="tab"
                aria-selected={item.pathName === currentPathName ? 'true' : 'false'}
              >
                <Box
                  pos="relative"
                  borderRadius="full"
                  textAlign="center"
                  w="full"
                  pb="100%"
                  mb={1}
                  _after={{
                    content: `""`,
                    pos: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '61px',
                    height: '61px',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0,0,0,0.03)',
                  }}
                  {...(item.pathName === currentPathName && {
                    color: 'black',
                    _before: {
                      content: `""`,
                      width: 'full',
                      height: 'full',
                      pos: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      borderRadius: 'full',
                      border: `2px solid ${tabColor}`,
                    },
                  })}
                >
                  <Image
                    src={item.imgUrl}
                    alt=""
                    loading="lazy"
                    w="61px"
                    h="61px"
                    m="auto"
                    p="2px"
                    pos="absolute"
                    left="50%"
                    top="50%"
                    borderRadius="full"
                    objectFit="cover"
                    transform="translate(-50%,-50%)"
                  />
                </Box>
                <Text
                  w="full"
                  m="auto"
                  fontSize="xs"
                  color="text-gray-800"
                  {...(item.pathName === currentPathName && {
                    color: tabColor,
                    fontWeight: 'bold',
                  })}
                  letterSpacing="-0.5px"
                  textAlign="center"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  lineHeight="short"
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

export default SubTabCategoryBanner03;
