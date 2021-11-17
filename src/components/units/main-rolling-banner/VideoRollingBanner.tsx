import React, { useState, useEffect, useRef } from 'react';
import {
  AspectRatio,
  Box,
  ButtonGroup,
  Flex,
  Image,
  Link,
  IconButton,
  Text,
  VisuallyHidden,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  useDisclosure,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide, SwiperAutoplay } from '../../swiper';
import { SystemIcon } from '../../icons';

interface Props {
  data: Array<{
    id: string;
    title: string;
    desc: string;
    lnkdUrl: string;
    imgFileNm: string;
  }>;
}

const VideoRollingBanner = ({ data }: Props) => {
  const swiperRef = useRef<typeof Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSlideChange = () => {
    swiperRef.current && setActiveIndex(swiperRef.current.realIndex);
  };

  const onToggleAutoPlay = () => {
    if (isAutoPlay) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }
    setIsAutoPlay((v) => !v);
  };

  useEffect(() => {
    if (swiperRef) {
      setActiveIndex(0);
    }
  }, [swiperRef]);

  return (
    <Box>
      {/* 배너 스와이프 */}
      <Swiper
        modules={[SwiperAutoplay]}
        autoplay={{ delay: 3000 }}
        effect="slide"
        spaceBetween={0}
        slidesPerView={1}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={onSlideChange}
      >
        {data.map(({ id, lnkdUrl, imgFileNm, title }, index) => (
          <SwiperSlide key={`${id}-${index}`}>
            <Box>
              <Link href={lnkdUrl}>
                <AspectRatio ratio={1 / 0.61334}>
                  <Image src={imgFileNm} alt={title} />
                </AspectRatio>
              </Link>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 배너 스와이프 컨트롤러 */}
      <Flex justify="space-between" alignItems="center" pl={5} pr={2}>
        <Text fontSize="sm" color="text-gray-700" lineHeight="taller">
          <VisuallyHidden>현재 배너</VisuallyHidden>
          {activeIndex + 1}
          <Text as="span" px="2px">
            /
          </Text>
          <VisuallyHidden>전체 배너</VisuallyHidden>
          {data.length}
        </Text>
        <ButtonGroup variant="unstyled" size="xs">
          <IconButton
            aria-label="배너 정지/재생"
            icon={
              <SystemIcon icon={isAutoPlay ? 'pause' : 'play'} color="text-gray-400" width={5} />
            }
            onClick={onToggleAutoPlay}
          />
          <IconButton
            aria-label="배너 전체보기"
            icon={<SystemIcon icon="rectangle_overlap" color="text-gray-400" width={5} />}
            onClick={onOpen}
          />
        </ButtonGroup>
      </Flex>
      {/* 배너 펼침 모달 */}
      <Modal isOpen={isOpen} onClose={onClose} size="full" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent mb="0 !important" maxHeight="100vh !important" borderRadius="none">
          <ModalHeader textAlign="center">전체 보기</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0}>
            {data.map(({ id, lnkdUrl, imgFileNm, title }, index) => (
              <Link href={lnkdUrl} key={`modal-${id}-${index}`}>
                <AspectRatio ratio={1 / 0.61334}>
                  <Image src={imgFileNm} alt={title} />
                </AspectRatio>
              </Link>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default VideoRollingBanner;
