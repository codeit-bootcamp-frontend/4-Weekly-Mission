import { useState } from "react";
import * as S from "./Content.style";

import SearchBar from "../../../shared/components/search-bar/SearchBar";
import ContentCard from "../../../shared/components/content/ContentCard";

const Content = ({ folder, folderList }) => {
  const [currFolder, setCurrFolder] = useState(0);

  return (
    <S.Container>
      <SearchBar />
      {folderList && (
        <>
          <S.FolderBtn>
            <div className="folders">
              {folderList.map((folder) => {
                if (folder.id === currFolder) {
                  return (
                    <div
                      key={folder.id}
                      className="button active"
                      onClick={() => setCurrFolder(folder.id)}
                    >
                      <p className="text">{folder.name}</p>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={folder.id}
                      className="button"
                      onClick={() => setCurrFolder(folder.id)}
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
            <p className="title">{folderList[currFolder].name}</p>
            {folderList[currFolder].id !== 0 && (
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
      {folder ? (
        <div className="card-box">
          {folder.map((link) => (
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
