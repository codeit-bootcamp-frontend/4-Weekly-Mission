import { useEffect, useState } from "react";
import * as S from "./Content.style";

import SearchBar from "../../../shared/components/search-bar/SearchBar";
import ContentCard from "../../../shared/components/content/ContentCard";

const Content = ({ folder, folderList }) => {
  const [currFolder, setCurrFolder] = useState("전체");
  const [currData, setCurrData] = useState(folder);

  const getFolderAll = async () => {
    await fetch("https://bootcamp-api.codeit.kr/api/users/1/links")
      .then((res) => res.json())
      .then((data) => {
        setCurrData(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const getFolder = async (folderId) => {
    await fetch(
      `https://bootcamp-api.codeit.kr//api/users/1/links?folderId=${folderId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrData(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    if (currFolder === "전체") {
      getFolderAll();
    } else {
      getFolder(currFolder);
      for (const folder of folderList) {
        if (folder.id === currFolder) {
          setCurrFolder(folder.name);
        }
      }
    }
  }, [currFolder]);

  return (
    <S.Container>
      <SearchBar />
      {folderList && (
        <>
          <S.FolderBtn>
            <div className="folders">
              {folderList.map((folder) => {
                if (folder.name === currFolder) {
                  return (
                    <div
                      key={folder.id}
                      className="button active"
                      onClick={() => setCurrFolder(folder.name)}
                    >
                      <p className="text">{folder.name}</p>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={folder.id}
                      className="button"
                      onClick={() => setCurrFolder(folder.name)}
                    >
                      <p className="text">{folder.name}</p>
                    </div>
                  );
                }
              })}
            </div>
            <div className="add-btn">
              <p className="text">폴더 추가</p>
              <img
                className="icon"
                src="/assets/folder/plus.svg"
                alt="폴더 추가"
              />
            </div>
          </S.FolderBtn>
          <S.CurrFolder>
            <p className="title">{currFolder}</p>
            {currFolder !== "전체" && (
              <div className="buttons">
                <div className="button">
                  <img src="/assets/folder/share.svg" alt="공유" />
                  <p className="text">공유</p>
                </div>
                <div className="button">
                  <img src="/assets/folder/pen.svg" alt="이름 변경" />
                  <p className="text">이름 변경</p>
                </div>
                <div className="button">
                  <img src="/assets/folder/delete.svg" alt="삭제" />
                  <p className="text">삭제</p>
                </div>
              </div>
            )}
          </S.CurrFolder>
        </>
      )}
      {currData?.length > 0 ? (
        <div className="card-box">
          {currData?.map((link) => (
            <ContentCard key={link.id} link={link} />
          ))}
        </div>
      ) : (
        <S.NoLinks>저장된 링크가 없습니다</S.NoLinks>
      )}
    </S.Container>
  );
};

export default Content;
