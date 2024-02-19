// import "./css/Main.css";
import styles from "./CardBox.module.css";
import Card from "./Card";

function CardBox({ linksData }) {
  return (
    <div className={styles.container}>
      {linksData.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </div>
  );
}

export default CardBox;
