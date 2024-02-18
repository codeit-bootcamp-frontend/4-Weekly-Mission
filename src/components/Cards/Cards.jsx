import Card from '../Card/Card';

import * as S from './Cards.styles';

const Cards = ({ links }) => {
  return (
    <S.CardsSection>
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
    </S.CardsSection>
  );
};

export default Cards;
