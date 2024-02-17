import React, { useState } from "react";
import Wrapper from "../common/layout/Wrapper";
import SearchBar from "../common/SearchBar/SearchBar";
import styles from "./Container.module.css";
import FolderCard from "./FolderCard";
import Folder from "./Folder";

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

  return (
    <section className={styles.folder_section}>
      <Wrapper className={styles.folder_container}>
        <SearchBar />
        <div>
          <ul className={styles.folder_list}>
            <li
              className={styles.folder}
              onClick={() => setFolderState()}
            >
              전체
            </li>
            {folderData.map(data => (
              <Folder
                key={data.id}
                folderData={data}
                className={styles.folder}
                setFolderState={setFolderState}
              />
            ))}
          </ul>
          <div></div>
        </div>
        <div className={styles.card_list}>
          {cardData.map(data => (
            <FolderCard key={data.id} cardData={data} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}

export default FolderContainer;
