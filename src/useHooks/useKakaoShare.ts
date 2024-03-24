import { useEffect } from "react";
import hero from "../images/hero.png";
// kakao 기능 동작을 위해 넣어준다.
const { Kakao } = window;

export const useKakaoShare = (currentFolderId: number) => {
  // 배포한 자신의 사이트
  // const realUrl = "https://mm-test-maker.web.app/"
  // 로컬 주소 (localhost 3000 같은거)
  let url = `http://localhost:3000/shared/${currentFolderId}`;

  // 재랜더링시에 실행되게 해준다.
  useEffect(() => {
    // init 해주기 전에 clean up 을 해준다.
    Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    Kakao.init("cb42b08832eb90bfba0f898e3f2e3d0b");
    // 잘 적용되면 true 를 뱉는다.
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "linkbrary",
        description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요",
        imageUrl: hero,
        link: {
          mobileWebUrl: url,
        },
      },
    });
  };

  return { shareKakao, url };
};
