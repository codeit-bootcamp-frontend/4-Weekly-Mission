import { useEffect } from "react";
import ShareImgDiv from "../ShareImgDiv";
const { Kakao } = window;

function KaKaoShareButton({ src, text, alt, shareUrl }) {
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("e9dde7fd5c20bdfdf100d47b1f8da3d3");
  }, []);

  const handleClickKakaoShare = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Linkbrary",
        description: "세상의 모든 정보를 쉽게 저장하고 관리해보세요",
        imageUrl:
          "https://i0.wp.com/library.re.kr/wp-content/uploads/2022/05/996907.jpg?resize=1080%2C675&ssl=1",
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      ],
    });
  };
  return (
    <ShareImgDiv
      src={src}
      alt={alt}
      text={text}
      handleClick={() => handleClickKakaoShare()}
    />
  );
}

export default KaKaoShareButton;
