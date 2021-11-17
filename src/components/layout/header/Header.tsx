import React from 'react';
import { Flex } from '@chakra-ui/react';

import CartButton from './CartButton';
import MallButton from './MallButton';
import Search from './Search';
import { SiteName, MallData } from '../../../utils';
import Wrapper from './Wrapper';

interface Props {
  siteName: SiteName;
  userInfo: Record<string, string>;
  onClickSearch?: (type: boolean) => void;
  mallList: MallData[];
  cartCount?: number;
}

const Header = ({ siteName, userInfo, mallList, onClickSearch, cartCount = 0 }: Props) => {
  return (
    <Wrapper siteName={siteName}>
      <Flex justify="space-between" align="center">
        <MallButton siteName={siteName} data={mallList} />
        <Search siteName={siteName} onClick={onClickSearch} />
        <CartButton
          siteName={siteName}
          cartName={userInfo.cartNm}
          cartCount={cartCount}
          linkUrl={
            // FIXME: url 정리
            userInfo.shpplocModKey
              ? 'https://pay.ssg.com/m/cart/shareShpp.ssg?cartShareId=' + userInfo.shpplocModKey
              : 'https://pay.ssg.com/m/cart/dmsShpp.ssg'
          }
          isSharedCart={userInfo.shpplocMod === 'SHARE'}
        />
      </Flex>
    </Wrapper>
  );
};

export default Header;
