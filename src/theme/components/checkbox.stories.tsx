import { Checkbox, CheckboxGroup, HStack, Stack } from '@chakra-ui/react';
import React from 'react';

export default {
  title: '디자인시스템 테마/체크박스',
};

export const Default = (args) => {
  const { children, ...rest } = args;
  return (
    <Checkbox defaultIsChecked {...rest}>
      {children}
    </Checkbox>
  );
};
Default.args = {
  value: '',
  colorScheme: 'primary',
  size: 'md',
  children: '체크박스',
};
Default.argTypes = {
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
  children: {
    control: { type: 'text' },
  },
};

export const isDisabled = () => {
  return (
    <HStack>
      <Checkbox isDisabled>체크박스</Checkbox>
      <Checkbox isDisabled defaultIsChecked>
        체크박스
      </Checkbox>
    </HStack>
  );
};
isDisabled.storyName = 'isDisabled';

export const Size = () => {
  return (
    <Stack>
      {['sm', 'md', 'lg'].map((size) => (
        <Checkbox key={size} size={size} defaultIsChecked>
          체크박스
        </Checkbox>
      ))}
    </Stack>
  );
};

export const checkboxGroup = () => {
  return (
    <CheckboxGroup defaultValue={['1', '3']}>
      <HStack spacing={5}>
        <Checkbox value="1">체크박스1</Checkbox>
        <Checkbox value="2">체크박스2</Checkbox>
        <Checkbox value="3">체크박스3</Checkbox>
      </HStack>
    </CheckboxGroup>
  );
};
checkboxGroup.storyName = 'CheckboxGroup';
