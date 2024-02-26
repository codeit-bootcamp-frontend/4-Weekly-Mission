import styles from "./AddLinkBar.module.css";
import link from "../images/link.svg";
import { useState } from "react";
import AddToFolderModal from "../modal/AddToFolderModal/AddToFolderModal";
import { MODALS } from "../modal/modals";

function AddLinkBar() {
  const [linkValue, setLinkValue] = useState("");
  const [isModalClicked, setIsModalClicked] = useState({
    addToFolder: false,
  });

  const onChangeLinkValue = (e) => {
    setLinkValue(e.target.value);
  };

  const handleClickModal = (type) => {
    const value = isModalClicked[type];
    setIsModalClicked({ ...isModalClicked, [type]: !value });
  };

  const makeEmptyValue = () => {
    setLinkValue("");
  };

  return (
    <>
      <div className={styles.area}>
        <div className={styles.container}>
          <div className={styles.inputContainer}>
            <img src={link} alt="링크" />
            <input
              value={linkValue}
              className={styles.input}
              type="text"
              placeholder="링크를 추가해 보세요"
              onChange={onChangeLinkValue}
            />
          </div>
          <button
            className={styles.button}
            onClick={() => handleClickModal(MODALS.addToFolder.type)}
          >
            추가하기
          </button>
        </div>
        {isModalClicked.addToFolder && (
          <AddToFolderModal
            url={linkValue}
            isModalClicked={isModalClicked}
            handleClickModal={handleClickModal}
            linkValue={linkValue}
            makeEmptyValue={makeEmptyValue}
          />
        )}
      </div>
    </>
  );
}

export default AddLinkBar;
