import { useEffect, useState } from "react";
import FolderPageLinkItem from "./FolderPageLinkItem";
import styles from "./LinkList.module.css";
function LinkList({ searchParams }) {
  const [filterData, setFilterData] = useState(null);
  async function handleFilterClick() {
    await fetch(
      `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${searchParams.get(
        "folderId"
      )}`
    )
      .then((res) => res.json())
      .then((result) => setFilterData(result));
  }

  useEffect(() => {
    handleFilterClick();
  }, [searchParams]);

  console.log(filterData);
  return (
    <div>
      {filterData?.data?.length === 0 ? (
        <div className={styles.no_link_wrapper}>저장된 링크가 없습니다</div>
      ) : (
        <div className={styles.item_card_grid}>
          {filterData?.data?.map(
            ({ image_source, description, created_at, url }) => {
              return (
                <FolderPageLinkItem
                  description={description}
                  image_source={image_source}
                  created_at={created_at}
                  url={url}
                />
              );
            }
          )}
        </div>
      )}
    </div>
  );
}

export default LinkList;
