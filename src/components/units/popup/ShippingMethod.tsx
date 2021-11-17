import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
  List,
  ListItem,
  Flex,
} from '@chakra-ui/react';
import Link from 'next/link';
import { SystemIcon } from '../../icons';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: {
    id: number;
    title: string;
    siteName: string;
  }[];
}

const ShippingMethod = ({ isOpen, onClose, data }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered>
      <ModalOverlay />
      <ModalContent minW={275} maxW={375}>
        <ModalHeader py={6}>
          <Text fontSize="2xl" color="black">
            구매하실 상품의 <br /> 배송 방법을 선택해주세요.
          </Text>
        </ModalHeader>
        <ModalBody py={6} pt={0}>
          <List>
            {data.map((delivery) => (
              <ListItem key={delivery.id} _notFirst={{ marginTop: '12px' }}>
                <Link href="/about" passHref>
                  <Flex
                    as="a"
                    bg={delivery.siteName !== '' ? `${delivery.siteName}-primary` : `line-gray-300`}
                    color="black"
                    pos="relative"
                    align="center"
                    fontWeight="bold"
                    fontSize="md"
                    h="52px"
                    borderRadius="full"
                    overflow="hidden"
                    pl={14}
                  >
                    {delivery.siteName !== '' ? (
                      <SystemIcon
                        icon="truck_line2"
                        width="52px"
                        height="52px"
                        borderRadius="full"
                        pos="absolute"
                        left={0}
                        top="50%"
                        transform="translateY(-50%)"
                      />
                    ) : undefined}

                    {delivery.title}
                    <SystemIcon
                      icon="chevron_right"
                      width={5}
                      pos="absolute"
                      right="12px"
                      top="50%"
                      transform="translateY(-50%)"
                    />
                  </Flex>
                </Link>
              </ListItem>
            ))}
          </List>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ShippingMethod;
