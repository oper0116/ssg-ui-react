import React from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import Shipping from './Shipping';
import ShippingMethod from './ShippingMethod';
import BirthDay from './BirthDay';
import Notice from './Notice';

export default {
  title: '유닛/팝업',
  parameters: {
    layout: 'fullscreen',
  },
};

const shippingArgs = {
  data: {
    currentAddr: '경기도 김포시',
  },
  itemList: [
    { id: 1, title: '쓱배송 가능지역 찾기', linkUrl: '', siteName: 'emart' },
    { id: 2, title: '쓱배송 가능지역 찾기', linkUrl: '', siteName: 'traders' },
    { id: 3, title: '새벽배송 가능지역 찾기', linkUrl: '', siteName: 'earlymorning' },
    { id: 4, title: '이마트몰 택배배송 쇼핑하기', linkUrl: '', siteName: '' },
  ],
};
export const PopupUnitShipping = ({ data, itemList }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // 미리보기
  React.useEffect(() => onOpen(), [onOpen]);

  return (
    <>
      <Button onClick={onOpen}>배송매장 팝업</Button>
      <Shipping isOpen={isOpen} onClose={onClose} data={data} itemList={itemList} />
    </>
  );
};
PopupUnitShipping.storyName = '배송매장 팝업';
PopupUnitShipping.args = shippingArgs;

const shippingMethodArgs = {
  data: [
    { id: 1, title: '쓱배송으로보기', siteName: 'emart' },
    { id: 2, title: '새벽배송으로 보기', siteName: 'earlymorning' },
    { id: 3, title: '택배배송으로 보기', siteName: '' },
  ],
};
export const PopupUnitShippingMethod = ({ data }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // 미리보기
  React.useEffect(() => onOpen(), [onOpen]);

  return (
    <>
      <Button onClick={onOpen}>상품유닛 다른 배송으로 구매 팝업</Button>
      <ShippingMethod isOpen={isOpen} onClose={onClose} data={data} />
    </>
  );
};
PopupUnitShippingMethod.storyName = '상품유닛 다른 배송으로 구매 팝업';
PopupUnitShippingMethod.args = shippingMethodArgs;

const today = new Date();
const nowDay = `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`;
const birthDayArgs = {
  data: {
    userName: '리액트',
    userBirthday: nowDay,
  },
};
export const PopupUnitBirthDay = ({ data }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // 미리보기
  React.useEffect(() => onOpen(), [onOpen]);

  return (
    <>
      <Button onClick={onOpen}>선물하기 매장 팝업</Button>
      {nowDay === data.userBirthday && <BirthDay isOpen={isOpen} onClose={onClose} data={data} />}
    </>
  );
};
PopupUnitBirthDay.storyName = '선물하기 매장 팝업';
PopupUnitBirthDay.args = birthDayArgs;

const PopupUnitNoticeArgs = {
  data: [
    { id: 1, imgUrl: 'https://picsum.photos/640/870' },
    { id: 2, imgUrl: 'http://placeimg.com/640/870/any' },
    { id: 3, imgUrl: 'http://placehold.it/640x870/' },
  ],
};
export const PopupUnitNotice = ({ data }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // 미리보기
  React.useEffect(() => onOpen(), [onOpen]);

  return (
    <>
      <Button onClick={onOpen}>공식 브랜드관 팝업</Button>
      <Notice isOpen={isOpen} onClose={onClose} data={data} />
    </>
  );
};
PopupUnitNotice.storyName = '공식 브랜드관 팝업';
PopupUnitNotice.args = PopupUnitNoticeArgs;
