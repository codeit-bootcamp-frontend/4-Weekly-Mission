import { useEffect, useState } from "react";
import ModalWrapper from "../ModalWrapper";
import { FacebookShareButton } from "react-share";
import { HOST, KAKAOJSKEY } from "../../api";
import "./style.css";

export default function ShareModal({ onClose, folder }) {
  const [linkCopyText, setLinkCopyTest] = useState("링크 복사");
  const shareToKakaoTalk = (title, url) => {
    if (window.Kakao === undefined) {
      return;
    }
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(KAKAOJSKEY);
    }
    kakao.Share.sendDefault({
      objectType: "text",
      text: title,
      link: {
        mobileWebUrl: url,
        webUrl: url,
      },
    });
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script); // return으로 제거해주기
    };
  }, []);
  return (
    <>
      <ModalWrapper onClose={onClose} title="폴더 공유" info={folder?.name}>
        <div className="share-options">
          <button
            className="share-option"
            onClick={() => {
              console.log(`${HOST}/shared/${folder.id}`);
              shareToKakaoTalk(folder.name, `${HOST}/shared/${folder.id}`);
            }}
          >
            <img src="images/kakao-share.svg" alt="kakao" />
            <span>카카오톡</span>
          </button>
          <FacebookShareButton url={`${HOST}/shared/${folder.id}`}>
            <div className="share-option">
              <img src="images/facebook-share.svg" alt="facebook" />
              <span>페이스북</span>
            </div>
          </FacebookShareButton>
          <button
            className="share-option"
            onClick={async () => {
              await navigator.clipboard.writeText(
                `${HOST}/shared/${folder.id}`
              );
              setLinkCopyTest("복사 완료");
              setTimeout(() => setLinkCopyTest("링크 복사"), 1000);
            }}
          >
            <img src="images/link-share.svg" alt="link" />
            <span>{linkCopyText}</span>
          </button>
        </div>
      </ModalWrapper>
    </>
  );
}
