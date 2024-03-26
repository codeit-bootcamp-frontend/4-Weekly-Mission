import Card from './Card/Card';
import useFetchCardsData from '../../../hooks/useFetchCardsData';
import noCardImg from '../../../images/no-image.svg';
import { Link } from 'react-router-dom';
import styles from './SharedCards.module.scss';

function SharedCards() {
  const cardsData = useFetchCardsData();

  const handleImageError = (e) => {
    e.target.src = { noCardImg };
  };

  return cardsData ? (
    <div className={styles.cardList}>
      <div className={styles.cardsContainer}>
        {cardsData.map(
          ({
            url,
            id,
            imageSource,
            title,
            timePassed,
            description,
            formattedDate,
          }) => (
            <Link to={url} key={id}>
              <Card
                imageSource={imageSource}
                title={title}
                timePasse={timePassed}
                description={description}
                formattedDate={formattedDate}
                handleImageError={handleImageError}
              />
            </Link>
          )
        )}
      </div>
    </div>
  ) : (
    <h1>데이터가 없습니다</h1>
  );
}

export default SharedCards;
