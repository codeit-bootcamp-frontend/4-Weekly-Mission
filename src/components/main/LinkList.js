import { useEffect, useState } from "react";
import NoLink from "./NoLink";
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

  return (
    <div>
      {filterData?.data?.length == 0 ? (
        <NoLink />
      ) : (
        filterData?.data?.map(({ title }, i) => {
          return <div key={i}>{title}</div>;
        })
      )}
    </div>
  );
}

export default LinkList;
