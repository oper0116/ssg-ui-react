import { Badge, BadgeProps } from '@chakra-ui/react';

interface PushBadgeProps extends BadgeProps {
  children: React.HTMLProps<HTMLElement>;
}
const PushBadge = ({ children, ...res }: PushBadgeProps) => {
  return (
    <Badge
      minW="16px"
      maxH="16px"
      borderRadius="full"
      bgColor="primary"
      fontSize="11px"
      fontWeight="500"
      lineHeight="17px"
      {...res}
    >
      {children}
    </Badge>
  );
};
export default PushBadge;
