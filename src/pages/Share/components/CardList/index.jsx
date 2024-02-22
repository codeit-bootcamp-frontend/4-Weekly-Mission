import { Card } from "../Card";
import styles from "./styles.module.css";

export function CardList({ links }) {
  return (
    <ul className={styles["l_row"]}>
      {/* 옵셔널 체이닝: 이걸 이용하지 않으면 새로고침시 에러가 발생한다 */}
      {links?.map((link) => (
        <li key={link.id} className={styles["l_col"]}>
          <Card link={link} />
        </li>
      ))}
    </ul>
  );
}
