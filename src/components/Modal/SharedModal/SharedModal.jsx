import BaseModeal from "../BaseModal/BaseModal";
import styles from "./shared.module.css";

import kakaoIcon from "assets/images/ic_kakao.svg";
import facebookIcon from "assets/images/ic_facebook.svg";
import linkIcon from "assets/images/ic_link.svg";

function SharedModal({ folder, variant, setModals }) {
  return (
    <BaseModeal title={`폴더 공유`} variant={variant} setModals={setModals}>
      <p className={styles.folder}>{folder}</p>

      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <img src={kakaoIcon} alt="카카오 아이콘" />
          </div>
          <p className={styles.name}>카카오톡</p>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <img src={facebookIcon} alt="페이스북 아이콘" />
          </div>
          <p className={styles.name}>페이스북</p>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <img src={linkIcon} alt="링크 아이콘" />
          </div>
          <p className={styles.name}>링크 공유</p>
        </div>
      </div>
    </BaseModeal>
  );
}

export default SharedModal;
