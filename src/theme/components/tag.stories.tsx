/* eslint-disable react/prop-types */
import { HStack, Stack, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import React from 'react';

export default {
  title: '디자인시스템 테마/태그',
};

export const Default = ({ children, ...rest }) => <Tag {...rest}>{children}</Tag>;
Default.args = {
  variant: 'solid',
  colorScheme: 'primary',
  size: 'sm',
  textTransform: 'none',
  children: 'open',
};
Default.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['solid', 'subtle', 'outline'],
    },
  },
  colorScheme: {
    control: {
      type: 'select',
      options: ['primary', 'gray'],
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  textTransform: {
    control: {
      type: 'select',
      options: ['none', 'uppercase', 'lowercase'],
    },
  },
  children: {
    control: { type: 'text' },
  },
};

export const Variants = () => {
  return (
    <HStack>
      {['solid', 'outline', 'subtle'].map((variant) => (
        <Tag key={variant} variant={variant}>
          태그
        </Tag>
      ))}
    </HStack>
  );
};

export const ColorScheme = () => {
  return (
    <Stack>
      {['primary', 'gray'].map((colorScheme) => (
        <HStack key={colorScheme}>
          {['solid', 'outline', 'subtle'].map((variant) => (
            <Tag key={variant} colorScheme={colorScheme} variant={variant}>
              태그
            </Tag>
          ))}
        </HStack>
      ))}
    </Stack>
  );
};

export const Size = () => {
  return (
    <Stack>
      {['sm', 'md', 'lg'].map((size) => (
        <HStack key={size}>
          {['solid', 'outline', 'subtle'].map((variant) => (
            <Tag key={variant} size={size} variant={variant}>
              태그
            </Tag>
          ))}
        </HStack>
      ))}
    </Stack>
  );
};

export const tagWithCloseButton = () => {
  return (
    <HStack>
      {['sm', 'md', 'lg'].map((size) => (
        <Tag size={size} key={size} borderRadius="full" variant="subtle" colorScheme="gray">
          <TagLabel>Green</TagLabel>
          <TagCloseButton />
        </Tag>
      ))}
    </HStack>
  );
};
