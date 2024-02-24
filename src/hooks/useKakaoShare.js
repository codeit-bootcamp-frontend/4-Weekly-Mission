import { useEffect } from 'react';

const useKakaoShare = (selectedFolderId) => {
  const kakao = window.Kakao;

  useEffect(() => {
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }
  }, []);

  const shareKakao = () => {
    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '📂Linkbrary',
        description: '폴더를 저장하고 공유해보세요! ',
        imageUrl: 'https://avatars.githubusercontent.com/u/124874266?v=4',
        link: {
          mobileWebUrl: `${window.location.origin}/shared/${selectedFolderId}`,
          webUrl: `${window.location.origin}/shared/${selectedFolderId}`,
        },
      },
      buttons: [
        {
          title: 'Linkbrary로 이동✨',
          link: {
            mobileWebUrl: `${window.location.origin}/shared/${selectedFolderId}`,
            webUrl: `${window.location.origin}/shared/${selectedFolderId}`,
          },
        },
      ],
    });
  };
  return { shareKakao };
};

export default useKakaoShare;
