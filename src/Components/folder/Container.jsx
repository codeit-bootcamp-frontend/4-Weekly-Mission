import React from "react";
import Wrapper from "../common/layout/Wrapper";
import SearchBar from "../common/SearchBar/SearchBar";

function FolderContainer() {
  return (
    <section className={styles.share_section}>
      <Wrapper className={styles.share_container}>
        <SearchBar />
      </Wrapper>
    </section>
  );
}

export default FolderContainer;
