import Card from '../Card/Card';
import styles from './Cards.module.scss';

const Cards = ({ links }) => {
  return (
    <section className={styles.layout}>
      {links.map(link => {
        const { id, createdAt, url, title, description, imageSource } = link;
        return (
          <Card
            key={id}
            createdAt={createdAt}
            url={url}
            title={title}
            description={description}
            imageURL={imageSource}
          />
        );
      })}
    </section>
  );
};

export default Cards;
