function kakaoShare() {
  kakaoShare.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "Linkbrary",
      description: "링크를 저장해보세요",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/07/13/16/10/cute-2500929_1280.jpg",
      link: {
        mobileWebUrl: "https://nj-linkbrary.netlify.app",
        webUrl: "https://nj-linkbrary.netlify.app",
      },
    },
    button: [
      {
        title: "웹으로 이동",
        link: {
          mobileWebUrl: "https://nj-linkbrary.netlify.app",
          webUrl: "https://nj-linkbrary.netlify.app",
        },
      },
    ],
  });
}

export default kakaoShare;
