import React from 'react';
import Link from 'next/link';
import { Flex, BoxProps, Heading, Text } from '@chakra-ui/react';
import { SystemIcon } from '../../icons';
import { ModuleUnitQuickLinkGrid } from '~/../@types/mapi';

interface Props extends BoxProps {
  data: Partial<ModuleUnitQuickLinkGrid>;
}

const SectionTitleUnit = ({
  data: { maiTitleNm1, maiTitleNm2, lnkdUrl, reactPrefix },
  ...rest
}: Props) => {
  return (
    <Flex my={5} ml="15px" mr="10px" alignItems="center" justify="space-between" {...rest}>
      <Heading as="h2" fontSize="3xl">
        {maiTitleNm1}
      </Heading>
      {lnkdUrl && (
        <Link href={lnkdUrl}>
          <a href="">
            <Flex>
              <Text
                fontSize="xs"
                className="clickable"
                data-react-tarea={`${reactPrefix}|${maiTitleNm1}${
                  maiTitleNm2 ? '|' + maiTitleNm2 : ''
                }`}
              >
                {maiTitleNm2}
              </Text>
              <SystemIcon icon="chevron_right" width={4} />
            </Flex>
          </a>
        </Link>
      )}
    </Flex>
  );
};

export default SectionTitleUnit;
