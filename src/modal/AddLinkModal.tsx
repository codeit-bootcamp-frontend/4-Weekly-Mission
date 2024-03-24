import ModalLayout from "./ModalLayout";
import { useState } from "react";
import { MODAL_TYPE } from "../constants/modalConstans";
import { DATA } from "../constants/folderlist_mock_data";
import IconCheck from "../images/Icon_check.svg";
import styles from "./AddLinkModal.module.css";

function AddLinkModal({ isOpenModal, closeModal }: ModalBaseProps) {
  const [clickItem, setClickItem] = useState('');
  const { addLink } = MODAL_TYPE;

  const handleClick = (name: string) => {
    setClickItem(name === clickItem ? '' : name);
  }

  return (
    <ModalLayout
      title={addLink.title}
      isOpenModal={isOpenModal}
      closeModal={closeModal}
    >
      <div className={styles.linkName}>링크 주소</div>
      <div className={styles.linkFolders}>
        {DATA.map((item, idx) => {
          return (
            <>
              <button
                type="button"
                key={idx}
                className={clickItem === item.folderName ? styles.folderClicked : styles.folder}
                onClick={() => handleClick(item.folderName)}
              >
                <div className={styles.folderInfo}>
                  <span 
                    className={clickItem === item.folderName ? styles.folderNameClicked : styles.folderName}
                  >
                    {item.folderName}
                  </span>
                  <span className={styles.linkCount}>{item.linkCount}개 링크</span>
                </div>
                {clickItem === item.folderName && <img src={IconCheck} alt="Icon-check" />}
              </button>
            </>
          )
        })}
        <button className={styles.submitButton} type="button">{addLink.buttonName}</button>
      </div>
    </ModalLayout>
  );
}


export default AddLinkModal;