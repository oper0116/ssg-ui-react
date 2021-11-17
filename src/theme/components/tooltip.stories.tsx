import { Badge, HStack, Tooltip, VStack } from '@chakra-ui/react';
import React from 'react';

export default {
  title: '디자인시스템 테마/툴팁',
};

export const Default = (args) => {
  return <Tooltip {...args}>Hover me</Tooltip>;
};
Default.args = {
  label: '툴팁 내용입니다',
  'aria-label': 'A Tooltip',
  placement: 'bottom-start',
  hasArrow: true,
  isDisabled: false,
};
Default.argTypes = {
  label: {
    control: {
      type: 'text',
    },
  },
  'aria-label': {
    control: {
      type: 'text',
    },
  },
  placement: {
    control: {
      type: 'select',
      options: [
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-start',
        'bottom',
        'bottom-end',
        'left-start',
        'left',
        'left-end',
      ],
    },
  },
  hasArrow: {
    control: {
      type: 'boolean',
    },
  },
  isDisabled: {
    control: {
      type: 'boolean',
    },
  },
};

export const placement = () => {
  return (
    <VStack spacing={6}>
      <HStack shouldWrapChildren spacing={6}>
        <Tooltip hasArrow label="Auto start" placement="auto-start">
          <Badge variant="outline">Auto-Start</Badge>
        </Tooltip>

        <Tooltip hasArrow label="Auto" placement="auto">
          <Badge variant="outline">Auto</Badge>
        </Tooltip>

        <Tooltip hasArrow label="Auto end" placement="auto-end">
          <Badge variant="outline">Auto-End</Badge>
        </Tooltip>
      </HStack>

      <HStack shouldWrapChildren spacing={6}>
        <Tooltip hasArrow label="Top start" placement="top-start">
          <Badge variant="outline">Top-Start</Badge>
        </Tooltip>

        <Tooltip hasArrow label="Top" placement="top">
          <Badge variant="outline">Top</Badge>
        </Tooltip>

        <Tooltip hasArrow label="Top end" placement="top-end">
          <Badge variant="outline">Top-End</Badge>
        </Tooltip>
      </HStack>

      <HStack shouldWrapChildren spacing={6}>
        <Tooltip hasArrow label="Right start" placement="right-start">
          <Badge variant="outline">Right-Start</Badge>
        </Tooltip>

        <Tooltip hasArrow label="Right" placement="right">
          <Badge variant="outline">Right</Badge>
        </Tooltip>

        <Tooltip hasArrow label="Right end" placement="right-end">
          <Badge variant="outline">Right-End</Badge>
        </Tooltip>
      </HStack>

      <HStack shouldWrapChildren spacing={6}>
        <Tooltip hasArrow label="Bottom start" placement="bottom-start">
          <Badge variant="outline">Bottom Start</Badge>
        </Tooltip>

        <Tooltip hasArrow label="Bottom" placement="bottom">
          <Badge variant="outline">Bottom</Badge>
        </Tooltip>

        <Tooltip hasArrow label="Bottom end" placement="bottom-end">
          <Badge variant="outline">Bottom End</Badge>
        </Tooltip>
      </HStack>

      <HStack shouldWrapChildren spacing={6}>
        <Tooltip hasArrow label="Left start" placement="left-start">
          <Badge variant="outline">Left-Start</Badge>
        </Tooltip>

        <Tooltip hasArrow label="Left" placement="left">
          <Badge variant="outline">Left</Badge>
        </Tooltip>

        <Tooltip hasArrow label="Left end" placement="left-end">
          <Badge variant="outline">Left-End</Badge>
        </Tooltip>
      </HStack>
    </VStack>
  );
};
