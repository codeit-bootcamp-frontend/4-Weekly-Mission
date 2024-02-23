import { useState } from "react";
import styles from "./IconAndTextButton.module.scss";
import classNames from "classnames/bind";
import ToolBarModal from "./ToolBarModal";
import { ModalContent } from "./ModalContent";

const cx = classNames.bind(styles);
// Modal 컴포넌트 true =>실행
export const IconAndTextButton = ({
  iconSource,
  text,
  modalText,
  folderName,
  modalContent,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className={cx("container")} onClick={() => setShowModal(true)}>
        <img className={cx("icon")} src={iconSource} alt={`${text} 아이콘`} />
        <span className={cx("text")}>{text}</span>
      </button>
      {showModal && (
        <ToolBarModal onClose={() => setShowModal(false)}>
          <ModalContent
            modalText={modalText}
            folderName={folderName}
            modalContent={modalContent}
          ></ModalContent>
        </ToolBarModal>
      )}
    </>
  );
};
