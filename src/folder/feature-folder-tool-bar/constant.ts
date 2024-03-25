export const MODALS_ID: { [key: string]: string } = {
  addFolder: "addFolder",
  share: "share",
  rename: "rename",
  delete: "delete",
};

interface Button {
  iconSource: string;
  text: string;
  modalId: string;
}

export const BUTTONS: Button[] = [
  {
    iconSource: "images/share.svg",
    text: "공유",
    modalId: MODALS_ID.share,
  },
  {
    iconSource: "images/pen.svg",
    text: "이름 변경",
    modalId: MODALS_ID.rename,
  },
  {
    iconSource: "images/trash.svg",
    text: "삭제",
    modalId: MODALS_ID.delete,
  },
];

export const ALL_LINKS_TEXT: string = "전체";

interface KakaoShareData {
  title: string;
  description: string;
  imageUrl: string;
}

export const KAKAO_SHARE_DATA: KakaoShareData = {
  title: "Linkbrary",
  description: "링크를 저장하고 공유하는 가장 쉬운 방법",
  imageUrl: "https://codeit-frontend.codeit.com/static/images/brand/og_tag.png",
};