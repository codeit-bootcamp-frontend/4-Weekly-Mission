const hostUrl = "http://localhost:3000/shared/";

// Facebook
export const shareFacebook = (folderId) => {
  const url = hostUrl + folderId;
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + url);
};

// Kakao
export const shareKakao = (folderId) => {
  const url = hostUrl + folderId;
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    }

    kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "Linkbrary",
        description: "링크를 추가하고, 공유해보세요!",
        imageUrl: "http://localhost:3000/icons/Linkbrary.svg",
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: "자세히 보러 가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  }
};
