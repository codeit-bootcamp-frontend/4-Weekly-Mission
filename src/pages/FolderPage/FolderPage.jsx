import React, { useState, useEffect } from "react";
import Button from "components/Button/Button";
import { fetchUserFolderData, fetchUserLinkData } from "../../services/api";
import CardList from "components/CardList/CardList";

function FolderPage() {
  const [buttonNames, setButtonNames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([null, "전체"]);
  const [folderData, setFolderData] = useState([]);

  /**
   * 해당 유저의 folder 목록 데이터들을 가져옵니다.
   * @param {number} userId
   */
  const fetchFolderData = async (userId) => {
    const data = await fetchUserFolderData(userId);
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
      {buttonNames.length ? (
        <div>
          <div>
            <Button color={selectedCategory[1] === "전체" ? "blue" : "folder"} onClick={() => handleButtonClick(null, "전체")}>
              전체
            </Button>
            {buttonNames.map(({ id, name }) => (
              <Button key={id} color={selectedCategory[1] === name ? "blue" : "folder"} onClick={() => handleButtonClick(id, name)}>
                {name}
              </Button>
            ))}
          </div>
          <div>
            <CardList items={folderData} />
          </div>
        </div>
      ) : (
        <div>없음</div>
      )}
    </div>
  );
}

export default FolderPage;
