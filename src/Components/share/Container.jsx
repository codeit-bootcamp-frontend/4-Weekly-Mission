import React from "react";
import SearchBar from "../common/SearchBar";
import ShareCard from "./ShareCard";
import styles from "./Container.module.css";

function LinkContainer({ folderObject }) {
  if (!folderObject) {
    return null;
  }

  const { folder } = folderObject;
  const { links } = folder;
  console.log(links);

  return (
    <section className={styles.share_section}>
      <SearchBar />
      {/* <div className={styles.card_list}>
          {links.map(link => (
            <ShareCard key={link.id} link={link} />
          ))}
        </div> */}
    </section>
  );
}

export default LinkContainer;
