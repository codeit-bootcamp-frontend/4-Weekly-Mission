import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "context/UserProvider";
import { fetchUserFolderData, fetchUserLinkData } from "services/api";
import { NoResults } from "pages";
import styles from "./folder.module.css";
import Header from "./components/Header";
import CardList from "components/CardList/CardList";
import SearchBar from "components/Input/SearchBar/SearchBar";
import FolderButton from "components/Button/FolderButton/FolderButton";

import shareIcon from "assets/images/ic_share.svg";
import penIcon from "assets/images/ic_pen.svg";
import trashIcon from "assets/images/ic_trash.svg";
import { ReactComponent as AddIcon } from "assets/images/ic_add.svg";

import DeleteModal from "components/Modal/DeleteModal/DeleteModal";
import SharedModal from "components/Modal/SharedModal/SharedModal";
import FolderModal from "components/Modal/FolderModal/FolderModal";

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

  /**
   * 카테코리 버튼을 클릭 시 클릭된 카테고리를 저장합니다.
   * @param {number} categoryId
   * @param {string} categoryName
   */
  const handleButtonClick = (categoryId, categoryName) => {
    setSelectedCategory({ id: categoryId, name: categoryName });
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

      {/* <DeleteModal variant={`link`} deleted={`폴더명`}></DeleteModal> */}
      {/* <SharedModal folder={`폴더명`}></SharedModal> */}
      <div className={styles.container}>
        <div className={styles.content}>
          <SearchBar />

          {buttonNames.length ? (
            <div>
              <div className={styles.category}>
                <div className={styles.categoryButtons}>
                  <Link to={`/folder`}>
                    <FolderButton
                      ischecked={selectedCategory.name === ALL ? true : false}
                      onClick={() => handleButtonClick(null, ALL)}
                    >
                      전체
                    </FolderButton>
                  </Link>
                  {buttonNames.map(({ id, name }) => (
                    <Link to={`/folder/${id}`} key={id}>
                      <FolderButton
                        ischecked={
                          selectedCategory.name === name ? true : false
                        }
                        onClick={() => handleButtonClick(id, name)}
                      >
                        {name}
                      </FolderButton>
                    </Link>
                  ))}
                </div>

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
                  <button
                    className={styles.barButton}
                    onClick={() => openModal("shared")}
                  >
                    <img src={shareIcon} alt="공유 아이콘" />
                    <span>공유</span>
                  </button>
                  {modals["shared"] && (
                    <SharedModal
                      variant={`shared`}
                      setModals={setModals}
                      folder={selectedCategory.name}
                    />
                  )}
                  <button
                    className={styles.barButton}
                    onClick={() => openModal("edit")}
                  >
                    <img src={penIcon} alt="펜 아이콘" />
                    <span>이름변경</span>
                  </button>
                  {modals["edit"] && (
                    <FolderModal variant={`edit`} setModals={setModals} />
                  )}
                  <button
                    className={styles.barButton}
                    onClick={() => openModal("delete-folder")}
                  >
                    <img src={trashIcon} alt="쓰레기통 아이콘" />
                    <span>삭제</span>
                  </button>
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
