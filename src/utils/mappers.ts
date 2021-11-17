import BiMap from 'bimap';

interface IBiMap<T> {
  /** key로 value를 얻음 */
  key(key: keyof T): T[keyof T];
  /** value로 key를 얻음 */
  val(value: T[keyof T]): keyof T;
}

/**
 * 몰 정보
 */
export enum SiteNo {
  ssg = '6005',
  emart = '6001',
  traders = '6002',
  shinsegaemall = '6004',
  department = '6009',
  howdy = '6100',
  tv = '6200',
  sivillage = '6300',
  starfield = '6400',
  premiumoutlets = '7008',
  earlymorning = '7009',
  casamia = '7011',
  chicor = '7012',
  triip = '7013',
  starbucks = '7015',
}

export enum SiteName {
  ssg = 'ssg',
  emart = 'emart',
  traders = 'traders',
  shinsegaemall = 'shinsegaemall',
  department = 'department',
  howdy = 'howdy',
  tv = 'tv',
  sivillage = 'sivillage',
  starfield = 'starfield',
  premiumoutlets = 'premiumoutlets',
  earlymorning = 'earlymorning',
  casamia = 'casamia',
  chicor = 'chicor',
  triip = 'triip',
  starbucks = 'starbucks',
}

export const mapSiteNoToName = new BiMap(SiteNo) as IBiMap<SiteNo>;

export interface MallData {
  siteNo: SiteNo | string;
  href: string;
  siteNm: string;
  needOpenIcon: string;
  adInfo: {
    mallMvmtLogoImgUrl: string;
    linkUrl: string;
    gnbTopLogoImgUrl: string;
    endDts: string;
  };
}

export enum MallType {
  SPECIAL_STORE = '10',
  SELLER_STORE = '20',
}

export interface LiveCommerceData {
  brocStrtDts: string;
  brocEndDts: string;
  liveFloatImgUrl: string;
  liveFloatSmallImgUrl: string;
  livePageLinkUrl: string;
  totalCnt: number;
  liveLayerApiUrl: string;
}

export interface FloatingChatData {
  csTalkCount: number;
  csTalkHref: string;
  sellerTalkCount: number;
  sellerTalkHref: string;
}
