import React from 'react';
import { BoxProps, VStack, Text } from '@chakra-ui/react';
import { ModuleUnitTitleUnit } from '~/../@types/mapi';

interface Props extends BoxProps {
  data: Partial<ModuleUnitTitleUnit>;
}

const CenteredTitleUnit = ({
  data: { maiTitleNm1, maiTitleNm2, subtitlNm1, subtitlNm2 },
  ...rest
}: Props) => (
  <VStack align="center" spacing={0} p="47px 15px 20px" textAlign="center" {...rest}>
    {subtitlNm1 && (
      <Text fontSize="sm" isTruncated>
        {subtitlNm1}
      </Text>
    )}
    {subtitlNm2 && (
      <Text fontSize="sm" isTruncated>
        {subtitlNm2}
      </Text>
    )}
    <Text as="h1" pt="10px" fontSize="4xl" fontWeight="bold" lineHeight="shorter">
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
  </VStack>
);

export default CenteredTitleUnit;
