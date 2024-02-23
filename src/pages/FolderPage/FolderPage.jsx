import { useState, useEffect, useContext } from "react";
import { UserContext } from "context/UserProvider";
import { fetchUserFolderData, fetchUserLinkData } from "services/api";
import { NoResults } from "pages";
import styles from "./folder.module.css";
import Header from "./components/Header";
import CardList from "components/CardList/CardList";
import SearchBar from "components/Input/SearchBar/SearchBar";

import { ReactComponent as AddIcon } from "assets/images/ic_add.svg";

import DeleteModal from "components/Modal/DeleteModal/DeleteModal";
import SharedModal from "components/Modal/SharedModal/SharedModal";
import FolderModal from "components/Modal/FolderModal/FolderModal";

import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import ActionButton from "./components/ActionButton/ActionButton";

function FolderPage() {
  /**
   * @type {string}
   */
  const ALL = "전체";
  const { id: userId } = useContext(UserContext);
  const [buttonNames, setButtonNames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    id: null,
    name: ALL,
  });
  const [folderData, setFolderData] = useState([]);

  const [modals, setModals] = useState({});

  const openModal = (modal) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modal]: true,
    }));
  };

  /**
   * 해당 유저의 folder 목록 데이터들을 가져와 buttonNames의 데이터를 변경합니다.
   * @param {number} userId
   */
  const fetchFolderData = async (userId) => {
    const data = await fetchUserFolderData(userId);
    setButtonNames(data);
  };

  /**
   * 해당 유저의 선택된 폴더에 있는 링크 데이터들을 가져와 보여줄 데이터를 변경합니다.
   * @param {number} userId
   * @param {number} folderId
   */
  const fetchData = async (userId, folderId) => {
    const data = await fetchUserLinkData(userId, folderId);
    setFolderData(data);
  };

  useEffect(() => {
    fetchFolderData(userId);
  }, []);

  useEffect(() => {
    fetchData(userId, selectedCategory.id);
  }, [selectedCategory]);

  return (
    <div>
      <Header list={buttonNames} />

      <div className={styles.container}>
        <div className={styles.content}>
          <SearchBar />
          {buttonNames.length ? (
            <div>
              <div className={styles.category}>
                <ButtonGroup
                  buttonNames={buttonNames}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
                
                <button
                  className={styles.addButton}
                  onClick={() => openModal("add-folder")}
                >
                  <span>폴더 추가</span>
                  <AddIcon className={styles.addIcon} />
                </button>
                {modals["add-folder"] && (
                  <FolderModal variant={`add-folder`} setModals={setModals} />
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

                  <ActionButton openModal={openModal} variant={`shared`} />
                  {modals["shared"] && (
                    <SharedModal
                      variant={`shared`}
                      setModals={setModals}
                      folder={selectedCategory.name}
                    />
                  )}

                  <ActionButton openModal={openModal} variant={`edit`} />
                  {modals["edit"] && (
                    <FolderModal variant={`edit`} setModals={setModals} />
                  )}

                  <ActionButton
                    openModal={openModal}
                    variant={`delete-folder`}
                  />
                  {modals["delete-folder"] && (
                    <DeleteModal
                      variant={`delete-folder`}
                      deleted={selectedCategory.name}
                      setModals={setModals}
                    />
                  )}
                </div>
              </div>

              <CardList items={folderData} />
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
