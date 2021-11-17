/* eslint-disable react/prop-types */
import React from 'react';
import defaultTheme from '.';
import { Box, Flex, Grid, SimpleGrid, Text, Heading } from '@chakra-ui/react';

export default {
  title: '디자인시스템 테마/파운데이션',
};

function getPixelFromRem(value: string): string {
  return `${parseFloat(value) * 16}px`;
}

const FoundationItem = (props) => {
  const { title, children, ...rest } = props;

  return (
    <Box pb={5} {...rest}>
      <Heading fontSize="3xl" fontWeight="medium">
        {title}
      </Heading>
      {children}
    </Box>
  );
};

const FoundationValue = (props) => {
  const { value, ...rest } = props;
  const isRemValue = React.useMemo(
    () => typeof value === 'string' && value.substring(value.length - 3) === 'rem',
    [value],
  );

  return (
    <Box my={1} {...rest}>
      <Text as="span" fontSize="xs" color="text-gray-400">
        {value}
        {isRemValue && (
          <Text as="span" ml="1">
            ({getPixelFromRem(value)})
          </Text>
        )}
      </Text>
    </Box>
  );
};

export const color = () => (
  <Grid templateColumns="repeat(3, 1fr)" gap={1}>
    {Object.keys(defaultTheme.colors)
      .filter((key) => typeof defaultTheme.colors[key] !== 'object')
      .map((key) => (
        <Flex alignItems="center" mt="2" key={key}>
          <Box
            background={defaultTheme.colors[key]}
            boxSize="45px"
            flexShrink={0}
            borderRadius="sm"
          />
          <Box pl="10px">
            <Text fontSize="sm">{key.toString()}</Text>
            <FoundationValue value={defaultTheme.colors[key]} my={0} />
          </Box>
        </Flex>
      ))}
  </Grid>
);

export const border = () => (
  <>
    {Object.keys(defaultTheme.borders).map((key) => (
      <FoundationItem title={key} key={key}>
        <FoundationValue value={defaultTheme.borders[key]} />
        <Box borderTop={defaultTheme.borders[key]} borderColor="inherit" />
      </FoundationItem>
    ))}
  </>
);

export const radius = () => (
  <>
    {Object.keys(defaultTheme.radii).map((key) => (
      <FoundationItem title={key} key={key}>
        <FoundationValue value={defaultTheme.radii[key]} />
        <Box bg="line-gray-300" height={14} borderRadius={defaultTheme.radii[key]} />
      </FoundationItem>
    ))}
  </>
);

export const shadow = () => (
  <>
    {Object.keys(defaultTheme.shadows).map((key) => (
      <FoundationItem title={key} key={key}>
        <FoundationValue value={defaultTheme.shadows[key]} />
        <Box boxShadow={defaultTheme.shadows[key]} height="20" border="1px" borderColor="inherit" />
      </FoundationItem>
    ))}
  </>
);

export const space = () => (
  <>
    {Object.keys(defaultTheme.space).map((key) => (
      <FoundationItem title={key} key={key}>
        <FoundationValue value={defaultTheme.space[key]} />
        <SimpleGrid columns={2} spacing={defaultTheme.space[key]}>
          <Box bg="line-gray-300" height="20" />
          <Box bg="line-gray-300" height="20" />
        </SimpleGrid>
      </FoundationItem>
    ))}
  </>
);

export const size = () => (
  <>
    {Object.keys(defaultTheme.sizes).map((key) => (
      <Box key={key}>
        {typeof defaultTheme.sizes[key] === 'object' ? (
          <Box>
            <Heading as="h1" fontSize="4xl" py="5" borderTopWidth="1px">
              Container Sizes
            </Heading>
            {Object.keys(defaultTheme.sizes[key]).map((c) => (
              <FoundationItem title={c} key={key + c}>
                <FoundationValue value={defaultTheme.sizes[key][c]} />
              </FoundationItem>
            ))}
          </Box>
        ) : (
          <FoundationItem title={key}>
            <FoundationValue value={defaultTheme.sizes[key]} />
            <Box bg="line-gray-300" boxSize={defaultTheme.sizes[key]} />
          </FoundationItem>
        )}
      </Box>
    ))}
  </>
);

const lorem = `
  SSG.COM 에스에스지닷컴
  SSG Only SSG에서만 만날 수 있어요
  SSG.LIVE 쇼핑 라이브쇼의 신세계
  abcdefghijklmnopqrstuvwxyz
  ABCDEFGHIJKLMNOPQRSTUVWXYZ
`;

export const font = () => (
  <>
    {Object.keys(defaultTheme.fonts)
      .filter((v) => v !== 'mono')
      .map((key) => (
        <FoundationItem title={key} key={key}>
          <FoundationValue value={defaultTheme.fonts[key]} />
          <Text fontFamily={defaultTheme.fonts[key]}>{lorem}</Text>
        </FoundationItem>
      ))}
  </>
);

export const fontSize = () => (
  <>
    {[
      '3xs',
      '2xs',
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      '2xl',
      '3xl',
      '4xl',
      '5xl',
      '6xl',
      '7xl',
      '8xl',
    ].map((key) => (
      <FoundationItem title={key} key={key}>
        <FoundationValue value={defaultTheme.fontSizes[key]} />
        <Text fontSize={defaultTheme.fontSizes[key]}>{lorem}</Text>
      </FoundationItem>
    ))}
  </>
);

export const fontWeight = () => (
  <>
    {['normal', 'medium', 'bold']
      .sort((a, b) => defaultTheme.fontWeights[a] - defaultTheme.fontWeights[b])
      .map((key) => (
        <FoundationItem title={key} key={key}>
          <FoundationValue value={defaultTheme.fontWeights[key]} />
          <Text fontWeight={defaultTheme.fontWeights[key]}>{lorem}</Text>
        </FoundationItem>
      ))}
  </>
);

export const letterSpacing = () => (
  <>
    {Object.keys(defaultTheme.letterSpacings).map((key) => (
      <FoundationItem title={key} key={key}>
        <FoundationValue value={defaultTheme.letterSpacings[key]} />
        <Text letterSpacing={defaultTheme.letterSpacings[key]}>{lorem}</Text>
      </FoundationItem>
    ))}
  </>
);

export const lineHeight = () => (
  <>
    {Object.keys(defaultTheme.lineHeights)
      .filter((v) => !parseInt(v))
      .map((key) => (
        <FoundationItem title={key} key={key}>
          <FoundationValue value={defaultTheme.lineHeights[key]} />
          <Text lineHeight={defaultTheme.lineHeights[key]}>{lorem}</Text>
        </FoundationItem>
      ))}
  </>
);

export const zIndex = () => (
  <>
    {Object.keys(defaultTheme.zIndices).map((key) => (
      <FoundationItem title={key} key={key}>
        <FoundationValue value={defaultTheme.zIndices[key]} />
      </FoundationItem>
    ))}
  </>
);
