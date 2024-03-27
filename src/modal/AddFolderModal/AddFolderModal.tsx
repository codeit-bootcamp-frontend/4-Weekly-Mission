import ModalLayout from "../ModalLayout";
import { MODALS } from "../modals";
import styles from "./AddFolderModal.module.css";
//type
import { IsModalClicked } from "../../components/FolderListBar";

interface Props {
  isModalClicked: IsModalClicked;
  handleModalClick: (type: keyof IsModalClicked) => void;
}

function AddFolderModal({ isModalClicked, handleModalClick }: Props) {
  const { addFolder } = MODALS;

  const onClickCloseButton = () => {
    handleModalClick(addFolder.type as keyof IsModalClicked);
  };

  return (
    <ModalLayout
      title={addFolder.title}
      isModalClicked={isModalClicked.add}
      onClickCloseButton={onClickCloseButton}
    >
      <input
        className={styles.input}
        type="text"
        placeholder={addFolder.placeholder}
      />
      <button className={styles.button}>{addFolder.buttonName}</button>
    </ModalLayout>
  );
}

export default AddFolderModal;
