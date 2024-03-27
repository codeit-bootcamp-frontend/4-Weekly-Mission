import styles from "./styles.module.css";
import { getTimeAgo, formatDate } from "../../../../utils/time";
import noImg from "../../../../assets/noImg.png";
import starImg from "../../../../assets/star.png";
import kebabImg from "../../../../assets/kebab.png";
import { useState } from "react";
import {
  ModalPortal,
  PopOver,
  DeleteModal,
  AddLinkModal,
} from "../../../../components";
import { useModal } from "../../../../hooks/useModal";
import { Link, Folder } from "../../../../types";

interface Props {
  link: Link;
  folders: Folder[];
}

export function FolderCard({ link, folders }: Props) {
  const createdAt = "createdAt" in link ? "createdAt" : "created_at";
  const imageSource = "imageSource" in link ? "imageSource" : "image_source";

  const [openPopOver, setOpenPopOver] = useState(false);

  const { openModal, modalRef, handleModalClose, handleModalOpen } = useModal();
  const {
    openModal: addOpenModal,
    modalRef: addModalRef,
    handleModalClose: addHandleModalClose,
    handleModalOpen: addHandleModalOpen,
  } = useModal();

  const handlePopOverClose = () => {
    setOpenPopOver(false);
  };

  const handleMoreBtn = (e: React.MouseEvent) => {
    //a태그 페이지 이동 막기
    e.preventDefault();
    if (openPopOver) {
      return;
    }
    setOpenPopOver(true);
  };

  return (
    <>
      <ModalPortal>
        <DeleteModal
          openModal={openModal}
          ref={modalRef}
          handleModalClose={handleModalClose}
          title="링크 삭제"
          description={link.url}
        />
      </ModalPortal>
      <ModalPortal>
        <AddLinkModal
          openModal={addOpenModal}
          ref={addModalRef}
          handleModalClose={addHandleModalClose}
          folders={folders}
          linkUrl={link.url}
        />
      </ModalPortal>
      <a
        className={styles.container}
        href={link.url}
        target="_blank"
        rel="noreferrer"
      >
        <PopOver
          openPopOver={openPopOver}
          handlePopOverClose={handlePopOverClose}
          onDeleteModalOpen={handleModalOpen}
          onAddLinkModalOpen={addHandleModalOpen}
        />
        <div className={styles.link}>
          <div className={styles["link-cover"]}>
            <img src={link[imageSource] || noImg} alt="cardCover" />:
          </div>
          <button className={styles.likeBtn}>
            <img src={starImg} alt="likeBtn" />
          </button>
          <div className={styles["link-contents"]}>
            <div className={styles["link-header"]}>
              <p className={styles["link-update"]}>
                {getTimeAgo(link[createdAt] as string)}
              </p>
              <button onClick={handleMoreBtn} className={styles.moreBtn}>
                <img id="moreBtn" src={kebabImg} alt="kebabImg" />
              </button>
            </div>
            <h2 className={styles["link-title"]}>
              {!link.title ? "제목없음" : link.title}
            </h2>
            <p className={styles["link-description"]}>{link.description}</p>
            <p className={styles["link-date"]}>
              {formatDate(link[createdAt] as string)}
            </p>
          </div>
        </div>
      </a>
    </>
  );
}
