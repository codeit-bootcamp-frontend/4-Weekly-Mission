import React, { useEffect, useState } from "react";
import { getUserFolder, getFolderLink } from "../utils/Api";
import FolderContainer from "../components/folder/Container";
import Banner from "../components/folder/Banner";
import SearchBar from "../components/common/SearchBar/SearchBar";
import FolderItem from "../components/folder/FolderCategoryItem";

import FolderCard from "../components/folder/FolderCard";
import BlankCard from "../components/ui/BlankCard";
import FolderCategoriseArea from "../components/folder/FolderCategoryArea";
import FolderTitleArea from "../components/folder/FolderTitleArea";

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
        <SearchBar />
        <FolderCategoriseArea folders={folders} />
        <FolderTitleArea title={folderState.name} />

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
      </section>
    </>
  );
}

export default Folder;
