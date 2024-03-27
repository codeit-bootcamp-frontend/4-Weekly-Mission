import ModalLayout from "../ModalLayout";
import { MODALS } from "../modals";
import styles from "./EditModal.module.css";
//type
import { IsModalClicked } from "../../components/FolderListBar";

interface Props {
  isModalClicked: IsModalClicked;
  handleModalClick: (type: keyof IsModalClicked) => void;
}

function EditModal({ isModalClicked, handleModalClick }: Props) {
  const { edit } = MODALS;

  const onClickCloseButton = () => {
    handleModalClick(edit.type as keyof IsModalClicked);
  };

  return (
    <ModalLayout
      title={edit.title}
      isModalClicked={isModalClicked.edit}
      onClickCloseButton={onClickCloseButton}
    >
      <input
        className={styles.input}
        type="text"
        placeholder={edit.placeholder}
      />
      <button className={styles.button}>{edit.buttonName}</button>
    </ModalLayout>
  );
}

export default EditModal;
