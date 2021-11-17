import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AspectRatio,
  Box,
  BoxProps,
  Button,
  Grid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { CornerBannerUnit } from '@ssg/types/mapi';
import { SystemIcon } from '../../icons';

interface Props extends BoxProps {
  data: Array<CornerBannerUnit>;
  /** 더보기 기준 row */
  limitRows?: number;
}

const QuickLink = (props: CornerBannerUnit) => {
  const { title, lnkdUrl, linkReactTarea, imgFileNm } = props;
  const color = useColorModeValue('text-gray-800', 'inherit');

  return (
    <Link href={lnkdUrl}>
      <a className="clickable" data-react-tarea={linkReactTarea}>
        <AspectRatio overflow="hidden" ratio={1} pos="relative">
          <Image src={imgFileNm} alt={title} layout="fill" />
        </AspectRatio>
        <Text fontSize="xs" mt="5px" color={color} textAlign="center" wordBreak="break-all">
          {title}
        </Text>
      </a>
    </Link>
  );
};

const QuickLinkGrid5Columns = ({ data, limitRows, ...rest }: Props) => {
  return (
    <Box px="15px" pb={5} {...rest}>
      {!limitRows ? (
        <Grid templateColumns="repeat(5, 1fr)" gap="18px 10px">
          {data?.map((itemdata, index) => (
            <QuickLink {...itemdata} key={index} />
          ))}
        </Grid>
      ) : (
        <>
          <Grid templateColumns="repeat(5, 1fr)" gap="18px 10px">
            {data?.map((itemdata, index) => (
              <QuickLink {...itemdata} key={index} />
            ))}
          </Grid>
          <Button
            variant="outline"
            colorScheme="gray"
            size="md"
            mt="5px"
            borderRadius="md"
            isFullWidth
          >
            더보기 <SystemIcon icon="chevron_down_s" width={5} />
          </Button>
        </>
      )}
    </Box>
  );
};

export default QuickLinkGrid5Columns;
