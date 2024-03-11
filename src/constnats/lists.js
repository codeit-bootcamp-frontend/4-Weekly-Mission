import {
  LANDING_LINK,
  LANDING_MANAGE,
  LANDING_SEARCH,
  LANDING_SHARE,
  EDIT_SHARE,
  EDIT_CHANGE,
  EDIT_DELETE,
} from "./image";

/* LINK - Landing 페이지 메인 콘텐츠 */

export const LANDING_CONTENT_LIST = [
  {
    title: () => (
      <>
        <span>원하는 링크</span>를 저장하세요
      </>
    ),
    text: "나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든 것을 한 공간에 저장하세요.",
    image: LANDING_LINK,
    alt: "link",
  },
  {
    title: () => (
      <>
        링크를 폴더로
        <span>관리</span>하세요
      </>
    ),
    text: "나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다",
    image: LANDING_MANAGE,
    alt: "manage",
  },
  {
    title: () => (
      <>
        링크를 폴더로
        <span>관리</span>하세요
      </>
    ),
    text: "여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.",
    image: LANDING_SHARE,
    alt: "share",
  },
  {
    title: () => (
      <>
        저장한 링크를 <span>검색</span>해 보세요
      </>
    ),
    text: "중요한 정보들을 검색으로 쉽게 찾아보세요",
    image: LANDING_SEARCH,
    alt: "search",
  },
];

/* LINK - Landing 페이지 메인 콘텐츠 */

export const EDIT_TOOLBAR_LIST = [
  {
    image: EDIT_SHARE,
    title: "공유",
  },
  {
    image: EDIT_CHANGE,
    title: "이름 변경",
  },
  {
    image: EDIT_DELETE,
    title: "삭제",
  },
];
