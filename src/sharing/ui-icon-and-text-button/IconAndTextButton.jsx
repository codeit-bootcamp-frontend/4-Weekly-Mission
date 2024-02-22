import { useState } from "react";
import styles from "./IconAndTextButton.module.scss";
import classNames from "classnames/bind";
import ToolBarModal from "./ToolBarModal";
import { ModalShare } from "./ModalShare";

const cx = classNames.bind(styles);

export const IconAndTextButton = ({ iconSource, text }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className={cx("container")} onClick={handleOpenModal}>
        <img className={cx("icon")} src={iconSource} alt={`${text} 아이콘`} />
        <span className={cx("text")}>{text}</span>
      </button>
      {showModal && (
        <ToolBarModal onClose={handleCloseModal}>
          <ModalShare />
        </ToolBarModal>
      )}
    </>
  );
};
