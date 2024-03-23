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
      links: string;
    }
  ]
  ;
}

function CardList({ links } : Props) {
  document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll(".link");
    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        if ((event.target as any).classList.contains("star-btn")) {
          event.preventDefault();
        }
      });
    });
  });
  return (
    <div className={styles["card-container"]}>
      <ul className={styles["grid"]}>
        {links &&
          links.map((link) => <CardListItem key={link.id} link={link} />)}
      </ul>
    </div>
  );
}

export default CardList;
