import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  List,
  ListItem,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  VisuallyHidden,
} from '@chakra-ui/react';

interface Props {
  data: {
    dataType: string;
    hasFixedLayer: boolean;
    dispCtgList: {
      dispCtgId: string;
      cornrSetId: string;
      dispCtgNm: string;
      dispCtgDesc: string;
      imgFileNm: string;
      onImgFileNm: string;
      bakgrndColrCdVal: string;
      isActivated: boolean;
      isEnabled: boolean;
    }[];
    pageId: string;
    tareaCd: string;
    unitType: 'category-tab';
    hasLayerFix: boolean;
    pageSetId: string;
    reactPrefix: string;
    apiUrl: string;
    hasEndless: boolean;
    hasMorePage: boolean;
    pageCmptId: string;
  };
  radius?: string;
}

const CategoryTab = ({ data, radius = '2xl' }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [itemName, setItemName] = useState('전체');

  const handleCategoryToggle = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  const categoryRef = useRef(null) as unknown as React.MutableRefObject<HTMLDivElement>;

  const setPosition = async (e) => {
    isOpen && (await onClose());
    const { offsetWidth, offsetLeft } = e.target;
    const categoryRefWidth: number = categoryRef.current.offsetWidth;
    categoryRef.current.scrollLeft = offsetLeft - categoryRefWidth / 2 + offsetWidth / 2;
  };

  return (
    <Box pos="sticky" top="0" zIndex={isOpen ? '1500' : '0'}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent></ModalContent>
      </Modal>
      <Box pos="relative" bg="line-gray-150">
        <Box>
          {isOpen ? (
            <Text fontSize="lg" fontWeight="bold" color="black" p="17px 0 8px 20px">
              전체메뉴
            </Text>
          ) : (
            <VisuallyHidden>전체메뉴</VisuallyHidden>
          )}
          <Box
            pos="absolute"
            top="0"
            right="0"
            zIndex="10"
            _before={
              isOpen
                ? { display: 'none' }
                : {
                    content: `""`,
                    position: 'absolute',
                    top: '50%',
                    left: '-30px',
                    transform: 'translateY(-50%)',
                    zIndex: '1',
                    width: '30px',
                    height: '100%',
                    backgroundImage:
                      'linear-gradient(to right, rgba(245, 245, 245, 0), #f5f5f5 66%)',
                  }
            }
          >
            <Button
              variant="unstyle"
              w="42px"
              h="50px"
              bg="line-gray-150"
              minW="auto"
              px={0}
              onClick={handleCategoryToggle}
              aria-expanded="false"
              _before={{
                content: `""`,
                position: 'absolute',
                top: '50%',
                left: 0,
                zIndex: '1',
                transform: 'translateY(-50%)',
                height: '20px',
                borderRight: '1px solid rgba(0,0,0,0.1)',
              }}
              _after={{
                content: `""`,
                display: 'inline-block',
                verticalAlign: 'top',
                width: '8px',
                height: '8px',
                margin: '3px 0 0 0',
                borderBottom: '1.5px solid #222',
                borderRight: '1.5px solid #222',
                transform: 'rotate(45deg)',
              }}
              {...(isOpen && {
                'aria-expanded': 'true',
                _before: {
                  content: `""`,
                  position: 'absolute',
                  left: '50%',
                  width: '18px',
                  height: '1.5px',
                  margin: '-1px 0 0 -8px',
                  border: '0',
                  background: '#222',
                  transform: 'rotate(-45deg)',
                },
                _after: {
                  content: `""`,
                  position: 'absolute',
                  left: '50%',
                  width: '18px',
                  height: '1.5px',
                  margin: '-1px 0 0 -8px',
                  border: '0',
                  background: '#222',
                  transform: 'rotate(45deg)',
                },
              })}
            >
              <VisuallyHidden>메뉴펼치기</VisuallyHidden>
            </Button>
          </Box>
        </Box>
        <Box
          ref={categoryRef}
          {...(isOpen
            ? {
                height: '100%',
                maxHeight: '282px',
                padding: '0 20px',
                whiteSpace: 'normal',
                overflow: 'hidden',
                overflowY: 'scroll',
              }
            : {
                height: '50px',
                transition: 'height 300ms cubic-bezier(0.17,0.04, 0.03, 0.94)',
                willChange: 'height',
                overflow: 'hidden',
                overflowX: 'auto',
                whiteSpace: 'nowrap',
              })}
        >
          <List py={2} d="flex" flexWrap={isOpen ? 'wrap' : 'nowrap'}>
            {data.dispCtgList?.map((item) => (
              <ListItem
                key={item.dispCtgNm}
                {...(!isOpen
                  ? { padding: '0 12px', _last: { paddingRight: '75px' } }
                  : { padding: '0 7px 0 0' })}
              >
                <Button
                  variant="unstyle"
                  minW="auto"
                  px={0}
                  lineHeight="normal"
                  h="32px"
                  color="text-gray-900"
                  fontSize="md"
                  letterSpacing="-0.3px"
                  textAlign="center"
                  borderRadius={radius}
                  fontWeight="normal"
                  transition="normal"
                  aria-selected="false"
                  onClick={(e) => {
                    setPosition(e);
                    setItemName(item.dispCtgNm);
                  }}
                  {...(isOpen && {
                    height: '36px',
                    padding: '0 14px',
                    marginTop: '7px',
                    background: '#fff',
                  })}
                  {...(item.dispCtgNm === itemName && {
                    padding: '0 14px',
                    bg: 'text-gray-900',
                    color: 'white',
                    fontWeight: 'bold',
                    'aria-selected': 'true',
                  })}
                >
                  {item.dispCtgNm}
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryTab;
