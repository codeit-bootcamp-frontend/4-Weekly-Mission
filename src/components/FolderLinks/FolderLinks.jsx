import styles from "./FolderLinks.module.css";

import Card from "../Card/Card";
import EditableCard from "../Card/EditableCard";

const FolderLinks = ({ links, editable }) => {
  return (
    <div className={styles.FolderLinks}>
      <ul className={styles.list}>
        {links.map((item) => {
          const { id, url } = item;
          return (
            <li key={id} className={styles.item}>
              <a href={url} target="_blank" rel="noreferrer">
                {editable ? <EditableCard {...item} /> : <Card {...item} />}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FolderLinks;
