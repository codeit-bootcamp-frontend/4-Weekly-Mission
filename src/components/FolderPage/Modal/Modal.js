import { useEffect, useRef, useState } from "react";
import styles from "./Modal.module.css";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { useScript } from "hook/useScripts";
import close from "assets/close.png";
import kakao from "assets/Kakao.png";
import checked from "assets/check.svg";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";

function Modal({
  folders,
  selectedModal,
  setModal,
  folderName,
  selectedLink,
  selectedId,
}) {
  const [listClicked, setListClicked] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    function handleFocus(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setModal("");
      }
    }

    document.addEventListener("mouseup", handleFocus);
    return () => {
      document.removeEventListener("mouseup", handleFocus);
    };
  }, [searchRef]);

  const handleCloseClick = () => {
    setModal("");
  };

  const handleListClick = (e) => {
    if (!listClicked) {
      setListClicked(true);
    } else {
      setListClicked(false);
    }
  };

  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init("077cb07b3b0e7c5981097690a6942000");
      }
    }
  }, [status]);

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentUrl,
    });
  };

  const currentUrl = "https://weekly-mission-week9.vercel.app/shared";

  return (
    <>
      <div
        ref={searchRef}
        className={`${styles["modal-container"]} ${
          selectedModal === "changeFolderName" ? styles.selected : ""
        }`}
      >
        <h2>폴더이름 변경</h2>
        <input placeholder={folderName}></input>
        <button className={styles.modalBtn_blue}>변경하기</button>
        <button className={styles.closeBtn} onClick={handleCloseClick}>
          <img src={close} alt="닫힘버튼" />
        </button>
      </div>
      <div
        ref={searchRef}
        className={`${styles["modal-container"]} ${
          selectedModal === "shareFolder" ? styles.selected : ""
        } `}
      >
        <h2>폴더공유</h2>
        <h3>{folderName}</h3>
        <div className={styles.btns}>
          <button className={styles.kakaoBtn} onClick={handleKakaoButton}>
            <img className={styles.kakao} src={kakao} alt="카카오" />
          </button>

          <FacebookShareButton url={`${currentUrl}${selectedId}`}>
            <FacebookIcon
              size={41}
              round={true}
              borderRadius={24}
            ></FacebookIcon>
          </FacebookShareButton>
          <CopyToClipboard text={currentUrl}>
            <button className={styles.URLShareButton}>URL</button>
          </CopyToClipboard>
        </div>
        <button className={styles.closeBtn} onClick={handleCloseClick}>
          <img src={close} alt="닫힘버튼" />
        </button>
      </div>
      <div
        ref={searchRef}
        className={`${styles["modal-container"]} ${
          selectedModal === "deleteFolder" ? styles.selected : ""
        }`}
      >
        <h2>폴더삭제</h2>
        <h3>{folderName}</h3>
        <button className={styles.modalBtn_red}>삭제하기</button>
        <button className={styles.closeBtn} onClick={handleCloseClick}>
          <img src={close} alt="닫힘버튼" />
        </button>
      </div>
      <div
        ref={searchRef}
        className={`${styles["modal-container"]} ${
          selectedModal === "addFolder" ? styles.selected : ""
        }`}
      >
        <h2>폴더추가</h2>
        <input placeholder="내용입력"></input>
        <button className={styles.modalBtn_blue}>추가하기</button>
        <button className={styles.closeBtn} onClick={handleCloseClick}>
          <img src={close} alt="닫힘버튼" />
        </button>
      </div>
      <div
        ref={searchRef}
        className={`${styles["modal-container"]} ${
          selectedModal === "deleteLink" ? styles.selected : ""
        }`}
      >
        <h2>링크삭제</h2>
        <h3>{selectedLink}</h3>
        <button className={styles.modalBtn_red}>삭제하기</button>
        <button className={styles.closeBtn} onClick={handleCloseClick}>
          <img src={close} alt="닫힘버튼" />
        </button>
      </div>
      <div
        ref={searchRef}
        className={`${styles["modal-container"]} ${styles["addtofolder"]} ${
          selectedModal === "addToFolder" ? styles.selected : ""
        }`}
      >
        <h2>폴더에추가</h2>
        <h3>{selectedLink}</h3>
        <ul>
          {folders.map((folder) => {
            return (
              <button
                onClick={handleListClick}
                className={`${styles["listBtn"]} ${
                  listClicked && folder.id === selectedId
                    ? styles.checkedFolder
                    : ""
                }`}
              >
                <h2>
                  {folder.name} <p>{`${folder.link.count}개 링크`}</p>
                </h2>
                <img
                  className={`${styles["checked"]} ${
                    listClicked === true ? styles.checkedFolder : ""
                  }`}
                  src={checked}
                  alt="체크표시"
                />
              </button>
            );
          })}
        </ul>
        <button className={styles.modalBtn_blue}>추가하기</button>
        <button className={styles.closeBtn} onClick={handleCloseClick}>
          <img src={close} alt="닫힘버튼" />
        </button>
      </div>
    </>
  );
}

export default Modal;
