import { useEffect, useRef, useState } from "react";
import styles from "./FolderFilterBox.module.css";
import FolderFilterButton from "./FolderFilterButton";
import ShowAllLinksButton from "./ShowAllLinkButton";
function FolderFilterBox({
  folderData,
  setFolderName,
  setFolderId,
  folderId,
  setSearchParams,
  setIsShowFuncButtonBox,
}) {
  const [isFilterActive, setIsFilterActive] = useState([]);
  async function handleFilterClick() {
    await fetch(`https://bootcamp-api.codeit.kr/api/users/1/folders`)
      .then((res) => res.json())
      .then((result) =>
        setIsFilterActive(new Array(result.data.length + 1).fill(false))
      );
  }

  useEffect(() => {
    handleFilterClick();
  }, []);

  console.log(isFilterActive);

  return (
    <div className={styles.link_filter_box}>
      <ShowAllLinksButton
        name="전체"
        setFolderName={setFolderName}
        setFolderId={setFolderId}
        setSearchParams={setSearchParams}
        buttonIndex={0}
        setIsFilterActive={setIsFilterActive}
        isFilterActive={isFilterActive}
        setIsShowFuncButtonBox={setIsShowFuncButtonBox}
      />
      {folderData?.data.map(({ name, id }, i) => {
        return (
          <FolderFilterButton
            name={name}
            key={id}
            id={id}
            setFolderName={setFolderName}
            folderId={folderId}
            setFolderId={setFolderId}
            setSearchParams={setSearchParams}
            buttonIndex={i + 1}
            setIsFilterActive={setIsFilterActive}
            isFilterActive={isFilterActive}
            setIsShowFuncButtonBox={setIsShowFuncButtonBox}
          />
        );
      })}
    </div>
  );
}

export default FolderFilterBox;
