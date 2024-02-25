import style from "../../styles/CommonContentSearch.module.css";

// CommonContentSearch -> 링크 검색 부분(기능은 추후 구현)
function CommonContentSearch() {
  return (
    <div className={style.content_search}>
      <input type="text" placeholder="링크를 검색해 보세요." readOnly />
    </div>
  );
}

export default CommonContentSearch;
