import React from 'react';
import { Link, Box, VisuallyHidden, Text } from '@chakra-ui/react';

import { SiteName, getHeaderContentColor } from '../../../utils';
import { SystemIcon } from '../../icons';

function getCartCountBackground(s: SiteName) {
  switch (s) {
    case SiteName.shinsegaemall:
    case SiteName.tv:
    case SiteName.starfield:
    case SiteName.premiumoutlets:
      return 'black';
    default:
      return 'info-increase';
  }
}

interface Props {
  siteName: SiteName;
  cartName: string;
  cartCount: number;
  linkUrl: string;
  isSharedCart: boolean;
}

const CartButton = ({ siteName, cartName, cartCount, linkUrl, isSharedCart }: Props) => {
  return (
    <Box pos="relative" ml="8px" h={6}>
      <Link href={linkUrl}>
        <VisuallyHidden>{cartName}</VisuallyHidden>
        <SystemIcon icon="cart" width={6} color={getHeaderContentColor(siteName)} />
        <Box pos="absolute" top="-2px" right="0">
          {isSharedCart ? (
            <>
              <VisuallyHidden>함께장보기 상품 담는 중</VisuallyHidden>
              <SystemIcon icon="badge_shared_cart" width={4} transform="translateX(6px)" />
            </>
          ) : cartCount === 0 ? undefined : (
            cartCount > 0 && (
              <Text
                minW={4}
                maxH={4}
                px={1}
                borderRadius="full"
                bgColor={getCartCountBackground(siteName)}
                fontWeight="bold"
                fontSize="10px"
                color="white"
                textAlign="center"
                transform="translateX(50%)"
              >
                <VisuallyHidden>담은 상품 수</VisuallyHidden>
                {cartCount > 99 ? '+99' : cartCount}
              </Text>
            )
          )}
        </Box>
      </Link>
    </Box>
  );
};

export default CartButton;
