import { useEffect, useState } from "react";
import { getFetchData } from "../utils/getFetchData";
import Card from "./Card";
import LinkIcon from "../img/LinkIcon.svg";
import InputSearchLink from "./InputSearchLink";
import FolderList from "./FolderList";

const MainContainer = () => {
  const [folders, setFolders] = useState([]);
  const sortedFolders = [...folders].sort((a, b) => a.id - b.id);

  useEffect(() => {
    const getUserFolderData = async () => {
      try {
        const result = await getFetchData(`/api/users/1/links`);
        setFolders(result.data);

        // fetch("https://bootcamp-api.codeit.kr/api/users/1/links?folderId")
      } catch (error) {
        console.error(error);
      }
    };

    getUserFolderData();
  }, []);

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
        <FolderList />
        <div className="container__cardWrap">
          {sortedFolders.map((folder) => {
            return <Card key={folder.id} folder={folder} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MainContainer;
