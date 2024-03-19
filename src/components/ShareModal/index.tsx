import { Modal } from "../Modal";
import { forwardRef, useEffect } from "react";
import styles from "./styles.module.css";
import KakaoIcon from "../../assets/kakaoIcon.svg";
import facebookIcon from "../../assets/facebookIcon.svg";
import linkIcon from "../../assets/linkIcon.svg";

declare global {
  interface Window {
    Kakao: any;
  }
}

interface Props {
  openModal: boolean;
  handleModalClose: () => void;
  folderName: string;
}

const { Kakao } = window;

export const ShareModal = forwardRef(
  ({ openModal, handleModalClose, folderName }: Props, ref) => {
    const handleCopyClipBoard = (text: string) => {
      try {
        navigator.clipboard.writeText(text);
        alert("클립보드에 복사되었습니다.");
      } catch (error) {
        alert("클립보드 복사에 실패하였습니다.");
      }
    };

    useEffect(() => {
      Kakao.cleanup();
      console.log("key:", process.env.REACT_APP_KAKAO_KEY);
      Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }, []);

    const kakaoShare = () => {
      console.log(`http://${window.location.host}/Linkbrary.png`);
      Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "Linkbrary",
          description: "세상의 모든 정보를 쉽게 관리해보세요",
          imageUrl: "https://cute-muffin-b517ab.netlify.app/Linkbrary.png",
          link: {
            mobileWebUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: "보러가기",
            link: {
              mobileWebUrl: window.location.href,
            },
          },
        ],
      });
    };

    return (
      <Modal
        modalRef={ref as React.RefObject<HTMLDivElement>}
        openModal={openModal}
        handleModalClose={handleModalClose}
      >
        <div className={styles.container}>
          <h2 className={styles.title}>폴더 공유</h2>
          <p className={styles.description}>{folderName}</p>
          <ul className={styles.icons}>
            <li className={styles.icon}>
              <button onClick={kakaoShare}>
                <img src={KakaoIcon} alt="kakaoIcon" />
                <p className={styles.iconText}>카카오톡</p>
              </button>
            </li>
            <li className={styles.icon}>
              <a
                target="_blank"
                href={`https://www.facebook.com/sharer.php?u=http://${
                  window.location.host
                }/shared?user=${1}&folderId=${441}`}
                rel="noreferrer"
              >
                <img src={facebookIcon} alt="facebookIcon" />
                <p className={styles.iconText}>페이스북</p>
              </a>
            </li>
            <li className={styles.icon}>
              <button
                onClick={() =>
                  handleCopyClipBoard(
                    `${window.location.host}/shared?user=${1}&folderId=${441}`
                  )
                }
              >
                <img src={linkIcon} alt="linkIcon" />
                <p className={styles.iconText}>링크 복사</p>
              </button>
            </li>
          </ul>
        </div>
      </Modal>
    );
  }
);
