import { MouseEvent } from "react";

import ModalLayout from "../ModalLayout";
import { MODALS } from "../modals";
import styles from "./DeleteFolderModal.module.css";
//type
import { IsModalClicked } from "../../components/FolderListBar";

interface Props {
  folderName: string;
  isModalClicked: IsModalClicked;
  handleModalClick: (type: keyof IsModalClicked) => void;
}

function DeleteFolderModal({
  folderName,
  isModalClicked,
  handleModalClick,
}: Props) {
  const { deleteFolder } = MODALS;

  const onClickCloseButton = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    handleModalClick(deleteFolder.type as keyof IsModalClicked);
  };

  return (
    <ModalLayout
      title={deleteFolder.title}
      isModalClicked={isModalClicked.deleteFolder}
      onClickCloseButton={onClickCloseButton}
    >
      <div className={styles.folderName}>{folderName}</div>
      <button className={styles.button}>{deleteFolder.buttonName}</button>
    </ModalLayout>
  );
}

export default DeleteFolderModal;
