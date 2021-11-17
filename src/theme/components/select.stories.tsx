import { Select, Stack } from '@chakra-ui/react';
import React from 'react';

export default {
  title: '디자인시스템 테마/셀렉트',
};

export const Default = (args) => {
  return (
    <Select {...args}>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
};
Default.args = {
  variant: 'outline',
  size: 'md',
  placeholder: '플레이스 홀더',
};
Default.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['outline', 'filled', 'flushed', 'unstyled'],
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  placeholder: {
    control: { type: 'text' },
  },
};

export const variants = () => {
  return (
    <Stack>
      {['outline', 'filled', 'flushed', 'unstyled'].map((variant) => (
        <Select key={variant} placeholder={variant} variant={variant}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      ))}
    </Stack>
  );
};

export const Size = () => {
  return (
    <Stack>
      {['sm', 'md', 'lg'].map((size) => (
        <Select key={size} placeholder="Select option" size={size}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      ))}
    </Stack>
  );
};
