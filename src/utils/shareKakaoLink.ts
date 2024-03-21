const tempImage: string = 'https://ifh.cc/g/SlFQA2.png';

interface ModalActionType {
  isView?: boolean;
  action: string;
  subTitle?: string;
  url?: string;
}

declare global {
  interface Window {
    Kakao: any; // 또는 Kakao에 대한 정확한 타입 지정
  }
}

const shareKakaoLink = (modalAction: ModalActionType): void => {
  try {
    if (window.Kakao) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);

      // 중복 init 방지
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
      }

      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: 'Linkbrary 폴더 공유하기',
          description: modalAction.subTitle,
          imageUrl: tempImage,
          link: {
            mobileWebUrl: modalAction.url,
            webUrl: modalAction.url
          }
        }
      });
    }
  } catch (err) {
    console.error('카카오톡 링크 공유 에러 발생!');
  }
};

export default shareKakaoLink;
