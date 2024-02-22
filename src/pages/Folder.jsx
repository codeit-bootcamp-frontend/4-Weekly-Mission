import React, { useEffect, useState } from "react";
import { getUserFolder, getFolderLink } from "../utils/Api";
import FolderContainer from "../components/folder/Container";
import Banner from "../components/folder/Banner";
import SearchBar from "../components/common/SearchBar/SearchBar";
import FolderItem from "../components/folder/FolderCategoryItem";

import FolderCard from "../components/folder/FolderCard";
import BlankCard from "../components/ui/BlankCard";
import FolderAddButton from "../components/folder/FolderAddButton";
import FolderCategoriseArea from "../components/folder/\bFolderCategoriseArea";

function Folder() {
  const [folders, setFolders] = useState(null);
  const [links, setLinks] = useState([]);
  const [folderState, setFolderState] = useState({
    id: null,
    name: "전체",
  });

  console.log(links);

  const filterHandler = (id, name) => {
    // 새로운 값과 기존 값이 동일한지 확인
    if (folderState.name === name && folderState.id === id) {
      // 동일하다면 '전체'와 null로 업데이트
      setFolderState({
        id: null,
        name: "전체",
      });
    } else {
      // 다르다면 새로운 값으로 업데이트
      setFolderState({
        id: id,
        name: name,
      });
    }
  };

  useEffect(() => {
    getUserFolder().then(setFolders);
  }, []);

  useEffect(() => {
    getFolderLink(folderState.id).then(setLinks);
  }, [folderState]);

  return (
    <>
      <Banner />
      <section>
        <div>
          <SearchBar />
          <FolderCategoriseArea folders={folders} />
          <div className="3">
            <h2>{folderState.name}</h2>
            <div>
              <div>
                <img src="/Icons/share.svg" alt="공유" />
                <p>공유</p>
              </div>
              <div>
                <img src="/Icons/pen.svg" alt="이름 변경" />
                <p>이름 변경</p>
              </div>
              <div>
                <img src="/Icons/delete.svg" alt="삭제" />
                <p>삭제</p>
              </div>
            </div>
          </div>

          {links.length !== 0 ? (
            <div>
              {links.data.map(link => (
                <FolderCard key={link.id} cardData={link} />
              ))}
            </div>
          ) : (
            <div>
              <BlankCard />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Folder;
