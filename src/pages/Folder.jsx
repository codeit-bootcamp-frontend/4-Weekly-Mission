import React, { useEffect, useState } from "react";
import { getFolderLink } from "../utils/Api";
import Banner from "../components/folder/Banner";
import SearchBar from "../components/common/SearchBar";
import FolderCategoryList from "../components/folder/FolderCategoryList";
import FolderTitle from "../components/folder/FolderTitle";
import FolderCardList from "../components/folder/FolderCardList";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import FolderAddButton from "../components/folder/FolderAddButton";
import FolderOption from "../components/folder/FolderOption";

const Section = styled.section`
  max-width: 1060px;
  background-color: var(--color-white);
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

function Folder() {
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
    getFolderLink(folderState.id).then(setLinks);
  }, [folderState]);

  return (
    <>
      <Banner />
      <Section>
        <SearchBar />
      </Section>
      <Section>
        <FolderCategoryList />
        <FolderAddButton />
      </Section>
      <Section>
        <FolderTitle title={folderState.name} />
        <FolderOption />
      </Section>
      <Section>
        <FolderCardList links={links} />
      </Section>
      <Footer />
    </>
  );
}

export default Folder;
