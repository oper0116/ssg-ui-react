import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Box, Flex, Text, Stack, StackProps, Heading } from '@chakra-ui/react';
import { Banner } from '~/../@types/mapi';

interface Props extends StackProps {
  data: Array<Banner>;
}

const BannerGridRow = ({ data, ...rest }: Props) => (
  <Stack direction={{ base: 'column', md: 'row' }} p="15px" spacing={2} {...rest}>
    {data?.map(({ title, lnkdUrl, imgFileNm, subtitlNm1, subtitlNm2, dataReactTarea }, index) => (
      <Box key={index} flex={{ base: 1, md: '50%' }}>
        <Link href={lnkdUrl}>
          <a className="clickable" data-react-tarea={dataReactTarea}>
            <Flex align="center">
              <Box overflow="hidden" h="87px" borderRadius="lg" mr="10px">
                <Image src={imgFileNm} width="145px" height="87px" alt={title} />
              </Box>
              <Box>
                <Heading fontSize="md">{title}</Heading>
                <Text mt="5px" color="text-gray-600" fontSize="sm" wordBreak="break-all">
                  {subtitlNm1} <br /> {subtitlNm2}
                </Text>
              </Box>
            </Flex>
          </a>
        </Link>
      </Box>
    ))}
  </Stack>
);

export default BannerGridRow;
