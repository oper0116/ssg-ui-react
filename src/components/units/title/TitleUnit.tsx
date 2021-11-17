import React from 'react';
import { Box, BoxProps, Text } from '@chakra-ui/react';

interface Props extends BoxProps {
  data: {
    maiTitleNm1: string;
    maiTitleNm2?: string;
    subtitlNm1?: string;
    subtitlNm2?: string;
  };
}

const TitleUnit = ({
  data: { maiTitleNm1, maiTitleNm2, subtitlNm1, subtitlNm2 },
  ...rest
}: Props) => (
  <Box p="35px 15px 10px" {...rest}>
    <Text as="h1" fontSize="3xl" lineHeight="shorter" fontWeight="bold">
      {maiTitleNm1 && (
        <Text as="span" d="block" isTruncated>
          {maiTitleNm1}
        </Text>
      )}
      {maiTitleNm2 && (
        <Text as="span" d="block" isTruncated>
          {maiTitleNm2}
        </Text>
      )}
    </Text>
    {subtitlNm1 && (
      <Text fontSize="md" color="text-gray-600" lineHeight="shorter" isTruncated mt={1}>
        {subtitlNm1}
      </Text>
    )}
    {subtitlNm2 && (
      <Text fontSize="md" color="text-gray-600" lineHeight="shorter" isTruncated>
        {subtitlNm2}
      </Text>
    )}
  </Box>
);

export default TitleUnit;
