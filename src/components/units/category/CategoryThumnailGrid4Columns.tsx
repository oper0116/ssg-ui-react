import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { AspectRatio, Box, BoxProps, Grid, Text, useColorModeValue } from '@chakra-ui/react';
import { CategoryBannerList } from '~/../@types/mapi';

interface Props extends BoxProps {
  data: Array<CategoryBannerList>;
}

const CategoryThumnailGrid4Columns = ({ data, ...rest }: Props) => {
  const color = useColorModeValue('text-gray-800', 'inherit');

  return (
    <Box px="15px" pb={5} {...rest}>
      <Grid
        templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)' }}
        gap="12px 10px"
        overflow="hidden"
      >
        {data?.map(({ dispCtgNm, linkUrl, dataReactTarea, imgFileNm }, index) => {
          const [firstSplittedName, ...restSplittedNames] = dispCtgNm.split('\n');

          return (
            <Box
              key={index}
              pos="relative"
              pt="10px"
              _before={{
                content: `''`,
                position: 'absolute',
                top: '-1px',
                width: '100vw',
                borderBottomWidth: '1px',
              }}
            >
              <Link href={linkUrl}>
                <a className="clickable" data-react-tarea={dataReactTarea}>
                  <AspectRatio overflow="hidden" ratio={1} pos="relative">
                    <Image src={imgFileNm} alt={dispCtgNm} layout="fill" />
                  </AspectRatio>
                  <Text
                    fontSize="2xs"
                    mt="5px"
                    color={color}
                    letterSpacing="tighter"
                    lineHeight="shorter"
                    textAlign="center"
                  >
                    {firstSplittedName}
                    {restSplittedNames &&
                      restSplittedNames.map((name, idx) => (
                        <React.Fragment key={idx}>
                          <br />
                          {name}
                        </React.Fragment>
                      ))}
                  </Text>
                </a>
              </Link>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CategoryThumnailGrid4Columns;
