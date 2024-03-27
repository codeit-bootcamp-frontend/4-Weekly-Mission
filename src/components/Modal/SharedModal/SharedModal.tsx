import { useEffect } from "react";
import BaseModeal from "../BaseModal/BaseModal";
import styles from "./shared.module.css";
import { ModalProps } from "../BaseModal/BaseModal";

import kakaoIcon from "assets/images/ic_kakao.svg";
import facebookIcon from "assets/images/ic_facebook.svg";
import linkIcon from "assets/images/ic_link.svg";

interface Props extends ModalProps {
  folder: string;
}

function SharedModal({ folder, variant, closeModal }: Props) {
  const currentUrl = window.location.href;

  const copyToClipboard = () => {
    const textToCopy = currentUrl;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("복사하기 성공");
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };

  const sharedKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Linkbrary",
        description: "링크를 관리해 보세요",
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          mobileWebUrl: currentUrl,
          webUrl: currentUrl,
        },
      },
    });
  };

  const sharedFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`);
  };

  useEffect(() => {
    if (window.Kakao) {
      window.Kakao.cleanup();
      window.Kakao.init(process.env.REACT_APP_API_KEY);
      window.Kakao.isInitialized();
    }
  }, []);

  return (
    <BaseModeal title={`폴더 공유`} variant={variant} closeModal={closeModal}>
      <p className={styles.folder}>{folder}</p>
      <div className={styles.items}>
        <div className={styles.item}>
          <button className={styles.icon} onClick={sharedKakao}>
            <img src={kakaoIcon} alt="카카오 아이콘" />
          </button>
          <p className={styles.name}>카카오톡</p>
        </div>

        <div className={styles.item}>
          <button className={styles.icon} onClick={sharedFacebook}>
            <img src={facebookIcon} alt="페이스북 아이콘" />
          </button>
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
