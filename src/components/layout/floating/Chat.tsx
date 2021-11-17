import {
  Box,
  BoxProps,
  List,
  ListItem,
  VisuallyHidden,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { SystemIcon } from '../../icons';
import { FloatingChatData } from '../../../utils';
import DefaultFloatingButton from './DefaultFloatingButton';
import PushBadge from './PushBadge';
import ChatLink from './ChatLink';

interface Props extends BoxProps {
  chatInfo: FloatingChatData;
}
const Chat = ({ chatInfo, ...res }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box pos="relative" {...res}>
      {isOpen && (
        <>
          <Box
            pos="fixed"
            top="0"
            right="0"
            bottom="0"
            left="0"
            bgColor="blackAlpha.800"
            onClick={onClose}
          />
          <List pos="absolute" right="0" bottom="100%" textAlign="right">
            <ListItem>
              <ChatLink
                title="고객센터톡"
                href={chatInfo.csTalkHref}
                count={chatInfo.csTalkCount}
                icon={<SystemIcon icon="talk" width="28px" height="28px" />}
              />
            </ListItem>
            <ListItem>
              <ChatLink
                title="채팅"
                href={chatInfo.sellerTalkHref}
                count={chatInfo.sellerTalkCount}
                icon={<SystemIcon icon="chat_individual" width="24px" height="24px" />}
              />
            </ListItem>
          </List>
        </>
      )}
      <DefaultFloatingButton
        aria-expanded={isOpen}
        pos="relative"
        onClick={isOpen ? onClose : onOpen}
        theme={isOpen ? 'black.on' : 'white'}
      >
        <>
          <VisuallyHidden>채팅</VisuallyHidden>
          {isOpen ? (
            <SystemIcon icon="close" width="20px" height="20px" />
          ) : (
            <>
              <SystemIcon icon="talk" width="28px" height="28px" />
              {chatInfo.csTalkCount + chatInfo.sellerTalkCount > 0 && (
                <PushBadge pos="absolute" top="5px" right="2px" transform="scale(0.75)">
                  <>
                    <VisuallyHidden>새 메시지 있음</VisuallyHidden>
                    <Text as="span" aria-hidden="true">
                      N
                    </Text>
                  </>
                </PushBadge>
              )}
            </>
          )}
        </>
      </DefaultFloatingButton>
    </Box>
  );
};

export default Chat;
