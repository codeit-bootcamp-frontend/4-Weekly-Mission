import React, { useEffect, useState } from "react";
import { getUserFolder, getFolderLink } from "../utils/Api";
import Banner from "../components/folder/Banner";
import SearchBar from "../components/common/SearchBar/SearchBar";
import FolderCategoriseArea from "../components/folder/FolderCategoryArea";
import FolderTitleArea from "../components/folder/FolderTitleArea";
import FolderCardArea from "../components/folder/FolderCardArea";
import Footer from "../components/common/footer/Footer";

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
        <FolderCardArea links={links} />
      </section>
      <Footer />
    </>
  );
}

export default Folder;
