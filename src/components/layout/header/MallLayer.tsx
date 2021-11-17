import {
  Box,
  IconButton,
  Link,
  List,
  VisuallyHidden,
  Modal,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
} from '@chakra-ui/react';
import dayjs from 'dayjs';

import { SystemIcon, LogoIcon } from '../../icons';
import { SiteNo, SiteName, MallData, MallType } from '../../../utils';
import MallLayerItem from './MallLayerItem';
interface Props {
  siteName: SiteName;
  data: MallData[];
  arrowColor: string;
}

const MallLayer = ({ siteName, data, arrowColor }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ssgMallData = data.find((item) => item.siteNo === SiteNo.ssg)!;
  // 광고 기간 내 광고몰 및 SSG 제외한 나머지 몰 리스트
  const filteredMallItemList = data.filter((item) => {
    const splitedSiteNo = item.siteNo.split('_');

    let isDisplay = true;
    if (splitedSiteNo.length > 1) {
      const mallType = splitedSiteNo[1];
      if (mallType === MallType.SELLER_STORE || mallType === MallType.SPECIAL_STORE) {
        isDisplay = dayjs().isBefore(item.adInfo.endDts);
      }
    }
    return isDisplay && item.siteNo !== SiteNo.ssg;
  });

  return (
    <>
      <IconButton
        icon={<SystemIcon icon="chevron_down_circle2" width={4} color={arrowColor} />}
        onClick={onOpen}
        aria-label="몰 목록"
        variant="unstyled"
        minW="0"
        ml="3px"
      />
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay bg="transparent" />
        <ModalContent
          as={Box}
          w="324px"
          maxW="100vw"
          minW="320px"
          m="8px auto auto 0"
          ml={{ sm: '12px' }}
          borderRadius="20"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 8px 0px"
          border="solid 1px"
          borderColor="rgba(0, 0, 0, 0.03)"
        >
          <Box mx="18px" p="17px 0 9px" borderBottom="1px solid" borderBottomColor="line-gray-200">
            <Link
              href={`http://${ssgMallData.href}`}
              d="inline-flex"
              alignItems="center"
              verticalAlign="top"
            >
              <VisuallyHidden>{ssgMallData.siteNm}</VisuallyHidden>
              <LogoIcon icon="circle_ssg" width={7} height={7} mr="3px" />
              <LogoIcon icon="logo_ssg" d="block" width="74px" height="auto" />
              <SystemIcon icon="chevron_right" width={4} />
            </Link>
          </Box>
          <SimpleGrid as={List} columns={2} spacingY="6px" padding="6px 18px 12px 12px">
            {filteredMallItemList.map((item) => {
              return (
                <MallLayerItem
                  key={item.siteNo}
                  data={item}
                  isActive={item.siteNo === SiteNo[siteName]}
                />
              );
            })}
          </SimpleGrid>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MallLayer;
