import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  Flex,
  Box,
  ModalFooter,
  Button,
} from '@chakra-ui/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: {
    today: Date;
    userName: string;
  };
}

const BirthDay = ({ isOpen, onClose, data }: Props) => {
  const { userName } = data;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
      <ModalOverlay />
      <ModalContent minW={275} maxW={375}>
        <Box overflow="hidden" borderRadius="lg">
          <ModalBody py={6} pt={0} textAlign="center">
            <Flex justifyContent="center" my={3}>
              <img
                src="http://svn.ssgadm.com/ssgui/01.ssg/mobile/trunk/dist/img/giftsvc/bg_birthday_coupon.png"
                width="72"
                alt=""
              />
              {/* <SystemIcon icon="birthday" width={10} /> */}
            </Flex>
            <Text fontSize="4xl">
              생일을 맞으신
              <Box as="span" fontWeight="bold" color="present-primary" ml={1}>
                {userName} 고객님,
              </Box>
            </Text>
            <Text fontSize="4xl">진심으로 축하드립니다!</Text>
          </ModalBody>
          <ModalFooter p={0}>
            <Button
              type="button"
              flex="1"
              bg="line-gray-300"
              color="text-gray-800"
              fontSize="xl"
              fontWeight="normal"
              h="44px"
              onClick={onClose}
            >
              닫기
            </Button>
            <Button
              type="button"
              flex="1"
              bg="primary"
              color="white"
              fontSize="xl"
              fontWeight="normal"
              h="44px"
            >
              선물 쿠폰 받기
            </Button>
          </ModalFooter>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default BirthDay;
