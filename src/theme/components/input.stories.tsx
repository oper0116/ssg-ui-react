/* eslint-disable react-hooks/rules-of-hooks */
import { IconButton, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react';
import React from 'react';
import { SystemIcon } from '../../components/icons';

export default {
  title: '디자인시스템 테마/인풋',
};

export const Default = (args) => {
  return <Input {...args} />;
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
      options: ['outline', 'filled', 'unstyled'],
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
      {['outline', 'filled', 'unstyled'].map((variant) => (
        <Input key={variant} variant={variant} placeholder={variant} />
      ))}
    </Stack>
  );
};

export const Size = () => {
  return (
    <Stack spacing={3}>
      <Input placeholder="small size" size="sm" />
      <Input placeholder="default size" size="md" />
      <Input placeholder="large size" size="lg" />
    </Stack>
  );
};

export const AddElementsInsideInput = () => {
  return (
    <InputGroup>
      <Input type="phone" placeholder="전화번호" pr={8} />
      <InputRightElement mr="-6px">
        <IconButton
          variant="unstyled"
          icon={<SystemIcon icon="search" width={6} />}
          aria-label="검색"
        />
      </InputRightElement>
    </InputGroup>
  );
};
