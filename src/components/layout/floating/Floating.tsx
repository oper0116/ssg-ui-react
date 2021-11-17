import { Box, VStack } from '@chakra-ui/react';
import { LiveCommerceData, FloatingChatData } from '../../../utils';
import HistoryBack from './HistoryBack';
import LiveCommerce from './LiveCommerce';
import Chat from './Chat';
import ScrollToTop from './ScrollToTop';

interface Props {
  liveCommerceInfo?: LiveCommerceData;
  chatInfo: FloatingChatData;
}

const Floating = ({ liveCommerceInfo, chatInfo }: Props) => {
  return (
    <Box pos="fixed" right="0" bottom="70px" left="0" zIndex="sticky">
      <Box pos="absolute" left="16px" bottom="0">
        <HistoryBack />
      </Box>
      <Box pos="absolute" right="9px" bottom="0">
        <VStack>
          {liveCommerceInfo && <LiveCommerce liveCommerceInfo={liveCommerceInfo} />}
          <Chat chatInfo={chatInfo} zIndex="1" />
          <ScrollToTop />
        </VStack>
      </Box>
    </Box>
  );
};

export default Floating;
