import { FACEBOOK_SHARE_URL } from "constants/url";

export const shareOnKakao = () => {
  const { Kakao }: any = window;
  Kakao.cleanup();
  Kakao.init("a4b9b34bc246605e2a09cfbbabd8f163");
  Kakao.Share.createDefaultButton({
    container: "#kakaotalk-sharing-btn",
    objectType: "feed",
    content: {
      title: "LINKBRARY",
      description: "링크 공유하기",
      imageUrl:
        "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
      link: {
        webUrl: "https://developers.kakao.com",
      },
    },
    buttons: [
      {
        title: "웹으로 이동",
        link: {
          webUrl: "https://developers.kakao.com",
        },
      },
    ],
  });
};

export const shareOnFacebook = (id: number | null) => {
  window.open(`${FACEBOOK_SHARE_URL}${window.location.origin}/shared/${id}`);
};

export const copyLink = (folder: string) => {
  navigator.clipboard.writeText(folder);
  alert(`링크가 복사되었습니다 : ${folder}`);
};
