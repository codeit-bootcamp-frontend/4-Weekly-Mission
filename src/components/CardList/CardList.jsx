import Card from "./Card/Card";
import styles from "./CardList.module.scss";

export default function CardList({ links }) {
  return (
    <section className={styles.CardList}>
      {links &&
        links.map((link) => {
          return <Card link={link} key={link.id} />;
        })}
    </section>
  );
}
