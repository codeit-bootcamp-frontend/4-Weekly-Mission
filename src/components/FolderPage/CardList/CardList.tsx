import CardListItem from "components/FolderPage/CardListItem/CardListItem";
import styles from "./CardList.module.css";


interface Props{
  links: [{
    id: number;
    url: string;
    created_at: string;
    image_source: string;
    title: string;
    description: string;
  }];
  setModal: (value: string) => void;
   setLink: (link: string) => void;
}
function CardList({ links, setModal, setLink } : Props) {
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
