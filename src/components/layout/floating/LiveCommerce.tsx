import { useRef } from 'react';
import {
  VisuallyHidden,
  Box,
  Image,
  Link,
  Flex,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Heading,
} from '@chakra-ui/react';
import { LiveCommerceData } from '../../../utils';
import PushBadge from './PushBadge';
import { LogoIcon, SystemIcon } from '../../icons';

interface Props {
  liveCommerceInfo: LiveCommerceData;
}

const LiveCommerce = ({ liveCommerceInfo }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const openButton = useRef();
  const isMultipleLive = liveCommerceInfo.totalCnt > 1;

  return (
    <Box>
      <Link
        ref={openButton}
        {...(isMultipleLive
          ? {
              onClick: onOpen,
              role: 'button',
            }
          : {
              href: liveCommerceInfo.livePageLinkUrl,
            })}
        display="block"
        pos="relative"
        paddingTop="42px"
        _after={{
          display: 'block',
          pos: 'relative',
          w: '54px',
          h: '28px',
          // FIXME: url 정리
          bgImg: 'http://stg-ui.ssgcdn.com/ui/m_ssg/img/com_v2/bg_floating_live_new.png',
          bgSize: '100% auto',
          content: '""',
        }}
      >
        <Box
          as="span"
          pos="absolute"
          top="0"
          left="50%"
          overflow="hidden"
          w="44px"
          h="55px"
          transform="translateX(-50%)"
          borderRadius="5px"
          _after={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            boxShadow: 'inset 0 3px 2px 0 rgba(0, 0, 0, 0.1)',
            backgroundImage:
              'linear-gradient(to bottom, rgba(0, 0, 0, 0) 46%, rgba(0, 0, 0, 0.41))',
            content: '""',
          }}
        >
          <Image
            w="100%"
            h="100%"
            objectFit="cover"
            src={liveCommerceInfo.liveFloatSmallImgUrl}
            alt=""
          />
        </Box>
        {isMultipleLive ? (
          <>
            <PushBadge pos="absolute" top="5px" right="0">
              <>
                <VisuallyHidden>진행중인 라이브 방송 수</VisuallyHidden>
                {liveCommerceInfo.totalCnt}
              </>
            </PushBadge>
            <VisuallyHidden>목록 열기</VisuallyHidden>
          </>
        ) : (
          <VisuallyHidden>라이브 방송 보기</VisuallyHidden>
        )}
      </Link>
      <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={openButton} placement="bottom">
        <DrawerOverlay bgColor="blackAlpha.700" />
        <DrawerContent borderRadius="20px 20px 0 0">
          <DrawerBody padding="0">
            <Flex alignItems="center" padding="20px 15px 5px">
              <LogoIcon icon="ssglive_intro" title="SSG LIVE" width="113px" height="auto" mr={2} />
              <Heading as="h2">지금 라이브중</Heading>
            </Flex>
            <Box pb="15px">
              {/* TODO: SSG_LIVE_SWIPE 유닛 작업 후 👇여기를 교체 */}
              <Box h="280px" bgColor="blackAlpha.300">
                SSG_LIVE_SWIPE 유닛
              </Box>
            </Box>
          </DrawerBody>
          <DrawerCloseButton top="auto" bottom="100%" right="0" left="0" margin="0 auto 4px">
            <VisuallyHidden>목록 닫기</VisuallyHidden>
            <SystemIcon icon="chevron_down_medium" width={6} height={6} color="white" />
          </DrawerCloseButton>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default LiveCommerce;
