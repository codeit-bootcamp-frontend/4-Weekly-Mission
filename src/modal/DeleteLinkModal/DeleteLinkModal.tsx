import { MouseEvent } from "react";

import ModalLayout from "../ModalLayout";
import { MODALS } from "../modals";
import styles from "./DeleteLinkModal.module.css";

interface Props {
  url: string;
  isModalClicked: {
    deleteLink: boolean;
    addToFolder: boolean;
  };
  handleClickModal: (type: "deleteLink" | "addToFolder") => void;
}

function DeleteLinkModal({ url, isModalClicked, handleClickModal }: Props) {
  const { deleteLink } = MODALS;

  const onClickCloseButton = (e: MouseEvent) => {
    e.stopPropagation();
    handleClickModal("deleteLink");
  };

  return (
    <ModalLayout
      title={deleteLink.title}
      isModalClicked={isModalClicked.deleteLink}
      onClickCloseButton={onClickCloseButton}
    >
      <div className={styles.url}>{url}</div>
      <button className={styles.button}>{deleteLink.buttonName}</button>
    </ModalLayout>
  );
}

export default DeleteLinkModal;
