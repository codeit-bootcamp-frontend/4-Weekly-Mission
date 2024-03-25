import ModalLayout from "../ModalLayout";
import { MODALS } from "../modals";
import styles from "./ShareModal.module.css";
import kakaoImg from "../../images/KakaoSmall.svg";
import facebookImg from "../../images/FacebookPng.png";
import linkImg from "../../images/link.svg";

function ShareModal({
  folderName,
  isModalClicked,
  handleModalClick,
  makeShareLink,
}) {
  const { share } = MODALS;

  const onClickCloseButton = () => {
    handleModalClick(share.type);
  };

  return (
    <ModalLayout
      title={share.title}
      isModalClicked={isModalClicked.share}
      onClickCloseButton={onClickCloseButton}
    >
      <div className={styles.folderName}>{folderName}</div>
      <div className={styles.container}>
        <button className={styles.button}>
          <div className={styles.kakao}>
            <img src={kakaoImg} alt="kakao" />
          </div>
          <span className={styles.span}>카카오톡</span>
        </button>
        <button className={styles.button}>
          <div className={styles.facebook}>
            <img src={facebookImg} alt="facebook" />
          </div>
          <span className={styles.span}>페이스북</span>
        </button>
        <button className={styles.button} onClick={makeShareLink}>
          <div className={styles.link}>
            <img src={linkImg} alt="link" />
          </div>
          <span className={styles.span}>링크 복사</span>
        </button>
      </div>
    </ModalLayout>
  );
}

export default ShareModal;
