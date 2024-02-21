import { useParams, useLocation } from "react-router-dom";
import BaseModeal from "../BaseModal/BaseModal";
import styles from "./shared.module.css";

import kakaoIcon from "assets/images/ic_kakao.svg";
import facebookIcon from "assets/images/ic_facebook.svg";
import linkIcon from "assets/images/ic_link.svg";

function SharedModal({ folder, variant, setModals }) {
  let location = useLocation();
  
  const copyToClipboard = () => {
    const textToCopy = location.pathname; 
    navigator.clipboard
      .writeText(`http://localhost:3000${textToCopy}`)
      .then(() => {
        console.log("복사 성공");
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };

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
          <button className={styles.icon} onClick={copyToClipboard}>
            <img src={linkIcon} alt="링크 아이콘" />
          </button>
          <p className={styles.name}>링크 공유</p>
        </div>
      </div>
    </BaseModeal>
  );
}

export default SharedModal;
