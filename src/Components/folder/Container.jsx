import React, { useState } from "react";
import Wrapper from "../common/layout/Wrapper";
import SearchBar from "../common/SearchBar/SearchBar";
import styles from "./Container.module.css";
import FolderCard from "./FolderCard";
import Folder from "./Folder";
import Banner from "./Banner";
import BlankCard from "../ui/BlankCard";
import { IoMdAdd } from "react-icons/io";
import FolderControlBox from "./FolderControlBox";

function FolderContainer({
  folder,
  cardLink,
  folderState,
  setFolderState,
}) {
  if (!folder) {
    return null;
  }
  if (!cardLink) {
    return null;
  }
  const { data: folderData } = folder;
  const { data: cardData } = cardLink;

  console.log(folderData);
  return (
    <section className={styles.folder_section}>
      <Wrapper className={styles.folder_container}>
        <SearchBar />
        <div className={styles.folder_filter}>
          <div className={styles.folder_list}>
            <Folder
              isSelected={folderState.id === null}
              onClick={() => setFolderState(null, "전체")}
            >
              전체
            </Folder>
            {folderData.map(data => (
              <Folder
                key={data.id}
                isSelected={folderState.id === data.id}
                onClick={() => setFolderState(data.id, data.name)}
              >
                {data.name}
              </Folder>
            ))}
          </div>
          <div className={styles.folder_add}>
            <p>폴더추가</p>
            <IoMdAdd className={styles.folder_add_icon} />
          </div>
        </div>
        <FolderControlBox isSelected={folderState.id === null}>
          <h2 className={styles.folder_title}>{folderState.name}</h2>
        </FolderControlBox>

        {cardData.length !== 0 ? (
          <div className={styles.card_list}>
            {cardData.map(data => (
              <FolderCard key={data.id} cardData={data} />
            ))}
          </div>
        ) : (
          <div className={styles.card_blank}>
            <BlankCard />
          </div>
        )}
      </Wrapper>
    </section>
  );
}

export default FolderContainer;
