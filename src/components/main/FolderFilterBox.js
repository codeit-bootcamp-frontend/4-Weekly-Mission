import { useFetch } from "../../hooks/useFetch";
import styles from "./FolderFilterBox.module.css";
import FolderFilterButton from "./FolderFilterButton";
function FolderFilterBox() {

  const folderData = useFetch()
  const filterButtonDatas = {
    filters: [
      { filterName: "전체", id: 0 },
      { filterName: "⭐️ 즐겨찾기", id: 1 },
      { filterName: "코딩 팁", id: 2 },
      { filterName: "채용 사이트", id: 3 },
      { filterName: "나만의 장소", id: 4 },
    ],
  };
  return (
    <div className={styles.link_filter_box}>
      {filterButtonDatas.filters.map(({ filterName, id }) => {
        return <div>1</div>;
      })}
    </div>
  );
}

export default FolderFilterBox;
