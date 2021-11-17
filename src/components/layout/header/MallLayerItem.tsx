import { Link, Image, ListItem, Badge, Text } from '@chakra-ui/react';
import { LogoIcon, LogoIconType } from '../../icons';
import { SiteName, MallData, mapSiteNoToName } from '../../../utils';

function getActiveBackground(siteName: SiteName | string) {
  switch (siteName) {
    case SiteName.emart:
    case SiteName.traders:
    case SiteName.shinsegaemall:
    case SiteName.department:
    case SiteName.starfield:
    case SiteName.triip:
    case SiteName.starbucks:
    case SiteName.premiumoutlets:
    case SiteName.tv:
      return `${siteName}-primary`;

    case SiteName.chicor:
    case SiteName.howdy:
      return 'black';

    case SiteName.earlymorning:
      return `${siteName}-secondary-1`;

    default:
      return 'line-gray-150';
  }
}

export function getActiveColor(s: SiteName | string) {
  switch (s) {
    case SiteName.shinsegaemall:
    case SiteName.department:
    case SiteName.tv:
    case SiteName.premiumoutlets:
    case SiteName.chicor:
    case SiteName.starfield:
    case SiteName.triip:
    case SiteName.howdy:
    case SiteName.starbucks:
      return 'white';
    default:
      return 'black';
  }
}

interface Props {
  data: MallData;
  isActive: boolean;
}

const MallLayerItem = ({ data, isActive }: Props) => {
  const { siteNo, href, adInfo, needOpenIcon } = data;
  const siteName = mapSiteNoToName.val(siteNo) as SiteName | string;

  return (
    <ListItem key={siteNo}>
      <Link
        href={adInfo.linkUrl || `http://${href}`}
        d="inline-flex"
        alignItems="center"
        padding="6px"
        borderRadius="full"
        verticalAlign="top"
        _hover={{
          textDecoration: 'none',
        }}
        {...(isActive && {
          paddingRight: '13px',
          bg: getActiveBackground(siteName),
        })}
      >
        {siteName in SiteName ? (
          <LogoIcon icon={`circle_${String(siteName)}` as LogoIconType} width={5} />
        ) : (
          <Image src={adInfo.mallMvmtLogoImgUrl} alt="" w={5} h={5} />
        )}
        <Text
          ml="3px"
          fontSize="13px"
          letterSpacing="-0.3px"
          color="text-gray-600"
          {...(isActive && {
            color: getActiveColor(siteName),
            fontWeight: 'bold',
          })}
        >
          {data.siteNm}
        </Text>
        {needOpenIcon === 'Y' && !isActive && <Badge ml={1}>OPEN</Badge>}
      </Link>
    </ListItem>
  );
};

export default MallLayerItem;
