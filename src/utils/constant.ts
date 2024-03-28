export const ROUTE = {
  랜딩: '/',
  로그인: '/signin',
  개인정보처리방침: '/privacy',
  FAQ: '/faq',
};

export const TEXT = {
  login: '로그인',
  codeit: '©codeit - 2023',
  privacyPolicy: 'Privacy Policy',
  faq: 'FAQ',
};

export const MODALS_ID = {
  deleteLink: 'deleteLink',
  addToFolder: 'addToFolder',
  addFolder: 'addFolder',
  share: 'share',
  rename: 'rename',
  delete: 'delete',
};

export const BUTTONS = [
  {
    iconSource: 'images/share.svg',
    text: '공유',
    modalId: MODALS_ID.share,
  },
  {
    iconSource: 'images/pen.svg',
    text: '이름 변경',
    modalId: MODALS_ID.rename,
  },
  {
    iconSource: 'images/trash.svg',
    text: '삭제',
    modalId: MODALS_ID.delete,
  },
];

export const ALL_LINKS_TEXT = '전체';

export const KAKAO_SHARE_DATA = {
  title: 'Linkbrary',
  description: '링크를 저장하고 공유하는 가장 쉬운 방법',
  imageUrl: 'https://codeit-frontend.codeit.com/static/images/brand/og_tag.png',
};

export const ALL_LINKS_ID = 'all';

export const LOGO_IMAGE = '/images/linkbrary.svg';

export const DEFAULT_IMAGE = '/images/card-default.png';

export const SEARCH_IMAGE = '/images/search.svg';

export const CLOSE_IMAGE = '/images/close.svg';

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 31;
const year = month * 12;

export const TIME_IN_MILLISECONDS = {
  second,
  minute,
  hour,
  day,
  month,
  year,
};

export const ROOT_ID = 'root';
