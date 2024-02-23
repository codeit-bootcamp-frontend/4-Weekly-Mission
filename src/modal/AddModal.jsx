import ModalLayout from "./ModalLayout";
import { MODAL_TYPE } from "./modalType";
import { useEffect, useState } from "react";
import styles from "./AddModal.module.css";

function AddModal({ isModalClicked, handleModalClick }) {
  const [isOpenModal, setIsOpenModal] = useState(isModalClicked);
  console.log("isOpenModal: ", isOpenModal);
  console.log("isModalClicked: ", isModalClicked);

  const { add } = MODAL_TYPE;

  const closeModal = () => {
    setIsOpenModal(false);
    handleModalClick();
  };

  useEffect(() => {
    setIsOpenModal(isModalClicked);
  }, [isModalClicked]);

  return (
    <ModalLayout title={add.title} isOpen={isOpenModal} closeModal={closeModal}>
      <input
        className={styles.input}
        type="text"
        placeholder={add.placeholder}
      />
      <button className={styles.button}>{add.buttonName}</button>
    </ModalLayout>
  );
}

export default AddModal;
