import { useState } from "react";
import styles from "./card.module.css";
import { formatDate, getTimeDifference } from "utils/helpers/dateUtils";
import DeleteModal from "components/Modal/DeleteModal/DeleteModal";
import FolderModal from "components/Modal/FolderModal/FolderModal";
import noImage from "assets/images/bg_noImage.png";
import meatballsIcon from "assets/images/ic_meatballs.svg";
import starIcon from "assets/images/ic_star.svg";
import { DELETE_LINK, ADD_LINK } from "utils/constants/strings";

function Card({ item, onClick, modals, openModal, closeModal }) {
  const { createdAt, created_at, description, imageSource, image_source, url } =
    item;
  const date = createdAt || created_at;
  const imgUrl = imageSource || image_source;
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.imgWrapper}>
        <img
          src={imgUrl ?? noImage}
          onError={(e) => {
            e.target.src = noImage;
          }}
          className={styles.image}
          alt="대표 이미지"
        />
        <img
          src={starIcon}
          className={styles.star}
          onClick={(e) => {
            e.stopPropagation();
          }}
          alt="별모양 아이콘"
        />
      </div>

      <div className={styles.info}>
        <div className={styles.infoTop}>
          <div className={styles.difference}>{getTimeDifference(date)}</div>
          <div className={styles.menu}>
            <button
              type="button"
              onClick={handleMenuClick}
              className={styles.menuBtn}
            >
              <img src={meatballsIcon} alt="메뉴 아이콘" />
            </button>
            {isMenuOpen && (
              <div className={styles.options}>
                <button
                  className={styles.option}
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(DELETE_LINK);
                  }}
                >
                  삭제하기
                </button>
                {modals[DELETE_LINK] && (
                  <DeleteModal
                    variant={DELETE_LINK}
                    deleted={url}
                    closeModal={closeModal}
                  />
                )}
                <button
                  className={styles.option}
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(ADD_LINK);
                  }}
                >
                  폴더에 추가
                </button>
                {modals[ADD_LINK] && (
                  <FolderModal
                    variant={ADD_LINK}
                    deleted={url}
                    closeModal={closeModal}
                  />
                )}
              </div>
            )}
          </div>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.date}>{formatDate(date)}</div>
      </div>
    </div>
  );
}

export default Card;
