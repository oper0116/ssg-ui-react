/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Button, ButtonGroup, HStack, IconButton, Stack } from '@chakra-ui/react';
import { SystemIcon } from '../../components/icons';

export default {
  title: '디자인시스템 테마/버튼',
};

export const Default = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};
Default.args = {
  variant: 'solid',
  colorScheme: 'primary',
  size: 'md',
  isFullWidth: false,
  children: '버튼명',
};
Default.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['solid', 'outline', 'link'],
    },
  },
  colorScheme: {
    control: {
      type: 'select',
      options: ['primary', 'gray', 'black'],
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
  },
  isFullWidth: {
    control: { type: 'boolean' },
  },
  children: {
    control: { type: 'text' },
  },
};

export const variants = () => {
  return (
    <HStack>
      {['solid', 'outline', 'link'].map((variant) => (
        <Button key={variant} variant={variant}>
          버튼
        </Button>
      ))}
    </HStack>
  );
};

export const ColorScheme = () => {
  return (
    <Stack>
      {['primary', 'gray', 'black'].map((colorScheme) => (
        <HStack key={colorScheme}>
          {['solid', 'outline', 'link'].map((variant) => (
            <Button key={variant} colorScheme={colorScheme} variant={variant}>
              버튼
            </Button>
          ))}
        </HStack>
      ))}
    </Stack>
  );
};

export const Size = () => {
  return (
    <Stack>
      {['xs', 'sm', 'md', 'lg'].map((size) => (
        <HStack key={size}>
          {['solid', 'outline', 'link'].map((variant) => (
            <Button key={variant} size={size} variant={variant}>
              버튼
            </Button>
          ))}
        </HStack>
      ))}
    </Stack>
  );
};

export const isFullWidth = () => {
  return (
    <Stack>
      {['xs', 'sm', 'md', 'lg'].map((size) => (
        <Button key={size} size={size}>
          버튼
        </Button>
      ))}
      <Button variant="outline" colorScheme="gray" size="md" borderRadius="md" isFullWidth>
        더보기 <SystemIcon icon="chevron_down_s" width={5} />
      </Button>
    </Stack>
  );
};
isFullWidth.storyName = 'isFullWidth';

export const buttonWithIcon = () => {
  return (
    <HStack>
      <Button
        leftIcon={<SystemIcon icon="plusmark" width={4} />}
        colorScheme="gray"
        variant="outline"
      >
        버튼
      </Button>
      <Button
        rightIcon={<SystemIcon icon="plusmark" width={4} />}
        colorScheme="gray"
        variant="outline"
      >
        버튼
      </Button>
    </HStack>
  );
};

export const buttonLoadingState = () => {
  return (
    <HStack>
      <Button isLoading colorScheme="primary" variant="solid">
        주문하기
      </Button>
      <Button isLoading loadingText="주문 중" colorScheme="primary" variant="outline">
        주문하기
      </Button>
    </HStack>
  );
};

export const iconButton = () => {
  return (
    <HStack>
      <IconButton
        variant="outline"
        colorScheme="gray"
        aria-label="버튼명"
        icon={<SystemIcon icon="plusmark" width={4} />}
      />
    </HStack>
  );
};
iconButton.storyName = 'IconButton';

export const groupingButtons = () => {
  return (
    <Stack>
      <ButtonGroup variant="solid">
        <Button>저장</Button>
        <Button colorScheme="gray">취소</Button>
      </ButtonGroup>
      <ButtonGroup variant="solid" spacing={0}>
        <Button isFullWidth colorScheme="gray">
          취소
        </Button>
        <Button isFullWidth>저장</Button>
      </ButtonGroup>
    </Stack>
  );
};
groupingButtons.storyName = 'ButtonGroup';

export const customButton = () => {
  return (
    <Box
      as="button"
      height="60px"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      px="20px"
      fontSize="20px"
      fontWeight="semibold"
      bg="#f5f6f7"
      borderColor="#ccd0d5"
      color="#4b4f56"
      _hover={{ bg: '#ebedf0' }}
      _active={{
        bg: '#dddfe2',
        transform: 'scale(0.98)',
        borderColor: '#bec3c9',
      }}
      _focus={{
        boxShadow: 'none',
      }}
    >
      커스텀 버튼 예시
    </Box>
  );
};
