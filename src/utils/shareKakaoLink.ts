const shareKakaoLink = (route: string, title: string) => {
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao === undefined) {
    return;
  }
  if (window.Kakao) {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('76526528fd9bf8a18573b6f0deea2ddb');
    }
    window.Kakao.Share.sendDefault({
      objectType: 'feed', // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
      content: {
        title: title, // 인자값으로 받은 title
        description: title, // 인자값으로 받은 title
        imageUrl: '/images/noImage.png',
        link: {
          mobileWebUrl: route, // 인자값으로 받은 route(uri 형태)
          webUrl: route,
        },
      },
      buttons: [
        {
          title: title,
          link: {
            mobileWebUrl: route,
            webUrl: route,
          },
        },
      ],
    });
  }
};

export default shareKakaoLink;
