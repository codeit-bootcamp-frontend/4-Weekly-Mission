import styles from "./FolderLinks.module.css";

import Card from "../Card/Card";

const FolderLinks = ({ links }) => {
  return (
    <div className={styles.FolderLinks}>
      <ul className={styles.list}>
        {links.map((item) => {
          const { id, url } = item;
          return (
            <li key={id} className={styles.item}>
              <a href={url} target="_blank" rel="noreferrer">
                <Card {...item} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FolderLinks;
