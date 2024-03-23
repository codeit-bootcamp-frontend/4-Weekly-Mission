import CardListItem from "components/SharedPage/CardListItem/CardListItem";
import styles from "./CardList.module.css";



interface Props {
  links: [
    {
      id: number,
      url: string,
      createdAt: string,
      imageSource: string,
      title: string,
      description: string,
    }
  ];
  setModal: (value: string) => void;
  setLink: (link: string) => void;
}

function CardList({ links, setModal, setLink } : Props) {
  return (
    <div className={styles["card-container"]}>
      <ul className={styles["grid"]}>
        {links &&
          links?.map((link) => <CardListItem  setModal={setModal}
              setLink={setLink}key={link.id} link={link} />)}
      </ul>
    </div>
  );
}

export default CardList;
