import styles from "./LinksEmptyCase.module.scss";

export default function LinksEmptyCase() {
  return (
    <section className={styles.LinksEmptyCase}>
      <p className={styles.text}>저장된 링크가 없습니다</p>
    </section>
  );
}
