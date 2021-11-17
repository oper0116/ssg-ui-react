import React, { useState } from 'react';
import { Box, IconButton, Input, InputGroup, InputRightElement, Portal } from '@chakra-ui/react';

import { SystemIcon } from '../../icons';
import { SiteName } from '../../../utils';
import SearchLayer from '../search/SearchLayer';

interface Props {
  siteName: SiteName;
  onClick?: (type: boolean) => void;
}

const Search = ({ siteName, onClick }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSearchLayer = (type) => {
    if (onClick) {
      onClick(type);
    } else {
      setIsOpen(type);
    }
  };

  return (
    <>
      <Box flex="1">
        <InputGroup>
          <Input
            variant="filled"
            borderRadius="full"
            pr={8}
            onClick={() => handleSearchLayer(true)}
          />
          <InputRightElement>
            <IconButton
              variant="unstyled"
              icon={<SystemIcon icon="search" width={6} ml="6px" />}
              aria-label="검색"
            />
          </InputRightElement>
        </InputGroup>
      </Box>
      {isOpen && (
        <Portal>
          <SearchLayer siteName={siteName} handleSearchLayer={handleSearchLayer} />
        </Portal>
      )}
    </>
  );
};

export default Search;
