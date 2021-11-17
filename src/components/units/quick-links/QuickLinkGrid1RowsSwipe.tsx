import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Box, BoxProps, Center, Text } from '@chakra-ui/react';
import { CornerBannerUnit } from '@ssg/types/mapi';

interface Props extends BoxProps {
  data: Array<CornerBannerUnit>;
}

const QuickLinkGrid1RowsSwipe = ({ data, ...rest }: Props) => (
  <Box py="15px" {...rest}>
    <Box as="ul" d="inline-flex" flexWrap="nowrap" p="0 8px 0 7px">
      {data?.map(({ title, lnkdUrl, linkReactTarea, imgFileNm }, index) => (
        <Link href={lnkdUrl} key={index}>
          <a className="clickable" data-react-tarea={linkReactTarea}>
            <Box w="69px">
              <Center>
                <Image src={imgFileNm} width="54px" height="54px" alt={title} />
              </Center>
              <Text
                fontSize="2xs"
                mt="5px"
                color="text-gray-800"
                textAlign="center"
                wordBreak="break-all"
              >
                {title}
              </Text>
            </Box>
          </a>
        </Link>
      ))}
    </Box>
  </Box>
);

export default QuickLinkGrid1RowsSwipe;
