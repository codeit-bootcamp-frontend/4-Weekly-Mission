import React, { useState, useEffect } from "react";
import { fetchUserFolderData, fetchUserLinkData } from "../../services/api";
import CardList from "components/CardList/CardList";
import Header from "./components/Header";
import SearchBar from "components/Input/SearchBar/SearchBar";
import style from "./folder.module.css";
import { shareIcon, penIcon, trashIcon } from "assets";
import { SearchResults } from "pages";
import FolderButton from "components/Button/FolderButton/FolderButton";

import { ReactComponent as AddIcon } from "assets/images/ic_add.svg";

function FolderPage() {
  const ALL = "전체";
  const [buttonNames, setButtonNames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([null, ALL]);
  const [folderData, setFolderData] = useState([]);

  /**
   * 해당 유저의 folder 목록 데이터들을 가져옵니다.
   * @param {number} userId
   */
  const fetchFolderData = async (userId) => {
    const data = await fetchUserFolderData(1);
    setButtonNames(data);
  };

  /**
   * 해당 유저의 해당 폴더에 있는 링크 데이터들을 가져와 보여줄 데이터를 변경합니다.
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
   * @param {string} category
   */
  const handleButtonClick = (categoryId, category) => {
    setSelectedCategory([categoryId, category]);
  };

  useEffect(() => {
    fetchFolderData(4);
  }, []);

  useEffect(() => {
    fetchData(4, selectedCategory[0]);
  }, [selectedCategory]);

  return (
    <div>
      <Header />
      <div className={style.container}>
        <div className={style.content}>
          <SearchBar />

          {buttonNames.length ? (
            <div>
              <div className={style.category}>
                <div className={style.categoryButtons}>
                  <FolderButton
                    ischecked={selectedCategory[1] === ALL ? true : false}
                    onClick={() => handleButtonClick(null, ALL)}
                  >
                    전체
                  </FolderButton>
                  {buttonNames.map(({ id, name }) => (
                    <FolderButton
                      ischecked={selectedCategory[1] === name ? true : false}
                      onClick={() => handleButtonClick(id, name)}
                    >
                      {name}
                    </FolderButton>
                  ))}
                </div>

                <button className={style.addButton}>
                  <span>폴더 추가</span>
                  <AddIcon className={style.addIcon} />
                </button>
              </div>
              <div className={style.bar}>
                <div className={style.categoryName}>{selectedCategory[1]}</div>
                <div
                  className={`${style.barButtons} ${
                    selectedCategory[1] === ALL ? style.hidden : ""
                  }`}
                >
                  <button className={style.barButton}>
                    <img src={shareIcon} alt="공유 아이콘" />
                    <span>공유</span>
                  </button>
                  <button className={style.barButton}>
                    <img src={penIcon} alt="펜 아이콘" />
                    <span>이름변경</span>
                  </button>
                  <button className={style.barButton}>
                    <img src={trashIcon} alt="쓰레기통 아이콘" />
                    <span>삭제</span>
                  </button>
                </div>
              </div>

              <CardList items={folderData} />
            </div>
          ) : (
            <SearchResults />
          )}
        </div>
      </div>
    </div>
  );
}

export default FolderPage;
