import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export default {
  title: '디자인시스템 테마/모달',
};

export const Default = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant="link" colorScheme="black" onClick={onOpen}>
        모달 열기
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} {...args}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>모달 헤더</ModalHeader>
          <ModalCloseButton />
          <ModalBody>모달 컨텐츠</ModalBody>
          <ModalFooter>모달 푸터</ModalFooter>
        </ModalContent>
      </Modal>

      <Box h="100vh" />
    </>
  );
};
Default.args = {
  size: 'xs',
  blockScrollOnMount: true,
  closeOnOverlayClick: true,
  isCentered: false,
};
Default.argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
    },
  },
  blockScrollOnMount: {
    control: {
      type: 'boolean',
    },
  },
  closeOnOverlayClick: {
    control: {
      type: 'boolean',
    },
  },
  isCentered: {
    control: {
      type: 'boolean',
    },
  },
};

export const ControlFocusWhenModalCloses = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef<HTMLDivElement>(null);

  // 미리보기
  React.useEffect(() => onOpen(), [onOpen]);

  return (
    <>
      <Box ref={finalRef} tabIndex={-1} aria-label="Focus moved to this box">
        모달이 닫힐 때 포커싱 되어야 할 컨텐츠
      </Box>

      <Button variant="link" colorScheme="black" onClick={onOpen}>
        모달 열기
      </Button>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>모달 헤더</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            이 모달이 닫히면 finalFocusRef로 지정된 레퍼런스로 포커스가 이동합니다.
          </ModalBody>
          <ModalFooter px={0} pb={0}>
            <Button isFullWidth colorScheme="gray" borderBottomLeftRadius="lg" onClick={onClose}>
              취소
            </Button>
            <Button isFullWidth borderBottomRightRadius="lg" onClick={onClose}>
              확인
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export const FocusOnSpecificElement = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef<HTMLInputElement>(null);

  // 미리보기
  React.useEffect(() => onOpen(), [onOpen]);

  return (
    <>
      <Button variant="link" colorScheme="black" onClick={onOpen}>
        모달 열기
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>모달 헤더</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>폼 레이블</FormLabel>
              <Input ref={initialRef} placeholder="플레이스 홀더" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>폼 레이블</FormLabel>
              <Input placeholder="플레이스 홀더" />
            </FormControl>
          </ModalBody>
          <ModalFooter px={0} pb={0}>
            <Button isFullWidth colorScheme="gray" borderBottomLeftRadius="lg" onClick={onClose}>
              취소
            </Button>
            <Button isFullWidth borderBottomRightRadius="lg" onClick={onClose}>
              확인
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export const MakeModalVerticallyCentered = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // 미리보기
  React.useEffect(() => onOpen(), [onOpen]);

  return (
    <>
      <Button variant="link" colorScheme="black" onClick={onOpen}>
        모달 열기
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>모달 헤더</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={4}>
            기본값으로, 모달은 3.75rem의 vertical offset을 가집니다. <br />
            ModalContent의 top값을 변경하면 vertical offset을 변경할 수 있습니다. <br />
            화면의 가운데에 모달을 배치하고 싶다면 isCentered prop을 지정하세요.
            <Box mt={2}>
              <Text color="primary" ml={1}>
                모달 내 콘텐츠가 뷰포트를 넘어 오버플로되면 이 기능을 사용하지 마세요. isCentered
                대신 overflow behavior를 설정하면 됩니다.
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const AddingTransitions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant="link" colorScheme="black" onClick={onOpen}>
        모달 열기
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>모달 헤더</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={4}>
            기본값으로, 모달은 애니메이션값이 없습니다. <br />
            motionPreset을 사용하여 애니메이션을 구성할 수 있습니다.
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const OverflowBehavior = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // 미리보기
  React.useEffect(() => onOpen(), [onOpen]);

  return (
    <>
      <Button variant="link" colorScheme="black" onClick={onOpen}>
        모달 열기
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="full" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent mb="0 !important" maxHeight="calc(100vh - 3.5rem) !important">
          <ModalHeader>모달 헤더</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={4}>
            모달 내의 콘텐츠가 뷰포트를 넘어 오버플로되면 scrollBehavior prop으로 스크롤 방식을
            제어할 수 있습니다.
            <br />
            inside로 설정하면, ModalBody 내에서만 스크롤됩니다.
            <br />
            outside로 설정하면, 전체 ModalContent가 뷰포트 내에서 스크롤됩니다.
            <Box h="100vh" />
            모달 내용이 아주 길어졌어요.
          </ModalBody>
          <ModalFooter px={0} pb={0}>
            <Button isFullWidth colorScheme="gray" borderBottomLeftRadius="lg" onClick={onClose}>
              취소
            </Button>
            <Button isFullWidth borderBottomRightRadius="lg" onClick={onClose}>
              확인
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
