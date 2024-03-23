import { LinkProps } from "@/constants/index.types";
import Card from "./Card/Card";
import styles from "./CardList.module.scss";

interface CardListProps {
  links?: LinkProps[] | undefined;
}

export default function CardList({ links }: CardListProps) {
  return (
    <section className={styles.CardList}>
      {links &&
        links.map((link: LinkProps) => {
          return <Card link={link} key={link.id} />;
        })}
    </section>
  );
}
