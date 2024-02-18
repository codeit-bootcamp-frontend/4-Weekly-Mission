import { useEffect, useState } from "react";
import { getFetchData } from "../utils/getFetchData";
import Card from "./Card";
import LinkIcon from "../img/LinkIcon.svg";
import InputSearchLink from "./InputSearchLink";
import FolderList from "./FolderList";

const MainContainer = () => {
  const [links, setLinks] = useState([]);
  const [folderId, setFolderId] = useState(null);
  const [folderName, setFolderName] = useState("전체");

  const sortedLinks = [...links].sort((a, b) => a.id - b.id);
  const userFolderLinks = folderId ? `?folderId=${folderId}` : "";

  useEffect(() => {
    const getUserFolderData = async () => {
      try {
        const result = await getFetchData(
          `/api/users/11/links${userFolderLinks}`
        );
        setLinks(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUserFolderData();
  }, [folderId]);

  const handleFolderListItemClick = (selectFolder) => {
    setFolderId(selectFolder.folder.id);
    setFolderName(selectFolder.folder.name);
  };

  return (
    <>
      <div className="topContainer">
        <form className="topContainer__addLinkForm">
          <img
            className="topContainer__addLinkForm--icon"
            src={LinkIcon}
            alt="LinkIcon"
          />
          <input
            className="topContainer__addLinkForm--input"
            placeholder="링크를 추가해 보세요"
          />
          <button className="topContainer__addLinkForm--button">
            추가하기
          </button>
        </form>
      </div>
      <div className="container">
        <InputSearchLink />
        <div className="container__myFolders">
          <div className="container__myFolders--folderList">
            <FolderList handleFolderListItemClick={handleFolderListItemClick} />
            <div className="container__myFolders--addFolder">폴더 추가</div>
          </div>
          <div className="container__myFolders--folderName">
            <h2>{folderName}</h2>
            <div>공유, 이름변경 삭제(추후 구현)</div>
          </div>
          {sortedLinks.length === 0 ? (
            <div className="container__noLink">저장된 링크가 없습니다</div>
          ) : (
            <div className="container__cardWrap">
              {sortedLinks.map((link) => {
                return <Card key={link.id} folder={link} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainContainer;
