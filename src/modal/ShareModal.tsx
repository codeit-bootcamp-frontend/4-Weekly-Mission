import ModalLayout from "./ModalLayout";
import IconKakao from "../images/Icon_Kakao.svg";
import IconFacebook from "../images/Icon_Facebook.svg";
import IconLink from "../images/Icon_link.svg";
import styles from "./ShareModal.module.css";
import { MODAL_TYPE } from "../constants/modalConstans";
import { FacebookShareButton } from "react-share";
import { useScript } from "../hooks";
import { useEffect } from "react";

const currentUrl = window.location.href;

function ShareModal({ isOpenModal, closeModal }: ModalBaseProps) {
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
    if (window.Kakao) {
      window.Kakao.Link.sendScrap({
        requestUrl: currentUrl,
    });
  }
};

  const handleCopyClipBoard = async (text: string) => {
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
      isOpenModal={isOpenModal}
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
            onClick={() => handleCopyClipBoard(currentUrl)}>
            <img src={IconLink} alt={IconLink} />
          </button>
          <p className={styles.linkButtonName}>링크 복사</p>
        </div>
      </div>
    </ModalLayout>
  );
}


export default ShareModal;