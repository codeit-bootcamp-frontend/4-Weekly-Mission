import ModalLayout from "./ModalLayout";
import { MODAL_TYPE } from "./modalType";
import IconKakao from "../images/Icon_Kakao.svg";
import IconFacebook from "../images/Icon_Facebook.svg";
import IconLink from "../images/Icon_link.svg";
import styles from "./ShareModal.module.css";
import { FacebookShareButton } from "react-share";
import { useLocation } from "react-router-dom";
import { useScript } from "../hooks";
import { useEffect } from "react";

const BASE_URL = 'http://localhost:3000/';
const currentUrl = window.location.href;

function ShareModal({ isOpenModal, closeModal }) {
  const { pathname } = useLocation();
  const { share } = MODAL_TYPE;

	const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
	
	useEffect(() => {
		if (status === "ready" && window.Kakao) {
			if (!window.Kakao.isInitialized()) {
				window.Kakao.init("40dc080635d43ef81464b64a525177ed");
			}
		}
	}, [status]);

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
        requestUrl: BASE_URL,
    });
};

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ModalLayout
      title={share.title}
      isOpen={isOpenModal}
      closeModal={closeModal}
    >
      <div className={styles.folderName}>폴더명</div>
      <div className={styles.shareButtons}>
        <div className={styles.shareButton}>
          <button
            className={styles.shareKakao}
            type="button"
            onClick={handleKakaoButton}>
            <img src={IconKakao} alt={IconKakao} />
          </button>
          <p className={styles.linkButtonName}>카카오톡</p>
        </div>
        <FacebookShareButton url={currentUrl}>
          <div className={styles.shareButton}>
            <button className={styles.shareFacebook} type="button">
              <img src={IconFacebook} alt={IconFacebook} />
            </button>
            <p className={styles.linkButtonName}>페이스북</p>
          </div>
        </FacebookShareButton>
        <div className={styles.shareButton}>
          <button
            className={styles.copyLink}
            type="button"
            onClick={() => handleCopyClipBoard(`${BASE_URL}${pathname}`)}>
            <img src={IconLink} alt={IconLink} />
          </button>
          <p className={styles.linkButtonName}>링크 복사</p>
        </div>
      </div>
    </ModalLayout>
  );
}


export default ShareModal;