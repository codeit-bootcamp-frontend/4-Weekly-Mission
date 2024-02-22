import styles from "./styles.module.css";
import { getTimeAgo, formatDate } from "util/time";
import noImg from "assets/noImg.png";
import starImg from "assets/star.png";
import kebabImg from "assets/kebab.png";
import { useState } from "react";
import { ModalPortal, PopOver, DeleteModal } from "components";
import { useModal } from "hooks/useModal";

export function Card({ link }) {
  const createdAt = "createdAt" in link ? "createdAt" : "created_at";
  const imageSource = "imageSource" in link ? "imageSource" : "image_source";

  const [openPopOver, setOpenPopOver] = useState(false);

  const { openModal, modalRef, handleModalClose, handleModalOpen } = useModal();

  const handlePopOverClose = () => {
    setOpenPopOver(false);
  };

  const handleMoreBtn = (e) => {
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
      <a
        className={styles.container}
        href={link.url}
        target="_blank"
        rel="noreferrer"
      >
        <PopOver
          linkUrl={link.url}
          openPopOver={openPopOver}
          handlePopOverClose={handlePopOverClose}
          onDeleteModalOpen={handleModalOpen}
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
                {getTimeAgo(link[createdAt])}
              </p>
              <button onClick={handleMoreBtn} className={styles.moreBtn}>
                <img id="moreBtn" src={kebabImg} alt="kebabImg" />
              </button>
            </div>
            <h2 className={styles["link-title"]}>
              {!link.title ? "제목없음" : link.title}
            </h2>
            <p className={styles["link-description"]}>{link.description}</p>
            <p className={styles["link-date"]}>{formatDate(link[createdAt])}</p>
          </div>
        </div>
      </a>
    </>
  );
}
