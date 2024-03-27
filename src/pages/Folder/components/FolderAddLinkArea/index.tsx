import linkImg from "@assets/link.png";
import styles from "./styles.module.css";
import { useModal } from "@hooks/useModal";
import { ModalPortal, AddLinkModal } from "@components";
import { useState, useEffect, CSSProperties } from "react";
import { Folder } from "@types";

interface Props {
  folders: Folder[];
  style: CSSProperties;
}

export function FolderAddLinkArea({ style, folders }: Props) {
  const { openModal, modalRef, handleModalOpen, handleModalClose } = useModal();
  const [url, setUrl] = useState("");

  const handleAddLinkClick = () => {
    handleModalOpen();
  };

  return (
    <>
      <ModalPortal>
        <AddLinkModal
          ref={modalRef}
          openModal={openModal}
          handleModalClose={handleModalClose}
          folders={folders}
          linkUrl={url}
        />
      </ModalPortal>
      <div style={style} id="addLinkArea" className={styles.container}>
        <div className={styles.addLinkAreaWrapper}>
          <div className={styles.addLinkArea}>
            <img src={linkImg} alt="linkIconImg" />
            <input
              className={styles.addLinkInput}
              type="url"
              placeholder="링크를 추가해 보세요"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button className={styles.btn} onClick={handleAddLinkClick}>
              추가하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
