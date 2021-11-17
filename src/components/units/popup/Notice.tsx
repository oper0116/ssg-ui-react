import React, { useState, useEffect, useRef } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Box,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from '../../swiper';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: {
    id: number;
    imgUrl: string;
  }[];
}

const Notice = ({ isOpen, onClose, data }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const swiperRef = useRef<typeof Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onSlideChange = () => {
    setActiveIndex(swiperRef.current.realIndex);
  };

  const onPagination = (index) => {
    swiperRef.current.slideTo(index);
  };

  const onModalClose = () => {
    onClose();
    setShowModal(true);
  };

  useEffect(() => {
    if (!isOpen && swiperRef) {
      setActiveIndex(0);
    }
  }, [isOpen, swiperRef]);

  const today: Date = new Date();

  const onModalClosePeriod = () => {
    localStorage.setItem('fuzePopUpNotShow', today.toString());
    setShowModal(false);
  };

  useEffect(() => {
    const fuzePopUpNotShow = localStorage.getItem('fuzePopUpNotShow'); // ISO
    const fuzePopUpNotShowUNIX = fuzePopUpNotShow !== null && Date.parse(fuzePopUpNotShow); // UNIX
    const whenWillBeExpired = fuzePopUpNotShowUNIX && fuzePopUpNotShowUNIX + 1000 * 60; // 우선 1분만
    const currentUNIX = Math.floor(new Date().getTime());

    // 아무 정보가 없으면 팝업을 띄우자. (처음 들어온 사람)
    if (Number.isNaN(fuzePopUpNotShowUNIX)) {
      setShowModal(true);
    }

    // 제한 시간을 지났으므로 팝업을 띄울 것
    if (whenWillBeExpired < currentUNIX) {
      setShowModal(true);
    }
  }, []);

  return (
    <>
      {showModal && (
        <Modal isOpen={isOpen} onClose={onModalClose} size="sm" isCentered>
          <ModalOverlay />
          <ModalContent minW={275} maxW={375}>
            <Box overflow="hidden" borderRadius="lg">
              <ModalBody p={0}>
                <Swiper
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  onSlideChange={onSlideChange}
                >
                  {data.map((item) => (
                    <SwiperSlide key={item.id}>
                      <img src={item.imgUrl} alt="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Flex pos="absolute" top="-20px" left="50%" transform="translateX(-50%)">
                  {data.map((item, index) => (
                    <Box
                      key={item.id}
                      as="button"
                      w="10px"
                      h="10px"
                      borderRadius="full"
                      ml={1}
                      bg={activeIndex === index ? `primary` : `text-gray-400`}
                      onClick={() => onPagination(index)}
                    ></Box>
                  ))}
                </Flex>
              </ModalBody>
              <ModalFooter p={0}>
                <Button
                  type="button"
                  flex="1"
                  bg="line-gray-300"
                  color="black"
                  fontSize="xl"
                  fontWeight="normal"
                  h="60px"
                  onClick={onModalClosePeriod}
                >
                  다시 열지 않음
                </Button>
                <Button
                  type="button"
                  flex="1"
                  bg="line-gray-300"
                  color="black"
                  fontSize="xl"
                  fontWeight="normal"
                  h="60px"
                  onClick={onModalClose}
                >
                  닫기
                </Button>
              </ModalFooter>
            </Box>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Notice;
