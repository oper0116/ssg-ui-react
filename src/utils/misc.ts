import { SiteName } from './mappers';

export function getHeaderBackground(siteName: SiteName) {
  let bgColor: string;

  switch (siteName) {
    case SiteName.emart:
    case SiteName.traders:
    case SiteName.department:
    case SiteName.shinsegaemall:
    case SiteName.howdy:
    case SiteName.starfield:
    case SiteName.triip:
    case SiteName.starbucks:
    case SiteName.premiumoutlets:
    case SiteName.tv:
      bgColor = `${siteName}-primary`;
      break;

    case SiteName.chicor:
      bgColor = `${siteName}-secondary`;
      break;

    case SiteName.earlymorning:
      bgColor = `${siteName}-secondary-1`;
      break;

    case SiteName.sivillage:
      bgColor = 'black';
      break;

    // ssg, casamia, 광고몰
    default:
      bgColor = 'white';
  }

  if (siteName === SiteName.department) {
    return {
      bgColor,
      // FIXME: url 정리
      backgroundImage: 'http://stg-ui.ssgcdn.com/ui/m_ssg/img/com_v2/bg_ptn_dept.png',
      backgroundSize: '7px auto',
    };
  }

  return {
    bgColor,
  };
}

export function getHeaderContentColor(s: SiteName) {
  switch (s) {
    case SiteName.shinsegaemall:
    case SiteName.department:
    case SiteName.tv:
    case SiteName.sivillage:
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
