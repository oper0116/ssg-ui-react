import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { AspectRatio, Box, BoxProps, Grid, Text } from '@chakra-ui/react';
import { CornerBannerUnit } from '@ssg/types/mapi';

interface Props extends BoxProps {
  data: Array<CornerBannerUnit>;
}

const QuickLinkGrid4Columns = ({ data, ...rest }: Props) => (
  <Box px="15px" pb={5} {...rest}>
    <Grid templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)' }} gap="18px 10px">
      {data?.map(({ title, lnkdUrl, linkReactTarea, imgFileNm }, index) => (
        <Link href={lnkdUrl} key={index}>
          <a className="clickable" data-react-tarea={linkReactTarea}>
            <AspectRatio overflow="hidden" ratio={1} pos="relative">
              <Image src={imgFileNm} alt={title} layout="fill" />
            </AspectRatio>
            <Text
              fontSize="xs"
              mt="5px"
              color="text-gray-800"
              textAlign="center"
              wordBreak="break-all"
            >
              {title}
            </Text>
          </a>
        </Link>
      ))}
    </Grid>
  </Box>
);

export default QuickLinkGrid4Columns;
