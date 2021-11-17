import { Flex, VisuallyHidden, Text } from '@chakra-ui/react';
import DefaultFloatingButton from './DefaultFloatingButton';
import PushBadge from './PushBadge';

interface Props {
  title: string;
  href: string;
  count: number;
  icon: React.ReactElement;
}

const ChatLink = ({ title, href, count, icon }: Props) => {
  return (
    <Flex
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      marginBottom={2}
      lineHeight={10}
    >
      <Text fontSize="12px" color="white" letterSpacing="-0.3px" whiteSpace="nowrap">
        {title}
      </Text>
      {count > 0 && (
        <PushBadge ml="5px">
          <>
            <VisuallyHidden>새 메시지 개수</VisuallyHidden>
            <Text as="span">{count > 99 ? '99+' : count}</Text>
          </>
        </PushBadge>
      )}
      <DefaultFloatingButton as="span" theme="white.on" ml="10px">
        {icon}
      </DefaultFloatingButton>
    </Flex>
  );
};

export default ChatLink;
