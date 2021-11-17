import { Badge, HStack, Stack } from '@chakra-ui/react';
import React from 'react';

export default {
  title: '디자인시스템 테마/뱃지',
};

export const Default = (args) => {
  const { children, ...rest } = args;
  return <Badge {...rest}>{children}</Badge>;
};
Default.args = {
  variant: 'solid',
  colorScheme: 'primary',
  children: 'open',
};
Default.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['solid', 'outline', 'subtle'],
    },
  },
  colorScheme: {
    control: {
      type: 'select',
      options: ['primary', 'gray'],
    },
  },
  children: {
    control: { type: 'text' },
  },
};

export const variants = () => {
  return (
    <HStack>
      {['solid', 'outline', 'subtle'].map((variant) => (
        <Badge key={variant} variant={variant}>
          open
        </Badge>
      ))}
    </HStack>
  );
};

export const colorScheme = () => {
  return (
    <Stack>
      <HStack>
        <Badge variant="solid">open</Badge>
        <Badge variant="outline">open</Badge>
        <Badge variant="subtle">open</Badge>
      </HStack>
      <HStack>
        <Badge colorScheme="gray" variant="solid">
          open
        </Badge>
        <Badge colorScheme="gray" variant="outline">
          open
        </Badge>
        <Badge colorScheme="gray" variant="subtle">
          open
        </Badge>
      </HStack>
    </Stack>
  );
};
