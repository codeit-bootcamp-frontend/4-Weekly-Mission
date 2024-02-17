import React, { useState, useEffect } from "react";
import Button from "components/Button/Button";
import { fetchUserFolderData, fetchUserLinkData } from "../../services/api";
import CardList from "components/CardList/CardList";
import Header from "./components/Header";
import SearchBar from "components/Input/SearchBar/SearchBar";
import style from "./folder.module.css";
import { shareIcon, penIcon, trashIcon } from "assets";
import { SearchResults } from "pages";

function FolderPage() {
  const ALL = "전체";
  const [buttonNames, setButtonNames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([null, "전체"]);
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
                  <Button
                    color={selectedCategory[1] === ALL ? "blue" : "folder"}
                    onClick={() => handleButtonClick(null, ALL)}
                  >
                    전체
                  </Button>
                  {buttonNames.map(({ id, name }) => (
                    <Button
                      key={id}
                      color={selectedCategory[1] === name ? "blue" : "folder"}
                      onClick={() => handleButtonClick(id, name)}
                    >
                      {name}
                    </Button>
                  ))}
                </div>
                <button className={style.addButton}>폴더 추가</button>
              </div>
              <div className={style.bar}>
                <div className={style.categoryName}>{selectedCategory[1]}</div>
                <div
                  className={`${style.barButtons} ${
                    selectedCategory[1] === ALL ? style.hidden : ""
                  }`}
                >
                  <button>
                    <img src={shareIcon} alt="공유 아이콘" />
                    공유
                  </button>
                  <button>
                    <img src={penIcon} alt="펜 아이콘" />
                    이름변경
                  </button>
                  <button>
                    <img src={trashIcon} alt="쓰레기통 아이콘" />
                    삭제
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
