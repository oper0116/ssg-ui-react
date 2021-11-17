import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  List,
  ListItem,
  Portal,
  Text,
} from '@chakra-ui/react';

import { SystemIcon } from '../../icons';
import useDebounce from '../../../hooks/useDebounce';
import { SiteName, getHeaderBackground, getHeaderContentColor } from '../../../utils';

interface Props {
  siteName: SiteName;
  handleSearchLayer: (type: boolean) => void;
  onSearchKeyword?: (keyword: string) => void;
  resetKeyword?: () => void;
  topKeywords?: { keyword: string; count: number; site: string }[];
  shortcut?: {
    banrUrl: string;
    count: number;
    linkName: string;
    linkUrl: string;
    mediaCd: string;
    site: string;
  }[];
  gnbBgImgTheme?: any;
}

const SearchLayer = ({
  siteName,
  onSearchKeyword,
  resetKeyword,
  topKeywords,
  shortcut,
  handleSearchLayer,
}: Props) => {
  const [keyword, setKeyword] = useState<string>('');

  const searchInputRef = useRef<HTMLInputElement>(null);

  const debouncedKeyword = useDebounce<string>(keyword, 250);

  const updateField = (value): void => {
    setKeyword(value);
  };

  const resetField = (): void => {
    setKeyword('');
    if (resetKeyword) {
      resetKeyword();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (searchInputRef.current !== null) {
        searchInputRef.current.focus();
      }
    }, 0);
  }, [searchInputRef]);

  useEffect(() => {
    if (debouncedKeyword && onSearchKeyword) {
      onSearchKeyword(debouncedKeyword);
    }
  }, [debouncedKeyword, onSearchKeyword]);

  return (
    <Portal>
      <Box pos="fixed" left={0} top={0} bg="white" w="full" h="full" zIndex="overlay">
        {/* 검색영역, 장바구니 */}
        <Flex py={2} {...getHeaderBackground(siteName)}>
          <IconButton
            variant="unstyled"
            icon={<SystemIcon icon="chevron_left" width={6} ml="6px" />}
            aria-label="이전"
            onClick={() => handleSearchLayer(false)}
            color={getHeaderContentColor(siteName)}
          />
          <Box flex="1">
            <InputGroup>
              <Input
                variant="filled"
                borderRadius="full"
                pr={8}
                placeholder="검색어를 입력하세요"
                value={keyword || ''}
                onChange={(e) => updateField(e.target.value)}
                ref={searchInputRef}
              />
              <InputRightElement>
                {searchInputRef.current !== null && searchInputRef.current.value.length > 0 ? (
                  <IconButton
                    variant="unstyled"
                    icon={
                      <SystemIcon icon="close_circle" width={6} ml="6px" color="text-gray-700" />
                    }
                    aria-label="삭제"
                    onClick={resetField}
                  />
                ) : (
                  <IconButton
                    variant="unstyled"
                    icon={<SystemIcon icon="search" width={6} ml="6px" color="text-gray-700" />}
                    aria-label="검색"
                  />
                )}
              </InputRightElement>
            </InputGroup>
          </Box>
          <Box>
            <Flex as="a" href="#" px={2} h="40px">
              <SystemIcon icon="cart" width={6} />
            </Flex>
          </Box>
        </Flex>

        {/* 공식스토어 바로가기 */}
        {shortcut && shortcut.length > 0 && (
          <Box h="50px" mx={4} mt="16px" borderWidth="1px" borderColor="gray.200" borderRadius={4}>
            <Link
              href={shortcut[0].linkUrl}
              isExternal
              h="full"
              p={2}
              fontSize="lg"
              display="flex"
              align="center"
              pl="40px"
              pos="relative"
            >
              <SystemIcon
                icon="market"
                color="black"
                w={5}
                pos="absolute"
                left="10px"
                top="50%"
                transform="translateY(-50%)"
              />

              <strong style={{ alignSelf: 'center' }}>{shortcut[0].linkName}</strong>
            </Link>
          </Box>
        )}

        {/* 자동완성 리스트 */}
        {topKeywords && topKeywords.length > 1 && (
          <Box p={4}>
            <List>
              {topKeywords.map(({ keyword }, index: number) => {
                return (
                  <ListItem
                    key={index}
                    h="40px"
                    borderBottom="1px"
                    borderColor="gray.200"
                    pos="relative"
                  >
                    <Flex as="a" align="center" w="full" h="full" fontSize="md">
                      {keyword
                        .split(new RegExp(`(${keyword})`, 'gi'))
                        .map((s: string, i: number) => {
                          return (
                            <Text
                              key={i}
                              color={s === keyword ? 'common-search-highlight' : 'black'}
                              whiteSpace="pre"
                              _hover={{
                                textDecoration: 'none',
                              }}
                            >
                              {s}
                            </Text>
                          );
                        })}
                      <SystemIcon
                        icon="arrow_top"
                        color="text-gray-400"
                        width={4}
                        transform="rotate(-45deg)"
                        pos="absolute"
                        right={0}
                      />
                    </Flex>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        )}

        {/* 최근검색어 */}
        <Box mt={4} px={4}>
          <Heading as="h3" fontSize="md">
            최근검색어
          </Heading>
          <List mt={1} fontSize="md" display="flex" flexWrap="wrap">
            {[
              '일이삼사오육칠팔구십십일이십삼',
              '우유',
              '고메버터',
              '이즈니버터',
              '아로마티카',
              '탈취제',
              '분리수거',
              '우아미가구',
            ].map((item) => (
              <ListItem
                key={item}
                flex="1 1 50%"
                pos="relative"
                pr={4}
                borderBottom="1px"
                borderColor="line-gray-200"
                _even={{ marginLeft: '8px', width: 'calc(50% - 8px)', maxWidth: 'calc(50% - 8px)' }}
                _odd={{ marginRight: '7px', width: 'calc(50% - 7px)', maxWidth: 'calc(50% - 7px)' }}
              >
                <Link
                  display="block"
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                  py={3}
                >
                  {item}
                </Link>
                <IconButton
                  pos="absolute"
                  right={0}
                  top={0}
                  minW="auto"
                  minH="auto"
                  w="18px"
                  h="full"
                  variant="unstyled"
                  icon={<SystemIcon icon="close" width={3} m="auto" color="text-gray-400" />}
                  aria-label="삭제"
                />
              </ListItem>
            ))}
          </List>
          <Box align="right" mt={3} px={4}>
            <Button
              variant="unstyled"
              color="text-gray-500"
              h="auto"
              minH="auto"
              fontWeight="normal"
              fontSize="xs"
            >
              검색어 전체삭제
            </Button>
          </Box>
        </Box>

        {/* 최근검색어 없음 */}
        <Box align="center">
          <SystemIcon icon="imark_circle" color="text-gray-400" width={10} mb={2} />
          <Text fontSize="xl" color="text-gray-500">
            최근 검색어가 없습니다.
          </Text>
        </Box>
      </Box>
    </Portal>
  );
};

export default SearchLayer;
