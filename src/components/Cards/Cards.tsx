import { LinkType } from '../../types/types';
import Card from '../Card/Card';
import styles from './Cards.module.scss';

const Cards = ({ links }: { links: LinkType[] }) => {
  return (
    <section className={styles.layout}>
      {links.map(link => {
        const { id, createdAt, url, title, imageSource } = link;
        return <Card key={id} createdAt={createdAt} url={url} title={title} imageURL={imageSource} />;
      })}
    </section>
  );
};

export default Cards;
