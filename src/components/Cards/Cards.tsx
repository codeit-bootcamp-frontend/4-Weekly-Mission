import Card from '../Card/Card';
import { CardsProps } from './Cards.types';
import styles from './Cards.module.scss';

const Cards = ({ links, bookmark = false, popover = false }: CardsProps) => {
  return (
    <section className={styles.layout}>
      {links.map(link => {
        const { id, createdAt, url, title, imageSource } = link;
        return (
          <Card
            key={id}
            createdAt={createdAt}
            url={url}
            title={title}
            imageURL={imageSource}
            bookmark={bookmark}
            popover={popover}
          />
        );
      })}
    </section>
  );
};

export default Cards;
