import styles from "./LinkFilterButton.module.css";

function LinkFilterButton({ filterName }) {
  return <button className={styles.link_filter_button}>{filterName}</button>;
}

export default LinkFilterButton;
