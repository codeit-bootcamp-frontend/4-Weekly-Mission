import React from "react";
import Wrapper from "../common/layout/Wrapper";
import SearchBar from "../common/SearchBar/SearchBar";
import styles from "./Container.module.css";
import FolderCard from "./FolderCard";

function FolderContainer({ folder, cardLink }) {
  if (!folder) {
    return null;
  }
  const { data: folderData } = folder;
  const { data: cardData } = cardLink;

  return (
    <section className={styles.folder_section}>
      <Wrapper className={styles.folder_container}>
        <SearchBar />
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
