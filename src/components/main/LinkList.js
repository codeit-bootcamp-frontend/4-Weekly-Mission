import styles from "./LinkList.module.css";
import LinkItem from "./LinkItem";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";

function LinkList({ folderId, setFolderId }) {
  const [filterData, setFilterData] = useState(null);
  async function handleFilterButtonClick() {
    await setFolderId(folderId);
    await fetch(
      `https://bootcamp-api.codeit.kr/api/users/3/links?folderId=${folderId}`
    )
      .then((res) => res.json())
      .then((result) => setFilterData(result));
  }
  useEffect(() => {
    handleFilterButtonClick();
  }, [folderId]);

  console.log(filterData?.data);
  // console.log(filterData?.data.length);
  return (
    <div>
      {filterData?.data?.length == 0 ? (
        <div>링 크 가 없 습 니 다</div>
      ) : (
        filterData?.data?.map(({ title }) => {
          return <div>{title}</div>;
        })
      )}
    </div>
  );
}

export default LinkList;
