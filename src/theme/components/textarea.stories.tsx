import { Textarea } from '@chakra-ui/react';
import React from 'react';

export default {
  title: '디자인시스템 테마/Textarea',
};

export const Default = (args) => {
  return <Textarea {...args} />;
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

export const isDisabled = () => {
  return <Textarea isDisabled placeholder="플레이스 홀더" />;
};
isDisabled.storyName = 'isDisabled';
