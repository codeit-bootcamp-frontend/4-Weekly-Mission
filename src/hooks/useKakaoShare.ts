import { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}

const useKakaoShare = (selectedFolderId: number, url: string) => {
  const kakao = window.Kakao;

  useEffect(() => {
    kakao.cleanup();
    kakao.init(process.env.REACT_APP_KAKAO_KEY);
  }, []);

  const shareKakao = () => {
    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '📂Linkbrary',
        description: '폴더를 저장하고 공유해보세요! ',
        imageUrl: 'https://avatars.githubusercontent.com/u/124874266?v=4',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: 'Linkbrary로 이동✨',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };
  return { shareKakao };
};

export default useKakaoShare;
