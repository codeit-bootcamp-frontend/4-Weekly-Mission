import { MouseEvent } from "react";

import styles from "./SelectMenu.module.css";
import { MODALS } from "../modal/modals";

interface Props {
  handleClickModal: (type: "deleteLink" | "addToFolder") => void;
  onClickKebab: (e: MouseEvent) => void;
}

function SelectMenu({ handleClickModal, onClickKebab }: Props) {
  const { deleteLink, addToFolder } = MODALS;

  const onClickKebabDelete = (e: MouseEvent) => {
    onClickKebab(e);
    handleClickModal("deleteLink");
  };

  const onClickKebabAddToFolder = (e: MouseEvent) => {
    onClickKebab(e);
    handleClickModal("addToFolder");
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
