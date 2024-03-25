import { useState, ChangeEvent } from "react";

import styles from "./AddLinkBar.module.css";
import link from "../images/link.svg";
import AddToFolderModal from "../modal/AddToFolderModal/AddToFolderModal";
import { MODALS } from "../modal/modals";

function AddLinkBar({ isAtBottom }: { isAtBottom: boolean }) {
  const [linkValue, setLinkValue] = useState<string>("");
  const [isModalClicked, setIsModalClicked] = useState<{
    addToFolder: boolean;
    deleteLink?: boolean;
  }>({
    addToFolder: false,
  });

  const onChangeLinkValue = (e: ChangeEvent<HTMLInputElement>) => {
    setLinkValue(e.target.value);
  };

  const handleClickModal = (type: "addToFolder" | "deleteLink") => {
    const value = isModalClicked[type];
    setIsModalClicked({ ...isModalClicked, [type]: !value });
  };

  const makeEmptyValue = () => {
    setLinkValue("");
  };

  return (
    <>
      <div className={isAtBottom ? styles.bottomArea : styles.area}>
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
            onClick={() => handleClickModal("addToFolder")}
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
