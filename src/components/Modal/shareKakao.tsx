import { useEffect } from "react";
import kakaoImg from "../../image/Kakao.svg";
import styled from "styled-components";

interface ShareKakaoProps {
  folderId: number;
}

const { Kakao } = window as any;

export default function ShareKakao({ folderId }: ShareKakaoProps) {
  // 배포한 자신의 사이트
  const realUrl = "";
  // 로컬 주소 (localhost 3000 같은거)
  const host = window.location.host;
  let shareLink = `${host}/shared?user=1&folder=${folderId}`;
  // 재랜더링시에 실행되게 해준다.
  useEffect(() => {
    // init 해주기 전에 clean up 을 해준다.
    Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    Kakao.init(process.env.REACT_APP_KAKAO_INIT_KEY);
    // 잘 적용되면 true 를 뱉는다.
    // console.log(Kakao.isInitialized());
  }, []);

  const handleShareKakao = (shareLink: string) => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Linkbrary",
        description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요",
        imageUrl: "https://i.ibb.co/SRSvpQB/image-25.png",
        link: {
          // mobileWebUrl: "https://developers.kakao.com",
          webUrl: shareLink,
        },
      },

      buttons: [
        {
          title: "웹으로 이동",
          link: {
            mobileWebUrl: realUrl,
            webUrl: shareLink,
          },
        },
        {
          title: "앱으로 이동",
          link: {
            mobileWebUrl: "",
            webUrl: "",
          },
        },
      ],
    });
  };

  return (
    <SNSImg
      color="#fee500"
      onClick={(e) => {
        e.preventDefault();
        handleShareKakao(shareLink);
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={kakaoImg} width={18} height={18} />
    </SNSImg>
  );
}

const SNSImg = styled.button`
  background-color: ${(props) => props.color};
  width: 42px;
  height: 42px;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
`;
