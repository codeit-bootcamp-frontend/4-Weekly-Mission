import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import styles from "./FolderFilterBox.module.css";
import FolderFilterButton from "./FolderFilterButton";



function FolderFilterBox({ folderData }) {
  

  return (
    <div className={styles.link_filter_box}>
      <FolderFilterButton name="전체" />
      {folderData?.data.map(({ name, id }) => {
        return <FolderFilterButton name={name} key={id} />;
      })}
    </div>
  );
}

export default FolderFilterBox;
