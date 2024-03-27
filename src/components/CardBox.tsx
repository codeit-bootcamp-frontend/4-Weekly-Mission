import styles from "./CardBox.module.css";
import Card from "./Card";
//type
import { LinksData, Link } from "../types/commonTypes";

function CardBox({ linksData }: { linksData: LinksData[] | Link[] }) {
  return (
    <div className={styles.container}>
      {linksData.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </div>
  );
}

export default CardBox;
