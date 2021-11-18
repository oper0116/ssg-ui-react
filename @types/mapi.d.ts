// Type definitions for ssg-mobile-nextjs 0.1.0
// Project: https://gitlab.ssgadm.com/ssgui.mobile/demo-ssg-mobile-nextjs
// Definitions by: SSG.COM WEB Development Team
// TypeScript Version: 4.3.4
declare namespace mapi {
  /**
   * 코너
   */
  export interface Corner {
    unitType: string;
    data: Record<string, unknown>;
  }

  /**
   * [코너] 코너 배너 유닛
   * @see http://platform.ssglocal.com/doc/Main_Page/index.html#api-header-for-a-submenu-commonconrbanr
   */
  export interface CornerBannerUnit {
    id: string;
    title: string;
    desc: string;
    lnkdUrl: string;
    lnkdType: string;
    imgFileNm: string;
    strtDts: string;
    endDts: string;
    maiTitleNm1: string;
    maiTitleNm2: string;
    // TODO: 문서에는 subTitleNm1,2 로 되어있으나 실제 내려오는 값은 subtitlNm1,2
    subtitlNm1: string;
    subtitlNm2: string;
    subTitleNm1: string;
    subTitleNm2: string;
    iconTgtLst: string;
    titleShadUseYn: string;
    imgWidth: string;
    imgHeight: string;
    dispOrdr: string;
    bakgrndColrCdVal: string;
    banrRplcTextNm: string;
    modDts: string;
    advertAcctId: string;
    advertBidId: string;
    advertBilngTypeCd: string;
    advertKindCd: string;
    advertExtensTeryDivCd: string;
    iconTagList: string;
    advertYn: string;
    newYn: string;
    linkReactTarea?: string;
  }

  /**
   * [코너] 배너 유닛
   * @description BarnList 데이터 배너유닛, 배너유닛타입으로 구분
   */
  export interface BannerUnit {
    id: string;
    title: string;
    desc: string;
    lnkdUrl: string;
    lnkdType: string;
    imgFileNm: string;
    strtDts: string;
    endDts: string;
    maiTitleNm1: string;
    maiTitleNm2: string;
    subtitlNm1: string;
    subtitlNm2: string;
    iconTgtLst: string;
    titleShadUseYn: string;
    imgWidth: string;
    imgHeight: string;
    dispOrdr: string;
    bakgrndColrCdVal: string;
    banrRplcTextNm: string;
    modDts: string;
    advertYn: string;
    newYn: string;
    soldOutYn?: string;
    viewCnt: number;
    likeCnt: number;
    dispCtgNm?: string;
    ssgOnlyYn?: string;
    repItemImgFileNm?: string;
    repItemNm?: string;
    repItemPrc?: string;
    repItemOriPrc?: string;
    dtlLnkdUrl?: string;
    notiRegUrl: string;
    notiSendYn?: string;
    brocItemList?: string;
    regTypeCd: string;
    subtlCntt: string;
    dataFileNm: string;
    banrTgtTypeCd: string;
    banrTypeCd: string;
    advertAcctId: string;
    advertBidId: string;
    advertBilngTypeCd: string;
    advertKindCd: string;
    advertExtensTeryDivCd: string;
    mdlInfo?: string;
    banrTagTgtList?: string;
    iconTgtList: any[];
  }

  /**
   * 모듈 매장
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-ModuleStore-ModuleStoreController_getPageDatas
   */
  export interface ModuleStore {
    hasNext: string;
    layoutType: string;
    title: string;
    state: string;
    areaList: Array<AreaList | AreaList[]>;
  }

  export type AreaList =
    | ModuleUnitBlankUnit
    | ModuleUnitSubTab
    | ModuleUnitTitleUnit
    | ModuleUnitCategoryTab
    | ModuleUnitImgCategoryTab01
    | ModuleUnitImgCategoryTab02
    | ModuleUnitImgCategoryTab03
    | ModuleUnitSortingTab
    | ModuleUnitCountDown
    | ModuleUnitShppOrItemFilter
    | ModuleUnitShppOrItemFilter2
    | ModuleUnitMainRollingBanner
    | ModuleUnitQuickLink
    | ModuleUnitQuickLinkGrid
    | ModuleUnitCardBanner
    | ModuleUnitCardBanner02
    | ModuleUnitImageBanner
    | ModuleUnitSimpleKeyword
    | ModuleUnitShippingTime
    | ModuleUnitProductUnit
    | ModuleUnitTimedealItem01
    | ModuleUnitTimedealItem02
    | ModuleUnitNanaTimedealItem
    | ModuleUnitItemBarnUnit
    | ModuleUnitGridItem
    | ModuleUnitTogetherItem
    | ModuleUnitReviewItemUnit
    | ModuleUnitReviewSwipeUnit
    | ModuleUnitVideoRollingBanner
    | ModuleUnitDeliveryGuide
    | ModuleUnitDeliveryGuide02;

  /**
   * [모듈유닛] 블랭크
   * @see http://platform.ssglocal.com/doc/#api-header-for-a-submenu-module-blank
   */
  export interface ModuleUnitBlankUnit {
    unitType: 'BLANK_UNIT';
    pageSetId: string;
    reactPrefix: string;
    dataType: string;
    width: string;
    bakgrndColrCdVal: string;
    pageId: string;
    tareaCd: string;
    pageCmptId: string;
    height: string;
  }

  /**
   * [모듈유닛] 서브탭
   * @see http://platform.ssglocal.com/doc/#api-header-for-a-submenu-module-subtab
   */
  export interface ModuleUnitSubTab {
    unitType: 'SUB_TAB_01' | 'SUB_TAB_02';
    reactPrefix: string;
    pageId: string;
    pageCmptId: string;
    hasImgRightAngle: string;
    openNewWindowYn: string;
    subPageList: Array<{
      imgFileNm: string;
      maiTitleNm1: string;
      maiTitleNm2: string;
      subPageId: string;
      lnkdUrl: string;
      bakgrndColrCdVal: string;
    }>;
    subPageOrdr: string;
  }

  /**
   * [모듈유닛] 타이틀
   * @see http://platform.ssglocal.com/doc/Main_Page/index.html#api-header-for-a-submenu-module-title
   */
  export interface ModuleUnitTitleUnit {
    unitType: 'TITLE_UNIT';
    reactPrefix: string;
    pageId: string;
    pageCmptId: string;
    maiTitleNm1: string;
    maiTitleNm2: string;
    subtitlNm1: string;
    subtitlNm2: string;
    mainTitle1ColorCd: string;
    mainTitle2ColorCd: string;
    imgFileNm: string;
  }

  /**
   * [모듈유닛] 카테고리탭
   * @see http://platform.ssglocal.com/doc/#api-header-for-a-submenu-module-categorytab
   */
  export interface ModuleUnitCategoryTab {
    unitType: 'CATEGORY_TAB';
    apiUrl: string;
    reactPrefix: string;
    hasMorePage: string;
    hasLayerFix: string;
    hasFixedLayer: string;
    hasEndless: string;
    pageId: string;
    pageCmptList: string;
    dispCtgList: Array<{
      dispCtgId: string;
      cornrSetId: string;
      dispCtgNm: string;
      imgFileNm: string;
      onImgFileNm: string;
      isActivated: string;
    }>;
    bakgrndColrCdVal: string;
    wholeBakgrndColrCdVal: string;
  }

  /**
   * [모듈유닛] 이미지카테고리탭1
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-imgcategorytab
   */
  export interface ModuleUnitImgCategoryTab01 {
    unitType: 'IMG_CATEGORY_TAB_01';
    apiUrl: string;
    reactPrefix: string;
    hasMorePage?: string;
    hasLayerFix?: string;
    hasFixedLayer: string;
    hasEndless: string;
    pageId: string;
    pageCmptId: string;
    dispCtgList: Array<{
      dispCtgId: string;
      cornrSetId: string;
      dispCtgNm: string;
      dispCtgDesc: string;
      imgFileNm: string;
      bakgrndColrCdVal: string;
      isActivated: string;
    }>;
  }

  /**
   * [모듈유닛] 이미지카테고리탭2
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-ssgdaycategorytab
   */
  export interface ModuleUnitImgCategoryTab02 {
    unitType: 'IMG_CATEGORY_TAB_02';
    apiUrl: string;
    reactPrefix: string;
    hasMorePage?: string;
    hasLayerFix?: string;
    hasFixedLayer: string;
    hasEndless: string;
    pageId: string;
    pageCmptId: string;
    dispCtgList: Array<{
      dispCtgId: string;
      cornrSetId: string;
      dispCtgNm: string;
      dispCtgDesc: string;
      imgFileNm: string;
      bakgrndColrCdVal: string;
      isActivated: string;
    }>;
  }

  /**
   * [모듈유닛] 이미지카테고리탭3
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-imgcategorytab3
   */
  export interface ModuleUnitImgCategoryTab03 {
    unitType: 'IMG_CATEGORY_TAB_03';
    apiUrl: string;
    reactPrefix: string;
    bakgrndColrCdVal: string;
    pageId: string;
    pageCmptId: string;
    dispCtgList: Array<{
      dispCtgId: string;
      cornrSetId: string;
      dispCtgNm: string;
      dispCtgDesc: string;
      imgFileNm: string;
      bakgrndColrCdVal: string;
      isActivated: string;
    }>;
  }

  /**
   * [모듈유닛] 품목소팅형탭
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-sortingtab
   */
  export interface ModuleUnitSortingTab {
    unitType: 'SORTING_TAB';
    apiUrl: string;
    reactPrefix: string;
    bakgrndColrCdVal: string;
    pageId: string;
    pageCmptId: string;
    maiTitleNm1: string;
    titleColrCdVal: string;
    allBtnYn: string;
    dispCtgList: Array<{
      dispCtgId: string;
      cornrSetId: string;
      dispCtgNm: string;
      dispCtgDesc: string;
      imgFileNm: string;
      bakgrndColrCdVal: string;
      isActivated: string;
    }>;
  }

  /**
   * [모듈유닛] 카운트다운
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-countdown
   */
  export interface ModuleUnitCountDown {
    unitType: 'COUNT_DOWN';
    reactPrefix: string;
    pageId: string;
    pageCmptId: string;
    cornrId: string;
    cornrSetId: string;
    cornrSetDispNm: string;
    dispStrtDts: string;
    dispEndDts: string;
  }

  /**
   * [모듈유닛] 배송/상품유형필터
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-shpp
   */
  export interface ModuleUnitShppOrItemFilter {
    unitType: 'SHPP_OR_ITEM_FILTER';
    apiUrl: string;
    reactPrefix: string;
    hasMorePage: string;
    pageId: string;
    pageCmpId: string;
    filterList: Array<{
      filterType: string;
      filterValue: string;
      filterNm: string;
    }>;
  }

  /**
   * [모듈유닛] 배송/상품유형필터2
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-shpp2
   */
  export interface ModuleUnitShppOrItemFilter2 {
    unitType: 'SHPP_OR_ITEM_FILTER2';
    apiUrl: string;
    reactPrefix: string;
    hasMorePage: string;
    pageId: string;
    pageCmptId: string;
    filterList: Array<{
      filterType: string;
      filterValue: string;
      filterNm: string;
    }>;
    filterList2: Array<{
      filterType: string;
      filterValue: string;
      filterNm: string;
    }>;
  }

  /**
   * [모듈유닛] 배송/상품유형필터2
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-mainrollingbanner
   */
  export interface ModuleUnitMainRollingBanner {
    unitType: 'MAIN_ROLLING_BANNER' | 'DEPT_MAIN_ROLL_BANR';
    hasTitle: string;
    reactPrefix: string;
    pageId: string;
    pageCmptId: string;
    banrList: string;
  }

  /**
   * [모듈유닛] 퀵링크
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-quicklink
   */
  export interface ModuleUnitQuickLink {
    unitType:
      | 'QUICK_HORI_BANNER'
      | 'QUICK_VERTI_BANNER'
      | 'QUICK_4COLUMN_BANR'
      | 'QUICK_SWIPE_BANNER';
    reactPrefix: string;
    pageSetId: string;
    dataType: string;
    maiTitleNm1: string;
    maiTitleNm2: string;
    lnkdUrl: string;
    hasNext: string;
    pageId: string;
    pageCmptId: string;
    tareaCd: string;
    banrList: Array<CornerBannerUnit>;
    hasImgRounded: string;
  }

  /**
   * [모듈유닛] 퀵링크_그리드형
   * @see http://platform.ssglocal.com/doc/Main_Page/index.html#api-header-for-a-submenu-module-quicklink-grid
   */
  export interface ModuleUnitQuickLinkGrid {
    unitType: 'QUICK_GRID_BANNER';
    reactPrefix: string;
    maiTitleNm1: string;
    maiTitleNm2: string;
    lnkdUrl: string;
    hasNext: string;
    pageId: string;
    pageCmptId: string;
    banrList: Array<CornerBannerUnit>;
  }

  /**
   * [모듈유닛] 카드배너
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-cardbanner
   */
  export interface ModuleUnitCardBanner {
    unitType: 'CARD_BANNER';
    reactPrefix: string;
    pageId: string;
    pageCmptId: string;
    banrList: Array<CornerBannerUnit>;
  }

  /**
   * [모듈유닛] 카드배너 가로형
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-cardbanner
   */
  export interface ModuleUnitCardBanner02 {
    unitType: 'CARD_BANNER_02';
    reactPrefix: string;
    pageId: string;
    pageCmptId: string;
    subtitlNm1: string;
    subtitlNm2: string;
    banrList: Array<CornerBannerUnit>;
  }

  /**
   * [모듈유닛] 이미지배너
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-imagebanner
   */
  export interface ModuleUnitImageBanner {
    unitType: 'IMAGE_BANNER' | 'IMAGE_HORI_BANNER' | 'DEPT_BANR_SWIPE' | 'BANNER_SWIPE_RADIUS';
    reactPrefix: string;
    pageId: string;
    pageCmptId: string;
    banrList: Array<BannerUnit>;
    hasImgRounded: string;
  }

  /**
   * [모듈유닛] 키워드(배너형)
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-simplekeyword
   */
  export interface ModuleUnitSimpleKeyword {
    unitType: 'SIMPLE_KEYWORD';
    reactPrefix: string;
    pageId: string;
    pageCmptId: string;
    maiTitleNm1: string;
    maiTitleNm2: string;
    keyword: Array<{
      keyword: string;
      lnkdUrl: string;
      bakgrndColrCdVal: string;
      colrCdVal: string;
    }>;
  }

  /**
   * [모듈유닛] 배송안내유닛
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-shppTime
   */
  export interface ModuleUnitShippingTime {
    unitType: 'DELIVERY_GUIDE';
    reactPrefix: string;
    pageId: string;
    pageCmptId: string;
    shppTimeList: Array<any>;
  }

  /**
   * [모듈유닛] 상품유닛
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-cornritem
   */
  export interface ModuleUnitProductUnit {
    unitType:
      | 'IMG_ITEM'
      | 'IMG_ITEM_ORD_QTY'
      | 'BIMG_ITEM'
      | 'LIST_ITEM'
      | 'IMG_ITEM_SWIPE'
      | 'DEPT_IMG_ITEM'
      | 'DEPT_VRTC_ITEM_SWIPE';
    reactPrefix: string;
    apiUrl: string;
    hasMorePage?: string;
    hasNext: string;
    displayItemTopArea?: string;
    pageId: string;
    pageCmptId: string;
    itemList: Array<{
      maiTitleNm1: string;
      maiTitleNm2: string;
      subtitlNm1: string;
      subtitlNm2: string;
      dispCtgId: string;
      cornrSetId: string;
      itemType: string;
      shppType: string;
      linkUrl: string;
    }>;
  }

  /**
   * [모듈유닛] 타임딜상품유닛1
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-timedealitem
   */
  export interface ModuleUnitTimedealItem01 {
    unitType: 'TIMEDEAL_ITEM_01';
    reactPrefix: string;
    pageId: string;
    pageSetId: string;
    pageCmptId: string;
    itemList: Array<{
      maiTitleNm1: string;
      maiTitleNm2: string;
      subtitlNm1: string;
      subtitlNm2: string;
      sellStrtDts: string;
      sellEndDts: string;
      usablInvQty: string;
    }>;
    bakgrndColrCdVal: string;
  }

  /**
   * [모듈유닛] 타임딜상품유닛2
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-ssgdaytimedealitem
   */
  export interface ModuleUnitTimedealItem02 {
    unitType: 'TIMEDEAL_ITEM_02' | 'DEPT_TIMEDEAL_ITEM';
    reactPrefix: string;
    pageId: string;
    pageSetId: string;
    pageCmptId: string;
    itemList: Array<{
      maiTitleNm1: string;
      maiTitleNm2: string;
      subtitlNm1: string;
      subtitlNm2: string;
      sellStrtDts: string;
      sellEndDts: string;
      usablInvQty: string;
    }>;
  }

  /**
   * [모듈유닛] 타임딜상품유닛2
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-ssgdaytimedealitem
   */
  export interface ModuleUnitNanaTimedealItem {
    unitType: 'NANA_TIMEDEAL_ITEM';
    reactPrefix: string;
    pageId: string;
    pageSetId: string;
    pageCmptId: string;
    linkUrl: string;
    itemList: Array<{
      maiTitleNm1: string;
      maiTitleNm2: string;
      subtitlNm1: string;
      subtitlNm2: string;
      sellStrtDts: string;
      sellEndDts: string;
      usablInvQty: string;
    }>;
    bakgrndColrCdVal: string;
    titleColrCdVal: string;
    iconColrCdVal: string;
  }

  /**
   * [모듈유닛] 상품 배너 유닛
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-itembanrunit
   */
  export interface ModuleUnitItemBarnUnit {
    unitType: 'ITEM_BANR_UNIT';
    reactPrefix: string;
    pageId: string;
    pageSetId: string;
    pageCmptId: string;
    itemList: Array<{
      maiTitleNm1: string;
      subtitlNm1: string;
    }>;
  }

  /**
   * [모듈유닛] 상품 배너 유닛
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-griditem
   */
  export interface ModuleUnitGridItem {
    unitType: 'GRID_ITEM';
    reactPrefix: string;
    hasImgRightAngle: string;
    hasImgAddFirst: string;
    pageId: string;
    pageSetId: string;
    pageCmptId: string;
    itemList: any; // mapi 정의안됨
  }

  /**
   * [모듈유닛] 상품 배너 유닛
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-togetheritem
   */
  export interface ModuleUnitTogetherItem {
    unitType: 'TOGETHER_ITEM';
    reactPrefix: string;
    pageId: string;
    pageSetId: string;
    pageCmptId: string;
    itemList: any; // mapi 정의안됨
  }

  /**
   * [모듈유닛] 리뷰상품유닛
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-reviewitem
   */
  export interface ModuleUnitReviewItemUnit {
    unitType: 'REVIEW_ITEM_UNIT';
    reactPrefix: string;
    apiUrl: string;
    hasMorePage?: string;
    hasNext: string;
    pageId: string;
    pageCmptId: string;
    itemList: Array<{
      maiTitleNm1: string;
      maiTitleNm2: string;
      subtitlNm1: string;
      subtitlNm2: string;
      dispCtgId: string;
      cornrSetId: string;
      itemType: string;
      shppType: string;
    }>;
    reviewAddInfoData: Review; //  해당 위치가 맞는지 확인 필요
  }

  /**
   * [모듈유닛] 리뷰상품유닛
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-reviewitem
   */
  export interface ModuleUnitReviewSwipeUnit {
    unitType: 'REVIEW_SWIPE_UNIT';
    reactPrefix: string;
    apiUrl: string;
    hasMorePage?: string;
    hasNext: string;
    pageId: string;
    pageCmptId: string;
    itemList: Array<{
      maiTitleNm1: string;
      maiTitleNm2: string;
      subtitlNm1: string;
      subtitlNm2: string;
      dispCtgId: string;
      cornrSetId: string;
      itemType: string;
      shppType: string;
    }>;
    reviewAddInfoData: Review; //  해당 위치가 맞는지 확인 필요
  }

  /**
   * [모듈유닛] 유아동 리뷰상품유닛
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-nanaReviewUnit
   */
  export interface ModuleUnitNanaReviewUnit {
    unitType: 'NANA_REVIEW_UNIT';
    reactPrefix: string;
    apiUrl?: string;
    hasMorePage: string;
    hasNext: string;
    pageId: string;
    pageCmptId: string;
    itemList: Array<{
      maiTitleNm1: string;
      maiTitleNm2: string;
      subtitlNm1: string;
      subtitlNm2: string;
      dispCtgId: string;
      cornrSetId: string;
      itemType: string;
      shppType: string;
    }>;
    reviewAddInfoData: Review; //  해당 위치가 맞는지 확인 필요
  }

  /**
   * [모듈유닛] 이미지 컬렉션 (더보기 유닛)
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-moreoption
   */
  export interface ModuleUnitImageCollection {
    unitType: 'IMAGE_COLLECTION';
    reactPrefix: string;
    pageId: string;
    pageCmptId: string;
    imgFileNmList: Array<{
      maiTitleNm1: string;
      maiTitleNm2: string;
      subtitlNm1: string;
      subtitlNm2: string;
      lnkdUrl: string;
    }>;
  }

  /**
   * [모듈유닛] 기획전유닛
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-cornrplanshop
   */
  export interface ModuleUnitSpecialUnit {
    unitType: 'OSMU_PNSHOP';
    reactPrefix: string;
    pageId: string;
    pageCmptId: string;
    planshopList: Array<{
      planshop: string;
      itemList: any; // 리스트??
    }>;
  }

  /**
   * [모듈유닛] 비디오 롤링 배너 유닛
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-videoRollingBanner
   */
  export interface ModuleUnitVideoRollingBanner {
    unitType: 'VIDEO_ROLLING_BANNER';
    reactPrefix: string;
    pageId: string;
    pageCmptId: string;
    pageSetId: string;
    hasNext: string;
    hasDesc: string;
    banrList: Array<BannerUnit>;
  }

  /**
   * [모듈유닛] 배송안내유닛
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-shppTime
   */
  export interface ModuleUnitDeliveryGuide {
    unitType: 'DELIVERY_GUIDE';
    reactPrefix: string;
    pageId: string;
    pageCmptId: string;
    shppTimeList: Array<{
      msgNoColorSecond: string;
      shppTime: string;
      siteNo: string;
      msgNoColorFirst: string;
      msgColorFirst: string;
      msgColorSecond: string;
      lnkdUrl: string;
      msgColrCdVal: string;
    }>;
  }

  /**
   * [모듈유닛] 배송안내유닛2
   * @description mapi 정의 없음
   */
  export interface ModuleUnitDeliveryGuide02 {
    unitType: 'DELIVERY_GUIDE_02';
    pageSetId: string;
    reactPrefix: string;
    shpplocListUrl: string;
    foldBtnTxt: string;
    dataType: string;
    shpplocListBtnTxt: string;
    pageId: string;
    tareaCd: string;
    pageCmptId: string;
    shppTimeList: Array<{
      msgNoColorSecond: string;
      shppTime: string;
      siteNo: string;
      msgNoColorFirst: string;
      msgColorFirst: string;
      msgColorSecond: string;
      lnkdUrl: string;
      msgColrCdVal: string;
    }>;
  }

  // TODO: 모듈매장 타입정리..
  // Docs 문서를 보고 파악하기에는 어려움이 있어 실 데이터를 보고 확인이 필요

  // /**
  //  * [모듈유닛] 공식스토어유닛
  //  * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-module-specialstore
  //  */
  //  export interface ModuleUnitSpecialUnit {
  //   unitType: 'SPECIALSTORE_UNIT' | 'SPECIALSTORE_SWIPE';
  //   reactPrefix: string;
  //   pageId: string;
  //   pageCmptId: string;
  //   planshopList: Array<{
  //     planshop: string;
  //     itemList: any;  // 리스트??
  //   }>;
  // }

  /**
   * 배너
   */
  export interface Banner {
    title: string;
    lnkdUrl: string;
    imgFileNm: string;
    subtitlNm1: string;
    subtitlNm2: string;
    dataReactTarea?: string;
  }

  /**
   * 카테고리 배너 리스트(LNB 카테고리 등)
   */
  export interface CategoryBannerList {
    dispCtgNm: string;
    linkUrl: string;
    imgFileNm: string;
    ctgList: Array<CategoryBannerList>;
    dataReactTarea?: string;
  }

  /**
   * 리뷰데이터
   * @see http://platform.ssglocal.com/doc/ModuleStore/index.html#api-header-for-a-submenu-reviewAddtInfoData
   */
  export interface Review {
    postngId: string;
    postngClsCd: string;
    postngClsNm: string;
    postngTitleNm: string;
    postngCntt: string;
    imgUrlList: string;
    vodThumbUrl: string;
    vodUrl: string;
    lnkdUrl: string;
    recomAttrMap: string; // 값 확인 필요
  }
}

export as namespace mapi;

export = mapi;
