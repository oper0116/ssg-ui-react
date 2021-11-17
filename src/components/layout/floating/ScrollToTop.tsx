import React, { useState, useEffect } from 'react';
import { Box, VisuallyHidden } from '@chakra-ui/react';
import { SystemIcon } from '../../icons';
import DefaultFloatingButton from './DefaultFloatingButton';

const MemoizedButton = React.memo(() => {
  const onClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <DefaultFloatingButton onClick={onClick}>
      <>
        <VisuallyHidden>페이지 맨 처음으로</VisuallyHidden>
        <SystemIcon icon="arrow_top" width="20px" height="20px" />
      </>
    </DefaultFloatingButton>
  );
});

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Box display={isVisible ? '' : 'none'}>
      <MemoizedButton />
    </Box>
  );
};

export default ScrollToTop;
