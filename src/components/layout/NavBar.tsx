import React from 'react';
import Link from 'next/link';
import { Box, List, ListItem, Text } from '@chakra-ui/react';

import { SiteName, getHeaderBackground, getHeaderContentColor } from '../../utils';

export interface NavBarItemType {
  menuID: string;
  menuDispNm: string;
  menuType: string;
  trackingNm: string;
  pathName: string;
  isNewIcon: boolean;
  isTemplate: boolean;
}

interface Props {
  siteName: SiteName;
  data: Array<NavBarItemType>;
  currentPath: string;
}

export const NavBar = ({ siteName, data, currentPath }: Props) => {
  return (
    <Box pos="sticky" left={0} top={0} zIndex="500" w="full" {...getHeaderBackground(siteName)}>
      <nav>
        <List display="flex" overflowX="auto" overflowY="hidden" whiteSpace="nowrap">
          {data.map((item) => (
            <ListItem key={item.menuID} textAlign="center" px={3} _first={{ paddingLeft: '15px' }}>
              {/* TODO: item.trackingNm 리액팅 코드 추가 */}
              <Link href={item.isTemplate ? `/home/${item.pathName}` : '/'} passHref>
                <Box
                  as="a"
                  display="flex"
                  alignItems="center"
                  height="45px"
                  pos="relative"
                  {...(item.pathName === currentPath && {
                    fontWeight: 'bold',
                    _before: {
                      content: `""`,
                      position: 'absolute',
                      right: 0,
                      bottom: 0,
                      left: 0,
                      height: '3px',
                      background: getHeaderContentColor(siteName),
                    },
                  })}
                >
                  <Text
                    as="span"
                    color={getHeaderContentColor(siteName)}
                    fontSize="lg"
                    {...(item.isNewIcon && {
                      _after: {
                        content: `""`,
                        position: 'absolute',
                        top: '15px',
                        right: '-8px',
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        bgColor: 'primary',
                      },
                    })}
                  >
                    {item.menuDispNm}
                  </Text>
                </Box>
              </Link>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};
