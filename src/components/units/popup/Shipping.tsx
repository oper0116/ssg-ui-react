import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  List,
  ListItem,
  Flex,
  Box,
} from '@chakra-ui/react';
import Link from 'next/link';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: {
    currentAddr: string;
  };

  itemList: {
    id: number;
    title: string;
    linkUrl: string;
    siteName: string;
  }[];
}

const linkStyles: React.CSSProperties = {
  height: '40px',
  letterSpacing: '-0.3px',
  fontWeight: 'bold',
  marginBottom: '5px',
};

const Shipping = ({ isOpen, onClose, data, itemList }: Props) => {
  const { currentAddr } = data;
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered>
      <ModalOverlay />
      <ModalContent minW={275} maxW={375}>
        <Box overflow="hidden" borderRadius="lg">
          <ModalHeader>
            {currentAddr && (
              <Text fontSize="2xl" color="black">
                현재 고객님의 주소지는 쓱배송을 이용할 수 없습니다 :(
              </Text>
            )}
            <Text fontSize="md" color="text-gray-700">
              빠른 서비스 확대를 위해 노력하겠습니다.
            </Text>
          </ModalHeader>
          <ModalBody>
            <List>
              {itemList.map((item) => (
                <ListItem key={item.id}>
                  <Link href={item.linkUrl} passHref>
                    <Flex
                      as="a"
                      bg={item.siteName !== '' ? `${item.siteName}-primary` : `black`}
                      color={item.siteName !== '' ? `text-gray-900` : `white`}
                      pos="relative"
                      justify="center"
                      align="center"
                      fontSize="md"
                      style={linkStyles}
                    >
                      {item.title}
                    </Flex>
                  </Link>
                </ListItem>
              ))}
            </List>
          </ModalBody>
          <ModalFooter px={0} pb={0} overflow="hidden">
            <Link href="/" passHref>
              <Box
                as="a"
                bg="line-gray-300"
                color="text-gray-800"
                fontSize="xl"
                fontWeight="normal"
                w="full"
                h="44px"
                d="flex"
                alignItems="center"
                justifyContent="center"
              >
                이전으로 돌아가기
              </Box>
            </Link>
          </ModalFooter>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default Shipping;
