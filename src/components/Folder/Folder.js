import { useState, useEffect } from "react";
import { useGetFolderById } from "../../hooks/useGetFolder";
import SearchBar from "../SearchBar/SearchBar";
import "./Folder.css";
import SelectedOption from "../SelectedOption/SelectedOption";
import FolderList from "../FolderList/FolderList";
import Card from "../Card/Card";
import CardImage from "../CardImage/CardImage";
import CardContent from "../CardContent/CardContent";
import getElapsedTime from "../../utils/getElapsedTime";
import { format } from "date-fns";
import CardList from "../CardList/CardList";

function Folder() {
  const { data } = useGetFolderById();
  const dataArray = data?.data;

  const [activeButton, setActiveButton] = useState("전체");
  const [selectedFolder, setSelectedFolder] = useState("");
  const [folderLinks, setFolderLinks] = useState([]);

  useEffect(() => {
    if (selectedFolder === "" && dataArray && dataArray.length > 0) {
      setSelectedFolder("전체");
    }
  }, [selectedFolder, dataArray]);

  useEffect(() => {
    if (selectedFolder && dataArray) {
      const folderId = dataArray.find(
        (item) => item.name === selectedFolder
      )?.id;
      if (folderId) {
        fetch(
          `https://bootcamp-api.codeit.kr/api/users/4/links?folderId=${folderId}`
        )
          .then((response) => response.json())
          .then((data) => {
            setFolderLinks(data.data);
          })
          .catch((error) => {
            console.error("Error fetching folder links:", error);
          });
      }
    }
  }, [selectedFolder, dataArray]);

  const handleButtonClick = (name) => {
    setActiveButton(name);
    setSelectedFolder(name);
  };

  let renderedButtons;

  if (dataArray && Array.isArray(dataArray)) {
    renderedButtons = dataArray.map((item) => (
      <button
        key={item.id}
        className={activeButton === item.name ? "active" : ""}
        onClick={() => handleButtonClick(item.name)}
      >
        {item.name}
      </button>
    ));
  }

  return (
    <div className="Folder">
      <div className="Folder-items">
        <SearchBar />
        <div className="Folder-lists-container">
          <div className="Folder-lists">
            <button
              className={activeButton === "전체" ? "active" : ""}
              onClick={() => handleButtonClick("전체")}
            >
              전체
            </button>
            {renderedButtons}
          </div>
          <div className="Folder-add">
            <span className="Folder-add-text">폴더 추가</span>
            <img
              className="Folder-add-image"
              src="images/add.svg"
              alt="폴더 추가 이미지"
            />
          </div>
        </div>
        {selectedFolder && (
          <SelectedOption
            selectedFolder={selectedFolder}
            activeButton={activeButton}
          />
        )}
        {selectedFolder === "전체" ? (
          <FolderList />
        ) : (
          <CardList>
            {folderLinks.map((link) => (
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <Card>
                  <CardImage
                    imageSource={link.image_source}
                    alt={`${link.title}의 이미지`}
                  />
                  <CardContent
                    elapsedTime={getElapsedTime(link.created_at)}
                    description={link.description}
                    createdAt={format(
                      new Date(link.created_at),
                      "yyyy. MM. dd"
                    )}
                  />
                </Card>
              </a>
            ))}
          </CardList>
        )}
      </div>
    </div>
  );
}

export default Folder;
