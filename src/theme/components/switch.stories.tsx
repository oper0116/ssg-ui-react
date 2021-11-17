import { Flex, FormControl, FormLabel, HStack, Switch } from '@chakra-ui/react';
import React from 'react';

export default {
  title: '디자인시스템 테마/스위치',
};

export const Default = (args) => {
  const { label, ...rest } = args;
  return (
    <FormControl as={Flex} align="center">
      {label && (
        <FormLabel htmlFor="switch-id" my={0} mr={2}>
          {label}
        </FormLabel>
      )}
      <Switch id="switch-id" defaultIsChecked {...rest} />
    </FormControl>
  );
};
Default.args = {
  label: '레이블',
  value: '',
  colorScheme: 'primary',
  size: 'sm',
};
Default.argTypes = {
  label: {
    control: { type: 'text' },
  },
  value: {
    control: { type: 'text' },
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
};

export const isChecked = () => {
  return <Switch isChecked />;
};
isChecked.storyName = 'isChecked';

export const isDisabled = () => {
  return <Switch isDisabled />;
};
isDisabled.storyName = 'isDisabled';

export const Size = () => {
  return (
    <HStack>
      {['sm', 'md', 'lg'].map((size) => (
        <Switch key={size} size={size} />
      ))}
    </HStack>
  );
};
