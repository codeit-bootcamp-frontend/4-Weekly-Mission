import useHandleModalClick from "hooks/useHandleModalClick";
import styles from "./style.module.css";
import { useRef } from "react";

export default function PopOver({
  openPopOver,
  handlePopOverClose,
  linkUrl,
  onDeleteModalOpen,
}) {
  const ref = useRef();

  useHandleModalClick(ref, handlePopOverClose);

  const handleLinkDeleteClick = (e) => {
    e.preventDefault();
    handlePopOverClose();
    onDeleteModalOpen();
  };

  return (
    <>
      {openPopOver && (
        <div id="popOver" className={styles.container} ref={ref}>
          <button className={styles.btn} onClick={handleLinkDeleteClick}>
            삭제하기
          </button>
          <button className={styles.btn} onClick={(e) => e.preventDefault()}>
            폴더에 추가
          </button>
        </div>
      )}
    </>
  );
}
