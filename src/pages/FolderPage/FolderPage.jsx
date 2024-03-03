import { useState, useContext } from "react";
import { UserContext } from "context/UserProvider";
import { NoResults } from "pages";
import styles from "./folder.module.css";
import Header from "./components/Header";
import CardList from "components/CardList/CardList";
import SearchBar from "components/Input/SearchBar/SearchBar";
import { ReactComponent as AddIcon } from "assets/images/ic_add.svg";
import DeleteModal from "components/Modal/DeleteModal/DeleteModal";
import SharedModal from "components/Modal/SharedModal/SharedModal";
import FolderModal from "components/Modal/FolderModal/FolderModal";
import Category from "./components/Category/Category";
import ActionButton from "./components/ActionButton/ActionButton";
import useModal from "utils/hooks/useModal";
import useFetch from "utils/hooks/useFetch";
import { API } from "utils/constants/api";
import {
  ALL,
  DELETE_FOLDER,
  ADD_FOLDER,
  SHARED,
  EDIT,
} from "utils/constants/strings";

function FolderPage() {
  const { id: userId } = useContext(UserContext);
  const [selectedCategory, setSelectedCategory] = useState({
    id: null,
    name: ALL,
  });
  const { modals, openModal, closeModal } = useModal();
  const { data: buttonNames } = useFetch(`${API}/users/${userId}/folders`);
  const { data: folderData } = useFetch(
    selectedCategory.id
      ? `${API}/users/${userId}/links?folderId=${selectedCategory.id}`
      : `${API}/users/${userId}/links`
  );

  /**
   * 카테코리 버튼을 클릭 시 클릭된 카테고리를 저장합니다.
   * @param {number} categoryId
   * @param {string} categoryName
   */
  const handleButtonClick = (categoryId, categoryName) => {
    setSelectedCategory({ id: categoryId, name: categoryName });
  };

  return (
    <div>
      <Header list={buttonNames} />

      <div className={styles.container}>
        <div className={styles.content}>
          <SearchBar />
          {buttonNames ? (
            <div>
              <div className={styles.category}>
                <Category
                  buttonNames={buttonNames}
                  selectedCategory={selectedCategory}
                  onClick={handleButtonClick}
                />

                <button
                  className={styles.addButton}
                  onClick={() => openModal(ADD_FOLDER)}
                >
                  <span>폴더 추가</span>
                  <AddIcon className={styles.addIcon} />
                </button>
                {modals[ADD_FOLDER] && (
                  <FolderModal variant={ADD_FOLDER} closeModal={closeModal} />
                )}
              </div>

              <div className={styles.bar}>
                <div className={styles.categoryName}>
                  {selectedCategory.name}
                </div>
                <div
                  className={`${styles.barButtons} ${
                    selectedCategory.name === ALL ? styles.hidden : ""
                  }`}
                >
                  <ActionButton openModal={openModal} variant={SHARED} />
                  {modals[SHARED] && (
                    <SharedModal
                      variant={SHARED}
                      closeModal={closeModal}
                      folder={selectedCategory.name}
                    />
                  )}

                  <ActionButton openModal={openModal} variant={EDIT} />
                  {modals[EDIT] && (
                    <FolderModal variant={EDIT} closeModal={closeModal} />
                  )}

                  <ActionButton openModal={openModal} variant={DELETE_FOLDER} />
                  {modals[DELETE_FOLDER] && (
                    <DeleteModal
                      variant={DELETE_FOLDER}
                      closeModal={closeModal}
                      deleted={selectedCategory.name}
                    />
                  )}
                </div>
              </div>
              <CardList
                items={folderData}
                modals={modals}
                openModal={openModal}
                closeModal={closeModal}
              />
            </div>
          ) : (
            <NoResults />
          )}
        </div>
      </div>
    </div>
  );
}

export default FolderPage;
