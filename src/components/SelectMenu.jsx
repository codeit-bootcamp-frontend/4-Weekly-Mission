import styles from "./SelectMenu.module.css";
import { MODALS } from "../modal/modals";

function SelectMenu({ handleClickModal, onClickKebab }) {
  const { deleteLink, addToFolder } = MODALS;

  const onClickKebabDelete = (e) => {
    onClickKebab(e);
    handleClickModal(deleteLink.type);
  };

  const onClickKebabAddToFolder = (e) => {
    onClickKebab(e);
    handleClickModal(addToFolder.type);
  };

  return (
    <>
      <div className={styles.container}>
        <div onClick={onClickKebabDelete} className={styles.nonClicked}>
          삭제하기
        </div>
        <div onClick={onClickKebabAddToFolder} className={styles.nonClicked}>
          폴더에 추가
        </div>
      </div>
    </>
  );
}

export default SelectMenu;
