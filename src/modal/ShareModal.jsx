import ModalLayout from "./ModalLayout";
import { MODAL_TYPE } from "./modalType";
import IconKakao from "../images/Icon_Kakao.svg";
import IconFacebook from "../images/Icon_Facebook.svg";
import IconLink from "../images/Icon_link.svg";
import styles from "./ShareModal.module.css";

function ShareModal({ isOpenModal, closeModal }) {

  const { share } = MODAL_TYPE;

  return (
    <ModalLayout
      title={share.title}
      isOpen={isOpenModal}
      closeModal={closeModal}
    >
      <div className={styles.folderName}>폴더명</div>
      <div className={styles.shareButtons}>
        <div className={styles.shareButton}>
          <button className={styles.shareKakao} type="button">
            <img src={IconKakao} alt={IconKakao} />
          </button>
          <p>카카오톡</p>
        </div>
        <div className={styles.shareButton}>
          <button className={styles.shareFacebook} type="button">
            <img src={IconFacebook} alt={IconFacebook} />
          </button>
          <p>페이스북</p>
        </div>
        <div className={styles.shareButton}>
          <button className={styles.copyLink} type="button">
            <img src={IconLink} alt={IconLink} />
          </button>
          <p>링크 복사</p>
        </div>
      </div>
    </ModalLayout>
  );
}


export default ShareModal;