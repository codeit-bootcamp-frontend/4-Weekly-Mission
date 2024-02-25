import { useEffect, useState } from "react";
import { getFetchData } from "../utils/getFetchData";
import Card from "./Card";
import linkIcon from "../img/linkIcon.svg";
import InputSearchLink from "./InputSearchLink";
import FolderList from "./FolderList";
import Modal from "./modal/Modal";

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
        console.log(`MainContainer의 getFetchData를 확인해 주세요`);
      }
    };

    getUserFolderData();
  }, [folderId, userFolderLinks]);

  const handleFolderListItemClick = (selectFolder) => {
    setFolderId(selectFolder.id);
    setFolderName(selectFolder.name);
  };

  const handleSearchInputChange = (value) => {
    // searchInput의 값을 가져와서 value값과 link의 title & description 값이 includes = true 값이 나오면 해당하는 link를 가져오는 항목 추가 예정
    console.log(value);
  };

  return (
    <>
      <div className="topContainer">
        <form className="topContainer__addLinkForm">
          <img
            className="topContainer__addLinkForm--icon"
            src={linkIcon}
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
        <InputSearchLink onChange={handleSearchInputChange} />
        <div className="container__myFolders">
          <div className="container__myFolders--folderList">
            <FolderList handleFolderListItemClick={handleFolderListItemClick} />
            <div className="container__myFolders--addFolder">폴더 추가</div>
          </div>
          <div className="container__myFolders--folderName">
            <h2>{folderName}</h2>
            <div>
              <Modal
                modalName={"공유"}
                modalContent={"공유할 content로 변경예정"}
                modalSnsBtn={true}
              />
              <Modal
                modalName={"이름 변경"}
                modalInput={"변경할 폴더 이름으로 변경예정"}
                modalBtn={"변경하기"}
              />
              <Modal
                modalName={"삭제"}
                modalContent={"삭제할 content로 변경예정"}
                modalBtn={"삭제하기"}
              />
            </div>
          </div>
          {sortedLinks.length === 0 ? (
            <div className="container__noLink">저장된 링크가 없습니다</div>
          ) : (
            <div className="container__cardWrap">
              {sortedLinks.map((link) => (
                <Card key={link.id} folder={link} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainContainer;
