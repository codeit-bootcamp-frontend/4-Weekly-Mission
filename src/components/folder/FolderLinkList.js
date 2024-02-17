import { useEffect, useState } from "react";
import { GetAllLinks, GetFolderList, GetLinks } from "../../data-access/api";
import "./FolderLinkList.css";
import addButton from "../../images/add.png";
import ShareRenameDelete from "./ShareRenameDelete";
import LinkList from "./LinkList";

function FolderLinkList() {
  const [currentFolderName, setCurrentFolderName] = useState("전체");
  const [folderListData, setFolderListData] = useState([]);
  const [linksData, setLinksData] = useState([]);

  useEffect(() => {
    const GetMyFolderList = async () => {
      const result = await GetFolderList();
      const { data } = result;
      setFolderListData(data);
    };
    const GetInitialLinks = async () => {
      const result = await GetAllLinks();
      const { data } = result;
      setLinksData(data);
    };
    try {
      GetMyFolderList();
      GetInitialLinks();
    } catch (err) {
      console.log(err);
    }
  }, []);
  const NamedButton = ({ children, onClick, folderData }) => {
    const DataNameClick = () => onClick(folderData);
    return (
      <button className="folder-button" onClick={DataNameClick}>
        {children}
      </button>
    );
  };

  const handleDataNameClick = async (folderData) => {
    const result = await GetLinks(folderData.id);
    const { data } = result;
    setLinksData(data);
    setCurrentFolderName(folderData.name);
  };
  const handleAllButtonClick = async () => {
    const result = await GetAllLinks();
    const { data } = result;
    setLinksData(data);
    setCurrentFolderName("전체");
  };
  return (
    <>
      <button className="floating-add-folder">폴더 추가+</button>
      {folderListData.length !== 0 || linksData.length !== 0 ? (
        <div>
          <div className="folder-buttons">
            <div>
              <button className="all-button" onClick={handleAllButtonClick}>
                전체
              </button>
              {/* 컴포넌트로 따로 빼고 싶지만 setLinksData와 연결되어 있어서 못뺌 */}
              {folderListData.map((data) => {
                return (
                  <NamedButton
                    key={data.id}
                    onClick={handleDataNameClick}
                    folderData={data}
                  >
                    {data.name}
                  </NamedButton>
                );
              })}
            </div>
            <button className="add-folder">
              폴더추가 <img src={addButton} />
            </button>
          </div>
          <div className="current-folder-name-share-rename-delete">
            <div className="current-folder-name">{currentFolderName}</div>
            {currentFolderName == "전체" ? <></> : <ShareRenameDelete />}
          </div>
          {linksData.length == 0 ? (
            <div className="no-links-data"></div>
          ) : (
            <></>
          )}

          <LinkList linksData={linksData} />
        </div>
      ) : (
        <div className="no-link">
          <div>저장된 링크가 없습니다.</div>
        </div>
      )}
    </>
  );
}
export default FolderLinkList;
