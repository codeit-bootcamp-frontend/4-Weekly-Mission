import { Card } from "components";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";
import { FolderCard } from "pages/Folder/components/FolderCard";

export function CardList({ links, folders }) {
  const location = useLocation();
  return (
    <ul className={styles["l_row"]}>
      {/* 옵셔널 체이닝: 이걸 이용하지 않으면 새로고침시 에러가 발생한다 */}
      {links?.map((link) => (
        <li key={link.id} className={styles["l_col"]}>
          {location.pathname === "/shared" ? (
            <Card link={link} />
          ) : (
            <FolderCard link={link} folders={folders} />
          )}
        </li>
      ))}
    </ul>
  );
}
