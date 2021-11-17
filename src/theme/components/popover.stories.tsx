/* eslint-disable react-hooks/rules-of-hooks */
import {
  Button,
  ButtonGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react';
import React from 'react';

export default {
  title: '디자인시스템 테마/팝오버',
};

export const Default = () => {
  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Button variant="link" colorScheme="black">
          팝오버 열기
        </Button>
      </PopoverTrigger>
      <PopoverContent zIndex={4}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>팝오버 헤더</PopoverHeader>
        <PopoverBody>팝오버 컨텐츠</PopoverBody>
        <PopoverFooter>팝오버 푸터</PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export const popoverWithPotal = () => {
  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Button variant="link" colorScheme="black">
          팝오버 열기
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>팝오버 헤더</PopoverHeader>
          <PopoverBody>팝오버 컨텐츠</PopoverBody>
          <PopoverFooter>팝오버 푸터</PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export const focusAnElementWhenPopoverOpens = () => {
  const initialFocusRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Popover initialFocusRef={initialFocusRef} placement="bottom-start" closeOnBlur={false}>
      <PopoverTrigger>
        <Button variant="link" colorScheme="black">
          팝오버 열기
        </Button>
      </PopoverTrigger>
      <PopoverContent pb={0}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>팝오버 헤더</PopoverHeader>
        <PopoverBody>팝오버 컨텐츠를 마음껏 구성합니다.</PopoverBody>
        <PopoverFooter px={0} pb={0}>
          <ButtonGroup d="flex" spacing={0}>
            <Button isFullWidth colorScheme="gray" borderBottomLeftRadius="lg">
              취소
            </Button>
            <Button ref={initialFocusRef} isFullWidth borderBottomRightRadius="lg">
              다음
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
