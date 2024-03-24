import React, { useEffect } from 'react';
import kakaoIcon from '../assets/icons/kakao.svg';

declare global {
  interface Window {
    Kakao: any;
  }
}
interface KakaoShareProps {
  folderId: string;
}

const KakaoShare = ({ folderId }: KakaoShareProps) => {
  const url: string = `http://localhost:3000/shared/${folderId}`;

  useEffect(() => {
    window.Kakao.cleanup();
    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    console.log(window.Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '예진 Linkbrary',
        description: 'codeit sprint 4기 part2!',
        imageUrl:
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    });
  };

  return (
    <div className="icon-box">
      <div id="kakao-icon" onClick={shareKakao}>
        <img src={kakaoIcon} alt="kakao" />
      </div>
      카카오톡
    </div>
  );
};
export default KakaoShare;
