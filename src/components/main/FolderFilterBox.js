import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import styles from "./FolderFilterBox.module.css";
import FolderFilterButton from "./FolderFilterButton";
import ShowAllLinksButton from "./ShowAllLinkButton";
function FolderFilterBox({ folderData, setFolderName }) {
  return (
    <div className={styles.link_filter_box}>
      <ShowAllLinksButton name="전체" setFolderName={setFolderName} />
      {folderData?.data.map(({ name, id }) => {
        return (
          <FolderFilterButton
            name={name}
            key={id}
            setFolderName={setFolderName}
          />
        );
      })}
    </div>
  );
}

export default FolderFilterBox;
