import styled from "styled-components";

function ShareModal() {
  const shareKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init("ac53ae0f1cac43ca6e9eb556442de62d");
      }

      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "Linkbrary",
          description: "",
          imageUrl: linkbrary,
          link: {
            mobileWebUrl: `http://localhost:3000/shared/${menusId}`,
            webUrl: `http://localhost:3000/shared/${menusId}`,
          },
        },
        buttons: [
          {
            title: "자세히 보러 가기",
            link: {
              mobileWebUrl: `http://localhost:3000/shared/${menusId}`,
              webUrl: `http://localhost:3000/shared/${menusId}`,
            },
          },
        ],
      });
    }
  };
}

export default ShareModal;
