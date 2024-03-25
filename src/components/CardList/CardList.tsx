import { ObjectLink } from "@/constants/index.types";
import Card from "./Card/Card";
import styles from "./CardList.module.scss";

interface CardListProps {
  links?: ObjectLink[];
}

export default function CardList({ links }: CardListProps) {
  return (
    <section className={styles.CardList}>
      {links && links.map((link) => <Card link={link} key={link.id} />)}
    </section>
  );
}
