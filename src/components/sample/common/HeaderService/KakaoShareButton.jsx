import React, { useEffect } from 'react';
import styles from './headerService.module.scss';

// kakao 기능 동작을 위해 넣어준다.
const { Kakao } = window;

export default function KakaoShareButton() {
  // 배포한 자신의 사이트
  const realUrl = '';
  // 로컬 주소 (localhost 3000 같은거)
  // const resultUrl = window.location.href;

  // 재랜더링시에 실행되게 해준다.
  useEffect(() => {
    // init 해주기 전에 clean up 을 해준다.
    Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    Kakao.init(process.env.REACT_APP_KAKAO_INIT_KEY);
    // 잘 적용되면 true 를 뱉는다.
    // console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Rolling',
        description: '롤링페이퍼',
        imageUrl: '',
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '롤링페이퍼 확인하러 가기',
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <div>
      <button
        type="button"
        className={styles.shareOption}
        onClick={() => {
          shareKakao();
        }}
      >
        카카오톡 공유
      </button>
    </div>
  );
}
