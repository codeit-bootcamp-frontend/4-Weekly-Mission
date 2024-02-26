import CloseIcon from "./components/CloseIcon";
import styles from "./styles/modal.module.css";
import KakaoIcon from "./images/modal_kako_icon.svg";
import FacebookIcon from "./images/modal_facebook_icon.svg";
import LinkIcon from "./images/modal_link_icon.svg";
import SnsIcon from "./components/SnsIcon";

export default function Share({ modal, handleOnClickClose }) {
  return (
    !modal && (
      <div className={styles.backdrop} name="공유">
        <div className={styles.container}>
          <CloseIcon handleOnClickClose={handleOnClickClose} />
          <p className={styles.title}>폴더 공유</p>
          <p className={styles["sub-text"]}>폴더명</p>
          <div className={styles["sns-container"]}>
            <SnsIcon icon={KakaoIcon} name="카카오톡" />
            <SnsIcon icon={FacebookIcon} name="페이스북" />
            <SnsIcon icon={LinkIcon} name="링크 복사" />
          </div>
        </div>
      </div>
    )
  );
}
