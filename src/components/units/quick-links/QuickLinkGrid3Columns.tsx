import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Badge, Box, Grid, Text, useColorModeValue } from '@chakra-ui/react';
import { CornerBannerUnit } from '@ssg/types/mapi';

interface Props {
  data: Array<CornerBannerUnit>;
  reactPrefix?: string;
}

const QuickLinkGrid3Columns = ({ data, reactPrefix = '' }: Props) => {
  const color = useColorModeValue('text-gray-800', 'inherit');

  return (
    <Box overflow="hidden" borderTopWidth="1px">
      <Grid templateColumns="repeat(3, 1fr)" mb="-1px" mr="-1px">
        {data?.map(({ title, lnkdUrl, advertYn, newYn, imgFileNm }, index) => (
          <Link href={lnkdUrl} key={index}>
            <a className="clickable" data-react-tarea={`${reactPrefix}|${title}`}>
              <Box pos="relative" borderBottomWidth="1px" borderRightWidth="1px" p="10px 15px">
                <Box pos="absolute" top="-1px" right="-1px" zIndex="docked" fontSize={0}>
                  {advertYn === 'Y' && <Badge bg="text-gray-500">AD</Badge>}
                  {newYn === 'Y' && <Badge bg="primary">OPEN</Badge>}
                </Box>
                <Box
                  overflow="hidden"
                  pos="relative"
                  maxW="74px"
                  h="30px"
                  m="0 auto"
                  textAlign="center"
                >
                  <Box pos="absolute" top="50%" transform="translateY(-50%)">
                    <Image src={imgFileNm} alt={title} width="74px" height="74px" />
                  </Box>
                </Box>
                <Text fontSize="xs" mt="7px" color={color} textAlign="center" wordBreak="break-all">
                  {title}
                </Text>
              </Box>
            </a>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default QuickLinkGrid3Columns;
