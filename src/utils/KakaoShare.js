import { useEffect } from 'react';
import kakaoIcon from '../assets/icons/kakao.svg';

const { Kakao } = window;

const KakaoShare = ({ folderId }) => {
  const url = `http://localhost:3000/shared/${folderId}`;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
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
