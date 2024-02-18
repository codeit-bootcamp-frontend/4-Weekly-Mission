import styles from "./NoLink.module.css";

function NoLink() {
  return (
    <div className={styles.no_link_wrapper}>
      <h1>저장된 링크가 없습니다</h1>
    </div>
  );
}

export default NoLink;
