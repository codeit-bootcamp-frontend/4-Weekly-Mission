import CardListItem from "components/FolderPage/CardListItem/CardListItem";
import styles from "./CardList.module.css";

function CardList({ links, setModal, setLink }) {
  return (
    <div className={styles["card-container"]}>
      <ul className={styles["grid"]}>
        {links &&
          links.map((link) => (
            <CardListItem
              key={link.id}
              link={link}
              setModal={setModal}
              setLink={setLink}
            />
          ))}
      </ul>
    </div>
  );
}

export default CardList;
