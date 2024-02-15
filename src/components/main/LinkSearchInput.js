import styles from "./LinkSearchInput.module.css";
function LinkSearchInput() {
  return (
    <>
      <input
        className={styles.link_search_input}
        placeholder="링크를 검색해 보세요."
      ></input>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/search_icon.svg`}
        className={styles.search_icon}
        alt="search_icon"
      />
    </>
  );
}

export default LinkSearchInput;
