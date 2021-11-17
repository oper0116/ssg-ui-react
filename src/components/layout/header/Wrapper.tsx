import React from 'react';
import { Box } from '@chakra-ui/react';

import { SiteName, getHeaderBackground } from '../../../utils';

interface Props {
  siteName: SiteName;
  children: React.HTMLProps<HTMLElement>;
}

const Container = ({ siteName, children }: Props) => {
  return (
    <Box px="15px" py={2} {...getHeaderBackground(siteName)}>
      {children}
    </Box>
  );
};

export default Container;
