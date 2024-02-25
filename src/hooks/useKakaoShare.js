/* global Kakao */
import { useEffect } from "react";

const useKakaoShare = (selectedFolderName, selectedFolderId) => {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      Kakao.init("825f443840ba6d7a4c894e4f08c0f1ec");
    }
  }, []);

  const handleKakaoShare = () => {
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "폴더 공유",
        description: selectedFolderName,
        imageUrl: "",
        link: {
          mobileWebUrl: `${window.location.origin}/shared/${selectedFolderId}`,
          webUrl: `${window.location.origin}/shared/${selectedFolderId}`,
        },
      },
      buttons: [
        {
          title: "폴더 공유하러 가기",
          link: {
            mobileWebUrl: `${window.location.origin}/shared/${selectedFolderId}`,
            webUrl: `${window.location.origin}/shared/${selectedFolderId}`,
          },
        },
      ],
    });
  };

  return { handleKakaoShare };
};

export default useKakaoShare;
