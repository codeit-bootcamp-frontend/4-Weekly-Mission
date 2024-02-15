import React from "react";
import SearchBar from "../common/SearchBar/SearchBar";
import Card from "./ShareCard";
import styles from "./Container.module.css";
import Wrapper from "../common/layout/Wrapper";

function LinkContainer({ folderObject }) {
  if (!folderObject) {
    return null;
  }

  const { folder } = folderObject;
  const { links } = folder;

  return (
    <section className={styles.share_section}>
      <Wrapper className={styles.share_container}>
        <SearchBar />
        <div className={styles.card_list}>
          {links.map(link => (
            <Card key={link.id} link={link} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}

export default LinkContainer;
