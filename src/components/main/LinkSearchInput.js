import styles from "../../css/LinkSearchInput.module.css";
import search_icon from "../../image/search_icon.svg";
function LinkSearchInput() {
  return (
    <>
      <input
        className={styles.link_search_input}
        placeholder="링크를 검색해 보세요."
      ></input>
      <img src={search_icon} className={styles.search_icon} />
    </>
  );
}

export default LinkSearchInput;
