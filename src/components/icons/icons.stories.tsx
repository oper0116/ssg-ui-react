import React from 'react';
import { Box, Center, Grid, Code } from '@chakra-ui/react';
import defaultTheme from '../../theme';
import {
  SystemIcon,
  iconNames,
  LogoIcon,
  logoIconNames,
  BadgeIcon,
  badgeIconNames,
  Adult19Icon,
  adult19IconNames,
} from '.';

export default {
  title: '아이콘',
};

const colors = Object.keys(defaultTheme.colors).filter(
  (key) => typeof defaultTheme.colors[key] !== 'object',
);

/**
 * system icons
 */
export const systemIcon = (args) => (
  <Grid templateColumns="repeat(3, 1fr)" gap={10}>
    {iconNames.sort().map((name, index) => (
      <Box key={index}>
        <Center h={16}>
          <SystemIcon icon={name} color={args.color} width={args.width} />
        </Center>
        <Code p={1} fontSize="2xs" color="text-gray-400" w="full">
          {`
            <SystemIcon icon="${name.toString()}"
              ${args.color !== 'current' ? ' color="' + args.color + '"' : ''}
              ${args.width !== 7 ? ' width={' + args.width + '}' : ''} 
            />
          `}
        </Code>
      </Box>
    ))}
  </Grid>
);
systemIcon.storyName = '시스템 아이콘';
systemIcon.args = {
  width: 7,
  color: 'current',
};
systemIcon.argTypes = {
  width: {
    control: {
      type: 'select',
    },
    options: [4, 5, 6, 7, 8, 9, 10],
  },
  color: {
    control: {
      type: 'select',
    },
    options: colors,
  },
};

/**
 * logo icons
 */
export const logoIcon = (args) => (
  <Grid templateColumns="repeat(3, 1fr)" gap={10}>
    {logoIconNames.sort().map((name, index) => (
      <Box key={index}>
        <Center h={16}>
          <LogoIcon icon={name} height={args.height} />
        </Center>
        <Code p={1} fontSize="2xs" color="text-gray-400" w="full">
          {`
          <LogoIcon icon="${name.toString()}"
            ${args.height !== 5 ? ' height={' + args.height + '}' : ''}  
          />
        `}
        </Code>
      </Box>
    ))}
  </Grid>
);
logoIcon.storyName = '로고 아이콘';
logoIcon.args = {
  height: 5,
};
logoIcon.argTypes = {
  height: {
    control: {
      type: 'select',
    },
    options: [4, 5, 6, 7, 8, 9, 10],
  },
};

/**
 * badge icons
 */
export const badgeIcon = (args) => (
  <Grid templateColumns="repeat(3, 1fr)" gap={10}>
    {badgeIconNames.sort().map((name, index) => (
      <Box key={index}>
        <Center h={16}>
          <BadgeIcon icon={name} height={args.height} />
        </Center>
        <Code p={1} fontSize="2xs" color="text-gray-400" w="full">
          {`
          <BadgeIcon icon="${name.toString()}"
            ${args.height !== 4 ? ' height={' + args.height + '}' : ''}  
          />
        `}
        </Code>
      </Box>
    ))}
  </Grid>
);
badgeIcon.storyName = '뱃지 아이콘';
badgeIcon.args = {
  height: 4,
};
badgeIcon.argTypes = {
  height: {
    control: {
      type: 'select',
    },
    options: [4, 5, 6],
  },
};

/**
 * adult 19 icons
 */
export const adult19Icon = (args) => (
  <Grid templateColumns="repeat(3, 1fr)" gap={10}>
    {adult19IconNames.sort().map((name, index) => (
      <Box key={index}>
        <Center h="200px">
          <Adult19Icon icon={name} color={args.color} />
        </Center>
        <Code p={1} fontSize="2xs" color="text-gray-400" w="full">
          {`
          <Adult19Icon icon="${name.toString()}"
            ${args.color !== 'current' ? ' color="' + args.color + '"' : ''}
          />
        `}
        </Code>
      </Box>
    ))}
  </Grid>
);
adult19Icon.storyName = '성인 아이콘';
adult19Icon.args = {
  color: 'current',
};
adult19Icon.argTypes = {
  color: {
    control: {
      type: 'select',
    },
    options: colors,
  },
};
