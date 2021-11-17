import { Box, Flex, Heading, Image, VisuallyHidden, Link } from '@chakra-ui/react';
import { SiteNo, SiteName, MallData, getHeaderContentColor } from '../../../utils';
import MallLayer from './MallLayer';
import { LogoIcon } from '../../icons';

interface Props {
  siteName: SiteName;
  data: MallData[];
}

const MallButton = ({ siteName, data }: Props) => {
  const currentMallData = data.find((item) => item.siteNo === SiteNo[siteName]);
  const ssgMallData = data.find((item) => item.siteNo === SiteNo.ssg);
  return (
    <Box mr={5}>
      {ssgMallData && currentMallData && (
        <Flex pos="relative" align="center">
          <Heading as="h1">
            <Flex as="span" align="center">
              {siteName !== SiteName.ssg && (
                <Link href={`http://${ssgMallData.href}`} d="flex">
                  <VisuallyHidden>{ssgMallData.siteNm}</VisuallyHidden>
                  <LogoIcon
                    icon="gnb_piece_ssg"
                    height={10}
                    color={getHeaderContentColor(siteName)}
                  />
                </Link>
              )}

              <Link href="/" d="flex">
                <VisuallyHidden>{currentMallData.siteNm}</VisuallyHidden>
                {siteName in SiteName ? (
                  <LogoIcon icon={`logo_${siteName}`} height={10} />
                ) : (
                  currentMallData.adInfo.gnbTopLogoImgUrl && (
                    <Image
                      src={currentMallData.adInfo.gnbTopLogoImgUrl}
                      alt=""
                      h="50px"
                      my="-5px"
                    />
                  )
                )}
              </Link>
            </Flex>
          </Heading>

          <MallLayer siteName={siteName} data={data} arrowColor={getHeaderContentColor(siteName)} />
        </Flex>
      )}
    </Box>
  );
};

export default MallButton;
